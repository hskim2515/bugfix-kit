import path from 'node:path';

/**
 * 선언적 절차 실행. 한 단계는 객체 하나:
 *   { goto: '/path' }                      baseUrl 기준(절대 URL 도 됨)
 *   { click: '#sel' } | { click: { text: '레이어' } } | { click: { role: 'button', name: '저장' } }
 *   { fill: '#sel', value: '…' }
 *   { press: 'Escape' } | { keys: 'Shift+F9' }  키 입력(포커스된 곳 / 페이지)
 *   { hover: '#sel' }
 *   { waitFor: '#sel' } | { waitFor: 1500 }   선택자 또는 ms
 *   { expect: '#sel' } | { expect: { selector, visible: true, text: '부분문자열', count: 2 } }
 *   { measure: '#sel' }                     boundingBox + display/overflow/height 를 결과에 기록
 *   { eval: 'document.title' }              페이지 안에서 평가한 값을 기록
 *   { screenshot: 'name' } | { screenshot: { name, fullPage: true, selector } }
 *   { scroll: '#sel' } | { scroll: { y: 400 } }
 * 실패한 expect 는 failures 에 쌓이고 나머지 단계는 계속 돈다(액션 오류도 기록 후 계속).
 */
export async function runSteps(page, steps, { baseUrl, outDir, timeoutMs = 30000, log = console }) {
  const results = [];
  const failures = [];
  const screenshots = [];
  let shot = 0;
  const loc = (target) => {
    if (typeof target === 'string') return page.locator(target).first();
    // selector 가 있으면 text 는 대상 찾기가 아닌 내용 검사용이다
    if (target.selector) return page.locator(target.selector).first();
    if (target.role) return page.getByRole(target.role, { name: target.name, exact: target.exact }).first();
    if (target.text) return page.getByText(target.text, { exact: target.exact ?? false }).first();
    throw new Error(`대상을 알 수 없습니다: ${JSON.stringify(target)}`);
  };

  for (const [i, step] of steps.entries()) {
    const t0 = Date.now();
    const rec = { i, step, ok: true };
    try {
      if (step.goto !== undefined) {
        await page.goto(new URL(step.goto, baseUrl).href, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
      } else if (step.click !== undefined) {
        await loc(step.click).click({ timeout: timeoutMs });
      } else if (step.fill !== undefined) {
        await loc(step.fill).fill(String(step.value ?? ''), { timeout: timeoutMs });
      } else if (step.press !== undefined) {
        await page.keyboard.press(step.press);
      } else if (step.keys !== undefined) {
        await page.keyboard.press(step.keys);
      } else if (step.hover !== undefined) {
        await loc(step.hover).hover({ timeout: timeoutMs });
      } else if (step.waitFor !== undefined) {
        if (typeof step.waitFor === 'number') await page.waitForTimeout(step.waitFor);
        else await page.waitForSelector(step.waitFor, { timeout: step.timeout || timeoutMs, state: step.state || 'visible' });
      } else if (step.scroll !== undefined) {
        if (typeof step.scroll === 'string') await loc(step.scroll).scrollIntoViewIfNeeded();
        else await page.mouse.wheel(step.scroll.x || 0, step.scroll.y || 0);
      } else if (step.expect !== undefined) {
        const e = typeof step.expect === 'string' ? { selector: step.expect } : step.expect;
        const l = e.selector ? page.locator(e.selector).first() : loc(e);
        // 개수는 first() 를 떼고 센다
        const all = e.selector || typeof e === 'string' ? page.locator(e.selector || e) : e.role ? page.getByRole(e.role, { name: e.name, exact: e.exact }) : page.getByText(e.text, { exact: e.exact ?? false });
        const count = await all.count().catch(() => 0);
        const problems = [];
        if (count === 0) problems.push('요소 없음');
        if (e.count != null && count !== e.count) problems.push(`개수 ${count} ≠ ${e.count}`);
        if (count > 0 && (e.visible ?? true) && !(await l.isVisible().catch(() => false))) problems.push('보이지 않음');
        if (count > 0 && e.text != null && !String(await l.textContent().catch(() => '')).includes(e.text)) problems.push(`텍스트에 '${e.text}' 없음`);
        rec.count = count;
        if (problems.length) throw new Error(`expect 실패(${e.selector || e.text || e.role}): ${problems.join(', ')}`);
      } else if (step.measure !== undefined) {
        const l = loc(step.measure);
        const box = await l.boundingBox({ timeout: timeoutMs });
        const css = await l.evaluate((el) => { const s = getComputedStyle(el); return { display: s.display, position: s.position, overflowY: s.overflowY, height: s.height, maxHeight: s.maxHeight, width: s.width, opacity: s.opacity, visibility: s.visibility, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight }; });
        rec.box = box; rec.css = css;
      } else if (step.eval !== undefined) {
        rec.value = await page.evaluate(step.eval);
      } else if (step.screenshot !== undefined) {
        const o = typeof step.screenshot === 'string' ? { name: step.screenshot } : step.screenshot;
        const name = `${o.name || `shot-${++shot}`}.png`;
        const file = path.join(outDir, name);
        if (o.selector) await loc(o.selector).screenshot({ path: file, timeout: timeoutMs });
        else await page.screenshot({ path: file, fullPage: !!o.fullPage });
        rec.file = name; screenshots.push(name);
      } else {
        throw new Error(`모르는 단계: ${JSON.stringify(step)}`);
      }
    } catch (e) {
      rec.ok = false; rec.error = String(e.message || e).split('\n')[0];
      failures.push(`${i + 1}. ${describe(step)} → ${rec.error}`);
      log.warn(`[front-check] 단계 ${i + 1} 실패: ${rec.error}`);
    }
    rec.ms = Date.now() - t0;
    results.push(rec);
  }
  return { results, failures, screenshots };
}

export function describe(step) {
  const k = Object.keys(step)[0];
  const v = step[k];
  return `${k} ${typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v)}`.slice(0, 120);
}
