import fs from 'node:fs/promises';
import path from 'node:path';
import { orDash } from './util.js';

/**
 * 리포트를 작업 사본의 `.bugfix/` 에 파일로 푼다 - Claude 가 읽는 자료.
 *   summary.md · screenshot.png · context.json · frontend-logs.json · backend-logs.json · network-logs.json · mutation-log.json
 * 개인정보·토큰 소모를 줄인다: 사용자 정보(user·routeHistory)는 빼고, 로그는 오류 우선 + 최근순으로 추린다.
 */
export async function writeReportFiles(dir, r) {
  await fs.mkdir(dir, { recursive: true });
  const w = async (name, content) => { if (content) await fs.writeFile(path.join(dir, name), content, 'utf8'); };

  await w('summary.md',
    `# 버그 리포트 #${r.bugReportId}\n\n- 심각도: ${orDash(r.severity)}\n- 일시: ${r.insertDate || '-'}\n\n`
    + `## 문제\n${orDash(r.problem)}\n\n## 재현 절차\n${orDash(r.reproSteps)}\n\n## 기대 결과\n${orDash(r.expectedResult)}\n`);

  if (r.screenshot) {
    const comma = r.screenshot.indexOf(',');
    const b64 = r.screenshot.startsWith('data:') && comma > 0 ? r.screenshot.slice(comma + 1) : r.screenshot;
    try { await fs.writeFile(path.join(dir, 'screenshot.png'), Buffer.from(b64.trim(), 'base64')); }
    catch { /* 깨진 스크린샷은 건너뜀 */ }
  }

  await w('context.json', stripKeys(r.contextJson, ['user', 'routeHistory']));
  await w('frontend-logs.json', trimLog(r.frontendLogs, (n) => ['error', 'warn'].includes(String(n.level || '')), 120, 60, 400));
  await w('backend-logs.json', trimLog(r.backendLogs, (n) => /^(ERROR|WARN)/.test(String(n.level || '').toUpperCase()), 120, 60, 500));
  await w('network-logs.json', trimLog(r.networkLogs, (n) => {
    const st = n.status;
    return (n.error != null) || (typeof st === 'number' && st >= 400) || (st != null && typeof st !== 'number');
  }, 60, 30, 300));
  await w('mutation-log.json', trimLog(r.mutationLog, () => false, 0, 60, 300));
}

/** JSON 배열 로그를 (우선 항목 최대 keepPri) + (마지막 keepTail) 로 추리고 긴 문자열 값은 maxLen 으로 자른다 */
export function trimLog(raw, priority, keepPri, keepTail, maxLen) {
  if (!raw) return null;
  const s = typeof raw === 'string' ? raw : JSON.stringify(raw);
  try {
    const arr = JSON.parse(s);
    if (!Array.isArray(arr)) return s.length > 20000 ? s.slice(0, 20000) : s;
    const n = arr.length;
    const keep = new Set();
    for (let i = 0; i < n && keep.size < keepPri; i++) if (priority(arr[i] ?? {})) keep.add(i);
    for (let i = Math.max(0, n - keepTail); i < n; i++) keep.add(i);
    const out = [...keep].sort((a, b) => a - b).map((i) => clipStrings(structuredClone(arr[i]), maxLen));
    out.unshift({ _note: `원본 ${n}건 중 ${out.length}건 (오류 우선 + 최근순). 전체는 앱의 버그 리포트 화면에 있습니다` });
    return JSON.stringify(out);
  } catch {
    return s.length > 20000 ? s.slice(0, 20000) : s;
  }
}

function clipStrings(node, maxLen) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) node[i] = typeof node[i] === 'string' && node[i].length > maxLen ? node[i].slice(0, maxLen) + '…' : clipStrings(node[i], maxLen);
  } else if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) node[k] = typeof node[k] === 'string' && node[k].length > maxLen ? node[k].slice(0, maxLen) + '…' : clipStrings(node[k], maxLen);
  }
  return node;
}

export function stripKeys(raw, keys) {
  if (!raw) return null;
  const s = typeof raw === 'string' ? raw : JSON.stringify(raw);
  try {
    const o = JSON.parse(s);
    if (o && typeof o === 'object' && !Array.isArray(o)) { for (const k of keys) delete o[k]; return JSON.stringify(o); }
    return s;
  } catch { return s; }
}
