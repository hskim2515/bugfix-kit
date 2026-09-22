import fs from 'node:fs';
import path from 'node:path';

/** result.json 을 쓰고 사람이 읽을 요약을 돌려준다. ok 는 임계값(thresholds)과 절차 실패로 판정 */
export function writeReport(outDir, data, thresholds) {
  const s = data.collected;
  const over = [];
  if (thresholds.consoleErrors != null && s.consoleErrors > thresholds.consoleErrors) over.push(`콘솔 오류 ${s.consoleErrors}`);
  if (thresholds.pageErrors != null && s.pageErrors > thresholds.pageErrors) over.push(`페이지 예외 ${s.pageErrors}`);
  if (thresholds.failedRequests != null && s.failedRequests > thresholds.failedRequests) over.push(`실패 요청 ${s.failedRequests}`);
  const ok = over.length === 0 && data.failures.length === 0 && !data.fatal;
  const result = { ok, over, ...data, writtenAt: new Date().toISOString() };
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'result.json'), JSON.stringify(result, null, 2), 'utf8');
  return { ok, text: summarize(result, outDir) };
}

export function summarize(r, outDir) {
  const s = r.collected || {};
  const lines = [];
  lines.push(`${r.ok ? '✓' : '✗'} front-check ${r.scenario ? `[${r.scenario}] ` : ''}${r.baseUrl}  (${Math.round((r.durationMs || 0) / 100) / 10}s)`);
  if (r.fatal) lines.push(`  치명: ${r.fatal}`);
  lines.push(`  콘솔 오류 ${s.consoleErrors ?? 0} · 경고 ${s.consoleWarnings ?? 0} · 페이지 예외 ${s.pageErrors ?? 0} · 실패 요청 ${s.failedRequests ?? 0}${r.over?.length ? `  ← 기준 초과: ${r.over.join(', ')}` : ''}`);
  for (const m of (r.console || []).filter((m) => m.type === 'error').slice(0, 5)) lines.push(`    ✗ ${m.text.split('\n')[0].slice(0, 160)}${m.at ? `  (${m.at})` : ''}`);
  for (const e of (r.pageErrors || []).slice(0, 3)) lines.push(`    ✗ ${e.message.split('\n')[0].slice(0, 160)}`);
  for (const q of (r.failedRequests || []).slice(0, 5)) lines.push(`    ✗ ${q.status} ${q.method} ${q.url.slice(0, 120)}`);
  if (r.blocked?.length) lines.push(`  ⚠ 차단된 요청 ${r.blocked.length}건 (blockRequests): ${r.blocked[0].slice(0, 100)} …`);
  for (const f of r.failures || []) lines.push(`  절차 실패: ${f}`);
  for (const st of (r.steps || []).filter((x) => x.box || x.value !== undefined)) {
    if (x_has(st, 'box')) lines.push(`  measure ${JSON.stringify(st.step.measure)}: ${st.box ? `${Math.round(st.box.width)}×${Math.round(st.box.height)} @${Math.round(st.box.x)},${Math.round(st.box.y)}` : '없음'} ${st.css ? `display=${st.css.display} overflowY=${st.css.overflowY} height=${st.css.height} scroll=${st.css.scrollHeight}/${st.css.clientHeight}` : ''}`);
    if (st.value !== undefined) lines.push(`  eval ${String(st.step.eval).slice(0, 60)}: ${JSON.stringify(st.value).slice(0, 200)}`);
  }
  if (r.screenshots?.length) lines.push(`  스크린샷: ${r.screenshots.map((n) => path.join(outDir, n)).join(', ')}`);
  if (r.compare) lines.push(`  비교: ${r.compare.map((c) => `${c.name} ${c.mismatchPct}%`).join(', ')}`);
  lines.push(`  결과 파일: ${path.join(outDir, 'result.json')}`);
  return lines.join('\n');
}
const x_has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
