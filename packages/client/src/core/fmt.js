/**
 * 사람이 읽기 좋게 - 리포트 본문·AI 답변(마크다운 비슷한 텍스트), 진행 로그, diff 를 안전한 HTML 로.
 * 입력은 전부 이스케이프하고 우리가 아는 표시만 태그로 바꾼다. 콘솔(index.html)과 뷰어(Viewer.vue)가 같이 쓴다.
 * 스타일 클래스: .bf-md  .bf-log  .bf-diff  (CSS 는 쓰는 쪽에 - 뷰어는 shadow DOM 이라 따로 넣는다)
 */
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 한 줄 안의 강조: `code` · **bold** · 파일:줄 · URL */
function inline(t) {
  let s = esc(t);
  s = s.replace(/`([^`]+)`/g, (m, c) => `<code>${c}</code>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  s = s.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  // 경로(확장자 있음)와 :줄 - 이미 code 안이면 건드리지 않는다
  s = s.replace(/(^|[\s(])((?:[\w.-]+\/)+[\w.-]+\.(?:java|js|ts|tsx|jsx|vue|py|xml|yml|yaml|json|properties|gradle|sql|md|scss|css|html)(?::\d+)?)(?=$|[\s,)])/g, (m, pre, p) => (m.includes('<code>') ? m : `${pre}<code class="p">${p}</code>`));
  return s;
}

/** 마크다운 비슷한 텍스트 → 문단·목록·제목·코드 블록. 빈 줄이 문단 경계, "라벨: " 로 시작하는 줄은 라벨을 굵게 */
export function mdLite(text) {
  const src = String(text ?? '').replace(/\r\n?/g, '\n').trim();
  if (!src) return '';
  const out = [];
  const lines = src.split('\n');
  let i = 0;
  const flushPara = (buf) => { if (buf.length) out.push(`<p>${buf.map(paraLine).join('<br>')}</p>`); buf.length = 0; };
  const paraLine = (l) => {
    const m = l.match(/^([가-힣A-Za-z][가-힣A-Za-z ·/]{0,14}):\s+(.*)$/);   // 근거: / 관련 파일: / 요청: / Root cause:
    return m ? `<b class="lbl">${esc(m[1])}:</b> ${inline(m[2])}` : inline(l);
  };
  let para = [];
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) {
      flushPara(para);
      const lang = l.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre class="code"${lang ? ` data-lang="${esc(lang)}"` : ''}>${esc(buf.join('\n'))}</pre>`);
      continue;
    }
    const h = l.match(/^(#{1,4})\s+(.*)$/);
    if (h) { flushPara(para); out.push(`<h${Math.min(6, h[1].length + 2)}>${inline(h[2])}</h${Math.min(6, h[1].length + 2)}>`); i++; continue; }
    if (/^\s*([-*•]|\d+[.)])\s+/.test(l)) {
      flushPara(para);
      const ordered = /^\s*\d+[.)]\s+/.test(l);
      const items = [];
      while (i < lines.length && /^\s*([-*•]|\d+[.)])\s+/.test(lines[i])) {
        let item = lines[i].replace(/^\s*([-*•]|\d+[.)])\s+/, '');
        i++;
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*•]|\d+[.)])\s+/.test(lines[i])) item += ' ' + lines[i++].trim();
        items.push(`<li>${inline(item)}</li>`);
      }
      out.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`);
      continue;
    }
    if (/^\s*$/.test(l)) { flushPara(para); i++; continue; }
    if (/^(---|\*\*\*|___)\s*$/.test(l)) { flushPara(para); out.push('<hr>'); i++; continue; }
    para.push(l);
    i++;
  }
  flushPara(para);
  return `<div class="bf-md">${out.join('')}</div>`;
}

