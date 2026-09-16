# S.T.A.크래프트 Prototype v0.1

S.T.A.크래프트(Strategic Tech-tree Architect Craft)의 사업·교육 가설을 실제 화면으로 검증하기 위한 인터랙티브 MVP입니다.

## 랜딩페이지 버전

현재 기본 화면은 **V3 쉬운 설명 버전**입니다. 화면 상단의 버전 스위처로 세 버전을 즉시 비교할 수 있습니다.

- 대표/V3: https://gdone9009.github.io/STACraft/ 또는 `?version=3`
- V2 실전 체험형: https://gdone9009.github.io/STACraft/?version=2
- V1 기존 버전: https://gdone9009.github.io/STACraft/?version=1

V3는 AI가 낯선 경력자가 10초 안에 서비스를 이해하는 것을 목표로 전문용어를 줄였습니다. 문제 공감 → 배우는 방법 → 4주 과정 → 완성 결과물 → 대상자 → 무료 체험 순으로 설명합니다. V2는 Sandbox/Canvas를 직접 체험하는 상세 실전형이며 V1은 원본 비교용으로 보존합니다.

## 현재 단계

- 사업계획 기준: v5.0 S.T.A. Architect Lab
- 웹 제품: Prototype v0.1
- 단계: Problem Discovery / Pre-validation
- 실제 유료 S.T.A. Pilot: 없음
- 현재 실행증거: 아이디어 논의 + 4050 AI Cafe Prototype + S.T.A. Web Prototype

Case, 데이터, 학습성과 표현은 교육모델 검증용이며 실제 고객 성과를 의미하지 않습니다.

## 제품 한 문장

AI가 낯선 경력자가 혼자 막히지 않도록 동료학습과 1:1 도움을 결합해, 4주 동안 자신의 업무에 활용할 AI 업무 흐름과 포트폴리오를 직접 만들어보는 교육 MVP입니다.

## 현재 구현

- V1 / V2 / V3 랜딩페이지 및 URL 기반 전환
- V3 쉬운 설명·친근한 카피·모바일 반응형 UI
- 4주 Learning Tech-tree
- 2-Day Bootcamp / Architect Lab 20 / Architect Lab 40
- Sandbox Case Library 6종
- 영업실적 보고 Case Synthetic Data 예제
- Architect Canvas: Input / Process / Rule / AI Role / Human Approval / Output
- Canvas 진행률 / Peer Review 질문 / Modification Challenge

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

GitHub 저장소 Settings → Pages → Build and deployment → Source는 **GitHub Actions**를 사용합니다. main에 push하면 npm ci → npm run build → dist 업로드 → Pages 배포가 자동 실행됩니다. PR에서는 빌드만 검사합니다.

vite.config.js의 base는 /STACraft/입니다. 저장소 이름을 바꾸면 이 설정도 변경해야 합니다. 환경변수나 API 키는 필요하지 않습니다.

## Policy Change Log

- 2026-09-16: 완전히 새로운 랜딩 V3 추가. AI 초보 경력자가 쉽게 이해하도록 전문용어를 줄이고 친근한 문장으로 재구성. 기본 랜딩을 V3로 변경하고 V1/V2/V3 전환 및 `?version=1`, `?version=2`, `?version=3` 공유 URL 지원. V2의 실제 Sandbox 체험 기능과 V1 원본은 보존.
- 2026-09-16: 랜딩 V2를 제공하고 V1 비교 경로를 보존. 버전 전환 시 입력 손실 확인을 제공하며, 새로고침·과제 변경 시 입력이 사라지는 범위를 화면에 고지.
- 2026-09-16: Codex-Connector-test의 feat/sta-craft-prototype 브랜치에서 독립 저장소 루트로 이전.
- 2026-09-16: 기본 배포를 GitHub Pages로 변경하고 Vite base, 자동 배포 workflow, package-lock.json 및 .gitignore 추가.
- 운영·개발·보안·배포 정책 변경은 이 변경 이력에 계속 기록합니다.

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
- docs/09_LANDING_V2_REVIEW.md — V2 상세 평가

## MVP 다음 단계

P0: Case 01 완성형 Reference Case, Case data 분리, 6개 Case Pack, Hint 1/2/3, Failure Dataset / Break & Fix, Reference Architecture gating, Portfolio Preview, npm run build.

P1: localStorage 진행상태, 20h/40h 과정별 Learning Path, Analytics Event abstraction.

P2: MY WORK, Peer Review Mock, Portfolio Export, Vercel Preview polish.

## 절대 금지

- 없는 Pilot/수강성과를 실제처럼 표시
- S.T.A.를 자동화 외주/컨설팅으로 변경
- 학습자 대신 AI가 최종 답을 먼저 생성
- 실제 Secret/API Key 커밋
- 실제 회사 기밀데이터를 Sample로 사용


## Advanced Challenge Reference Pack

2026-09-16 추가:

- `challenges/advanced-customer-risk-01/`
- 가상 B2B SaaS 고객이탈·매출위험 조기경보 과제
- 정상 데이터 6종 + Failure Dataset 3종
- 문제정의 / Business Rule / 100점 Rubric / 제출 Template
- 고객별 Risk Score, Executive Brief, Data Quality Report, Human × AI Workflow 모범답안
- Python 표준라이브러리 기반 재현용 Reference Scorer
- 정상 데이터 기준 모범 결과: HIGH/CRITICAL 5개, MRR at Risk 25,600,000원

이 Pack은 실제 고객성과가 아니라 **교육모델 검증용 Synthetic Reference Case**입니다. 향후 Kaggle형 Challenge UX와 자동채점 구조를 검증하기 위한 기준 사례로 사용합니다.
