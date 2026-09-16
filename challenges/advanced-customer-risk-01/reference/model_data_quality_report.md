# Model Data Quality Report

## 1. Normal Pack

정상 데이터 기준:

- customers: 12 unique customer_id
- contracts: 고객당 1개 ACTIVE 계약
- usage: 고객당 PREVIOUS/CURRENT 각 1개
- invoices: invoice_id unique
- support tickets: ticket_id unique
- account events: event_id unique
- orphan customer_id: 없음
- 필수 scoring field 누락: 없음
- 숫자/날짜 파싱 오류: 없음
- 검증되지 않은 이벤트: C008 BUDGET_REVIEW 1건 — 오류가 아니라 **자동점수 제외 대상**

분석 가능 상태: **PASS**

## 2. Failure Pack 예상 탐지

### contracts_failure.csv

1. `C004` 계약 레코드 중복  
   - Severity: ERROR  
   - 처리: 중복 레코드 quarantine, 계약점수 계산 중단

2. `C008.mrr_krw = "3,600,000원"`  
   - Severity: ERROR  
   - 처리: 명시적 정제규칙 없이는 숫자로 강제변환하지 않음

3. `C010.contracted_seats = 0`  
   - Severity: ERROR  
   - 처리: adoption division 불가. C010 adoption 계산 quarantine

4. `C012.contract_end = 2026/10/12`  
   - Severity: ERROR  
   - 처리: ISO date 정책 위반. 자동 보정 대신 source correction 요청

### invoices_failure.csv

1. `c004` — customer_id case mismatch / orphan
2. `INV-007` — paid_krw 4,500,000 > amount_krw 4,200,000
3. `INV-008.due_date = 2026-08-32` — invalid date
4. `INV-012` — invoice_id duplicate
5. `INV-099.customer_id = C099` — unknown customer
6. `INV-099.amount_krw = -500000` — 음수 청구액

권장: invoice pack 전체를 무조건 폐기하기보다 오류 row를 quarantine하되, **Payment Risk 결과에 영향을 받는 고객은 "INCOMPLETE" 상태**로 표시합니다.

### usage_failure.csv

1. `C001 + CURRENT` 중복
2. `C003 + CURRENT` 누락
3. `C007.api_calls = -10` — 음수 사용량
4. `C008.CURRENT.active_users` 누락
5. `C010.CURRENT.active_users = 180` > contracted_seats 110
6. `C012.last_login_date = 2026-15-01` — invalid date

권장: 중복/누락/범위오류가 있는 고객은 usage 관련 점수를 계산하지 말고 `DATA_ERROR`로 격리합니다.

## 3. Fail-closed 원칙

데이터 오류를 0으로 채우면 안 됩니다.

예:
- C008 active_users가 blank라고 0으로 채우면 사용량 급락과 low adoption이 허위로 강화됩니다.
- C010 seats=0을 임의로 1로 바꾸면 adoption 신호가 왜곡됩니다.
- C012 잘못된 날짜를 파싱 실패 후 오늘 날짜로 대체하면 inactivity 신호가 사라질 수 있습니다.

따라서 scoring 이전에 validation gate가 있어야 하며, critical field 오류 고객은 **점수 대신 DATA_ERROR + human review**가 기본값입니다.
