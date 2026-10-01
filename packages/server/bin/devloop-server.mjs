#!/usr/bin/env node
import express from 'express';
import { createDevLoop, bufferedLog } from '../src/core.js';
const log = bufferedLog();

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
if (args.includes('-h') || args.includes('--help')) {
  console.log(`devloop-server --config devloop.yml [--port 8790]

버그 리포트 API + Claude Code 자동 수정 파이프라인. 설정 예시는 devloop.example.yml 참고.
환경변수: DEVLOOP_GITHUB_TOKEN, DEVLOOP_KEY_<PROJECT>, DEVLOOP_CONFIG`);
  process.exit(0);
}

const kit = await createDevLoop({ configFile: opt('--config', process.env.DEVLOOP_CONFIG || 'devloop.yml'), log });
const cfg = kit.cfg;
const port = Number(opt('--port', cfg.server.port));
const app = express();
app.disable('x-powered-by');
app.use('/api', kit.router);
await kit.start();
const server = app.listen(port, cfg.server.host, () => {
  log.info(`[devloop] 서버 시작 http://${cfg.server.host}:${port}  프로젝트: ${Object.keys(cfg.projects).join(', ')}  data=${cfg.server.dataDir}  work=${cfg.server.workDir}`);
});
kit.versions?.attachUpgrade?.(server, '/api');

// 앱 재배포 등으로 내려갈 때: 띄워 둔 claude·빌드 자식부터 끝내고 나간다 (끊긴 작업은 다음 기동 때 작업 사본에서 이어간다)
for (const sig of ['SIGTERM', 'SIGINT']) {
  process.once(sig, async () => {
    const { killChildren, childCount } = await import('../src/exec.js');
    const n = killChildren('SIGTERM');
    log.info(`[devloop] ${sig} - 자식 프로세스 ${n}개 종료 요청, 서버 내림`);
    setTimeout(() => { if (childCount()) killChildren('SIGKILL'); process.exit(0); }, 3000).unref();
    try { kit.stop(); } catch { /* */ }
    server.close(() => {});
  });
}
