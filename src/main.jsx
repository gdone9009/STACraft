import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import LegacyLanding from './LegacyLanding';
import LandingV2 from './LandingV2';
import LandingV3 from './LandingV3';
import './style.css';
import './upgrade.css';
function App(){
 const [version,setVersion]=useState(()=>{const v=new URLSearchParams(location.search).get('version');return ['1','2','3'].includes(v)?v:'3'});
 function change(next){
  if(next===version)return;
  if(document.querySelector('textarea') && [...document.querySelectorAll('textarea')].some(el=>el.value.trim()) && !window.confirm('버전을 바꾸면 작성 중인 설계가 사라집니다. 전환할까요?'))return;
  const url=new URL(location.href);url.searchParams.set('version',next);url.hash='';history.replaceState(null,'',url);setVersion(next);window.scrollTo(0,0);
 }
 return <><a className="skipLink" href="#top">본문으로 건너뛰기</a><div className="versionBar"><span>랜딩페이지 비교</span><div role="group" aria-label="랜딩페이지 버전"><button aria-pressed={version==='1'} onClick={()=>change('1')}>V1 기존</button><button aria-pressed={version==='2'} onClick={()=>change('2')}>V2 실전</button><button aria-pressed={version==='3'} onClick={()=>change('3')}>V3 쉬운 설명</button></div></div>{version==='1'?<LegacyLanding/>:version==='2'?<LandingV2/>:<LandingV3/>}</>;
}
createRoot(document.getElementById('root')).render(<App/>);
