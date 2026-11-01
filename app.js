/* 영어 첫걸음 v2 — study planner, word studio, chapter courses and optional account sync. */
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
const EXPANSION={"conversation": {"chapters": [{"id": "conv-greetings", "title": "처음 만나 인사하기", "goal": "이름과 하는 일을 말하고 상대방에게도 물어봐요.", "words": [{"word": "hello", "meaning": "안녕하세요"}, {"word": "nice to meet you", "meaning": "만나서 반가워요"}, {"word": "name", "meaning": "이름"}, {"word": "from", "meaning": "~출신의"}, {"word": "work", "meaning": "일하다"}, {"word": "study", "meaning": "공부하다"}], "patterns": [{"en": "My name is [name].", "ko": "제 이름은 [이름]이에요."}, {"en": "I'm from [place].", "ko": "저는 [장소] 출신이에요."}, {"en": "What do you do?", "ko": "어떤 일을 하세요?"}], "dialogue": [{"speaker": "A", "en": "Hi, my name is Jina.", "ko": "안녕하세요, 제 이름은 지나예요."}, {"speaker": "B", "en": "Hi, I'm Alex. Nice to meet you.", "ko": "안녕하세요, 저는 Alex예요. 만나서 반가워요."}, {"speaker": "A", "en": "Nice to meet you, too. Where are you from?", "ko": "저도 반가워요. 어디 출신이세요?"}, {"speaker": "B", "en": "I'm from Canada. How about you?", "ko": "저는 캐나다 출신이에요. 당신은요?"}, {"speaker": "A", "en": "I'm from Korea. What do you do?", "ko": "저는 한국 출신이에요. 어떤 일을 하세요?"}, {"speaker": "B", "en": "I'm a student. I study engineering.", "ko": "저는 학생이에요. 공학을 공부해요."}], "roleplay": {"prompt": "Introduce yourself to someone you meet for the first time. Say your name, where you are from, and what you do. Then ask one question.", "ko": "처음 만난 사람에게 이름, 출신, 하는 일을 소개하고 질문도 하나 해보세요.", "model": "Hi, my name is Jina. I'm from Korea. I work at a small company. Nice to meet you. What do you do?", "checks": ["이름과 출신을 말했어요", "하는 일을 간단히 소개했어요", "상대에게 질문을 하나 했어요"]}, "quiz": {"prompt": "상대가 “Nice to meet you.”라고 인사했어요. 가장 자연스러운 대답은?", "options": ["Nice to meet you, too.", "It is on the left.", "A small coffee, please."], "answer": 0, "why": "Nice to meet you, too.는 나도 만나서 반갑다고 답하는 인사예요."}}, {"id": "conv-cafe", "title": "카페에서 주문하기", "goal": "원하는 음료와 크기, 이용 방식을 공손하게 말해요.", "words": [{"word": "coffee", "meaning": "커피"}, {"word": "tea", "meaning": "차"}, {"word": "small", "meaning": "작은 크기의"}, {"word": "large", "meaning": "큰 크기의"}, {"word": "to go", "meaning": "포장해서"}, {"word": "for here", "meaning": "매장에서 먹고 가는"}], "patterns": [{"en": "I'd like [drink], please.", "ko": "[음료]를 주세요."}, {"en": "Can I have a [size] one?", "ko": "[크기]로 받을 수 있을까요?"}, {"en": "To go, please.", "ko": "포장해 주세요."}], "dialogue": [{"speaker": "A", "en": "Hello. What would you like?", "ko": "안녕하세요. 무엇을 드릴까요?"}, {"speaker": "B", "en": "I'd like a coffee, please.", "ko": "커피 한 잔 주세요."}, {"speaker": "A", "en": "Small or large?", "ko": "작은 크기인가요, 큰 크기인가요?"}, {"speaker": "B", "en": "A small one, please.", "ko": "작은 크기로 주세요."}, {"speaker": "A", "en": "Is that for here or to go?", "ko": "매장에서 드실 건가요, 포장인가요?"}, {"speaker": "B", "en": "To go, please. Thank you.", "ko": "포장해 주세요. 감사합니다."}], "roleplay": {"prompt": "Order a drink at a café. Choose the drink and size, and say whether you want it for here or to go.", "ko": "카페에서 음료와 크기를 고르고 매장 이용 또는 포장 여부를 말해보세요.", "model": "Hi. I'd like a tea, please. Can I have a large one? It's to go. Thank you.", "checks": ["음료를 골라 말했어요", "원하는 크기를 말했어요", "매장 이용인지 포장인지 말했어요"]}, "quiz": {"prompt": "음료를 포장하고 싶어요. 어떻게 말하면 될까요?", "options": ["Nice to meet you.", "To go, please.", "Turn right at the corner."], "answer": 1, "why": "To go, please.는 음식을 포장해 달라는 표현이에요. 매장에서 먹으면 For here, please.라고 해요."}}, {"id": "conv-restaurant", "title": "식당에서 주문하고 부탁하기", "goal": "메뉴를 주문하고 필요한 물건을 공손하게 요청해요.", "words": [{"word": "menu", "meaning": "메뉴판"}, {"word": "chicken", "meaning": "닭고기 요리"}, {"word": "water", "meaning": "물"}, {"word": "bill", "meaning": "계산서"}, {"word": "table", "meaning": "테이블"}, {"word": "please", "meaning": "부탁할 때 덧붙이는 공손한 말"}], "patterns": [{"en": "Could I see the menu, please?", "ko": "메뉴판을 볼 수 있을까요?"}, {"en": "I'll have [dish], please.", "ko": "저는 [음식]으로 할게요."}, {"en": "Could we have [item], please?", "ko": "[물건]을 주실 수 있을까요?"}], "dialogue": [{"speaker": "A", "en": "Are you ready to order?", "ko": "주문하시겠어요?"}, {"speaker": "B", "en": "Yes. I'll have the chicken, please.", "ko": "네. 닭고기 요리로 할게요."}, {"speaker": "A", "en": "Of course. Anything to drink?", "ko": "네. 마실 것은 무엇으로 하시겠어요?"}, {"speaker": "B", "en": "Water, please.", "ko": "물로 주세요."}, {"speaker": "A", "en": "Certainly. I'll bring it to your table.", "ko": "네. 테이블로 가져다드릴게요."}, {"speaker": "B", "en": "Thank you. Could I have a fork, too?", "ko": "감사합니다. 포크도 하나 주실 수 있을까요?"}], "roleplay": {"prompt": "Order a meal at a restaurant. Choose a dish and a drink, then politely ask for one thing you need.", "ko": "식당에서 음식과 음료를 주문하고 필요한 물건 한 가지를 공손하게 부탁해보세요.", "model": "I'll have the chicken, please. Water is fine for me. Could I have a fork, too? Thank you.", "checks": ["먹고 싶은 음식을 말했어요", "마실 것을 말했어요", "필요한 것을 공손하게 요청했어요"]}, "quiz": {"prompt": "식사를 마치고 계산서를 받고 싶어요. 가장 알맞은 말은?", "options": ["Where is the nearest station?", "Can I try this on?", "Could I have the bill, please?"], "answer": 2, "why": "bill은 식당 계산서를 뜻해요. Could I have …, please?로 공손하게 요청할 수 있어요."}}, {"id": "conv-shopping", "title": "가게에서 물건 사기", "goal": "가격과 크기를 묻고 원하는 물건을 선택해요.", "words": [{"word": "price", "meaning": "가격"}, {"word": "size", "meaning": "크기 또는 옷 사이즈"}, {"word": "medium", "meaning": "중간 크기의"}, {"word": "try on", "meaning": "옷을 입어 보다"}, {"word": "card", "meaning": "카드"}, {"word": "receipt", "meaning": "영수증"}], "patterns": [{"en": "How much is this [item]?", "ko": "이 [물건]은 얼마인가요?"}, {"en": "Do you have this in [size]?", "ko": "이 물건의 [크기]가 있나요?"}, {"en": "Can I try it on?", "ko": "입어 봐도 될까요?"}], "dialogue": [{"speaker": "A", "en": "Can I help you?", "ko": "도와드릴까요?"}, {"speaker": "B", "en": "Yes. How much is this shirt?", "ko": "네. 이 셔츠는 얼마인가요?"}, {"speaker": "A", "en": "It's twenty dollars.", "ko": "20달러예요."}, {"speaker": "B", "en": "Do you have it in medium?", "ko": "중간 사이즈가 있나요?"}, {"speaker": "A", "en": "Yes, here you are.", "ko": "네, 여기 있습니다."}, {"speaker": "B", "en": "Thank you. Can I try it on?", "ko": "감사합니다. 입어 봐도 될까요?"}], "roleplay": {"prompt": "You want to buy a shirt. Ask about the price and size, then ask to try it on.", "ko": "셔츠를 사려고 해요. 가격과 사이즈를 묻고 입어 봐도 되는지 물어보세요.", "model": "Hello. How much is this shirt? Do you have it in medium? Can I try it on? Thank you.", "checks": ["가격을 물었어요", "필요한 사이즈를 물었어요", "입어 봐도 되는지 물었어요"]}, "quiz": {"prompt": "가게 직원에게 “Can I try it on?”이라고 하면 무엇을 요청하는 건가요?", "options": ["물건의 가격을 낮춰 달라는 요청", "옷을 입어 봐도 되는지 묻는 요청", "영수증을 버려 달라는 요청"], "answer": 1, "why": "try on은 옷이나 신발을 착용해 본다는 뜻이에요. 가격을 물을 때는 How much …?를 사용해요."}}, {"id": "conv-directions", "title": "길 묻고 안내하기", "goal": "목적지를 묻고 간단한 방향 안내를 이해해요.", "words": [{"word": "station", "meaning": "역"}, {"word": "corner", "meaning": "모퉁이"}, {"word": "go straight", "meaning": "직진하다"}, {"word": "turn left", "meaning": "왼쪽으로 돌다"}, {"word": "turn right", "meaning": "오른쪽으로 돌다"}, {"word": "next to", "meaning": "~옆에"}], "patterns": [{"en": "Excuse me. Where is [place]?", "ko": "실례합니다. [장소]가 어디인가요?"}, {"en": "Go straight and turn [direction].", "ko": "직진해서 [방향]으로 도세요."}, {"en": "It's next to [place].", "ko": "[장소] 옆에 있어요."}], "dialogue": [{"speaker": "A", "en": "Excuse me. Where is the station?", "ko": "실례합니다. 역이 어디인가요?"}, {"speaker": "B", "en": "Go straight and turn left at the corner.", "ko": "직진해서 모퉁이에서 왼쪽으로 도세요."}, {"speaker": "A", "en": "Is it near the bank?", "ko": "은행 근처인가요?"}, {"speaker": "B", "en": "Yes. It's next to the bank.", "ko": "네. 은행 옆에 있어요."}, {"speaker": "A", "en": "Thank you for your help.", "ko": "도와주셔서 감사합니다."}, {"speaker": "B", "en": "You're welcome.", "ko": "천만에요."}], "roleplay": {"prompt": "You want to find the station. Ask where it is, check whether you should turn right, and ask about a nearby landmark.", "ko": "역을 찾아가려고 해요. 역의 위치를 묻고 오른쪽으로 도는지, 주변에 어떤 장소가 있는지 확인해보세요.", "model": "Excuse me. Where is the station? Should I go straight and turn right? Is it next to the bank? Thank you for your help.", "checks": ["목적지가 어디인지 물었어요", "가야 할 방향을 다시 확인했어요", "주변 장소를 기준으로 위치를 확인했어요"]}, "quiz": {"prompt": "“Turn left at the corner.”는 어떤 안내인가요?", "options": ["모퉁이에서 왼쪽으로 도세요.", "다음 역에서 내리세요.", "은행 안에서 기다리세요."], "answer": 0, "why": "turn left는 왼쪽으로 돌다, at the corner는 모퉁이에서라는 뜻이에요."}}, {"id": "conv-transport", "title": "버스와 기차 이용하기", "goal": "행선지와 승강장, 출발 시간을 확인해요.", "words": [{"word": "ticket", "meaning": "표"}, {"word": "platform", "meaning": "승강장"}, {"word": "bus stop", "meaning": "버스 정류장"}, {"word": "next train", "meaning": "다음 기차"}, {"word": "leave", "meaning": "출발하다"}, {"word": "get off", "meaning": "내리다"}], "patterns": [{"en": "Does this [bus/train] go to [place]?", "ko": "이 [버스/기차]는 [장소]에 가나요?"}, {"en": "What time does it leave?", "ko": "몇 시에 출발하나요?"}, {"en": "Which platform should I use?", "ko": "어느 승강장으로 가야 하나요?"}], "dialogue": [{"speaker": "A", "en": "Excuse me. Does this train go to the airport?", "ko": "실례합니다. 이 기차는 공항에 가나요?"}, {"speaker": "B", "en": "Yes, it does.", "ko": "네, 갑니다."}, {"speaker": "A", "en": "What time does it leave?", "ko": "몇 시에 출발하나요?"}, {"speaker": "B", "en": "At ten fifteen.", "ko": "10시 15분에 출발해요."}, {"speaker": "A", "en": "Which platform should I use?", "ko": "어느 승강장으로 가야 하나요?"}, {"speaker": "B", "en": "Please go to platform three.", "ko": "3번 승강장으로 가세요."}], "roleplay": {"prompt": "You are taking a train to the airport. Ask whether it goes there, when it leaves, and which platform you need.", "ko": "공항으로 기차를 타려고 해요. 공항에 가는지, 출발 시간이 언제인지, 어느 승강장인지 물어보세요.", "model": "Excuse me. Does this train go to the airport? What time does it leave? Which platform should I use? Thank you.", "checks": ["목적지에 가는지 확인했어요", "출발 시간을 물었어요", "승강장 정보를 물었어요"]}, "quiz": {"prompt": "기차 출발 시간을 확인하고 싶어요. 가장 알맞은 질문은?", "options": ["What size do you need?", "Could I have some water?", "What time does it leave?"], "answer": 2, "why": "What time …?는 시간을 묻는 질문이에요. 교통편에서는 leave를 출발하다는 뜻으로 쓸 수 있어요."}}, {"id": "conv-hotel", "title": "호텔에서 체크인하기", "goal": "예약 정보를 말하고 숙박에 필요한 내용을 확인해요.", "words": [{"word": "reservation", "meaning": "예약"}, {"word": "check in", "meaning": "체크인하다"}, {"word": "room", "meaning": "객실"}, {"word": "breakfast", "meaning": "아침 식사"}, {"word": "key card", "meaning": "카드 키"}, {"word": "included", "meaning": "포함된"}], "patterns": [{"en": "I have a reservation under [name].", "ko": "[이름]으로 예약했어요."}, {"en": "I'd like to check in.", "ko": "체크인하고 싶어요."}, {"en": "Is [service] included?", "ko": "[서비스]가 포함되어 있나요?"}], "dialogue": [{"speaker": "A", "en": "Good evening. How can I help you?", "ko": "안녕하세요. 무엇을 도와드릴까요?"}, {"speaker": "B", "en": "I'd like to check in. I have a reservation under Jina Kim.", "ko": "체크인하고 싶어요. Jina Kim으로 예약했어요."}, {"speaker": "A", "en": "Welcome. Could I see your passport, please?", "ko": "환영합니다. 여권을 보여주시겠어요?"}, {"speaker": "B", "en": "Here you are. Is breakfast included?", "ko": "여기 있습니다. 아침 식사가 포함되어 있나요?"}, {"speaker": "A", "en": "Yes. Breakfast is served from seven to ten.", "ko": "네. 아침 식사는 7시부터 10시까지 제공돼요."}, {"speaker": "B", "en": "Thank you. Where is the breakfast room?", "ko": "감사합니다. 조식 식당은 어디인가요?"}], "roleplay": {"prompt": "Check in at a hotel. Give the name on your reservation and ask two questions about breakfast.", "ko": "호텔에서 예약자 이름을 말하고 조식에 관한 질문 두 가지를 해보세요.", "model": "Hello. I'd like to check in. I have a reservation under Jina Kim. Is breakfast included? What time is breakfast served?", "checks": ["체크인 의사를 밝혔어요", "예약자 이름을 말했어요", "조식에 관한 질문 두 가지를 했어요"]}, "quiz": {"prompt": "“I have a reservation under Jina Kim.”은 무슨 뜻인가요?", "options": ["Jina Kim으로 예약했어요.", "Jina Kim에게 방을 빌려줬어요.", "Jina Kim보다 아래층에 있어요."], "answer": 0, "why": "예약을 확인할 때 under 뒤에 예약자 이름을 말할 수 있어요. 여기서 under는 이름으로 등록되어 있다는 뜻이에요."}}, {"id": "conv-appointments", "title": "약속 잡고 시간 바꾸기", "goal": "가능한 시간을 제안하고 변경 이유와 대안을 말해요.", "words": [{"word": "available", "meaning": "시간이 되는"}, {"word": "tomorrow", "meaning": "내일"}, {"word": "afternoon", "meaning": "오후"}, {"word": "instead", "meaning": "대신에"}, {"word": "meet", "meaning": "만나다"}, {"word": "works for me", "meaning": "나는 괜찮아요"}], "patterns": [{"en": "Are you available on [day]?", "ko": "[요일]에 시간이 되나요?"}, {"en": "Can we meet at [time]?", "ko": "[시간]에 만날 수 있을까요?"}, {"en": "How about [alternative]?", "ko": "[대안]은 어떤가요?"}], "dialogue": [{"speaker": "A", "en": "Are you available on Friday?", "ko": "금요일에 시간이 되나요?"}, {"speaker": "B", "en": "Yes. Can we meet at two?", "ko": "네. 두 시에 만날 수 있을까요?"}, {"speaker": "A", "en": "I'm sorry. I have a meeting then. How about three?", "ko": "미안해요. 그때 회의가 있어요. 세 시는 어떤가요?"}, {"speaker": "B", "en": "Three works for me.", "ko": "저는 세 시가 괜찮아요."}, {"speaker": "A", "en": "Great. Let's meet at the café near the station.", "ko": "좋아요. 역 근처 카페에서 만나요."}, {"speaker": "B", "en": "Sounds good. See you on Friday.", "ko": "좋아요. 금요일에 만나요."}], "roleplay": {"prompt": "Arrange a meeting with a friend. Suggest a day and time. If that time does not work, suggest another time.", "ko": "친구와 만날 요일과 시간을 제안하고, 어려운 경우 다른 시간을 제안해보세요.", "model": "Are you available on Friday? Can we meet at two? If two is not a good time, how about three instead? We can meet at the café near the station.", "checks": ["만날 요일을 제안했어요", "구체적인 시간을 제안했어요", "다른 시간이나 대안을 제시했어요"]}, "quiz": {"prompt": "상대가 제안한 시간이 괜찮아요. 가장 자연스러운 대답은?", "options": ["Could I see the menu?", "That works for me.", "I would like a large one."], "answer": 1, "why": "That works for me.는 제안한 일정이나 방법이 나에게 괜찮다는 뜻이에요."}}, {"id": "conv-clarification", "title": "전화와 다시 묻기", "goal": "잘 못 들었을 때 반복과 천천히 말하기를 요청해요.", "words": [{"word": "repeat", "meaning": "반복하다"}, {"word": "slowly", "meaning": "천천히"}, {"word": "spell", "meaning": "철자를 말하다"}, {"word": "hear", "meaning": "듣다"}, {"word": "again", "meaning": "다시"}, {"word": "hold on", "meaning": "잠시 기다리다"}], "patterns": [{"en": "Could you say that again, please?", "ko": "다시 말씀해 주실 수 있나요?"}, {"en": "Could you speak more slowly?", "ko": "좀 더 천천히 말씀해 주실 수 있나요?"}, {"en": "How do you spell [word]?", "ko": "[단어]의 철자가 어떻게 되나요?"}], "dialogue": [{"speaker": "A", "en": "Hello. This is Alex from Green Hotel.", "ko": "안녕하세요. Green Hotel의 Alex입니다."}, {"speaker": "B", "en": "Sorry, I didn't catch your name. Could you say it again?", "ko": "죄송하지만 이름을 잘 못 들었어요. 다시 말씀해 주실 수 있나요?"}, {"speaker": "A", "en": "Of course. My name is Alex.", "ko": "물론이죠. 제 이름은 Alex입니다."}, {"speaker": "B", "en": "How do you spell that?", "ko": "철자가 어떻게 되나요?"}, {"speaker": "A", "en": "A-L-E-X. I'm calling about your reservation.", "ko": "A-L-E-X입니다. 예약에 관해 전화드렸어요."}, {"speaker": "B", "en": "Thank you. Could you speak a little more slowly?", "ko": "감사합니다. 조금 더 천천히 말씀해 주실 수 있나요?"}], "roleplay": {"prompt": "On the phone, you cannot hear the caller clearly. Ask them to repeat their name, spell it, and speak more slowly.", "ko": "전화 상대의 말을 잘 못 들었어요. 이름을 다시 말하고 철자를 알려 달라고 한 뒤 천천히 말해 달라고 부탁해보세요.", "model": "Sorry, I didn't catch your name. Could you say it again, please? How do you spell that? Could you speak a little more slowly? Thank you.", "checks": ["반복해서 말해 달라고 부탁했어요", "이름의 철자를 물었어요", "천천히 말해 달라고 부탁했어요"]}, "quiz": {"prompt": "상대가 너무 빨리 말할 때 사용할 수 있는 표현은?", "options": ["Could you speak more slowly?", "Could I have the bill?", "Do you have it in medium?"], "answer": 0, "why": "speak more slowly는 더 천천히 말하다는 뜻이에요. 잘 못 들었을 때는 Could you say that again?도 사용할 수 있어요."}}, {"id": "conv-pharmacy", "title": "약국에서 도움 요청하기", "goal": "몸 상태를 간단히 말하고 약사에게 필요한 정보를 물어봐요.", "words": [{"word": "pharmacy", "meaning": "약국"}, {"word": "pharmacist", "meaning": "약사"}, {"word": "headache", "meaning": "두통"}, {"word": "allergy", "meaning": "알레르기"}, {"word": "medicine", "meaning": "약"}, {"word": "instructions", "meaning": "사용 안내"}], "patterns": [{"en": "I have [a symptom].", "ko": "[증상]이 있어요."}, {"en": "May I speak to the pharmacist?", "ko": "약사와 이야기할 수 있을까요?"}, {"en": "Could you explain the instructions?", "ko": "사용 안내를 설명해 주실 수 있나요?"}], "dialogue": [{"speaker": "A", "en": "Hello. How can I help you?", "ko": "안녕하세요. 무엇을 도와드릴까요?"}, {"speaker": "B", "en": "I have a headache. May I speak to the pharmacist?", "ko": "두통이 있어요. 약사와 이야기할 수 있을까요?"}, {"speaker": "A", "en": "Yes. The pharmacist will be with you in a moment.", "ko": "네. 약사가 곧 안내해 드릴 거예요."}, {"speaker": "B", "en": "Thank you. I have a question about this medicine.", "ko": "감사합니다. 이 약에 대해 질문이 있어요."}, {"speaker": "A", "en": "Please tell the pharmacist about any medicines you take and any allergies.", "ko": "복용하는 약과 알레르기가 있다면 약사에게 말씀해 주세요."}, {"speaker": "B", "en": "I will. Could the pharmacist explain the instructions, too?", "ko": "그럴게요. 약사가 사용 안내도 설명해 주실 수 있을까요?"}], "roleplay": {"prompt": "At a pharmacy, briefly describe how you feel. Ask to speak to the pharmacist and ask for an explanation of the medicine instructions.", "ko": "약국에서 몸 상태를 간단히 설명하고 약사에게 상담과 사용 안내를 부탁해보세요.", "model": "Hello. I have a headache. May I speak to the pharmacist? I have a question about this medicine. Could you explain the instructions, please?", "checks": ["몸 상태를 간단히 말했어요", "약사에게 상담을 요청했어요", "사용 안내를 설명해 달라고 부탁했어요"]}, "quiz": {"prompt": "약의 사용 안내를 설명해 달라고 부탁하려면 어떻게 말하면 될까요?", "options": ["Can we meet at three?", "Which platform should I use?", "Could you explain the instructions?"], "answer": 2, "why": "instructions는 사용 방법에 관한 안내를 뜻해요. 약 복용과 관련된 구체적인 판단은 약사나 의료진에게 확인하며, 이 챕터에서는 도움을 요청하는 영어를 연습해요."}}]}, "speaking": {"chapters": [{"id": "template-tos-photo", "track": "tos", "title": "사진 묘사 · 전체에서 세부로", "goal": "실제로 보이는 장소·사람·행동을 짧게 연결해요.", "steps": ["전체 장소를 먼저 한 문장으로 말해요.", "가장 눈에 띄는 사람이나 사물의 위치와 행동을 더해요.", "사진에 없는 상황을 단정하지 않고, 추측은 seems로 표현해요.", "사진에 사람이 없으면 사람 문장 대신 사물과 배치를 설명해요."], "template": [{"en": "This picture shows [place or scene].", "ko": "이 사진은 [장소 또는 장면]을 보여줍니다."}, {"en": "In the [area], I can see [person or object].", "ko": "[위치]에는 [사람 또는 사물]이 보입니다."}, {"en": "[Subject] is [action or condition].", "ko": "[대상]이 [동작 또는 상태]입니다."}, {"en": "There is also [another visible detail].", "ko": "[또 다른 보이는 세부 사항]도 있습니다."}], "example": {"prompt": "Describe a picture of a café where a person is holding a menu at a table.", "ko": "카페 테이블에서 메뉴를 들고 있는 사람의 사진을 설명해보세요.", "answer": "This picture shows a café table. On the right, I can see a person holding an open menu. There is a cup on the table. The person seems to be reading the menu."}, "practice": {"prompt": "Describe a picture of a park with an empty bench, a path, and several trees.", "ko": "사람 없이 벤치·산책로·나무가 보이는 공원 사진이라고 생각하고 설명해보세요."}, "words": [{"word": "in the foreground", "meaning": "사진 앞쪽에"}, {"word": "in the background", "meaning": "사진 배경에"}, {"word": "be holding", "meaning": "손에 들고 있다"}, {"word": "be placed", "meaning": "놓여 있다"}, {"word": "next to", "meaning": "옆에"}], "checks": ["사진에 실제로 보이는 내용을 말했어요", "위치와 동작 또는 배치를 설명했어요", "없는 정보를 사실처럼 만들어내지 않았어요"]}, {"id": "template-tos-response", "track": "tos", "title": "일상 응답 · 답부터 말하기", "goal": "묻는 정보에 먼저 답하고 필요한 세부 사항을 더해요.", "steps": ["When·Where·How often 등 질문의 초점을 먼저 확인해요.", "첫 문장에 질문이 요구한 답을 바로 말해요.", "장소·빈도·함께하는 사람 중 필요한 정보만 하나 더해요.", "이유를 묻지 않는 짧은 질문에는 긴 도입을 붙이지 않아요."], "template": [{"en": "I usually [activity].", "ko": "저는 보통 [활동]합니다."}, {"en": "I do that [time or frequency].", "ko": "저는 [시간 또는 빈도]에 그렇게 합니다."}, {"en": "I like it because [reason].", "ko": "[이유]라서 좋아합니다."}], "example": {"prompt": "How often do you exercise, and where do you usually do it?", "ko": "얼마나 자주, 주로 어디에서 운동하나요?", "answer": "I exercise three times a week. I usually walk in a park near my home. It is easy to get there, so I can keep my routine."}, "practice": {"prompt": "What do you usually do during your lunch break?", "ko": "점심시간에 보통 무엇을 하나요?"}, "words": [{"word": "usually", "meaning": "보통"}, {"word": "once a week", "meaning": "일주일에 한 번"}, {"word": "near my home", "meaning": "우리 집 근처에"}, {"word": "during my break", "meaning": "쉬는 시간에"}, {"word": "routine", "meaning": "일상적인 습관"}], "checks": ["질문에서 묻는 정보에 먼저 답했어요", "빈도나 장소 같은 구체적인 정보를 더했어요", "질문과 관계없는 외운 문장을 붙이지 않았어요"]}, {"id": "template-tos-information", "track": "tos", "title": "정보표 응답 · 필요한 항목 찾기", "goal": "일정표의 사실을 정확하게 골라 안내해요.", "steps": ["질문이 묻는 행사·시간·장소를 표에서 찾아요.", "일정표에 적힌 내용만 사용하고 정보를 만들어내지 않아요.", "요일·날짜 앞의 on, 시간 앞의 at을 구분해요.", "잘못된 정보를 확인해 달라는 질문에는 부정하고 바른 정보를 말해요.", "여러 행사를 요구하면 해당 항목을 빠짐없이 순서대로 안내해요."], "template": [{"en": "[Event] is scheduled for [day or date] at [time].", "ko": "[행사]는 [요일 또는 날짜] [시간]에 예정되어 있습니다."}, {"en": "It will take place in [location].", "ko": "장소는 [장소]입니다."}, {"en": "Actually, [correct information].", "ko": "정확히는 [올바른 정보]입니다."}, {"en": "There are [number] sessions: [first item] and [second item].", "ko": "[개수]개 일정이 있습니다: [첫 항목]과 [두 번째 항목]입니다."}], "example": {"prompt": "Schedule: Presentation Skills — Tuesday, 10 a.m., Room 2. Teamwork Workshop — Tuesday, 2 p.m., Room 5. Where and when is the Presentation Skills session?", "ko": "일정표에서 발표 기술 수업의 장소와 시간을 안내해보세요.", "answer": "The Presentation Skills session is scheduled for Tuesday at ten a.m. It will take place in Room 2."}, "practice": {"prompt": "Schedule: Writing Basics — Friday, 9 a.m., Room 1. Career Talk — Friday, 1 p.m., Room 3. A caller thinks the Career Talk begins at 9 a.m. Correct the caller.", "ko": "금요일 진로 특강이 오전 9시에 시작한다는 잘못된 정보를 바로잡아보세요."}, "words": [{"word": "scheduled for", "meaning": "일정이 잡힌"}, {"word": "take place", "meaning": "열리다"}, {"word": "session", "meaning": "개별 강의 또는 시간대"}, {"word": "according to", "meaning": "~에 따르면"}, {"word": "actually", "meaning": "정확히는 또는 사실은"}], "checks": ["질문에 해당하는 항목을 찾았어요", "시간과 장소를 정확하게 전달했어요", "표에 없는 사실을 추가하지 않았어요"]}, {"id": "template-tos-preference", "track": "tos", "title": "선호 선택 · 이유 한 가지 더하기", "goal": "두 선택지 중 내 선택을 밝히고 구체적으로 설명해요.", "steps": ["먼저 어느 쪽을 선호하는지 분명하게 말해요.", "내 선택과 직접 연결되는 이유를 하나 골라요.", "짧은 경험이나 실제 상황으로 이유를 뒷받침해요.", "선호와 다른 선택지의 장점만 말하지 않도록 확인해요."], "template": [{"en": "I prefer [choice].", "ko": "저는 [선택]을 선호합니다."}, {"en": "The main reason is that [reason].", "ko": "주된 이유는 [이유]이기 때문입니다."}, {"en": "For example, [specific experience].", "ko": "예를 들어 [구체적인 경험]입니다."}, {"en": "That is why [short restatement].", "ko": "그래서 [선택을 짧게 다시 설명]합니다."}], "example": {"prompt": "Do you prefer studying in the morning or in the evening? Explain your choice.", "ko": "아침 공부와 저녁 공부 중 무엇을 선호하나요?", "answer": "I prefer studying in the morning. The main reason is that I can focus better before work. For example, I review English words during breakfast. I feel more prepared for the day, so morning study works well for me."}, "practice": {"prompt": "Do you prefer taking the bus or walking for short trips? Give a reason and an example.", "ko": "짧은 거리를 이동할 때 버스와 걷기 중 무엇을 선호하는지 이유와 예시를 더해보세요."}, "words": [{"word": "prefer", "meaning": "선호하다"}, {"word": "focus better", "meaning": "더 잘 집중하다"}, {"word": "the main reason", "meaning": "주된 이유"}, {"word": "for example", "meaning": "예를 들어"}, {"word": "work well for me", "meaning": "나에게 잘 맞다"}], "checks": ["선호하는 선택을 첫 부분에서 밝혔어요", "이유가 선택과 연결돼요", "나에게 맞는 구체적인 예시를 사용했어요"]}, {"id": "template-tos-opinion", "track": "tos", "title": "의견 확장 · 이유와 예시 연결하기", "goal": "입장·이유·예시를 묶어 논리적인 답을 만들어요.", "steps": ["찬반 또는 내 의견을 한 문장으로 밝혀요.", "첫 번째 이유를 설명하고 짧은 예시를 붙여요.", "여유가 있으면 서로 다른 두 번째 이유를 더해요.", "답변 틀의 모든 문장을 채우려다 내용 없는 문장을 늘리지 않아요.", "마지막에는 질문의 주제로 돌아와 의견을 정리해요."], "template": [{"en": "I think [opinion].", "ko": "저는 [의견]이라고 생각합니다."}, {"en": "One reason is that [reason].", "ko": "한 가지 이유는 [이유]입니다."}, {"en": "For example, [specific example].", "ko": "예를 들어 [구체적인 예시]입니다."}, {"en": "Another reason is [different reason].", "ko": "또 다른 이유는 [다른 이유]입니다."}, {"en": "For these reasons, I believe [conclusion].", "ko": "이런 이유로 저는 [결론]이라고 생각합니다."}], "example": {"prompt": "Do you think public libraries are still important? Explain your opinion with reasons.", "ko": "공공도서관이 지금도 중요한지 이유를 들어 설명해보세요.", "answer": "I think public libraries are still important. One reason is that they give people a quiet place to study. For example, I use a library when my home is noisy. Another reason is that people can read many books without buying them. For these reasons, I believe libraries are useful for the community."}, "practice": {"prompt": "Should companies give employees time to learn new skills? Explain your opinion with reasons and an example.", "ko": "회사에서 직원들에게 새로운 기술을 배울 시간을 주어야 하는지 말해보세요."}, "words": [{"word": "one reason is", "meaning": "한 가지 이유는"}, {"word": "another reason", "meaning": "또 다른 이유"}, {"word": "community", "meaning": "지역 사회"}, {"word": "improve skills", "meaning": "기술을 향상하다"}, {"word": "for these reasons", "meaning": "이런 이유로"}], "checks": ["질문의 쟁점에 맞는 의견을 말했어요", "이유와 예시가 서로 연결돼요", "질문에 맞게 틀을 줄이거나 바꾸었어요"]}, {"id": "template-opic-description", "track": "opic", "title": "묘사 · 특징과 느낌 연결하기", "goal": "장소나 사물의 특징을 내 경험과 함께 설명해요.", "steps": ["무엇을 설명할지 한 문장으로 소개해요.", "크기·위치·분위기 중 실제 특징 두 가지를 골라요.", "그곳에서 무엇을 하는지 연결해요.", "추상적인 칭찬보다 내게 중요한 이유를 말해요."], "template": [{"en": "I would like to describe [place or thing].", "ko": "[장소 또는 사물]을 설명해볼게요."}, {"en": "It has [specific feature].", "ko": "[구체적인 특징]이 있어요."}, {"en": "I usually [activity] there.", "ko": "저는 그곳에서 보통 [활동]해요."}, {"en": "What I like most is [reason or feeling].", "ko": "제가 가장 좋아하는 점은 [이유 또는 느낌]이에요."}], "example": {"prompt": "Describe a place in your neighborhood that you like. Why do you like it?", "ko": "동네에서 좋아하는 장소의 모습과 이유를 말해보세요.", "answer": "There is a small park near my apartment. It has a walking path and many tall trees. I usually go there after dinner. What I like most is the quiet atmosphere. Even a short walk there helps me relax."}, "practice": {"prompt": "Describe a room where you spend a lot of time. What does it look like, and what do you do there?", "ko": "많은 시간을 보내는 방의 모습과 그곳에서 하는 일을 설명해보세요."}, "words": [{"word": "atmosphere", "meaning": "분위기"}, {"word": "walking path", "meaning": "산책로"}, {"word": "comfortable", "meaning": "편안한"}, {"word": "spend time", "meaning": "시간을 보내다"}, {"word": "what I like most", "meaning": "내가 가장 좋아하는 점"}], "checks": ["실제 특징을 구체적으로 묘사했어요", "나의 활동이나 경험을 연결했어요", "예시 문장을 내 상황에 맞게 바꿨어요"]}, {"id": "template-opic-routine", "track": "opic", "title": "일상 · 순서와 빈도로 말하기", "goal": "반복되는 활동을 시간 순서로 자연스럽게 연결해요.", "steps": ["얼마나 자주 하는 활동인지 먼저 말해요.", "준비·주요 활동·마무리를 순서대로 설명해요.", "매번 사용하는 물건이나 사람을 하나 더해요.", "일상이 왜 나에게 중요한지 짧게 덧붙여요."], "template": [{"en": "I usually [activity] [frequency].", "ko": "저는 보통 [빈도]에 [활동]해요."}, {"en": "First, I [first step].", "ko": "먼저 [첫 단계]를 해요."}, {"en": "Then, I [next step].", "ko": "그다음 [다음 단계]를 해요."}, {"en": "After that, I [last step].", "ko": "그 후에 [마지막 단계]를 해요."}, {"en": "This routine helps me [benefit].", "ko": "이 습관은 제가 [좋은 점]하는 데 도움이 돼요."}], "example": {"prompt": "Tell me about your usual exercise routine.", "ko": "평소 운동하는 과정을 이야기해보세요.", "answer": "I usually exercise three evenings a week. First, I change into comfortable clothes. Then I walk around my neighborhood for about thirty minutes. After that, I drink some water and stretch. This routine helps me clear my mind after a busy day."}, "practice": {"prompt": "Tell me how you usually prepare for a trip. What do you do first, and what do you do next?", "ko": "여행을 준비하는 과정을 순서대로 설명해보세요."}, "words": [{"word": "three times a week", "meaning": "일주일에 세 번"}, {"word": "first", "meaning": "먼저"}, {"word": "then", "meaning": "그다음"}, {"word": "after that", "meaning": "그 후에"}, {"word": "clear my mind", "meaning": "머리를 식히다"}], "checks": ["빈도와 활동을 분명하게 말했어요", "시간 순서가 자연스러워요", "내 일상의 구체적인 정보를 넣었어요"]}, {"id": "template-opic-past", "track": "opic", "title": "과거 경험 · 사건과 반응 이어가기", "goal": "언제·무슨 일·어떻게 대처·어떤 느낌을 연결해요.", "steps": ["언제 어디에서 누구와 있었는지 짧게 시작해요.", "기억에 남는 사건 하나에 집중해요.", "그때 내가 한 행동을 순서대로 설명해요.", "결과와 느낌을 더해 이야기를 마무리해요.", "시제를 확인하되 모르는 단어 때문에 이야기를 멈추지 않아요."], "template": [{"en": "Last [time], I went to [place] with [person].", "ko": "지난 [시점]에 [사람]과 [장소]에 갔어요."}, {"en": "While we were [activity], [event] happened.", "ko": "[활동]하고 있을 때 [사건]이 생겼어요."}, {"en": "So I [action].", "ko": "그래서 저는 [행동]했어요."}, {"en": "In the end, [result].", "ko": "결국 [결과]가 되었어요."}, {"en": "I felt [feeling] because [reason].", "ko": "[이유]라서 [감정]을 느꼈어요."}], "example": {"prompt": "Tell me about a time when your travel plan changed unexpectedly.", "ko": "예상치 못하게 여행 계획이 바뀐 경험을 이야기해보세요.", "answer": "Last spring, I went to Busan with a friend. We planned to walk along the beach, but it started raining. So we looked for a place indoors and found a small art museum. In the end, we spent the afternoon there. I felt happy because we discovered something new together."}, "practice": {"prompt": "Tell me about a memorable meal you had with someone. What happened, and how did you feel?", "ko": "누군가와 함께 먹었던 기억에 남는 식사에 대해 말해보세요."}, "words": [{"word": "unexpectedly", "meaning": "예상치 못하게"}, {"word": "while", "meaning": "~하는 동안"}, {"word": "in the end", "meaning": "결국"}, {"word": "discovered", "meaning": "발견했다"}, {"word": "memorable", "meaning": "기억에 남는"}], "checks": ["언제 어디에서 있었던 일인지 말했어요", "사건과 내 행동을 연결했어요", "결과와 감정을 내 말로 표현했어요"]}, {"id": "template-opic-comparison", "track": "opic", "title": "비교 · 예전과 지금 설명하기", "goal": "같은 기준으로 두 시기의 차이와 이유를 말해요.", "steps": ["무엇을 비교하는지 먼저 정해요.", "예전의 모습과 지금의 모습을 같은 기준으로 설명해요.", "바뀐 이유나 내 생활에 미친 영향을 더해요.", "좋아진 점과 아쉬운 점을 함께 말해도 괜찮아요."], "template": [{"en": "When I was younger, I used to [past activity].", "ko": "어렸을 때 저는 [과거 활동]하곤 했어요."}, {"en": "These days, I [current activity].", "ko": "요즘은 [현재 활동]해요."}, {"en": "The biggest difference is [difference].", "ko": "가장 큰 차이는 [차이]예요."}, {"en": "I think this changed because [reason].", "ko": "[이유] 때문에 달라졌다고 생각해요."}, {"en": "For me, [personal effect].", "ko": "제게는 [개인적인 영향]이 있어요."}], "example": {"prompt": "How have your shopping habits changed since you were younger?", "ko": "어렸을 때와 비교해 쇼핑 습관이 어떻게 달라졌나요?", "answer": "When I was younger, I usually went to stores with my family. These days, I often shop online. The biggest difference is how I compare products. I can check prices and reviews quickly now. It saves time, but I still go to a store when I want to try on shoes."}, "practice": {"prompt": "Compare the way you spent your weekends in the past with the way you spend them now.", "ko": "예전과 지금의 주말을 보내는 방식을 비교해보세요."}, "words": [{"word": "used to", "meaning": "예전에 하곤 했다"}, {"word": "these days", "meaning": "요즘"}, {"word": "the biggest difference", "meaning": "가장 큰 차이"}, {"word": "compared with", "meaning": "~와 비교하면"}, {"word": "try on", "meaning": "옷이나 신발을 입어 보다"}], "checks": ["두 시기를 같은 기준으로 비교했어요", "차이를 보여주는 구체적인 정보를 넣었어요", "변화의 이유나 내 생각을 덧붙였어요"]}, {"id": "template-opic-questions", "track": "opic", "title": "질문 역할극 · 목적에 맞게 묻기", "goal": "한 상황에서 필요한 서로 다른 질문을 만들어요.", "steps": ["누구에게 왜 연락했는지 짧게 말해요.", "상황에 필요한 정보 세 가지를 골라요.", "한 문장에 질문 하나씩 분리해요.", "Could you tell me 뒤의 간접의문문은 주어·동사 순서로 말해요.", "친구와 기관 직원에게 쓰는 말투를 상황에 맞게 조절해요."], "template": [{"en": "Hello, I am calling about [purpose].", "ko": "안녕하세요. [목적] 때문에 전화했어요."}, {"en": "Could you tell me [first question]?", "ko": "[첫 질문]을 알려 주실 수 있나요?"}, {"en": "I would also like to know [second question].", "ko": "[두 번째 질문]도 알고 싶어요."}, {"en": "Is [third question]?", "ko": "[세 번째 질문]인가요?"}, {"en": "Thank you for your help.", "ko": "도와주셔서 감사합니다."}], "example": {"prompt": "You want to join a gym. Call and ask three questions about membership.", "ko": "체육관에 전화해 회원 등록에 필요한 질문 세 가지를 해보세요.", "answer": "Hello, I am calling about gym membership. Could you tell me how much a monthly membership costs? I would also like to know what time you open on weekends. Are group classes included in the price? Thank you for your help."}, "practice": {"prompt": "You want to take a cooking class. Call the school and ask three questions before you register.", "ko": "요리 수업에 등록하기 전에 필요한 질문 세 가지를 해보세요."}, "words": [{"word": "membership", "meaning": "회원 등록 또는 회원권"}, {"word": "monthly fee", "meaning": "월 이용료"}, {"word": "included", "meaning": "포함된"}, {"word": "opening hours", "meaning": "운영 시간"}, {"word": "register", "meaning": "등록하다"}], "checks": ["상황과 연락 목적을 밝혔어요", "내용이 다른 질문 세 가지를 했어요", "질문 문장과 공손한 표현을 확인했어요"]}, {"id": "template-opic-problem", "track": "opic", "title": "문제 해결 · 설명하고 대안 제시하기", "goal": "문제를 알리고 가능한 해결 방법 두 가지를 제안해요.", "steps": ["문제가 무엇인지 먼저 분명하게 말해요.", "중요한 세부 사항 한 가지만 더해요.", "서로 다른 해결 방법이나 대안을 제시해요.", "상대에게 가능한 선택을 확인하며 마무리해요.", "정해진 틀을 억지로 모두 쓰기보다 문제 상황에 맞게 바꿔요."], "template": [{"en": "I am sorry, but [problem].", "ko": "죄송하지만 [문제]가 있어요."}, {"en": "The situation is that [key detail].", "ko": "상황은 [중요한 세부 내용]이에요."}, {"en": "Could we [first solution]?", "ko": "[첫 해결 방법]을 할 수 있을까요?"}, {"en": "Another option would be to [second solution].", "ko": "다른 방법은 [두 번째 해결 방법]이에요."}, {"en": "Please let me know if [suggested option] works for you.", "ko": "[제안한 방법]이 괜찮은지 알려 주세요."}], "example": {"prompt": "You cannot meet a friend tomorrow because of work. Explain the situation and suggest two alternatives.", "ko": "업무 때문에 내일 친구를 못 만나요. 상황을 설명하고 대안 두 가지를 제안해보세요.", "answer": "Hi, I am sorry, but I cannot meet you tomorrow. I have to finish a report at work. Could we meet on Saturday afternoon instead? Another option would be to have a video call on Sunday evening. Please let me know which option works for you."}, "practice": {"prompt": "You booked a hotel room for the wrong date. Call the hotel, explain the problem, and suggest two possible solutions.", "ko": "호텔 예약 날짜를 잘못 정했어요. 문제를 설명하고 가능한 해결 방법 두 가지를 말해보세요."}, "words": [{"word": "instead", "meaning": "대신에"}, {"word": "another option", "meaning": "다른 선택지"}, {"word": "reschedule", "meaning": "일정을 다시 잡다"}, {"word": "change the date", "meaning": "날짜를 바꾸다"}, {"word": "work for you", "meaning": "상대에게 괜찮다"}], "checks": ["문제와 중요한 세부 사항을 설명했어요", "상황에 맞는 대안 두 가지를 제시했어요", "상대의 선택을 확인하며 마무리했어요"]}], "sources": [{"title": "ETS TOEIC Speaking 공식 샘플 PDF", "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-speaking-writing-sample-tests.pdf", "description": "공식 샘플의 사진 묘사·질문 응답·의견 말하기 구성을 확인하는 자료입니다."}, {"title": "IIBC TOEIC Speaking 공식 형식과 평가 항목", "url": "https://www.iibc-global.org/english/toeic/test/speaking/about/format.html", "description": "답변의 관련성·완결성과 언어 사용을 점검하는 기준을 확인할 수 있습니다."}, {"title": "ACTFL OPIc 응시자 안내", "url": "https://www.actfl.org/assessments/postsecondary-assessments/opi/tips-for-opi-and-opic-test-takers", "description": "질문에 맞춰 스스로 구성하는 말하기를 연습하기 위한 공식 안내입니다."}, {"title": "ACTFL OPIc 공식 안내와 자료", "url": "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic", "description": "자발적인 말하기 평가의 취지와 공식 친숙화 자료를 확인할 수 있습니다."}]}, "major": {"research": {"title": "연구·발표 공통", "chapters": [{"id": "major-research-paper", "title": "논문의 목적과 결과 설명하기", "goal": "무엇을 연구했고 어떤 결과를 얻었는지 짧게 소개해요.", "words": [{"word": "research question", "meaning": "연구 질문"}, {"word": "method", "meaning": "방법"}, {"word": "result", "meaning": "결과"}, {"word": "finding", "meaning": "연구에서 발견한 점"}, {"word": "evidence", "meaning": "근거"}, {"word": "limitation", "meaning": "한계"}], "patterns": [{"en": "This study examines how demand changes over time.", "ko": "이 연구는 수요가 시간에 따라 어떻게 달라지는지 살펴봅니다."}, {"en": "The results suggest that the new method reduces error.", "ko": "결과는 새 방법이 오차를 줄일 수 있음을 시사합니다."}, {"en": "One limitation is the small amount of data.", "ko": "한 가지 한계는 데이터 양이 적다는 점입니다."}], "explanation": ["목적은 examines, investigates, evaluates와 같은 동사로 구체적으로 표현해요.", "근거의 강도에 맞게 suggests, indicates, shows를 선택하고 확정할 수 없는 결과를 proves라고 단정하지 않아요.", "연구 결과와 그 결과가 적용되는 범위·한계를 함께 설명해요."], "example": {"prompt": "Briefly explain the purpose and main finding of your study.", "ko": "연구 목적과 핵심 결과를 짧게 설명해보세요.", "answer": "This study examines short-term electricity demand. We compare two forecasting methods using the same data. The new method has a lower prediction error in our test. However, we need more data to check whether the result holds in other seasons."}, "practice": {"prompt": "Describe a study you know. State its question, method, result, and one limitation.", "ko": "알고 있는 연구의 질문·방법·결과와 한계 한 가지를 말해보세요."}, "checks": ["연구 목적을 분명하게 말했어요", "방법과 결과를 구분했어요", "근거의 범위와 한계를 덧붙였어요"]}, {"id": "major-research-data", "title": "실험 조건과 그래프 설명하기", "goal": "비교 조건과 그래프의 변화 방향을 정확하게 전달해요.", "words": [{"word": "measurement", "meaning": "측정값 또는 측정"}, {"word": "experiment", "meaning": "실험"}, {"word": "baseline", "meaning": "비교 기준"}, {"word": "trend", "meaning": "경향"}, {"word": "uncertainty", "meaning": "불확실성"}, {"word": "axis", "meaning": "그래프의 축"}], "patterns": [{"en": "The horizontal axis shows time in hours.", "ko": "가로축은 시간을 시간 단위로 나타냅니다."}, {"en": "The measured value increases as the load rises.", "ko": "부하가 증가할수록 측정값이 증가합니다."}, {"en": "We used the same conditions for both cases.", "ko": "두 경우에 같은 조건을 사용했습니다."}], "explanation": ["그래프를 설명할 때 먼저 축의 의미와 단위를 말해요.", "increase, decrease, remain stable을 써서 관측한 변화를 표현해요. 함께 변했다는 사실만으로 원인을 단정하지 않아요.", "baseline과 비교할 때 데이터 기간, 조건, 평가 지표가 같은지 밝혀요."], "example": {"prompt": "Explain a graph comparing two methods.", "ko": "두 방법을 비교한 그래프를 설명해보세요.", "answer": "The horizontal axis shows time in hours. The vertical axis shows prediction error. The blue line represents the baseline, and the orange line represents the new method. Both methods use the same test data. The new method has a lower error during the afternoon in this example."}, "practice": {"prompt": "Choose a graph from your work. Explain its axes, units, trend, and comparison conditions.", "ko": "연구 그래프 하나를 골라 축·단위·추세·비교 조건을 설명해보세요."}, "checks": ["축과 단위를 설명했어요", "변화와 비교 대상을 구체적으로 말했어요", "비교 조건이나 불확실성을 언급했어요"]}, {"id": "major-research-presentation", "title": "발표와 질의응답", "goal": "발표를 소개하고 질문을 확인한 뒤 근거에 맞게 답해요.", "words": [{"word": "overview", "meaning": "개요"}, {"word": "assumption", "meaning": "가정"}, {"word": "clarification", "meaning": "명확히 하기 위한 설명"}, {"word": "comparison", "meaning": "비교"}, {"word": "conclusion", "meaning": "결론"}, {"word": "future work", "meaning": "후속 연구"}], "patterns": [{"en": "I will begin with a brief overview of the problem.", "ko": "문제의 간단한 개요부터 설명하겠습니다."}, {"en": "Could you clarify which case you are referring to?", "ko": "어느 경우를 말씀하시는지 명확히 해주실 수 있나요?"}, {"en": "We have not tested that condition yet.", "ko": "그 조건은 아직 시험하지 않았습니다."}], "explanation": ["발표의 문제·방법·결과 순서를 먼저 안내하면 듣는 사람이 따라가기 쉬워요.", "질문이 모호하면 추측해서 답하기보다 조건이나 비교 대상을 확인해요.", "확인하지 않은 결과는 모른다고 밝히고 검토할 방법을 덧붙여요."], "example": {"prompt": "A listener asks whether your method works under a different condition. How would you respond?", "ko": "다른 조건에서도 방법이 작동하는지 질문을 받았을 때 답해보세요.", "answer": "Thank you for the question. Could you clarify which operating condition you mean? We have tested the method under normal demand conditions, but not under that extreme case. We plan to include it in our next evaluation."}, "practice": {"prompt": "Introduce a short presentation and answer one question about an assumption you made.", "ko": "짧은 발표를 소개하고 연구에서 사용한 가정에 관한 질문 하나에 답해보세요."}, "checks": ["발표의 흐름을 안내했어요", "질문의 조건을 확인했어요", "확인된 사실과 후속 검토를 구분했어요"]}]}, "power": {"title": "전력·전기·에너지", "chapters": [{"id": "major-power-basics", "title": "전압·전류·전력·에너지", "goal": "기본 전기량을 단위와 함께 구분해 설명해요.", "words": [{"word": "voltage", "meaning": "전압"}, {"word": "current", "meaning": "전류"}, {"word": "electric power", "meaning": "전력"}, {"word": "electrical energy", "meaning": "전기 에너지"}, {"word": "resistance", "meaning": "저항"}, {"word": "power factor", "meaning": "역률"}], "patterns": [{"en": "Voltage is measured in volts, and current is measured in amperes.", "ko": "전압은 볼트로, 전류는 암페어로 측정합니다."}, {"en": "Power describes the rate of energy transfer.", "ko": "전력은 에너지가 전달되는 속도를 나타냅니다."}, {"en": "This device uses two kilowatt-hours of energy in one hour.", "ko": "이 장치는 한 시간 동안 2킬로와트시의 에너지를 사용합니다."}], "explanation": ["V는 전압, A는 전류, W와 kW는 전력의 단위예요. Wh와 kWh는 에너지의 단위이며 kW/h와 다릅니다.", "전력이 일정하면 에너지 = 전력 × 시간이에요. 2 kW를 1시간 사용하면 2 kWh이고, 30분 사용하면 1 kWh예요.", "직류의 기본 예에서는 P = VI를 사용해요. 교류의 유효전력은 파형·위상·역률과 회로 조건을 함께 고려해야 합니다."], "example": {"prompt": "Explain the difference between a two-kilowatt load and two kilowatt-hours of energy.", "ko": "2킬로와트 부하와 2킬로와트시 에너지의 차이를 설명해보세요.", "answer": "Two kilowatts describes the power demand at a given time. Two kilowatt-hours describes an amount of energy. If the load stays at two kilowatts for one hour, it uses two kilowatt-hours. The power rating alone does not tell us the total energy use without a duration."}, "practice": {"prompt": "Explain voltage, current, power, and energy using a simple constant-power example.", "ko": "전압·전류·전력·에너지를 구분하고 일정한 전력을 사용하는 예를 들어보세요."}, "checks": ["전력과 에너지를 구분했어요", "단위를 정확하게 말했어요", "계산 예의 시간 조건을 밝혔어요"]}, {"id": "major-power-grid", "title": "발전·송전·배전과 전력망", "goal": "전기가 발전원에서 수용가까지 전달되는 구조를 설명해요.", "words": [{"word": "generation", "meaning": "발전"}, {"word": "transmission", "meaning": "송전"}, {"word": "distribution", "meaning": "배전"}, {"word": "substation", "meaning": "변전소"}, {"word": "transformer", "meaning": "변압기"}, {"word": "power grid", "meaning": "전력망"}], "patterns": [{"en": "Transmission networks carry power over long distances.", "ko": "송전망은 전력을 먼 거리로 전달합니다."}, {"en": "A transformer changes the voltage level.", "ko": "변압기는 전압 수준을 바꿉니다."}, {"en": "Distribution networks deliver electricity to local customers.", "ko": "배전망은 지역 수용가에게 전기를 공급합니다."}], "explanation": ["generation은 발전, transmission은 일반적으로 높은 전압으로 넓은 지역에 전달하는 송전, distribution은 지역 수용가로 전달하는 배전이에요.", "같은 유효전력을 전달하는 단순한 비교에서는 전압을 높이면 필요한 전류를 낮출 수 있고 저항 손실을 줄이는 데 도움이 돼요. 실제 손실은 망의 조건에 따라 달라집니다.", "변압기는 에너지를 만들어내는 장치가 아니에요. 전압 변환에는 손실과 정격 한계가 존재합니다."], "example": {"prompt": "Describe how electricity reaches a home from a power plant.", "ko": "발전소의 전기가 가정까지 전달되는 과정을 설명해보세요.", "answer": "Electricity is produced by generators and enters the power network. Transmission lines carry it over long distances. Substations and transformers connect different voltage levels. Local distribution networks then deliver electricity to customers. The exact arrangement depends on the network."}, "practice": {"prompt": "Explain the roles of transmission, distribution, substations, and transformers.", "ko": "송전·배전·변전소·변압기의 역할을 각각 한 문장으로 설명해보세요."}, "checks": ["송전과 배전의 역할을 구분했어요", "변압기의 역할을 설명했어요", "에너지 생성과 전달을 혼동하지 않았어요"]}, {"id": "major-power-renewables", "title": "재생에너지와 계통 연계", "goal": "태양광·풍력 출력과 인버터의 역할을 말해요.", "words": [{"word": "renewable energy", "meaning": "재생에너지"}, {"word": "solar photovoltaic", "meaning": "태양광 발전"}, {"word": "wind turbine", "meaning": "풍력 터빈"}, {"word": "inverter", "meaning": "인버터"}, {"word": "variability", "meaning": "변동성"}, {"word": "grid integration", "meaning": "계통 연계 및 통합"}], "patterns": [{"en": "Solar output varies with sunlight and operating conditions.", "ko": "태양광 출력은 햇빛과 운전 조건에 따라 달라집니다."}, {"en": "An inverter converts direct current into alternating current.", "ko": "인버터는 직류를 교류로 변환합니다."}, {"en": "Grid integration requires both forecasting and suitable controls.", "ko": "계통 통합에는 예측과 적절한 제어가 모두 필요합니다."}], "explanation": ["solar photovoltaic는 빛을 전기로 바꾸는 태양광 발전이고, wind turbine은 바람의 운동 에너지를 이용해요.", "태양광과 풍력의 출력은 기상 조건 등에 따라 변해요. variability는 변동성, uncertainty는 예측 등의 불확실성을 뜻해 구분할 수 있습니다.", "인버터의 기능과 계통 지원 능력은 설계·제어·정격에 따라 달라요. 모든 인버터가 같은 서비스를 제공한다고 단정하지 않아요."], "example": {"prompt": "Explain why a solar plant needs forecasting and an inverter.", "ko": "태양광 발전에 예측과 인버터가 필요한 이유를 설명해보세요.", "answer": "A photovoltaic system produces direct-current electricity. An inverter converts it into alternating current for an AC grid. Solar output can change as sunlight changes, so forecasts help us understand possible production. The inverter's control functions also matter for grid integration."}, "practice": {"prompt": "Compare solar and wind generation, then explain one grid-integration issue.", "ko": "태양광과 풍력 발전을 비교하고 계통 연계에서 고려할 점 하나를 설명해보세요."}, "checks": ["발전 원리나 출력 특성을 말했어요", "변동성과 불확실성을 구분했어요", "인버터의 역할을 정확하게 설명했어요"]}, {"id": "major-power-storage", "title": "에너지저장장치와 충전 상태", "goal": "출력 정격·저장 에너지·SOC를 구분해 소개해요.", "words": [{"word": "energy storage", "meaning": "에너지 저장"}, {"word": "power rating", "meaning": "출력 정격"}, {"word": "energy capacity", "meaning": "저장 가능한 에너지 용량"}, {"word": "state of charge", "meaning": "충전 상태"}, {"word": "charging", "meaning": "충전"}, {"word": "discharging", "meaning": "방전"}], "patterns": [{"en": "The battery has a power rating of two megawatts.", "ko": "배터리의 출력 정격은 2메가와트입니다."}, {"en": "Its usable energy capacity is six megawatt-hours.", "ko": "사용 가능한 에너지 용량은 6메가와트시입니다."}, {"en": "State of charge is reported as a percentage.", "ko": "충전 상태는 백분율로 표시합니다."}], "explanation": ["MW는 전력, MWh는 에너지예요. 저장장치는 두 정격을 함께 제시해야 어느 정도의 출력과 지속 시간을 기대할 수 있는지 설명할 수 있어요.", "2 MW로 일정하게 방전하며 6 MWh를 모두 사용할 수 있다고 가정하면 계산상 3시간이에요. 실제 가능 시간은 손실·운전 한계·온도 등의 조건에 따라 달라집니다.", "SOC는 기준 용량에 대한 충전 상태의 백분율로, 순간 출력 MW와 달라요. SOC만으로 모든 조건의 실제 사용 가능 에너지를 정확히 판단하지 않아요."], "example": {"prompt": "Introduce a battery using its power rating, energy capacity, and state of charge.", "ko": "배터리의 출력 정격·에너지 용량·충전 상태를 구분해 소개해보세요.", "answer": "This example battery is rated at two megawatts and has six megawatt-hours of usable energy capacity. Its state of charge is seventy percent. The power rating and energy capacity describe different properties. A three-hour duration at rated power is an ideal calculation, so practical limits must also be considered."}, "practice": {"prompt": "Explain why two batteries with the same power rating can have different discharge durations.", "ko": "출력 정격이 같은 배터리 두 개의 방전 지속 시간이 달라질 수 있는 이유를 말해보세요."}, "checks": ["MW와 MWh를 구분했어요", "SOC와 순간 출력을 혼동하지 않았어요", "지속 시간 계산의 가정을 밝혔어요"]}, {"id": "major-power-control", "title": "주파수·전압과 계통 제어", "goal": "서로 다른 계통 변수와 제어 목표를 구분해요.", "words": [{"word": "frequency", "meaning": "주파수"}, {"word": "active power", "meaning": "유효전력"}, {"word": "reactive power", "meaning": "무효전력"}, {"word": "voltage regulation", "meaning": "전압 조정"}, {"word": "frequency response", "meaning": "주파수 응답"}, {"word": "stability", "meaning": "안정도"}], "patterns": [{"en": "An imbalance in active power can affect system frequency.", "ko": "유효전력의 수급 불균형은 계통 주파수에 영향을 줄 수 있습니다."}, {"en": "Voltage and frequency are different system variables.", "ko": "전압과 주파수는 서로 다른 계통 변수입니다."}, {"en": "We evaluate the response under a stated disturbance.", "ko": "명시한 외란 조건에서 응답을 평가합니다."}], "explanation": ["주파수는 Hz, 전압은 V로 표시해요. 한국의 공칭 계통 주파수는 60 Hz지만 모든 나라가 같은 주파수를 사용하는 것은 아니에요.", "유효전력 수급의 불균형은 주파수와 관련되고, 전압은 무효전력·망의 임피던스·부하와 제어 등 여러 요인에 영향을 받아요. 두 문제를 같은 것으로 설명하지 않아요.", "제어 성능을 비교할 때 외란 크기, 운전점, 시간 범위와 평가지표를 밝혀요. 한 조건의 결과가 모든 조건에서의 안정성을 보장하지는 않습니다."], "example": {"prompt": "Explain the difference between frequency response and voltage regulation.", "ko": "주파수 응답과 전압 조정의 차이를 설명해보세요.", "answer": "Frequency response concerns changes in system frequency after an imbalance or disturbance. Voltage regulation concerns keeping voltage within an appropriate range. Active-power balance is important for frequency, while voltage depends on reactive power and network conditions among other factors. We should state the operating conditions when we discuss either response."}, "practice": {"prompt": "Describe a simulated disturbance and identify whether you are evaluating frequency, voltage, or both.", "ko": "모의한 외란을 소개하고 주파수·전압 중 무엇을 평가하는지, 또는 둘 다인지 말해보세요."}, "checks": ["주파수와 전압을 구분했어요", "관련 전력과 조건을 적절하게 설명했어요", "성능을 평가한 범위를 밝혔어요"]}, {"id": "major-power-models", "title": "계통 모델·최적화 연구 설명하기", "goal": "목적함수·제약·가정과 검증을 영어로 설명해요.", "words": [{"word": "objective function", "meaning": "목적함수"}, {"word": "constraint", "meaning": "제약 조건"}, {"word": "optimization", "meaning": "최적화"}, {"word": "simulation", "meaning": "모의실험"}, {"word": "validation", "meaning": "검증"}, {"word": "sensitivity analysis", "meaning": "민감도 분석"}], "patterns": [{"en": "The objective is to minimize the operating cost.", "ko": "목표는 운영 비용을 최소화하는 것입니다."}, {"en": "The model is subject to power-balance constraints.", "ko": "모델에는 전력 수급 균형 제약이 적용됩니다."}, {"en": "We test how the result changes with the assumptions.", "ko": "가정에 따라 결과가 어떻게 달라지는지 시험합니다."}], "explanation": ["objective function은 최소화하거나 최대화하는 기준이고 constraint는 만족해야 하는 조건이에요.", "최적해라는 표현은 사용한 모델·데이터·가정·풀이 조건의 범위에서 해석해야 해요. 모의 결과를 실제 계통에서 검증한 사실처럼 말하지 않아요.", "validation은 모델의 적절성을 근거와 비교해 확인하는 과정이고 sensitivity analysis는 입력이나 가정을 바꿨을 때 결과의 변화를 살펴보는 과정이에요."], "example": {"prompt": "Explain the objective and constraints of a simple power-system optimization study.", "ko": "간단한 전력계통 최적화 연구의 목적과 제약을 설명해보세요.", "answer": "Our model minimizes operating cost while meeting electricity demand. It includes generation limits and a power-balance constraint. We compare the results with a baseline under the same assumptions. We also change the demand forecast to check how sensitive the solution is. These are simulation results, so further validation is needed."}, "practice": {"prompt": "Introduce your model, state one objective and two constraints, and explain how you would evaluate it.", "ko": "모델을 소개하고 목적 하나·제약 두 가지와 평가 방법을 말해보세요."}, "checks": ["목적함수와 제약을 구분했어요", "가정과 비교 기준을 밝혔어요", "모의 결과와 검증 결과를 구분했어요"]}]}}, "majorSources": [{"title": "EIA: Measuring electricity", "url": "https://www.eia.gov/energyexplained/electricity/measuring-electricity.php", "description": "전력과 에너지 단위의 구분을 확인한 공식 배경 자료입니다. 학습 문장과 예시는 별도로 작성했습니다."}, {"title": "EIA: Delivery to consumers", "url": "https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php", "description": "송전·배전과 수용가 공급 구조를 확인하는 공식 참고 자료입니다."}, {"title": "DOE: Solar energy and storage basics", "url": "https://www.energy.gov/cmei/systems/solar-integration-solar-energy-and-storage-basics", "description": "저장장치의 전력 정격과 에너지 용량을 구분하는 공식 설명을 참고했습니다."}, {"title": "DOE: Inverters and grid services basics", "url": "https://www.energy.gov/cmei/systems/solar-integration-inverters-and-grid-services-basics", "description": "인버터와 계통 지원 기능의 개념을 확인하는 참고 자료입니다."}, {"title": "DOE: Essential reliability services", "url": "https://www.energy.gov/cmei/articles/keeping-lights-essential-reliability-services", "description": "주파수 응답과 전압 관리의 개념을 확인하는 공식 배경 자료입니다."}, {"title": "NREL: Grid-scale battery storage", "url": "https://www.nrel.gov/docs/fy19osti/74426.pdf", "description": "출력·에너지 용량·충전 상태·저장 지속 시간을 구분하는 배경 자료입니다."}, {"title": "KEPCO: 송·배전용 전기설비 이용규정", "url": "https://home.kepco.co.kr/kepco/front/html/CY/H/C/CYHCHP00603.html", "description": "국내 표준 주파수 60 Hz의 배경을 확인하는 공식 자료입니다. 세부 운용 범위나 현장 조작 지침을 제공하는 학습은 아닙니다."}]};
const LIBRARY={
  "words": {
    "toeic": [
      {
        "word": "application",
        "meaning": "지원서"
      },
      {
        "word": "applicant",
        "meaning": "지원자"
      },
      {
        "word": "recruitment",
        "meaning": "채용"
      },
      {
        "word": "qualification",
        "meaning": "자격"
      },
      {
        "word": "resume",
        "meaning": "이력서"
      },
      {
        "word": "interview",
        "meaning": "면접"
      },
      {
        "word": "department",
        "meaning": "부서"
      },
      {
        "word": "supervisor",
        "meaning": "상사"
      },
      {
        "word": "colleague",
        "meaning": "동료"
      },
      {
        "word": "promotion",
        "meaning": "승진"
      },
      {
        "word": "salary",
        "meaning": "급여"
      },
      {
        "word": "benefit",
        "meaning": "복리후생"
      },
      {
        "word": "contract",
        "meaning": "계약"
      },
      {
        "word": "agreement",
        "meaning": "합의"
      },
      {
        "word": "signature",
        "meaning": "서명"
      },
      {
        "word": "approval",
        "meaning": "승인"
      },
      {
        "word": "purchase",
        "meaning": "구매"
      },
      {
        "word": "purchase order",
        "meaning": "발주서"
      },
      {
        "word": "inventory",
        "meaning": "재고"
      },
      {
        "word": "warehouse",
        "meaning": "창고"
      },
      {
        "word": "supplier",
        "meaning": "공급업체"
      },
      {
        "word": "manufacturer",
        "meaning": "제조업체"
      },
      {
        "word": "receipt",
        "meaning": "영수증"
      },
      {
        "word": "invoice",
        "meaning": "청구서"
      },
      {
        "word": "payment",
        "meaning": "지불"
      },
      {
        "word": "deposit",
        "meaning": "보증금"
      },
      {
        "word": "balance",
        "meaning": "잔액"
      },
      {
        "word": "budget",
        "meaning": "예산"
      },
      {
        "word": "expense",
        "meaning": "비용"
      },
      {
        "word": "reimbursement",
        "meaning": "비용 환급"
      },
      {
        "word": "conference",
        "meaning": "회의"
      },
      {
        "word": "agenda",
        "meaning": "안건"
      },
      {
        "word": "presentation",
        "meaning": "발표"
      },
      {
        "word": "venue",
        "meaning": "행사 장소"
      },
      {
        "word": "participant",
        "meaning": "참가자"
      },
      {
        "word": "registration",
        "meaning": "등록"
      },
      {
        "word": "cancellation",
        "meaning": "취소"
      },
      {
        "word": "accommodation",
        "meaning": "숙소"
      },
      {
        "word": "itinerary",
        "meaning": "여행 일정"
      },
      {
        "word": "boarding pass",
        "meaning": "탑승권"
      },
      {
        "word": "departure gate",
        "meaning": "출발 탑승구"
      },
      {
        "word": "luggage",
        "meaning": "수하물"
      },
      {
        "word": "commute",
        "meaning": "통근하다"
      },
      {
        "word": "renovation",
        "meaning": "보수 공사"
      },
      {
        "word": "facility",
        "meaning": "시설"
      },
      {
        "word": "equipment",
        "meaning": "장비"
      },
      {
        "word": "inspection",
        "meaning": "점검"
      },
      {
        "word": "warranty",
        "meaning": "보증"
      },
      {
        "word": "replacement",
        "meaning": "교체품"
      },
      {
        "word": "complimentary",
        "meaning": "무료로 제공되는"
      }
    ],
    "tos": [
      {
        "word": "in my opinion",
        "meaning": "내 의견으로는"
      },
      {
        "word": "i would prefer",
        "meaning": "나는 더 선호한다"
      },
      {
        "word": "there are several reasons",
        "meaning": "이유는 몇 가지가 있다"
      },
      {
        "word": "first of all",
        "meaning": "우선"
      },
      {
        "word": "for instance",
        "meaning": "예를 들면"
      },
      {
        "word": "as a result",
        "meaning": "그 결과"
      },
      {
        "word": "on the other hand",
        "meaning": "반면에"
      },
      {
        "word": "in addition",
        "meaning": "게다가"
      },
      {
        "word": "that is why",
        "meaning": "그래서"
      },
      {
        "word": "from my experience",
        "meaning": "내 경험상"
      },
      {
        "word": "in the foreground",
        "meaning": "사진 앞쪽에"
      },
      {
        "word": "in the background",
        "meaning": "사진 배경에"
      },
      {
        "word": "on the left",
        "meaning": "왼쪽에"
      },
      {
        "word": "on the right",
        "meaning": "오른쪽에"
      },
      {
        "word": "in the middle",
        "meaning": "가운데에"
      },
      {
        "word": "be wearing",
        "meaning": "옷을 입고 있다"
      },
      {
        "word": "be holding",
        "meaning": "손에 들고 있다"
      },
      {
        "word": "be looking at",
        "meaning": "바라보고 있다"
      },
      {
        "word": "be talking to",
        "meaning": "이야기하고 있다"
      },
      {
        "word": "be working on",
        "meaning": "작업하고 있다"
      },
      {
        "word": "according to the schedule",
        "meaning": "일정표에 따르면"
      },
      {
        "word": "it is scheduled for",
        "meaning": "일정이 잡혀 있다"
      },
      {
        "word": "it will take place",
        "meaning": "행사가 열릴 예정이다"
      },
      {
        "word": "the admission fee",
        "meaning": "입장료"
      },
      {
        "word": "you need to register",
        "meaning": "등록해야 한다"
      },
      {
        "word": "please note that",
        "meaning": "알아 두세요"
      },
      {
        "word": "i am afraid",
        "meaning": "유감스럽지만"
      },
      {
        "word": "it depends on",
        "meaning": "상황에 따라 다르다"
      },
      {
        "word": "save time",
        "meaning": "시간을 절약하다"
      },
      {
        "word": "save money",
        "meaning": "돈을 절약하다"
      },
      {
        "word": "reduce stress",
        "meaning": "스트레스를 줄이다"
      },
      {
        "word": "stay focused",
        "meaning": "집중력을 유지하다"
      },
      {
        "word": "work efficiently",
        "meaning": "효율적으로 일하다"
      },
      {
        "word": "improve communication",
        "meaning": "소통을 향상하다"
      },
      {
        "word": "learn from others",
        "meaning": "다른 사람에게 배우다"
      },
      {
        "word": "have more opportunities",
        "meaning": "더 많은 기회를 갖다"
      },
      {
        "word": "be convenient for",
        "meaning": "누군가에게 편리하다"
      },
      {
        "word": "i strongly believe",
        "meaning": "나는 확신한다"
      },
      {
        "word": "the main reason is",
        "meaning": "주된 이유는"
      },
      {
        "word": "to sum up",
        "meaning": "정리하자면"
      }
    ],
    "opic": [
      {
        "word": "let me think",
        "meaning": "잠깐 생각해 볼게요"
      },
      {
        "word": "to be honest",
        "meaning": "솔직히 말하면"
      },
      {
        "word": "as far as i remember",
        "meaning": "내 기억으로는"
      },
      {
        "word": "what i mean is",
        "meaning": "내 말은"
      },
      {
        "word": "you know what",
        "meaning": "있잖아요"
      },
      {
        "word": "actually",
        "meaning": "사실은"
      },
      {
        "word": "especially",
        "meaning": "특히"
      },
      {
        "word": "recently",
        "meaning": "최근에"
      },
      {
        "word": "these days",
        "meaning": "요즘"
      },
      {
        "word": "when i was younger",
        "meaning": "내가 더 어렸을 때"
      },
      {
        "word": "back then",
        "meaning": "그 당시에는"
      },
      {
        "word": "compared to the past",
        "meaning": "과거와 비교하면"
      },
      {
        "word": "i used to",
        "meaning": "예전에 하곤 했다"
      },
      {
        "word": "not anymore",
        "meaning": "더 이상은 아니다"
      },
      {
        "word": "the biggest difference",
        "meaning": "가장 큰 차이"
      },
      {
        "word": "once in a while",
        "meaning": "가끔"
      },
      {
        "word": "most of the time",
        "meaning": "대부분의 시간에"
      },
      {
        "word": "almost every day",
        "meaning": "거의 매일"
      },
      {
        "word": "right after work",
        "meaning": "퇴근 직후"
      },
      {
        "word": "on my way home",
        "meaning": "집에 가는 길에"
      },
      {
        "word": "i still remember",
        "meaning": "아직도 기억한다"
      },
      {
        "word": "i was surprised",
        "meaning": "놀랐다"
      },
      {
        "word": "i felt relieved",
        "meaning": "안도했다"
      },
      {
        "word": "it turned out that",
        "meaning": "알고 보니"
      },
      {
        "word": "eventually",
        "meaning": "결국"
      },
      {
        "word": "fortunately",
        "meaning": "다행히"
      },
      {
        "word": "unfortunately",
        "meaning": "안타깝게도"
      },
      {
        "word": "all of a sudden",
        "meaning": "갑자기"
      },
      {
        "word": "at that moment",
        "meaning": "그 순간에"
      },
      {
        "word": "i had no idea",
        "meaning": "전혀 몰랐다"
      },
      {
        "word": "i would like to ask",
        "meaning": "여쭤보고 싶다"
      },
      {
        "word": "would it be possible",
        "meaning": "가능할까요"
      },
      {
        "word": "could you tell me",
        "meaning": "알려 주실 수 있나요"
      },
      {
        "word": "is there any way",
        "meaning": "방법이 있나요"
      },
      {
        "word": "what about",
        "meaning": "어떤가요"
      },
      {
        "word": "instead of",
        "meaning": "대신에"
      },
      {
        "word": "i ended up",
        "meaning": "결국 하게 됐다"
      },
      {
        "word": "it was worth it",
        "meaning": "그럴 만한 가치가 있었다"
      },
      {
        "word": "i had a great time",
        "meaning": "즐거운 시간을 보냈다"
      },
      {
        "word": "i cannot wait to",
        "meaning": "빨리 하고 싶다"
      }
    ]
  },
  "photos": [
    {
      "id": "photo-document",
      "src": "assets/cafe-meeting.jpg",
      "alt": "카페 테이블에서 펼친 문서를 손에 들고 있는 장면",
      "credit": "rawpixel.com · CC0",
      "source": "https://commons.wikimedia.org/wiki/File:Meeting_at_the_Cafe_(Unsplash).jpg",
      "prompt": "Which statement best describes the picture?",
      "options": [
        "A person is holding an open document.",
        "A person is driving a bus.",
        "A person is painting a wall.",
        "A person is climbing a ladder."
      ],
      "answer": 0,
      "why": "펼쳐진 문서를 손에 들고 있는 모습이 보입니다. hold는 손에 들다, document는 문서라는 뜻이에요.",
      "model": "A person is holding an open document at a table. A cup is on the table. The person appears to be reading."
    },
    {
      "id": "photo-cafe",
      "src": "assets/cafe-interior.jpg",
      "alt": "테이블과 의자, 큰 창문과 조명이 있는 카페 내부",
      "credit": "O.Mustafin · CC0",
      "source": "https://commons.wikimedia.org/wiki/File:W00158.jpg",
      "prompt": "Which statement is supported by the picture?",
      "options": [
        "People are swimming in a pool.",
        "Tables and chairs are arranged inside a café.",
        "A train is arriving at a platform.",
        "Workers are repairing a bridge."
      ],
      "answer": 1,
      "why": "카페 안에 테이블과 의자들이 배치되어 있습니다. arrange는 배치하다, indoors는 실내라는 뜻이에요.",
      "model": "This picture shows the inside of a café. There are many tables and chairs. Large windows and lights can be seen. Some people are sitting at the tables."
    }
  ],
  "resources": [
    {
      "track": "toeic",
      "title": "ETS 토익 LC·RC 공식 샘플 PDF",
      "kind": "공식 PDF",
      "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-listening-reading-sample-test.pdf",
      "desc": "공식 문제의 사진·지문·선택지 구성을 확인해요."
    },
    {
      "track": "toeic",
      "title": "한국TOEIC위원회 실제 기출 공개 영상",
      "kind": "공식 기출 영상",
      "url": "https://exam.toeic.co.kr/content/common/realQuestion.php?examCate=TOE",
      "desc": "파트별 실제 기출과 해설을 공식 사이트에서 학습해요."
    },
    {
      "track": "tos",
      "title": "ETS 토스·라이팅 공식 샘플 PDF",
      "kind": "공식 PDF",
      "url": "https://www.ets.org/content/dam/ets-org/pdfs/toeic/toeic-speaking-writing-sample-tests.pdf",
      "desc": "사진 묘사·질문 응답·의견 말하기의 문제 형식을 살펴봐요."
    },
    {
      "track": "tos",
      "title": "한국TOEIC위원회 토스 실제 기출 영상",
      "kind": "공식 기출 영상",
      "url": "https://www.toeicswt.co.kr/content/common/realQuestion.php?examCate=TOS",
      "desc": "토스 유형별 기출 공개 영상을 공식 사이트에서 확인해요."
    },
    {
      "track": "opic",
      "title": "ACTFL OPIc 공식 안내 PDF",
      "kind": "공식 안내",
      "url": "https://www.actfl.org/uploads/files/general/OPIc_Familiarization_Guide.pdf",
      "desc": "진행 방식과 답변 기능, 평가가 이루어지는 과정을 이해해요."
    },
    {
      "track": "opic",
      "title": "국내 OPIc 공식 안내",
      "kind": "공식 사이트",
      "url": "https://www.opic.or.kr/",
      "desc": "국내 시험 안내와 공식 학습자 메뉴를 확인해요."
    },
    {
      "track": "opic",
      "title": "ACTFL OPIc 공식 자료 안내",
      "kind": "공식 자료",
      "url": "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic",
      "desc": "최신 공식 안내와 데모 연결을 확인해요."
    }
  ]
};
const ADVANCED={
  "chapters": {
    "toeic": [
      {
        "id": "t1",
        "title": "사진 묘사의 기본 표현",
        "goal": "사람의 동작과 사물의 위치를 구분해요.",
        "guide": [
          "사람의 동작은 be + -ing로 표현해요.",
          "위치는 next to, behind, on으로 설명해요.",
          "이 챕터는 사진 묘사에 쓰는 표현 연습입니다."
        ],
        "vocab": [
          {
            "word": "carry",
            "meaning": "들고 나르다"
          },
          {
            "word": "shelf",
            "meaning": "선반"
          },
          {
            "word": "behind",
            "meaning": "뒤에"
          },
          {
            "word": "arrange",
            "meaning": "정리하다"
          }
        ],
        "units": [
          "toeic-plus-0",
          "toeic-plus-1",
          "toeic-plus-2"
        ]
      },
      {
        "id": "t2",
        "title": "질문과 응답",
        "goal": "의문사와 제안을 듣고 자연스럽게 답해요.",
        "guide": [
          "When은 시간, Where는 장소를 물어요.",
          "Why는 이유를, Who는 사람을 물어요.",
          "제안에는 수락이나 거절로 답할 수 있어요."
        ],
        "vocab": [
          {
            "word": "meeting",
            "meaning": "회의"
          },
          {
            "word": "start",
            "meaning": "시작하다"
          },
          {
            "word": "offer",
            "meaning": "제안하다"
          },
          {
            "word": "available",
            "meaning": "이용 가능한"
          }
        ],
        "units": [
          "toeic-0",
          "toeic-1",
          "toeic-plus-3"
        ]
      },
      {
        "id": "t3",
        "title": "짧은 대화의 핵심",
        "goal": "대화의 목적과 최종 결정을 찾아요.",
        "guide": [
          "첫 제안보다 최종 합의에 주의하세요.",
          "but, instead, how about 뒤의 변화를 들어요.",
          "누가 무엇을 해야 하는지 연결해요."
        ],
        "vocab": [
          {
            "word": "appointment",
            "meaning": "약속"
          },
          {
            "word": "reschedule",
            "meaning": "일정을 변경하다"
          },
          {
            "word": "confirm",
            "meaning": "확인하다"
          },
          {
            "word": "instead",
            "meaning": "대신에"
          }
        ],
        "units": [
          "toeic-2",
          "toeic-plus-4",
          "toeic-plus-5"
        ]
      },
      {
        "id": "t4",
        "title": "안내 방송 듣기",
        "goal": "방송의 목적과 필요한 행동을 찾아요.",
        "guide": [
          "처음에 장소와 안내 목적을 파악해요.",
          "시간·층수·탑승구 같은 숫자를 메모해요.",
          "Please 뒤에는 요청 행동이 나오는 경우가 많아요."
        ],
        "vocab": [
          {
            "word": "announcement",
            "meaning": "안내 방송"
          },
          {
            "word": "departure",
            "meaning": "출발"
          },
          {
            "word": "entrance",
            "meaning": "입구"
          },
          {
            "word": "maintenance",
            "meaning": "점검"
          }
        ],
        "units": [
          "toeic-plus-6",
          "toeic-plus-7",
          "toeic-plus-8"
        ]
      },
      {
        "id": "t5",
        "title": "문장 빈칸과 문법",
        "goal": "주어·동사와 품사를 문맥에 맞게 골라요.",
        "guide": [
          "반복되는 일은 현재 시제를 살펴봐요.",
          "명사 앞에는 형용사가 올 수 있어요.",
          "전치사 뒤에는 명사나 동명사 형태가 와요."
        ],
        "vocab": [
          {
            "word": "report",
            "meaning": "보고서"
          },
          {
            "word": "submit",
            "meaning": "제출하다"
          },
          {
            "word": "efficient",
            "meaning": "효율적인"
          },
          {
            "word": "deadline",
            "meaning": "마감일"
          }
        ],
        "units": [
          "toeic-3",
          "toeic-4",
          "toeic-plus-9"
        ]
      },
      {
        "id": "t6",
        "title": "글의 흐름과 빈칸",
        "goal": "이메일의 연결 관계와 시제를 이해해요.",
        "guide": [
          "앞뒤 문장을 함께 읽으세요.",
          "however는 대조, therefore는 결과를 연결해요.",
          "날짜와 사건 순서로 시제를 판단해요."
        ],
        "vocab": [
          {
            "word": "however",
            "meaning": "그러나"
          },
          {
            "word": "therefore",
            "meaning": "그러므로"
          },
          {
            "word": "attached",
            "meaning": "첨부된"
          },
          {
            "word": "reservation",
            "meaning": "예약"
          }
        ],
        "units": [
          "toeic-plus-10",
          "toeic-plus-11",
          "toeic-plus-12"
        ]
      },
      {
        "id": "t7",
        "title": "단일 문서 읽기",
        "goal": "안내문과 이메일에서 정확한 정보를 찾아요.",
        "guide": [
          "질문에서 찾을 정보가 무엇인지 먼저 확인해요.",
          "숫자·요일·예외 조건을 구분해요.",
          "질문의 표현이 본문에서 다른 말로 바뀔 수 있어요."
        ],
        "vocab": [
          {
            "word": "reopen",
            "meaning": "다시 열다"
          },
          {
            "word": "notice",
            "meaning": "공지"
          },
          {
            "word": "fee",
            "meaning": "요금"
          },
          {
            "word": "register",
            "meaning": "등록하다"
          }
        ],
        "units": [
          "toeic-5",
          "toeic-plus-13",
          "toeic-plus-14"
        ]
      },
      {
        "id": "t8",
        "title": "두 문서 연결하기",
        "goal": "예약·주문 정보와 후속 안내를 함께 읽어요.",
        "guide": [
          "문서 사이의 이름·주문 번호·날짜를 연결해요.",
          "두 번째 문서에서 바뀐 조건을 확인해요.",
          "한 문서만 읽고 성급하게 답하지 마세요."
        ],
        "vocab": [
          {
            "word": "invoice",
            "meaning": "청구서"
          },
          {
            "word": "refund",
            "meaning": "환불"
          },
          {
            "word": "shipment",
            "meaning": "배송"
          },
          {
            "word": "discount",
            "meaning": "할인"
          }
        ],
        "units": [
          "toeic-plus-15",
          "toeic-plus-16",
          "toeic-plus-17"
        ]
      }
    ],
    "tos": [
      {
        "id": "s1",
        "title": "문장 읽기",
        "goal": "문장 덩어리와 강조를 살려 읽어요.",
        "guide": [
          "마침표에서 잠깐 쉬세요.",
          "숫자와 핵심 단어를 또렷하게 읽어요.",
          "빠르기보다 전달이 중요해요."
        ],
        "vocab": [
          {
            "word": "welcome",
            "meaning": "환영하다"
          },
          {
            "word": "staff",
            "meaning": "직원"
          },
          {
            "word": "service",
            "meaning": "서비스"
          },
          {
            "word": "entrance",
            "meaning": "입구"
          }
        ],
        "units": [
          "tos-0",
          "tos-plus-0",
          "tos-plus-1"
        ]
      },
      {
        "id": "s2",
        "title": "장면 묘사",
        "goal": "장소·사람·행동 순서로 설명해요.",
        "guide": [
          "전체 장소를 한 문장으로 시작해요.",
          "현재진행형으로 행동을 말해요.",
          "주변 사물이나 분위기를 덧붙여요."
        ],
        "vocab": [
          {
            "word": "counter",
            "meaning": "카운터"
          },
          {
            "word": "customer",
            "meaning": "손님"
          },
          {
            "word": "sitting",
            "meaning": "앉아 있는"
          },
          {
            "word": "standing",
            "meaning": "서 있는"
          }
        ],
        "units": [
          "tos-1",
          "tos-plus-2",
          "tos-plus-3"
        ]
      },
      {
        "id": "s3",
        "title": "일상 질문 응답",
        "goal": "질문에 직접 답하고 이유를 더해요.",
        "guide": [
          "첫 문장에 핵심 답을 말해요.",
          "빈도나 장소를 덧붙여요.",
          "짧은 이유로 마무리해요."
        ],
        "vocab": [
          {
            "word": "usually",
            "meaning": "보통"
          },
          {
            "word": "often",
            "meaning": "자주"
          },
          {
            "word": "prefer",
            "meaning": "선호하다"
          },
          {
            "word": "relax",
            "meaning": "쉬다"
          }
        ],
        "units": [
          "tos-2",
          "tos-plus-4",
          "tos-plus-5"
        ]
      },
      {
        "id": "s4",
        "title": "정보표 활용",
        "goal": "표에 있는 시간·장소를 정확히 전달해요.",
        "guide": [
          "질문에 필요한 항목을 먼저 찾아요.",
          "요일은 on, 시간은 at을 사용해요.",
          "표에 없는 정보는 만들어내지 않아요."
        ],
        "vocab": [
          {
            "word": "schedule",
            "meaning": "일정"
          },
          {
            "word": "session",
            "meaning": "시간대별 수업"
          },
          {
            "word": "location",
            "meaning": "장소"
          },
          {
            "word": "begin",
            "meaning": "시작하다"
          }
        ],
        "units": [
          "tos-3",
          "tos-plus-6",
          "tos-plus-7"
        ]
      },
      {
        "id": "s5",
        "title": "의견의 뼈대",
        "goal": "선택·이유·예시로 답을 구성해요.",
        "guide": [
          "I prefer나 I think로 입장을 밝혀요.",
          "because로 이유를 연결해요.",
          "For example로 작은 경험을 덧붙여요."
        ],
        "vocab": [
          {
            "word": "reason",
            "meaning": "이유"
          },
          {
            "word": "example",
            "meaning": "예시"
          },
          {
            "word": "convenient",
            "meaning": "편리한"
          },
          {
            "word": "quiet",
            "meaning": "조용한"
          }
        ],
        "units": [
          "tos-4",
          "tos-plus-8",
          "tos-plus-9"
        ]
      },
      {
        "id": "s6",
        "title": "의견 확장과 정리",
        "goal": "두 가지 이유와 경험을 묶어 말해요.",
        "guide": [
          "입장 → 첫 이유 → 두 번째 이유 순서로 말해요.",
          "구체적인 예시 하나면 충분해요.",
          "마지막에는 입장을 짧게 정리해요."
        ],
        "vocab": [
          {
            "word": "improve",
            "meaning": "향상하다"
          },
          {
            "word": "communicate",
            "meaning": "소통하다"
          },
          {
            "word": "healthy",
            "meaning": "건강한"
          },
          {
            "word": "experience",
            "meaning": "경험"
          }
        ],
        "units": [
          "tos-5",
          "tos-plus-10",
          "tos-plus-11"
        ]
      }
    ],
    "opic": [
      {
        "id": "o1",
        "title": "자기소개",
        "goal": "나의 생활과 관심사를 연결해요.",
        "guide": [
          "이름·하는 일·관심사 순서로 말해요.",
          "개인정보를 자세히 말할 필요는 없어요.",
          "예시를 그대로 외우기보다 나에게 맞게 바꿔요."
        ],
        "vocab": [
          {
            "word": "hometown",
            "meaning": "고향"
          },
          {
            "word": "interest",
            "meaning": "관심사"
          },
          {
            "word": "free time",
            "meaning": "여가 시간"
          },
          {
            "word": "enjoy",
            "meaning": "즐기다"
          }
        ],
        "units": [
          "opic-0",
          "opic-plus-0",
          "opic-plus-1"
        ]
      },
      {
        "id": "o2",
        "title": "집과 동네 묘사",
        "goal": "전체 모습에서 구체적인 장소로 설명해요.",
        "guide": [
          "집이나 동네의 전반적인 모습을 말해요.",
          "좋아하는 장소 한 곳을 자세히 설명해요.",
          "그곳에서 하는 활동을 연결해요."
        ],
        "vocab": [
          {
            "word": "neighborhood",
            "meaning": "동네"
          },
          {
            "word": "comfortable",
            "meaning": "편안한"
          },
          {
            "word": "nearby",
            "meaning": "근처의"
          },
          {
            "word": "apartment",
            "meaning": "아파트"
          }
        ],
        "units": [
          "opic-1",
          "opic-plus-2",
          "opic-plus-3"
        ]
      },
      {
        "id": "o3",
        "title": "일상과 습관",
        "goal": "빈도와 순서로 반복되는 일을 말해요.",
        "guide": [
          "usually, often으로 빈도를 표현해요.",
          "first, then, after that으로 순서를 연결해요.",
          "일상이 주는 느낌을 말해요."
        ],
        "vocab": [
          {
            "word": "routine",
            "meaning": "일상"
          },
          {
            "word": "exercise",
            "meaning": "운동하다"
          },
          {
            "word": "prepare",
            "meaning": "준비하다"
          },
          {
            "word": "afterwards",
            "meaning": "그 후에"
          }
        ],
        "units": [
          "opic-2",
          "opic-plus-4",
          "opic-plus-5"
        ]
      },
      {
        "id": "o4",
        "title": "취미와 여가",
        "goal": "좋아하는 활동을 구체적인 경험으로 넓혀요.",
        "guide": [
          "활동·빈도·함께하는 사람을 말해요.",
          "좋아하는 이유를 세부 경험과 연결해요.",
          "감정을 나타내는 단어를 사용해요."
        ],
        "vocab": [
          {
            "word": "concert",
            "meaning": "공연"
          },
          {
            "word": "movie",
            "meaning": "영화"
          },
          {
            "word": "hobby",
            "meaning": "취미"
          },
          {
            "word": "relaxing",
            "meaning": "편안하게 해주는"
          }
        ],
        "units": [
          "opic-plus-6",
          "opic-plus-7",
          "opic-plus-8"
        ]
      },
      {
        "id": "o5",
        "title": "여행과 과거 경험",
        "goal": "시간 순서로 한 가지 사건을 이야기해요.",
        "guide": [
          "언제·어디·누구와를 먼저 말해요.",
          "과거형으로 주요 사건을 연결해요.",
          "기억에 남는 이유와 느낌을 말해요."
        ],
        "vocab": [
          {
            "word": "trip",
            "meaning": "여행"
          },
          {
            "word": "memorable",
            "meaning": "기억에 남는"
          },
          {
            "word": "visited",
            "meaning": "방문했다"
          },
          {
            "word": "journey",
            "meaning": "여정"
          }
        ],
        "units": [
          "opic-3",
          "opic-plus-9",
          "opic-plus-10"
        ]
      },
      {
        "id": "o6",
        "title": "과거와 현재 비교",
        "goal": "변화와 그 이유를 함께 설명해요.",
        "guide": [
          "과거와 현재를 뚜렷하게 구분해요.",
          "used to, now 같은 표현을 써요.",
          "변화의 이유와 영향을 더해요."
        ],
        "vocab": [
          {
            "word": "used to",
            "meaning": "예전에 하곤 했다"
          },
          {
            "word": "change",
            "meaning": "변화"
          },
          {
            "word": "compared with",
            "meaning": "~와 비교하면"
          },
          {
            "word": "nowadays",
            "meaning": "요즘"
          }
        ],
        "units": [
          "opic-4",
          "opic-plus-11",
          "opic-plus-12"
        ]
      },
      {
        "id": "o7",
        "title": "질문하는 역할극",
        "goal": "상황에 맞는 질문을 여러 개 만들어요.",
        "guide": [
          "인사와 목적을 먼저 말해요.",
          "날짜·가격·이용 조건을 각각 물어요.",
          "마지막에 감사 인사를 해요."
        ],
        "vocab": [
          {
            "word": "included",
            "meaning": "포함된"
          },
          {
            "word": "book",
            "meaning": "예약하다"
          },
          {
            "word": "available",
            "meaning": "이용 가능한"
          },
          {
            "word": "per night",
            "meaning": "하룻밤당"
          }
        ],
        "units": [
          "opic-5",
          "opic-plus-13",
          "opic-plus-14"
        ]
      },
      {
        "id": "o8",
        "title": "문제 설명과 대안 제시",
        "goal": "문제를 알리고 해결 방법을 제안해요.",
        "guide": [
          "상황과 문제를 짧게 설명해요.",
          "가능한 대안을 두 가지 제시해요.",
          "상대의 의견을 공손하게 물어요."
        ],
        "vocab": [
          {
            "word": "cancel",
            "meaning": "취소하다"
          },
          {
            "word": "replace",
            "meaning": "교체하다"
          },
          {
            "word": "problem",
            "meaning": "문제"
          },
          {
            "word": "alternative",
            "meaning": "대안"
          }
        ],
        "units": [
          "opic-plus-15",
          "opic-plus-16",
          "opic-plus-17"
        ]
      }
    ]
  },
  "newUnits": {
    "toeic": [
      {
        "id": "toeic-plus-0",
        "title": "진행 중인 동작",
        "kind": "LC · 묘사 표현",
        "text": "A worker is carrying a box.",
        "prompt": "직원이 지금 하고 있는 일은?",
        "options": [
          "Carrying a box.",
          "Opening a door.",
          "Reading a newspaper."
        ],
        "answer": 0,
        "why": "is carrying는 지금 상자를 나르고 있다는 뜻이에요."
      },
      {
        "id": "toeic-plus-1",
        "title": "위치 표현",
        "kind": "LC · 묘사 표현",
        "text": "Several books are on a shelf next to the window.",
        "prompt": "책들이 놓인 위치는?",
        "options": [
          "Under a table.",
          "On a shelf.",
          "Behind a door."
        ],
        "answer": 1,
        "why": "on a shelf는 선반 위, next to the window는 창문 옆이라는 뜻이에요."
      },
      {
        "id": "toeic-plus-2",
        "title": "동작 구분",
        "kind": "LC · 묘사 표현",
        "text": "A woman is arranging chairs in a meeting room.",
        "prompt": "어떤 행동을 묘사하나요?",
        "options": [
          "Cleaning windows.",
          "Writing a report.",
          "Arranging chairs."
        ],
        "answer": 2,
        "why": "arrange chairs는 의자를 정리하거나 배치한다는 표현이에요."
      },
      {
        "id": "toeic-plus-3",
        "title": "장소를 묻는 질문",
        "kind": "LC · 질문 응답",
        "text": "Where can I pick up my visitor pass?",
        "prompt": "가장 자연스러운 응답은?",
        "options": [
          "At the front desk.",
          "By tomorrow morning.",
          "Yes, I can."
        ],
        "answer": 0,
        "why": "Where에 대한 응답으로 장소인 front desk(안내 데스크)가 적절해요."
      },
      {
        "id": "toeic-plus-4",
        "title": "변경된 배송일",
        "kind": "LC · 짧은 대화",
        "text": "A: Your order will arrive on Tuesday. B: Our office is closed then. A: We can deliver it on Wednesday instead. B: That is fine.",
        "prompt": "배송은 언제 이루어지나요?",
        "options": [
          "Monday.",
          "Tuesday.",
          "Wednesday."
        ],
        "answer": 2,
        "why": "Tuesday는 원래 계획이고 Wednesday가 최종 합의된 날짜예요."
      },
      {
        "id": "toeic-plus-5",
        "title": "다음 행동",
        "kind": "LC · 짧은 대화",
        "text": "A: The printer has stopped working. B: I will call the repair service. A: Thanks. We need the reports by three.",
        "prompt": "B가 다음에 할 일은?",
        "options": [
          "Call the repair service.",
          "Print the reports now.",
          "Buy a new desk."
        ],
        "answer": 0,
        "why": "I will call …에서 B가 하겠다고 말한 행동을 확인해요."
      },
      {
        "id": "toeic-plus-6",
        "title": "탑승구 변경",
        "kind": "LC · 안내 방송",
        "text": "Attention, passengers on Flight 205 to Seoul. Your flight will depart from Gate 12, not Gate 8. Please proceed to Gate 12.",
        "prompt": "승객이 가야 할 탑승구는?",
        "options": [
          "Gate 8.",
          "Gate 12.",
          "Gate 20."
        ],
        "answer": 1,
        "why": "not Gate 8과 변경 안내를 구분하고 최종 탑승구 12를 선택해요."
      },
      {
        "id": "toeic-plus-7",
        "title": "매장 안내",
        "kind": "LC · 안내 방송",
        "text": "Our store will close in fifteen minutes. Please take your items to the checkout counter. Thank you for shopping with us.",
        "prompt": "방송의 주된 목적은?",
        "options": [
          "Announce a new product.",
          "Explain a refund policy.",
          "Remind shoppers of closing time."
        ],
        "answer": 2,
        "why": "close in fifteen minutes와 계산대로 이동하라는 요청이 마감 안내임을 알려줘요."
      },
      {
        "id": "toeic-plus-8",
        "title": "방문자 안내",
        "kind": "LC · 안내 방송",
        "text": "Welcome to the museum. The special exhibition is on the second floor. Please leave large bags in the lockers near the entrance.",
        "prompt": "큰 가방은 어디에 보관해야 하나요?",
        "options": [
          "In lockers near the entrance.",
          "In the exhibition room.",
          "On the second-floor stairs."
        ],
        "answer": 0,
        "why": "leave large bags in the lockers가 직접적인 보관 장소 안내예요."
      },
      {
        "id": "toeic-plus-9",
        "title": "형용사 자리",
        "kind": "RC · 문장 빈칸",
        "text": "The new system is more ___ than the old one.",
        "prompt": "빈칸에 알맞은 말은?",
        "options": [
          "efficiency",
          "efficient",
          "efficiently"
        ],
        "answer": 1,
        "why": "be동사 뒤에서 시스템의 성질을 설명하고 more와 비교하는 형용사 efficient가 필요해요."
      },
      {
        "id": "toeic-plus-10",
        "title": "대조 연결어",
        "kind": "RC · 장문 빈칸",
        "text": "We planned to hold the workshop outdoors. ___, heavy rain is expected, so it will take place in Room 3.",
        "prompt": "빈칸에 알맞은 연결어는?",
        "options": [
          "However",
          "For example",
          "Similarly"
        ],
        "answer": 0,
        "why": "야외 계획과 실내 변경이라는 대조 관계이므로 However가 알맞아요."
      },
      {
        "id": "toeic-plus-11",
        "title": "이메일 시제",
        "kind": "RC · 장문 빈칸",
        "text": "Dear Ms. Park, Thank you for your payment. We ___ your reservation yesterday. You will receive the tickets tomorrow.",
        "prompt": "빈칸에 알맞은 동사 형태는?",
        "options": [
          "confirm",
          "will confirm",
          "confirmed"
        ],
        "answer": 2,
        "why": "yesterday가 과거의 일을 나타내므로 confirmed가 필요해요."
      },
      {
        "id": "toeic-plus-12",
        "title": "첨부 안내",
        "kind": "RC · 장문 빈칸",
        "text": "Please review the attached agenda before Friday. ___ We will discuss your suggestions at the meeting.",
        "prompt": "가운데에 가장 자연스러운 문장은?",
        "options": [
          "The shop opens on Sundays.",
          "Send any comments by Thursday afternoon.",
          "The train has already departed."
        ],
        "answer": 1,
        "why": "의견을 보내 달라는 문장이 다음 문장의 suggestions와 자연스럽게 이어져요."
      },
      {
        "id": "toeic-plus-13",
        "title": "등록 마감",
        "kind": "RC · 문서 읽기",
        "text": "Workshop Notice: The writing workshop will be held on June 18. Registration closes on June 10. The fee is $20 and includes lunch.",
        "prompt": "등록 마감일은 언제인가요?",
        "options": [
          "June 10.",
          "June 18.",
          "June 20."
        ],
        "answer": 0,
        "why": "행사 날짜 June 18과 등록 마감 June 10을 구분해요."
      },
      {
        "id": "toeic-plus-14",
        "title": "이메일 요청",
        "kind": "RC · 문서 읽기",
        "text": "To: All staff. Please submit your travel receipts to the accounting team by Monday. Include your name and department on each receipt.",
        "prompt": "직원들이 제출해야 하는 것은?",
        "options": [
          "Their work schedules.",
          "Travel receipts.",
          "A department report."
        ],
        "answer": 1,
        "why": "submit your travel receipts가 요청된 제출 서류예요. receipt는 영수증입니다."
      },
      {
        "id": "toeic-plus-15",
        "title": "주문과 배송 메일",
        "kind": "RC · 문서 연결",
        "text": "Order: Desk lamp, delivery May 4. Email: Due to a supply delay, your lamp will arrive two days later than originally planned.",
        "prompt": "변경된 배송일은?",
        "options": [
          "May 2.",
          "May 4.",
          "May 6."
        ],
        "answer": 2,
        "why": "원래 날짜 May 4에서 이틀 뒤이므로 May 6이에요."
      },
      {
        "id": "toeic-plus-16",
        "title": "광고와 예약",
        "kind": "RC · 문서 연결",
        "text": "Advertisement: Stay two nights and receive free breakfast. Booking: Ms. Han reserved a room for Friday and Saturday nights.",
        "prompt": "예약자가 받을 수 있는 혜택은?",
        "options": [
          "Free breakfast.",
          "A free third night.",
          "Free airport transport."
        ],
        "answer": 0,
        "why": "금요일과 토요일의 2박 예약이 광고의 free breakfast 조건을 충족해요."
      },
      {
        "id": "toeic-plus-17",
        "title": "영수증과 환불 규정",
        "kind": "RC · 문서 연결",
        "text": "Receipt: Shoes purchased on April 3. Policy: Unused items may be returned within 14 days with a receipt. Customer: The shoes are unused. I would like to return them on April 10.",
        "prompt": "규정에 맞는 설명은?",
        "options": [
          "The customer needs to wait longer.",
          "The unused shoes can be returned with the receipt.",
          "Only used shoes can be returned."
        ],
        "answer": 1,
        "why": "사용하지 않았고 구매 후 14일 이내이며 영수증이 있으면 반품 조건에 맞아요."
      }
    ],
    "tos": [
      {
        "id": "tos-plus-0",
        "title": "매장 안내 읽기",
        "kind": "문장 읽기",
        "prompt": "Read this announcement aloud: Our store opens at ten. Please use the main entrance. Our staff will be happy to help you.",
        "ko": "안내 문장을 소리 내어 읽어보세요.",
        "model": "Our store opens at ten. Please use the main entrance. Our staff will be happy to help you.",
        "tip": "문장 세 개를 끊어 읽고 ten과 main entrance를 강조해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 45
      },
      {
        "id": "tos-plus-1",
        "title": "행사 안내 읽기",
        "kind": "문장 읽기",
        "prompt": "Read this message aloud: Thank you for joining our workshop. The first session begins at two thirty. Please bring a notebook.",
        "ko": "시간 표현과 부탁을 또렷하게 읽어보세요.",
        "model": "Thank you for joining our workshop. The first session begins at two thirty. Please bring a notebook.",
        "tip": "two thirty를 한 덩어리로 읽고 마지막 문장은 공손하게 전달해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 45
      },
      {
        "id": "tos-plus-2",
        "title": "공원 장면 설명",
        "kind": "장면 묘사",
        "prompt": "Imagine a park. A man is walking a dog. Two children are playing near a tree. Describe the scene.",
        "ko": "공원에서 남자는 개를 산책시키고 아이 두 명은 나무 근처에서 놀고 있어요.",
        "model": "This is a park. A man is walking a dog. Two children are playing near a tree. The park looks peaceful.",
        "tip": "보이는 사실을 먼저 말하고 분위기는 마지막에 더해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 45
      },
      {
        "id": "tos-plus-3",
        "title": "사무실 장면 설명",
        "kind": "장면 묘사",
        "prompt": "Imagine an office. Three people are looking at a laptop. There are notebooks on the table. Describe the scene.",
        "ko": "세 사람이 노트북을 보고 있는 사무실 장면을 설명해보세요.",
        "model": "This is an office. Three people are looking at a laptop. There are notebooks on the table. They seem to be discussing something.",
        "tip": "사람의 행동은 are looking, 사물의 존재는 there are로 표현해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 45
      },
      {
        "id": "tos-plus-4",
        "title": "이동 수단",
        "kind": "일상 질문 응답",
        "prompt": "How do you usually get to work or school, and why?",
        "ko": "직장이나 학교에 어떻게 가며 왜 그 방법을 이용하나요?",
        "model": "I usually take the bus to work. The bus stop is near my home. It is convenient and affordable.",
        "tip": "방법 → 관련 정보 → 이유 순서로 답해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 30
      },
      {
        "id": "tos-plus-5",
        "title": "음악 듣기",
        "kind": "일상 질문 응답",
        "prompt": "How often do you listen to music, and when do you usually listen to it?",
        "ko": "음악을 얼마나 자주, 주로 언제 듣나요?",
        "model": "I listen to music every day. I usually listen to it on the bus. It makes my trip more enjoyable.",
        "tip": "every day와 on the bus로 빈도와 상황을 구체화해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 30
      },
      {
        "id": "tos-plus-6",
        "title": "교육 일정 안내",
        "kind": "정보표 활용",
        "prompt": "Schedule: Safety training — Tuesday, 10 a.m., Room 2. Team lunch — Tuesday, noon, Café Green. Where and when is the safety training?",
        "ko": "안전 교육의 장소와 시간을 안내해보세요.",
        "model": "The safety training is on Tuesday at ten a.m. It will be held in Room 2.",
        "tip": "질문이 묻는 안전 교육 항목만 정확히 전달해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 30
      },
      {
        "id": "tos-plus-7",
        "title": "운영 시간 안내",
        "kind": "정보표 활용",
        "prompt": "Hours: Monday to Friday, 9 a.m. to 6 p.m.; Saturday, 10 a.m. to 2 p.m.; Sunday, closed. Is the center open on Sunday?",
        "ko": "운영 시간표를 보고 일요일에 여는지 답해보세요.",
        "model": "No, the center is closed on Sunday. You can visit on Saturday from ten a.m. to two p.m.",
        "tip": "먼저 No로 답하고 이용 가능한 대안을 덧붙여요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 30
      },
      {
        "id": "tos-plus-8",
        "title": "종이책과 전자책",
        "kind": "의견의 뼈대",
        "prompt": "Do you prefer paper books or e-books? Give a reason and an example.",
        "ko": "종이책과 전자책 중 선호하는 쪽을 이유와 함께 말해보세요.",
        "model": "I prefer e-books because they are easy to carry. For example, I can read several books on my phone when I travel.",
        "tip": "어느 쪽을 골라도 괜찮아요. 선택과 이유가 연결되게 말해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "tos-plus-9",
        "title": "집과 식당",
        "kind": "의견의 뼈대",
        "prompt": "Do you prefer eating at home or at a restaurant? Explain your choice.",
        "ko": "집에서 먹는 것과 외식 중 선호하는 것을 설명해보세요.",
        "model": "I prefer eating at home. I can choose fresh ingredients and save money. For example, I often cook simple pasta after work.",
        "tip": "이유를 두 개로 나누어도 문장은 짧게 유지해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "tos-plus-10",
        "title": "팀 활동의 장점",
        "kind": "의견 확장과 정리",
        "prompt": "Do you think team activities are useful for students? Explain with reasons.",
        "ko": "학생들에게 팀 활동이 유용한지 이유와 함께 말해보세요.",
        "model": "I think team activities are useful. First, students can share different ideas. Second, they learn to communicate. For example, I learned a lot from a group project at school. That is why I support team activities.",
        "tip": "이유 두 개와 개인 경험을 연결하고 같은 단어를 지나치게 반복하지 않아요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "tos-plus-11",
        "title": "새 기술 배우기",
        "kind": "의견 확장과 정리",
        "prompt": "Is it important for adults to learn new skills? Give reasons and an example.",
        "ko": "성인이 새로운 기술을 배우는 것이 중요한지 말해보세요.",
        "model": "I think it is important. New skills can help people at work. They can also make daily life more interesting. For example, I learned basic cooking and now I enjoy making dinner. Learning new skills gives people more choices.",
        "tip": "일·생활이라는 두 관점으로 이유를 나누어보세요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      }
    ],
    "opic": [
      {
        "id": "opic-plus-0",
        "title": "나의 하루 소개",
        "kind": "자기소개",
        "prompt": "Tell me about your typical day. What do you do in the morning and evening?",
        "ko": "평소 아침과 저녁에 무엇을 하나요?",
        "model": "I usually get up at seven. I have breakfast and go to work. In the evening, I take a short walk and read a book. It is a simple routine, but I enjoy it.",
        "tip": "시간 순서대로 말하고 마지막에 느낌을 덧붙여요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-1",
        "title": "관심사 소개",
        "kind": "자기소개",
        "prompt": "What are you interested in these days? Explain why you like it.",
        "ko": "요즘 관심 있는 일과 좋아하는 이유를 말해보세요.",
        "model": "These days, I am interested in cooking. I started with simple dishes. I like it because I can make healthy meals. Last weekend, I made soup for my family.",
        "tip": "요즘 관심 → 시작 계기 → 이유나 예시를 연결해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-2",
        "title": "우리 동네",
        "kind": "집과 동네 묘사",
        "prompt": "Describe your neighborhood. What do you like about it?",
        "ko": "동네의 모습과 좋아하는 점을 설명해보세요.",
        "model": "My neighborhood is quiet and convenient. There is a small park near my apartment. I often walk there after dinner. I like the area because it feels relaxing.",
        "tip": "분위기 → 주변 시설 → 나의 활동 → 이유 순서로 말해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-3",
        "title": "좋아하는 카페",
        "kind": "집과 동네 묘사",
        "prompt": "Describe a café you like to visit. What does it look like?",
        "ko": "좋아하는 카페의 모습을 설명해보세요.",
        "model": "There is a small café near my home. It has wooden tables and large windows. The music is soft, and the staff are friendly. I usually read there on Saturday mornings.",
        "tip": "가구·빛·소리 같은 세부 사항을 더해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-4",
        "title": "운동 습관",
        "kind": "일상과 습관",
        "prompt": "How do you usually exercise? Tell me about your routine.",
        "ko": "평소 운동하는 순서를 설명해보세요.",
        "model": "I usually walk three times a week. First, I stretch at home. Then I walk around the park for thirty minutes. After that, I drink water and rest. I feel refreshed afterwards.",
        "tip": "활동과 빈도를 먼저 말하고 순서를 설명해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-5",
        "title": "장보기",
        "kind": "일상과 습관",
        "prompt": "Tell me how you usually go grocery shopping.",
        "ko": "평소 어떻게 장을 보는지 말해보세요.",
        "model": "I go grocery shopping on Sundays. Before I leave, I make a short list. I buy vegetables, fruit, and milk at a nearby store. I try not to buy things I do not need.",
        "tip": "준비 → 장소 → 구매 품목 → 나만의 습관을 더해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-6",
        "title": "음악 취향",
        "kind": "취미와 여가",
        "prompt": "What kind of music do you like? When do you listen to it?",
        "ko": "좋아하는 음악과 주로 듣는 때를 말해보세요.",
        "model": "I like calm pop music. I usually listen to it when I take the bus. The songs help me relax. Recently, I found a new singer and listened to the album several times.",
        "tip": "취향을 말한 뒤 최근 경험을 하나 더해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-7",
        "title": "기억에 남는 영화",
        "kind": "취미와 여가",
        "prompt": "Tell me about a movie you enjoyed recently.",
        "ko": "최근 재미있게 본 영화에 대해 말해보세요.",
        "model": "I watched a comedy with my friend last month. The story was about two neighbors who became friends. Some scenes were very funny. I liked it because it made me feel happy.",
        "tip": "줄거리는 짧게, 기억에 남는 점과 이유를 더 길게 말해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-8",
        "title": "취미를 시작한 계기",
        "kind": "취미와 여가",
        "prompt": "How did you become interested in your favorite hobby?",
        "ko": "좋아하는 취미를 시작한 계기를 이야기해보세요.",
        "model": "I became interested in photography two years ago. My friend showed me some beautiful pictures. I started taking photos with my phone. Now I take pictures whenever I visit a new place.",
        "tip": "계기·시작 행동·현재 모습을 연결해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-9",
        "title": "예상 밖의 여행",
        "kind": "여행과 과거 경험",
        "prompt": "Tell me about an unexpected event during a trip.",
        "ko": "여행 중 예상하지 못했던 일을 이야기해보세요.",
        "model": "Last spring, I visited Jeju with my friend. It rained heavily on our second day. We changed our plan and visited a small museum. It was more interesting than we expected. The rainy day became a good memory.",
        "tip": "예상 밖의 사건 뒤에 대처와 결과를 이어서 말해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-10",
        "title": "처음 가 본 곳",
        "kind": "여행과 과거 경험",
        "prompt": "Tell me about the first time you visited a new city.",
        "ko": "새 도시를 처음 방문했던 경험을 말해보세요.",
        "model": "I first visited Seoul when I was a student. I took the train with my cousin. The subway system looked confusing at first, but a kind person helped us. We visited a palace and ate delicious food. I felt excited all day.",
        "tip": "장소 설명보다 실제 있었던 사건에 집중해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-11",
        "title": "동네의 변화",
        "kind": "과거와 현재 비교",
        "prompt": "How has your neighborhood changed over the years?",
        "ko": "예전과 비교해 동네가 어떻게 달라졌나요?",
        "model": "My neighborhood used to have many small shops. Now there are more cafés and apartment buildings. It is more convenient, but it is also busier. I still like the small park because it has not changed much.",
        "tip": "좋아진 점과 아쉬운 점을 함께 말해도 좋아요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-12",
        "title": "쇼핑 방식의 변화",
        "kind": "과거와 현재 비교",
        "prompt": "How has the way you shop changed since you were younger?",
        "ko": "예전과 지금의 쇼핑 방식은 어떻게 다른가요?",
        "model": "When I was younger, I usually went to stores with my family. Now I often shop online. It saves time, and I can compare prices easily. However, I still visit stores when I buy shoes.",
        "tip": "전체 변화 뒤에 예외 한 가지를 더하면 자연스러워요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-13",
        "title": "체육관에 문의하기",
        "kind": "질문하는 역할극",
        "prompt": "You want to join a gym. Call and ask three questions about membership.",
        "ko": "체육관 등록에 대해 세 가지 질문을 해보세요.",
        "model": "Hello. I am interested in joining your gym. How much is a monthly membership? What time do you open? Are group classes included? Thank you.",
        "tip": "한 질문에 여러 정보를 섞지 말고 세 가지로 나누어요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-14",
        "title": "친구와 공연 계획",
        "kind": "질문하는 역할극",
        "prompt": "You want to go to a concert with a friend. Ask your friend three questions to make a plan.",
        "ko": "친구와 공연에 가려고 해요. 계획을 정할 질문 세 개를 해보세요.",
        "model": "Hi. Would you like to go to a concert with me? Which day works for you? What kind of music would you like to hear? How much can we spend on tickets? Let me know.",
        "tip": "친구에게 말하는 자연스러운 말투를 사용해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-15",
        "title": "약속 변경 부탁",
        "kind": "문제 설명과 대안 제시",
        "prompt": "You cannot meet your friend tomorrow. Explain the problem and suggest two alternatives.",
        "ko": "내일 친구를 만날 수 없어요. 이유를 설명하고 대안 두 가지를 제안해보세요.",
        "model": "Hi. I am sorry, but I have to work late tomorrow. Could we meet on Saturday instead? If you are busy, we could have a video call on Sunday. Which option is better for you?",
        "tip": "이유는 간단히 말하고 서로 다른 대안 두 개를 제시해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-16",
        "title": "잘못 받은 물건",
        "kind": "문제 설명과 대안 제시",
        "prompt": "You ordered a blue bag, but received a black one. Call the store and ask for a solution.",
        "ko": "주문과 다른 색의 가방을 받았어요. 상점에 해결을 요청해보세요.",
        "model": "Hello. I ordered a blue bag, but I received a black one today. Could you send me the blue bag? If it is not available, I would like a refund. Please tell me how to return this one.",
        "tip": "문제 → 교환 요청 → 대안 → 반품 절차 질문으로 구성해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      },
      {
        "id": "opic-plus-17",
        "title": "여행 문제 해결 경험",
        "kind": "문제 설명과 대안 제시",
        "prompt": "Tell me about a time you solved a problem while traveling.",
        "ko": "여행 중 문제를 해결했던 경험을 이야기해보세요.",
        "model": "Last year, I missed a bus during a trip. I was worried because I did not know the area. I checked the next bus time and asked a staff member for help. I arrived later than planned, but everything worked out.",
        "tip": "문제·내 행동·결과를 과거형으로 연결해요.",
        "checks": [
          "질문에 맞게 답했어요",
          "구체적인 내용을 더했어요",
          "끝까지 말하고 다시 확인했어요"
        ],
        "seconds": 60
      }
    ]
  }
};
for(const track of ['toeic','tos','opic'])EXTRA.tracks[track].units.push(...ADVANCED.newUnits[track]);
const WORD_SOURCES=[['daily','오늘의 단어'],['all','전체 단어'],['basic','기초 영어'],['toeic','토익 단어'],['tos','토스 표현'],['opic','오픽 표현'],['conversation','회화 단어'],['major','전공·연구 단어'],['starred','즐겨찾기'],['weak','오답 단어'],['due','복습할 단어'],['custom','내가 추가한 단어']];
const WORD_MODES=[['mixed','골고루 섞어서'],['meaning','뜻 고르기'],['reverse','영어 고르기'],['listening','듣고 뜻 고르기'],['typing','영어 직접 입력']];
const KEY='everyday-english-foundation-state-v1';
const CLOUD_CONFIG={url:'https://aicaaawuortmdqslkgbp.supabase.co',publishableKey:'sb_publishable_YddlPyyXDLlE9qq2gdqw8Q_IHxFSMzb',enabled:true};
let cloudSession=cachedCloudSession();
let activeStorageKey=cloudSession?KEY+'-user-'+cloudSession.user.id:KEY;
const defaultState=()=>({completed:{},quizRecords:{},starred:[],srs:{},rate:.86,studyMinutes:30,errors:{},examRecords:{},schemaVersion:3,learningRecords:{},plan:defaultPlan(),customTasks:[],taskMoves:{},wordTaskDone:{},customWords:[],cardSessions:{},mockHistory:[],wordStats:{},wordHistory:[],wordPrefs:{source:"daily",mode:"mixed",size:10}});
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
   v.doneAt=validDay(r.doneAt)?r.doneAt:'';safe.examRecords[u.id]=v;
  }
  return normalizeUpgrade(x,safe);
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
 updatePlannerDate();
 app.innerHTML=`<header class="site-header"><div class="shell header-inner">
  <button class="brand" data-act="goto" data-to="home" aria-label="첫 화면으로 이동"><span class="brand-mark">Aa</span><span><span class="brand-name">하루 영어 첫걸음</span><span class="brand-sub">알파벳부터, 나만의 속도로</span></span></button>
  <nav class="nav" aria-label="주요 메뉴">
   ${[['home','오늘 학습'],['planner','학습 일정'],['vocab','단어 학습'],['learning','회화·전공'],['exams','시험 과정'],['progress','기초 과정'],['mistakes','오답 복습'],['account','내 계정'],['settings','설정']].map(([s,t])=>`<button class="${screen===s||(s==='home'&&screen==='day')||(s==='exams'&&['exam','chapters','chapter','resources','minitest'].includes(screen))||(s==='vocab'&&screen==='wordquiz')||(s==='learning'&&screen==='learninglesson')?'active':''}" data-act="goto" data-to="${s}" ${screen===s?'aria-current="page"':''}>${t}</button>`).join('')}
  </nav></div></header>
  <main class="shell" id="main-content">${!storageAvailable?'<div class="alert">이 환경에서는 자동 저장이 제한될 수 있습니다. 일반 웹브라우저에서 열거나 백업 기능을 사용해 주세요.</div>':''}${screen==='home'?homeHTML():screen==='planner'?plannerHTML():screen==='learning'?learningHTML():screen==='learninglesson'?learningLessonHTML():screen==='wordquiz'?wordQuizHTML():screen==='resources'?resourcesHTML():screen==='minitest'?miniTestHTML():screen==='chapters'?chaptersHTML():screen==='chapter'?chapterHTML():screen==='day'?dayHTML():screen==='progress'?progressHTML():screen==='vocab'?vocabHTML():screen==='exams'?examOverviewHTML():screen==='exam'?examHTML():screen==='mistakes'?mistakesHTML():screen==='account'?accountHTML():settingsHTML()}</main>
  <footer class="footer shell">영어 첫걸음 · 기초 72회 · 단어 학습 · 시험별 챕터 과정 · 로그인하면 개인 기록을 동기화합니다.</footer>`;
}
function legacyHomeHTML(){
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
function goToScreen(to){if(screen==='minitest'&&miniTest&&!miniTest.finished){if(!confirm('진행 중인 모의연습을 나갈까요? 답변은 제출 후 저장됩니다.'))return;miniTest=null;clearInterval(miniTicker)}stopActivities();mistakeChoice=null;mistakeIndex=0;screen=to;wordSearch='';render();window.scrollTo({top:0,behavior:'instant'})}
function openDay(i){stopActivities();practiceTokens=[];practiceChecked=false;dialogueChoice=null;lessonIndex=Number(i);if(!Number.isInteger(lessonIndex)||lessonIndex<0||lessonIndex>71)lessonIndex=nextIndex();lessonTab='sound';quiz=null;quizHint=false;screen='day';render();window.scrollTo({top:0,behavior:'instant'})}
function dayHTML(){const l=LESSONS[lessonIndex];const done=!!state.completed[l.id];const tabs=[['sound','1 · 소리'],['words','2 · 단어'],['reading','3 · 문장'],['quiz','4 · 퀴즈'],['practice','5 · 활용']];
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="home">← 오늘 학습</button><span class="pill">${l.week}단계 · ${l.day}/6일</span>${done?'<span class="round-tag" style="color:var(--success);background:var(--success-weak)">학습 완료 ✓</span>':''}</div>
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
function progressHTML(){const n=completedCount();return `<div class="page-head"><div><span class="eyebrow">YOUR LEARNING PATH</span><h1 class="h1">기초 영어 72회 학습 지도</h1><p class="lead">12개 단계, 총 72회 수업입니다. 날짜별 계획은 학습 일정에서 관리해요.</p></div><span class="pill">${n} / 72 완료</span></div><div class="panel pad gap-bottom"><div class="card-header"><span class="strong">전체 진도</span><span class="strong txt-accent">${pct(n,72)}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct(n,72)}%"></div></div></div>${Array.from({length:12},(_,w)=>{
 const subset=LESSONS.slice(w*6,w*6+6),done=subset.filter(x=>state.completed[x.id]).length;
 return `<section class="panel week-panel"><div class="week-heading"><div><span class="eyebrow">WEEK ${String(w+1).padStart(2,'0')}</span><h2 class="h2">${esc(subset[0].weekTitle)}</h2><div class="week-subtitle">${esc(subset[0].weekSummary)}</div></div><span class="pill">${done} / 6</span></div><div class="day-grid">${subset.map(l=>`<button class="day-tile ${state.completed[l.id]?'done':''} ${nextIndex()===l.id?'current':''}" data-act="open-day" data-i="${l.id}"><span class="day-number">${l.day}일 차 · ${String(l.id+1).padStart(2,'0')}</span><span class="day-name">${esc(l.title)}</span>${state.completed[l.id]?'<span class="day-mark">완료 ✓</span>':''}</button>`).join('')}</div></section>`}).join('')}`}
function legacyVocabListHTML(){const seen=seenWords(),all=[...allVocab.entries()];let rows=all.filter(([w])=>wordFilter==='all'||(wordFilter==='starred'?state.starred.includes(w):seen.has(w)||LESSONS[nextIndex()].words.some(x=>x.word.toLowerCase()===w)));
 const q=wordSearch.toLowerCase().trim();if(q)rows=rows.filter(([w,m])=>w.includes(q)||m.toLowerCase().includes(q));
 rows=rows.slice(0,350);
 if(!rows.length)return `<div class="empty">조건에 맞는 단어가 없어요. 다른 검색어나 필터를 선택해 보세요.</div>`;
 return `<div class="vocab-list">${rows.map(([w,m])=>`<div class="vocab-item"><div class="vocab-item-head"><strong lang="en">${esc(w)}</strong><button class="btn small icon-btn" aria-label="${esc(w)} 즐겨찾기" data-act="star" data-word="${attr(w)}">${state.starred.includes(w)?'★':'☆'}</button></div><div class="muted">${esc(m)}</div><div class="button-row" style="margin-top:9px"><button class="btn small" data-act="speak" data-text="${attr(w)}">🔊 듣기</button></div></div>`).join('')}</div>`;
}
function legacyVocabHTML(){return `<div class="page-head"><div><span class="eyebrow">MY VOCABULARY</span><h1 class="h1">나의 단어장</h1><p class="lead">배운 단어를 계속 듣고 읽을 수 있어요. ☆를 누르면 즐겨찾기로 저장됩니다.</p></div><span class="pill">전체 단어 ${allVocab.size}개</span></div><div class="panel pad"><div class="chipset">${[['learned','배운 단어 + 오늘의 단어'],['starred','즐겨찾기'],['all','전체 미리보기']].map(([f,t])=>`<button class="chip ${wordFilter===f?'active':''}" data-act="word-filter" data-filter="${f}">${t}</button>`).join('')}</div><label class="sr-only" for="searchWords">단어 검색</label><input id="searchWords" data-search="words" class="search" value="${attr(wordSearch)}" placeholder="영어 단어 또는 한글 뜻 검색" autocomplete="off"/><div class="tiny muted" style="margin:13px 0">단어 카드를 누르지 않고 듣기 버튼을 누르면 영어 발음을 확인할 수 있어요.</div><div id="vocab-results">${vocabListHTML()}</div></div>`}
function settingsHTML(){return `<div class="page-head"><div><span class="eyebrow">MY SETTINGS</span><h1 class="h1">나의 학습 설정</h1><p class="lead">학습 시간과 발음 속도를 조절하고 진도를 파일로 백업할 수 있어요.</p></div></div><div class="two-col"><section class="panel pad"><h2 class="h2">학습 환경</h2><div class="settings-list"><div class="setting-row"><div><div class="setting-name">기초 수업 안내 시간</div><div class="setting-desc">전체 일정의 하루 배정 시간은 학습 일정에서 조절합니다.</div></div><select id="studyMinutes" class="search" style="max-width:120px;padding:8px" aria-label="기초 수업 안내 시간"><option value="15" ${state.studyMinutes===15?'selected':''}>15분</option><option value="20" ${state.studyMinutes===20?'selected':''}>20분</option><option value="30" ${state.studyMinutes===30?'selected':''}>30분</option><option value="45" ${state.studyMinutes===45?'selected':''}>45분</option></select></div><div class="setting-row"><div><div class="setting-name">영어 발음 속도</div><div class="setting-desc">설정된 기기의 음성합성 기능을 사용합니다.</div></div><div style="display:flex;align-items:center;gap:8px"><input type="range" class="range" id="voiceRate" min="0.65" max="1.25" step="0.05" value="${state.rate}" aria-label="영어 발음 속도"/><span id="rateLabel" class="tiny strong">${state.rate.toFixed(2)}x</span></div></div><div class="setting-row"><div><div class="setting-name">음성 재생 시험</div><div class="setting-desc">안 들리면 휴대폰의 소리 설정과 브라우저를 확인하세요.</div></div><button class="btn small" data-act="speak" data-text="Hello. Let's learn English together.">🔊 들어보기</button></div></div></section><section class="panel pad"><h2 class="h2">학습 기록 관리</h2><p class="lead">현재 ${completedCount()}회 완료, 배운 단어 ${seenWords().size}개</p><div class="button-row gap-top"><button class="btn primary" data-act="export">학습 기록 백업</button><label class="btn" for="importFile" style="cursor:pointer">백업 불러오기</label><input type="file" id="importFile" accept=".json,application/json" class="sr-only"/><button class="btn" data-act="reset" style="color:#a03f3f">진도 초기화</button></div><div class="tip gap-top">${cloudSession?"로그인한 계정의 학습 기록을 온라인과 이 브라우저에 저장합니다.":"로그인하지 않은 기록은 현재 브라우저에 저장합니다."} 기기를 바꾸거나 브라우저 저장 데이터를 삭제하기 전에는 JSON 파일로 백업하세요. 자동 알림과 발음 채점은 제공하지 않습니다.</div></section></div><div class="panel pad section"><h2 class="h2">읽기·듣기 학습 안내</h2><p class="lead">이 앱은 기초 영어와 단어·시험별 학습을 돕습니다. 실제 음성은 기기에 설치된 영어 음성을 사용하므로 기기마다 다를 수 있습니다. 발음 기호와 한글 표기는 참고 자료이며, 원어민 발음을 완전히 대신하지는 않습니다.</p></div>`}
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
 if(handlePlannerAction(a,b)||handleWordAction(a,b)||handleResourceAction(a,b)||handleLearningAction(a,b))return;
 if(handleExtraAction(a,b))return;
 if(a==='goto'){goToScreen(b.dataset.to);return}
 if(a==='open-day'){openDay(b.dataset.i);return}
 if(a==='lesson-tab'){stopStudyTimer();lessonTab=b.dataset.tab;quizHint=false;render();return}
 if(a==='speak'||a==='speak-slow'||a==='speak-letter'){speak(b.dataset.text,a==='speak-slow',a==='speak-letter');return}
 if(a==='toggle-word-meanings'){wordMeaningsVisible=!wordMeaningsVisible;render();return}
 if(a==='toggle-sentence'){sentenceMeaningVisible=!sentenceMeaningVisible;render();return}
 if(a==='star'){const w=b.dataset.word.toLowerCase();if(!vocabBank().some(item=>item.word===w))return;state.starred=state.starred.includes(w)?state.starred.filter(x=>x!==w):[...state.starred,w];save();delete state.cardSessions.starred;render();return}
 if(a==='reveal-review'){reviewReveal=true;render();return}
 if(a==='review-answer'){answerReview(b.dataset.word,b.dataset.known==='1');return}
 if(a==='quiz-hint'){quizHint=true;render();return}
 if(a==='quiz-select'){const q=getQuiz();if(q.selected!==null||q.finished)return;q.selected=b.dataset.answer;const errorKey=lessonIndex+':'+q.pos;if(q.selected===q.questions[q.pos].answer){q.score++;delete state.errors[errorKey]}else{state.errors[errorKey]=true}save();render();return}
 if(a==='quiz-next'){const q=getQuiz();if(q.selected===null)return;if(q.pos===q.questions.length-1){q.finished=true;state.quizRecords[lessonIndex]={correct:q.score,total:q.questions.length};save()}else{q.pos++;q.selected=null;quizHint=false}render();return}
 if(a==='retry-quiz'){quiz=null;quizHint=false;render();return}
 if(a==='complete-day'){const q=getQuiz();if(q.finished)completeDay();return}
 if(a==='word-filter'){wordFilter=b.dataset.filter;render();return}
 if(a==='export'){exportBackup();return}
 if(a==='reset'){if(confirm('일정, 직접 추가한 단어, 기초·시험 진도와 모든 학습 기록이 초기화됩니다. 먼저 백업했나요? 계속 초기화할까요?')){state=defaultState();save();screen='home';render()}return}
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
function legacyExamOverviewHTML(){
 return `<div class="page-head"><div><span class="eyebrow">EXAM FIRST STEPS</span><h1 class="h1">시험 영어 첫걸음</h1><p class="lead">짧은 한 문제부터. 토익·토스·오픽을 부담 없이 시작해요.</p></div></div><div class="exam-grid">${Object.entries(EXTRA.tracks).map(([key,t])=>{const count=t.units.filter(u=>state.examRecords[u.id]?.completed).length;return `<section class="panel pad exam-card"><span class="round-tag">입문 · ${t.units.length}개 활동</span><h2 class="h1">${t.title}</h2><p class="strong">${t.subtitle}</p><p class="lead">${t.description}</p><div class="progress-track gap-top"><div class="progress-fill" style="width:${pct(count,t.units.length)}%"></div></div><p class="tiny muted">${count} / ${t.units.length} 완료</p><button class="btn primary" data-act="exam-open" data-track="${key}" data-unit="0">학습 시작 →</button></section>`}).join('')}</div><div class="tip gap-top">직접 만든 입문 연습입니다. 토스·오픽 답변은 예시와 체크리스트로 스스로 확인하며, 공식 시험 점수나 등급을 산출하지 않습니다.</div>`;
}
function currentExam(){return EXTRA.tracks[examTrack].units[examUnit]}
function examHTML(){
 const t=EXTRA.tracks[examTrack],u=currentExam(),record=state.examRecords[u.id]||{},isListening=examTrack==='toeic'&&u.kind.startsWith('LC'),c=chapterForUnit(examTrack,examUnit);
 return `<div class="back-row"><button class="btn small" data-act="course-chapter" data-track="${examTrack}" data-chapter="${c.id}">← ${esc(c.title)}</button><span class="pill">${t.title} · 챕터 학습</span></div><div class="panel pad"><span class="eyebrow">${esc(u.kind)}</span><h1 class="h1">${esc(u.title)}</h1><div class="chipset" aria-label="연습 선택">${c.units.map(id=>t.units.find(x=>x.id===id)).map(x=>{const i=t.units.indexOf(x);return `<button class="chip ${examUnit===i?'active':''}" data-act="exam-open" data-track="${examTrack}" data-unit="${i}">${c.units.indexOf(x.id)+1}. ${esc(x.title)}${state.examRecords[x.id]?.completed?' ✓':''}</button>`}).join('')}</div>${examTrack==='toeic'?`
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
 ${examNavigationHTML()}</div>`;
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
 if(a==='exam-answer'){const u=currentExam(),i=Number(b.dataset.choice),r=examRecord();if(!u.options||r.selected!==undefined||!Number.isInteger(i)||!u.options[i])return true;r.selected=i;r.completed=i===u.answer;r.doneAt=r.completed?dateStr():'';save();render();return true}
 if(a==='exam-retry'){const r=examRecord();delete r.selected;r.completed=false;save();render();return true}
 if(a==='exam-transcript'){listenTranscript=!listenTranscript;render();return true}
 if(a==='exam-model'){examRevealed=!examRevealed;render();return true}
 if(a==='exam-timer'){startStudyTimer(currentExam().seconds);return true}
 if(a==='exam-timer-stop'){stopStudyTimer();const n=document.getElementById('study-timer');if(n)n.textContent='타이머를 멈췄어요.';return true}
 if(a==='exam-complete'){const r=examRecord();if(r.checks?.length===3&&r.checks.every(Boolean)){r.completed=true;r.doneAt=dateStr();save();stopStudyTimer();render()}return true}
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

let learningGroup='conversation',learningId='conv-greetings',learningRevealed=false;
function allLearningChapters(){return [...EXPANSION.conversation.chapters,...EXPANSION.speaking.chapters,...Object.values(EXPANSION.major).flatMap(x=>x.chapters)]}
function learningChapter(id){return allLearningChapters().find(c=>c.id===id)}
function majorChapters(field=state.plan.majorField){return [...EXPANSION.major.research.chapters,...(field==='research'?[]:EXPANSION.major[field]?.chapters||[])]}
function learningLabel(c){return c.id.startsWith('conv-')?'상황별 영어 회화':c.track?EXTRA.tracks[c.track].title+' 답변 틀':'전공·연구 영어'}
function activeLearningChapters(group=learningGroup){return group==='conversation'?EXPANSION.conversation.chapters:group==='major'?majorChapters():EXPANSION.speaking.chapters}
function learningRecord(){return state.learningRecords[learningId]||(state.learningRecords[learningId]={notes:'',checks:[false,false,false],completed:false,completedAt:'',slots:{}})}
function lessonSlots(c){return [...new Set((c.template||c.patterns||[]).flatMap(p=>[...p.en.matchAll(/\[([^\]]+)\]/g)].map(m=>m[1])))]}
function filledLearningTemplate(c,r){return (c.template||c.patterns||[]).map(p=>p.en.replace(/\[([^\]]+)\]/g,(_,key)=>r.slots?.[key]?.trim()||'['+key+']')).join(' ')}
function normalizeLearningRecords(records){
 const safe={};if(!records||typeof records!=='object')return safe;
 for(const c of allLearningChapters()){
  const r=records[c.id];if(!r||typeof r!=='object')continue;
  const checks=Array.from({length:3},(_,i)=>r.checks?.[i]===true),selected=c.quiz&&Number.isInteger(r.selected)&&r.selected>=0&&r.selected<c.quiz.options.length?r.selected:undefined,slots={};
  for(const key of lessonSlots(c))if(typeof r.slots?.[key]==='string')slots[key]=r.slots[key].slice(0,120);
  safe[c.id]={notes:typeof r.notes==='string'?r.notes.slice(0,1500):'',checks,slots,completed:r.completed===true&&checks.every(Boolean)&&(!c.quiz||selected===c.quiz.answer),completedAt:validDay(r.completedAt)?r.completedAt:''};if(selected!==undefined)safe[c.id].selected=selected;
 }
 return safe;
}
function learningHTML(){
 const chapters=activeLearningChapters(),done=chapters.filter(c=>state.learningRecords[c.id]?.completed).length;
 return `<div class="page-head"><div><span class="eyebrow">SPEAK & CONNECT</span><h1 class="h1">회화·전공·답변 틀</h1><p class="lead">단어에서 문장으로, 예시에서 내 이야기로 연결해요.</p></div><span class="pill">${done} / ${chapters.length} 완료</span></div><div class="chipset">${[['conversation','상황별 기초 회화'],['major','전공·연구 영어'],['templates','토스·오픽 답변 틀']].map(([key,label])=>`<button class="chip ${learningGroup===key?'active':''}" data-act="learning-filter" data-group="${key}">${label}</button>`).join('')}</div>${learningGroup==='major'?`<section class="panel pad gap-bottom"><label for="major-field" class="strong">전공 영어 분야</label><select id="major-field" class="search gap-top">${Object.entries(EXPANSION.major).map(([key,v])=>`<option value="${key}" ${state.plan.majorField===key?'selected':''}>${v.title}</option>`).join('')}</select><p class="tiny muted">선택 분야와 연구·발표 공통 표현을 함께 학습합니다. 기존 기록은 유지됩니다.</p></section>`:''}${learningGroup==='templates'?'<div class="tip gap-bottom">답변 틀의 빈칸을 본인의 경험과 질문에 맞게 바꿔요. 예시를 익힌 다음 다른 연습 질문에도 내 말로 답해보세요.</div>':''}<div class="chapter-grid">${chapters.map((c,i)=>`<article class="panel pad"><span class="round-tag">${learningLabel(c)} · ${state.learningRecords[c.id]?.completed?'완료 ✓':'CHAPTER '+(i+1)}</span><h2 class="h2 gap-top">${esc(c.title)}</h2><p class="lead">${esc(c.goal)}</p><p class="tiny muted">${c.words.length}개 단어·표현 · 듣기 · 나의 답변 연습</p><button class="btn primary gap-top" data-act="learning-open" data-id="${c.id}">학습하기 →</button></article>`).join('')}</div><section class="panel pad section"><h2 class="h2">일정에도 함께 배정해요</h2><p class="lead">회화·전공 학습은 기초 학습과 번갈아 배정하고 토스·오픽 답변 틀은 각 시험의 앞부분에 배정합니다. 하루 목표 시간을 늘리지 않고 전체 기간을 조절합니다.</p><button class="btn gap-top" data-act="goto" data-to="planner">학습 일정 확인</button></section>${learningGroup==='templates'?`<section class="panel pad section"><h2 class="h2">공식 형식과 학습 안내</h2><div class="settings-list gap-top">${EXPANSION.speaking.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a>`).join('')}</div></section>`:''}`;
}
function learningLessonHTML(){
 const c=learningChapter(learningId);if(!c)return learningHTML();const r=learningRecord(),frames=c.template||c.patterns||[],slots=lessonSlots(c),exercise=c.practice||c.roleplay,example=c.example||{prompt:c.roleplay.prompt,ko:c.roleplay.ko,answer:c.roleplay.model},checks=c.checks||c.roleplay.checks;
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="learning">← 회화·전공·답변 틀</button><span class="pill">${learningLabel(c)}</span></div><section class="panel pad"><span class="eyebrow">WORDS TO YOUR OWN ANSWER</span><h1 class="h1">${esc(c.title)}</h1><p class="lead">${esc(c.goal)}</p>${c.steps||c.explanation?`<div class="callout gap-top"><h2 class="h3">먼저 기억해요</h2><ol>${(c.steps||c.explanation).map(p=>`<li>${esc(p)}</li>`).join('')}</ol></div>`:''}${c.id==='template-tos-photo'?photoHTML(LIBRARY.photos[0]):''}<h2 class="h2 gap-top">이 상황에서 쓰는 단어</h2><div class="vocab-list gap-top">${c.words.map(w=>`<article class="vocab-item"><strong lang="en">${esc(w.word)}</strong><p class="tiny muted">${esc(w.meaning)}</p><button class="btn small" data-act="speak" data-text="${attr(w.word)}">🔊 듣기</button></article>`).join('')}</div><button class="btn gap-top" data-act="learning-vocab">이 챕터 단어 퀴즈</button><h2 class="h2 gap-top">${c.template?'나만의 답변 틀 만들기':'바로 쓰는 문장'}</h2><div class="phrase-list gap-top">${frames.map(p=>`<article class="callout"><p class="strong" lang="en">${esc(p.en)}</p><p class="tiny muted">${esc(p.ko)}</p></article>`).join('')}</div>${slots.length?`<div class="template-slots gap-top">${slots.map(key=>`<label>${esc(key)} <input class="search" data-learning-slot="${attr(key)}" maxlength="120" value="${attr(r.slots[key]||'')}" placeholder="빈칸에 넣을 영어 표현"></label>`).join('')}</div><div class="callout gap-top"><h3 class="h3">내가 만든 문장</h3><p id="learning-preview" lang="en">${esc(filledLearningTemplate(c,r))}</p><button class="btn small gap-top" data-act="learning-listen">🔊 내 문장 듣기</button></div>`:''}${c.dialogue?`<h2 class="h2 gap-top">상황 대화 듣고 따라 하기</h2><div class="dialogue-list gap-top">${c.dialogue.map(line=>`<article class="dialogue-line ${line.speaker==='B'?'reply':''}"><span class="round-tag">${line.speaker}</span><div><p class="strong" lang="en">${esc(line.en)}</p><p class="tiny muted">${esc(line.ko)}</p><button class="btn small" data-act="speak" data-text="${attr(line.en)}">🔊 이 문장 듣기</button></div></article>`).join('')}</div>`:''}${c.quiz?`<h2 class="h2 gap-top">상황에 맞는 대답 고르기</h2><p class="quiz-question">${esc(c.quiz.prompt)}</p><div class="quiz-options">${c.quiz.options.map((x,i)=>`<button class="quiz-option ${r.selected===undefined?'':i===c.quiz.answer?'correct':i===r.selected?'wrong':''}" data-act="conversation-answer" data-choice="${i}">${esc(x)}</button>`).join('')}</div>${r.selected!==undefined?`<p class="quiz-feedback" role="status">${r.selected===c.quiz.answer?'정답이에요. ':'다시 익혀봐요. '}${esc(c.quiz.why)}</p>`:''}`:''}<h2 class="h2 gap-top">예시와 비교하고 응용하기</h2><div class="callout gap-top"><p lang="en">${esc(example.prompt)}</p><p class="tiny muted">${esc(example.ko)}</p><button class="btn small gap-top" data-act="learning-reveal">${learningRevealed?'예시 닫기':'예시 답변 보기'}</button>${learningRevealed?`<p class="gap-top" lang="en">${esc(example.answer)}</p><button class="btn small gap-top" data-act="speak" data-text="${attr(example.answer)}">🔊 예시 듣기</button>`:''}</div><h3 class="h3 gap-top">이번에는 내 말로 답해요</h3><div class="callout gap-top"><p class="english-sentence" lang="en">${esc(exercise.prompt)}</p><p class="muted">${esc(exercise.ko)}</p></div><div class="button-row gap-top"><button class="btn" data-act="speak" data-text="${attr(exercise.prompt)}">🔊 질문 듣기</button><button class="btn" data-act="learning-timer">1분 말하기 연습</button></div><p id="study-timer" class="tiny muted" role="status">소리 내어 말한 뒤 필요한 내용을 메모하세요.</p><label class="strong" for="learning-notes">나의 답변·메모</label><textarea id="learning-notes" class="search gap-top" rows="5" maxlength="1500" placeholder="내 경험이나 전공 상황에 맞춘 답변을 적어보세요.">${esc(r.notes)}</textarea><fieldset class="self-check gap-top"><legend>스스로 확인해요</legend>${checks.map((text,i)=>`<label><input type="checkbox" data-learning-check="${i}" ${r.checks[i]?'checked':''}>${esc(text)}</label>`).join('')}</fieldset><button class="btn primary gap-top" data-act="learning-complete" ${r.checks.every(Boolean)&&(!c.quiz||r.selected===c.quiz.answer)?'':'disabled'}>${r.completed?'학습 완료 ✓':'이 챕터 학습 완료'}</button><p id="learning-message" class="tiny muted" role="status">${c.quiz?'상황 퀴즈를 맞히고 자기 점검을 마치면 완료할 수 있어요.':'체크 항목을 모두 확인하면 학습을 완료할 수 있어요.'} 말하기 자동 채점은 제공하지 않습니다.</p></section>`;
}
function openLearning(id){if(!learningChapter(id))return;stopActivities();learningId=id;learningRevealed=false;const c=learningChapter(id);learningGroup=c.id.startsWith('conv-')?'conversation':c.track?'templates':'major';screen='learninglesson';render();window.scrollTo({top:0,behavior:'instant'})}
function handleLearningAction(a,b){
 if(a==='learning-filter'){if(['conversation','major','templates'].includes(b.dataset.group)){learningGroup=b.dataset.group;screen='learning';render()}return true}
 if(a==='learning-open'){openLearning(b.dataset.id);return true}
 if(a==='learning-reveal'){learningRevealed=!learningRevealed;render();return true}
 if(a==='learning-vocab'){const c=learningChapter(learningId);startWordQuiz(c.id.startsWith('conv-')?'conversation':c.track||'major',c.words.map(w=>w.word.toLowerCase()));return true}
 if(a==='learning-listen'){const c=learningChapter(learningId),r=learningRecord();if(lessonSlots(c).some(key=>!r.slots[key]?.trim())){document.getElementById('learning-message').textContent='문장 틀의 빈칸에 영어 표현을 넣어 주세요.';return true}speak(filledLearningTemplate(c,r));return true}
 if(a==='learning-timer'){startStudyTimer(60);return true}
 if(a==='conversation-answer'){const c=learningChapter(learningId),n=Number(b.dataset.choice);if(c?.quiz&&Number.isInteger(n)&&n>=0&&n<c.quiz.options.length){const r=learningRecord();r.selected=n;if(n!==c.quiz.answer)r.completed=false;save();render()}return true}
 if(a==='learning-complete'){const c=learningChapter(learningId),r=learningRecord();if(r.checks.every(Boolean)&&(!c.quiz||r.selected===c.quiz.answer)){r.completed=true;r.completedAt=dateStr();save();stopActivities();render()}return true}
 return false;
}
app.addEventListener('input',event=>{const t=event.target;if(t.id==='learning-notes'){learningRecord().notes=t.value.slice(0,1500);save()}if(t.dataset.learningSlot!==undefined){const c=learningChapter(learningId);if(!lessonSlots(c).includes(t.dataset.learningSlot))return;learningRecord().slots[t.dataset.learningSlot]=t.value.slice(0,120);save();const preview=document.getElementById('learning-preview');if(preview)preview.textContent=filledLearningTemplate(c,learningRecord())}});
app.addEventListener('change',event=>{const t=event.target;if(t.dataset.learningCheck!==undefined){const n=Number(t.dataset.learningCheck);if(Number.isInteger(n)&&n>=0&&n<3){const r=learningRecord();r.checks[n]=t.checked;if(!r.checks.every(Boolean))r.completed=false;save();render()}}if(t.id==='major-field'&&Object.hasOwn(EXPANSION.major,t.value)){state.plan.majorField=t.value;state.cardSessions={};save();render()}});

let plannerDate=dateStr(),plannerMonth=dateStr().slice(0,7),chapterTrack='toeic',chapterId='t1';
function validDay(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const d=new Date(value+'T12:00:00');return !Number.isNaN(+d)&&dateStr(d)===value}
function dateAdd(value,days){const d=new Date(value+'T12:00:00');d.setDate(d.getDate()+days);return dateStr(d)}
function defaultPlan(){return {start:dateStr(),minutes:30,weekendMinutes:60,autoCarry:true,days:[0,1,2,3,4,5,6],focus:'speaking',includeConversation:true,includeMajor:true,majorField:'power',targets:{toeic:'',tos:'',opic:''}}}
function normalizeUpgrade(x,safe){
 const p=x.plan;if(p&&typeof p==='object'){
  if(validDay(p.start))safe.plan.start=p.start;
  if([30,60,90].includes(p.minutes))safe.plan.minutes=p.minutes;
  if([30,60,90].includes(p.weekendMinutes))safe.plan.weekendMinutes=p.weekendMinutes;
  if(typeof p.autoCarry==='boolean')safe.plan.autoCarry=p.autoCarry;
  for(const key of ['includeConversation','includeMajor'])if(typeof p[key]==='boolean')safe.plan[key]=p[key];
  if(Object.hasOwn(EXPANSION.major,p.majorField))safe.plan.majorField=p.majorField;
  const days=Array.isArray(p.days)?[...new Set(p.days.filter(n=>Number.isInteger(n)&&n>=0&&n<=6))]:[];if(days.length)safe.plan.days=days;
  if(['balanced','toeic','speaking'].includes(p.focus))safe.plan.focus=p.focus;
  for(const t of ['toeic','tos','opic'])if(typeof p.targets?.[t]==='string')safe.plan.targets[t]=p.targets[t].slice(0,40);
 }
 if(Array.isArray(x.customTasks))safe.customTasks=x.customTasks.filter(t=>t&&/^custom-[a-z0-9-]{1,60}$/.test(t.id)&&validDay(t.date)&&typeof t.title==='string').slice(0,500).map(t=>({id:t.id,date:t.date,title:t.title.slice(0,100),minutes:Number.isInteger(t.minutes)&&t.minutes>=5&&t.minutes<=180?t.minutes:15,done:t.done===true,doneAt:validDay(t.doneAt)?t.doneAt:''}));
 if(x.taskMoves&&typeof x.taskMoves==='object')for(const [id,day] of Object.entries(x.taskMoves).slice(0,1500))if(validDay(day)&&validTaskId(id))safe.taskMoves[id]=day;
 if(x.wordTaskDone&&typeof x.wordTaskDone==='object')for(const [id,day] of Object.entries(x.wordTaskDone).slice(0,800))if(/^vocab:\d{4}-\d{2}-\d{2}$/.test(id)&&validDay(day))safe.wordTaskDone[id]=day;
 if(Array.isArray(x.customWords))safe.customWords=x.customWords.filter(w=>w&&validWord(w.word)&&typeof w.meaning==='string').slice(0,1000).map(w=>({word:w.word.trim().toLowerCase(),meaning:w.meaning.slice(0,100),category:['basic','toeic','tos','opic','conversation','major'].includes(w.category)?w.category:'custom'}));
 if(x.wordStats&&typeof x.wordStats==='object')for(const [w,r] of Object.entries(x.wordStats).slice(0,1500))if(validWord(w)&&r&&typeof r==='object')safe.wordStats[w]={attempts:boundedCount(r.attempts),correct:Math.min(boundedCount(r.correct),boundedCount(r.attempts)),level:Number.isInteger(r.level)&&r.level>=0&&r.level<=5?r.level:0,due:validDay(r.due)?r.due:dateStr(),missed:r.missed===true,source:WORD_SOURCES.some(([key])=>key===r.source)?r.source:'all'};
 if(Array.isArray(x.wordHistory))safe.wordHistory=x.wordHistory.filter(r=>r&&validDay(r.date)&&Number.isInteger(r.total)&&r.total>0&&r.total<=20&&Number.isInteger(r.correct)&&r.correct>=0&&r.correct<=r.total).slice(-100).map(r=>({date:r.date,total:r.total,correct:r.correct,mode:typeof r.mode==='string'?r.mode.slice(0,20):'mixed'}));
 if(x.wordPrefs&&typeof x.wordPrefs==='object'){
  if(WORD_SOURCES.some(([k])=>k===x.wordPrefs.source))safe.wordPrefs.source=x.wordPrefs.source;
  if(WORD_MODES.some(([k])=>k===x.wordPrefs.mode))safe.wordPrefs.mode=x.wordPrefs.mode;
  if([5,10,20].includes(x.wordPrefs.size))safe.wordPrefs.size=x.wordPrefs.size;
 }
 for(const [source] of WORD_SOURCES){const d=x.cardSessions?.[source];if(d&&typeof d==='object'&&validDay(d.day))safe.cardSessions[source]={day:d.day,cursor:boundedCount(d.cursor),queue:Array.isArray(d.queue)?d.queue.filter(validWord).slice(0,8):[],retry:Array.isArray(d.retry)?d.retry.filter(validWord).slice(0,3000):[],draws:boundedCount(d.draws),known:boundedCount(d.known)};}
 safe.mockHistory=normalizeMockHistory(x.mockHistory);
 safe.learningRecords=normalizeLearningRecords(x.learningRecords);
 return safe;
}
function boundedCount(n){return Number.isInteger(n)&&n>0?Math.min(n,100000):0}
function validTaskId(id){if(/^foundation:\d{1,2}$/.test(id))return +id.split(':')[1]<72;if(/^vocab:\d{4}-\d{2}-\d{2}$/.test(id))return validDay(id.slice(6));if(id.startsWith('learning:'))return !!learningChapter(id.slice(9));if(id.startsWith('exam:'))return Object.values(EXTRA.tracks).some(t=>t.units.some(u=>u.id===id.slice(5)));return false}
function orderedExamUnits(track){return ADVANCED.chapters[track].flatMap(c=>c.units.map(id=>EXTRA.tracks[track].units.find(u=>u.id===id)))}
function buildStudyPlan(){
 const p=state.plan,result=[],general=[],base=Array.from({length:72},(_,i)=>({id:'foundation:'+i,type:'foundation',ref:i,title:'기초 '+(i+1)+' · '+LESSONS[i].title,minutes:10}));
 const conversations=p.includeConversation?EXPANSION.conversation.chapters.map(c=>learningTask(c)):[],majors=p.includeMajor?majorChapters().map(c=>learningTask(c)):[];
 const groups=[base,conversations,base,majors];while(groups.some(q=>q.length))for(const q of groups)if(q.length)general.push(q.shift());
 const queues=Object.fromEntries(['toeic','tos','opic'].map(t=>[t,[...EXPANSION.speaking.chapters.filter(c=>c.track===t).map(c=>learningTask(c)),...orderedExamUnits(t).map(u=>({id:'exam:'+u.id,type:'exam',track:t,ref:EXTRA.tracks[t].units.indexOf(u),title:EXTRA.tracks[t].title+' · '+u.title,minutes:10}))]]));
 const positions={toeic:0,tos:0,opic:0},rotation=p.focus==='toeic'?['toeic','toeic','tos','toeic','opic']:p.focus==='speaking'?['tos','opic','toeic','tos','opic']:['toeic','tos','opic'];let gi=0,turn=0,day=p.start;
 for(let n=0;n<1460&&(gi<general.length||Object.keys(queues).some(t=>positions[t]<queues[t].length));n++,day=dateAdd(day,1)){
  if(!p.days.includes(new Date(day+'T12:00:00').getDay()))continue;
  const budget=dayBudget(day,p),baseSlots=budget===90?3:budget===60?2:1,examSlots=budget===90?4:budget===60?2:1,wordBudget=budget===30?10:20;
  result.push({id:'vocab:'+day,date:day,type:'vocab',title:'오늘의 단어 학습·퀴즈',minutes:wordBudget});
  for(let i=0;i<baseSlots&&gi<general.length;i++)result.push({...general[gi++],date:day});
  for(let i=0;i<examSlots;i++){let track;for(let k=0;k<rotation.length;k++){const t=rotation[turn++%rotation.length];if(positions[t]<queues[t].length){track=t;break}}if(!track)break;result.push({...queues[track][positions[track]++],date:day})}
 }
 return carryStudyTasks(result.map(t=>({...t,date:state.taskMoves[t.id]||t.date})).concat(state.customTasks.map(t=>({...t,type:'custom'}))));
}
function learningTask(c){return {id:'learning:'+c.id,type:'learning',ref:c.id,title:learningLabel(c)+' · '+c.title,minutes:10}}

function dayBudget(day,plan=state.plan){const n=new Date(day+'T12:00:00').getDay();return n===0||n===6?plan.weekendMinutes:plan.minutes}
function dailyWordGoal(day){return dayBudget(day)>=60?20:10}
function taskCompletionDay(t){if(t.type==='learning')return state.learningRecords[t.ref]?.completedAt;if(t.type==='foundation')return state.completed[t.ref];if(t.type==='exam')return state.examRecords[EXTRA.tracks[t.track].units[t.ref].id]?.doneAt;return t.type==='vocab'?state.wordTaskDone[t.id]:t.doneAt}
function taskOrder(a,b){return a.date.localeCompare(b.date)||({vocab:0,foundation:1,learning:1,exam:2,custom:3}[a.type]-{vocab:0,foundation:1,learning:1,exam:2,custom:3}[b.type])}
function carryStudyTasks(tasks,today=dateStr()){
 if(!state.plan.autoCarry)return tasks.sort(taskOrder);
 const ready=[],waiting=[],used=new Map();
 const reserve=t=>{ready.push(t);used.set(t.date,(used.get(t.date)||0)+t.minutes)};
 for(const t of tasks){
  if(t.type==='custom'){reserve(t);continue}
  const done=taskDone(t),completed=taskCompletionDay(t),plannedDate=t.date;
  if(done){reserve({...t,plannedDate,date:validDay(completed)?completed:t.date});continue}
  // User-selected future dates remain fixed. Missed tasks enter the carry queue.
  if(state.taskMoves[t.id]&&t.date>=today){reserve({...t,plannedDate});continue}
  waiting.push({...t,plannedDate});
 }
 waiting.sort(taskOrder);
 for(const t of waiting){
  let day=t.plannedDate<today?today:t.plannedDate;
  for(let n=0;n<10000;n++,day=dateAdd(day,1)){
   if(!state.plan.days.includes(new Date(day+'T12:00:00').getDay()))continue;
   if((used.get(day)||0)+t.minutes>dayBudget(day))continue;
   reserve({...t,date:day,carriedFrom:t.plannedDate<today?t.plannedDate:'',shifted:day!==t.plannedDate});break;
  }
 }
 return ready.sort(taskOrder);
}
let lastPlannerDay=dateStr();
function updatePlannerDate(){const today=dateStr();if(today===lastPlannerDay)return false;if(plannerDate===lastPlannerDay){plannerDate=today;plannerMonth=today.slice(0,7)}lastPlannerDay=today;return true}
function refreshPlannerDay(){const isEditing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);if(!isEditing&&updatePlannerDate()&&['home','planner'].includes(screen))render()}
window.addEventListener('focus',refreshPlannerDay);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshPlannerDay()});
setInterval(refreshPlannerDay,60000);

function taskDone(t){return t.type==='learning'?!!state.learningRecords[t.ref]?.completed:t.type==='foundation'?!!state.completed[t.ref]:t.type==='exam'?!!state.examRecords[EXTRA.tracks[t.track].units[t.ref].id]?.completed:t.type==='vocab'?!!state.wordTaskDone[t.id]:!!t.done}
function todaySummary(day=dateStr()){const tasks=buildStudyPlan().filter(t=>t.date===day);return {tasks,done:tasks.filter(taskDone).length,total:tasks.length}}
function taskListHTML(tasks,{move=true}={}){
 if(!tasks.length)return '<div class="empty">이 날짜에 예정된 학습이 없어요. 휴식하거나 자유롭게 단어를 복습해보세요.</div>';
 return `<div class="task-list">${tasks.map(t=>`<article class="task-row ${taskDone(t)?'task-done':''}"><div class="task-status" aria-label="${taskDone(t)?'완료':'예정'}">${taskDone(t)?'✓':'○'}</div><div class="task-copy"><div class="tiny muted">${esc(t.date)} · 예상 ${t.minutes}분${t.carriedFrom?` · <span class="carry-label">${t.carriedFrom} 미완료 이월</span>`:t.shifted?' · 일정 조정':''}</div><strong>${esc(t.title)}</strong><div class="button-row gap-top"><button class="btn small ${taskDone(t)?'':'primary'}" data-act="plan-open" data-id="${attr(t.id)}">${t.type==='custom'?(taskDone(t)?'완료 취소':'완료 표시'):(taskDone(t)?'다시 학습':'시작하기')}</button>${t.type==='custom'?`<button class="btn small" data-act="plan-delete" data-id="${attr(t.id)}">삭제</button>`:''}${move&&(!taskDone(t)||t.type==='custom')?`<label class="tiny muted">날짜 변경 <input class="date-mini" type="date" value="${t.date}" data-task-move="${attr(t.id)}" aria-label="${attr(t.title)} 날짜 변경"></label>`:''}</div></div></article>`).join('')}</div>`;
}
function calendarHTML(){
 const first=plannerMonth+'-01',start=dateAdd(first,-((new Date(first+'T12:00:00').getDay()+6)%7)),tasks=buildStudyPlan(),byDay=new Map(),moved=new Map();for(const t of tasks)if(t.carriedFrom)moved.set(t.carriedFrom,(moved.get(t.carriedFrom)||0)+1);for(const t of tasks){if(!byDay.has(t.date))byDay.set(t.date,[]);byDay.get(t.date).push(t)}
 return `<div class="calendar-head"><button class="btn small" data-act="plan-month" data-step="-1" aria-label="이전 달">←</button><h2 class="h2">${plannerMonth.replace('-','년 ')}월</h2><button class="btn small" data-act="plan-month" data-step="1" aria-label="다음 달">→</button></div><div class="calendar-grid">${['월','화','수','목','금','토','일'].map(d=>`<span class="calendar-weekday">${d}</span>`).join('')}${Array.from({length:42},(_,i)=>{const day=dateAdd(start,i),list=byDay.get(day)||[],done=list.filter(taskDone).length;return `<button class="calendar-day ${day===plannerDate?'selected':''} ${day===dateStr()?'today':''} ${day.slice(0,7)!==plannerMonth?'outside':''}" data-act="plan-day" data-date="${day}" aria-label="${day}, 학습 ${list.length}개 중 ${done}개 완료"><span>${+day.slice(-2)}</span><small>${list.length?done+'/'+list.length:moved.has(day)?'이월 '+moved.get(day):'·'}</small></button>`}).join('')}</div>`;
}
function plannerHTML(){
 const tasks=buildStudyPlan(),selected=tasks.filter(t=>t.date===plannerDate),movedOut=tasks.filter(t=>t.carriedFrom===plannerDate),overdue=tasks.filter(t=>t.date<dateStr()&&!taskDone(t)),p=state.plan,end=tasks.filter(t=>t.type!=='custom').at(-1)?.date;
 return `<div class="page-head"><div><span class="eyebrow">MY STUDY PLANNER</span><h1 class="h1">나의 학습 일정</h1><p class="lead">기초·회화·전공·단어·시험 학습을 날짜별로 관리해요.</p></div><div class="button-row"><button class="btn" data-act="plan-today">오늘 보기</button><button class="btn primary" data-act="plan-settings">계획 설정</button></div></div><div class="planner-layout"><section class="panel pad"><p class="tiny muted">현재 계획: 평일 ${p.minutes}분 · 주말 ${p.weekendMinutes}분 · 주 ${p.days.length}일 · ${end?'마지막 예정일 '+end:''}</p>${calendarHTML()}<h3 class="h3 gap-top">${plannerDate} 학습</h3><p class="tiny muted">예상 ${selected.reduce((n,t)=>n+t.minutes,0)}분 / 목표 ${dayBudget(plannerDate)}분${selected.some(t=>t.carriedFrom)?' · 미완료 학습부터 이어갑니다.':''}</p><div class="gap-top">${taskListHTML(selected)}</div>${movedOut.length?`<div class="tip gap-top">이 날짜에 못 한 학습 ${movedOut.length}개는 이후 학습일에 배정했습니다.</div>${taskListHTML(movedOut.slice(0,5))}`:''}</section><aside id="plan-settings" class="panel pad"><h2 class="h2">학습 계획 설정</h2><div class="tip gap-top">주말 학습과 자동 이월을 함께 적용할 수 있어요.<button class="btn small gap-top" data-act="plan-weekend-enable">주말 확장·자동 이월 적용</button></div><form id="plan-form" class="settings-list gap-top"><label>시작일<input class="search" name="start" type="date" required value="${p.start}"></label><label>평일 학습 시간<select class="search" name="minutes">${[30,60,90].map(n=>`<option value="${n}" ${p.minutes===n?'selected':''}>${n}분</option>`).join('')}</select></label><label>주말 학습 시간<select class="search" name="weekendMinutes">${[30,60,90].map(n=>`<option value="${n}" ${p.weekendMinutes===n?'selected':''}>${n}분</option>`).join('')}</select></label><label>못 한 학습 처리<select class="search" name="autoCarry"><option value="1" ${p.autoCarry?'selected':''}>다음 학습일로 자동 이월</option><option value="0" ${!p.autoCarry?'selected':''}>원래 날짜에 두고 직접 이동</option></select></label><fieldset class="self-check"><legend>공부할 요일</legend><div class="weekday-picks">${['일','월','화','수','목','금','토'].map((d,i)=>`<label><input name="days" value="${i}" type="checkbox" ${p.days.includes(i)?'checked':''}>${d}</label>`).join('')}</div></fieldset><label>시험 학습 비중<select name="focus" class="search"><option value="balanced" ${p.focus==='balanced'?'selected':''}>세 시험 균형 있게</option><option value="toeic" ${p.focus==='toeic'?'selected':''}>토익 중심</option><option value="speaking" ${p.focus==='speaking'?'selected':''}>토스·오픽 중심</option></select></label><fieldset class="self-check"><legend>기초와 번갈아 학습할 과정</legend><label><input type="checkbox" name="includeConversation" value="1" ${p.includeConversation?'checked':''}>상황별 기초 회화</label><label><input type="checkbox" name="includeMajor" value="1" ${p.includeMajor?'checked':''}>전공·연구 영어</label></fieldset><label>전공 영어 분야<select class="search" name="majorField">${Object.entries(EXPANSION.major).map(([key,v])=>`<option value="${key}" ${p.majorField===key?'selected':''}>${v.title}</option>`).join('')}</select></label>${['toeic','tos','opic'].map(t=>`<label>${EXTRA.tracks[t].title} 목표 <input class="search" name="goal-${t}" maxlength="40" value="${attr(p.targets[t])}" placeholder="목표 점수·등급 또는 공부 목표"></label>`).join('')}<button class="btn primary">계획 저장 · 일정 다시 배정</button><p class="tiny muted">계획을 바꾸어도 학습 기록은 유지돼요. 자동 이월은 미완료 학습부터 하루 목표 시간 안에서 배정하고 이후 학습을 뒤로 나눕니다. 쉬는 날은 건너뛰며, 완료 기록과 직접 추가한 일정의 날짜는 유지합니다. 직접 옮긴 미래 일정은 고정되므로 목표 시간을 넘을 수 있어요. 시간은 예상치입니다.</p><p id="plan-message" role="status"></p></form><div class="small-line"></div><h3 class="h3">직접 일정 추가</h3><form id="task-form" class="settings-list gap-top"><label>할 일<input class="search" name="title" required maxlength="100" placeholder="예: 토익 교재 10쪽 복습"></label><label>날짜<input class="search" name="date" type="date" required value="${plannerDate}"></label><label>예상 시간(분)<input class="search" name="minutes" type="number" min="5" max="180" step="5" value="15" required></label><button class="btn">일정 추가</button></form></aside></div>${overdue.length?`<section class="panel pad section"><h2 class="h2">남아 있는 이전 학습 · ${overdue.length}개</h2><p class="lead">시작하거나 날짜를 바꿔서 이어가세요. 먼저 ${Math.min(10,overdue.length)}개를 표시합니다.</p><div class="gap-top">${taskListHTML(overdue.slice(0,10))}</div></section>`:''}`;
}
function homeHTML(){
 const {tasks,done,total}=todaySummary(),all=buildStudyPlan(),overdue=all.filter(t=>t.date<dateStr()&&!taskDone(t)),next=all.find(t=>t.date>dateStr()&&!taskDone(t)),wordCount=vocabBank().length,mastered=vocabBank().filter(w=>wordKnowledge(w.word).level>=3).length;
 return `<section class="panel dashboard-hero"><div><span class="eyebrow">YOUR ENGLISH, EVERY DAY</span><h1 class="h1">오늘의 한 걸음이<br>영어 실력이 되도록.</h1><p class="lead">${dateStr()} · 기초부터 단어, 토익·토스·오픽까지 나의 일정으로 학습해요.</p><div class="button-row gap-top"><button class="btn primary" data-act="goto" data-to="planner">학습 일정 열기 →</button><button class="btn" data-act="open-day" data-i="${nextIndex()}">기초 수업 이어하기</button></div></div><div class="daily-ring"><span class="soft-label">오늘의 계획</span><strong>${total?`${done}<small> / ${total}</small>`:'자유<small> 학습</small>'}</strong><div class="progress-track"><div class="progress-fill" style="width:${total?pct(done,total):0}%"></div></div><span class="tiny muted">${total?'계획에 맞춰 한 가지씩':'오늘은 자유 학습일이에요'}</span></div></section><div class="stat-grid"><div class="panel stat"><span class="soft-label">기초 과정</span><div class="stat-value">${completedCount()}<small> / 72</small></div></div><div class="panel stat"><span class="soft-label">익숙해진 단어</span><div class="stat-value">${mastered}<small> / ${wordCount}</small></div></div><div class="panel stat"><span class="soft-label">시험 연습 완료</span><div class="stat-value">${Object.values(state.examRecords).filter(r=>r.completed).length}<small> / ${Object.values(EXTRA.tracks).reduce((n,t)=>n+t.units.length,0)}</small></div></div></div><section class="section"><div class="section-header"><h2 class="h2">오늘 할 학습</h2><button class="btn small" data-act="goto" data-to="planner">전체 일정</button></div><p class="tiny muted">평일 ${state.plan.minutes}분 · 주말 ${state.plan.weekendMinutes}분${state.plan.autoCarry?' · 못 한 학습은 다음 학습일로 자동 이월':''}</p>${taskListHTML(tasks,{move:false})}${!tasks.length&&next?`<p class="tiny muted">다음 예정 학습은 ${next.date}입니다. 오늘도 단어 퀴즈와 자유 학습을 할 수 있어요.</p>`:''}</section>${overdue.length?`<section class="section"><h2 class="h2">이전 일정에서 이어서 · ${overdue.length}개</h2><div class="gap-top">${taskListHTML(overdue.slice(0,3),{move:false})}</div></section>`:''}<section class="panel pad section"><span class="eyebrow">EVERYDAY & PROFESSIONAL</span><h2 class="h2">상황별 회화에서 전공 이야기까지</h2><p class="lead">일상 회화 10개 상황, 전공·연구 9개 챕터, 토스·오픽 답변 틀 11개를 단어부터 내 답변까지 연습해요.</p><button class="btn primary gap-top" data-act="goto" data-to="learning">회화·전공·답변 틀 열기 →</button></section><section class="learn-grid section"><article class="panel pad"><span class="eyebrow">VOCABULARY</span><h2 class="h2">단어를 나의 것으로</h2><p class="lead">플래시카드·뜻 찾기·듣기·직접 입력. 복습할 단어 ${vocabPool('due').length}개가 기다리고 있어요.</p><button class="btn primary gap-top" data-act="word-quiz-start" data-source="daily">오늘의 단어 퀴즈</button></article><article class="panel pad"><span class="eyebrow">CHAPTER COURSES</span><h2 class="h2">시험도 챕터별로 차근차근</h2><p class="lead">토익 8챕터 · 토스 6챕터 · 오픽 8챕터. 핵심 표현과 단어를 익힌 뒤 연습해요.</p><button class="btn gap-top" data-act="goto" data-to="exams">시험 과정 열기 →</button></article></section>${reportHTML()}`;
}
function reportHTML(){const h=state.wordHistory,last=h.slice(-10),correct=last.reduce((n,r)=>n+r.correct,0),total=last.reduce((n,r)=>n+r.total,0),doneChapters=Object.entries(ADVANCED.chapters).flatMap(([t,cs])=>cs.filter(c=>c.units.every(id=>state.examRecords[id]?.completed)));return `<section class="panel pad section study-report"><h2 class="h2">나의 학습 리포트</h2><div class="stat-grid"><div><span class="tiny muted">최근 단어 퀴즈 정확도</span><p class="stat-value">${total?pct(correct,total)+'%':'—'}</p><span class="tiny muted">최근 ${last.length}회 · ${correct}/${total}문항</span></div><div><span class="tiny muted">완료한 시험 챕터</span><p class="stat-value">${doneChapters.length} / 22</p></div><div><span class="tiny muted">다시 익힐 단어</span><p class="stat-value">${vocabPool('weak').length}개</p><button class="btn small" data-act="word-quiz-start" data-source="weak">오답 단어 복습</button></div>${[["상황별 회화",EXPANSION.conversation.chapters],["전공·연구 영어",majorChapters()],["토스·오픽 답변 틀",EXPANSION.speaking.chapters]].map(([label,chapters])=>`<div><span class="tiny muted">${label}</span><p class="stat-value">${chapters.filter(c=>state.learningRecords[c.id]?.completed).length} / ${chapters.length}</p></div>`).join('')}</div></section>`}
function examOverviewHTML(){return `<div class="page-head"><div><span class="eyebrow">CHAPTER COURSES</span><h1 class="h1">시험별 전체 학습 과정</h1><p class="lead">핵심 개념 → 필수 단어 → 세 가지 연습. 챕터별로 완성해요.</p></div><button class="btn primary" data-act="goto" data-to="resources">공식 자료·모의연습 →</button></div><div class="exam-grid">${Object.entries(EXTRA.tracks).map(([t,x])=>{const cs=ADVANCED.chapters[t],done=x.units.filter(u=>state.examRecords[u.id]?.completed).length;return `<section class="panel pad exam-card"><span class="round-tag">${cs.length}챕터 · ${x.units.length}개 연습</span><h2 class="h1">${x.title}</h2><p class="lead">${x.description}</p><div class="progress-track gap-top"><div class="progress-fill" style="width:${pct(done,x.units.length)}%"></div></div><p class="tiny muted">${done} / ${x.units.length} 연습 완료${state.plan.targets[t]?' · 목표 '+esc(state.plan.targets[t]):''}</p><button class="btn primary" data-act="course-track" data-track="${t}">전체 챕터 보기 →</button></section>`}).join('')}</div><section class="panel pad section"><h2 class="h2">토스·오픽 답변 틀부터 시작해요</h2><p class="lead">사진 묘사·일상 응답·의견, 과거 경험·비교·역할극을 빈칸에 내 표현을 넣으며 연습해요.</p><button class="btn primary gap-top" data-act="learning-filter" data-group="templates">답변 틀 11챕터 열기</button></section><div class="tip gap-top">직접 만든 기초·입문 학습 과정입니다. 공식 기출·모의고사가 아니며 시험 점수나 말하기 등급을 자동 산출하지 않습니다.</div>`}
function chaptersHTML(){const track=EXTRA.tracks[chapterTrack];return `<div class="back-row"><button class="btn small" data-act="goto" data-to="exams">← 시험 선택</button></div><div class="page-head"><div><span class="eyebrow">${track.subtitle}</span><h1 class="h1">${track.title} 챕터별 학습</h1><p class="lead">각 챕터에서 표현과 단어를 익히고 연습을 마쳐보세요.</p></div></div><div class="chapter-grid">${ADVANCED.chapters[chapterTrack].map((c,i)=>{const done=c.units.filter(id=>state.examRecords[id]?.completed).length;return `<article class="panel pad"><span class="round-tag">CHAPTER ${i+1} · ${done}/${c.units.length} 완료</span><h2 class="h2 gap-top">${esc(c.title)}</h2><p class="lead">${esc(c.goal)}</p><div class="progress-track gap-top"><div class="progress-fill" style="width:${pct(done,c.units.length)}%"></div></div><button class="btn gap-top" data-act="course-chapter" data-track="${chapterTrack}" data-chapter="${c.id}">챕터 열기 →</button></article>`}).join('')}</div>`}
function chapterForUnit(track,index){return ADVANCED.chapters[track].find(c=>c.units.includes(EXTRA.tracks[track].units[index]?.id))}
function chapterHTML(){const c=ADVANCED.chapters[chapterTrack].find(c=>c.id===chapterId);return `<div class="back-row"><button class="btn small" data-act="course-track" data-track="${chapterTrack}">← 챕터 목록</button><span class="pill">${EXTRA.tracks[chapterTrack].title}</span></div><div class="panel pad"><span class="eyebrow">CHAPTER GUIDE</span><h1 class="h1">${esc(c.title)}</h1><p class="lead">${esc(c.goal)}</p><div class="callout gap-top"><h2 class="h3">먼저 기억해요</h2><ol>${c.guide.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>${chapterPhotoHTML(chapterTrack,c)}<h2 class="h2 gap-top">이 챕터의 필수 단어</h2><div class="vocab-list gap-top">${c.vocab.map(w=>`<article class="vocab-item"><strong>${esc(w.word)}</strong><p class="tiny muted">${esc(w.meaning)}</p><button class="btn small" data-act="speak" data-text="${attr(w.word)}">🔊 듣기</button></article>`).join('')}</div><button class="btn gap-top" data-act="chapter-vocab" data-track="${chapterTrack}" data-chapter="${c.id}">이 챕터 단어 퀴즈</button><h2 class="h2 gap-top">실전으로 연결하는 연습</h2><div class="task-list gap-top">${c.units.map((id,n)=>{const index=EXTRA.tracks[chapterTrack].units.findIndex(u=>u.id===id),u=EXTRA.tracks[chapterTrack].units[index];return `<article class="task-row"><span class="task-status">${state.examRecords[id]?.completed?'✓':n+1}</span><div class="task-copy"><strong>${esc(u.title)}</strong><p class="tiny muted">${esc(u.kind)}</p><button class="btn primary small" data-act="exam-open" data-track="${chapterTrack}" data-unit="${index}">연습하기 →</button></div></article>`}).join('')}</div></div>`}
function openCourseUnit(track,index){stopActivities();examTrack=track;examUnit=index;examRevealed=false;listenTranscript=false;screen='exam';render();window.scrollTo({top:0,behavior:'instant'})}
function handlePlannerAction(a,b){
 if(a==='plan-weekend-enable'){state.plan.days=[...new Set([...state.plan.days,0,6])].sort();state.plan.weekendMinutes=60;state.plan.autoCarry=true;save();render();document.getElementById('plan-message').textContent='주말 60분과 자동 이월을 적용했어요. 기존 진도는 유지됩니다.';return true}
 if(a==='plan-settings'){document.getElementById('plan-settings')?.scrollIntoView({behavior:'smooth',block:'start'});return true}
 if(a==='plan-day'){plannerDate=b.dataset.date;render();return true}
 if(a==='plan-today'){plannerDate=dateStr();plannerMonth=plannerDate.slice(0,7);render();return true}
 if(a==='plan-month'){const d=new Date(plannerMonth+'-01T12:00:00');d.setMonth(d.getMonth()+Number(b.dataset.step));plannerMonth=dateStr(d).slice(0,7);render();return true}
 if(a==='plan-delete'){if(confirm('이 직접 추가한 일정을 삭제할까요?')){state.customTasks=state.customTasks.filter(t=>t.id!==b.dataset.id);save();render()}return true}
 if(a==='plan-open'){const t=buildStudyPlan().find(t=>t.id===b.dataset.id);if(!t)return true;if(t.type==='learning')openLearning(t.ref);else if(t.type==='foundation')openDay(t.ref);else if(t.type==='exam')openCourseUnit(t.track,t.ref);else if(t.type==='vocab')startWordQuiz('daily',null,t.id,t.date);else{const r=state.customTasks.find(r=>r.id===t.id);r.done=!r.done;r.doneAt=r.done?dateStr():'';save();render()}return true}
 if(a==='course-track'){if(!EXTRA.tracks[b.dataset.track])return true;stopActivities();chapterTrack=b.dataset.track;screen='chapters';render();window.scrollTo({top:0,behavior:'instant'});return true}
 if(a==='course-chapter'){if(!ADVANCED.chapters[b.dataset.track]?.some(c=>c.id===b.dataset.chapter))return true;stopActivities();photoRevealed=false;chapterTrack=b.dataset.track;chapterId=b.dataset.chapter;screen='chapter';render();window.scrollTo({top:0,behavior:'instant'});return true}
 if(a==='chapter-vocab'){const c=ADVANCED.chapters[b.dataset.track]?.find(c=>c.id===b.dataset.chapter);if(c)startWordQuiz(b.dataset.track,c.vocab.map(w=>w.word));return true}
 return false;
}
app.addEventListener('submit',event=>{
 if(event.target.id==='plan-form'){
  event.preventDefault();const f=new FormData(event.target),days=f.getAll('days').map(Number);if(!days.length){document.getElementById('plan-message').textContent='공부할 요일을 하나 이상 골라주세요.';return}
  const start=f.get('start'),minutes=Number(f.get('minutes')),weekendMinutes=Number(f.get('weekendMinutes')),autoCarry=f.get('autoCarry')==='1',focus=f.get('focus');if(!validDay(start)||![30,60,90].includes(minutes)||![30,60,90].includes(weekendMinutes)||!['balanced','toeic','speaking'].includes(focus))return;
  state.plan={start,minutes,weekendMinutes,autoCarry,days,focus,includeConversation:f.get('includeConversation')==='1',includeMajor:f.get('includeMajor')==='1',majorField:Object.hasOwn(EXPANSION.major,f.get('majorField'))?f.get('majorField'):'power',targets:Object.fromEntries(['toeic','tos','opic'].map(t=>[t,String(f.get('goal-'+t)||'').slice(0,40)]))};state.cardSessions={};save();plannerDate=start;plannerMonth=start.slice(0,7);render();document.getElementById('plan-message').textContent='계획을 저장하고 일정을 배정했어요.';
 }
 if(event.target.id==='task-form'){
  event.preventDefault();const f=new FormData(event.target),title=String(f.get('title')||'').trim(),date=f.get('date'),minutes=Number(f.get('minutes'));if(!title||!validDay(date)||!Number.isInteger(minutes)||minutes<5||minutes>180)return;
  if(state.customTasks.length>=500){alert('직접 추가한 일정은 500개까지 저장할 수 있어요.');return}state.customTasks.push({id:'custom-'+crypto.randomUUID(),title:title.slice(0,100),date,minutes,done:false,doneAt:''});save();plannerDate=date;plannerMonth=date.slice(0,7);render();
 }
});
app.addEventListener('change',event=>{const t=event.target;if(t.dataset.taskMove){if(!validDay(t.value))return;const custom=state.customTasks.find(r=>r.id===t.dataset.taskMove);if(custom)custom.date=t.value;else if(validTaskId(t.dataset.taskMove))state.taskMoves[t.dataset.taskMove]=t.value;save();render()}});

let flashcardIndex=0,flashcardFace=false,wordQuiz=null,wordQuizMessage='',editingWord='';
function validWord(w){return typeof w==='string'&&/^[a-zA-Z][a-zA-Z '\u2019-]{0,59}$/.test(w.trim())}
function vocabBank(){
 const map=new Map(),add=(w,source)=>{const word=w.word.toLowerCase();if(!map.has(word))map.set(word,{word,meaning:w.meaning,sources:[],meanings:{}});const entry=map.get(word);if(!entry.sources.includes(source))entry.sources.push(source);entry.meanings[source]=w.meaning};
 for(const [word,meaning] of allVocab)add({word,meaning},'basic');
 for(const [track,chapters] of Object.entries(ADVANCED.chapters))for(const c of chapters)for(const w of c.vocab)add(w,track);
 for(const [track,words] of Object.entries(LIBRARY.words))for(const w of words)add(w,track);
 for(const c of EXPANSION.conversation.chapters)for(const w of c.words)add(w,'conversation');
 for(const c of majorChapters())for(const w of c.words)add(w,'major');
 for(const c of EXPANSION.speaking.chapters)for(const w of c.words)add(w,c.track);
 for(const w of state.customWords){add(w,'custom');if(w.category&&w.category!=='custom')add(w,w.category)}
 return [...map.values()];
}
function contextualWords(words,source){return words.map(w=>({...w,meaning:w.meanings?.[source]||(['daily','due','weak'].includes(source)?w.meanings?.[wordKnowledge(w.word).source]:null)||w.meaning}))}

function wordKnowledge(word){const r=Object.hasOwn(state.wordStats,word)?state.wordStats[word]:null,old=Object.hasOwn(state.srs,word)?state.srs[word]:null;return r||{attempts:0,correct:0,level:old?.level||0,due:old?.due||'',missed:false}}
function studyWordOffset(day){const p=state.plan,a=p.start.split('-').map(Number),b=day.split('-').map(Number),diff=Math.max(0,Math.floor((Date.UTC(b[0],b[1]-1,b[2])-Date.UTC(a[0],a[1]-1,a[2]))/86400000));const first=new Date(p.start+'T12:00:00').getDay(),count=d=>(d===0||d===6?p.weekendMinutes:p.minutes)>=60?20:10,weekly=p.days.reduce((n,d)=>n+count(d),0);let offset=Math.floor(diff/7)*weekly;for(let i=0;i<diff%7;i++){const d=(first+i)%7;if(p.days.includes(d))offset+=count(d)}return offset}

function vocabPool(source=state.wordPrefs.source,day=dateStr()){
 const bank=contextualWords(vocabBank(),source);
 if(source==='all')return bank;
 if(source==='daily'){const size=dailyWordGoal(day),start=studyWordOffset(day)%bank.length,due=bank.filter(w=>{const r=wordKnowledge(w.word);return r.due&&r.due<=dateStr()}).sort((a,b)=>wordKnowledge(a.word).due.localeCompare(wordKnowledge(b.word).due)).slice(0,Math.floor(size/2)),picked=[...due],used=new Set(due.map(w=>w.word));for(let i=0;i<bank.length&&picked.length<size;i++){const w=bank[(start+i)%bank.length];if(!used.has(w.word)){picked.push(w);used.add(w.word)}}return picked}
 if(source==='starred')return bank.filter(w=>state.starred.includes(w.word));
 if(source==='weak')return bank.filter(w=>wordKnowledge(w.word).missed);
 if(source==='due')return bank.filter(w=>{const r=wordKnowledge(w.word);return r.due&&r.due<=dateStr()}).sort((a,b)=>wordKnowledge(a.word).due.localeCompare(wordKnowledge(b.word).due));
 return bank.filter(w=>w.sources.includes(source));
}
function applyWordResult(word,correct,isQuiz,source=state.wordPrefs.source){
 const old=wordKnowledge(word),r={...old};r.attempts=old.attempts+(isQuiz?1:0);r.correct=old.correct+(isQuiz&&correct?1:0);r.level=correct?Math.min(5,old.level+(!old.due||old.due<=dateStr()?1:0)):0;r.missed=!correct;if(WORD_SOURCES.some(([k])=>k===source))r.source=source;
 const intervals=[0,1,3,7,14,30];r.due=correct&&old.due&&old.due>dateStr()?old.due:futureDate(intervals[r.level]);state.wordStats[word]=r;if(allVocab.has(word))state.srs[word]={level:r.level,due:r.due};save();
}
function vocabListHTML(){let rows=vocabPool();const query=wordSearch.toLowerCase().trim();if(query)rows=rows.filter(w=>w.word.includes(query)||w.meaning.includes(query));if(!rows.length)return '<div class="empty">조건에 맞는 단어가 없어요. 단어 묶음을 바꾸거나 직접 추가해보세요.</div>';return `<div class="vocab-list">${rows.slice(0,200).map(w=>{const r=wordKnowledge(w.word);return `<article class="vocab-item"><div class="vocab-item-head"><strong lang="en">${esc(w.word)}</strong><button class="btn small" data-act="star" data-word="${attr(w.word)}" aria-label="${attr(w.word)} 즐겨찾기">${state.starred.includes(w.word)?'★':'☆'}</button></div><p class="muted">${wordMeaningsVisible?esc(w.meaning):'뜻을 가렸어요'}</p><span class="tiny muted">${r.level>=3?'익숙해요':r.missed?'다시 익히기':r.level?'복습 중':'새 단어'}${r.due?' · 복습 '+r.due:''}</span><div class="button-row gap-top"><button class="btn small" data-act="speak" data-text="${attr(w.word)}">🔊 듣기</button>${w.sources.includes('custom')?`<button class="btn small" data-act="word-edit" data-word="${attr(w.word)}">수정</button><button class="btn small" data-act="word-delete" data-word="${attr(w.word)}">삭제</button>`:''}</div></article>`}).join('')}</div>${rows.length>200?'<p class="tiny muted">먼저 200개를 표시합니다. 검색하면 다른 단어도 찾을 수 있어요.</p>':''}`}
function vocabHTML(){
 const pool=vocabPool(),bank=vocabBank(),mastered=bank.filter(w=>wordKnowledge(w.word).level>=3).length,edited=state.customWords.find(w=>w.word===editingWord);
 return `<div class="page-head"><div><span class="eyebrow">MY WORD STUDIO</span><h1 class="h1">단어 학습실</h1><p class="lead">보고, 듣고, 떠올리고, 직접 쓰면서 내 단어로 만들어요.</p></div><span class="pill">${bank.length}개 중 ${mastered}개 익숙해짐</span></div><div class="panel pad"><div class="word-controls"><label>단어 묶음<select id="word-source" class="search">${WORD_SOURCES.map(([key,title])=>`<option value="${key}" ${state.wordPrefs.source===key?'selected':''}>${title}</option>`).join('')}</select></label><label>퀴즈 방식<select id="word-mode" class="search">${WORD_MODES.map(([key,title])=>`<option value="${key}" ${state.wordPrefs.mode===key?'selected':''}>${title}</option>`).join('')}</select></label><label>문제 수<select id="word-size" class="search">${[5,10,20].map(n=>`<option value="${n}" ${state.wordPrefs.size===n?'selected':''}>${n}문제</option>`).join('')}</select></label><button class="btn primary" data-act="word-quiz-start" ${pool.length?'':'disabled'}>단어장 퀴즈 시작</button></div><p class="tiny muted">현재 묶음 ${pool.length}개 · 요청한 문제 수보다 단어가 적으면 가능한 수만큼 출제됩니다.</p>${wordQuizMessage?`<p class="tip" role="status">${esc(wordQuizMessage)}</p>`:''}</div>${wordBooksHTML()}${flashcardHTML()}<section class="panel pad section"><div class="card-header"><h2 class="h2">단어 목록</h2><button class="btn small" data-act="toggle-word-meanings">뜻 ${wordMeaningsVisible?'가리기':'보기'}</button></div><input id="searchWords" data-search="words" class="search" aria-label="단어 검색" value="${attr(wordSearch)}" placeholder="영어 또는 한글 뜻 검색"><div id="vocab-results" class="gap-top">${vocabListHTML()}</div></section><section class="panel pad section"><h2 class="h2">${edited?'내 단어 수정':'나만의 단어 추가'}</h2><form id="custom-word-form" class="word-controls gap-top"><label>영어 단어·표현<input class="search" name="word" required maxlength="60" value="${attr(edited?.word||'')}" placeholder="예: take a walk" ${edited?'readonly':''}></label><label>뜻<input class="search" name="meaning" required maxlength="100" value="${attr(edited?.meaning||'')}" placeholder="예: 산책하다"></label><label>단어장 분류<select class="search" name="category">${[['custom','나만의 단어'],['basic','기본 단어'],['toeic','토익'],['tos','토스'],['opic','오픽'],['conversation','회화'],['major','전공·연구']].map(([key,title])=>`<option value="${key}" ${edited?.category===key?'selected':''}>${title}</option>`).join('')}</select></label><button class="btn primary">${edited?'수정 저장':'단어 추가'}</button>${edited?'<button class="btn" type="button" data-act="word-edit-cancel">수정 취소</button>':''}</form><p id="custom-word-message" class="tiny muted" role="status">직접 추가한 단어도 내 단어 묶음에서 카드와 퀴즈로 학습할 수 있어요.</p></section>${reportHTML()}`;
}
function startWordQuiz(source=state.wordPrefs.source,words=null,taskId='',day=dateStr()){
 const pool=words?(WORD_SOURCES.some(([key])=>key===source)?vocabPool(source,day):vocabBank()).filter(w=>words.includes(w.word)):vocabPool(source,day);
 if(!pool.length){wordQuizMessage='이 묶음에는 출제할 단어가 없어요. 다른 묶음을 선택하거나 단어를 추가해 주세요.';screen='vocab';render();return}
 stopActivities();const selected=seededShuffle(pool,Date.now()%2147483647).slice(0,state.wordPrefs.size),bank=vocabBank();
 const questions=selected.map((w,i)=>{const type=state.wordPrefs.mode==='mixed'?['meaning','reverse','listening','typing'][i%4]:state.wordPrefs.mode,answer=type==='meaning'||type==='listening'?w.meaning:w.word,other=bank.map(x=>type==='meaning'||type==='listening'?x.meaning:x.word);return {word:w.word,meaning:w.meaning,type,answer,options:type==='typing'?[]:makeOptions(answer,other,i+Date.now()%10000)}});
 wordQuiz={questions,pos:0,selected:null,score:0,finished:false,wrong:[],taskId:taskId||(day===dateStr()?'vocab:'+day:''),source};screen='wordquiz';render();window.scrollTo({top:0,behavior:'instant'});
}
function normalAnswer(s){return String(s).toLowerCase().replace(/\u2019/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ')}
function submitWordAnswer(value){
 const q=wordQuiz;if(!q||q.finished||q.selected!==null)return;const cur=q.questions[q.pos];q.selected=value;const correct=normalAnswer(value)===normalAnswer(cur.answer);if(correct)q.score++;else q.wrong.push(cur.word);applyWordResult(cur.word,correct,true,q.source);render();
}
function wordQuizHTML(){
 const q=wordQuiz;if(!q)return '<div class="empty">단어 학습실에서 퀴즈를 시작해 주세요.</div>';
 if(q.finished)return `<section class="panel quiz quiz-done"><span class="eyebrow">WORD QUIZ RESULT</span><h1 class="h1">단어 퀴즈를 마쳤어요</h1><div class="big-number">${q.score} / ${q.questions.length}</div><p class="lead gap-top">${q.wrong.length?'다시 익힐 단어: '+q.wrong.map(esc).join(', '):'모두 맞혔어요! 다음 복습일에도 다시 만나보세요.'}</p><div class="button-row gap-top" style="justify-content:center">${q.wrong.length?'<button class="btn primary" data-act="word-quiz-retry">이번 오답만 다시 풀기</button>':''}<button class="btn" data-act="goto" data-to="vocab">단어 학습실</button><button class="btn" data-act="goto" data-to="planner">학습 일정으로</button></div></section>`;
 const cur=q.questions[q.pos],answered=q.selected!==null,correct=answered&&normalAnswer(q.selected)===normalAnswer(cur.answer),title={meaning:'영어를 보고 뜻 고르기',reverse:'뜻을 보고 영어 고르기',listening:'발음을 듣고 뜻 고르기',typing:'뜻에 맞는 영어 직접 쓰기'}[cur.type];
 return `<div class="back-row"><button class="btn small" data-act="word-quiz-exit">← 단어 학습실</button><span class="pill">${q.pos+1} / ${q.questions.length}</span></div><section class="panel quiz"><span class="eyebrow">${title}</span><div class="progress-track gap-top"><div class="progress-fill" style="width:${pct(q.pos,q.questions.length)}%"></div></div><h1 class="quiz-question ${cur.type==='meaning'?'english-sentence':''}">${cur.type==='listening'?'발음 버튼을 누르고 알맞은 뜻을 골라보세요.':esc(cur.type==='meaning'?cur.word:cur.meaning)}</h1>${cur.type==='listening'?`<button class="btn primary gap-bottom" data-act="speak" data-text="${attr(cur.word)}">🔊 발음 듣기</button>`:''}${cur.type==='typing'?`<form id="word-answer-form" class="button-row"><label class="sr-only" for="word-answer">영어 답변</label><input id="word-answer" class="search" name="answer" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="100" required ${answered?'disabled':''} value="${answered?attr(q.selected):''}" placeholder="영어 단어나 표현을 입력하세요"><button class="btn primary" ${answered?'disabled':''}>답 확인</button></form>`:`<div class="quiz-options">${cur.options.map(x=>`<button class="quiz-option ${answered?(x===cur.answer?'correct':x===q.selected?'wrong':''):''}" data-act="word-quiz-answer" data-answer="${attr(x)}" ${answered?'disabled':''}>${esc(x)}</button>`).join('')}</div>`}${answered?`<div class="quiz-feedback" role="status"><strong>${correct?'정답이에요!':'다시 익혀봐요.'}</strong><p><b>${esc(cur.word)}</b> · ${esc(cur.meaning)}</p><button class="btn small" data-act="speak" data-text="${attr(cur.word)}">🔊 정답 발음</button></div><button class="btn primary gap-top" data-act="word-quiz-next">${q.pos===q.questions.length-1?'결과 확인':'다음 문제 →'}</button>`:''}</section>`;
}
function handleWordAction(a,b){
 if(a==='word-quiz-start'){startWordQuiz(b.dataset.source||state.wordPrefs.source);return true}
 if(a==='word-quiz-answer'){submitWordAnswer(b.dataset.answer);return true}
 if(a==='word-quiz-next'){const q=wordQuiz;if(!q||q.finished||q.selected===null)return true;if(q.pos===q.questions.length-1){q.finished=true;state.wordHistory.push({date:dateStr(),correct:q.score,total:q.questions.length,mode:state.wordPrefs.mode});state.wordHistory=state.wordHistory.slice(-100);if(q.taskId&&validTaskId(q.taskId))state.wordTaskDone[q.taskId]=dateStr();save()}else{q.pos++;q.selected=null}render();return true}
 if(a==='word-quiz-retry'){if(wordQuiz?.wrong.length)startWordQuiz('retry',[...wordQuiz.wrong],'retry');return true}
 if(a==='word-quiz-exit'){if(wordQuiz&&!wordQuiz.finished&&!confirm('진행 중인 퀴즈를 나갈까요? 답한 단어의 학습 기록은 저장됩니다.'))return true;goToScreen('vocab');return true}
 if(a==='word-flip'){flashcardFace=!flashcardFace;render();return true}
 if(a==='word-card-step'){answerCard(false,true);return true}
 if(a==='word-card-known'){answerCard(b.dataset.known==='1');return true}
 if(a==='word-book'){state.wordPrefs.source=b.dataset.source;flashcardFace=false;wordSearch='';save();render();return true}
 if(a==='word-edit'){editingWord=b.dataset.word;render();document.getElementById('custom-word-form').scrollIntoView({behavior:'smooth',block:'center'});return true}
 if(a==='word-edit-cancel'){editingWord='';render();return true}
 if(a==='word-delete'){if(confirm('직접 추가한 이 단어를 삭제할까요?')){state.customWords=state.customWords.filter(w=>w.word!==b.dataset.word);state.starred=state.starred.filter(w=>w!==b.dataset.word);delete state.wordStats[b.dataset.word];state.cardSessions={};editingWord='';save();render()}return true}
 return false;
}
app.addEventListener('change',event=>{const t=event.target;if(t.id==='word-source'){state.wordPrefs.source=t.value;flashcardIndex=0;flashcardFace=false;wordSearch='';wordQuizMessage='';save();render()}if(t.id==='word-mode'){state.wordPrefs.mode=t.value;save()}if(t.id==='word-size'){state.wordPrefs.size=Number(t.value);save()}});
app.addEventListener('submit',event=>{
 if(event.target.id==='word-answer-form'){event.preventDefault();const answer=String(new FormData(event.target).get('answer')||'').trim();if(answer)submitWordAnswer(answer)}
 if(event.target.id==='custom-word-form'){
  event.preventDefault();const f=new FormData(event.target),word=String(f.get('word')||'').trim().toLowerCase(),meaning=String(f.get('meaning')||'').trim(),message=document.getElementById('custom-word-message');
  if(!validWord(word)||!meaning){message.textContent='영어 단어·표현과 뜻을 입력해 주세요. 영어에는 알파벳·공백·아포스트로피·하이픈을 사용할 수 있어요.';return}
  if(editingWord){const item=state.customWords.find(w=>w.word===editingWord);if(item){item.meaning=meaning.slice(0,100);item.category=String(f.get('category')||'custom')}}else{if(vocabBank().some(w=>w.word===word)){message.textContent='이미 단어장에 있는 단어예요.';return}if(state.customWords.length>=1000){message.textContent='직접 추가한 단어는 1000개까지 저장할 수 있어요.';return}state.customWords.push({word,meaning:meaning.slice(0,100),category:String(f.get('category')||'custom')})}
  editingWord='';state.cardSessions={};state.wordPrefs.source='custom';flashcardIndex=state.customWords.length-1;flashcardFace=false;save();render();document.getElementById('custom-word-message').textContent='단어를 저장했어요. 내 단어 묶음에서 퀴즈로 만나보세요.';
 }
});

function cardSourceWords(source){
 if(source==='daily'){const bank=contextualWords(vocabBank(),'daily'),offset=studyWordOffset(dateStr())%bank.length,rotated=bank.slice(offset).concat(bank.slice(0,offset));return rotated}
 if(source==='due'||source==='weak')return contextualWords(vocabBank(),source);
 return vocabPool(source);
}
function cardEligible(word){const r=wordKnowledge(word),source=state.wordPrefs.source;if(source==='due'&&(!r.due||r.due>dateStr()))return false;if(source==='weak'&&!r.missed)return false;return !(r.level>0&&r.due&&r.due>dateStr())}
function currentCardDeck(){
 const source=state.wordPrefs.source,pool=cardSourceWords(source),byWord=new Map(pool.map(w=>[w.word,w]));
 let d=state.cardSessions[source];if(!d||d.day!==dateStr())d=state.cardSessions[source]={day:dateStr(),cursor:0,queue:[],retry:[],draws:0,known:0};
 d.queue=[...new Set(d.queue)].filter(w=>byWord.has(w)&&cardEligible(w));d.retry=[...new Set(d.retry)].filter(w=>byWord.has(w)&&cardEligible(w)&&!d.queue.includes(w));
 const nextNew=()=>{while(d.cursor<pool.length){const word=pool[d.cursor++].word;if(cardEligible(word)&&!d.queue.includes(word)&&!d.retry.includes(word))return word}return null};
 while(d.queue.length<8){
  let word;if(d.retry.length&&d.draws%3===2)word=d.retry.shift();else word=nextNew()||d.retry.shift();
  if(!word)break;d.queue.push(word);d.draws++;
 }
 return {deck:d,word:byWord.get(d.queue[0]),remaining:pool.filter(w=>cardEligible(w.word)).length,poolSize:['due','weak'].includes(source)?pool.filter(w=>cardEligible(w.word)).length:pool.length};
}
function answerCard(known,skip=false){
 const {deck,word}=currentCardDeck();if(!word)return;deck.queue.shift();
 if(!known&&!deck.retry.includes(word.word))deck.retry.push(word.word);
 if(known)deck.known++;
 if(!skip)applyWordResult(word.word,known,false);
 flashcardFace=false;currentCardDeck();save();render();
}
function flashcardHTML(){
 const {deck,word:w,remaining,poolSize}=currentCardDeck();return `<section class="panel pad section"><div class="card-header"><h2 class="h2">이어지는 플래시카드</h2><span class="pill">기억남 ${deck.known}개</span></div><p class="tiny muted">남은 단어 ${remaining}개 · 묶음 전체 ${poolSize}개 · 다시 익힐 카드 ${new Set([...deck.retry,...deck.queue.filter(w=>wordKnowledge(w).missed)]).size}개</p>${w?`<button class="flashcard" data-act="word-flip" aria-label="${flashcardFace?'영어 보기':'뜻 확인하기'}"><span class="soft-label">${flashcardFace?'MEANING':'ENGLISH'}</span><strong lang="${flashcardFace?'ko':'en'}">${esc(flashcardFace?w.meaning:w.word)}</strong><span class="tiny muted">눌러서 ${flashcardFace?'영어':'뜻'} 확인</span></button><div class="button-row gap-top"><button class="btn" data-act="speak" data-text="${attr(w.word)}">🔊 발음 듣기</button><button class="btn" data-act="word-card-step" data-step="1">나중에 판단 · 다음 카드</button></div><div class="button-row gap-top"><button class="btn green" data-act="word-card-known" data-known="1">기억나요 · 이번 학습에서 빼기 ✓</button><button class="btn" data-act="word-card-known" data-known="0">다시 익힐래요 · 뒤로 보내기</button></div>`:`<div class="empty"><strong>이 묶음에서 지금 학습할 카드를 모두 마쳤어요.</strong><p>기억한 단어는 다음 복습일에 다시 만나요. 다른 단어장을 선택하면 새 단어로 이어갈 수 있어요.</p></div>`}<p class="tiny muted gap-top">기억한 카드는 복습일 전까지 다시 나오지 않아요. 어려운 카드는 뒤에서 반복되고 새 카드도 계속 섞입니다. ‘오늘의 단어’ 카드는 하루 퀴즈 분량을 넘어 전체 단어에서 계속 공급합니다.</p></section>`;
}
function wordBooksHTML(){return `<div class="word-books section">${[['basic','기본 단어'],['toeic','토익 단어'],['tos','토스 표현'],['opic','오픽 표현'],['conversation','회화 단어'],['major','전공·연구']].map(([key,title])=>`<button class="panel word-book ${state.wordPrefs.source===key?'active':''}" data-act="word-book" data-source="${key}"><span class="soft-label">${key.toUpperCase()}</span><strong>${title}</strong><span class="tiny muted">${vocabPool(key).length}개 · 카드와 퀴즈</span></button>`).join('')}</div><p class="tiny muted">시험별로 묶어서 학습할 수 있어요. 여러 묶음에 공통으로 들어 있는 단어는 기억·복습 상태를 함께 사용합니다.</p>`}

let photoRevealed=false,miniTest=null,miniTicker=null;
function photoHTML(photo){return `<figure class="lesson-photo"><img src="${photo.src}" alt="${attr(photo.alt)}" loading="lazy" width="1280" height="${photo.id==='photo-document'?854:960}"><figcaption><a href="${photo.source}" target="_blank" rel="noopener noreferrer">사진: ${photo.credit}</a></figcaption></figure>`}
function chapterPhotoHTML(track,c){
 if(!(track==='toeic'&&c.id==='t1'||track==='tos'&&c.id==='s2'||track==='opic'&&c.id==='o2'))return '';
 const p=LIBRARY.photos[track==='tos'?0:1];return `<section class="panel pad section"><span class="eyebrow">PHOTO PRACTICE</span><h2 class="h2">사진과 연결해서 학습해요</h2>${photoHTML(p)}<p class="lead">${track==='opic'?'이런 장소를 방문한 경험을 떠올려 나만의 카페를 설명해보세요.':'사진 속 사람·사물·동작을 영어로 설명해보세요.'}</p><button class="btn gap-top" data-act="photo-model">${photoRevealed?'예시 닫기':'사진 설명 예시 보기'}</button>${photoRevealed?`<div class="callout gap-top"><p lang="en">${esc(p.model)}</p><button class="btn small gap-top" data-act="speak" data-text="${attr(p.model)}">🔊 예시 듣기</button></div>`:''}<p class="tiny muted">이 사진은 추가 학습용이며 아래 챕터 연습의 개별 상황 지문과 다를 수 있어요.</p></section>`;
}
function resourcesHTML(){
 return `<div class="back-row"><button class="btn small" data-act="goto" data-to="exams">← 시험 과정</button></div><div class="page-head"><div><span class="eyebrow">EXAM PRACTICE & LIBRARY</span><h1 class="h1">공식 자료와 모의연습</h1><p class="lead">공식 PDF·기출 영상으로 형식을 익히고, 앱 안에서 시간을 재며 연습해요.</p></div></div><div class="exam-grid">${['toeic','tos','opic'].map(track=>`<article class="panel pad"><h2 class="h2">${EXTRA.tracks[track].title} 모의연습</h2><p class="lead">${track==='toeic'?'사진 포함 12문항 · 12분':track==='tos'?'유형별 11문항 · 20분':'주제별 12문항 · 40분'}</p><p class="tiny muted">직접 제작한 연습입니다. ${track==='toeic'?'정답 수와 해설을 확인합니다.':'답변 메모와 예시로 스스로 점검합니다.'} 공식 시험 점수·등급으로 환산하지 않습니다.</p><button class="btn primary gap-top" data-act="mock-start" data-track="${track}">제한시간 연습 시작</button></article>`).join('')}</div><section class="section"><h2 class="h2">공식 PDF·기출·체험 자료</h2><p class="tiny muted">원 제공 사이트에서 엽니다. 실제 시험 문제의 사진과 음성·영상은 각 공식 자료에서 확인해 주세요.</p><div class="chapter-grid gap-top">${LIBRARY.resources.map((r,i)=>`<article class="panel pad"><span class="round-tag">${EXTRA.tracks[r.track].title} · ${r.kind}</span><h3 class="h3 gap-top">${esc(r.title)}</h3><p class="lead gap-top">${esc(r.desc)}</p><div class="button-row gap-top"><a class="btn primary" href="${r.url}" target="_blank" rel="noopener noreferrer">공식 자료 열기 ↗</a><button class="btn" data-act="resource-plan" data-index="${i}">오늘 일정에 추가</button></div></article>`).join('')}</div></section><section class="panel pad section"><h2 class="h2">나의 모의연습 기록</h2>${state.mockHistory.length?`<div class="task-list gap-top">${state.mockHistory.map((r,i)=>`<article class="task-row"><div class="task-copy"><strong>${EXTRA.tracks[r.track].title} · ${r.date}</strong><p class="tiny muted">${r.track==='toeic'?r.correct+' / '+r.total+' 정답':r.answered+' / '+r.total+' 답변 메모'} · ${Math.floor(r.elapsed/60)}분 ${r.elapsed%60}초</p><button class="btn small" data-act="mock-history" data-index="${i}">결과 다시 보기</button></div></article>`).join('')}</div>`:'<p class="lead">제출한 모의연습 결과가 여기에 저장됩니다.</p>'}</section>`;
}
function mockQuestions(track){
 const u=EXTRA.tracks[track].units;
 if(track==='toeic'){
  const photos=LIBRARY.photos.map(p=>({...p,id:p.id,type:'photo',title:'사진 묘사',text:'',why:p.why}));
  const chapters=['t2','t2','t3','t4','t5','t5','t6','t7','t7','t8'],seen={};
  return photos.concat(chapters.map(id=>{const c=ADVANCED.chapters.toeic.find(c=>c.id===id),n=seen[id]||0;seen[id]=n+1;const q=u.find(x=>x.id===c.units[n]);return {...q,type:q.kind.startsWith('LC')?'audio':'reading'}}));
 }
 if(track==='tos'){
  const at=(c,i)=>u.find(x=>x.id===ADVANCED.chapters.tos.find(x=>x.id===c).units[i]);
  return [at('s1',0),at('s1',1),...LIBRARY.photos.map(p=>({id:'tos-'+p.id,prompt:'Describe the picture in as much detail as you can.',ko:'사진의 사람·사물·행동을 설명해보세요.',model:p.model,photo:p})),at('s3',0),at('s3',1),at('s3',2),at('s4',0),at('s4',1),at('s4',2),at('s6',0)];
 }
 const ids=['o1','o2','o3','o4','o4','o5','o5','o6','o7','o7','o8','o8'],seen={};return ids.map(id=>{const c=ADVANCED.chapters.opic.find(c=>c.id===id),i=seen[id]||0;seen[id]=i+1;return u.find(x=>x.id===c.units[i])});
}
function normalizeMockHistory(x){
 if(!Array.isArray(x))return [];return x.filter(r=>r&&['toeic','tos','opic'].includes(r.track)&&validDay(r.date)).slice(-5).map(r=>{
  const qs=mockQuestions(r.track),answers={};for(const q of qs){const v=r.answers?.[q.id];if(q.options&&Number.isInteger(v)&&v>=0&&v<q.options.length)answers[q.id]=v;else if(!q.options&&typeof v==='string')answers[q.id]=v.slice(0,1000)}
  return {track:r.track,date:r.date,total:qs.length,correct:r.track==='toeic'?qs.filter(q=>answers[q.id]===q.answer).length:null,answered:qs.filter(q=>q.options?answers[q.id]!==undefined:answers[q.id]?.trim()).length,elapsed:Number.isInteger(r.elapsed)?Math.max(0,Math.min(r.elapsed,7200)):0,answers};
 });
}
function tickMock(){
 if(!miniTest||miniTest.finished){clearInterval(miniTicker);miniTicker=null;return}
 const left=Math.max(0,Math.ceil((miniTest.deadline-Date.now())/1000)),node=document.getElementById('mock-clock');if(node)node.textContent=Math.floor(left/60)+':'+String(left%60).padStart(2,'0');if(left===0)finishMock();
}
function startMock(track,history=null){
 if(!['toeic','tos','opic'].includes(track))return;stopActivities();clearInterval(miniTicker);
 const duration=track==='toeic'?12*60:track==='tos'?20*60:40*60;
 miniTest={track,questions:mockQuestions(track),pos:0,answers:history?structuredClone(history.answers):{},start:Date.now(),deadline:Date.now()+duration*1000,duration,finished:!!history,result:history};screen='minitest';render();if(!history)miniTicker=setInterval(tickMock,1000);window.scrollTo({top:0,behavior:'instant'});
}
function finishMock(){
 const m=miniTest;if(!m||m.finished)return;clearInterval(miniTicker);miniTicker=null;m.finished=true;
 m.result={track:m.track,date:dateStr(),total:m.questions.length,correct:m.track==='toeic'?m.questions.filter(q=>m.answers[q.id]===q.answer).length:null,answered:m.questions.filter(q=>q.options?m.answers[q.id]!==undefined:m.answers[q.id]?.trim()).length,elapsed:Math.min(m.duration,Math.max(0,Math.floor((Date.now()-m.start)/1000))),answers:structuredClone(m.answers)};
 state.mockHistory.push(m.result);state.mockHistory=state.mockHistory.slice(-5);save();if(screen==='minitest')render();
}
function miniTestHTML(){
 const m=miniTest;if(!m)return resourcesHTML();
 if(m.finished)return `<div class="back-row"><button class="btn small" data-act="goto" data-to="resources">← 자료·모의연습</button></div><section class="panel pad"><span class="eyebrow">PRACTICE REVIEW</span><h1 class="h1">${EXTRA.tracks[m.track].title} 모의연습 결과</h1><p class="lead">${m.track==='toeic'?m.result.correct+' / '+m.result.total+'문항 정답':m.result.answered+' / '+m.result.total+'문항 답변 메모'}</p><p class="tiny muted">공식 점수·등급 채점이 아닙니다. 말하기는 실제로 말해본 내용과 아래 예시를 비교해보세요.</p><div class="settings-list gap-top">${m.questions.map((q,i)=>`<article class="callout"><h3>${i+1}. ${esc(q.title||q.ko||'말하기 연습')}</h3>${q.type==='photo'?photoHTML(q):q.photo?photoHTML(q.photo):''}<p lang="en">${esc(q.text||q.prompt)}</p><p><strong>나의 답:</strong> ${q.options?(m.answers[q.id]!==undefined?esc(q.options[m.answers[q.id]]):'미응답'):esc(m.answers[q.id]||'메모 없음')}</p>${q.options?`<p><strong>정답:</strong> ${esc(q.options[q.answer])}</p><p>${esc(q.why)}</p>`:`<p><strong>예시:</strong> ${esc(q.model)}</p>`}</article>`).join('')}</div></section>`;
 const q=m.questions[m.pos],answered=Object.keys(m.answers).filter(id=>typeof m.answers[id]==='number'||m.answers[id].trim()).length;
 return `<div class="back-row"><span class="pill">${EXTRA.tracks[m.track].title} · ${m.pos+1} / ${m.questions.length}</span><span class="pill">남은 시간 <strong id="mock-clock">${Math.floor(Math.max(0,m.deadline-Date.now())/60000)}:${String(Math.floor(Math.max(0,m.deadline-Date.now())/1000)%60).padStart(2,'0')}</strong></span></div><section class="panel quiz"><span class="eyebrow">${m.track==='toeic'?'MINI MOCK PRACTICE':'SPEAKING FORMAT PRACTICE'}</span><p class="tiny muted">${answered}문항 답변 · 정답과 예시는 제출 후 확인합니다. 답변 메모는 1,000자까지 입력할 수 있어요.</p>${q.type==='photo'?photoHTML(q):q.photo?photoHTML(q.photo):''}${q.type==='audio'?`<button class="btn primary gap-top" data-act="speak" data-text="${attr(q.text)}">🔊 문제 듣기</button>`:`<div class="callout gap-top"><p class="english-sentence" lang="en">${esc(q.text||q.prompt)}</p>${q.ko?`<p>${esc(q.ko)}</p>`:''}</div>`}${q.options?`<h2 class="quiz-question">${esc(q.prompt)}</h2><div class="quiz-options">${q.options.map((x,i)=>`<button class="quiz-option ${m.answers[q.id]===i?'mock-selected':''}" data-act="mock-answer" data-choice="${i}">${esc(x)}</button>`).join('')}</div>`:`<button class="btn gap-top" data-act="speak" data-text="${attr(q.prompt)}">🔊 질문 듣기</button><label for="mock-notes" class="strong" style="display:block;margin-top:18px">말한 내용·답변 메모</label><textarea id="mock-notes" class="search gap-top" maxlength="1000" rows="6" placeholder="먼저 소리 내어 말한 뒤 핵심 내용을 적어보세요.">${esc(m.answers[q.id]||'')}</textarea>`}<div class="button-row gap-top"><button class="btn" data-act="mock-step" data-step="-1" ${m.pos===0?'disabled':''}>← 이전</button><button class="btn" data-act="mock-step" data-step="1" ${m.pos===m.questions.length-1?'disabled':''}>다음 →</button><button class="btn primary" data-act="mock-submit">제출하고 결과 보기</button></div><p class="tiny muted gap-top">제출 전 다른 메뉴로 나가면 진행 중인 답변이 사라집니다. 제출 결과는 계정 기록에 저장됩니다.</p></section>`;
}
function handleResourceAction(a,b){
 if(a==='photo-model'){photoRevealed=!photoRevealed;render();return true}
 if(a==='mock-start'){startMock(b.dataset.track);return true}
 if(a==='mock-history'){const r=state.mockHistory[Number(b.dataset.index)];if(r)startMock(r.track,r);return true}
 if(a==='mock-answer'){const q=miniTest?.questions[miniTest.pos],n=Number(b.dataset.choice);if(q?.options&&Number.isInteger(n)&&n>=0&&n<q.options.length){miniTest.answers[q.id]=n;render()}return true}
 if(a==='mock-step'){if(miniTest&&!miniTest.finished){miniTest.pos=Math.max(0,Math.min(miniTest.questions.length-1,miniTest.pos+Number(b.dataset.step)));render()}return true}
 if(a==='mock-submit'){if(confirm('모의연습을 제출하고 결과를 확인할까요?'))finishMock();return true}
 if(a==='resource-plan'){const r=LIBRARY.resources[Number(b.dataset.index)];if(r&&state.customTasks.length<500){state.customTasks.push({id:'custom-'+crypto.randomUUID(),title:r.title,date:dateStr(),minutes:20,done:false,doneAt:''});save();plannerDate=dateStr();plannerMonth=plannerDate.slice(0,7);goToScreen('planner')}return true}
 return false;
}
app.addEventListener('input',event=>{if(event.target.id==='mock-notes'&&miniTest&&!miniTest.finished)miniTest.answers[miniTest.questions[miniTest.pos].id]=event.target.value.slice(0,1000)});


function examNavigationHTML(){const list=orderedExamUnits(examTrack),i=list.indexOf(currentExam()),units=EXTRA.tracks[examTrack].units;return `<div class="button-row gap-top"><button class="btn" data-act="exam-open" data-track="${examTrack}" data-unit="${units.indexOf(list[Math.max(0,i-1)])}" ${i===0?'disabled':''}>← 이전 연습</button><button class="btn" data-act="exam-open" data-track="${examTrack}" data-unit="${units.indexOf(list[Math.min(list.length-1,i+1)])}" ${i===list.length-1?'disabled':''}>다음 연습 →</button></div>`}

let cloudStatus='',cloudBusy=false,cloudConflict=false,cloudTimer=null,authEpoch=0;
function cachedCloudSession(){
 try{if(!CLOUD_CONFIG.enabled||!CLOUD_CONFIG.url||!CLOUD_CONFIG.publishableKey)return null;const s=JSON.parse(localStorage.getItem('english-cloud-session')||'null');return s?.access_token&&s?.refresh_token&&/^[0-9a-f-]{36}$/i.test(s.user?.id)?s:null}catch{return null}
}
function cloudMeta(){try{return JSON.parse(localStorage.getItem(activeStorageKey+'-sync')||'null')||{revision:0,dirty:false}}catch{return {revision:0,dirty:false}}}
function storeCloudMeta(m){localStorage.setItem(activeStorageKey+'-sync',JSON.stringify(m))}
function rememberSession(s){if(!s||typeof s.access_token!=='string'||!s.access_token||typeof s.refresh_token!=='string'||!s.refresh_token||!/^[0-9a-f-]{36}$/i.test(s.user?.id))throw Error('로그인 정보를 확인하지 못했어요. 다시 로그인해 주세요.');const next={access_token:s.access_token,refresh_token:s.refresh_token,expires_at:Date.now()/1000+(s.expires_in||3600),user:{id:s.user.id,email:typeof s.user.email==='string'?s.user.email:''}};try{localStorage.setItem('english-cloud-session',JSON.stringify(next))}catch{throw Error('로그인을 저장할 수 없어요. Safari에서 브라우저 저장 공간을 확인해 주세요.')}cloudSession=next}

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
 if(!authenticated)throw loginProblem(body?.code||body?.error_code||body?.error||'',body?.error_description||body?.msg||body?.message||'');throw Error('연결하지 못했어요. 네트워크와 로그인 상태를 확인해 주세요.');}
 return body;
}
function queueCloudSave(){if(!cloudSession)return;try{const m=cloudMeta();m.dirty=true;storeCloudMeta(m)}catch{return}clearTimeout(cloudTimer);if(!cloudConflict)cloudTimer=setTimeout(()=>syncCloud().catch(()=>{}),1200)}
function refreshCloudUI(){if(screen==='account'||(['home','planner'].includes(screen)&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)))render()}
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
const GOOGLE_PENDING_KEY='english-google-pending-v2';
function loginProblem(code,description=''){
 const message=String(description).toLowerCase();let tag='LOGIN_CALLBACK_FAILED',text='Google 로그인 응답을 처리하지 못했어요. Safari에서 새로 로그인을 시작해 주세요.';
 if(code==='access_denied'){tag='LOGIN_CANCELLED';text='로그인이 취소됐어요. 다시 시도할 수 있습니다.'}
 if(/invalid.?client|client.?secret|unauthorized_client/.test(message+' '+code)){tag='GOOGLE_CLIENT_SETTINGS';text='Google 로그인 연결 설정을 확인해야 합니다. 관리자에게 아래 확인 코드를 알려주세요.'}
 else if(['flow_state_expired','flow_state_not_found','otp_expired'].includes(code)){tag='LOGIN_EXPIRED';text='로그인 연결이 만료됐어요. Google 로그인 버튼으로 다시 시작해 주세요.'}
 else if(['bad_code_verifier','pkce_verification_failed','browser_changed'].includes(code)){tag='LOGIN_BROWSER_CHANGED';text='로그인을 시작한 브라우저에서 다시 시도해 주세요. 앱 안에서 열었다면 Safari로 열어 로그인해 주세요.'}
 else if(['bad_oauth_callback','bad_oauth_state'].includes(code)){tag='LOGIN_RETURN_INVALID';text='Google에서 돌아오는 로그인 연결이 유효하지 않아요. Safari에서 새로 로그인해 주세요.'}
 else if(['provider_disabled','oauth_provider_not_supported','signup_disabled'].includes(code)){tag='LOGIN_PROVIDER_SETTINGS';text='로그인 제공자 설정을 확인해야 합니다. 관리자에게 아래 확인 코드를 알려주세요.'}
 else if(code==='unexpected_callback'){tag='LOGIN_RESPONSE_CHANGED';text='이전 방식의 로그인 응답이 도착했어요. Safari에서 앱을 새로고침하고 새로 로그인해 주세요.'}
 else if(code==='unexpected_failure'||/exchange.*external.*code/.test(message)){tag='GOOGLE_CALLBACK_FAILED';text='Google 인증을 마무리하지 못했어요. 다시 시도해도 같으면 로그인 연결 설정을 확인해야 합니다.'}
 const error=new Error(text+' (확인 코드: '+tag+')');error.code=tag;return error;
}
async function checkGoogleProvider(){
 if(googleProviderChecking)return;googleProviderChecking=true;
 try{const settings=await cloudFetch('/auth/v1/settings',{},false);googleProviderReady=settings?.external?.google===true;if(!googleProviderReady&&!cloudSession)cloudStatus='Google 로그인 연결을 준비하고 있어요. 지금은 기기에 학습 기록이 저장됩니다.'}
 catch{googleProviderReady=null;cloudStatus='로그인 연결 상태를 확인하지 못했어요. 잠시 후 다시 확인해 주세요.'}
 finally{googleProviderChecking=false;refreshCloudUI()}
}
function base64url(bytes){return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function normalizedAuthURL(value){const url=new URL(value);url.search='';url.hash='';if(url.pathname.endsWith('/index.html'))url.pathname=url.pathname.slice(0,-10);return url.href}
function appRedirectURL(){return normalizedAuthURL(location.href)}
function validPendingLogin(p){return p&&typeof p.verifier==='string'&&/^[A-Za-z0-9_-]{43}$/.test(p.verifier)&&Number.isFinite(p.createdAt)&&p.createdAt<=Date.now()+60000&&Date.now()-p.createdAt<10*60*1000&&typeof p.redirectTo==='string'&&normalizedAuthURL(p.redirectTo)===appRedirectURL()}
function readPendingLogins(){try{const rows=JSON.parse(localStorage.getItem(GOOGLE_PENDING_KEY)||'[]');return Array.isArray(rows)?rows.filter(p=>{try{return validPendingLogin(p)}catch{return false}}).slice(-5):[]}catch{return []}}
function pendingLogin(){let tab;try{tab=JSON.parse(sessionStorage.getItem(GOOGLE_PKCE_KEY)||'null')}catch{}try{if(validPendingLogin(tab))return tab}catch{}const shared=readPendingLogins();return shared.length===1?shared[0]:null}
function forgetPendingLogin(p){
 try{const tab=JSON.parse(sessionStorage.getItem(GOOGLE_PKCE_KEY)||'null');if(!p||tab?.verifier===p.verifier)sessionStorage.removeItem(GOOGLE_PKCE_KEY)}catch{}
 try{const rows=readPendingLogins().filter(row=>p&&row.verifier!==p.verifier);if(rows.length)localStorage.setItem(GOOGLE_PENDING_KEY,JSON.stringify(rows));else localStorage.removeItem(GOOGLE_PENDING_KEY)}catch{}
}
function storePendingLogin(p){
 let tabSaved=false,sharedSaved=false;let previous;try{previous=JSON.parse(sessionStorage.getItem(GOOGLE_PKCE_KEY)||'null')}catch{}
 try{sessionStorage.setItem(GOOGLE_PKCE_KEY,JSON.stringify(p));tabSaved=true}catch{}
 try{const rows=readPendingLogins().filter(row=>row.verifier!==previous?.verifier);rows.push(p);localStorage.setItem(GOOGLE_PENDING_KEY,JSON.stringify(rows.slice(-5)));sharedSaved=true}catch{}
 if(!tabSaved&&!sharedSaved)throw Error('로그인 정보를 보관할 수 없어요. 일반 Safari에서 앱을 열고 다시 시도해 주세요.');
}
async function startGoogleLogin(){
 if(googleRedirecting)return;
 if(googleProviderReady!==true){await checkGoogleProvider();if(googleProviderReady!==true)return}
 if(!crypto.subtle||!crypto.getRandomValues)throw Error('보안 연결에서 로그인할 수 있어요. Safari에서 앱 주소를 다시 열어 주세요.');
 googleRedirecting=true;refreshCloudUI();
 try{
  const verifier=base64url(crypto.getRandomValues(new Uint8Array(32)));
  const challenge=base64url(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier))));
  const redirectTo=appRedirectURL();storePendingLogin({verifier,createdAt:Date.now(),redirectTo});
  const url=new URL(CLOUD_CONFIG.url+'/auth/v1/authorize');url.searchParams.set('provider','google');url.searchParams.set('redirect_to',redirectTo);url.searchParams.set('code_challenge',challenge);url.searchParams.set('code_challenge_method','s256');url.searchParams.set('prompt','select_account');location.assign(url.href);
 }catch(e){googleRedirecting=false;throw e}
}
function clearAuthURL(){const url=new URL(location.href);for(const key of ['code','error','error_code','error_description'])url.searchParams.delete(key);url.hash='';history.replaceState(null,'',url.pathname+url.search)}
async function initializeGoogleAuth(){
 const url=new URL(location.href),hash=new URLSearchParams(url.hash.slice(1)),code=url.searchParams.get('code'),error=url.searchParams.get('error')||hash.get('error'),errorCode=url.searchParams.get('error_code')||hash.get('error_code')||error,errorDescription=url.searchParams.get('error_description')||hash.get('error_description')||'';
 if(!code&&!error&&!hash.has('access_token')){if(cloudSession)await syncCloud().catch(()=>{});await checkGoogleProvider();return}
 clearAuthURL();screen='account';stopActivities();const saved=pendingLogin();
 if(error||hash.has('access_token')){if(saved)forgetPendingLogin(saved);cloudStatus=loginProblem(error?errorCode:'unexpected_callback',errorDescription).message;render();await checkGoogleProvider();return}
 if(!saved){cloudStatus=loginProblem('browser_changed').message;render();await checkGoogleProvider();return}
 cloudStatus='Google 로그인을 확인하고 있어요…';render();
 try{
  const session=await cloudFetch('/auth/v1/token?grant_type=pkce',{method:'POST',body:JSON.stringify({auth_code:code,code_verifier:saved.verifier})},false);
  rememberSession(session);forgetPendingLogin(saved);authEpoch++;activeStorageKey=KEY+'-user-'+session.user.id;state=loadState();cloudConflict=false;quiz=null;cloudStatus='로그인했어요. 개인 기록을 확인합니다.';await syncCloud();
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
 return `<div class="panel pad"><span class="eyebrow">MY ACCOUNT</span><h1 class="h1">${cloudSession?'나의 학습 계정':'Google 계정으로 시작하기'}</h1>${cloudSession?`<p class="lead">${esc(cloudSession.user.email||'로그인한 사용자')}</p><p>학습 일정·단어장·퀴즈·기초·시험 챕터 기록을 계정에 저장합니다.</p><div class="button-row"><button class="btn primary" data-act="cloud-sync" ${cloudBusy?'disabled':''}>지금 동기화</button><button class="btn" data-act="cloud-import">로그인 전 기기 기록 가져오기</button><button class="btn" data-act="cloud-logout" ${cloudBusy?'disabled':''}>로그아웃</button></div>${cloudConflict?`<div class="alert gap-top"><p>여러 기기의 기록이 달라요. 덮어쓰기 전에 설정에서 기록을 백업할 수 있습니다.</p><div class="button-row"><button class="btn" data-act="cloud-use-remote">온라인 기록 사용</button><button class="btn" data-act="cloud-use-local">이 기기 기록으로 온라인 저장</button></div></div>`:''}`:`<p class="lead">Google 계정으로 로그인하고, 다른 기기에서도 학습을 이어가세요.</p>${/iPhone|iPad|iPod/i.test(navigator.userAgent)?'<p class="tip gap-top">앱 안의 브라우저에서 로그인이 안 되면 Safari에서 열어 다시 시도해 주세요. 아이폰의 공유 메뉴나 나침반 버튼으로 Safari를 열 수 있어요.</p>':''}<div class="button-row gap-top"><button class="btn primary" data-act="cloud-google" ${googleProviderReady===true&&!googleRedirecting?'':'disabled'}>${googleRedirecting?'Google로 이동 중…':'Google로 로그인'}</button>${googleProviderReady!==true?`<button class="btn" data-act="cloud-provider-check" ${googleProviderChecking?'disabled':''}>연결 상태 다시 확인</button>`:''}</div>`}<p id="cloud-status" class="tip gap-top" role="status">${esc(cloudStatus||(cloudSession?'연결 상태를 확인해 주세요.':'로그인 전 기록은 이 브라우저에 보관됩니다.'))}</p></div>`;
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
   clearTimeout(cloudTimer);stopActivities();const oldKey=activeStorageKey;authEpoch++;cloudSession=null;cloudConflict=false;localStorage.removeItem('english-cloud-session');forgetPendingLogin();localStorage.removeItem(oldKey);localStorage.removeItem(oldKey+'-sync');activeStorageKey=KEY;state=loadState();quiz=null;cloudStatus='로그아웃했어요. 로그인 전 기기 기록으로 돌아왔어요.';
  }
 }catch(e){cloudStatus=e.message}refreshCloudUI();
}
window.addEventListener('online',()=>{if(cloudSession)syncCloud().catch(()=>{})});
window.addEventListener('focus',()=>{if(cloudSession)syncCloud().catch(()=>{})});

render();
initializeGoogleAuth().catch(()=>{cloudStatus='로그인 연결을 확인하지 못했어요. 잠시 후 다시 시도해 주세요.';refreshCloudUI()});
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