const STAGE_KIND = [
  [/^✓/, 'ok'], [/^✗/, 'bad'], [/^▶/, 'start'], [/^■/, 'stop'], [/^↻/, 'warn'], [/실패|오류|error/i, 'bad'],
];
const DETAIL_KIND = [
  [/^💬/, 'say'], [/^✏️|^✏/, 'edit'], [/^\$ /, 'cmd'], [/^읽기 /, 'read'], [/^검색 /, 'grep'], [/^Claude 종료|^Claude 답변/, 'end'],
];
/** 진행 로그(HH:MM:SS  단계 / HH:MM:SS    세부) 와 서버 로그(ISO 시각 LEVEL …) 를 줄 단위로 색·들여쓰기 */
export function logHtml(text) {
  const src = String(text ?? '').replace(/\r\n?/g, '\n');
  if (!src.trim()) return '';
  const rows = [];
  for (const raw of src.split('\n')) {
    if (!raw.trim()) continue;
    let m = raw.match(/^(\d\d:\d\d:\d\d)\s\s(\s*)(.*)$/);
    if (m) {
      const [, ts, indent, body] = m;
      const detail = indent.length >= 2;
      let kind = '';
      for (const [re, k] of (detail ? DETAIL_KIND : STAGE_KIND)) if (re.test(body)) { kind = k; break; }
      rows.push(`<div class="ln ${detail ? 'detail' : 'stage'}${kind ? ` ${kind}` : ''}"><span class="ts">${ts}</span><span class="tx">${inline(body)}</span></div>`);
      continue;
    }
    m = raw.match(/^(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z?)\s+(INFO|WARN|ERROR|DEBUG)?\s*(.*)$/);
    if (m) {
      const [, ts, lvl, body] = m;
      rows.push(`<div class="ln srv ${(lvl || 'info').toLowerCase()}"><span class="ts">${esc(ts.slice(11, 19))}</span>${lvl ? `<span class="lvl">${lvl}</span>` : ''}<span class="tx">${inline(body)}</span></div>`);
      continue;
    }
    if (/^── .+ ──$/.test(raw.trim())) { rows.push(`<div class="ln group">${esc(raw.trim().replace(/^── | ──$/g, ''))}</div>`); continue; }
    rows.push(`<div class="ln cont"><span class="ts"></span><span class="tx">${inline(raw)}</span></div>`);
  }
  return `<div class="bf-log">${rows.join('')}</div>`;
}

/** unified diff → 파일별 접이식 블록, 줄 색. stat 이 있으면 맨 위에 */
export function diffHtml(patch, stat = '') {
  const src = String(patch ?? '').replace(/\r\n?/g, '\n');
  const parts = src.split(/^(?=diff --git )/m).filter((p) => p.trim());
  const files = parts.map((p) => {
    const lines = p.split('\n');
    const head = lines[0].match(/^diff --git a\/(.+?) b\/(.+)$/);
    const name = head ? head[2] : lines[0];
    let add = 0, del = 0;
    const body = [];
    for (const l of lines.slice(1)) {
      if (/^(index |--- |\+\+\+ |new file|deleted file|similarity|rename |old mode|new mode)/.test(l)) continue;
      let cls = 'ctx';
      if (l.startsWith('@@')) cls = 'hunk';
      else if (l.startsWith('+')) { cls = 'add'; add++; }
      else if (l.startsWith('-')) { cls = 'del'; del++; }
      else if (l.startsWith('\\')) cls = 'meta';
      body.push(`<div class="dl ${cls}">${esc(l) || ' '}</div>`);
    }
    return `<details class="file" open><summary><code>${esc(name)}</code> <span class="cnt"><span class="add">+${add}</span> <span class="del">−${del}</span></span></summary><div class="body">${body.join('')}</div></details>`;
  });
  const statHtml = stat ? `<pre class="stat">${esc(String(stat).trim())}</pre>` : '';
  return `<div class="bf-diff">${statHtml}${files.join('') || '<div class="dim">변경 없음</div>'}</div>`;
}

