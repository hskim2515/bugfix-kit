# bugfix-kit

앱 안에서 버그를 신고하면(Shift+F9) 개발서버의 AI(Claude Code)가 **원인을 찾아 고치고 → 검증하고 → 실제 화면을 열어 확인하고 → PR 을 올려 병합하고 → 배포까지 지켜보는** 도구 모음입니다.
LHDT 에서 만든 기능을 어떤 프로젝트에나 붙일 수 있게 라이브러리로 뽑았습니다. Vue·React·순수 HTML 프론트, 어떤 백엔드든 상관없습니다.

```
사용자 (앱 안)                     개발서버                                      GitHub / CI
┌──────────────┐   리포트    ┌────────────────────────────────────────┐   PR·병합   ┌─────────────┐
│ Shift+F9 신고 │ ─────────▶ │ bugfix-server                          │ ─────────▶ │ 저장소       │
│ 캡처·로그·상태 │            │  1 저장소 worktree                      │            │ Actions 배포 │
│              │ ◀───────── │  2 Claude Code 가 원인 찾아 수정 (실시간 로그) │ ◀───────── │             │
│ Shift+F10 목록│  진행·대화  │  3 lint·build·compile 검증              │  배포 결과  └─────────────┘
│  질문·추가요청 │            │  4 front-check: 헤드리스 화면 확인       │
└──────────────┘            │  5 PR → 자동 병합 → 배포 추적           │
                            └────────────────────────────────────────┘
```

| 패키지 | 역할 |
|---|---|
| [`packages/server`](packages/server) | 리포트 저장 + 자동 수정 파이프라인 서비스. 개발서버 한 대에 하나 띄우고 프로젝트 여러 개를 설정 파일로 담당 |
| [`packages/client`](packages/client) | 브라우저 SDK. 수집(콘솔·네트워크·상태·경로), 화면 캡처(그리기 편집), 신고 창, 진행/대화 뷰어. Web Component + Vue 빌드 |
| [`packages/front-check`](packages/front-check) | 헤드리스 브라우저로 화면을 실제로 열어 확인하는 CLI + Claude 스킬. 파이프라인이 자동으로 부르고, 사람도 쓴다 |

---

## 1. 한 번에 이해하기: 리포트 하나의 여정

1. 사용자가 앱에서 **Shift+F9** → 화면이 캡처되고(펜·사각형·글자로 표시 가능), 신고 직전의 콘솔·네트워크·상태 변화·경로·앱 컨텍스트가 자동으로 붙습니다. 문제·재현·기대 결과를 적고 **서버 저장**.
2. **Shift+F10** 목록에서 리포트를 열고 **AI 에게 수정 요청**.
3. 서버가 저장소를 받아(worktree) `.bugfix/` 에 리포트 자료를 풀고 **Claude Code** 를 돌립니다. 무엇을 읽고 무엇을 고치는지 **실시간 로그**로 보입니다(`읽기 …`, `✏️ 수정 …`, `$ npm run build`).
4. 바뀐 모듈의 **검증 명령**(lint·build·compile)을 돌리고, 프론트가 바뀌었으면 **front-check** 가 헤드리스 브라우저로 로그인해 신고 당시 화면을 열어 콘솔 오류·스크린샷을 남깁니다.
5. 브랜치 푸시 → **PR** → base 와 합치고(충돌은 Claude 가 해결) → 재검증 → **병합** → 정말 들어갔는지 확인 → **배포 워크플로 추적**(`✓ 배포 완료`).
6. 뷰어에서 **질문**(코드 변경 없음)이나 **수정 요청**(이어서 고침)을 보내면 같은 Claude 세션이 이어집니다. AI 가 남긴 **추천 개선**은 버튼 하나로 실행.

전 과정은 리포트 하나당 보통 5~10분, Claude 비용 $0.5~1 입니다.

---

## 2. 서버 준비 (개발서버 한 대, 한 번만)

필요한 것: Node ≥ 18, git, docker(헤드리스 브라우저용, sudo 없이 가능), Claude Code CLI 로그인, GitHub PAT.

