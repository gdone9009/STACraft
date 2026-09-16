# AGENTS.md — S.T.A.크래프트 Prototype

이 파일은 STACraft 저장소 전체에서 작업하는 Codex/AI 개발자가 반드시 따라야 할 앱별 규칙이다. Root AGENTS.md보다 이 앱에 특화된 지침을 추가한다.

## 1. 먼저 읽을 문서

작업 전 순서:
1. docs/00_INDEX.md
2. docs/08_CODEX_HANDOFF.md
3. docs/05_PRODUCT_REQUIREMENTS.md
4. docs/06_DEVELOPMENT_GUIDE.md
5. 필요 시 docs/03_EDUCATION_CURRICULUM.md
6. 카피/사업표현 변경 시 docs/02_BUSINESS_PLAN_V5.md와 04_MARKETING_GTM.md

## 2. Product Identity

S.T.A.크래프트는 AI 자동화를 대신 구축하는 컨설팅 회사가 아니다.

목표:
경력자가 자신의 업무를 Human × AI Workflow로 직접 설계·검증·수정할 수 있는 Workflow Architect로 성장하도록 돕는 프로젝트 기반 동료학습 서비스.

Learner = Actor
Expert/AI = Facilitator

## 3. Evidence Guardrail

현재 FACT:
- 유료 S.T.A. Pilot 없음
- 아이디어 논의
- 4050 AI Cafe Prototype
- S.T.A. Web Prototype

절대 실제 성과처럼 쓰지 말 것:
- 5명 Pilot
- 3시간→10초
- 80% Completion
- 검증된 생산성 개선
- 존재하지 않는 고객사/후기/수강생

가설은 HYPOTHESIS, 목표는 TARGET으로 표시.

## 4. Learning Guardrail

반드시 보존:
- Challenge Before Answer
- Build → Test → Fix → Modify → Transfer
- Synthetic Data First
- Human Approval
- Failure Sandbox
- Peer Review
- Transfer Test

AI가 학습자 대신 완성 Workflow를 즉시 생성하는 UX를 기본값으로 만들지 않는다.

## 5. MVP Scope Guardrail

v0.2 우선:
- 6 Case Packs
- Hint 1/2/3
- Failure Challenge
- Reference Architecture gating
- Portfolio Preview
- 과정별 Learning Path
- build/test

지금 만들지 않음:
- Marketplace
- 자체 LLM 플랫폼
- Kubernetes
- 복잡한 Auth/Payment
- 실시간 협업
- 대규모 Backend
- 실제 회사정보 자동발송

## 6. Code Quality

- 작은 commit
- 기존 UI를 깨뜨리지 않는 점진적 refactor
- main.jsx의 data/component 분리 우선
- secret 하드코딩 금지
- 실제 개인정보를 sample data에 사용하지 않음
- 접근성과 mobile 확인
- npm run build 통과 후 작업 완료

## 7. Documentation Sync

기능 변경:
- README.md
- docs/05_PRODUCT_REQUIREMENTS.md
- docs/08_CODEX_HANDOFF.md

교육 변경:
- docs/03_EDUCATION_CURRICULUM.md

전략 변경:
- docs/01_VERSION_HISTORY.md
- docs/02_BUSINESS_PLAN_V5.md
- docs/04_MARKETING_GTM.md

정책 변경:
- root README.md Policy Change Log

## 8. Done Definition

작업 종료 전 보고:
- 무엇을 바꿨는지
- 어떤 파일을 바꿨는지
- 어떤 테스트를 실행했는지
- 무엇이 아직 미완료인지
- 다음 권장 작업

