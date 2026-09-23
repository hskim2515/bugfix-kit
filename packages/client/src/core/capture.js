// html2canvas-pro: 원본 html2canvas 는 최신 CSS 색 함수(color()·oklch·lab)를 못 읽어 antd 등 요즘 UI 에서 통째로 실패한다
import html2canvas from 'html2canvas-pro';

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

  // DOM 렌더가 실패하거나(지원 안 되는 CSS 등) 너무 오래 걸리면 캔버스 배경만으로라도 만든다 - 신고가 막히면 안 된다
  let ui = null;
  try {
    ui = await Promise.race([
      html2canvas(document.body, {
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
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('화면 렌더 시간 초과(15초)')), opt.timeoutMs || 15000)),
    ]);
  } catch (e) {
    console.warn('[BugReport] 화면 UI 렌더 실패 - 캔버스 배경만 저장:', e?.message || e);
    if (!bgImages.length) throw e;
  }

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
  if (ui) ctx.drawImage(ui, 0, 0);
  return composite.toDataURL('image/png');
}
