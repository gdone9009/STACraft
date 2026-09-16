# S.T.A.크래프트 종합 사업계획 v5.0

## 1. Executive Summary

S.T.A.크래프트는 경력자가 자신의 업무를 Human × AI Workflow로 직접 설계할 수 있도록 훈련하는 프로젝트 기반 동료학습 서비스다.

고객이 Junior Coder가 되는 것이 목표가 아니다. 이미 가진 도메인 경험을 업무구조, 판단규칙, 데이터, AI 역할, Human Approval로 표현하는 Workflow Architect가 되는 것이 목표다.

## 2. Problem

### FACT
- 현재 S.T.A. 유료 Pilot은 없다.
- 여러 사람과 아이디어를 논의했다.
- 4050 AI Cafe 웹 프로토타입과 S.T.A. 웹 프로토타입을 만들었다.

### HYPOTHESIS
- 생성형 AI를 사용해본 경력자도 자신의 실제 업무를 재설계하는 데 어려움을 느낀다.
- 일반 AI 강의는 기능을 설명하지만 업무 구조화와 전이학습은 충분히 제공하지 못할 수 있다.
- 외주/컨설팅은 결과물을 제공하지만 고객에게 독립 수정역량을 남기지 못할 수 있다.

## 3. Initial Customer Hypothesis

초기 고객가설:
- 대략 45~59세 전후의 경력자
- 15년 이상의 직무경험
- PC 기반 반복 지식업무 보유
- 생성형 AI 사용경험이 있으나 실제 업무 적용은 제한적
- 보고·Excel 취합·회의후속·VOC·문의분류 등 반복업무가 있음

연령 자체보다 다음이 더 중요한 세분화 기준이다.
- 반복업무 빈도
- 문제의 경제적/심리적 고통
- 데이터 접근성
- 학습의지
- 지불의사
- 스스로 수정할 필요성

## 4. Value Proposition

“AI 사용법을 배우는 것이 아니라, 내 업무를 다시 설계한다.”

고객이 가져가는 것:
- Workflow Canvas
- 작동하는 Workflow 또는 Prototype
- Failure/Exception Map
- Human Approval 설계
- Modification 경험
- Portfolio
- 새로운 업무를 독립적으로 설계하는 사고법

## 5. Differentiation

### Generic AI Training
기능/프롬프트 학습은 가능하지만 실제 업무 Asset과 전이능력은 별도 과제가 될 수 있다.

### Consulting/Outsourcing
실제 Asset은 얻을 수 있지만 Learner의 독립 설계능력이 목표는 아니다.

### S.T.A.
설계 의도상 Capability와 Asset을 동시에 만든다. 단, 아직 실제 유료검증 전이므로 “우월성이 입증되었다”고 표현하지 않는다.

## 6. Learning Method

공통 언어:
Input / Output / Rule / Process / AI / Human / Exception / Approval

핵심 루프:
Discover → Build → Improve → Architect

졸업기준:
Build → Test → Fix → Modify → Transfer

## 7. Product Portfolio

### 4050 AI Cafe
- 무료/저가
- 5~30분
- AI 첫 성공
- 콘텐츠·Q&A·커뮤니티
- S.T.A.의 Top-of-Funnel

### 2-Day Workflow Bootcamp
- 2일 / 약 14시간
- 집중 체험
- Build → Break → Fix → Architect
- B2C 진입상품이자 B2B 첫 Workshop 후보

### Architect Lab 20
- 4주 / 20시간
- 재직자 친화형
- Workflow Builder 목표
- 공통 Case + 선택 Case + My Work/Advanced Case

### Architect Lab 40
- 4주 / 40시간
- 심화 프로젝트형
- Workflow Architect 목표
- 다중 Case + Red Team + My Work + Unseen Challenge

### Corporate Architect Lab
기업의 Workflow를 대신 만들어주는 서비스가 아니다.
“귀사의 실무자가 자기 업무를 직접 AI Workflow로 설계하고 개선하도록 훈련”하는 B2B 교육상품이다.

## 8. Sandbox Strategy

실제 회사 데이터를 가져오기 어려운 학습자를 위해 가상의 회사, Synthetic Data, Business Rule, Failure Data를 제공한다.

Case Pack 구성:
1. Mission Brief
2. Synthetic Data
3. Business Rules
4. Current Manual Workflow
5. Workflow Canvas
6. Failure Data
7. Hints
8. Reference Architecture
9. Modification Challenge
10. Architect Challenge

초기에는 자체 무거운 클라우드 플랫폼을 구축하지 않는다. 기존 Web/LMS, Spreadsheet, LLM, Automation Tool 등을 조합한 Managed Learning Environment를 검증한 뒤 반복성이 확인되면 제품화한다.

## 9. Tool Policy

- 특정 유료 SaaS를 Core Curriculum의 필수조건으로 두지 않는다.
- 기본과정은 무료도구 또는 기관제공 환경에서 완주할 수 있게 설계한다.
- 필요시 제한된 AI/API/자동화 실습 Credit 제공을 검토한다.
- 실제 배포 단계에서는 개인/기업이 적합한 도구를 선택한다.
- 학습해야 할 것은 Tool이 아니라 Workflow Architecture다.

## 10. Business Model

교육 중심 Revenue Ladder:
- Free/Low: Cafe / Discovery
- Entry: 2-Day Bootcamp
- Core: Lab 20 / Lab 40
- B2B: Corporate Architect Lab
- Later: Advanced Lab / Alumni Guild / Facilitator Program / Case Library

가격은 아직 검증 전 가설이다. 실제 가격은 유료고객 인터뷰와 Pilot에서 확정한다.

## 11. Learning/Data Flywheel

Seed Cases
→ Learner Projects
→ New Real Problems
→ Anonymize/Generalize
→ Synthetic Data
→ New Sandbox Cases
→ Problem Library
→ Next Cohort

장기 자산:
Problem Library × Solution Library × Human Network

AI Coach의 역할은 정답 자동생성이 아니라 사고 Scaffold다.
예: “Human Approval Point가 보이지 않습니다. 어디에 둘 것인가?”

## 12. Safety

초기 교육과제에서 고위험 자동의사결정은 제외한다.
- 의료 진단/치료결정
- 법률 판단
- 금융투자 판단
- 자동 HR 채용/해고 결정

원칙:
- Human Approval
- Data Minimization
- Sensitive Data Check
- No Blind Automation
- Synthetic Data First

## 13. Go-to-Market

초기:
4050 AI Cafe / 기존 네트워크 / 콘텐츠
→ Free Workflow Challenge
→ 2-Day
→ Lab 20/40

증명 이후:
졸업생 Portfolio Demo
→ YouTube 사례 콘텐츠
→ 소액 광고 CAC 실험
→ 기업/협회 파트너

확장:
언론사·협회 공동 Conference/Challenge
→ B2B Corporate Architect Lab

## 14. 현재 검증 목표

TARGET:
- 고객 인터뷰 30명
- Workflow Diagnosis 20건
- 초기 유료고객 10명
- 첫 Cohort 6~8명
- Seed Case 6개 완성

핵심 질문:
“첫 과정에서 7번째 Case가 실제 학습자의 업무에서 탄생하는가?”

## 15. 장기 비전

Content
→ Curriculum
→ Managed Sandbox
→ Learning Data
→ AI Coach
→ Human × AI Workflow Learning Platform

S.T.A.는 경력자의 과거 경험을 지우고 다시 시작하게 하는 교육이 아니다. 그 경험을 AI 시대의 Architecture 자산으로 변환하는 교육을 지향한다.

