/**
 * bugfix-kit 백엔드 로그 어댑터(Node/Express) - console 출력을 링 버퍼에 모으고 `/debug/recent-logs` 로 돌려준다.
 *
 *   import { bugfixLogs } from 'bugfix-kit/adapters/express';
 *   const logs = bugfixLogs({ max: 500 });      // console.* 을 가로채 모은다(원래 출력은 그대로)
 *   app.get('/debug/recent-logs', logs.handler); // ?level=WARN&limit=200
 *
 * 앱의 신고 설정: backendLogs: () => fetch('/api/debug/recent-logs?level=WARN&limit=200').then(r => r.json())
 */
export function bugfixLogs({ max = 500, capture = true } = {}) {
  const buffer = [];
  const push = (level, args) => {
    const message = args.map((a) => (typeof a === 'string' ? a : (a instanceof Error ? `${a.name}: ${a.message}` : safeJson(a)))).join(' ');
    buffer.push({ time: new Date().toISOString().replace('T', ' ').slice(0, 23), level, logger: 'console', message: message.slice(0, 2000) });
    while (buffer.length > max) buffer.shift();
  };
  if (capture) {
    for (const [fn, level] of [['error', 'ERROR'], ['warn', 'WARN'], ['info', 'INFO'], ['log', 'INFO'], ['debug', 'DEBUG']]) {
      const orig = console[fn].bind(console);
      console[fn] = (...args) => { try { push(level, args); } catch { /* 무시 */ } orig(...args); };
    }
  }
  const ORD = { ERROR: 4, WARN: 3, INFO: 2, DEBUG: 1 };
  const recent = (level = 'WARN', limit = 200) => {
    const min = ORD[String(level).toUpperCase()] || 0;
    const out = [];
    for (let i = buffer.length - 1; i >= 0 && out.length < limit; i--) if ((ORD[buffer[i].level] || 0) >= min) out.push(buffer[i]);
    return out;
  };
  return {
    add: (level, message, logger = 'app') => push(level, [message]) && logger,
    recent,
    handler: (req, res) => { res.json(recent(req.query?.level, Math.min(Math.max(Number(req.query?.limit) || 200, 1), 500))); },
  };
}

function safeJson(v) { try { return JSON.stringify(v); } catch { return String(v); } }
