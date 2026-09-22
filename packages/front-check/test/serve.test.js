import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { startServer } from '../src/serve.js';

test('정적 서버: 잘못된 % 인코딩은 400, 이후 요청도 정상 응답', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fc-serve-'));
  fs.writeFileSync(path.join(dir, 'index.html'), '<p>ok</p>');
  const srv = await startServer({ dir, port: 41730 +Math.floor(Math.random() * 1000) });
  const opts = { headers: { connection: 'close' } }; // keep-alive 가 남으면 close() 가 늦어진다
  try {
    assert.equal((await fetch(`${srv.url}/%E0%A4%A`, opts)).status, 400);
    const ok = await fetch(`${srv.url}/index.html`, opts);
    assert.equal(ok.status, 200);
    assert.equal(await ok.text(), '<p>ok</p>');
  } finally {
    await srv.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
