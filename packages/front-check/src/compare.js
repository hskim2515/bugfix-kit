import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

/**
 * 두 디렉터리의 같은 이름 PNG 를 픽셀 비교한다. 결과: [{ name, mismatchPct, diffFile }]
 * 크기가 다르면 작은 쪽 기준으로 자르고 그 사실을 기록한다.
 */
export function compareDirs(beforeDir, afterDir, outDir = afterDir, { threshold = 0.1 } = {}) {
  fs.mkdirSync(outDir, { recursive: true });
  const names = fs.readdirSync(afterDir).filter((n) => n.endsWith('.png') && !n.endsWith('.diff.png') && fs.existsSync(path.join(beforeDir, n)));
  const out = [];
  for (const name of names) {
    const a = PNG.sync.read(fs.readFileSync(path.join(beforeDir, name)));
    const b = PNG.sync.read(fs.readFileSync(path.join(afterDir, name)));
    const w = Math.min(a.width, b.width), h = Math.min(a.height, b.height);
    const crop = (img) => { if (img.width === w && img.height === h) return img.data; const o = Buffer.alloc(w * h * 4); for (let y = 0; y < h; y++) img.data.copy(o, y * w * 4, y * img.width * 4, y * img.width * 4 + w * 4); return o; };
    const diff = new PNG({ width: w, height: h });
    const n = pixelmatch(crop(a), crop(b), diff.data, w, h, { threshold });
    const diffFile = path.join(outDir, name.replace(/\.png$/, '.diff.png'));
    fs.writeFileSync(diffFile, PNG.sync.write(diff));
    out.push({ name, mismatchPct: +((n / (w * h)) * 100).toFixed(2), diffFile, sizeChanged: a.width !== b.width || a.height !== b.height });
  }
  return out;
}
