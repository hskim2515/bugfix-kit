// front-check 설정 - 프로젝트마다 다른 것(주소·로그인·화면으로 가는 절차)만 여기에 적는다.
// 실행: npx front-check check --scenario main   /  npx front-check check --context .bugfix/context.json --out .bugfix/after
export default {
  // 대상. serve 를 주면 빌드 결과(dist)를 임시 포트로 서빙하고 그 주소를 쓴다(--url 로 덮어쓸 수 있음)
  baseUrl: process.env.FC_BASE_URL || '',
  serve: { dir: 'dist', port: 4173, spa: true, proxy: { /* '/api': 'https://dev.example.com' */ } },

  // 로그인: none | form | storage
  login: {
    type: 'form',
    url: '/login',
    user: '#username',
    pass: '#password',
    submit: 'button[type=submit]',
    done: '#app .main',                    // 로그인 뒤 나타나는 요소
    account: '~/.config/myapp/e2e-account', // 첫 줄 아이디, 둘째 줄 비밀번호 (chmod 600). 또는 FC_USER/FC_PASS
  },

  browser: { viewport: [1440, 900], webgl: 'swiftshader', timeoutMs: 30000 },
  thresholds: { consoleErrors: 0, pageErrors: 0, failedRequests: null },
  ignoreConsole: [],
  ignoreRequests: [],

  // 이름 붙인 절차. 단계: goto · click · fill · press · keys · hover · waitFor · expect · measure · eval · screenshot · scroll
  scenarios: {
    main: [{ goto: '/' }, { waitFor: 2000 }, { screenshot: 'main' }],
    // layerPanel: [{ click: { text: '레이어' } }, { waitFor: '.layer-panel' }, { measure: '.layer-panel' }, { screenshot: 'layer-panel' }],
  },

  // 버그 리포트 context.json(SDK 가 모은 것) → 절차. url 과 앱이 넣은 메뉴 상태로 신고 당시 화면에 간다
  fromContext(ctx) {
    const steps = [];
    try { steps.push({ goto: new URL(ctx.url).pathname + new URL(ctx.url).search }); } catch { steps.push({ goto: '/' }); }
    steps.push({ waitFor: 2500 }, { screenshot: 'context' });
    return steps;
  },
};
