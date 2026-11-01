# 영어 첫걸음

알파벳부터 하루 30분씩 배우는 12주·72회 영어 학습 웹앱입니다.

## 사용 방법

- 수업마다 소리 → 단어 → 문장 → 5문항 퀴즈 순서로 학습하고 활용 탭에서 문장 조립과 상황 대화를 연습합니다.
- 발음 듣기는 버튼을 눌러 실행하며 기기에 설치된 영어 음성을 사용합니다.
- 진도·퀴즈 점수·즐겨찾기·설정은 현재 브라우저에 저장합니다.
- 설정의 **학습 기록 백업 / 백업 불러오기**로 기기 간 기록을 옮길 수 있습니다.
- Safari와 홈 화면 앱의 저장 공간은 다를 수 있으므로 홈 화면 앱에서 처음부터 학습하거나 백업 파일을 불러오세요.

## 새 학습 활동

- 기초 과정: 문장 조립, 6가지 상황 대화, 3주 차부터 빈칸 퀴즈, 틀린 문제 자동 수집·복습.
- 시험 입문: 토익 6개(듣기·읽기), 토스 6개(읽기·묘사·응답·정보 활용·의견), 오픽 6개(소개·묘사·일상·경험·비교·역할극).
- 말하기: 질문·예시 발음 듣기, 연습 타이머, 답변 메모 자동 저장, 자기 점검. 공식 점수·등급 산출은 제공하지 않습니다.

## Google 로그인 연결 설정

앱에는 Google 로그인과 개인별 기록 동기화를 구현했습니다. Supabase의 Google 제공자 설정이 꺼져 있으면 로그인 버튼은 비활성화되고 기기 저장으로 학습할 수 있습니다. 이메일 인증번호·SMTP 설정은 사용하지 않습니다.

1. Supabase SQL Editor에서 `SUPABASE_SETUP.sql`을 실행합니다. 사용자별 행 보안(RLS)과 동시 수정 감지용 저장 함수를 만듭니다. 같은 SQL을 다시 실행할 수 있습니다.
2. Google Cloud의 Google Auth Platform에서 OAuth 앱을 설정합니다. Audience는 개인 Google 계정 사용자가 로그인할 수 있도록 External을 선택합니다. 기본 로그인 범위 `openid`, `email`, `profile`만 사용합니다. Testing 상태에서는 로그인할 계정을 Test users에 등록합니다. 다른 사용자가 사용할 준비가 되면 Audience의 게시 상태를 Production으로 전환해야 합니다.
3. Clients → Create client에서 Web application을 선택합니다. Authorized JavaScript origins는 `https://jhw01-test.github.io`, Authorized redirect URIs는 `https://aicaaawuortmdqslkgbp.supabase.co/auth/v1/callback`입니다.
4. Google이 발급한 Client ID와 Client secret은 Supabase Authentication → Sign In / Providers → Google에 직접 입력하고 활성화합니다. Client secret은 채팅·프런트엔드·GitHub 저장소에 넣지 않습니다.
5. Supabase Authentication → URL Configuration에서 Site URL을 `https://jhw01-test.github.io/english-first-steps/`로 설정합니다. Redirect URLs에는 `https://jhw01-test.github.io/english-first-steps/`와 `https://jhw01-test.github.io/english-first-steps/index.html` 두 주소를 허용합니다.
6. 앱 → 내 계정 → 연결 상태 다시 확인 → Google로 로그인을 실행합니다. 실제 계정 로그인과 두 기기 기록 동기화는 제공자 설정 후 확인해야 합니다.

로그인은 같은 브라우저에서 돌아오는 PKCE 코드 교환 방식을 사용합니다. 인증 코드는 URL에서 제거하며, 코드와 검증값을 함께 확인한 뒤 계정 기록을 불러옵니다. 로그아웃하면 이 기기의 계정 캐시와 세션이 삭제되고 로그인 전 기기 기록으로 돌아갑니다.

계정 기록과 비로그인 기록은 별도 저장됩니다. 기기 기록 가져오기는 사용자가 확인한 뒤 실행됩니다. 오프라인 변경은 기기에 남고, 온라인 기록의 버전이 다르면 사용자가 사용할 기록을 선택합니다. 덮어쓰기 전 백업을 내보낼 수 있습니다. 공용 기기에서는 사용 후 로그아웃하세요.

## iPhone 홈 화면에 추가

배포된 HTTPS 주소를 Safari에서 열고 **공유 → 홈 화면에 추가 → 추가**를 누르세요. 메뉴가 안 보이면 공유 메뉴에서 아래로 스크롤하세요. 추가된 아이콘으로 실행한 뒤 설정의 음성 재생 시험을 눌러 확인하세요.

## GitHub Pages 설정

저장소 Settings → Pages → Build and deployment에서 **Deploy from a branch**, **main**, **/ (root)**를 선택하고 Save를 누릅니다. GitHub가 배포 완료를 표시한 실제 주소를 사용하세요.

`index.html`에는 CSS·수업 데이터·앱 코드가 포함되어 있습니다. `app.js`, `style.css`, `curriculum.json`은 편집용 사본입니다. 편집 시 HTML에 포함된 내용도 함께 갱신해야 합니다.

## 점검 범위

Chromium 모바일 화면(가로 320·375·390·430·844px), 메뉴 이동, 첫 수업 퀴즈 5/5, 완료 후 새로고침에 따른 진도·점수·즐겨찾기·설정 유지, 발음 API 호출을 자동 점검했습니다. 실제 iPhone Safari의 음성 출력과 홈 화면 실행은 실기기에서 확인해야 합니다.

추가 점검: 72개 수업의 퀴즈 360문항 보기·정답 일관성, 오답 저장·해결, 문장 조립, 상황 대화, 시험 활동 18개와 완료·답변 메모 저장을 자동 확인했습니다. Google 인증 코드 교환·동기화·오프라인·충돌 처리·로그아웃·계정 분리는 모의 API로 점검합니다. 실제 Supabase 연결과 행 보안은 프로젝트 설정 후 별도로 검증해야 합니다.

연결 준비 검증: 제공된 공개 키로 프로젝트 인증 설정 조회에 성공했습니다. 사용자 기록 테이블과 저장 함수가 생성되었고 익명 접근이 차단되는 것을 확인했습니다. SQL은 로컬 PostgreSQL(PGlite)에서 재실행 가능 여부, 익명 접근 차단, 사용자별 조회·삽입·수정 격리, 저장 버전 충돌과 데이터 제약을 검증했습니다. 실제 Google 계정 로그인과 두 기기 동기화 검증은 제공자 설정 후 진행해야 합니다.

Google 로그인 변경 검증: 모의 OAuth 서버로 제공자 활성 상태 확인, PKCE challenge·코드 교환, 인증 URL 정리, 외부 주입 코드 차단, 취소 처리, 기존 기록 가져오기, 오프라인·충돌 처리, 사용자 구분·로그아웃을 확인했습니다.
