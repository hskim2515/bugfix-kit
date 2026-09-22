import os from 'node:os';

/** 첫 줄만, max 자 넘으면 … */
export function firstLine(s, max = 200) {
  if (s == null) return '';
  const l = String(s).trim().split(/\r?\n/, 1)[0];
  return l.length > max ? l.slice(0, max) + '…' : l;
}

export const tail = (s, n) => (s.length > n ? s.slice(-n) : s);
export const notBlank = (s) => typeof s === 'string' && s.trim().length > 0;
export const orDash = (s) => (notBlank(s) ? s : '-');
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const expandHome = (p) => (p ? p.replace(/^~(?=$|\/)/, os.homedir()) : p);

const pad = (n) => String(n).padStart(2, '0');
/** 브랜치 이름용 yyyyMMdd-HHmmss */
export function stamp(d = new Date()) {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}
/** 진행 로그 앞에 붙이는 HH:MM:SS */
export function hhmmss(d = new Date()) {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
export const nowIso = () => new Date().toISOString();

/** result.md → { title, body }. 첫 줄(# 제목)이 PR 제목 */
export function parseResult(md) {
  if (!notBlank(md)) return {};
  const [first, rest = ''] = md.trim().split(/\r?\n/, 2).length === 2
    ? [md.trim().split(/\r?\n/)[0], md.trim().split(/\r?\n/).slice(1).join('\n')]
    : [md.trim(), ''];
  let title = first.replace(/^#+\s*/, '').trim();
  if (title.length > 80) title = title.slice(0, 80) + '…';
  return { title, body: rest.trim() };
}

/** 상태 코드 있는 오류 - API 가 그대로 응답에 쓴다 */
export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
