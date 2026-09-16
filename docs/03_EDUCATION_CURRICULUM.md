# S.T.A. 교육과정 설계

## 1. 교육 정체성

S.T.A. = Workflow Architect School.

강사가 정답을 설명하고 학습자가 따라 하는 구조보다, 학습자가 문제를 구조화하고 동료가 질문하며 Facilitator가 사고과정을 돕는 구조를 우선한다.

교육의 두 결과:
- Performance Output: 실제로 작동하거나 설명 가능한 Workflow Asset
- Learning Outcome: 새로운 문제에도 적용 가능한 Architecture 역량

## 2. 공통 Learning Loop

1. LEARN — 공통 Case
2. BUILD — 선택 Case 또는 My Work
3. IMPROVE — Failure / Peer Red Team
4. ARCHITECT — 처음 보는 문제
5. TRANSFER — 조건이 바뀌었을 때 스스로 수정

공통 Vocabulary:
Input / Output / Rule / Process / AI Role / Human Role / Exception / Approval

## 3. 정답 공개 원칙

Level 1 Challenge
- 문제
- 예제 데이터
- Business Rule

Level 2 Hint
- 단계별 힌트
- 질문 중심

Level 3 Reference Architecture
- 학습자가 먼저 설계한 뒤 비교
- “정답”이 아니라 추천 구조로 제시

Copy-along 교육을 피한다.

## 4. 2-Day Workflow Bootcamp

목표:
S.T.A. 학습방식을 짧고 강하게 체험하고 Mini Portfolio를 만든다.

권장 총량:
2일 × 7시간 = 14시간

### Day 1 — BUILD
- 업무분해
- 공통 Case
- Sandbox
- Workflow v0.1
- Peer Review

### Day 2 — ARCHITECT
- Failure Challenge
- Break & Fix
- 직무별 Case/My Work
- Architect Challenge
- Demo

결과물:
- Workflow Canvas
- Sandbox Workflow
- Failure & Exception Map
- Human Approval 설계
- Architect Challenge
- Mini Portfolio

포지셔닝:
4주 과정의 축약판이 아니라 Immersion 상품.

## 5. Architect Lab 20

기간:
4주 / 총 20시간 / 주당 5시간 내외

목표:
Workflow Builder

### Week 1 DISCOVER — 5h
- 공통 Case
- Problem / Input / Output / Rule
- Human vs AI Role

### Week 2 BUILD — 5h
- 직무별 Case
- Synthetic Data
- Workflow 구현

### Week 3 IMPROVE — 5h
- Missing / Wrong Format / Hallucination
- Peer Review
- Exception 설계

### Week 4 TRANSFORM — 5h
- My Work 또는 Advanced Case
- Demo
- Modification Test

권장 Deep Experience:
3개 내외

## 6. Architect Lab 40

기간:
4주 / 총 40시간 / 주당 10시간 내외

목표:
독립적으로 Workflow를 설계·검증·수정하는 Workflow Architect

### Week 1 DISCOVER — 10h
- 공통 Case 2개
- 업무분해
- 암묵규칙 추출
- Workflow Canvas

### Week 2 BUILD — 10h
- 직무별 Case 2개
- Data → Rule → AI → Human Approval → Output

### Week 3 IMPROVE — 10h
- Failure Sandbox
- Missing Values
- Column Change
- Duplicate
- Hallucination
- Privacy
- API/Tool Failure
- Wrong Recipient
- Cross-Peer Red Team

### Week 4 ARCHITECT — 10h
- My Work 또는 Advanced Case
- 독립설계
- Unseen Architect Challenge
- Demo Day

## 7. Architect Challenge

예시:
“8개 지점이 매주 Excel 재고보고를 보내고 본사에서 취합하여 이상재고를 확인하고 월요일 아침 보고한다. Human × AI Workflow를 설계하라.”