/** 공용 CSS - 콘솔·뷰어가 각자 넣는다(뷰어는 shadow DOM). 색은 어두운 바탕 기준, .light 안에서는 밝은 바탕 */
export const FMT_CSS = `
.bf-md { line-height: 1.55; word-break: break-word; }
.bf-md p { margin: 0 0 8px; } .bf-md p:last-child { margin-bottom: 0; }
.bf-md ul, .bf-md ol { margin: 0 0 8px; padding-left: 20px; } .bf-md li { margin: 2px 0; }
.bf-md h3, .bf-md h4, .bf-md h5, .bf-md h6 { margin: 10px 0 4px; font-size: 1em; font-weight: 600; }
.bf-md h3:first-child, .bf-md h4:first-child { margin-top: 0; }
.bf-md code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.92em; padding: 1px 5px; border-radius: 4px; background: rgba(127,127,127,0.18); }
.bf-md code.p { color: #9fd0ff; } .light .bf-md code.p { color: #1d4ed8; }
.bf-md pre.code { margin: 6px 0 8px; padding: 8px 10px; border-radius: 6px; background: rgba(0,0,0,0.3); font: 11px/1.5 ui-monospace, Menlo, Consolas, monospace; white-space: pre-wrap; word-break: break-all; }
.light .bf-md pre.code { background: #1f2530; color: #d8dee6; }
.bf-md b.lbl { color: #ffd479; } .light .bf-md b.lbl { color: #9a3412; }
.bf-md hr { border: 0; border-top: 1px solid rgba(127,127,127,0.3); margin: 8px 0; }
.bf-md a { color: #8ab4ff; } .light .bf-md a { color: #1d4ed8; }
.bf-log { font: 11px/1.5 ui-monospace, Menlo, Consolas, monospace; }
.bf-log .ln { display: flex; gap: 8px; padding: 1px 4px; border-radius: 3px; white-space: pre-wrap; word-break: break-word; }
.bf-log .ts { flex: 0 0 60px; color: #6b7686; }
.bf-log .lvl { flex: 0 0 44px; font-weight: 600; }
.bf-log .stage { color: #e6ebf2; font-weight: 600; margin-top: 3px; } .light .bf-log .stage { color: #1f2937; }
.bf-log .stage.ok { color: #7fe0a4; } .bf-log .stage.bad { color: #ff9aa8; } .bf-log .stage.start { color: #8ec1ff; } .bf-log .stage.warn { color: #f2d16b; } .bf-log .stage.stop { color: #b9c3d0; }
.light .bf-log .stage.ok { color: #15803d; } .light .bf-log .stage.bad { color: #b91c1c; } .light .bf-log .stage.start { color: #1d4ed8; } .light .bf-log .stage.warn { color: #a16207; }
.bf-log .detail { color: #8b97a8; padding-left: 18px; } .light .bf-log .detail { color: #5b6573; }
.bf-log .detail.say { color: #c9d4e3; } .light .bf-log .detail.say { color: #374151; }
.bf-log .detail.edit { color: #ffd479; } .light .bf-log .detail.edit { color: #9a3412; }
.bf-log .detail.cmd { color: #9fd0ff; } .light .bf-log .detail.cmd { color: #1d4ed8; }
.bf-log .detail.end { color: #b9c3d0; font-style: italic; }
.bf-log .cont { color: #8b97a8; padding-left: 18px; }
.bf-log .group { margin: 6px 0 2px; color: #6ea0ff; font-weight: 600; }
.bf-log .srv.warn .lvl { color: #f2d16b; } .bf-log .srv.error { background: rgba(255,120,140,0.12); } .bf-log .srv.error .lvl { color: #ff9aa8; } .bf-log .srv.info .lvl { color: #6b7686; }
.bf-log code { background: rgba(127,127,127,0.18); border-radius: 3px; padding: 0 3px; }
.bf-diff { font: 11px/1.45 ui-monospace, Menlo, Consolas, monospace; }
.bf-diff .stat { margin: 0 0 8px; color: #8b97a8; white-space: pre-wrap; }
.bf-diff .file { border: 1px solid rgba(127,127,127,0.25); border-radius: 6px; margin-bottom: 8px; overflow: hidden; }
.bf-diff .file > summary { cursor: pointer; padding: 6px 10px; background: rgba(127,127,127,0.12); display: flex; gap: 10px; align-items: center; }
.bf-diff .file > summary code { background: transparent; padding: 0; }
.bf-diff .cnt { margin-left: auto; } .bf-diff .cnt .add { color: #7fe0a4; } .bf-diff .cnt .del { color: #ff9aa8; }
.bf-diff .body { overflow-x: auto; }
.bf-diff .dl { white-space: pre; padding: 0 10px; }
.bf-diff .dl.add { background: rgba(127,224,164,0.14); color: #b6f0cd; } .bf-diff .dl.del { background: rgba(255,154,168,0.14); color: #ffc4cc; }
.bf-diff .dl.hunk { color: #8ec1ff; background: rgba(110,160,255,0.1); margin: 4px 0; } .bf-diff .dl.meta { color: #6b7686; font-style: italic; }
.light .bf-diff .dl.add { background: #dcfce7; color: #166534; } .light .bf-diff .dl.del { background: #fee2e2; color: #991b1b; } .light .bf-diff .dl.hunk { color: #1d4ed8; background: #eff6ff; }
`;