```bash
git clone https://github.com/hskim2515/bugfix-kit.git ~/bugfix-kit && cd ~/bugfix-kit && npm install
cp packages/server/bugfix-kit.example.yml packages/server/bugfix-kit.yml     # 프로젝트 설정 (아래 3절)

# 운영자 비밀값 - 전부 서버 홈에만, 저장소에는 절대 넣지 않는다
mkdir -p ~/.config/bugfix-kit/projects && chmod 700 ~/.config/bugfix-kit
(umask 077; echo ghp_xxx > ~/.config/bugfix-kit/github-token)                # GitHub PAT (classic, repo). 전용 봇 계정 권장
claude login                                                                 # 서버 실행 계정으로 한 번

docker pull mcr.microsoft.com/playwright:v1.47.2-jammy                       # front-check 헤드리스 브라우저
cp packages/server/deploy/bugfix-server.service ~/.config/systemd/user/
systemctl --user daemon-reload && systemctl --user enable --now bugfix-server && loginctl enable-linger $USER
curl -s localhost:8790/api/health          # {"ok":true,"projects":[...]}
```

외부에서 닿게 nginx 에 한 줄 (앱과 같은 도메인 아래 `/bugfix/`):
```nginx
location ^~ /bugfix/ { proxy_pass http://127.0.0.1:8790/api/; client_max_body_size 60m; proxy_read_timeout 120s; }
```

비밀값 위치 정리:

| 무엇 | 어디 |
|---|---|
| Claude 로그인 | 서버 계정 `~/.claude` (모든 프로젝트 공유) |
| GitHub 토큰 | `~/.config/bugfix-kit/github-token` (공용) · 프로젝트별로 다르면 `projects/<이름>.env` 의 `GITHUB_TOKEN` |
| 프로젝트 API 키 | yml `apiKey` 또는 `projects/<이름>.env` 의 `BUGFIX_API_KEY` (프론트에도 들어가는 공개 키, 남용 방지 수준) |
| front-check 테스트 계정 | `projects/<이름>.env` 의 `FC_USER` / `FC_PASS` (개발 서버 전용 테스트 계정) |
| 모든 프로젝트 공통값 | `~/.config/bugfix-kit/default.env` |

`*.env` 는 `KEY=VALUE` 한 줄씩, chmod 600. 파일만 바꾸면 재시작 없이 다음 작업부터 반영됩니다.

---

## 3. 프로젝트 등록 (프로젝트마다 10분)

### 3-1. 서버 `bugfix-kit.yml` 에 블록 추가

```yaml
projects:
  myapp:
    repo: https://github.com/org/myapp.git
    githubRepo: org/myapp
    baseBranch: develop
    autoMerge: true                       # 검증 통과 시 바로 병합. false 면 PR 만
    cors: [https://dev.myapp.com]
    description: "MyApp (Vue 3 프론트 web/, Spring Boot 백엔드 api/)"
    conventions: |
      - 주석은 한국어. SCSS 는 web/src/styles 를 고친다.
    modules:                              # 바뀐 파일 경로로 모듈을 고르고 그 검증 명령을 돌린다
      - { name: front, match: web/, dir: web, nodeModulesCache: true, verify: [npm run lint, npm run build-dev] }
      - { name: back,  match: api/, dir: .,   verify: [./gradlew :api:compileJava -q] }
    frontCheck:                           # 검증 뒤 실제 화면 확인 (프론트가 바뀌었을 때만)
      cwd: web
      command: npx front-check check --context ../.bugfix/context.json --out ../.bugfix/after --json
      when: [front]
```
`systemctl --user restart bugfix-server`. 테스트 계정은 `~/.config/bugfix-kit/projects/myapp.env` 에 `FC_USER=… / FC_PASS=…`.

> 검증 빌드가 **어느 서버를 보는 모드**인지 꼭 확인하세요. 운영 서버를 보는 빌드를 검증에 쓰면 front-check 가 운영에 로그인하려 듭니다. (`front-check.config.mjs` 의 `blockRequests` 로 운영 호스트를 차단해 두는 것도 권장)

### 3-2. 저장소에 넣을 것

