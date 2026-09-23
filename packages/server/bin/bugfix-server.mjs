#!/usr/bin/env node
import express from 'express';
import { createBugfixKit, defaultLog as log } from '../src/core.js';

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
if (args.includes('-h') || args.includes('--help')) {
  console.log(`bugfix-server --config bugfix-kit.yml [--port 8790]

버그 리포트 API + Claude Code 자동 수정 파이프라인. 설정 예시는 bugfix-kit.example.yml 참고.
환경변수: BUGFIX_GITHUB_TOKEN, BUGFIX_KEY_<PROJECT>, BUGFIX_CONFIG`);
  process.exit(0);
}

const kit = await createBugfixKit({ configFile: opt('--config', process.env.BUGFIX_CONFIG || 'bugfix-kit.yml'), log });
const cfg = kit.cfg;
const port = Number(opt('--port', cfg.server.port));
const app = express();
app.disable('x-powered-by');
app.use('/api', kit.router);
await kit.start();
app.listen(port, cfg.server.host, () => {
  log.info(`[bugfix] 서버 시작 http://${cfg.server.host}:${port}  프로젝트: ${Object.keys(cfg.projects).join(', ')}  data=${cfg.server.dataDir}  work=${cfg.server.workDir}`);
});
