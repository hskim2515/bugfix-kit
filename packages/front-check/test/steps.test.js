import test from 'node:test';
import assert from 'node:assert/strict';
import { runSteps } from '../src/steps.js';

// 브라우저 없이 요소 목록만으로 흉내 내는 page. 요소: { sel, text, visible }
function fakePage(elements) {
  const make = (match) => {
    const hits = () => elements.filter(match);
    const l = {
      first: () => l,
      count: async () => hits().length,
      isVisible: async () => !!hits()[0]?.visible,
      textContent: async () => hits()[0]?.text ?? null,
    };
    return l;
  };
  return {
    locator: (sel) => make((el) => el.sel === sel),
    getByText: (text) => make((el) => el.text.includes(text)),
    getByRole: () => make(() => false),
  };
}

const quiet = { warn() {} };

test('expect selector+text: 선택자 요소의 텍스트가 다르면 실패', async () => {
  const page = fakePage([
    { sel: '#title', text: '다른 제목', visible: true },
    { sel: '#other', text: '레이어 목록', visible: true },
  ]);
  const { failures } = await runSteps(page, [{ expect: { selector: '#title', text: '레이어' } }], { log: quiet });
  assert.equal(failures.length, 1);
  assert.match(failures[0], /텍스트에 '레이어' 없음/);
});

test('expect selector+visible: 다른 요소가 아닌 선택자 요소 기준으로 본다', async () => {
  const page = fakePage([
    { sel: '#title', text: '레이어', visible: false },
    { sel: '#other', text: '레이어', visible: true },
  ]);
  const { failures } = await runSteps(page, [{ expect: { selector: '#title', text: '레이어' } }], { log: quiet });
  assert.equal(failures.length, 1);
  assert.match(failures[0], /보이지 않음/);
});

test('expect selector+text: 일치하면 통과', async () => {
  const page = fakePage([{ sel: '#title', text: '레이어 목록', visible: true }]);
  const { failures } = await runSteps(page, [{ expect: { selector: '#title', text: '레이어' } }], { log: quiet });
  assert.deepEqual(failures, []);
});
