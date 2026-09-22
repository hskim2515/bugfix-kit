# bugfix-kit

> **앱에서 버그를 신고하면, AI 가 고쳐서 배포까지 해 줍니다.**

```mermaid
flowchart LR
    A["🙋 사용자<br/>앱에서 Shift+F9<br/>화면·로그 자동 첨부"] --> B["🤖 AI (Claude Code)<br/>원인 찾아 코드 수정<br/>실시간 로그"]
    B --> C["✅ 검증<br/>lint · build · compile"]
    C --> D["🖥️ 화면 확인<br/>헤드리스 브라우저로<br/>실제 화면 열어봄"]
    D --> E["🔀 PR → 병합"]
    E --> F["🚀 배포 확인"]
    F -. "질문 · 추가 수정 요청 · 추천 개선" .-> B
```

리포트 하나에 **5~10분**, 비용 **$0.5~1**. Vue·React·순수 HTML 어디에나 붙습니다.

---

## 구성

```mermaid
flowchart TB
    subgraph APP["각 앱 (프론트)"]
        C1["📦 client<br/>신고 창 · 목록 뷰어 · 수집기<br/>(두 줄로 설치)"]
    end
    subgraph SRV["개발서버 한 대"]
        S1["🖧 server<br/>리포트 저장 · 자동 수정 파이프라인"]
        S2["🎛️ 관리 콘솔 /bugfix/ui/<br/>프로젝트 · 키 · 점검 · 로그"]
        S3["🔍 front-check<br/>헤드리스 화면 확인"]
    end
    subgraph GH["GitHub"]
        G1["저장소 · PR · Actions 배포"]
    end
    C1 -- 리포트 --> S1
    S1 -- 실시간 로그 --> C1
    S1 --> S3
    S1 -- PR·병합 --> G1
    G1 -- 배포 결과 --> S1
```

---

## 시작하기 — 3단계

```mermaid
flowchart LR
    S["① 서버 켜기<br/>(한 번만, 5분)"] --> K["② 콘솔에서 설정<br/>키 넣고 · 프로젝트 추가 · 점검"] --> A["③ 앱에 두 줄<br/>SDK 설치"]
```

### ① 서버 켜기

```bash
git clone https://github.com/hskim2515/bugfix-kit.git ~/bugfix-kit && cd ~/bugfix-kit && npm install
cp packages/server/bugfix-kit.example.yml packages/server/bugfix-kit.yml
mkdir -p ~/.config/bugfix-kit && (umask 077; echo "ADMIN_KEY=$(openssl rand -hex 16)" > ~/.config/bugfix-kit/default.env)
claude login                                                   # 터미널에서 한 번
docker pull mcr.microsoft.com/playwright:v1.47.2-jammy
cp packages/server/deploy/bugfix-server.service ~/.config/systemd/user/
systemctl --user daemon-reload && systemctl --user enable --now bugfix-server && loginctl enable-linger $USER
```
nginx: `location ^~ /bugfix/ { proxy_pass http://127.0.0.1:8790/api/; client_max_body_size 60m; }`

### ② 관리 콘솔 `https://앱주소/bugfix/ui/`

첫 화면의 **시작 체크리스트**가 남은 일을 알려 줍니다.

| 탭 | 한 줄 요약 |
|---|---|
| 🔑 키·계정 | GitHub 토큰, 테스트 계정 넣기 |
| 📁 프로젝트 | 저장소 주소·브랜치·검증 명령 적고 저장 |
| 🩺 점검 | 버튼 눌러서 잘 붙었는지 확인 |
| 📋 리포트 | 신고 현황, 진행 중 로그, 리포트 열어 보기 |

비밀값은 서버 홈에만 저장됩니다. 저장소에는 절대 안 들어갑니다.

### ③ 앱에 두 줄

```bash
npm i -D github:hskim2515/bugfix-kit#v0.1.21 && npx front-check init
```
```js
// Vue
import { createBugfix } from 'bugfix-kit/client/vue'; import 'bugfix-kit/client/style.css';
export const kit = createBugfix({ endpoint: '/bugfix', project: 'myapp', apiKey: '…', interceptors: { console: true, network: { axios: [rest] }, mutation: store, router } });
// React / HTML
import { createBugfix } from 'bugfix-kit/client';
export const kit = createBugfix({ endpoint: '/bugfix', project: 'myapp', apiKey: '…', interceptors: { console: true, network: { fetch: true }, router: true } }).mount();
```

끝. **Shift+F9** 신고 · **Shift+F10** 목록.

---

## 사용자는 이것만

```mermaid
flowchart LR
    R["Shift+F9<br/>신고"] --> L["Shift+F10<br/>목록 열기"] --> F["AI 에게 수정 요청"] --> W["로그 보며 기다리기<br/>(5~10분)"] --> M{"결과"}
    M -- "병합 완료" --> D["배포까지 자동"]
    M -- "더 고치고 싶다" --> Q["입력창에 쓰고<br/>질문 / 수정 요청"]
    M -- "AI 추천이 마음에 든다" --> S["추천 개선 [실행]"]
```

---

## 자주 묻는 것

| 질문 | 답 |
|---|---|
| 백엔드도 고치나요? | 네, 같은 저장소면 프론트·백엔드 다. 백엔드 검증은 컴파일·테스트까지 |
| 신고 창 자체가 이상하면? | 신고 창에서 대상을 **버그 신고 도구**로 바꿔 신고만. 수정·PR 은 운영자가 관리 콘솔에서 (`fixFrom: admin`) |
| 운영 서버에 영향은? | 없음. 개발 저장소·브랜치만 건드리고, front-check 는 운영 주소 요청을 차단 가능 |
| 개인정보는? | 신고자·문제 원문은 PR 에 안 들어감. 인증값 마스킹, AI 에겐 추린 로그만 |
| 서버를 재시작하면? | 돌던 작업만 끊김. 앱 서버 재배포와는 무관 |
| 프론트/백엔드 저장소가 다르면? | 프로젝트 두 개로 등록하고 신고할 때 대상 선택 |

문제가 생기면 콘솔 **점검** 탭과 **로그** 탭. 서버 갱신: `cd ~/bugfix-kit && git checkout -- package-lock.json && git pull && npm install && systemctl --user restart bugfix-server`

자세한 옵션: [server](packages/server) · [client](packages/client) · [front-check](packages/front-check)
