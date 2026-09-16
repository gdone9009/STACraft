> 2026-09-16 배포 기준 업데이트: 현재 저장소는 gdone9009/STACraft, 앱 경로는 저장소 루트, 기본 브랜치는 main입니다. GitHub Pages 배포는 README.md와 .github/workflows/pages.yml을 따릅니다. 아래의 기존 테스트 저장소·브랜치·Vercel 관련 내용은 이전 이력입니다. 제품 v0.1과 다음 개발 과제는 유지합니다.

# Codex Handoff — S.T.A.크래프트

이 문서는 Codex가 새 세션에서 저장소만 읽고 바로 작업을 이어가기 위한 인수인계 문서다.

## 1. Mission

S.T.A.크래프트 Web Prototype을 “사업소개 Landing”에서 “실제로 학습과제를 수행하는 Education MVP”로 발전시킨다.

North Star:
Learner가 Case를 보고 스스로 Workflow를 설계하고, 실패를 발견하고, 조건 변화에 맞춰 수정하고, 마지막에 새로운 문제로 전이하는 경험.

## 2. Never Forget

- 실제 유료 Pilot은 아직 없다.
- 허위 후기/성과/고객사 Logo를 만들지 않는다.
- S.T.A.는 Consulting/Outsourcing 사업으로 변형하지 않는다.
- Learner가 Actor다.
- Expert/AI는 Facilitator다.
- 정답은 시도 전에 보여주지 않는다.
- Synthetic Data First.
- 특정 유료 SaaS 종속 금지.
- Human Approval을 모든 자동화 구조에 남긴다.

## 3. Current Branch

feat/sta-craft-prototype

현재 PR:
#2 feat: S.T.A.크래프트 랜딩·Sandbox 학습 프로토타입

Base:
main

## 4. Current v0.1

현재 구현:
- Landing Hero
- Tech-tree
- 2-Day/20h/40h
- Case Cards 6
- Sales Case sample data
- Canvas 6 fields
- Progress
- Peer Review
- Modification Challenge
- responsive CSS

현재 기술부채:
- main.jsx가 너무 큼
- Case data가 컴포넌트에 하드코딩
- 나머지 Case가 상세 Dataset 없음
- Hint System 없음
- Failure Dataset 없음
- Reference Architecture 없음
- Portfolio 없음
- 저장 없음
- automated test 없음

## 5. Next Sprint — v0.2

### Sprint Goal
6개 Case를 동일 Schema로 만들고, 하나의 완전한 Learning Journey를 제공한다.

### Priority 0

1. Refactor
- case data를 src/data/cases.js로 분리
- App/CaseWorkspace/Canvas 정도만 우선 분리
- 과도한 Design System 추상화 금지

2. Six Case Packs
각 Case:
- mission
- dataset
- rules
- manualWorkflow
- hints[3]
- failureScenarios
- referenceArchitecture
- modificationChallenge
- architectChallenge

3. Learning Flow
Challenge
→ Canvas
→ Hint
→ Failure
→ Fix
→ Reference Architecture
→ Modification
→ Portfolio Preview

4. Portfolio
Case 결과를 한 화면에 요약.

5. Build
npm run build 통과.

### Priority 1
- localStorage progress
- Case별 completion
- Reset
- 과정별 추천 Path
- analytics event abstraction

### Priority 2
- My Work
- Peer Review Mock
- Export
- Vercel Preview polish

## 6. Suggested First Implementation

첫 작업은 Case 01 영업실적 주간보고를 완성형 Reference Case로 만든다.

Case 01 Acceptance:
- 정상 Dataset
- 3개 Business Rule
- Missing/Column Change/Text-in-number Failure 포함
- Hint 1/2/3
- 학습자가 Canvas 제출 전 Reference를 볼 수 없음
- Failure 후 수정 질문
- 80% → 85% Modification
- Portfolio Preview
- 모바일 동작

이후 Schema를 Case 02~06에 복제.

## 7. Synthetic Data Rule

- 실제 사람/기업 데이터를 복제하지 않는다.
- 가상 회사명을 명시.
- 과제에 필요한 최소 필드만.
- 정상/Failure 파일을 구분.
- Failure는 교육목표와 연결.

예:
sales normal
sales missing
sales renamed-column
sales text-in-number
sales duplicate

## 8. UI Direction

