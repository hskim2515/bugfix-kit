# @bugfix-kit/front-check

헤드리스 브라우저(Playwright)로 프론트 화면을 실제로 열어 **콘솔 오류·페이지 예외·실패 요청·스크린샷·요소 치수**를 모으는 CLI.
Claude 가 UI 버그를 고친 뒤 "정말 화면이 바뀌었나" 를 확인하는 용도가 첫째고, CI 스모크·전후 비교에도 쓴다.

- 프로젝트별로 다른 것(주소·로그인·화면으로 가는 절차)만 `front-check.config.mjs` 에 적는다. 나머지는 공통.
- 브라우저: 설치된 Chrome(`FC_CHANNEL=chrome`) → playwright chromium → **docker 폴백**(`mcr.microsoft.com/playwright`, sudo 없는 서버용).
- WebGL(Cesium·Three) 은 소프트웨어 렌더 플래그로 그려진다(느리지만 화면이 나온다).
- 빌드 결과 `dist/` 를 임시 포트로 서빙하고 API 접두어를 다른 서버로 프록시할 수 있다.
- Claude Code 스킬(`skills/frontend-check/SKILL.md`)이 들어 있다 - `npx front-check init` 이 `.claude/skills/` 로 복사.

## 설치·시작

```bash
npm i -D github:hskim2515/bugfix-kit#v0.1.1       # 루트에서 front-check 를 노출
npx front-check init                              # front-check.config.mjs + .claude/skills/frontend-check
npx front-check check --scenario main
```

## 명령

```
front-check check [--config f] [--url baseUrl] [--scenario name]… [--steps '<json>'] [--context ctx.json]
                  [--out dir] [--compare beforeDir] [--json] [--headed] [--no-serve] [--no-docker]
front-check compare <before> <after> [--out dir]
front-check init
```

종료 코드 0 통과 / 1 기준 초과·절차 실패 / 2 실행 오류. 결과는 `<out>/result.json` + PNG(+ `*.diff.png`).

## 절차 단계

| 단계 | 예 |
|---|---|
| goto | `{ goto: '/plans' }` |
| click | `{ click: '#save' }` · `{ click: { text: '레이어' } }` · `{ click: { role: 'button', name: '저장' } }` |
| fill | `{ fill: '#q', value: '서울' }` |
| press / keys | `{ press: 'Escape' }` · `{ keys: 'Shift+F9' }` |
| hover | `{ hover: '.menu' }` |
| waitFor | `{ waitFor: '.panel' }` · `{ waitFor: 2000 }` |
| expect | `{ expect: '.panel' }` · `{ expect: { selector: '.item', count: 3, text: '완료' } }` |
| measure | `{ measure: '.dataset-panel' }` → boundingBox + display/overflow/height/scrollHeight |
| eval | `{ eval: 'document.title' }` |
| screenshot | `{ screenshot: 'after' }` · `{ screenshot: { name: 'p', selector: '.panel' } }` |
| scroll | `{ scroll: '.footer' }` · `{ scroll: { y: 600 } }` |

## 설정 (`front-check.config.mjs`)

```js
export default {
  serve: { dir: 'dist', port: 4173, proxy: { '/api': 'https://dev.example.com' } },
  login: { type: 'form', url: '/login', user: '#username', pass: '#password', submit: 'button[type=submit]', done: '#app .main', account: '~/.config/myapp/e2e-account' },
  browser: { viewport: [1440, 900], webgl: 'swiftshader', timeoutMs: 30000 },
  thresholds: { consoleErrors: 0, pageErrors: 0, failedRequests: null },
  scenarios: { main: [{ goto: '/' }, { waitFor: 2000 }, { screenshot: 'main' }] },
  fromContext: (ctx) => [{ goto: new URL(ctx.url).pathname }, { waitFor: 2500 }, { screenshot: 'context' }],
};
```

## 로그인

앱마다 인증이 다르므로(폼·SSO·MFA·토큰) **로그인된 브라우저 상태 파일(storageState = 쿠키+localStorage)** 을 공통으로 쓴다.

```bash
npx front-check login              # 폼 자격이 있으면 자동, 없으면 창을 띄워 사람이 로그인(SSO·MFA) → 상태 파일 저장
npx front-check check --scenario main   # login.type: 'state' 면 그 파일을 주입해 로그인된 채로 시작
```

| type | 설명 |
|---|---|
| `state` | 상태 파일 주입. `done` 선택자가 안 뜨면(만료) `form` 자격이 있을 때만 자동 갱신, 없으면 "다시 login" 으로 명확히 실패 |
| `form` | 아이디·비밀번호 폼. 계정 파일(첫 줄 아이디, 둘째 줄 비밀번호, 600) 또는 `FC_USER`/`FC_PASS`. `saveState` 로 상태 파일도 저장 |
| `storage` | localStorage 만 주입(토큰 방식 앱) |
| `custom` | `run(page, { baseUrl, config })` 함수 - 서비스 계정으로 토큰 발급 등 앱이 직접 |
| `none` | 로그인 없음 |

상태 파일은 도메인에 묶이고 기계에는 묶이지 않으므로, 개발 PC 에서 만들어 서버로 복사해도 된다. 자격 값은 로그와 result.json 어디에도 남지 않는다.

## bugfix-server 와 함께

`bugfix-kit.yml` 의 프로젝트에 `frontCheck` 를 주면 검증 통과 뒤 자동으로 한 번 돌고, 결과 요약이 진행 로그와 PR 본문에 들어간다:

```yaml
    frontCheck:
      cwd: lhdt-user-front
      command: npx front-check check --context ../.bugfix/context.json --out ../.bugfix/after --json
      when: [front]        # 이 모듈이 바뀌었을 때만
```
