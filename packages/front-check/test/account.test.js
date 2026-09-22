import test from 'node:test';
import assert from 'node:assert/strict';
import { parseAccount } from '../src/config.js';

test('계정 파일: properties / JSON / 두 줄 모두 읽는다', () => {
  assert.deepEqual(parseAccount('# 테스트 계정\nuser=tester\npassword=p@ss=word\n'), { user: 'tester', pass: 'p@ss=word' });
  assert.deepEqual(parseAccount('아이디: tester\n비밀번호: "1234"'), { user: 'tester', pass: '1234' });
  assert.deepEqual(parseAccount('{"id":"tester","pw":"x"}'), { user: 'tester', pass: 'x' });
  assert.deepEqual(parseAccount('tester\nsecret'), { user: 'tester', pass: 'secret' });
  assert.equal(parseAccount('tester'), null);
  assert.equal(parseAccount(''), null);
});