```bash
npm i -D github:hskim2515/bugfix-kit#v0.1.17
npx front-check init            # front-check.config.mjs + .claude/skills/frontend-check + .gitignore 항목
```
- `front-check.config.mjs`: 로그인 선택자(`#username`, `#password`, 제출 버튼, 로그인 뒤 보이는 요소), 시나리오, 리포트 컨텍스트 → 화면 절차. 비밀값 없음.
- `CLAUDE.md`: 프로젝트 규약. Claude 가 worktree 안에서 돌기 때문에 저장소의 `CLAUDE.md`·`.claude/skills` 가 그대로 적용됩니다.
- (선택) 백엔드 최근 로그 조회 API 하나(예: `GET /debug/recent-logs`) — 신고 때 백엔드 로그도 함께 담기게.

### 3-3. 프론트에 두 줄

**Vue 3**
```js
import { createBugfix } from 'bugfix-kit/client/vue';
import 'bugfix-kit/client/style.css';
export const kit = createBugfix({
  endpoint: process.env.VUE_APP_BUGFIX_ENDPOINT,        // https://dev.myapp.com/bugfix
  project: 'myapp', apiKey: process.env.VUE_APP_BUGFIX_KEY,
  user: () => currentUser.id,
  context: () => ({ route: router.currentRoute.value.name, camera: … }),   // 앱 전용 상태
  capture: { canvases: () => [viewer.canvas] },                             // WebGL 캔버스가 있으면
  backendLogs: async () => (await rest.get('/debug/recent-logs')).data,
  interceptors: { console: true, network: { axios: [rest] }, mutation: store, router, events: emitter },
  projects: [{ key: 'myapp', label: '앱' }, { key: 'bugfix-kit', label: '버그 신고 도구' }],
});
```
```vue
<ReportModal :kit="kit" @open-viewer="$refs.viewer.open()" />  <Viewer ref="viewer" :kit="kit" />
```

**React / 그 외 (Web Component 빌드)**
```ts
import { createBugfix, reduxMiddleware } from 'bugfix-kit/client';
const mw = reduxMiddleware();   // Redux. Zustand 는 zustandSource(useStore)
export const kit = createBugfix({
  endpoint: import.meta.env.VITE_BUGFIX_ENDPOINT, project: 'myapp', apiKey: import.meta.env.VITE_BUGFIX_KEY,
  interceptors: { console: true, network: { fetch: true, xhr: true }, router: true, mutation: mw.source },
}).mount();                     // <bugfix-report-modal>·<bugfix-viewer> 를 body 에 붙임
```

**순수 HTML**
```html
<script src="https://…/bugfix-client.iife.js"></script>
<script>BugfixKit.install({ endpoint: '/bugfix', project: 'myapp', interceptors: { console: true, network: { fetch: true } } });</script>
```

환경별 endpoint: 개발 → `https://dev.myapp.com/bugfix`, 로컬 → devServer 프록시 `/bugfix`, 운영 → 비움(서버 저장 없이 복사·다운로드만).

---

## 4. 쓰는 법 (사용자)

| 하고 싶은 것 | 어떻게 |
|---|---|
| 버그 신고 | **Shift+F9** → 캡처 확인(다시 찍기 / 그리기·표시 / 이미지 불러오기 / Ctrl+V 붙여넣기) → 심각도·문제·재현·기대 결과 → **서버 저장** |
| 도구 자체(신고 창·뷰어) 버그 | 신고 창 헤더에서 신고 대상을 **버그 신고 도구** 로 바꿔 신고 → bugfix-kit 저장소로 PR |
| 고치기 | **Shift+F10** → 리포트 → **AI 에게 수정 요청** → 실시간 로그 · PR 링크 · 병합 · 배포 결과 |
| 물어보기 | 아래 입력창에 쓰고 **질문** (코드 변경 없음, 같은 세션이 답함) |
| 이어서 고치기 | 입력창에 쓰고 **수정 요청** (검증 → PR → 병합까지 다시) · AI 가 남긴 **추천 개선**은 버튼 하나로 |
| 처음부터 | **처음부터 다시** (앞선 대화를 잇지 않고 원인 조사부터) |
| 상태가 안 바뀜 | **새로고침** (PR 이 열려 있으면 GitHub 와 맞추고 가능하면 병합 재시도) |

상태 흐름: `대기 중 → AI 가 고치는 중 → PR 올라옴 → 병합 완료 → (배포 진행 중 → 배포 완료)` / `실패 · 진행 로그 확인`

---

## 5. 개발자가 직접 쓰는 front-check

