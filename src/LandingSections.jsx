import React,{useState} from 'react';
const programs=[
 {name:'2-Day Bootcamp',time:'2일 · 약 14시간',who:'짧게 집중해서 경험하고 싶다면',goal:'업무 하나를 설계하고 오류를 찾아 수정하는 흐름 경험',work:'집중 실습 중심 · 오프라인 과정 계획'},
 {name:'Architect Lab 20',time:'4주 · 20시간',who:'현업과 함께 학습하고 싶다면',goal:'공통·선택 과제로 업무 설계와 기본 동료 검토 연습',work:'주당 평균 5시간 · 내 업무 또는 심화 예제 적용'},
 {name:'Architect Lab 40',time:'4주 · 40시간',who:'여러 업무로 깊게 확장하고 싶다면',goal:'여러 과제의 예외를 검토하고 처음 보는 문제까지 설계',work:'주당 평균 10시간 · 심화 프로젝트 중심'}
];
export function ProgramGuide(){
 const [selected,setSelected]=useState(1);
 return <div className="programGuide"><p className="sectionKicker">어떤 학습 방식이 나에게 맞을까요?</p><div className="programChoices" role="group" aria-label="교육과정 비교">{programs.map((p,i)=><button key={p.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{p.name}<small>{p.time}</small></button>)}</div><div className="programDetail" aria-live="polite"><div><small>{programs[selected].who}</small><h3>{programs[selected].name}</h3><strong>{programs[selected].time}</strong></div><div><p>{programs[selected].goal}</p><p>{programs[selected].work}</p></div></div><p className="honestNote">교육과정 설계안입니다. 모집 일정·가격은 아직 확정되지 않았으며, 현재 신청·결제는 받지 않습니다.</p></div>
}
export function Outcomes(){return <section className="section outcomes"><div className="sectionHead"><div><p>EXPERIENCE → DESIGN</p><h2>업무를 아는 당신이<br/>설계의 중심입니다.</h2></div><p>보고서를 매주 취합하거나, 회의 뒤 할 일을 정리하거나, 문의를 분류하는 분에게. 익숙한 판단을 글로 꺼내는 것부터 시작합니다.</p></div><div className="outcomeGrid">{[['01','업무 설계도','자료 → 처리 → 판단 → 결과. 머릿속 업무 흐름을 여섯 칸으로 정리합니다.','지금 체험 가능'],['02','검토 질문과 수정 경험','AI의 오류와 사람의 승인 지점을 점검하고, 조건이 바뀌었을 때 설계를 고칩니다.','지금 자기 점검 가능'],['03','다음 업무에 적용할 포트폴리오','설계·실패·수정 이유를 기록하고 새로운 문제에 적용하는 것을 목표로 합니다.','정규 과정 목표 / 웹 기능 준비 중']].map(([n,h,p,b])=><article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p><small>{b}</small></article>)}</div></section>}
export function LandingFAQ(){return <section className="section faq" id="faq"><div><p className="sectionKicker">시작하기 전에</p><h2>궁금한 점을<br/>먼저 확인하세요.</h2></div><div>{[
 ['코딩을 잘해야 체험할 수 있나요?','현재 체험은 문제를 읽고 업무 흐름을 글로 설계하는 방식입니다. 코드를 작성하거나 AI 계정을 연결할 필요는 없습니다.'],
 ['회사 자료를 가져와야 하나요?','아니요. 영업보고 과제에 가상 데이터가 제공됩니다. 실제 회사 기밀이나 개인정보는 입력하지 마세요. 나머지 5개 과제의 상세 데이터는 준비 중입니다.'],
 ['체험하면 무엇이 만들어지나요?','입력 자료, 처리 순서, 판단 규칙, AI 역할, 사람 승인, 결과물로 구성된 설계 메모를 작성합니다. 현재 화면에서 실제 자동화가 실행되거나 보고서가 발송되지는 않습니다.'],
 ['작성한 내용이 저장되나요?','현재는 이 화면을 열어둔 동안만 유지됩니다. 새로고침, 과제 변경, V1/V2 전환 시 사라집니다. 계정 저장·파일 내보내기는 아직 제공하지 않습니다.'],
 ['지금 정규 과정에 신청할 수 있나요?','현재는 교육모델을 검증하기 위한 공개 체험 단계입니다. 유료 파일럿 실적은 없으며 가격·일정·신청 경로는 아직 확정되지 않았습니다.'],
 ['동료학습은 어떻게 진행되나요?','정규 과정은 자신의 설계를 동료와 검토하고 전문가의 질문과 피드백을 받도록 설계하고 있습니다. 현재 웹 체험은 자기 점검 질문을 제공하며 실제 동료 연결은 제공하지 않습니다.']
 ].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>}
