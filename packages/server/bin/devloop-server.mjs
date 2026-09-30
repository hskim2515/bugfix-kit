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
