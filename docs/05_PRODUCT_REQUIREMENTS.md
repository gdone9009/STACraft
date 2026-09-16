# S.T.A.크래프트 Web MVP Product Requirements

문서 버전: PRD v0.2
제품 버전: Prototype v0.1 → v0.2 개발 기준

## 1. Product Goal

사업계획을 예쁘게 소개하는 Landing만 만드는 것이 목표가 아니다.

사용자가:
1. S.T.A.의 차이를 이해하고
2. Sandbox Case를 선택하고
3. 문제를 읽고
4. 자신의 Workflow를 설계하고
5. Failure/Modification 질문을 받고
6. 다음 교육상품에 관심을 표현하는
최소 Learning Journey를 실제로 체험하게 한다.

## 2. Primary User Journey

Landing
→ Learning Tech-tree 이해
→ Case Library 탐색
→ Case 선택
→ Mission/Data 확인
→ Architect Canvas 작성
→ Self Review
→ Failure/Modification Challenge
→ Portfolio Preview
→ 교육과정 선택/관심표현

## 3. Current v0.1 Implemented

FACT — 현재 코드에 구현:
- Responsive Landing
- 4주 Tech-tree
- 2-Day / Lab 20 / Lab 40 카드
- Sandbox Case 6개 목록
- Case 01 영업실적 Synthetic Data 일부
- Architect Canvas 6개 Field
- Canvas Completion %
- Peer Review 3문항
- Modification Challenge
- Prototype 상태 고지

## 4. v0.2 Must Have

### P0-1 Six Complete Case Packs
각 6개 Case에:
- Mission
- Synthetic Dataset
- Business Rules
- Manual Workflow
- Hint 1/2/3
- Failure Scenarios
- Reference Architecture
- Modification Challenge

### P0-2 Case Navigation
- Case Detail route 또는 명확한 상태 전환
- 다음/이전 Case
- 난이도/직무/예상시간 표시
- Case Progress 상태

### P0-3 Hint System
- 처음에는 정답 숨김
- Hint 1 → Hint 2 → Hint 3 단계적 공개
- Reference Architecture는 Canvas 제출 후만 열기

### P0-4 Break & Fix
- 정상 데이터와 Failure Data 전환
- 무엇이 깨졌는지 학습자가 기록
- 수정할 Rule/Validation/Human Approval 지점 질문

### P0-5 Portfolio Preview
최소 표시:
- Project Title
- Problem
- Architecture
- Sample Data
- Human/AI Role
- Failure Case
- Modification
- Reflection

### P0-6 Learning Path
상품별 권장 경로:
- 2-Day
- Lab 20
- Lab 40

현재 Case Library를 같은 방식으로 전부 보여주는 것에서 “과정별 추천 순서”로 발전.

## 5. v0.3 Should Have

- localStorage 기반 진행상태 저장 또는 대체
- My Work 입력
- Workflow Diagnosis
- Peer Review 제출 UI
- Simple Portfolio Export
- Cohort/Facilitator Mock
- Analytics Event 정의

## 6. Later / Not Now

초기 MVP에서 만들지 않는다:
- Kubernetes
- 자체 IDE
- 자체 LLM Gateway
- 자체 결제/회원 시스템의 과도한 구축
- 실시간 협업 에디터
- Marketplace
- 복잡한 Coach Matching
- 실제 기업데이터 업로드 강제
- AI가 자동으로 최종 업무를 외부 발송하는 기능

## 7. UX Principles

### Learner First
사용자가 가장 많이 행동해야 한다. 화면이 대신 답을 생성하지 않는다.

### Challenge Before Answer
Reference Architecture는 학습자 시도 후에만 공개.

### Explain Failure
“정답/오답”보다 왜 깨졌는지 보여준다.

### Human Approval Visible
모든 Case에서 사람이 판단해야 할 지점을 명시.

### Synthetic First
회사 기밀데이터 입력을 유도하지 않는다.

### No Age Stereotype
4050을 “AI를 못하는 사람”처럼 묘사하지 않는다.

### Honest Prototype
실적·후기·고객사 Logo를 조작하지 않는다.

## 8. Design Direction

브랜드:
- Primary Accent: #FA9B11
- Dark Navy: #172033 계열
- Warm Cream background
- Workshop / Architecture / Tech-tree 느낌
- 흔한 SaaS Dashboard보다 교육 Workshop과 Architecture Blueprint의 중간

Visual Language:
- Flow
- Canvas
- Node
- Blueprint
- Failure/Warning
- Portfolio Artifact

피해야 할 것:
- 과도한 우주/게임 UI
- StarCraft IP를 직접 복제한 Asset
- 4050을 낡은 이미지로 표현
- 의미 없는 Gradient/Card 남발

## 9. Accessibility

- Keyboard navigation
- 명확한 focus state
- 의미있는 button label
- Color만으로 상태를 표현하지 않음
- Mobile 320px에서도 주요 과제 가능
- Textarea 최소 16px input font 고려
- aria-label/semantic heading 적용

## 10. Data Model Draft

Case:
- id
- title
- role
- level
- duration
- mission
- manualWorkflow
- dataset
- rules[]
- hints[]
- failureScenarios[]
- referenceArchitecture[]
- modificationChallenge
- architectChallenge

LearnerAttempt:
- caseId
- canvas.input
- canvas.process
- canvas.rule
- canvas.aiRole
- canvas.humanApproval
- canvas.output
- failureNotes
- modificationNotes
- reflection
- status
- updatedAt

## 11. Analytics Event Draft

Prototype 실사용 테스트 시:
- landing_view
- case_open
- mission_complete
- canvas_start
- canvas_50
- canvas_submit
- hint_open_1/2/3
- failure_start
- failure_submit
- reference_open
- portfolio_view
- course_interest

개인식별정보 없이 MVP Funnel을 먼저 본다.

## 12. Definition of Done v0.2

- 6개 Case가 동일한 Case Pack Schema를 따름
- 각 Case에서 Challenge → Hint → Failure → Reference → Modification 흐름 가능
- Mobile/Desktop에서 주요 Journey 완료 가능
- npm run build 성공
- Console blocking error 없음
- 실제 성과처럼 보이는 허위문구 없음
- README와 docs 동기화


## 2026-09-16 랜딩 V2 업데이트

- 기본 화면 V2, 상단 V1/V2 전환 및 `?version=1`, `?version=2` 공유 URL 지원. V1의 기존 콘텐츠를 별도 컴포넌트에 보존.
- 경력자의 업무 경험을 중심으로 첫 화면을 재작성하고, 데이터가 제공되는 영업보고 체험으로 주요 버튼 연결.
- 교육과정 비교 선택기, 학습 결과물 안내, FAQ 6개, 과제별 상세 데이터 준비 상태 추가.
- 과제 선택 후 문제 이해부터 시작하도록 수정. 영업보고 설명을 실제 제공 데이터 3명에 맞추고, 다른 과제에 영업 기준 변경 질문이 나타나던 문제 수정.
- 한국어 설계 항목, 입력 16px, 키보드 포커스·본문 바로가기·동작 줄이기 대응 추가.
- 현재 체험은 설계 메모·자기 점검이며 실제 AI 실행, 동료 연결, 자동저장, 신청/결제를 제공하지 않음. 실적 및 가격을 임의로 추가하지 않음.
- 랜딩 V2는 전체 Education MVP v0.2 완성을 의미하지 않음. 6개 완전한 Case Pack, Hint/Failure/Reference/Portfolio는 기존 다음 Sprint로 유지.
- 상세 평가: docs/09_LANDING_V2_REVIEW.md
