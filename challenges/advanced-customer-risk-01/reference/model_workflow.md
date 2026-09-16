# Model Human × AI Workflow

## 1. Ingest

입력 파일을 원본 그대로 landing zone에 저장합니다.

기록:
- source file
- ingestion timestamp
- row count
- checksum
- schema version
- policy version

AI는 이 단계에서 값을 수정하지 않습니다.

## 2. Validate — Deterministic

코드/규칙 엔진이 먼저 검사합니다.

- schema
- required fields
- PK duplicate
- orphan FK
- date parse
- numeric parse
- range
- paid <= amount
- active_users <= contracted_seats
- PREVIOUS/CURRENT pair

결과는 PASS / WARN / ERROR로 나눕니다.

ERROR가 scoring 핵심필드에 있으면 해당 고객은 `DATA_ERROR`로 quarantine합니다.

## 3. Join

`customer_id`를 기준으로 고객·계약·청구·사용량·지원·이벤트를 customer snapshot으로 결합합니다.

Join 전후 row count와 unmatched key를 기록합니다.

## 4. Score — Deterministic

Business Rule은 LLM prompt가 아니라 버전관리되는 정책설정으로 계산합니다.

예:

```yaml
renewal_days_max: 60
usage_drop_pct_min: 30
adoption_pct_max_exclusive: 40
inactivity_days_min: 14
payment_overdue_days_exclusive: 30
payment_outstanding_min: 1000000
```

점수와 override는 코드가 계산하고 각 rule hit를 별도 column으로 남깁니다.

## 5. Explain — AI Assist

AI 입력:
- 검증이 끝난 구조화 risk signals
- 정책 설명
- 고객별 verified event

AI 출력:
- 사람이 읽기 쉬운 근거 요약 초안
- 추가 확인 질문
- 상충 신호 설명

AI 금지:
- 점수를 새로 계산
- verified=FALSE를 사실로 승격
- 해지확률을 임의 생성
- 할인율/계약조건 결정

## 6. Human Review

CSM/Finance/Support 담당자가 HIGH/CRITICAL 및 DATA_ERROR 고객을 검토합니다.

확인:
- 데이터가 최신인가
- 이벤트가 아직 유효한가
- 고객 연락이 필요한가
- 상업적 조치가 필요한가

## 7. Approved Action

자동으로 허용:
- 내부 task 생성
- 내부 dashboard 갱신
- 검토 reminder

사람 승인 필수:
- 고객 이메일/전화
- 할인
- 계약변경
- 해지방어 offer
- 미수금 관련 대외 통지
- 법적 조치

## 8. Monitor

- 데이터 정상: 일 1회 또는 정책상 주기
- CRITICAL: 사람이 정한 follow-up cadence
- PLANNED_SHUTDOWN/MIGRATION_WINDOW: valid_until 다음날 재평가
- DATA_ERROR: 수정파일 수신 후 재처리

## 9. Audit

모든 결과에 남김:
- data version
- policy version
- score components
- override
- AI explanation version
- reviewer
- approval timestamp
- action taken

## 10. Policy Change

30% → 25% 같은 변경은 데이터 가공 코드를 뜯어고치지 않고 정책설정만 변경합니다.

변경 후:
1. 새 policy version 발급
2. 과거 샘플로 regression test
3. 영향 고객 수/MRR 비교
4. 사람 승인
5. production rule 활성화

이 구조의 핵심은 **AI가 판단을 대신하는 것이 아니라, 검증된 규칙의 결과를 사람이 더 잘 이해하고 행동하도록 돕는 것**입니다.
