import html2canvas from 'html2canvas';

/**
 * 화면 캡처 - WebGL 캔버스(Cesium·Three 등, preserveDrawingBuffer 필요)와 DOM UI 를 합성한 PNG dataURL.
 * @param {object} opt
 * @param {() => HTMLCanvasElement[]} [opt.canvases]   먼저 그릴 WebGL 캔버스들(화면 전체를 덮는 배경으로 취급)
 * @param {() => void} [opt.beforeCapture]             캡처 직전 훅(예: viewer.render())
 * @param {string[]} [opt.ignore]                      캡처에서 뺄 CSS 선택자
 * @param {(el: Element) => boolean} [opt.ignoreElement]
 */
export async function captureScreen(opt = {}) {
  const w = window.innerWidth, h = window.innerHeight;
  try { opt.beforeCapture?.(); } catch { /* 무시 */ }

  const canvases = (() => { try { return (opt.canvases?.() || []).filter(Boolean); } catch { return []; } })();
  const bgImages = canvases.map((c) => { try { return c.toDataURL('image/png'); } catch { return null; } }).filter(Boolean);
  const canvasSet = new Set(canvases);
  const ignore = opt.ignore || [];

  const ui = await html2canvas(document.body, {
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    scale: 1,
    width: w,
    height: h,
    ignoreElements: (el) => {
      if (canvasSet.has(el)) return true;
      if (el.tagName && el.tagName.toLowerCase().startsWith('bugfix-')) return true;   // 우리 UI 자체
      if (opt.ignoreElement?.(el)) return true;
      return ignore.some((sel) => { try { return el.matches?.(sel); } catch { return false; } });
    },
  });

  const composite = document.createElement('canvas');
  composite.width = w; composite.height = h;
  const ctx = composite.getContext('2d');
  for (const src of bgImages) {
    await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => { ctx.drawImage(img, 0, 0, w, h); resolve(); };
      img.onerror = resolve;
      img.src = src;
    });
  }
  ctx.drawImage(ui, 0, 0);
  return composite.toDataURL('image/png');
}