현재 visual identity 유지:
- Orange #FA9B11
- Navy
- Warm Cream
- Architecture workshop

더 화려하게 만들 수 있지만:
- 정보계층이 먼저
- 과제 UX가 Landing보다 중요
- Animation은 학습상태를 설명할 때만
- meaningless decoration 금지

## 9. Copy Rules

사용:
“설계합니다”
“직접 만들어봅니다”
“깨뜨리고 고칩니다”
“사람이 승인합니다”
“가상 데이터”

금지:
“자동으로 다 해드립니다”
“4주 만에 전문가 보장”
“검증된 성과”
“누구나 10분이면 자동화”
“4050도 할 수 있다”

## 10. Testing Before PR Update

- npm install
- npm run build
- desktop
- mobile
- 6 Case open
- Canvas reset/state
- Hint gating
- Reference gating
- Failure state
- Portfolio
- no console error
- no false pilot claim

## 11. Documentation After Change

코드 변경 후:
- README Current Implemented 업데이트
- 05_PRODUCT_REQUIREMENTS 상태 업데이트
- 08_CODEX_HANDOFF 완료/다음 Sprint 업데이트

전략/교육모델을 바꿨다면:
- 01_VERSION_HISTORY
- 02_BUSINESS_PLAN_V5
- 03_EDUCATION_CURRICULUM

정책이 바뀌면 root README Policy Change Log도 업데이트.

## 12. Definition of Successful Handoff

Codex가 사용자에게 다시 묻지 않고 다음을 이해할 수 있어야 한다.
- 이 서비스가 무엇인지
- 무엇이 사실/가설/목표인지
- 어떤 기능이 이미 있는지
- 다음 무엇을 구현할지
- 무엇을 구현하면 안 되는지
- 어떤 명령으로 검증할지
- 어떤 문서를 함께 수정할지


## 2026-09-16 랜딩 V2 업데이트

- 기본 화면 V2, 상단 V1/V2 전환 및 `?version=1`, `?version=2` 공유 URL 지원. V1의 기존 콘텐츠를 별도 컴포넌트에 보존.
- 경력자의 업무 경험을 중심으로 첫 화면을 재작성하고, 데이터가 제공되는 영업보고 체험으로 주요 버튼 연결.
- 교육과정 비교 선택기, 학습 결과물 안내, FAQ 6개, 과제별 상세 데이터 준비 상태 추가.
- 과제 선택 후 문제 이해부터 시작하도록 수정. 영업보고 설명을 실제 제공 데이터 3명에 맞추고, 다른 과제에 영업 기준 변경 질문이 나타나던 문제 수정.
- 한국어 설계 항목, 입력 16px, 키보드 포커스·본문 바로가기·동작 줄이기 대응 추가.
- 현재 체험은 설계 메모·자기 점검이며 실제 AI 실행, 동료 연결, 자동저장, 신청/결제를 제공하지 않음. 실적 및 가격을 임의로 추가하지 않음.
- 랜딩 V2는 전체 Education MVP v0.2 완성을 의미하지 않음. 6개 완전한 Case Pack, Hint/Failure/Reference/Portfolio는 기존 다음 Sprint로 유지.
- 상세 평가: docs/09_LANDING_V2_REVIEW.md


## 2026-09-16 Advanced Challenge Pack

새 Reference Case:
`challenges/advanced-customer-risk-01/`

현재 포함:
- README / TASK / RUBRIC
- Data Dictionary
- 정상 Synthetic CSV 6종
- Failure CSV 3종
- Submission Template
- Model Risk Scores
- Model Executive Brief
- Model Data Quality Report
- Model Human × AI Workflow
- Reference Python Scorer

정상 데이터 기준 Reference:
- HIGH/CRITICAL: 5 accounts
- MRR at Risk: 25,600,000 KRW
- Priority: C012 → C004 → C010

다음 권장 구현:
1. 이 Pack을 Web Sandbox에 읽어오는 Challenge Detail UI
2. CSV/Markdown 제출 Mock
3. deterministic scorer
4. rubric score breakdown
5. Retry / score history
6. leaderboard는 실제 사용자 검증 이후 최소형으로 추가

주의:
Reference 폴더를 첫 화면에서 노출하지 말 것. 학습자 제출 또는 gating 이후에만 비교자료로 연결한다.
