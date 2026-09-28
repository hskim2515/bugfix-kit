import { firstLine } from './util.js';

/**
 * 알림 - 프로젝트 설정 notify 로 Slack(incoming webhook) 또는 일반 웹훅(JSON POST)에 보낸다.
 *   notify: { webhook: 'https://hooks.slack.com/…' | 'https://내서버/hook', events: ['fix.merged', …] | '*' , mention: '<@U123>' }
 *   웹훅 주소는 프로젝트 env(NOTIFY_WEBHOOK) 로도 줄 수 있다(키·계정 탭) - yml 에 안 남긴다.
 * 이벤트: report.new · fix.ready · fix.pr · fix.merged · fix.failed · fix.reverted · preview.up · preview.failed
 *         · deploy.done · deploy.failed · loop.done · loop.failed · insights.done · knowledge.behind
 * 실패해도 본 작업은 막지 않는다(로그만).
 */
export const EVENTS = {
  'report.new': '새 리포트', 'fix.ready': '수정본 준비(보관·브랜치)', 'fix.pr': 'PR/MR 생성', 'fix.merged': '병합 완료', 'fix.failed': '수정 실패', 'fix.reverted': '되돌림',
  'preview.up': '미리보기 준비됨', 'preview.failed': '미리보기 실패', 'deploy.done': '배포 완료', 'deploy.failed': '배포 실패',
  'loop.done': '루프 끝', 'loop.failed': '루프 실패', 'insights.done': '제안 분석 끝', 'knowledge.behind': '원격이 앞섬(지식 그래프)',
};
const DEFAULT_EVENTS = ['report.new', 'fix.pr', 'fix.merged', 'fix.failed', 'fix.reverted', 'preview.up', 'deploy.failed', 'loop.done', 'loop.failed'];

export class Notifier {
  constructor(cfg, log = console) { this.cfg = cfg; this.log = log; }

  settings(project) {
    const n = project.notify || {};
    const webhook = (n.webhook || project.env?.NOTIFY_WEBHOOK || project.env?.SLACK_WEBHOOK || '').trim();
    const events = n.events === '*' ? Object.keys(EVENTS) : (Array.isArray(n.events) && n.events.length ? n.events : DEFAULT_EVENTS);
    return { webhook, events, mention: n.mention || '' };
  }
  /** 콘솔·미리보기 등 앱 주소 기준 절대 URL: project.publicUrl → cors[0] */
  appUrl(project) { return String(project.publicUrl || (project.cors || [])[0] || '').replace(/\/+$/, ''); }
  consoleUrl(project) { const base = project.preview?.base || project.consolePath || '/bugfix'; const app = this.appUrl(project); return app ? `${app}${base}/ui/` : ''; }
  abs(project, rel) { if (!rel) return ''; if (/^https?:/.test(rel)) return rel; const app = this.appUrl(project); return app ? `${app}${rel}` : rel; }

  /** payload: { title, lines[], url, level: 'info'|'ok'|'warn'|'bad' } */
  async send(project, event, payload) {
    const st = this.settings(project);
    if (!st.webhook || !st.events.includes(event)) return false;
    const title = `[${project.name}] ${payload.title || EVENTS[event] || event}`;
    const lines = (payload.lines || []).filter(Boolean);
    const url = payload.url ? this.abs(project, payload.url) : '';
    const console = this.consoleUrl(project);
    try {
      if (/hooks\.slack\.com|slack\.com\/api/.test(st.webhook)) {
        const emoji = { ok: ':white_check_mark:', warn: ':warning:', bad: ':x:', info: ':information_source:' }[payload.level || 'info'] || '';
        const text = [`${emoji} *${title}*${st.mention ? ` ${st.mention}` : ''}`, ...lines.map((l) => `• ${l}`), url ? `<${url}|열기>` : '', console && !url ? `<${console}|콘솔>` : ''].filter(Boolean).join('\n');
        await this.post(st.webhook, { text, unfurl_links: false });
      } else {
        await this.post(st.webhook, { project: project.name, event, title, lines, url, console, at: new Date().toISOString(), ...(payload.data || {}) });
      }
      return true;
    } catch (e) { this.log.warn(`[notify ${project.name}] ${event} 전송 실패: ${firstLine(e.message, 150)}`); return false; }
  }
  async post(url, body) {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 10_000);
    try {
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctl.signal });
      if (!r.ok) throw new Error(`HTTP ${r.status} ${(await r.text().catch(() => '')).slice(0, 120)}`);
    } finally { clearTimeout(t); }
  }
  /** 콘솔 '테스트 보내기' */
  async test(project) {
    const st = this.settings(project);
    if (!st.webhook) throw Object.assign(new Error('웹훅 주소가 없습니다 - 프로젝트 탭의 알림 웹훅 또는 키·계정 탭의 NOTIFY_WEBHOOK'), { status: 400 });
    const saved = st.events; this.cfg.__testAll = true;
    try {
      const ok = await this.send({ ...project, notify: { ...(project.notify || {}), webhook: st.webhook, events: '*' } }, 'report.new', { title: '알림 테스트', lines: [`콘솔: ${this.consoleUrl(project) || '(앱 주소 미설정 - 프로젝트 탭의 앱 주소)'}`, `받는 이벤트: ${saved.map((e) => EVENTS[e] || e).join(', ')}`], level: 'info' });
      if (!ok) throw new Error('전송 실패 - 서버 로그 확인');
      return { ok: true };
    } finally { delete this.cfg.__testAll; }
  }
}
