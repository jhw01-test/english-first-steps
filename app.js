/* 하루 영어 첫걸음 v1 — browser-only, no third-party calls or tracking. */
(()=>{
'use strict';
const data=JSON.parse(document.getElementById('curriculum-data').textContent);
const LESSONS=data.lessons;
const KEY='everyday-english-foundation-state-v1';
const defaultState=()=>({completed:{},quizRecords:{},starred:[],srs:{},rate:.86,studyMinutes:30});
let storageAvailable=true;
function loadState(){
 try{
  const raw=localStorage.getItem(KEY);
  if(!raw)return defaultState();
  const x=JSON.parse(raw);
  if(!x || typeof x!=='object' || Array.isArray(x))throw Error('invalid');
  const safe=defaultState();
  if(x.completed&&typeof x.completed==='object')for(const [k,v] of Object.entries(x.completed)){
   if(/^\d{1,2}$/.test(k)&&+k>=0&&+k<72&&typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v))safe.completed[k]=v;
  }
  if(x.quizRecords&&typeof x.quizRecords==='object')for(const [k,v] of Object.entries(x.quizRecords)){
   if(/^\d{1,2}$/.test(k)&&+k<72&&v&&Number.isInteger(v.correct)&&v.correct>=0&&v.correct<=5)safe.quizRecords[k]={correct:v.correct,total:5};
  }
  if(Array.isArray(x.starred))safe.starred=x.starred.filter(s=>typeof s==='string'&&s.length<80).slice(0,500);
  if(x.srs&&typeof x.srs==='object')for(const [k,v] of Object.entries(x.srs)){
   if(k.length<80&&v&&Number.isInteger(v.level)&&v.level>=0&&v.level<=5&&typeof v.due==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v.due))safe.srs[k]={level:v.level,due:v.due};
  }
  if(typeof x.rate==='number'&&x.rate>=.65&&x.rate<=1.25)safe.rate=x.rate;
  if([15,20,30,45].includes(x.studyMinutes))safe.studyMinutes=x.studyMinutes;
  return safe;
 }catch(e){storageAvailable=false;return defaultState();}
}
let state=loadState();
let screen='home';
let lessonIndex=0;
let lessonTab='sound';
let wordMeaningsVisible=true;
let sentenceMeaningVisible=true;
let quiz=null;
let wordFilter='learned';
let wordSearch='';
let reviewReveal=false;
let quizHint=false;
const app=document.getElementById('app');
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageAvailable=true}catch(e){storageAvailable=false}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function attr(s){return esc(s)}
function dateStr(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function futureDate(days){const d=new Date();d.setDate(d.getDate()+days);return dateStr(d)}
function nextIndex(){const idx=LESSONS.findIndex(l=>!state.completed[l.id]);return idx===-1?71:idx}
function completedCount(){return Object.keys(state.completed).length}
function seenWords(){const s=new Set();for(const l of LESSONS)if(state.completed[l.id])l.words.forEach(w=>s.add(w.word.toLowerCase()));return s}
function uniqueVocab(){const x=new Map();for(const l of LESSONS)for(const w of l.words)if(!x.has(w.word.toLowerCase()))x.set(w.word.toLowerCase(),w.meaning);return x}
const allVocab=uniqueVocab();
function dueWords(){const today=dateStr();return Object.entries(state.srs).filter(([w,r])=>r.due<=today).sort((a,b)=>a[1].due.localeCompare(b[1].due)).map(([w,r])=>({word:w,meaning:allVocab.get(w)||'',level:r.level}));}
function calculateStreak(){
 const dates=new Set(Object.values(state.completed));if(!dates.size)return 0;
 const d=new Date();if(!dates.has(dateStr(d)))d.setDate(d.getDate()-1);
 let n=0;for(let k=0;k<366;k++){const v=dateStr(d);if(!dates.has(v))break;n++;d.setDate(d.getDate()-1)}return n;
}
function pct(n,d){return Math.round((n/d)*100)}
function render(){
 app.innerHTML=`<header class="site-header"><div class="shell header-inner">
  <button class="brand" data-act="goto" data-to="home" aria-label="첫 화면으로 이동"><span class="brand-mark">Aa</span><span><span class="brand-name">하루 영어 첫걸음</span><span class="brand-sub">알파벳부터, 나만의 속도로</span></span></button>
  <nav class="nav" aria-label="주요 메뉴">
   ${[['home','오늘 학습'],['progress','12주 진도'],['vocab','단어장'],['settings','설정']].map(([s,t])=>`<button class="${screen===s||(s==='home'&&screen==='day')?'active':''}" data-act="goto" data-to="${s}" ${screen===s?'aria-current="page"':''}>${t}</button>`).join('')}
  </nav></div></header>
  <main class="shell" id="main-content">${!storageAvailable?'<div class="alert">이 환경에서는 자동 저장이 제한될 수 있습니다. 일반 웹브라우저에서 열거나 백업 기능을 사용해 주세요.</div>':''}${screen==='home'?homeHTML():screen==='day'?dayHTML():screen==='progress'?progressHTML():screen==='vocab'?vocabHTML():settingsHTML()}</main>
  <footer class="footer shell">하루 영어 첫걸음 · 12주 / 72회 학습 · 학습 데이터는 이 기기의 브라우저에 저장됩니다.</footer>`;
}
function homeHTML(){
 const n=completedCount(),next=nextIndex(),l=LESSONS[next],due=dueWords(),known=seenWords().size;
 const isAll=n===72;
 const head=`<span class="eyebrow">${isAll?'YOU DID IT':`WEEK ${String(l.week).padStart(2,'0')} · DAY ${String(l.id+1).padStart(2,'0')}`}</span>
 <h1 class="h1">${isAll?'12주 학습을 완료했어요!':'오늘도 영어 한 걸음,'}<br>${isAll?'이제 원하는 만큼 복습해요.':'천천히 시작해요.'}</h1>
 <p class="lead">${isAll?'기초부터 쌓아온 습관을 이어가세요. 단어를 복습하거나 원하는 수업을 다시 열어볼 수 있습니다.':`오늘의 수업은 <b>${esc(l.title)}</b>입니다. 짧게 듣고, 입으로 읽고, 작은 문제를 풀면 됩니다.`}</p>
 <div class="button-row gap-top"><button class="btn primary" data-act="open-day" data-i="${next}">${isAll?'마지막 수업 복습하기':'오늘의 수업 시작하기'} <span aria-hidden="true">→</span></button><button class="btn" data-act="goto" data-to="progress">전체 계획 보기</button></div>`;
 return `<div class="panel hero"><section class="hero-copy">${head}</section><section class="hero-side"><div><div class="card-header"><span class="soft-label">전체 학습 진도</span><span class="pill">${n} / 72회</span></div><div class="progress-numbers"><span class="big-number">${pct(n,72)}%</span><span class="tiny muted">완료</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct(n,72)}%"></div></div></div><div><div class="soft-label">오늘의 계획</div><p style="margin:6px 0 0;font-weight:800">${state.studyMinutes}분 · 듣기 → 읽기 → 퀴즈</p><p class="tiny muted" style="margin:3px 0 0">속도보다 매일 반복하는 습관이 중요해요.</p></div></section></div>
 <div class="stat-grid"><div class="panel stat"><div class="soft-label">완료한 수업</div><div class="stat-value">${n}<span class="muted" style="font-size:14px"> / 72</span></div><div class="tiny muted">천천히 쌓은 학습</div></div><div class="panel stat"><div class="soft-label">배운 단어</div><div class="stat-value">${known}<span class="muted" style="font-size:14px">개</span></div><div class="tiny muted">중복 제외</div></div><div class="panel stat"><div class="soft-label">연속 학습일</div><div class="stat-value">${calculateStreak()}<span class="muted" style="font-size:14px">일</span></div><div class="tiny muted">완료 날짜 기준</div></div></div>
 <section class="section"><div class="section-header"><h2 class="h2">매일 이렇게 학습해요</h2><span class="tiny muted">${state.studyMinutes}분 기준</span></div><div class="steps-grid">${[
 ['01','이전 내용 복습', '배운 글자·단어 다시 보기','5분'],['02','소리와 파닉스','알파벳 이름과 소리 익히기','10분'],['03','오늘의 5단어','듣고, 읽고, 의미 익히기','10분'],['04','문장과 미니퀴즈','소리 내어 읽고 확인하기','5분']
 ].map(x=>`<div class="panel step"><span class="step-num">${x[0]} · ${x[3]}</span><div class="step-title">${x[1]}</div><div class="step-sub">${x[2]}</div></div>`).join('')}</div></section>
 <section class="section"><div class="section-header"><h2 class="h2">복습할 단어</h2><span class="round-tag">${due.length}개</span></div>${reviewHTML(due)}</section>
 <section class="section"><div class="panel pad"><div class="card-header"><h2 class="h2">12주 후에는?</h2><span class="pill">기초 영어 완성 준비</span></div><p class="lead">알파벳 이름과 소리, 기초 파닉스, 쉬운 단어와 문장까지 익힌 뒤 이미 가지고 있는 토익·토스·오픽 교재를 활용할 수 있는 기반을 마련합니다. 학습 기간은 사람마다 달라질 수 있어요.</p></div></section>`;
}
function reviewHTML(due=dueWords()){
 if(!due.length)return `<div class="panel pad"><div style="font-weight:800;margin-bottom:5px">지금 복습 기한이 된 단어가 없어요.</div><p class="lead">학습을 완료한 다음 날부터 복습이 쌓입니다. 기존에 배운 단어는 단어장에서 언제든 다시 들을 수 있습니다.</p><button data-act="goto" data-to="vocab" class="btn small" style="margin-top:14px">단어장 열기 →</button></div>`;
 const v=due[0];
 return `<div class="panel pad review-grid"><div class="review-front"><span class="soft-label">복습 1 / ${due.length}</span><span class="review-word">${esc(v.word)}</span><button data-act="speak" data-text="${attr(v.word)}" class="btn small">🔊 발음 듣기</button></div><div style="display:flex;flex-direction:column;justify-content:center;gap:12px"><span class="soft-label">이 단어를 기억하나요?</span>${reviewReveal?`<div style="font-size:20px;font-weight:850">${esc(v.meaning)}</div><div class="button-row"><button data-act="review-answer" data-word="${attr(v.word)}" data-known="1" class="btn green">기억나요</button><button data-act="review-answer" data-word="${attr(v.word)}" data-known="0" class="btn">한 번 더</button></div>`:`<button data-act="reveal-review" class="btn primary">뜻 확인하기</button><p class="tiny muted" style="margin:0">뜻을 생각한 뒤 확인하면 더 잘 기억할 수 있어요.</p>`}</div></div>`;
}
function goToScreen(to){screen=to;wordSearch='';render();window.scrollTo({top:0,behavior:'instant'})}
function openDay(i){lessonIndex=Number(i);if(!Number.isInteger(lessonIndex)||lessonIndex<0||lessonIndex>71)lessonIndex=nextIndex();lessonTab='sound';quiz=null;quizHint=false;screen='day';render();window.scrollTo({top:0,behavior:'instant'})}
function dayHTML(){const l=LESSONS[lessonIndex];const done=!!state.completed[l.id];const tabs=[['sound','1 · 소리'],['words','2 · 단어'],['reading','3 · 문장'],['quiz','4 · 퀴즈']];
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="home">← 오늘 학습</button><span class="pill">${l.week}주 차 · ${l.day}/6일</span>${done?'<span class="round-tag" style="color:var(--success);background:var(--success-weak)">학습 완료 ✓</span>':''}</div>
 <div class="panel lesson-head"><span class="eyebrow">LESSON ${String(l.id+1).padStart(2,'0')} / 72</span><h1 class="lesson-title">${esc(l.title)}</h1><p class="lesson-sub">${esc(l.weekTitle)} · ${esc(l.weekSummary)}</p><div class="tabline" role="tablist" aria-label="학습 단계">${tabs.map(([id,t])=>`<button role="tab" aria-selected="${lessonTab===id}" class="tab ${lessonTab===id?'selected':''}" data-act="lesson-tab" data-tab="${id}">${t}</button>`).join('')}</div></div>
 <div class="lesson-content">${lessonTab==='sound'?soundHTML(l):lessonTab==='words'?wordsHTML(l):lessonTab==='reading'?readingHTML(l):quizHTML(l)}</div>
 <div class="button-row gap-top" style="justify-content:space-between"><button ${lessonIndex===0?'disabled':''} class="btn" data-act="open-day" data-i="${lessonIndex-1}">← 이전 수업</button><button ${lessonIndex===71?'disabled':''} class="btn" data-act="open-day" data-i="${lessonIndex+1}">다음 수업 →</button></div>`;
}
function soundHTML(l){
 let h=`<div class="panel pad"><div class="card-header"><h2 class="h2">오늘 배울 소리</h2><span class="round-tag">${l.phase==='alphabet'?'알파벳':l.phase==='phonics'?'파닉스':'기본 문장'}</span></div><div class="callout"><h3>${esc(l.title)}</h3><p>${esc(l.focus)}</p></div>`;
 if(l.letters.length){h+=`<div class="letter-grid">${l.letters.map(letter=>`<div class="letter-card"><span class="letter-large">${letter.upper}<small>${letter.lower}</small></span><div class="letter-name">글자 이름: ${esc(letter.name)} <button class="btn small" data-act="speak-letter" data-text="${attr(letter.upper)}">🔊 이름</button></div><div class="letter-sound">대표 소리 ${esc(letter.sound)} <span class="tiny">(예시 단어에서 확인)</span></div><div class="letter-example"><span><strong>${esc(letter.example)}</strong><br><span class="tiny muted">${esc(letter.meaning)}</span></span><button class="btn small" data-act="speak" data-text="${attr(letter.example)}">🔊 듣기</button></div></div>`).join('')}</div>`}
 else {h+=`<div class="panel" style="margin-top:16px;box-shadow:none;padding:24px;border-color:#eaf0f5"><span class="soft-label">오늘의 대표 단어</span><div class="word-text" style="font-size:37px;margin:9px 0">${esc(l.words[0].word)}</div><div class="word-seg">${esc(splitWord(l.words[0].word))}</div><div class="button-row gap-top"><button class="btn" data-act="speak" data-text="${attr(l.words[0].word)}">🔊 발음 듣기</button><span class="pill">${esc(l.words[0].meaning)}</span></div></div>`}
 h+=`<div class="tip" style="margin-top:16px">${l.letters.length?'알파벳 이름(에이, 비…)과 실제 단어의 소리는 다릅니다. 먼저 글자 이름을 듣고, 예시 단어를 들으며 소리를 구분해보세요.':'발음을 한국어 글자로만 외우지 말고, 음원을 듣고 입으로 따라 말하세요. 잘 안 들리면 설정에서 속도를 낮출 수 있습니다.'}</div><div class="button-row gap-top"><button class="btn primary" data-act="lesson-tab" data-tab="words">다음: 오늘의 단어 →</button></div></div>`;
 return h;
}
function splitWord(w){let s=String(w).toLowerCase();const patterns=['tch','igh','dge','sh','ch','th','wh','ph','ck','ng','ee','ea','ai','ay','oa','ow','oo','ar','or','er','ir','ur','qu'];let a=[];while(s.length){const m=patterns.find(p=>s.startsWith(p));if(m){a.push(m);s=s.slice(m.length)}else{a.push(s[0]);s=s.slice(1)}}return a.join(' · ')}
function wordsHTML(l){return `<div class="card-header"><div><h2 class="h2">오늘의 단어 5개</h2><p class="lead">하나씩 듣고, 직접 소리 내어 읽어보세요.</p></div><button class="btn small" data-act="toggle-word-meanings">뜻 ${wordMeaningsVisible?'가리기':'보기'}</button></div><div class="word-grid">${l.words.map((w,i)=>`<div class="word-card"><div class="word-top"><span class="soft-label">WORD ${String(i+1).padStart(2,'0')}</span><button class="btn small icon-btn" title="${state.starred.includes(w.word.toLowerCase())?'즐겨찾기 해제':'즐겨찾기'}" aria-label="${esc(w.word)} 즐겨찾기" data-act="star" data-word="${attr(w.word.toLowerCase())}">${state.starred.includes(w.word.toLowerCase())?'★':'☆'}</button></div><div><div class="word-text">${esc(w.word)}</div>${l.phase!=='alphabet'?`<div class="word-seg">${esc(splitWord(w.word))}</div>`:''}<div class="word-meaning">${wordMeaningsVisible?esc(w.meaning):'<span class="muted">뜻 숨김</span>'}</div></div><div class="word-actions"><button class="btn small" data-act="speak" data-text="${attr(w.word)}">🔊 듣기</button><button class="btn small" data-act="speak-slow" data-text="${attr(w.word)}">천천히</button></div></div>`).join('')}</div><div class="tip gap-top">한 단어를 <b>듣기 2번 → 따라 읽기 3번 → 뜻 떠올리기 1번</b> 순서로 연습하세요. 낯선 단어를 모두 한 번에 외울 필요는 없어요.</div><div class="button-row gap-top"><button class="btn primary" data-act="lesson-tab" data-tab="reading">다음: 짧은 문장 →</button></div>`}
function readingHTML(l){return `<div class="panel read-box"><div class="card-header"><h2 class="h2">소리 내어 읽기</h2><span class="round-tag">매일 1문장</span></div><div class="english-sentence" lang="en">${esc(l.sentence)}</div>${sentenceMeaningVisible?`<div class="sentence-ko">${esc(l.translation)}</div>`:''}<div class="button-row"><button data-act="speak" data-text="${attr(l.sentence)}" class="btn primary">🔊 문장 듣기</button><button data-act="speak-slow" data-text="${attr(l.sentence)}" class="btn">천천히 듣기</button><button class="btn" data-act="toggle-sentence">뜻 ${sentenceMeaningVisible?'가리기':'보기'}</button></div><div class="small-line"></div><div><h3 class="h3">이렇게 연습해요</h3><ul class="practice-steps"><li><span class="counter">1</span>문장을 한 번 듣고 어떤 소리인지 느껴보세요.</li><li><span class="counter">2</span>음원을 다시 듣고 짧은 덩어리별로 따라 말하세요.</li><li><span class="counter">3</span>소리 내어 3번 읽은 뒤 뜻을 확인해보세요.</li></ul></div><div class="tip">${l.week<=8?'아직 배우지 않은 발음이 문장에 있을 수 있어요. 어려운 단어는 음원을 먼저 듣고 따라 하면 됩니다.':'아는 단어가 모여 문장을 만든다는 점에 집중해보세요. 의미와 소리를 함께 익힙니다.'}</div><div><button class="btn primary" data-act="lesson-tab" data-tab="quiz">다음: 미니 퀴즈 →</button></div></div>`}
function seededShuffle(xs,seed){const a=[...xs];let s=(seed>>>0)||37;for(let i=a.length-1;i>0;i--){s=(s*1664525+1013904223)>>>0;const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function makeOptions(correct,other,seed,fill=[]){const local=seededShuffle([...new Set(other.filter(x=>x!==correct))],seed);const spare=seededShuffle([...new Set(fill.filter(x=>x!==correct&&!local.includes(x)))],seed+19);const wrong=[...local,...spare].slice(0,3);return seededShuffle([correct,...wrong],seed+117)}
function makeQuiz(l){const questions=[];
 if(l.letters.length){
 const letters=LESSONS.slice(0,12).flatMap(d=>d.letters);
 for(const [i,letter] of l.letters.slice(0,3).entries())questions.push({prompt:`알파벳 ${letter.upper}의 이름은 무엇일까요?`,answer:letter.name,options:makeOptions(letter.name,letters.map(x=>x.name),i+33+l.id*17),explanation:`${letter.upper}(${letter.lower})의 이름은 ${letter.name}입니다. 예시 단어는 ${letter.example}예요.`,type:'normal'});
 }
 const count=5-questions.length;
 for(let i=0;i<count;i++){
  const word=l.words[i%l.words.length];const sound=(l.week>2 && i%3===1);
  if(sound)questions.push({prompt:'발음을 듣고 해당 영어 단어를 고르세요.',answer:word.word,options:makeOptions(word.word,l.words.map(x=>x.word),i+55+l.id*11,[...allVocab.keys()]),explanation:`${word.word}는 ‘${word.meaning}’라는 뜻이에요.`,type:'audio',audio:word.word});
  else questions.push({prompt:`${word.word}의 뜻은 무엇일까요?`,answer:word.meaning,options:makeOptions(word.meaning,l.words.map(x=>x.meaning),i+53+l.id*11,[...allVocab.values()]),explanation:`${word.word} = ${word.meaning}`,type:'normal'});
 }
 return questions.slice(0,5);
}
function getQuiz(){if(!quiz||quiz.lessonId!==lessonIndex)quiz={lessonId:lessonIndex,pos:0,selected:null,score:0,finished:false,questions:makeQuiz(LESSONS[lessonIndex])};return quiz}
function quizHTML(l){const q=getQuiz();if(q.finished){return `<div class="panel quiz quiz-done"><span class="eyebrow">TODAY'S RESULT</span><div class="big-number" style="margin:18px 0">${q.score} / ${q.questions.length}</div><h2 class="h2">${q.score===5?'모두 맞혔어요!':'끝까지 풀었어요!'}</h2><p class="lead" style="margin:10px auto 22px;max-width:420px">틀린 문제가 있어도 괜찮아요. 중요한 건 듣고 읽는 연습을 끝까지 해본 거예요.</p><div class="button-row" style="justify-content:center"><button class="btn" data-act="retry-quiz">퀴즈 다시 풀기</button>${state.completed[l.id]?'<button class="btn green" data-act="goto" data-to="home">오늘 학습으로 돌아가기</button>':`<button class="btn primary" data-act="complete-day">오늘 학습 완료 ✓</button>`}</div></div>`}
 const cur=q.questions[q.pos];const selected=q.selected;
 return `<div class="panel quiz"><div class="card-header"><span class="eyebrow">MINI QUIZ · ${q.pos+1} / ${q.questions.length}</span><span class="pill">정답 ${q.score}개</span></div><div class="progress-track" style="height:6px"><div class="progress-fill" style="width:${pct(q.pos,q.questions.length)}%"></div></div><div class="quiz-question">${esc(cur.prompt)}</div>${cur.type==='audio'?`<div class="button-row" style="margin:0 0 18px"><button class="btn primary" data-act="speak" data-text="${attr(cur.audio)}">🔊 영어 발음 듣기</button>${quizHint?`<span class="pill">단어 힌트: ${esc(cur.audio)}</span>`:`<button class="btn small" data-act="quiz-hint">소리가 안 들려요</button>`}</div>`:''}<div class="quiz-options">${cur.options.map((o,i)=>`<button class="quiz-option ${selected===null?'':o===cur.answer?'correct':o===selected?'wrong':''}" ${selected!==null?'disabled':''} data-act="quiz-select" data-answer="${attr(o)}">${String(i+1)}. ${esc(o)}</button>`).join('')}</div>${selected!==null?`<div class="quiz-feedback"><b>${selected===cur.answer?'정답입니다!':'이번에는 다시 익혀보면 돼요.'}</b><div>${esc(cur.explanation)}</div></div><button class="btn primary gap-top" data-act="quiz-next">${q.pos===q.questions.length-1?'결과 확인 →':'다음 문제 →'}</button>`:''}</div>`;
}
function progressHTML(){const n=completedCount();return `<div class="page-head"><div><span class="eyebrow">YOUR LEARNING PATH</span><h1 class="h1">12주 학습 지도</h1><p class="lead">주 6회, 총 72회 수업입니다. 순서대로 진행하되 언제든 다시 열어볼 수 있어요.</p></div><span class="pill">${n} / 72 완료</span></div><div class="panel pad gap-bottom"><div class="card-header"><span class="strong">전체 진도</span><span class="strong txt-accent">${pct(n,72)}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct(n,72)}%"></div></div></div>${Array.from({length:12},(_,w)=>{
 const subset=LESSONS.slice(w*6,w*6+6),done=subset.filter(x=>state.completed[x.id]).length;
 return `<section class="panel week-panel"><div class="week-heading"><div><span class="eyebrow">WEEK ${String(w+1).padStart(2,'0')}</span><h2 class="h2">${esc(subset[0].weekTitle)}</h2><div class="week-subtitle">${esc(subset[0].weekSummary)}</div></div><span class="pill">${done} / 6</span></div><div class="day-grid">${subset.map(l=>`<button class="day-tile ${state.completed[l.id]?'done':''} ${nextIndex()===l.id?'current':''}" data-act="open-day" data-i="${l.id}"><span class="day-number">${l.day}일 차 · ${String(l.id+1).padStart(2,'0')}</span><span class="day-name">${esc(l.title)}</span>${state.completed[l.id]?'<span class="day-mark">완료 ✓</span>':''}</button>`).join('')}</div></section>`}).join('')}`}
function vocabListHTML(){const seen=seenWords(),all=[...allVocab.entries()];let rows=all.filter(([w])=>wordFilter==='all'||(wordFilter==='starred'?state.starred.includes(w):seen.has(w)||LESSONS[nextIndex()].words.some(x=>x.word.toLowerCase()===w)));
 const q=wordSearch.toLowerCase().trim();if(q)rows=rows.filter(([w,m])=>w.includes(q)||m.toLowerCase().includes(q));
 rows=rows.slice(0,350);
 if(!rows.length)return `<div class="empty">조건에 맞는 단어가 없어요. 다른 검색어나 필터를 선택해 보세요.</div>`;
 return `<div class="vocab-list">${rows.map(([w,m])=>`<div class="vocab-item"><div class="vocab-item-head"><strong lang="en">${esc(w)}</strong><button class="btn small icon-btn" aria-label="${esc(w)} 즐겨찾기" data-act="star" data-word="${attr(w)}">${state.starred.includes(w)?'★':'☆'}</button></div><div class="muted">${esc(m)}</div><div class="button-row" style="margin-top:9px"><button class="btn small" data-act="speak" data-text="${attr(w)}">🔊 듣기</button></div></div>`).join('')}</div>`;
}
function vocabHTML(){return `<div class="page-head"><div><span class="eyebrow">MY VOCABULARY</span><h1 class="h1">나의 단어장</h1><p class="lead">배운 단어를 계속 듣고 읽을 수 있어요. ☆를 누르면 즐겨찾기로 저장됩니다.</p></div><span class="pill">전체 단어 ${allVocab.size}개</span></div><div class="panel pad"><div class="chipset">${[['learned','배운 단어 + 오늘의 단어'],['starred','즐겨찾기'],['all','전체 미리보기']].map(([f,t])=>`<button class="chip ${wordFilter===f?'active':''}" data-act="word-filter" data-filter="${f}">${t}</button>`).join('')}</div><label class="sr-only" for="searchWords">단어 검색</label><input id="searchWords" data-search="words" class="search" value="${attr(wordSearch)}" placeholder="영어 단어 또는 한글 뜻 검색" autocomplete="off"/><div class="tiny muted" style="margin:13px 0">단어 카드를 누르지 않고 듣기 버튼을 누르면 영어 발음을 확인할 수 있어요.</div><div id="vocab-results">${vocabListHTML()}</div></div>`}
function settingsHTML(){return `<div class="page-head"><div><span class="eyebrow">MY SETTINGS</span><h1 class="h1">나의 학습 설정</h1><p class="lead">학습 시간과 발음 속도를 조절하고 진도를 파일로 백업할 수 있어요.</p></div></div><div class="two-col"><section class="panel pad"><h2 class="h2">학습 환경</h2><div class="settings-list"><div class="setting-row"><div><div class="setting-name">하루 목표 시간</div><div class="setting-desc">일일 학습 안내에 표시되는 목표입니다.</div></div><select id="studyMinutes" class="search" style="max-width:120px;padding:8px" aria-label="하루 목표 시간"><option value="15" ${state.studyMinutes===15?'selected':''}>15분</option><option value="20" ${state.studyMinutes===20?'selected':''}>20분</option><option value="30" ${state.studyMinutes===30?'selected':''}>30분</option><option value="45" ${state.studyMinutes===45?'selected':''}>45분</option></select></div><div class="setting-row"><div><div class="setting-name">영어 발음 속도</div><div class="setting-desc">설정된 기기의 음성합성 기능을 사용합니다.</div></div><div style="display:flex;align-items:center;gap:8px"><input type="range" class="range" id="voiceRate" min="0.65" max="1.25" step="0.05" value="${state.rate}" aria-label="영어 발음 속도"/><span id="rateLabel" class="tiny strong">${state.rate.toFixed(2)}x</span></div></div><div class="setting-row"><div><div class="setting-name">음성 재생 시험</div><div class="setting-desc">안 들리면 휴대폰의 소리 설정과 브라우저를 확인하세요.</div></div><button class="btn small" data-act="speak" data-text="Hello. Let's learn English together.">🔊 들어보기</button></div></div></section><section class="panel pad"><h2 class="h2">학습 기록 관리</h2><p class="lead">현재 ${completedCount()}회 완료, 배운 단어 ${seenWords().size}개</p><div class="button-row gap-top"><button class="btn primary" data-act="export">학습 기록 백업</button><label class="btn" for="importFile" style="cursor:pointer">백업 불러오기</label><input type="file" id="importFile" accept=".json,application/json" class="sr-only"/><button class="btn" data-act="reset" style="color:#a03f3f">진도 초기화</button></div><div class="tip gap-top">이 앱의 진도는 <b>현재 브라우저에만 저장</b>됩니다. 기기를 바꾸거나 브라우저 저장 데이터를 삭제하기 전에는 JSON 파일로 백업하세요. 자동 알림·계정 동기화·발음 채점은 아직 제공하지 않습니다.</div></section></div><div class="panel pad section"><h2 class="h2">읽기·듣기 학습 안내</h2><p class="lead">이 앱은 영어 글자를 하나씩 익히는 1차 버전입니다. 실제 음성은 기기에 설치된 영어 음성을 사용하므로 기기마다 다를 수 있습니다. 발음 기호와 한글 표기는 참고 자료이며, 원어민 발음을 완전히 대신하지는 않습니다.</p></div>`}
function speak(text,slow=false,letter=false){
 if(!('speechSynthesis' in window)){alert('이 브라우저는 음성 재생을 지원하지 않습니다. Chrome, Edge 또는 Safari를 사용해 보세요.');return}
 try{
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(text));u.lang='en-US';u.rate=letter ? .78 : (slow ? .7 : state.rate);u.pitch=1;
  const voices=window.speechSynthesis.getVoices();const candidates=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith('en'));
  const chosen=candidates.find(v=>/en-us/i.test(v.lang)&&/samantha|google|microsoft|ava|allison/i.test(v.name)) || candidates.find(v=>/en-us/i.test(v.lang)) ||candidates[0];if(chosen)u.voice=chosen;
  window.speechSynthesis.speak(u);
 }catch(e){alert('발음을 재생할 수 없습니다. 브라우저 음성 설정을 확인해 주세요.')}
}
function completeDay(){const l=LESSONS[lessonIndex];if(!state.completed[l.id]){
 state.completed[l.id]=dateStr();for(const w of l.words){const word=w.word.toLowerCase();if(!state.srs[word])state.srs[word]={level:0,due:futureDate(1)}}save();}
 screen='home';render();window.scrollTo({top:0,behavior:'instant'});
}
function answerReview(word,known){if(!state.srs[word])return;const x=state.srs[word];x.level=known?Math.min(x.level+1,5):0;const intervals=[1,3,7,14,30,60];x.due=futureDate(intervals[x.level]);reviewReveal=false;save();render()}
function exportBackup(){const raw=JSON.stringify({format:'everyday-english-v1',exportedAt:new Date().toISOString(),data:state},null,2);const url=URL.createObjectURL(new Blob([raw],{type:'application/json;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='english_study_backup_'+dateStr()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
async function importBackup(file){try{if(!file||file.size>1000000)throw Error('1MB 이하 JSON 파일만 지원합니다.');const obj=JSON.parse(await file.text());if(obj.format!=='everyday-english-v1'||!obj.data||typeof obj.data!=='object')throw Error('이 프로그램의 백업 파일이 아닙니다.');if(!confirm('기존 학습 기록을 백업 파일의 기록으로 바꿀까요?'))return;
 // Reuse the safe parser/normalization so imported values cannot inject into HTML.
 localStorage.setItem(KEY,JSON.stringify(obj.data));state=loadState();save();screen='home';render();alert('백업 파일을 불러왔습니다.');
 }catch(e){alert('백업을 불러오지 못했어요: '+e.message)}}
app.addEventListener('click',event=>{
 const b=event.target.closest('[data-act]');if(!b||b.disabled)return;
 const a=b.dataset.act;
 if(a==='goto'){goToScreen(b.dataset.to);return}
 if(a==='open-day'){openDay(b.dataset.i);return}
 if(a==='lesson-tab'){lessonTab=b.dataset.tab;quizHint=false;render();return}
 if(a==='speak'||a==='speak-slow'||a==='speak-letter'){speak(b.dataset.text,a==='speak-slow',a==='speak-letter');return}
 if(a==='toggle-word-meanings'){wordMeaningsVisible=!wordMeaningsVisible;render();return}
 if(a==='toggle-sentence'){sentenceMeaningVisible=!sentenceMeaningVisible;render();return}
 if(a==='star'){const w=b.dataset.word.toLowerCase();if(!allVocab.has(w))return;state.starred=state.starred.includes(w)?state.starred.filter(x=>x!==w):[...state.starred,w];save();if(screen==='vocab')document.getElementById('vocab-results').innerHTML=vocabListHTML();else render();return}
 if(a==='reveal-review'){reviewReveal=true;render();return}
 if(a==='review-answer'){answerReview(b.dataset.word,b.dataset.known==='1');return}
 if(a==='quiz-hint'){quizHint=true;render();return}
 if(a==='quiz-select'){const q=getQuiz();if(q.selected!==null||q.finished)return;q.selected=b.dataset.answer;if(q.selected===q.questions[q.pos].answer)q.score++;render();return}
 if(a==='quiz-next'){const q=getQuiz();if(q.selected===null)return;if(q.pos===q.questions.length-1){q.finished=true;state.quizRecords[lessonIndex]={correct:q.score,total:q.questions.length};save()}else{q.pos++;q.selected=null;quizHint=false}render();return}
 if(a==='retry-quiz'){quiz=null;quizHint=false;render();return}
 if(a==='complete-day'){const q=getQuiz();if(q.finished)completeDay();return}
 if(a==='word-filter'){wordFilter=b.dataset.filter;render();return}
 if(a==='export'){exportBackup();return}
 if(a==='reset'){if(confirm('모든 수업 완료 기록, 단어 복습 기록, 즐겨찾기가 삭제됩니다. 정말 초기화할까요?')){state=defaultState();save();screen='home';render()}return}
});
app.addEventListener('input',event=>{
 const t=event.target;if(t.dataset.search==='words'){wordSearch=t.value;const e=document.getElementById('vocab-results');if(e)e.innerHTML=vocabListHTML()}
 if(t.id==='voiceRate'){state.rate=Number(t.value);const lab=document.getElementById('rateLabel');if(lab)lab.textContent=state.rate.toFixed(2)+'x';save()}
});
app.addEventListener('change',event=>{const t=event.target;if(t.id==='importFile'){importBackup(t.files?.[0]);t.value=''}if(t.id==='studyMinutes'){state.studyMinutes=Number(t.value);save()}});
render();
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
