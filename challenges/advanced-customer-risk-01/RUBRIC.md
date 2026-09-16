# RUBRIC — 100점

## 1. 데이터 품질 진단 — 15점

- 5점: PK/Join Key, 중복, orphan key 검사
- 5점: 날짜/숫자/범위/필수값 검사
- 5점: 오류 발견 시 quarantine/fail-closed 전략

## 2. Business Rule 정확성 — 25점

- 5점: Renewal / Usage Drop 계산
- 5점: Adoption / Inactivity 계산
- 5점: Payment / Support 계산
- 5점: Event 가점·완화 처리
- 5점: score cap / risk band 정확성

## 3. 예외·Override 처리 — 15점

- 5점: PLANNED_SHUTDOWN/MIGRATION_WINDOW를 원 신호 삭제 없이 완화
- 5점: RENEWAL_SIGNED를 LOW + MRR at Risk 제외
- 5점: CANCELLATION_REQUEST 최소 CRITICAL 및 Human Review 표시

## 4. MRR at Risk — 10점

- 5점: HIGH/CRITICAL + ACTIVE + override 반영
- 5점: 고객당 1회만 합산하여 중복계상 방지

## 5. 근거와 설명가능성 — 15점

- 5점: 각 고객 점수의 신호를 추적 가능
- 5점: 최우선 3개 고객 근거가 데이터와 일치
- 5점: 사실/추정/사람판단을 구분

## 6. Human × AI Workflow — 10점

- 3점: Rule/Code/AI/Human 역할 분리
- 3점: 자동 고객조치 전 Human Approval
- 2점: 로그/감사추적
- 2점: 정책변경을 설정화하여 재사용 가능

## 7. Failure Challenge — 10점

- 4점: 제공된 Failure 오류를 대부분 탐지
- 3점: 오류가 전체 점수로 조용히 전파되지 않음
- 3점: 복구/재처리 절차 제안

---

## 자동채점 후보

향후 플랫폼에서는 아래 항목을 deterministic test로 채점할 수 있습니다.

- 예상 고객 수
- 고객별 final_score
- risk_level
- at_risk_mrr_krw
- 총 MRR at Risk
- duplicate/orphan/date/type/range 오류 탐지 개수

문장형 Executive Brief와 Workflow Design은 AI Judge + 사람 샘플 검토를 결합하는 편이 안전합니다.
