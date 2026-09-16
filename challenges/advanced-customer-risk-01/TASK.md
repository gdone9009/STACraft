# TASK — 고객이탈·매출위험 조기경보

## 0. 상황

오늘은 **2026-09-15**입니다. 가상기업 FlowPilot Cloud는 기업용 업무자동화 SaaS를 판매합니다.

경영회의는 내일 오전입니다. CEO는 다음 질문에 답할 자료를 요청했습니다.

1. 지금 가장 먼저 연락해야 할 고객은 누구인가?
2. 실제로 위험에 노출된 월 반복매출(MRR)은 얼마인가?
3. 위험판정은 어떤 근거로 나왔는가?
4. 데이터가 깨져도 이 판단체계가 잘못된 고객에게 행동하지 않도록 만들 수 있는가?

Customer Success 팀은 "사용량이 떨어지면 위험"이라고 말하고, Finance 팀은 "연체가 중요"하다고 말합니다. Sales 팀은 "이미 갱신 서명한 고객은 빼야 한다"고 주장하며, Support 팀은 "장애 티켓이 많은 고객부터 보자"고 합니다.

당신은 이 상충하는 관점을 하나의 재현 가능한 Workflow로 정리해야 합니다.

---

## 1. 사용할 정상 데이터

- `data/customers.csv`
- `data/contracts.csv`
- `data/invoices.csv`
- `data/usage_14d.csv`
- `data/support_tickets.csv`
- `data/account_events.csv`
- `data/DATA_DICTIONARY.md`

모든 분석 기준일(as-of date)은 **2026-09-15**입니다.

---

## 2. Business Rules

### R1. Renewal proximity
계약종료일까지 **0~60일** 남았으면 +20점.

### R2. Usage drop
직전 14일 대비 최근 14일의 `active_users`가 **30% 이상 감소**하면 +20점.

공식:

`usage_drop_pct = (previous_active_users - current_active_users) / previous_active_users × 100`

### R3. Low adoption
최근 14일 `active_users / contracted_seats < 40%`이면 +15점.

### R4. Inactivity
`last_login_date`가 기준일보다 **14일 이상 이전**이면 +20점.

### R5. Payment risk
미결제 잔액이 1,000,000원 이상인 청구서 중 **due_date를 30일 초과**한 항목이 있으면 +20점.

`outstanding = amount_krw - paid_krw`

### R6. Support risk
기준일 직전 **45일 이내(2026-08-01 포함)**에 열린 P1/P2 티켓이 **2건 이상**이면 +15점.

### R7. Verified negative event
기준일에 유효하고 `verified=TRUE`인 이벤트만 사용합니다.

- `CHAMPION_LEFT`: +25
- `EXECUTIVE_ESCALATION`: +25
- `CANCELLATION_REQUEST`: +40, 최종 Risk Level은 최소 CRITICAL

검증되지 않은 이벤트는 자동 점수에 반영하지 않습니다.

### R8. Verified mitigating event
기준일에 유효하고 검증된 경우:

- `PLANNED_SHUTDOWN`: 총점 -20
- `MIGRATION_WINDOW`: 총점 -20
- `RENEWAL_SIGNED`: 최종 Risk Level을 LOW로 override하고 MRR at Risk에서 제외

완화 이벤트가 있어도 원 신호는 보고서에 보존합니다. "왜 낮아졌는지" 설명 가능해야 합니다.

### R9. Score cap
조정 후 점수는 0~100 범위로 제한합니다.

### R10. Risk bands
- 0–24: LOW
- 25–49: MEDIUM
- 50–74: HIGH
- 75–100: CRITICAL

---

## 3. MRR at Risk

다음 조건을 모두 만족하는 고객의 현재 `mrr_krw`를 **고객당 한 번만** 합산합니다.

- 계약 status = ACTIVE
- 최종 Risk Level = HIGH 또는 CRITICAL
- `RENEWAL_SIGNED` override가 아님

여러 위험신호가 있어도 MRR을 중복 합산하지 마세요.

---

## 4. 수행 과제

### A. Data Quality Audit
분석 전에 다음을 검사하세요.

- PK/Join Key 중복
- 존재하지 않는 customer_id
- 날짜 파싱 가능 여부
- 숫자형 필드의 문자열 오염
- 음수/불가능한 금액
- `paid_krw > amount_krw`
- `active_users > contracted_seats`
- 동일 customer_id + period 중복
- 필수 필드 누락
- 정상 데이터에서 Failure 데이터로 바뀌었을 때 안전하게 중단/격리할 조건

### B. Customer Risk Table
고객별로 최소 다음 필드를 만드세요.

- customer_id
- customer_name
- renewal_days
- usage_drop_pct
- adoption_pct
- inactive_days
- raw_score
- mitigation_adjustment
- final_score
- risk_level
- override
- at_risk_mrr_krw
- evidence / reason

### C. Executive Brief
경영진이 3분 안에 읽을 수 있게 작성하세요.

필수:
- HIGH/CRITICAL 고객 수
- 총 MRR at Risk
- 최우선 3개 고객
- 고객별 핵심 근거
- 즉시 조치 / 7일 내 조치
- 데이터 품질 또는 판단상의 한계

### D. Human × AI Workflow
다음 단계를 포함하세요.

`Ingest → Validate → Join → Score → Explain → Human Review → Action → Monitor`

반드시 명시:
- AI가 해도 되는 일
- 코드/규칙이 해야 하는 일
- 사람이 승인해야 하는 일
- 자동발송 금지 지점
- 데이터오류 발견 시 fail-closed 또는 quarantine 방식

### E. Failure Challenge
`data/failure/`의 파일을 정상파일 대신 넣었다고 가정하세요.

좋은 시스템은 숫자를 억지로 계산하지 않고:
1. 오류를 탐지하고
2. 영향을 받는 레코드를 격리하고
3. 일부 계산을 중단하거나 degraded mode로 전환하고
4. 사람에게 무엇을 고쳐야 하는지 알려야 합니다.

---

## 5. 제출물

`submission/SUBMISSION_TEMPLATE.md`를 참고하여 다음 4개 결과물을 제출한다고 가정합니다.

1. `risk_scores.csv`
2. `executive_brief.md`
3. `data_quality_report.md`
4. `workflow_design.md`

코드 제출은 선택이지만, 점수를 재현할 수 있는 코드가 있으면 가점이 아니라 **재현성 증거**로 봅니다.

---

## 6. 금지

- 실제 회사/고객 데이터 사용
- 데이터 오류를 임의로 삭제하고 기록하지 않기
- LLM에게 모든 판단을 맡기기
- 근거 없이 "해지 가능성이 높다"라고 단정하기
- 고객에게 자동으로 할인/해지방지 메일 발송하기
- `reference/` 내용을 먼저 복사해 제출하기

---

## 7. Transfer Question

마지막 질문입니다.

> 다음 주부터 Risk Score 규칙이 바뀌어 Usage Drop 기준이 30% → 25%, Payment overdue 기준이 30일 초과 → 20일 초과가 된다면, 데이터와 코드의 어디를 수정하고 무엇은 수정하지 않아야 합니까?

좋은 답은 숫자를 하드코딩한 위치가 아니라 **정책 설정과 계산 로직의 분리**를 설명해야 합니다.
