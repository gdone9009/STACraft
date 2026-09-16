# S.T.A.크래프트 Prototype v0.1

S.T.A.크래프트(Strategic Tech-tree Architect Craft)의 사업·교육 가설을 실제 화면으로 검증하기 위한 인터랙티브 MVP입니다.

## 현재 단계

- 사업계획 기준: v5.0 S.T.A. Architect Lab
- 웹 제품: Prototype v0.1
- 단계: Problem Discovery / Pre-validation
- 실제 유료 S.T.A. Pilot: 없음
- 현재 실행증거: 아이디어 논의 + 4050 AI Cafe Prototype + S.T.A. Web Prototype

따라서 Case, 데이터, 학습성과 표현은 교육모델 검증용이며 실제 고객 성과를 의미하지 않습니다.

## 제품 한 문장

AI 자동화를 대신 구축하는 서비스가 아니라, 경력자가 자신의 업무를 Human × AI Workflow로 직접 설계·검증·수정할 수 있는 Workflow Architect로 성장하도록 돕는 프로젝트 기반 동료학습 MVP입니다.

## 현재 구현

- 브랜드 랜딩페이지
- 4주 Learning Tech-tree
- 2-Day Bootcamp / Architect Lab 20 / Architect Lab 40
- Sandbox Case Library 6종
- 영업실적 보고 Case Synthetic Data 예제
- Architect Canvas: Input / Process / Rule / AI Role / Human Approval / Output
- Canvas 진행률
- Peer Review 질문
- Modification Challenge
- 모바일 반응형 UI

## 실행

    cd STACraft
    npm ci
    npm run dev

Production:

    npm run build
    npm run preview

## GitHub Pages 배포

저장소: https://github.com/gdone9009/STACraft
배포 주소: https://gdone9009.github.io/STACraft/

최초 1회 GitHub 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택합니다. 이후 Actions → Deploy GitHub Pages → Run workflow를 실행합니다.

main에 push하면 npm ci → npm run build → dist 업로드 → Pages 배포가 자동 실행됩니다. PR에서는 빌드만 검사합니다. Actions 실행이 성공한 뒤 위 주소에서 확인합니다.

vite.config.js의 base는 /STACraft/입니다. 저장소 이름을 바꾸면 이 설정도 변경해야 합니다. 환경변수나 API 키는 필요하지 않습니다. 소스와 사업 문서는 루트와 docs에 보관하고, 공개 웹사이트에는 dist만 배포합니다.

## 원본 및 Policy Change Log

- 2026-09-16: Codex-Connector-test의 feat/sta-craft-prototype 브랜치, 커밋 4d31c545cafdbd3330fa9bfdccf124e311d8b1ec의 apps/sta-craft-prototype를 독립 저장소 루트로 이전했습니다.
- 2026-09-16: 기본 배포를 GitHub Pages로 변경하고 Vite base, 자동 배포 workflow, package-lock.json 및 .gitignore를 추가했습니다. 기존 랜딩·학습 기능과 사업계획 v5를 유지했습니다.
- 운영·개발·보안·배포 정책 변경은 이 변경 이력에 계속 기록합니다.

## Codex에서 이어서 개발하기

가장 먼저 읽기:
1. AGENTS.md
2. docs/00_INDEX.md
3. docs/08_CODEX_HANDOFF.md
4. docs/05_PRODUCT_REQUIREMENTS.md
5. docs/06_DEVELOPMENT_GUIDE.md

현재 다음 Sprint 목표:
“6개 Case를 동일 Schema로 만들고 Challenge → Canvas → Hint → Failure → Fix → Reference → Modification → Portfolio의 완전한 Learning Journey를 구현한다.”

## 문서 체계

- docs/00_INDEX.md — 문서 우선순위 및 현재 기준
- docs/01_VERSION_HISTORY.md — 사업모델 v1~v5 변경이력
- docs/02_BUSINESS_PLAN_V5.md — 현재 종합 사업계획
- docs/03_EDUCATION_CURRICULUM.md — 2-Day / 20h / 40h / Sandbox
- docs/04_MARKETING_GTM.md — Cafe·Challenge·YouTube·언론사·B2B
- docs/05_PRODUCT_REQUIREMENTS.md — Web MVP PRD
- docs/06_DEVELOPMENT_GUIDE.md — 개발·배포·테스트
- docs/07_VALIDATION_AND_METRICS.md — 고객/학습/사업 검증지표
- docs/08_CODEX_HANDOFF.md — 현재 상태와 v0.2 Sprint

## MVP 다음 단계

P0:
1. Case 01 완성형 Reference Case
2. Case data 분리
3. 6개 Case Pack
4. Hint 1/2/3
5. Failure Dataset / Break & Fix
6. Reference Architecture gating
7. Portfolio Preview
8. npm run build

P1:
- localStorage 진행상태
- 20h/40h 과정별 Learning Path
- Analytics Event abstraction

P2:
- MY WORK
- Peer Review Mock
- Portfolio Export
- Vercel Preview polish

## 검증할 핵심 가설

- 경력자는 AI 도구 강의보다 실제 업무 Case 기반 학습에 더 높은 가치를 느끼는가?
- 실제 업무를 가져오지 못하는 학습자에게 Synthetic Case가 충분한 진입경로가 되는가?
- Build → Break → Fix → Modify → Transfer 방식이 독립적인 Workflow 설계 능력으로 이어지는가?
- 2-Day, 20h, 40h 중 고객군별 지불의사와 학습성과가 어떻게 다른가?

## 절대 금지

- 없는 Pilot/수강성과를 실제처럼 표시
- S.T.A.를 자동화 외주/컨설팅으로 변경
- 학습자 대신 AI가 최종 답을 먼저 생성
- 실제 Secret/API Key 커밋
- 실제 회사 기밀데이터를 Sample로 사용

