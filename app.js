/* 하루 영어 첫걸음 v1 — browser-only, no third-party calls or tracking. */
(()=>{
'use strict';
const data=JSON.parse(document.getElementById('curriculum-data').textContent);
const LESSONS=data.lessons;
const EXTRA={
  "tracks": {
    "toeic": {
      "title": "토익",
      "subtitle": "TOEIC · 듣기와 읽기 입문",
      "description": "짧은 질문의 응답, 대화의 핵심, 문법과 안내문 읽기를 연습해요.",
      "units": [
        {
          "id": "toeic-0",
          "title": "질문과 응답 ①",
          "kind": "LC · 의문사",
          "text": "When does the meeting start?",
          "prompt": "회의 시작 시간을 묻는 질문이에요.",
          "options": [
            "At nine o’clock.",
            "In the meeting room.",
            "Mr. Kim will lead it."
          ],
          "answer": 0,
          "why": "When은 시간을 물어요. At nine o’clock은 오전 또는 오후 9시라는 응답입니다."
        },
        {
          "id": "toeic-1",
          "title": "질문과 응답 ②",
          "kind": "LC · 제안",
          "text": "Would you like some coffee?",
          "prompt": "커피를 권하는 질문이에요.",
          "options": [
            "Yes, please.",
            "It is on the desk.",
            "At the coffee shop."
          ],
          "answer": 0,
          "why": "Would you like …?는 권유 표현이에요. Yes, please.로 공손하게 받아들일 수 있어요."
        },
        {
          "id": "toeic-2",
          "title": "짧은 대화",
          "kind": "LC · 약속 시간",
          "text": "A: Can we meet at ten? B: I have a call then. How about eleven? A: That works for me.",
          "prompt": "두 사람이 최종적으로 정한 만남 시간은 언제인가요?",
          "options": [
            "At ten.",
            "At eleven.",
            "At twelve."
          ],
          "answer": 1,
          "why": "eleven이라는 새 제안에 That works for me.라고 동의했어요."
        },
        {
          "id": "toeic-3",
          "title": "문법 빈칸",
          "kind": "RC · 주어와 동사",
          "text": "Ms. Lee ___ the sales report every Friday.",
          "prompt": "빈칸에 알맞은 말을 고르세요.",
          "options": [
            "prepare",
            "prepares",
            "preparing"
          ],
          "answer": 1,
          "why": "주어 Ms. Lee는 3인칭 단수이고 every Friday는 반복되는 일을 나타내므로 prepares가 알맞아요."
        },
        {
          "id": "toeic-4",
          "title": "업무 어휘",
          "kind": "RC · 문맥",
          "text": "Please ___ your name at the bottom of the form.",
          "prompt": "신청서 맨 아래에 이름을 쓰라는 뜻을 완성해요.",
          "options": [
            "sign",
            "arrive",
            "deliver"
          ],
          "answer": 0,
          "why": "sign your name은 서명하다는 뜻이에요. arrive는 도착하다, deliver는 배달하다입니다."
        },
        {
          "id": "toeic-5",
          "title": "안내문 읽기",
          "kind": "RC · 정보 찾기",
          "text": "The library will close at 5 p.m. on Friday for maintenance. It will reopen at 9 a.m. on Saturday.",
          "prompt": "도서관이 다시 여는 때는 언제인가요?",
          "options": [
            "Friday at 5 p.m.",
            "Saturday at 9 a.m.",
            "Saturday at 5 p.m."
          ],
          "answer": 1,
          "why": "reopen은 다시 열다는 뜻이에요. 두 번째 문장에서 토요일 오전 9시라고 안내합니다."
        }
      ]
    },
    "tos": {
      "title": "토스",
      "subtitle": "TOEIC Speaking · 말하기 입문",
      "description": "문장 읽기부터 상황 설명, 질문 응답, 의견 말하기까지 한 걸음씩 연습해요.",
      "units": [
        {
          "id": "tos-0",
          "title": "안내 문장 읽기",
          "kind": "문장 읽기",
          "prompt": "Please read the following announcement aloud.",
          "ko": "다음 안내 문장을 소리 내어 읽어보세요.",
          "model": "Welcome to our new library. We are open from nine to six. Please ask our staff if you need help.",
          "tip": "문장을 덩어리로 나누고, 숫자와 중요한 단어를 또렷하게 읽어보세요.",
          "checks": [
            "문장 끝에서 잠깐 쉬었어요",
            "nine과 six를 구분해서 읽었어요",
            "끝까지 읽었어요"
          ],
          "seconds": 45
        },
        {
          "id": "tos-1",
          "title": "장면 설명하기",
          "kind": "묘사 연습",
          "prompt": "Imagine a small café. Two customers are sitting by a window. A worker is making coffee behind the counter. Describe the scene.",
          "ko": "작은 카페에서 손님 두 명이 창가에 앉아 있고 직원은 카운터 뒤에서 커피를 만들고 있어요. 이 장면을 설명해보세요.",
          "model": "This is a small café. Two people are sitting by the window. A worker is making coffee behind the counter. The café looks quiet.",
          "tip": "장소 → 사람 → 행동 순서로 말하면 정리가 쉬워요.",
          "checks": [
            "장소를 말했어요",
            "사람의 행동을 설명했어요",
            "세 문장 이상 말했어요"
          ],
          "seconds": 45
        },
        {
          "id": "tos-2",
          "title": "취미 질문에 답하기",
          "kind": "질문 응답",
          "prompt": "What do you usually do on weekends?",
          "ko": "주말에 보통 무엇을 하나요?",
          "model": "I usually go for a walk on weekends. I go to a park near my home. It helps me relax.",
          "tip": "활동 한 가지, 장소, 이유를 차례로 덧붙여보세요.",
          "checks": [
            "질문에 직접 답했어요",
            "구체적인 정보를 덧붙였어요",
            "이유를 말했어요"
          ],
          "seconds": 30
        },
        {
          "id": "tos-3",
          "title": "일정으로 답하기",
          "kind": "정보 활용",
          "prompt": "Schedule: English class — Monday, 7 p.m.; cooking class — Wednesday, 6 p.m. When is the cooking class?",
          "ko": "일정표를 보고 요리 수업이 언제인지 답해보세요.",
          "model": "The cooking class is on Wednesday at six p.m.",
          "tip": "요일 앞에는 on, 시간 앞에는 at을 사용해요.",
          "checks": [
            "Wednesday를 말했어요",
            "six p.m.을 말했어요",
            "완전한 문장으로 답했어요"
          ],
          "seconds": 30
        },
        {
          "id": "tos-4",
          "title": "이유 붙여 말하기",
          "kind": "의견 준비",
          "prompt": "Do you prefer studying alone or with other people? Give a reason.",
          "ko": "혼자 공부하는 것과 함께 공부하는 것 중 무엇을 선호하나요? 이유도 말해보세요.",
          "model": "I prefer studying alone. I can study at my own pace. For example, I can spend more time on difficult words.",
          "tip": "선호 → 이유 → 짧은 예시로 답을 늘려보세요.",
          "checks": [
            "선호를 분명하게 말했어요",
            "이유를 말했어요",
            "예시를 덧붙였어요"
          ],
          "seconds": 60
        },
        {
          "id": "tos-5",
          "title": "의견 확장하기",
          "kind": "의견 말하기",
          "prompt": "Is it better to exercise indoors or outdoors? Explain your opinion with reasons.",
          "ko": "실내 운동과 야외 운동 중 어느 쪽이 더 좋다고 생각하나요?",
          "model": "I think outdoor exercise is better for me. First, I can enjoy fresh air. Second, I can meet my friends at the park. For example, we walk together on Sundays. That is why I like exercising outdoors.",
          "tip": "입문 연습이므로 짧은 문장으로 두 가지 이유를 연결해보세요.",
          "checks": [
            "의견을 밝혔어요",
            "이유를 두 가지 말했어요",
            "예시와 마무리가 있어요"
          ],
          "seconds": 60
        }
      ]
    },
    "opic": {
      "title": "오픽",
      "subtitle": "OPIc · 일상 이야기 입문",
      "description": "나의 일상과 경험을 이유·세부 내용과 함께 자연스럽게 말해요.",
      "units": [
        {
          "id": "opic-0",
          "title": "나를 소개하기",
          "kind": "소개",
          "prompt": "Tell me about yourself. What do you do, and what do you enjoy?",
          "ko": "자신을 소개하고 하는 일과 좋아하는 것을 말해보세요.",
          "model": "My name is Jina. I work at a small company. In my free time, I enjoy listening to music. It helps me relax after work.",
          "tip": "직업이나 생활 → 취미 → 좋아하는 이유를 연결해요.",
          "checks": [
            "나의 생활을 소개했어요",
            "좋아하는 활동을 말했어요",
            "좋아하는 이유를 말했어요"
          ],
          "seconds": 60
        },
        {
          "id": "opic-1",
          "title": "우리 집 소개",
          "kind": "묘사",
          "prompt": "Describe your home. What is your favorite room, and why do you like it?",
          "ko": "집을 설명하고 가장 좋아하는 방과 이유를 말해보세요.",
          "model": "I live in a small apartment. My favorite room is the living room. It has a comfortable sofa and a big window. I like it because I can relax there.",
          "tip": "큰 모습에서 시작해 가구와 분위기 같은 세부 내용을 더해요.",
          "checks": [
            "집의 모습을 설명했어요",
            "구체적인 물건을 말했어요",
            "느낌이나 이유를 덧붙였어요"
          ],
          "seconds": 60
        },
        {
          "id": "opic-2",
          "title": "주말의 일상",
          "kind": "일상",
          "prompt": "What do you usually do on weekends? Tell me about your routine.",
          "ko": "주말에 보통 무엇을 하는지 순서대로 말해보세요.",
          "model": "On Saturdays, I usually get up at nine. Then I have breakfast and go for a walk. In the afternoon, I meet a friend at a café. I like this routine because it is relaxing.",
          "tip": "usually와 then을 사용해 평소의 일상을 연결해요.",
          "checks": [
            "평소 활동을 말했어요",
            "시간 순서로 연결했어요",
            "느낌을 덧붙였어요"
          ],
          "seconds": 60
        },
        {
          "id": "opic-3",
          "title": "기억에 남는 여행",
          "kind": "과거 경험",
          "prompt": "Tell me about a memorable trip. Where did you go, and what happened?",
          "ko": "기억에 남는 여행에서 어디에 갔고 어떤 일이 있었나요?",
          "model": "Last summer, I went to Busan with my friend. We visited the beach and ate fresh seafood. It rained in the evening, so we went to a small café. We had a great time there.",
          "tip": "언제·누구와·어디 → 있었던 일 → 느낌으로 구성해요.",
          "checks": [
            "언제 어디로 갔는지 말했어요",
            "과거형을 사용했어요",
            "한 가지 사건을 설명했어요"
          ],
          "seconds": 60
        },
        {
          "id": "opic-4",
          "title": "예전과 지금 비교",
          "kind": "비교",
          "prompt": "How have your hobbies changed since you were younger?",
          "ko": "어렸을 때와 지금의 취미는 어떻게 달라졌나요?",
          "model": "When I was younger, I played computer games a lot. Now I prefer walking and reading. I spend more time outdoors because I want to stay healthy. I still enjoy games sometimes.",
          "tip": "과거에는 무엇을 했고 지금은 무엇을 하는지, 변화의 이유도 더해요.",
          "checks": [
            "과거의 취미를 말했어요",
            "현재와 비교했어요",
            "바뀐 이유를 말했어요"
          ],
          "seconds": 60
        },
        {
          "id": "opic-5",
          "title": "호텔에 전화하기",
          "kind": "역할극",
          "prompt": "You want to book a hotel room. Call the hotel and ask three questions about the room.",
          "ko": "호텔을 예약하려고 전화했어요. 방에 관해 세 가지 질문을 해보세요.",
          "model": "Hello. I would like to book a room. Do you have a room available this Saturday? How much is it per night? Is breakfast included? Thank you for your help.",
          "tip": "인사 → 예약 의사 → 날짜·가격·서비스 질문 순서로 연습해요.",
          "checks": [
            "상황에 맞게 시작했어요",
            "서로 다른 질문 세 개를 했어요",
            "공손하게 마무리했어요"
          ],
          "seconds": 60
        }
      ]
    }
  },
  "dialogues": [
    {
      "title": "카페에서 주문하기",
      "line": "What would you like to drink?",
      "ko": "무엇을 마시겠어요?",
      "options": [
        "I’d like a coffee, please.",
        "It is under the table.",
        "I am twenty years old."
      ],
      "answer": 0,
      "why": "I’d like …, please.는 원하는 것을 공손하게 주문할 때 써요."
    },
    {
      "title": "처음 만나 인사하기",
      "line": "Hi, I’m Alex. What’s your name?",
      "ko": "안녕하세요, 저는 Alex예요. 이름이 뭐예요?",
      "options": [
        "My name is Jina. Nice to meet you.",
        "It is five dollars.",
        "I go there by bus."
      ],
      "answer": 0,
      "why": "My name is …로 이름을 말하고 Nice to meet you.로 반갑다고 인사해요."
    },
    {
      "title": "길 물어보기",
      "line": "Excuse me. Where is the station?",
      "ko": "실례합니다. 역이 어디인가요?",
      "options": [
        "Go straight and turn left.",
        "I like apples.",
        "It starts at nine."
      ],
      "answer": 0,
      "why": "Go straight는 직진, turn left는 좌회전이라는 뜻이에요."
    },
    {
      "title": "물건 사기",
      "line": "How much is this bag?",
      "ko": "이 가방은 얼마인가요?",
      "options": [
        "It’s ten dollars.",
        "It’s sunny today.",
        "I’m from Korea."
      ],
      "answer": 0,
      "why": "How much …?는 가격을 묻는 표현이에요. 금액으로 답해요."
    },
    {
      "title": "약속 잡기",
      "line": "Can we meet at two?",
      "ko": "두 시에 만날 수 있나요?",
      "options": [
        "Yes, two works for me.",
        "I have two brothers.",
        "It’s a blue pen."
      ],
      "answer": 0,
      "why": "시간 제안에 two works for me.라고 하면 두 시가 괜찮다는 뜻이에요."
    },
    {
      "title": "식당에서 부탁하기",
      "line": "Can I help you?",
      "ko": "무엇을 도와드릴까요?",
      "options": [
        "Could I have some water, please?",
        "I am at home.",
        "It’s Monday."
      ],
      "answer": 0,
      "why": "Could I have …, please?는 필요한 것을 공손하게 부탁할 때 써요."
    }
  ]
};
const KEY='everyday-english-foundation-state-v1';
const CLOUD_CONFIG={url:'https://aicaaawuortmdqslkgbp.supabase.co',publishableKey:'sb_publishable_YddlPyyXDLlE9qq2gdqw8Q_IHxFSMzb',enabled:true};
let cloudSession=cachedCloudSession();
let activeStorageKey=cloudSession?KEY+'-user-'+cloudSession.user.id:KEY;
const defaultState=()=>({completed:{},quizRecords:{},starred:[],srs:{},rate:.86,studyMinutes:30,errors:{},examRecords:{}});
let storageAvailable=true;
function loadState(){try{const raw=localStorage.getItem(activeStorageKey);return raw?normalizeState(JSON.parse(raw)):defaultState()}catch{storageAvailable=false;return defaultState()}}
function normalizeState(x){
 try{
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
  if(x.errors&&typeof x.errors==='object')for(const key of Object.keys(x.errors)){
   const m=/^(\d{1,2}):([0-4])$/.exec(key);if(m&&+m[1]<72)safe.errors[key]=true;
  }
  if(x.examRecords&&typeof x.examRecords==='object')for(const t of Object.values(EXTRA.tracks))for(const u of t.units){
   const r=x.examRecords[u.id];if(!r||typeof r!=='object')continue;
   const checks=Array.from({length:3},(_,i)=>r.checks?.[i]===true);
   const v={notes:typeof r.notes==='string'?r.notes.slice(0,6000):'',checks,completed:false};
   if(u.options&&Number.isInteger(r.selected)&&r.selected>=0&&r.selected<u.options.length){v.selected=r.selected;v.completed=r.selected===u.answer}
   else if(!u.options)v.completed=r.completed===true&&checks.every(Boolean);
   safe.examRecords[u.id]=v;
  }
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
function save(){try{localStorage.setItem(activeStorageKey,JSON.stringify(state));storageAvailable=true;queueCloudSave()}catch(e){storageAvailable=false}}
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
   ${[['home','오늘 학습'],['progress','12주 진도'],['vocab','단어장'],['exams','시험 입문'],['mistakes','오답 복습'],['account','내 계정'],['settings','설정']].map(([s,t])=>`<button class="${screen===s||(s==='home'&&screen==='day')||(s==='exams'&&screen==='exam')?'active':''}" data-act="goto" data-to="${s}" ${screen===s?'aria-current="page"':''}>${t}</button>`).join('')}
  </nav></div></header>
  <main class="shell" id="main-content">${!storageAvailable?'<div class="alert">이 환경에서는 자동 저장이 제한될 수 있습니다. 일반 웹브라우저에서 열거나 백업 기능을 사용해 주세요.</div>':''}${screen==='home'?homeHTML():screen==='day'?dayHTML():screen==='progress'?progressHTML():screen==='vocab'?vocabHTML():screen==='exams'?examOverviewHTML():screen==='exam'?examHTML():screen==='mistakes'?mistakesHTML():screen==='account'?accountHTML():settingsHTML()}</main>
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
 <section class="section"><div class="panel pad"><div class="card-header"><h2 class="h2">기초에서 시험 영어까지</h2><button class="btn small" data-act="goto" data-to="exams">시험 입문 열기 →</button></div><p class="lead">시험 입문 메뉴에서 토익 듣기·읽기, 토스 말하기, 오픽 일상 이야기를 연습할 수 있어요. 기초 과정과 함께 내 속도로 시작해보세요.</p></div></section>`;
}
function reviewHTML(due=dueWords()){
 if(!due.length)return `<div class="panel pad"><div style="font-weight:800;margin-bottom:5px">지금 복습 기한이 된 단어가 없어요.</div><p class="lead">학습을 완료한 다음 날부터 복습이 쌓입니다. 기존에 배운 단어는 단어장에서 언제든 다시 들을 수 있습니다.</p><button data-act="goto" data-to="vocab" class="btn small" style="margin-top:14px">단어장 열기 →</button></div>`;
 const v=due[0];
 return `<div class="panel pad review-grid"><div class="review-front"><span class="soft-label">복습 1 / ${due.length}</span><span class="review-word">${esc(v.word)}</span><button data-act="speak" data-text="${attr(v.word)}" class="btn small">🔊 발음 듣기</button></div><div style="display:flex;flex-direction:column;justify-content:center;gap:12px"><span class="soft-label">이 단어를 기억하나요?</span>${reviewReveal?`<div style="font-size:20px;font-weight:850">${esc(v.meaning)}</div><div class="button-row"><button data-act="review-answer" data-word="${attr(v.word)}" data-known="1" class="btn green">기억나요</button><button data-act="review-answer" data-word="${attr(v.word)}" data-known="0" class="btn">한 번 더</button></div>`:`<button data-act="reveal-review" class="btn primary">뜻 확인하기</button><p class="tiny muted" style="margin:0">뜻을 생각한 뒤 확인하면 더 잘 기억할 수 있어요.</p>`}</div></div>`;
}
function goToScreen(to){stopActivities();mistakeChoice=null;mistakeIndex=0;screen=to;wordSearch='';render();window.scrollTo({top:0,behavior:'instant'})}
function openDay(i){stopActivities();practiceTokens=[];practiceChecked=false;dialogueChoice=null;lessonIndex=Number(i);if(!Number.isInteger(lessonIndex)||lessonIndex<0||lessonIndex>71)lessonIndex=nextIndex();lessonTab='sound';quiz=null;quizHint=false;screen='day';render();window.scrollTo({top:0,behavior:'instant'})}
function dayHTML(){const l=LESSONS[lessonIndex];const done=!!state.completed[l.id];const tabs=[['sound','1 · 소리'],['words','2 · 단어'],['reading','3 · 문장'],['quiz','4 · 퀴즈'],['practice','5 · 활용']];
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="home">← 오늘 학습</button><span class="pill">${l.week}주 차 · ${l.day}/6일</span>${done?'<span class="round-tag" style="color:var(--success);background:var(--success-weak)">학습 완료 ✓</span>':''}</div>
 <div class="panel lesson-head"><span class="eyebrow">LESSON ${String(l.id+1).padStart(2,'0')} / 72</span><h1 class="lesson-title">${esc(l.title)}</h1><p class="lesson-sub">${esc(l.weekTitle)} · ${esc(l.weekSummary)}</p><div class="tabline" role="tablist" aria-label="학습 단계">${tabs.map(([id,t])=>`<button role="tab" aria-selected="${lessonTab===id}" class="tab ${lessonTab===id?'selected':''}" data-act="lesson-tab" data-tab="${id}">${t}</button>`).join('')}</div></div>
 <div class="lesson-content">${lessonTab==='sound'?soundHTML(l):lessonTab==='words'?wordsHTML(l):lessonTab==='reading'?readingHTML(l):lessonTab==='practice'?practiceHTML(l):quizHTML(l)}</div>
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
 if(l.week>2){
  const tokens=l.sentence.match(/\b[A-Za-z]+(?:'[A-Za-z]+)?\b/g)||[];
  const target=tokens.find(t=>l.words.some(w=>w.word.toLowerCase()===t.toLowerCase()))||tokens.find(t=>t.length>2);
  if(target){const prompt=l.sentence.replace(new RegExp('\\b'+target+'\\b'),'_____');questions[4]={prompt:'빈칸에 알맞은 단어는? '+prompt,answer:target,options:makeOptions(target,l.words.map(w=>w.word),l.id+199,[...allVocab.keys()]),explanation:l.sentence+' — '+l.translation,type:'cloze'}}
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
 localStorage.setItem(activeStorageKey,JSON.stringify(obj.data));state=loadState();save();screen='home';render();alert('백업 파일을 불러왔습니다.');
 }catch(e){alert('백업을 불러오지 못했어요: '+e.message)}}
app.addEventListener('click',event=>{
 const b=event.target.closest('[data-act]');if(!b||b.disabled)return;
 const a=b.dataset.act;
 if(a.startsWith('cloud-')){handleCloudAction(a);return}
 if(handleExtraAction(a,b))return;
 if(a==='goto'){goToScreen(b.dataset.to);return}
 if(a==='open-day'){openDay(b.dataset.i);return}
 if(a==='lesson-tab'){stopStudyTimer();lessonTab=b.dataset.tab;quizHint=false;render();return}
 if(a==='speak'||a==='speak-slow'||a==='speak-letter'){speak(b.dataset.text,a==='speak-slow',a==='speak-letter');return}
 if(a==='toggle-word-meanings'){wordMeaningsVisible=!wordMeaningsVisible;render();return}
 if(a==='toggle-sentence'){sentenceMeaningVisible=!sentenceMeaningVisible;render();return}
 if(a==='star'){const w=b.dataset.word.toLowerCase();if(!allVocab.has(w))return;state.starred=state.starred.includes(w)?state.starred.filter(x=>x!==w):[...state.starred,w];save();if(screen==='vocab')document.getElementById('vocab-results').innerHTML=vocabListHTML();else render();return}
 if(a==='reveal-review'){reviewReveal=true;render();return}
 if(a==='review-answer'){answerReview(b.dataset.word,b.dataset.known==='1');return}
 if(a==='quiz-hint'){quizHint=true;render();return}
 if(a==='quiz-select'){const q=getQuiz();if(q.selected!==null||q.finished)return;q.selected=b.dataset.answer;const errorKey=lessonIndex+':'+q.pos;if(q.selected===q.questions[q.pos].answer){q.score++;delete state.errors[errorKey]}else{state.errors[errorKey]=true}save();render();return}
 if(a==='quiz-next'){const q=getQuiz();if(q.selected===null)return;if(q.pos===q.questions.length-1){q.finished=true;state.quizRecords[lessonIndex]={correct:q.score,total:q.questions.length};save()}else{q.pos++;q.selected=null;quizHint=false}render();return}
 if(a==='retry-quiz'){quiz=null;quizHint=false;render();return}
 if(a==='complete-day'){const q=getQuiz();if(q.finished)completeDay();return}
 if(a==='word-filter'){wordFilter=b.dataset.filter;render();return}
 if(a==='export'){exportBackup();return}
 if(a==='reset'){if(confirm('모든 수업 완료 기록, 단어 복습 기록, 즐겨찾기가 삭제됩니다. 정말 초기화할까요?')){state=defaultState();save();screen='home';render()}return}
});
app.addEventListener('input',event=>{
 const t=event.target;if(t.id==='exam-notes'){examRecord().notes=t.value.slice(0,6000);save()}if(t.dataset.search==='words'){wordSearch=t.value;const e=document.getElementById('vocab-results');if(e)e.innerHTML=vocabListHTML()}
 if(t.id==='voiceRate'){state.rate=Number(t.value);const lab=document.getElementById('rateLabel');if(lab)lab.textContent=state.rate.toFixed(2)+'x';save()}
});
app.addEventListener('change',event=>{const t=event.target;if(t.dataset.examCheck!==undefined){const r=examRecord();r.checks[Number(t.dataset.examCheck)]=t.checked;if(!r.checks.every(Boolean))r.completed=false;save();render()}if(t.id==='importFile'){importBackup(t.files?.[0]);t.value=''}if(t.id==='studyMinutes'){state.studyMinutes=Number(t.value);save()}});
let examTrack='toeic', examUnit=0, examRevealed=false, listenTranscript=false;
let practiceTokens=[], practiceChecked=false, dialogueChoice=null;
let mistakeChoice=null, mistakeIndex=0;
let timerEnd=0, timerHandle=null;
function stopStudyTimer(){clearInterval(timerHandle);timerHandle=null;timerEnd=0;}
function stopActivities(){stopStudyTimer();if('speechSynthesis' in window)window.speechSynthesis.cancel();}
function startStudyTimer(seconds){
 stopStudyTimer();timerEnd=Date.now()+seconds*1000;
 const update=()=>{const node=document.getElementById('study-timer');if(!node){stopStudyTimer();return}const left=Math.max(0,Math.ceil((timerEnd-Date.now())/1000));node.textContent=left?`${left}초 남음`:'연습 시간이 끝났어요. 답변을 마무리해보세요.';if(!left)stopStudyTimer()};
 update();timerHandle=setInterval(update,250);
}
function examOverviewHTML(){
 return `<div class="page-head"><div><span class="eyebrow">EXAM FIRST STEPS</span><h1 class="h1">시험 영어 첫걸음</h1><p class="lead">짧은 한 문제부터. 토익·토스·오픽을 부담 없이 시작해요.</p></div></div><div class="exam-grid">${Object.entries(EXTRA.tracks).map(([key,t])=>{const count=t.units.filter(u=>state.examRecords[u.id]?.completed).length;return `<section class="panel pad exam-card"><span class="round-tag">입문 · ${t.units.length}개 활동</span><h2 class="h1">${t.title}</h2><p class="strong">${t.subtitle}</p><p class="lead">${t.description}</p><div class="progress-track gap-top"><div class="progress-fill" style="width:${pct(count,t.units.length)}%"></div></div><p class="tiny muted">${count} / ${t.units.length} 완료</p><button class="btn primary" data-act="exam-open" data-track="${key}" data-unit="0">학습 시작 →</button></section>`}).join('')}</div><div class="tip gap-top">직접 만든 입문 연습입니다. 토스·오픽 답변은 예시와 체크리스트로 스스로 확인하며, 공식 시험 점수나 등급을 산출하지 않습니다.</div>`;
}
function currentExam(){return EXTRA.tracks[examTrack].units[examUnit]}
function examHTML(){
 const t=EXTRA.tracks[examTrack],u=currentExam(),record=state.examRecords[u.id]||{},isListening=examTrack==='toeic'&&u.kind.startsWith('LC');
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="exams">← 시험 선택</button><span class="pill">${t.title} · 입문</span></div><div class="panel pad"><span class="eyebrow">${esc(u.kind)}</span><h1 class="h1">${esc(u.title)}</h1><div class="chipset" aria-label="연습 선택">${t.units.map((x,i)=>`<button class="chip ${examUnit===i?'active':''}" data-act="exam-open" data-track="${examTrack}" data-unit="${i}">${i+1}. ${esc(x.title)}${state.examRecords[x.id]?.completed?' ✓':''}</button>`).join('')}</div>${examTrack==='toeic'?`
 ${!isListening||listenTranscript?`<div class="callout english-sentence" lang="en">${esc(u.text)}</div>`:''}
 ${isListening?`<div class="button-row gap-top"><button class="btn primary" data-act="speak" data-text="${attr(u.text)}">🔊 문제 듣기</button><button class="btn" data-act="exam-transcript">${listenTranscript?'대본 숨기기':'대본 보기'}</button></div>`:''}
 <h2 class="quiz-question">${esc(u.prompt)}</h2><div class="quiz-options">${u.options.map((x,i)=>`<button class="quiz-option ${record.selected===undefined?'':i===u.answer?'correct':record.selected===i?'wrong':''}" ${record.selected===undefined?'':'disabled'} data-act="exam-answer" data-choice="${i}">${esc(x)}</button>`).join('')}</div>
 ${record.selected!==undefined?`<div class="quiz-feedback" role="status"><b>${record.selected===u.answer?'정답이에요!':'한 번 더 익혀봐요.'}</b><p>${esc(u.why)}</p></div><button class="btn gap-top" data-act="exam-retry">다시 풀기</button>`:''}`:`
 <div class="callout"><p class="english-sentence" lang="en">${esc(u.prompt)}</p><p class="muted gap-top">${esc(u.ko)}</p></div>
 <div class="button-row gap-top"><button class="btn" data-act="speak" data-text="${attr(u.prompt)}">🔊 질문 듣기</button><button class="btn" data-act="exam-timer">${u.seconds}초 연습 시작</button><button class="btn small" data-act="exam-timer-stop">타이머 멈추기</button></div><p id="study-timer" class="strong" role="status">자유 연습 시간입니다. 실제 시험 제한 시간과는 다를 수 있어요.</p>
 <label for="exam-notes" class="strong">나의 답변 메모</label><textarea id="exam-notes" class="search gap-top" rows="5" maxlength="6000" placeholder="말하고 싶은 내용을 영어로 적거나, 먼저 한국어로 정리해보세요.">${esc(record.notes||'')}</textarea><p class="tiny muted">입력한 메모와 체크 항목은 이 브라우저에 자동 저장됩니다.</p>
 <button class="btn" data-act="exam-model">${examRevealed?'예시 답변 닫기':'예시 답변과 팁 보기'}</button>${examRevealed?`<div class="callout gap-top"><p class="english-sentence" lang="en">${esc(u.model)}</p><button class="btn small gap-top" data-act="speak" data-text="${attr(u.model)}">🔊 예시 듣기</button><p class="gap-top">${esc(u.tip)}</p></div>`:''}
 <fieldset class="self-check gap-top"><legend class="strong">말한 뒤 스스로 확인해요</legend>${u.checks.map((c,i)=>`<label><input type="checkbox" data-exam-check="${i}" ${record.checks?.[i]?'checked':''}> ${esc(c)}</label>`).join('')}</fieldset>
 <button class="btn primary gap-top" data-act="exam-complete" ${record.checks?.every(Boolean)&&record.checks.length===u.checks.length?'':'disabled'}>${record.completed?'연습 완료 ✓':'이번 연습 완료하기'}</button>`}
 <div class="button-row gap-top"><button class="btn" data-act="exam-open" data-track="${examTrack}" data-unit="${Math.max(0,examUnit-1)}" ${examUnit===0?'disabled':''}>← 이전 연습</button><button class="btn" data-act="exam-open" data-track="${examTrack}" data-unit="${Math.min(t.units.length-1,examUnit+1)}" ${examUnit===t.units.length-1?'disabled':''}>다음 연습 →</button></div></div>`;
}
function examRecord(){const u=currentExam();return state.examRecords[u.id]||(state.examRecords[u.id]={notes:'',checks:[false,false,false],completed:false})}
function sentenceParts(){return LESSONS[lessonIndex].sentence.trim().split(/\s+/)}
function sentenceCorrect(){const parts=sentenceParts();return practiceTokens.length===parts.length&&practiceTokens.map(i=>parts[i]).join(' ')===parts.join(' ')}
function practiceHTML(l){
 const parts=sentenceParts(),d=EXTRA.dialogues[l.id%EXTRA.dialogues.length],order=seededShuffle(parts.map((_,i)=>i),l.id+373),dOptions=seededShuffle(d.options.map((_,i)=>i),l.id+23);
 return `<section class="panel pad"><span class="eyebrow">BUILD A SENTENCE</span><h2 class="h2">단어를 눌러 문장 만들기</h2><p class="lead">${esc(l.translation)}</p><div class="sentence-slots gap-top" aria-live="polite">${practiceTokens.length?practiceTokens.map((i,n)=>`<button class="btn small" data-act="sentence-remove" data-pos="${n}" ${practiceChecked?'disabled':''}>${esc(parts[i])} <span class="sr-only">되돌리기</span></button>`).join(''):'아래 단어를 순서대로 눌러보세요.'}</div><div class="button-row gap-top">${order.map(i=>`<button class="btn" data-act="sentence-add" data-index="${i}" ${practiceTokens.includes(i)||practiceChecked?'disabled':''}>${esc(parts[i])}</button>`).join('')}</div><div class="button-row gap-top"><button class="btn primary" data-act="sentence-check" ${practiceTokens.length===parts.length&&!practiceChecked?'':'disabled'}>문장 확인</button><button class="btn" data-act="sentence-reset">다시 만들기</button></div>${practiceChecked?`<div class="quiz-feedback" role="status"><b>${sentenceCorrect()?'정확하게 만들었어요!':'이 순서로 말해보세요.'}</b><p lang="en">${esc(l.sentence)}</p><button class="btn small" data-act="speak" data-text="${attr(l.sentence)}">🔊 문장 듣기</button></div>`:''}</section>
 <section class="panel pad section"><span class="eyebrow">REAL LIFE ENGLISH</span><h2 class="h2">${esc(d.title)}</h2><div class="callout gap-top"><p class="english-sentence" lang="en">${esc(d.line)}</p><p>${esc(d.ko)}</p><button class="btn small" data-act="speak" data-text="${attr(d.line)}">🔊 상대방 말 듣기</button></div><h3 class="h3 gap-top">어떤 대답이 자연스러울까요?</h3><div class="quiz-options gap-top">${dOptions.map(i=>`<button class="quiz-option ${dialogueChoice===null?'':i===d.answer?'correct':dialogueChoice===i?'wrong':''}" ${dialogueChoice===null?'':'disabled'} data-act="dialogue-answer" data-choice="${i}">${esc(d.options[i])}</button>`).join('')}</div>${dialogueChoice!==null?`<div class="quiz-feedback" role="status">${esc(d.why)}<div class="button-row gap-top"><button class="btn small" data-act="speak" data-text="${attr(d.options[d.answer])}">🔊 대답 듣기</button><button class="btn small" data-act="dialogue-retry">다시 연습</button></div></div>`:''}</section>`;
}
function errorKeys(){return Object.keys(state.errors)}
function mistakeQuestion(){const keys=errorKeys();if(!keys.length)return null;mistakeIndex=Math.min(mistakeIndex,keys.length-1);const key=keys[mistakeIndex],[lesson,index]=key.split(':').map(Number);return {key,lesson,index,q:makeQuiz(LESSONS[lesson])[index]}}
function mistakesHTML(){
 const item=mistakeQuestion();if(!item)return `<div class="panel pad"><h1 class="h1">오답 복습</h1><p class="lead">복습할 문제가 없어요. 기초 퀴즈에서 틀린 문제는 여기에 모입니다.</p><button class="btn primary gap-top" data-act="goto" data-to="home">오늘 학습으로</button></div>`;
 const {q,lesson}=item;return `<div class="page-head"><div><h1 class="h1">오답 복습</h1><p class="lead">한 문제씩 다시 익혀요. 맞힌 문제는 목록에서 사라집니다.</p></div><span class="pill">${errorKeys().length}개 남음</span></div><div class="panel quiz"><span class="round-tag">${lesson+1}번째 수업</span><h2 class="quiz-question">${esc(q.prompt)}</h2>${q.audio?`<button class="btn primary" data-act="speak" data-text="${attr(q.audio)}">🔊 발음 듣기</button>`:''}<div class="quiz-options gap-top">${q.options.map(x=>`<button class="quiz-option ${mistakeChoice===null?'':x===q.answer?'correct':mistakeChoice===x?'wrong':''}" ${mistakeChoice===null?'':'disabled'} data-act="mistake-answer" data-answer="${attr(x)}">${esc(x)}</button>`).join('')}</div>${mistakeChoice!==null?`<div class="quiz-feedback" role="status">${esc(q.explanation)}</div><button class="btn primary gap-top" data-act="mistake-next">${mistakeChoice===q.answer?'익혔어요 · 목록에서 빼기':'다음 문제 · 나중에 다시 복습'}</button>`:''}</div>`;
}
function handleExtraAction(a,b){
 if(a==='exam-open'){if(!EXTRA.tracks[b.dataset.track])return true;stopActivities();examTrack=b.dataset.track;examUnit=Math.max(0,Math.min(EXTRA.tracks[examTrack].units.length-1,Number(b.dataset.unit)||0));examRevealed=false;listenTranscript=false;screen='exam';render();window.scrollTo({top:0,behavior:'instant'});return true}
 if(a==='exam-answer'){const u=currentExam(),i=Number(b.dataset.choice),r=examRecord();if(!u.options||r.selected!==undefined||!Number.isInteger(i)||!u.options[i])return true;r.selected=i;r.completed=i===u.answer;save();render();return true}
 if(a==='exam-retry'){const r=examRecord();delete r.selected;r.completed=false;save();render();return true}
 if(a==='exam-transcript'){listenTranscript=!listenTranscript;render();return true}
 if(a==='exam-model'){examRevealed=!examRevealed;render();return true}
 if(a==='exam-timer'){startStudyTimer(currentExam().seconds);return true}
 if(a==='exam-timer-stop'){stopStudyTimer();const n=document.getElementById('study-timer');if(n)n.textContent='타이머를 멈췄어요.';return true}
 if(a==='exam-complete'){const r=examRecord();if(r.checks?.length===3&&r.checks.every(Boolean)){r.completed=true;save();stopStudyTimer();render()}return true}
 if(a==='sentence-add'){const i=Number(b.dataset.index);if(!practiceChecked&&Number.isInteger(i)&&i>=0&&i<sentenceParts().length&&!practiceTokens.includes(i))practiceTokens.push(i);render();return true}
 if(a==='sentence-remove'){if(!practiceChecked)practiceTokens.splice(Number(b.dataset.pos),1);render();return true}
 if(a==='sentence-check'){if(practiceTokens.length===sentenceParts().length)practiceChecked=true;render();return true}
 if(a==='sentence-reset'){practiceTokens=[];practiceChecked=false;render();return true}
 if(a==='dialogue-answer'){if(dialogueChoice===null)dialogueChoice=Number(b.dataset.choice);render();return true}
 if(a==='dialogue-retry'){dialogueChoice=null;render();return true}
 if(a==='mistake-answer'){if(mistakeChoice===null)mistakeChoice=b.dataset.answer;render();return true}
 if(a==='mistake-next'){const m=mistakeQuestion();if(m&&mistakeChoice!==null){if(mistakeChoice===m.q.answer){delete state.errors[m.key];save()}else mistakeIndex=(mistakeIndex+1)%errorKeys().length;mistakeChoice=null;render()}return true}
 return false;
}

let cloudStatus='',cloudBusy=false,cloudConflict=false,cloudTimer=null,authEpoch=0;
function cachedCloudSession(){
 try{if(!CLOUD_CONFIG.enabled||!CLOUD_CONFIG.url||!CLOUD_CONFIG.publishableKey)return null;const s=JSON.parse(localStorage.getItem('english-cloud-session')||'null');return s?.access_token&&s?.refresh_token&&/^[0-9a-f-]{36}$/i.test(s.user?.id)?s:null}catch{return null}
}
function cloudMeta(){try{return JSON.parse(localStorage.getItem(activeStorageKey+'-sync')||'null')||{revision:0,dirty:false}}catch{return {revision:0,dirty:false}}}
function storeCloudMeta(m){localStorage.setItem(activeStorageKey+'-sync',JSON.stringify(m))}
function rememberSession(s){if(!s||typeof s.access_token!=='string'||!s.access_token||typeof s.refresh_token!=='string'||!s.refresh_token||!/^[0-9a-f-]{36}$/i.test(s.user?.id))throw Error('로그인 정보를 확인하지 못했어요. 다시 로그인해 주세요.');s.expires_at=Date.now()/1000+(s.expires_in||3600);cloudSession=s;localStorage.setItem('english-cloud-session',JSON.stringify(s))}
async function safeCloudFetch(url,options){try{return await fetch(url,options)}catch{throw Error('네트워크에 연결하지 못했어요. 기록은 이 기기에 보관되며 다시 연결해 동기화할 수 있어요.')}}
async function cloudFetch(path,options={},authenticated=true){
 const requestEpoch=authEpoch;
 if(!CLOUD_CONFIG.enabled||!CLOUD_CONFIG.url||!CLOUD_CONFIG.publishableKey)throw Error('계정 연결을 준비하고 있어요.');
 if(authenticated&&!cloudSession)throw Error('다시 로그인해 주세요.');
 if(authenticated&&cloudSession.expires_at<Date.now()/1000+60){
  const res=await safeCloudFetch(CLOUD_CONFIG.url+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:CLOUD_CONFIG.publishableKey,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:cloudSession.refresh_token})});
  if(!res.ok)throw Error('로그인이 만료됐어요. 다시 로그인해 주세요.');const refreshed=await res.json();if(requestEpoch!==authEpoch)throw Error('계정이 변경되어 요청을 중단했어요.');rememberSession(refreshed);
 }
 const response=await safeCloudFetch(CLOUD_CONFIG.url+path,{...options,headers:{apikey:CLOUD_CONFIG.publishableKey,'Content-Type':'application/json',...(authenticated?{Authorization:'Bearer '+cloudSession.access_token}:{}),...options.headers}});
 const body=await response.json().catch(()=>null);
 if(authenticated&&requestEpoch!==authEpoch)throw Error('계정이 변경되어 요청을 중단했어요.');
 if(!response.ok){if(body?.code==='40001'){cloudConflict=true;throw Error('다른 기기의 기록이 바뀌었어요. 사용할 기록을 선택해 주세요.')}
 throw Error(authenticated?'연결하지 못했어요. 네트워크와 로그인 상태를 확인해 주세요.':'Google 로그인을 완료하지 못했어요. 로그인 버튼으로 다시 시도해 주세요.');}
 return body;
}
function queueCloudSave(){if(!cloudSession)return;try{const m=cloudMeta();m.dirty=true;storeCloudMeta(m)}catch{return}clearTimeout(cloudTimer);if(!cloudConflict)cloudTimer=setTimeout(()=>syncCloud().catch(()=>{}),1200)}
function refreshCloudUI(){if(screen==='account')render()}
async function syncCloud(){
 if(!cloudSession||cloudBusy||cloudConflict)return;cloudBusy=true;const epoch=authEpoch,key=activeStorageKey,snapshot=JSON.stringify(state),meta=cloudMeta();
 try{
  if(meta.dirty){
   const data=await cloudFetch('/rest/v1/rpc/sync_learning_state',{method:'POST',body:JSON.stringify({expected_revision:meta.revision,new_state:JSON.parse(snapshot)})});
   if(epoch!==authEpoch||key!==activeStorageKey)return;
   const row=Array.isArray(data)?data[0]:data;if(!row?.revision)throw Error('저장 결과를 확인하지 못했어요.');
   const dirty=JSON.stringify(state)!==snapshot;storeCloudMeta({revision:row.revision,dirty});cloudStatus=dirty?'최신 기록 저장 중…':'기록을 온라인에 저장했어요.';
  }else{
   const rows=await cloudFetch('/rest/v1/user_learning_state?select=state,revision&user_id=eq.'+cloudSession.user.id);
   if(epoch!==authEpoch||key!==activeStorageKey)return;
   if(rows.length){if(cloudMeta().dirty){cloudConflict=true;throw Error('학습 중 온라인 기록이 도착했어요. 사용할 기록을 선택해 주세요.')}state=normalizeState(rows[0].state);localStorage.setItem(activeStorageKey,JSON.stringify(state));storeCloudMeta({revision:rows[0].revision,dirty:false})}
   cloudStatus='최신 온라인 기록을 확인했어요.';
  }
 }catch(e){if(epoch===authEpoch)cloudStatus=e.message;throw e}finally{cloudBusy=false;if(epoch===authEpoch){refreshCloudUI();if(cloudMeta().dirty&&!cloudConflict&&JSON.stringify(state)!==snapshot)queueCloudSave()}}
}
let googleProviderReady=null,googleProviderChecking=false,googleRedirecting=false;
const GOOGLE_PKCE_KEY='english-google-pkce';
async function checkGoogleProvider(){
 if(googleProviderChecking)return;googleProviderChecking=true;
 try{const settings=await cloudFetch('/auth/v1/settings',{},false);googleProviderReady=settings?.external?.google===true;if(!googleProviderReady&&!cloudSession)cloudStatus='Google 로그인 연결을 준비하고 있어요. 지금은 기기에 학습 기록이 저장됩니다.'}
 catch{googleProviderReady=null;cloudStatus='로그인 연결 상태를 확인하지 못했어요. 잠시 후 다시 확인해 주세요.'}
 finally{googleProviderChecking=false;refreshCloudUI()}
}
function base64url(bytes){return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function appRedirectURL(){const url=new URL(location.href);url.search='';url.hash='';return url.href}
async function startGoogleLogin(){
 if(googleRedirecting)return;
 if(googleProviderReady!==true){await checkGoogleProvider();if(googleProviderReady!==true)return}
 if(!crypto.subtle||!crypto.getRandomValues)throw Error('보안 연결에서 로그인할 수 있어요. Safari에서 앱 주소를 다시 열어 주세요.');
 googleRedirecting=true;refreshCloudUI();
 try{
  const verifier=base64url(crypto.getRandomValues(new Uint8Array(32)));
  const challenge=base64url(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier))));
  const redirectTo=appRedirectURL();
  sessionStorage.setItem(GOOGLE_PKCE_KEY,JSON.stringify({verifier,createdAt:Date.now(),redirectTo}));
  const url=new URL(CLOUD_CONFIG.url+'/auth/v1/authorize');
  url.searchParams.set('provider','google');url.searchParams.set('redirect_to',redirectTo);url.searchParams.set('code_challenge',challenge);url.searchParams.set('code_challenge_method','s256');url.searchParams.set('prompt','select_account');
  location.assign(url.href);
 }catch(e){googleRedirecting=false;throw e}
}
function clearAuthURL(){const url=new URL(location.href);for(const key of ['code','error','error_code','error_description'])url.searchParams.delete(key);url.hash='';history.replaceState(null,'',url.pathname+url.search)}
async function initializeGoogleAuth(){
 const url=new URL(location.href),hash=new URLSearchParams(url.hash.slice(1)),code=url.searchParams.get('code'),error=url.searchParams.get('error')||hash.get('error');
 if(!code&&!error&&!hash.has('access_token')){if(cloudSession)await syncCloud().catch(()=>{});await checkGoogleProvider();return}
 clearAuthURL();screen='account';stopActivities();
 if(error||hash.has('access_token')){sessionStorage.removeItem(GOOGLE_PKCE_KEY);cloudStatus=error==='access_denied'?'로그인이 취소됐어요. 다시 시도할 수 있습니다.':'로그인을 완료하지 못했어요. Google 로그인 버튼으로 다시 시작해 주세요.';render();await checkGoogleProvider();return}
 let saved;try{saved=JSON.parse(sessionStorage.getItem(GOOGLE_PKCE_KEY)||'null')}catch{}
 sessionStorage.removeItem(GOOGLE_PKCE_KEY);
 if(!saved||typeof saved.verifier!=='string'||!/^[A-Za-z0-9_-]{43}$/.test(saved.verifier)||!Number.isFinite(saved.createdAt)||Date.now()-saved.createdAt>10*60*1000||saved.createdAt>Date.now()+60000||saved.redirectTo!==appRedirectURL()){
  cloudStatus='로그인을 시작한 브라우저에서 다시 시도해 주세요. 로그인 연결이 만료됐을 수도 있어요.';render();await checkGoogleProvider();return
 }
 cloudStatus='Google 로그인을 확인하고 있어요…';render();
 try{
  const session=await cloudFetch('/auth/v1/token?grant_type=pkce',{method:'POST',body:JSON.stringify({auth_code:code,code_verifier:saved.verifier})},false);
  authEpoch++;rememberSession(session);activeStorageKey=KEY+'-user-'+session.user.id;state=loadState();cloudConflict=false;quiz=null;cloudStatus='로그인했어요. 개인 기록을 확인합니다.';await syncCloud();
 }catch(e){cloudStatus=e.message}
 render();await checkGoogleProvider();
}