```bash
npx front-check check --scenario main                 # 설정의 시나리오
npx front-check check --context .bugfix/context.json --out before      # 고치기 전
npx front-check check --context .bugfix/context.json --out after --compare before   # 고친 뒤 + 픽셀 비교
npx front-check check --steps '[{"goto":"/"},{"click":{"text":"레이어"}},{"measure":".panel"},{"screenshot":"p"}]'
npx front-check login                                 # SSO·MFA 앱: 창에서 한 번 로그인해 세션 저장
```
결과는 `result.json` + PNG(+ `*.diff.png`). Claude 는 저장소의 `frontend-check` 스킬로 같은 명령을 씁니다.

---

## 6. 안전장치 · 개인정보

- 보고자·문제 원문은 PR/커밋에 넣지 않습니다(번호만). `.bugfix/` 는 커밋에서 제외.
- Claude 에게는 `user`·`routeHistory` 를 뺀 컨텍스트와 **오류 위주로 추린 로그**만 줍니다(토큰 절약).
- 네트워크 로그의 인증 관련 URL·본문은 `[masked]`, localStorage 의 토큰류 키는 제외.
- GitHub 토큰은 git 의 `http.extraheader` 로만 넘겨 `.git/config` 에 남지 않습니다.
- 병합은 "GitHub 가 병합됐다고 함" 을 믿지 않고 `git merge-base --is-ancestor` 로 실제 반영을 확인합니다. 이미 병합·닫힌 PR 에 후속 요청이 오면 새 브랜치·새 PR.
- front-check 의 `blockRequests` 로 운영 서버로 나가는 요청을 브라우저 단에서 차단할 수 있습니다.
- 원인이 의존 패키지(node_modules)에 있으면 Claude 는 고치지 않고 "라이브러리 문제" 로 보고합니다.

---

## 7. 알아 둘 한계

- **백엔드 검증은 컴파일·테스트까지**입니다. 프론트의 front-check 같은 "실제 API 호출 확인"(api-check)은 아직 없습니다.
- 프론트와 백엔드가 **같은 저장소**일 때 리포트 하나로 둘 다 고칩니다. 분리 저장소는 프로젝트 두 개로 등록(신고 대상 선택).
- 큐는 서버당 하나 — Claude 를 동시에 여러 개 돌리지 않습니다. 대기 순번은 로그에 보입니다.
- 서버를 재시작하면 돌던 작업은 끊깁니다(PR 을 올린 뒤였다면 `PR 올라옴` 으로 남고 새로고침이 맞춤). 앱 서버 재배포와는 무관합니다.
- 헤드리스 WebGL 은 소프트웨어 렌더라 느립니다. 화면 확인 절차의 `waitFor` 를 넉넉히.

---

## 8. 문제가 생기면

| 증상 | 확인 |
|---|---|
| 신고가 저장 안 됨 | `curl https://…/bugfix/health` · 브라우저 콘솔의 401(API 키)·403(cors) · nginx `/bugfix/` |
| "GitHub 토큰이 없습니다" | `~/.config/bugfix-kit/github-token` 또는 `projects/<이름>.env` 의 `GITHUB_TOKEN` |
| 화면 확인 실패 | 진행 로그의 원인 줄 · 테스트 계정(`FC_USER/FC_PASS`) · 검증 빌드가 개발 서버를 보는 모드인지 · `docker pull` 됐는지 |
| 병합됐는데 배포가 안 돎 | 바뀐 경로가 워크플로 `paths` 에 있는지 · 로그의 "배포 워크플로가 시작되지 않았습니다" |
| 서버 로그 | `journalctl --user -u bugfix-server -f` (안 보이면 `systemctl --user status bugfix-server -n 200`) |
| 서버 갱신 | `cd ~/bugfix-kit && git checkout -- package-lock.json && git pull && npm install && systemctl --user restart bugfix-server` |

---

## 9. 개발

```bash
npm install                                   # 루트(워크스페이스)
npm test                                      # server · front-check 단위 테스트
(cd packages/client && npm run build)         # dist 3종 (커밋한다 - git 설치 소비자용)
python3 -m http.server 8792 -d packages/client   # test/index.html?auto=1 헤드리스 점검 (server :8791 필요)
```
릴리스: 버전 올리고 태그(`vX.Y.Z`) → 소비 프로젝트는 `npm i -D github:hskim2515/bugfix-kit#vX.Y.Z`.
