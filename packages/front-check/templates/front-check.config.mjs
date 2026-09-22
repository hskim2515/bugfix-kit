// front-check 설정 - 프로젝트마다 다른 것(주소·로그인·화면으로 가는 절차)만 여기에 적는다.
// 실행: npx front-check check --scenario main   /  npx front-check check --context .bugfix/context.json --out .bugfix/after
export default {
  // 대상. serve 를 주면 빌드 결과(dist)를 임시 포트로 서빙하고 그 주소를 쓴다(--url 로 덮어쓸 수 있음)
  baseUrl: process.env.FC_BASE_URL || '',
  serve: { dir: 'dist', port: 4173, spa: true, proxy: { /* '/api': 'https://dev.example.com' */ } },

  // 로그인: none | state | form | storage | custom  (앱마다 인증이 달라 "로그인된 브라우저 상태 파일" 을 공통으로 쓴다)
  //  - state : `npx front-check login` 으로 만든 상태 파일(쿠키+localStorage)을 주입해 시작. SSO·MFA 도 한 번 사람이 로그인해 저장하면 됨.
  //            done 선택자가 안 뜨면(만료) form 자격이 있을 때만 자동 갱신, 없으면 명확히 실패
  //  - form  : 아이디·비밀번호 폼 (계정 파일 첫 줄 아이디, 둘째 줄 비밀번호 / FC_USER·FC_PASS). state 를 만드는 수단으로도 쓴다
  //  - custom: run(page, { baseUrl }) 함수로 앱이 직접 (서비스 계정 토큰 발급 → localStorage 주입 등)
  login: {
    type: 'state',
    file: '~/.config/myapp/front-check-state.json',
    done: '#app .main',                    // 로그인된 화면에만 있는 요소
    form: {                                // 있으면 login 명령·만료 갱신에 쓴다 (없으면 창을 띄워 사람이 로그인)
      url: '/login', user: '#username', pass: '#password', submit: 'button[type=submit]',
      account: '~/.config/myapp/e2e-account',
    },
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