async function resolveCloudConflict(useLocal){
 if(!cloudSession||cloudBusy)return;const epoch=authEpoch;
 if(!confirm(useLocal?'이 기기의 계정 기록으로 온라인 기록을 바꿀까요? 다른 기기의 변경 내용이 대체될 수 있어요.':'온라인 기록으로 이 기기의 계정 기록을 바꿀까요? 아직 저장되지 않은 변경 내용이 대체될 수 있어요.'))return;
 const rows=await cloudFetch('/rest/v1/user_learning_state?select=state,revision&user_id=eq.'+cloudSession.user.id);if(epoch!==authEpoch)return;
 const revision=rows[0]?.revision||0;
 if(!useLocal){state=normalizeState(rows[0]?.state||defaultState());localStorage.setItem(activeStorageKey,JSON.stringify(state))}
 storeCloudMeta({revision,dirty:useLocal});cloudConflict=false;cloudStatus='사용할 기록을 선택했어요.';await syncCloud();
}
function accountHTML(){
 const enabled=!!(CLOUD_CONFIG.enabled&&CLOUD_CONFIG.url&&CLOUD_CONFIG.publishableKey);
 if(!enabled)return `<div class="panel pad"><span class="eyebrow">MY ACCOUNT</span><h1 class="h1">나의 학습 계정</h1><p class="lead">기기 간에 기록을 이어 쓸 수 있도록 계정 연결을 준비하고 있어요. 현재는 이 브라우저에 기록됩니다.</p><button class="btn primary gap-top" data-act="goto" data-to="settings">학습 기록 백업하기</button></div>`;
 return `<div class="panel pad"><span class="eyebrow">MY ACCOUNT</span><h1 class="h1">${cloudSession?'나의 학습 계정':'Google 계정으로 시작하기'}</h1>${cloudSession?`<p class="lead">${esc(cloudSession.user.email||'로그인한 사용자')}</p><p>기초 진도·오답·시험 연습 기록을 계정에 저장합니다.</p><div class="button-row"><button class="btn primary" data-act="cloud-sync" ${cloudBusy?'disabled':''}>지금 동기화</button><button class="btn" data-act="cloud-import">로그인 전 기기 기록 가져오기</button><button class="btn" data-act="cloud-logout" ${cloudBusy?'disabled':''}>로그아웃</button></div>${cloudConflict?`<div class="alert gap-top"><p>여러 기기의 기록이 달라요. 덮어쓰기 전에 설정에서 기록을 백업할 수 있습니다.</p><div class="button-row"><button class="btn" data-act="cloud-use-remote">온라인 기록 사용</button><button class="btn" data-act="cloud-use-local">이 기기 기록으로 온라인 저장</button></div></div>`:''}`:`<p class="lead">Google 계정으로 로그인하고, 다른 기기에서도 학습을 이어가세요.</p><div class="button-row gap-top"><button class="btn primary" data-act="cloud-google" ${googleProviderReady===true&&!googleRedirecting?'':'disabled'}>${googleRedirecting?'Google로 이동 중…':'Google로 로그인'}</button>${googleProviderReady!==true?`<button class="btn" data-act="cloud-provider-check" ${googleProviderChecking?'disabled':''}>연결 상태 다시 확인</button>`:''}</div>`}<p id="cloud-status" class="tip gap-top" role="status">${esc(cloudStatus||(cloudSession?'연결 상태를 확인해 주세요.':'로그인 전 기록은 이 브라우저에 보관됩니다.'))}</p></div>`;
}
async function handleCloudAction(a){
 try{
  if(a==='cloud-google')await startGoogleLogin();
  if(a==='cloud-provider-check')await checkGoogleProvider();
  if(a==='cloud-sync')await syncCloud();
  if(a==='cloud-use-remote')await resolveCloudConflict(false);
  if(a==='cloud-use-local')await resolveCloudConflict(true);
  if(a==='cloud-import'&&confirm('로그인 전 이 브라우저의 기록으로 현재 계정 기록을 바꿀까요? 계정의 기존 기록은 설정에서 먼저 백업하세요.')){const raw=localStorage.getItem(KEY);if(!raw)throw Error('가져올 기기 기록이 없어요.');state=normalizeState(JSON.parse(raw));save();await syncCloud()}
  if(a==='cloud-logout'){
   if(cloudMeta().dirty&&!confirm('아직 온라인에 저장되지 않은 기록이 있어요. 설정에서 먼저 백업할 수 있습니다. 이 기기의 계정 기록을 지우고 로그아웃할까요?'))return;
   clearTimeout(cloudTimer);stopActivities();const oldKey=activeStorageKey;authEpoch++;cloudSession=null;cloudConflict=false;localStorage.removeItem('english-cloud-session');sessionStorage.removeItem(GOOGLE_PKCE_KEY);localStorage.removeItem(oldKey);localStorage.removeItem(oldKey+'-sync');activeStorageKey=KEY;state=loadState();quiz=null;cloudStatus='로그아웃했어요. 로그인 전 기기 기록으로 돌아왔어요.';
  }
 }catch(e){cloudStatus=e.message}refreshCloudUI();
}
window.addEventListener('online',()=>{if(cloudSession)syncCloud().catch(()=>{})});
window.addEventListener('focus',()=>{if(cloudSession)syncCloud().catch(()=>{})});

render();
initializeGoogleAuth().catch(()=>{cloudStatus='로그인 연결을 확인하지 못했어요. 잠시 후 다시 시도해 주세요.';refreshCloudUI()});
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
