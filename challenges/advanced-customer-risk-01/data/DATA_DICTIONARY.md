# Data Dictionary

모든 파일은 UTF-8 CSV이며 모든 엔터티는 가상입니다.

## customers.csv
- `customer_id`: 고객 키
- `customer_name`: 가상 고객사명
- `segment`: Growth / Enterprise
- `industry`: 업종
- `region`: 지역
- `owner_team`: 담당 조직
- `cs_tier`: 고객성공 지원등급

## contracts.csv
- `customer_id`
- `plan`
- `mrr_krw`: 월 반복매출 원화
- `contract_start`, `contract_end`: ISO date
- `renewal_type`: AUTO / MANUAL
- `contracted_seats`
- `status`: ACTIVE
- `discount_pct`

## invoices.csv
- `invoice_id`: 청구서 PK
- `customer_id`
- `invoice_date`, `due_date`
- `amount_krw`
- `paid_krw`
- `status`: PAID / UNPAID / PARTIAL
- `payment_date`: 미지급이면 blank

## usage_14d.csv
비교 가능한 14일 window 2개를 제공합니다.
- `period`: PREVIOUS / CURRENT
- `period_start`, `period_end`
- `active_users`
- `workflow_runs`
- `api_calls`
- `last_login_date`

Risk Rule의 usage drop은 active_users를 사용합니다.

## support_tickets.csv
- `ticket_id`
- `customer_id`
- `opened_date`
- `priority`: P1~P4
- `status`
- `category`
- `resolution_hours`
- `sentiment`: NEGATIVE / NEUTRAL / POSITIVE

Risk Rule은 sentiment가 아니라 **45일 내 P1/P2 건수**를 사용합니다.

## account_events.csv
- `event_id`
- `customer_id`
- `event_date`
- `event_type`
- `verified`: TRUE/FALSE
- `valid_until`
- `detail`

자동점수에는 기준일 현재 유효하고 verified=TRUE인 이벤트만 반영합니다.
