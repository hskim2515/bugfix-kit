#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { check, compareDirs, recordLogin } from '../src/index.js';
import { summarize } from '../src/report.js';

const HELP = `front-check - 헤드리스 브라우저로 프론트 화면을 확인한다

  front-check check [옵션]            페이지를 열어 콘솔 오류·실패 요청·스크린샷·치수를 모아 result.json 으로
    --config <file>                   설정 (기본 front-check.config.mjs)
    --url <baseUrl>                   대상 주소 (없으면 설정의 serve/baseUrl)
    --scenario <name> [--scenario …]  설정의 시나리오 절차
    --steps '<json 배열>'             절차를 직접 지정
    --context <context.json>          버그 리포트 컨텍스트 → 설정의 fromContext() 로 절차 생성
    --out <dir>                       결과 디렉터리 (기본 front-check-out)
    --compare <beforeDir>             같은 이름 스크린샷을 픽셀 비교 (전/후)
    --json                            요약 대신 result.json 내용을 stdout 으로
    --headed                          브라우저 창을 보이게
    --no-serve                        설정의 serve 를 무시
    --no-docker                       docker 폴백 금지
  front-check login [--url base] [--out stateFile] [--wait sec] [--headed]
                                      로그인 상태 파일(쿠키+localStorage) 만들기 - 폼 자격이 있으면 자동, 없으면 창을 띄워 사람이 로그인(SSO·MFA)
  front-check compare <before> <after> [--out dir]
  front-check init                    설정 템플릿 + Claude 스킬(.claude/skills/frontend-check) 복사

절차 단계: goto · click · fill · press · keys · hover · waitFor · expect · measure · eval · screenshot · scroll
종료 코드: 0 통과 · 1 기준 초과/절차 실패 · 2 실행 오류`;

const argv = process.argv.slice(2);
const cmd = argv[0];
const flags = {};
const rest = [];
for (let i = 1; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) { rest.push(a); continue; }
  const k = a.slice(2);
  if (k.startsWith('no-')) { flags[k.slice(3).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = false; continue; }
  const next = argv[i + 1];
  const val = next !== undefined && !next.startsWith('--') ? argv[++i] : true;
  if (k === 'scenario') (flags.scenario ||= []).push(val);
  else flags[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
}
const log = flags.json ? { info() {}, warn: (...a) => console.error(...a), error: (...a) => console.error(...a) } : console;

try {
  if (!cmd || cmd === '-h' || cmd === '--help') { console.log(HELP); process.exit(0); }
  if (cmd === 'check') {
    const r = await check({ config: flags.config, url: flags.url, scenario: flags.scenario, steps: flags.steps, context: flags.context, out: flags.out, compare: flags.compare, noServe: flags.serve === false, noDocker: flags.docker === false, headed: !!flags.headed, log });
    if (flags.json) console.log(JSON.stringify({ ok: r.ok, outDir: r.outDir, ...r.result }, null, 2));
    else console.log(r.text);
    process.exit(r.ok ? 0 : 1);
  }
  if (cmd === 'login') {
    const file = await recordLogin({ config: flags.config, url: flags.url, out: flags.out, wait: flags.wait ? Number(flags.wait) : undefined, headed: !!flags.headed, noDocker: flags.docker === false, log });
    console.log(`로그인 상태 저장: ${file}\n검사에서 쓰려면 설정에 login: { type: 'state', file: '${file}', done: '<로그인 뒤 보이는 선택자>' }`);
    process.exit(0);
  }
  if (cmd === 'compare') {
    const [before, after] = rest;
    if (!before || !after) throw new Error('compare <before> <after>');
    const res = compareDirs(before, after, flags.out || after);
    if (flags.json) console.log(JSON.stringify(res, null, 2));
    else for (const c of res) console.log(`${c.name}: ${c.mismatchPct}% 다름${c.sizeChanged ? ' (크기 바뀜)' : ''} → ${c.diffFile}`);
    process.exit(0);
  }
  if (cmd === 'init') {
    const here = path.dirname(fileURLToPath(import.meta.url));
    const cwd = process.cwd();
    const copy = (from, to) => { if (fs.existsSync(to)) { console.log(`있음(건너뜀): ${to}`); return; } fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); console.log(`만듦: ${to}`); };
    copy(path.join(here, '../templates/front-check.config.mjs'), path.join(cwd, 'front-check.config.mjs'));
    copy(path.join(here, '../skills/frontend-check/SKILL.md'), path.join(cwd, '.claude/skills/frontend-check/SKILL.md'));
    copy(path.join(here, '../templates/front-check.account'), path.join(cwd, 'front-check.account'));
    // 기본은 계정 파일·결과·세션을 커밋하지 않는다. 개발용 테스트 계정을 저장소에 두려면 .gitignore 에서 front-check.account 를 지운다
    const gi = path.join(cwd, '.gitignore');
    const cur = fs.existsSync(gi) ? fs.readFileSync(gi, 'utf8') : '';
    const add = ['front-check-out/', '.front-check-state.json', 'front-check.account'].filter((l) => !cur.split(/\r?\n/).includes(l));
    if (add.length) { fs.writeFileSync(gi, cur.replace(/\n?$/, '\n') + '# front-check\n' + add.join('\n') + '\n'); console.log(`.gitignore 에 추가: ${add.join(', ')}`); }
    process.exit(0);
  }
  console.error(`모르는 명령: ${cmd}\n\n${HELP}`);
  process.exit(2);
} catch (e) {
  console.error(`[front-check] ${e.message || e}`);
  process.exit(2);
}
// summarize 는 --json 사용자가 다시 요약할 때 쓸 수 있게 export 만 유지
export { summarize };
