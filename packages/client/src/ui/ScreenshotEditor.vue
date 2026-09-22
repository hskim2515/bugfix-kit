<template>
  <!-- 캡처 이미지 위에 펜·사각형·화살표·글자로 표시하는 편집기 (신고 창 위에 뜬다) -->
  <div class="bse-overlay">
    <div class="bse-toolbar">
      <button
        v-for="t in tools" :key="t.id"
        :class="['bse-btn', { active: tool === t.id }]"
        @click="tool = t.id"
      >{{ t.label }}</button>
      <span class="bse-sep"></span>
      <button
        v-for="c in colors" :key="c"
        :class="['bse-color', { active: color === c }]"
        :style="{ background: c }"
        :title="c"
        @click="color = c"
      ></button>
      <span class="bse-sep"></span>
      <button class="bse-btn" :disabled="!shapes.length" @click="undo">되돌리기</button>
      <button class="bse-btn" :disabled="!shapes.length" @click="clearAll">모두 지우기</button>
      <span class="bse-spacer"></span>
      <button class="bse-btn" @click="$emit('cancel')">취소</button>
      <button class="bse-btn bse-btn--apply" @click="apply">적용</button>
    </div>
    <div class="bse-stage">
      <canvas
        ref="canvas"
        class="bse-canvas"
        @pointerdown="onDown"
        @pointermove="onMove"
        @pointerup="onUp"
        @pointercancel="onUp"
      ></canvas>
    </div>
  </div>
</template>

<script>
const TOOLS = [
  { id: 'pen',   label: '펜' },
  { id: 'rect',  label: '사각형' },
  { id: 'arrow', label: '화살표' },
  { id: 'text',  label: '글자' },
];
const COLORS = ['#ff3b30', '#ffcc00', '#34c759', '#0a84ff', '#ffffff'];

export default {
  name: 'BugfixScreenshotEditor',
  props: {
    src: { type: String, required: true },
  },
  emits: ['apply', 'cancel'],
  data() {
    return {
      tools: TOOLS,
      colors: COLORS,
      tool: 'pen',
      color: COLORS[0],
      // 그린 도형 목록 (되돌리기를 위해 비트맵이 아니라 도형으로 보관)
      shapes: [],
      drawing: null,
    };
  },
  mounted() {
    const img = new Image();
    img.onload = () => {
      this.baseImage = img;
      // 이미지 해상도에 맞춘 선 굵기 (화면에서 보이는 굵기가 비슷하도록)
      this.lineWidth = Math.max(3, Math.round(img.naturalWidth / 400));
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      this.redraw();
    };
    img.src = this.src;
  },
  methods: {
    // 화면 좌표 → 캔버스(원본 이미지) 좌표
    toCanvasPoint(e) {
      const canvas = this.$refs.canvas;
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
      };
    },

    onDown(e) {
      if (!this.baseImage) return;
      const p = this.toCanvasPoint(e);
      if (this.tool === 'text') {
        const text = window.prompt('표시할 글자를 입력하세요');
        if (text && text.trim()) {
          this.shapes.push({ type: 'text', color: this.color, width: this.lineWidth, from: p, text: text.trim() });
          this.redraw();
        }
        return;
      }
      e.currentTarget.setPointerCapture?.(e.pointerId);
      this.drawing = { type: this.tool, color: this.color, width: this.lineWidth, from: p, to: p, points: [p] };
    },

    onMove(e) {
      if (!this.drawing) return;
      const p = this.toCanvasPoint(e);
      if (this.drawing.type === 'pen') this.drawing.points.push(p);
      else this.drawing.to = p;
      this.redraw();
    },

    onUp() {
      if (!this.drawing) return;
      const d = this.drawing;
      this.drawing = null;
      // 클릭만 하고 끌지 않은 사각형·화살표는 버린다
      const moved = d.type === 'pen'
        ? d.points.length > 1
        : Math.hypot(d.to.x - d.from.x, d.to.y - d.from.y) > 4;
      if (moved) this.shapes.push(d);
      this.redraw();
    },

    undo() {
      this.shapes.pop();
      this.redraw();
    },

    clearAll() {
      this.shapes = [];
      this.redraw();
    },

    redraw() {
      const canvas = this.$refs.canvas;
      if (!canvas || !this.baseImage) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this.baseImage, 0, 0);
      const all = this.drawing ? [...this.shapes, this.drawing] : this.shapes;
      all.forEach(s => this.drawShape(ctx, s));
    },

    drawShape(ctx, s) {
      ctx.save();
      ctx.strokeStyle = s.color;
      ctx.fillStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (s.type === 'pen') {
        ctx.beginPath();
        s.points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.stroke();
      } else if (s.type === 'rect') {
        ctx.strokeRect(s.from.x, s.from.y, s.to.x - s.from.x, s.to.y - s.from.y);
      } else if (s.type === 'arrow') {
        const angle = Math.atan2(s.to.y - s.from.y, s.to.x - s.from.x);
        const head = s.width * 5;
        ctx.beginPath();
        ctx.moveTo(s.from.x, s.from.y);
        ctx.lineTo(s.to.x, s.to.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(s.to.x, s.to.y);
        ctx.lineTo(s.to.x - head * Math.cos(angle - Math.PI / 6), s.to.y - head * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(s.to.x - head * Math.cos(angle + Math.PI / 6), s.to.y - head * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
      } else if (s.type === 'text') {
        // 배경이 지도라 글자가 묻히지 않도록 검은 테두리를 두른다
        ctx.font = `bold ${s.width * 7}px sans-serif`;
        ctx.textBaseline = 'top';
        ctx.lineWidth = Math.max(2, s.width * 0.8);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.85)';
        ctx.strokeText(s.text, s.from.x, s.from.y);
        ctx.fillText(s.text, s.from.x, s.from.y);
      }
      ctx.restore();
    },

    apply() {
      const canvas = this.$refs.canvas;
      if (!canvas || !this.baseImage) {
        this.$emit('cancel');
        return;
      }
      this.drawing = null;
      this.redraw();
      this.$emit('apply', canvas.toDataURL('image/png'));
    },
  },
};
</script>

<style scoped>
.bse-overlay { position: fixed; inset: 0; z-index: 9200; display: flex; flex-direction: column; background: rgba(0,0,0,0.85); }
.bse-toolbar { display: flex; align-items: center; gap: 6px; padding: 10px 16px; background: #1a2230; border-bottom: 1px solid rgba(255,255,255,0.1); }
.bse-btn { font-size: 12px; padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: #bbc; cursor: pointer; }
.bse-btn:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
.bse-btn:disabled { opacity: 0.4; cursor: default; }
.bse-btn.active { background: rgba(136,170,255,0.2); border-color: #88aaff; color: #fff; }
.bse-btn--apply { border-color: rgba(46,204,113,0.5); color: #2ecc71; }
.bse-color { width: 20px; height: 20px; padding: 0; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); cursor: pointer; }
.bse-color.active { border-color: #fff; box-shadow: 0 0 0 2px rgba(136,170,255,0.6); }
.bse-sep { width: 1px; height: 18px; background: rgba(255,255,255,0.15); margin: 0 4px; }
.bse-spacer { flex: 1; }
.bse-stage { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 16px; }
.bse-canvas { max-width: 100%; max-height: calc(100vh - 90px); cursor: crosshair; touch-action: none; box-shadow: 0 0 0 1px rgba(255,255,255,0.15); }
</style>
