import { loadConfig } from './config.js';
import { FileStore } from './store.js';
import { Runner } from './runner.js';
import { createApi } from './api.js';
import { Insights } from './insights.js';
import { Knowledge } from './knowledge.js';

export const defaultLog = {
  info: (...a) => console.log(new Date().toISOString(), ...a),
  warn: (...a) => console.warn(new Date().toISOString(), ...a),
  error: (...a) => console.error(new Date().toISOString(), ...a),
};

const LOG_KEEP = 2000;
/** 로그를 원래 출력에도 보내고 최근 LOG_KEEP 줄을 메모리에 남긴다 - 콘솔 '서버 로그' 탭이 읽는다 (systemd 없이 앱 안에서 돌 때도) */
export function bufferedLog(base = defaultLog) {
  const lines = [];
  const fmt = (a) => a.map((x) => (x instanceof Error ? (x.stack || x.message) : typeof x === 'string' ? x : JSON.stringify(x))).join(' ');
  const push = (level, a) => { lines.push(`${new Date().toISOString()} ${level} ${fmt(a)}`); if (lines.length > LOG_KEEP) lines.splice(0, lines.length - LOG_KEEP); };
  return {
    info: (...a) => { push('INFO', a); base.info(...a); },
    warn: (...a) => { push('WARN', a); base.warn(...a); },
    error: (...a) => { push('ERROR', a); base.error(...a); },
    recent: (n = 200) => lines.slice(-n).join('\n'),
  };
}

/**
 * bugfix-kit 한 벌(설정·저장소·큐·제안·지식 그래프·라우터)을 만든다. 독립 서버(bin)와 앱 내장(embed)이 같이 쓴다.
 *   const kit = await createBugfixKit({ configFile }); app.use('/api', kit.router); await kit.start();
 */
export async function createBugfixKit({ configFile, log: baseLog = defaultLog } = {}) {
  const log = typeof baseLog.recent === 'function' ? baseLog : bufferedLog(baseLog);
  const cfg = loadConfig(configFile);
  const store = new FileStore(cfg.server.dataDir);
  const runner = new Runner(cfg, store, log);
  const insights = new Insights(cfg, store, runner, log);
  const knowledge = new Knowledge(cfg, store, runner, log);
  runner.knowledge = knowledge;
  insights.knowledge = knowledge;
  const router = createApi(cfg, store, runner, log, insights, knowledge);

  /** 재시작으로 끊긴 작업을 다시 큐에 넣고 예약을 시작한다 */
  async function start() {
    const redo = await store.resetInterrupted(log);
    for (const r of redo) {
      const project = cfg.projects[r.project];
      if (!project) continue;
      if (r.kind === 'followup') await runner.enqueueFollowUp(project, r.id, r.message, r.mode);
      else await runner.enqueue(project, r.id);
    }
    if (redo.length) log.info(`[bugfix] 재시작으로 끊긴 작업 ${redo.length}건을 다시 큐에 넣었습니다`);
    await insights.resetInterrupted();
    await knowledge.resetInterrupted();
    insights.startSchedules();
    knowledge.startSchedules();
    if (!cfg.githubToken(Object.values(cfg.projects)[0])) log.warn('[bugfix] 저장소 토큰이 없습니다 - 리포트 저장은 되지만 자동 수정은 거부됩니다');
  }
  function stop() { insights.stopSchedules(); knowledge.stopSchedules(); }
  return { cfg, store, runner, insights, knowledge, router, log, start, stop };
}