학습자가 스스로 정의:
Problem → Input → Process → Rule → AI Role → Human Role → Exception → Approval → Output

이후:
- Broken Data 주입
- 기준 변경
- 학습자가 Fix/Modify

평가:
1. Design
2. Detect
3. Fix
4. Modify
5. Transfer

## 8. Seed Sandbox Case 6

### Case 01 영업실적 주간보고
Data → KPI → Anomaly → AI Draft → Human Review

### Case 02 회의 후속업무
Unstructured Text → Action Item → Owner → Due Date → Approval

### Case 03 고객문의 분류
Classification → Draft → Exception → Human Approval

### Case 04 직원 VOC 분석
Qualitative Data → Theme → Issue → Improvement Question

### Case 05 시장정보 Briefing
Research Input → Source/Category → Summary → Human Judgment

### Case 06 교육 만족도 분석
Quant + Qual → Pattern → Improvement Report

## 9. Case Pack Definition of Done

각 Case는 최소 다음 파일/데이터를 가져야 한다.
- Mission
- Normal Synthetic Dataset
- Business Rules
- Manual Workflow
- Canvas Prompt
- 최소 3개 Failure Scenario
- Hint 1/2/3
- Reference Architecture
- Modification Challenge
- Transfer/Architect Question
- Portfolio Prompt

## 10. Peer Learning

Peer Review는 친목활동이 아니다.
동료의 서로 다른 도메인 경험으로 숨은 Rule, Exception, Business Reality를 발견하는 학습장치다.

권장 질문:
- 이 Workflow는 어디에서 실패할 수 있는가?
- AI가 근거 없이 판단할 지점은?
- 사람이 꼭 승인해야 할 지점은?
- 조건이 바뀌면 어느 부분을 수정해야 하는가?
- 다른 부서에서도 재사용 가능한 Pattern은 무엇인가?

## 11. Facilitator 역할

하지 말아야 할 것:
- 학습자 대신 완성
- 정답을 시작부터 공개
- Tool 기능만 시연
- 실제 회사 규칙을 임의로 가정

해야 할 것:
- 질문 구조화
- 문제 범위 조정
- Rule 명시화
- Failure 사고 촉진
- Peer Review 촉진
- Transfer Test

## 12. Learning Tech-tree

Level 1 AI User
Level 2 Task Designer
Level 3 Workflow Builder
Level 4 Workflow Operator
Level 5 Workflow Architect

현재 Lab 20의 목표는 주로 Level 3, Lab 40의 목표는 Level 5 도전으로 본다. 실제 Level 도달 여부는 Pilot 후 평가도구를 통해 검증한다.



## 13. Advanced Challenge Reference

2026-09-16 기준 첫 고급 Reference Pack:

**B2B SaaS 고객이탈·매출위험 조기경보**

경로:
`challenges/advanced-customer-risk-01/`

학습자가 수행하는 흐름:

1. 여러 데이터셋 이해
2. Data Quality Audit
3. Business Rule 구현
4. 고객별 위험점수 계산
5. 상충 신호 및 예외/완화 이벤트 적용
6. MRR at Risk 산출
7. Executive Brief 작성
8. Human × AI Workflow 설계
9. Failure Dataset 투입
10. 오류 탐지·격리·수정
11. 정책 변경 Transfer Question

핵심 교육 차이:
- 단일 정답 계산이 아니라 데이터 신뢰성까지 평가한다.
- AI 설명과 deterministic rule을 분리한다.
- `RENEWAL_SIGNED`, `PLANNED_SHUTDOWN`, `MIGRATION_WINDOW`처럼 현업 예외를 포함한다.
- 정상 데이터에서 맞는 Workflow가 깨진 데이터에서도 안전한지 검증한다.
- 모범답안은 Challenge Before Answer 원칙에 따라 학습자 시도 후 비교 자료로 사용한다.

이 패턴을 향후 고급 Case Pack의 공통 골격으로 검증한다.
