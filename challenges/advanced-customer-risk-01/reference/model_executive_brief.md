# Model Executive Brief

기준일: 2026-09-15

## Executive Summary

- HIGH/CRITICAL 고객: **5개**
- 총 MRR at Risk: **25,600,000원**
- 이 중 CRITICAL MRR: **17,200,000원**
- MEDIUM 고객 2개(C003, C007)는 큰 사용량 하락이 있으나 검증된 운영 이벤트가 있어 자동 고위험으로 올리지 않고 사람 검토를 유지합니다.
- C005는 계약종료가 25일 남았지만 **RENEWAL_SIGNED**가 검증되어 MRR at Risk에서 제외합니다.

> 현재 가장 중요한 사실은 "사용량 하락 고객이 많다"가 아니라, **C012·C004·C010 세 고객에서 서로 다른 종류의 강한 위험신호가 동시에 확인되었다**는 점입니다.

## Priority 1 — C012 LuminaCare

- 최종점수: 100 / CRITICAL
- MRR: 8,300,000원
- 근거:
  - 갱신 27일 전
  - Active users 68.2% 감소
  - Adoption 25.0%
  - 18일간 로그인 없음
  - 4,000,000원 잔액이 30일 초과 연체
  - CFO의 CANCELLATION_REQUEST가 검증됨
- 즉시 조치:
  1. 담당 CSM과 Finance가 계약/미수 현황 사실확인
  2. 해지요청 범위와 원인을 고객에게 사람이 확인
  3. 임의 할인 또는 자동 retention offer 금지
- 승인:
  - 모든 상업조건 변경은 Sales/Finance 책임자 승인

## Priority 2 — C004 DeltaRetail

- 최종점수: 100 / CRITICAL
- MRR: 2,700,000원
- 근거:
  - 갱신 16일 전
  - Active users 68.4% 감소
  - Adoption 24.0%
  - 14일 로그인 공백
  - 2,700,000원 전액이 30일 초과 연체
  - 최근 45일 P1/P2 티켓 2건
- 즉시 조치:
  1. 장애/통합 이슈 해결상태 재검증
  2. Finance 미수 확인
  3. CSM이 갱신 의향과 사용중단 원인을 직접 확인

## Priority 3 — C010 JunoLogistics

- 최종점수: 80 / CRITICAL
- MRR: 6,200,000원
- 근거:
  - 갱신 45일 전
  - Active users 40.2% 감소
  - 최근 45일 P1/P2 티켓 3건
  - VP Operations의 EXECUTIVE_ESCALATION 확인
- 즉시 조치:
  1. 오픈 P2 티켓을 포함한 서비스 복구계획 작성
  2. 고객 임원 커뮤니케이션은 담당 임원의 승인 후 진행
  3. 다음 7일간 usage/ticket 추세를 일별 확인

## 그 외

### C001 AlphaWorks — HIGH / 4,800,000원
갱신 35일 전, usage 42.3% 감소, 내부 Champion 이탈. 신규 의사결정자 맵 확인이 필요합니다.

### C008 HanulLabs — HIGH / 3,600,000원
갱신일까지는 61일로 R1에 해당하지 않지만 usage 64.0% 감소, adoption 25.7%, 30일 초과 미수가 동시에 존재합니다.

### C003 CoreMedi — MEDIUM
기계적으로는 55점이나 검증된 PLANNED_SHUTDOWN으로 -20 조정. 사용량 하락 신호 자체는 삭제하지 않고 9월 말 정상복귀 여부를 확인합니다.

### C007 GreenForge — MEDIUM
기계적으로는 55점이나 MIGRATION_WINDOW로 -20 조정. 9월 25일 이후 사용량 회복 여부를 재평가합니다.

## Limitations

- 이 점수는 해지확률 예측모델이 아니라 **정책 기반 triage score**입니다.
- 상관관계를 인과관계로 해석하지 않습니다.
- 검증되지 않은 C008 BUDGET_REVIEW는 자동점수에서 제외했습니다.
- AI는 설명 초안과 근거 요약을 도울 수 있지만 고객 상태를 확정하거나 상업조치를 실행해서는 안 됩니다.
