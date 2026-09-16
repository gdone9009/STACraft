> 2026-09-16 배포 기준 업데이트: 현재 저장소는 gdone9009/STACraft, 앱 경로는 저장소 루트, 기본 브랜치는 main입니다. GitHub Pages 배포는 README.md와 .github/workflows/pages.yml을 따릅니다. 아래의 기존 테스트 저장소·브랜치·Vercel 관련 내용은 이전 이력입니다. 제품 v0.1과 다음 개발 과제는 유지합니다.

# S.T.A.크래프트 Development Guide

## 1. Current Stack

- React
- Vite
- lucide-react
- Plain CSS
- No backend
- No database
- No auth
- No production analytics
- Vercel target deployment

App root:
apps/sta-craft-prototype

## 2. Run

    cd apps/sta-craft-prototype
    npm install
    npm run dev

Production check:

    npm run build
    npm run preview

## 3. Current Structure

    apps/sta-craft-prototype/
    ├── AGENTS.md                 # 앱별 개발 규칙
    ├── README.md
    ├── package.json
    ├── index.html
    ├── docs/
    │   ├── 00_INDEX.md
    │   ├── 01_VERSION_HISTORY.md
    │   ├── 02_BUSINESS_PLAN_V5.md
    │   ├── 03_EDUCATION_CURRICULUM.md
    │   ├── 04_MARKETING_GTM.md
    │   ├── 05_PRODUCT_REQUIREMENTS.md
    │   ├── 06_DEVELOPMENT_GUIDE.md
    │   ├── 07_VALIDATION_AND_METRICS.md
    │   └── 08_CODEX_HANDOFF.md
    └── src/
        ├── main.jsx
        └── style.css

## 4. Refactor Direction

v0.1은 빠른 Prototype이라 main.jsx에 많은 내용이 집중되어 있다.

v0.2부터 권장:

    src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── cases.js
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── TechTree.jsx
    │   ├── ProgramCards.jsx
    │   ├── CaseLibrary.jsx
    │   ├── CaseWorkspace.jsx
    │   ├── ArchitectCanvas.jsx
    │   ├── HintPanel.jsx
    │   ├── FailureChallenge.jsx
    │   └── PortfolioPreview.jsx
    ├── hooks/
    │   └── useLearnerProgress.js
    └── styles/
        ├── tokens.css
        └── app.css

과도한 추상화는 피한다. Case Pack과 Learning Journey의 재사용이 확인되는 부분부터 분리한다.

## 5. Source of Truth

개발 전 반드시 읽는다:
1. AGENTS.md
2. docs/08_CODEX_HANDOFF.md
3. docs/05_PRODUCT_REQUIREMENTS.md
4. docs/03_EDUCATION_CURRICULUM.md

사업표현을 수정한다면 docs/02_BUSINESS_PLAN_V5.md와 04_MARKETING_GTM.md도 확인한다.

## 6. Branch Workflow

기본:
- main: Production 기준
- feat/*: 기능 개발
- fix/*: 버그
- docs/*: 문서
- 기능 PR: Vercel Preview 확인 후 merge

현재:
feat/sta-craft-prototype

작업 원칙:
- 작은 commit
- 한 commit에 하나의 목적
- 코드 변경과 관련 문서 동기화
- 정책 변경이면 root README Policy Change Log 갱신

## 7. Coding Rules

- React functional component 우선
- Case 데이터를 JSX 안에 계속 하드코딩하지 말고 v0.2에서 data/cases.js 분리
- Secret/API key 브라우저 하드코딩 금지
- 외부 AI API를 붙일 경우 server-side boundary 먼저 설계
- 학습자 입력에 실제 회사기밀을 요구하지 않음
- Sample 데이터는 synthetic임을 표시
- “AI 자동 생성” 기능을 넣더라도 Learner의 설계행동을 대체하지 않음

## 8. State

v0.1:
React useState only.

v0.2:
진행상태가 필요하면 localStorage를 고려할 수 있다.
단:
- 개인정보 저장 금지
- schema version 포함 권장
- reset 기능 제공
- 브라우저 저장임을 UI에서 알림

실서비스 계정/DB는 유료검증 후 우선순위를 다시 판단한다.

## 9. Routing

v0.1은 single-page state transition.

v0.2 선택:
- React Router 도입 또는
- route 없이 Case ID 상태 유지

공유 가능한 Case URL이 필요해지는 순간 Router 도입을 권장한다.

예:
- /cases/sales-weekly
- /cases/meeting-followup

## 10. Testing

최소 Manual Checklist:
- Landing CTA가 Case Library로 이동
- 6개 Case 선택 가능
- Case 변경 시 이전 Canvas가 잘못 섞이지 않음
- Progress 0~100 정상
- 50% 미만 submit disabled
- Review 전환 정상
- Modification Challenge 표시
- Mobile 320/375/768/desktop
- Keyboard tab
- Console error 없음
- npm run build 성공

v0.2 이후 권장:
- Vitest + React Testing Library
- data schema validation test
- critical Journey smoke test

## 11. Vercel

Root Directory:
apps/sta-craft-prototype

Settings:
- Framework: Vite
- Build: npm run build
- Output: dist
- Install: npm install

Branch/PR:
Preview

main:
Production

환경변수:
현재 없음.
추후 Secret이 필요하면 Vercel Environment Variable에만 저장.

## 12. Security & Privacy

- 실제 회사 Data Upload는 초기 Prototype에서 제공하지 않음
- Synthetic Data 우선
- PII/민감데이터 입력경고
- External Send/Email 자동발송은 Sandbox에서 simulation 우선
- Human Approval을 UI/Case에 시각화
- AI Output은 “초안/검토 필요”로 명시

## 13. Performance

- 이미지가 필요하면 최적화
- 대형 JS library 추가 전 목적 확인
- 6개 Case 정도에서 무거운 상태관리 library 불필요
- Core Web Vitals를 해치지 않는 범위에서 visual richness 강화

## 14. Documentation Update Rule

다음이 바뀌면 문서를 함께 갱신:
- 사업모델 → 02
- 교육과정 → 03
- Funnel → 04
- 기능/UX → 05
- 구조/배포 → 06
- KPI/Experiment → 07
- 다음 작업 → 08
- 주요 전략변경 → 01 Version History

## 15. Forbidden Product Drift

Codex는 다음 방향으로 임의 확장하지 않는다.
- S.T.A.를 컨설팅 회사로 재정의
- Learner 대신 완성 Workflow 생성
- Marketplace를 MVP에 추가
- 복잡한 회원/결제/백엔드 선행
- “검증된 교육”처럼 허위 Social Proof 추가
- 특정 SaaS 사용법 교육으로 중심 이동

