#!/usr/bin/env node
import { loadConfig } from '../src/config.js';
import { FileStore } from '../src/store.js';
import { Runner } from '../src/runner.js';
import { createApi } from '../src/api.js';
import { Insights } from '../src/insights.js';

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
if (args.includes('-h') || args.includes('--help')) {
  console.log(`bugfix-server --config bugfix-kit.yml [--port 8790]

버그 리포트 API + Claude Code 자동 수정 파이프라인. 설정 예시는 bugfix-kit.example.yml 참고.
환경변수: BUGFIX_GITHUB_TOKEN, BUGFIX_KEY_<PROJECT>, BUGFIX_CONFIG`);
  process.exit(0);
}

const log = {
  info: (...a) => console.log(new Date().toISOString(), ...a),
  warn: (...a) => console.warn(new Date().toISOString(), ...a),
  error: (...a) => console.error(new Date().toISOString(), ...a),
};

const cfg = loadConfig(opt('--config', process.env.BUGFIX_CONFIG || 'bugfix-kit.yml'));
const port = Number(opt('--port', cfg.server.port));
const store = new FileStore(cfg.server.dataDir);
const runner = new Runner(cfg, store, log);
const insights = new Insights(cfg, store, runner, log);

await store.resetInterrupted(log);
await insights.resetInterrupted();
const app = createApi(cfg, store, runner, log, insights);
insights.startSchedules();
app.listen(port, cfg.server.host, () => {
  log.info(`[bugfix] 서버 시작 http://${cfg.server.host}:${port}  프로젝트: ${Object.keys(cfg.projects).join(', ')}  data=${cfg.server.dataDir}  work=${cfg.server.workDir}`);
  if (!cfg.githubToken()) log.warn('[bugfix] GitHub 토큰이 없습니다 - 리포트 저장은 되지만 자동 수정은 거부됩니다');
});
