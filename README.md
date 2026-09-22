# bugfix-kit

앱에서 버그를 신고하면(**Shift+F9**) AI 가 알아서 고치고, 검증하고, 화면까지 확인한 뒤, PR 을 올려 병합하고, 배포까지 지켜봅니다.
Vue·React·순수 HTML 어디에나 붙고, 서버 한 대로 여러 프로젝트를 담당합니다.

```
앱에서 신고  →  AI 가 코드 수정  →  lint·build 검증  →  헤드리스로 화면 확인  →  PR → 병합  →  배포 확인
(Shift+F9)      (실시간 로그)                              (front-check)                    (Actions 추적)
```

세 부분으로 되어 있습니다.

| | 무엇 | 어디에 |
|---|---|---|
| `packages/server` | 리포트 저장 + 자동 수정 파이프라인 + **관리 콘솔** | 개발서버 한 대 |
| `packages/client` | 신고 창·목록 뷰어·수집기 (브라우저 SDK) | 각 앱 프론트 |
| `packages/front-check` | 헤드리스 브라우저로 화면 확인하는 CLI + Claude 스킬 | 각 앱 저장소 |

---

## 어떻게 돌아가나 (리포트 하나의 흐름)

1. 사용자가 앱에서 **Shift+F9** → 화면 캡처(펜으로 표시 가능) + 그 직전의 콘솔·네트워크·상태 변화가 자동으로 붙습니다. 문제를 적고 **서버 저장**.
2. **Shift+F10** 목록에서 리포트를 열고 **AI 에게 수정 요청**.
3. 서버가 저장소를 받아 Claude Code 를 돌립니다. 무엇을 읽고 고치는지 **실시간 로그**로 보입니다.
4. 검증 명령(lint·build·compile) → 프론트가 바뀌었으면 front-check 가 **로그인해서 실제 화면**을 열어 확인.
5. PR → 자동 병합 → **배포 완료**까지 로그에 이어집니다.
6. 그 뒤 **질문**(코드 안 바꿈) / **수정 요청**(이어서 고침) / AI 의 **추천 개선** 버튼.

리포트 하나에 보통 5~10분, Claude 비용 $0.5~1.

---

## 시작하기

### 1) 서버 (한 번만)

```bash
git clone https://github.com/hskim2515/bugfix-kit.git ~/bugfix-kit && cd ~/bugfix-kit && npm install
cp packages/server/bugfix-kit.example.yml packages/server/bugfix-kit.yml
mkdir -p ~/.config/bugfix-kit && (umask 077; echo "ADMIN_KEY=$(openssl rand -hex 16)" > ~/.config/bugfix-kit/default.env)
claude login                                   # 서버 계정에서 한 번 (터미널 필요)
docker pull mcr.microsoft.com/playwright:v1.47.2-jammy
cp packages/server/deploy/bugfix-server.service ~/.config/systemd/user/
systemctl --user daemon-reload && systemctl --user enable --now bugfix-server && loginctl enable-linger $USER
```
nginx 에 한 줄: `location ^~ /bugfix/ { proxy_pass http://127.0.0.1:8790/api/; client_max_body_size 60m; }`

이제 **관리 콘솔** `https://앱주소/bugfix/ui/` 로 들어갑니다(키는 방금 만든 `ADMIN_KEY`). 나머지는 거기서 합니다.

### 2) 관리 콘솔에서

| 탭 | 여기서 하는 일 |
|---|---|
| 키·계정 | GitHub 토큰(전용 봇 계정의 PAT 권장), 테스트 계정 아이디/비밀번호 |
| 프로젝트 | 프로젝트 추가: 저장소·브랜치·검증 명령(`npm run lint`, `npm run build` …)·앱 주소 |
| 점검 | GitHub·저장소·Claude·docker 가 잘 붙는지 버튼으로 확인 |
| 리포트 | 전 프로젝트 현황, 진행 중 작업 로그, 리포트 열어 보기 |

비밀값은 전부 서버 홈(`~/.config/bugfix-kit/`)에만 저장되고 저장소에는 들어가지 않습니다.

### 3) 앱 저장소에

```bash
npm i -D github:hskim2515/bugfix-kit#v0.1.20
npx front-check init          # front-check.config.mjs (로그인 선택자·화면 절차) + Claude 스킬
```

프론트에 두 줄:

```js
// Vue
import { createBugfix } from 'bugfix-kit/client/vue'; import 'bugfix-kit/client/style.css';
export const kit = createBugfix({ endpoint: '/bugfix', project: 'myapp', apiKey: '…', interceptors: { console: true, network: { axios: [rest] }, mutation: store, router } });
// App.vue: <ReportModal :kit="kit" /> <Viewer ref="viewer" :kit="kit" />

// React / 그 외
import { createBugfix } from 'bugfix-kit/client';
export const kit = createBugfix({ endpoint: '/bugfix', project: 'myapp', apiKey: '…', interceptors: { console: true, network: { fetch: true }, router: true } }).mount();
```

끝. Shift+F9 로 신고, Shift+F10 으로 목록.

---

## 자주 묻는 것

- **백엔드도 고치나요?** 네. 같은 저장소면 프론트·백엔드 모두 고칩니다. 백엔드 검증은 컴파일·테스트까지(실제 API 호출 확인은 아직 없음).
- **신고 창 자체가 이상하면?** 신고 창에서 대상을 "버그 신고 도구"로 바꾸면 bugfix-kit 저장소로 PR 이 갑니다.
- **운영 서버에 영향은?** 없습니다. 개발서버 저장소·브랜치만 건드리고, front-check 는 운영 주소로 나가는 요청을 차단할 수 있습니다(`blockRequests`).
- **개인정보는?** 신고자·문제 원문은 PR 에 안 들어갑니다. 로그의 인증 관련 값은 마스킹되고, Claude 에게는 오류 위주로 추린 로그만 갑니다.
- **서버를 재시작하면?** 돌던 작업만 끊깁니다(PR 을 올린 뒤면 그대로 남음). 앱 서버 재배포와는 무관합니다.
- **프론트/백엔드가 다른 저장소면?** 프로젝트 두 개로 등록하고 신고할 때 대상을 고릅니다.

## 문제가 생기면

콘솔 **점검** 탭 → 각 항목 검사. 로그는 **로그** 탭.
서버 갱신: `cd ~/bugfix-kit && git checkout -- package-lock.json && git pull && npm install && systemctl --user restart bugfix-server`

자세한 옵션은 [server](packages/server) · [client](packages/client) · [front-check](packages/front-check) README.
