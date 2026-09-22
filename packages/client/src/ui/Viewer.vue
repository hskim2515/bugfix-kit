<template>
  <div class="bugfix-root">
    <div v-if="isOpen" class="brv-overlay" @click.self="close">
      <div class="brv-modal">

        <!-- 헤더 -->
        <div class="brv-header">
          <span class="brv-title">
            저장된 버그 리포트
            <span v-if="hotkey" class="brv-shortcut">{{ hotkey }}</span>
          </span>
          <button class="brv-close" @click="close">✕</button>
        </div>
        <div v-if="notice" :class="['brv-notice', `brv-notice--${notice.type}`]"><b>{{ notice.title }}</b> {{ notice.message }}</div>

        <div class="brv-body">

          <!-- ── 목록 ── -->
          <template v-if="!selected">
            <div v-if="loading" class="brv-loading">
              <span class="brv-spin"></span> 불러오는 중...
            </div>
            <div v-else-if="list.length === 0" class="brv-empty">저장된 리포트가 없습니다.</div>
            <div v-else class="brv-list">
              <div
                v-for="item in list" :key="item.bugReportId"
                class="brv-item"
                @click="openDetail(item.bugReportId)"
              >
                <span :class="['brv-badge', `brv-sev--${item.severity?.toLowerCase()}`]">{{ item.severity }}</span>
                <span :class="['brv-status', `brv-st--${(item.status || 'OPEN').toLowerCase()}`]">{{ statusLabel(item.status) }}</span>
                <span class="brv-problem">{{ item.problem || '(내용 없음)' }}</span>
                <span v-if="item.fixStatus" :class="['brv-fix', `brv-fix--${item.fixStatus.toLowerCase()}`]" :title="fixLabel(item.fixStatus)">{{ fixShort(item.fixStatus) }}</span>
                <span class="brv-meta">{{ item.reporter }} · {{ formatDate(item.insertDate) }}</span>
                <button class="brv-del" @click.stop="deleteReport(item.bugReportId)" title="삭제">✕</button>
              </div>
            </div>
          </template>

          <!-- ── 상세 ── -->
          <template v-else>
            <button class="brv-back" @click="selected = null">← 목록</button>

            <div v-if="detailLoading" class="brv-loading">
              <span class="brv-spin"></span> 불러오는 중...
            </div>

            <template v-else-if="detail">

              <!-- 스크린샷 -->
              <div class="brv-section" v-if="detail.screenshot">
                <div class="brv-label">화면 캡처</div>
                <img :src="detail.screenshot" class="brv-screenshot" alt="screenshot" />
              </div>

              <!-- 기본 정보 -->
              <div class="brv-section">
                <div class="brv-label">기본 정보</div>
                <div class="brv-row">
                  <span>심각도</span>
                  <span :class="['brv-badge', `brv-sev--${detail.severity?.toLowerCase()}`]">{{ detail.severity }}</span>
                </div>
                <div class="brv-row">
                  <span>상태</span>
                  <span class="brv-status-control">
                    <span v-if="statusSaving" class="brv-spin brv-spin--sm"></span>
                    <select
                      class="brv-status-select"
                      :class="`brv-st--${(detail.status || 'OPEN').toLowerCase()}`"
                      :value="detail.status || 'OPEN'"
                      :disabled="statusSaving"
                      @change="changeStatus($event.target.value)"
                    >
                      <option v-for="s in STATUSES" :key="s.value" :value="s.value">{{ s.label }}</option>
                    </select>
                  </span>
                </div>
                <div class="brv-row"><span>보고자</span><span class="brv-selectable">{{ detail.reporter }}</span></div>
                <div class="brv-row"><span>일시</span><span class="brv-selectable">{{ formatDate(detail.insertDate) }}</span></div>
              </div>

              <!-- Claude 자동 수정 -->
              <div class="brv-section">
                <div class="brv-label">Claude 자동 수정</div>
                <div class="brv-row">
                  <span>상태</span>
                  <span>
                    <span v-if="fixBusy || fixInProgress" class="brv-spin brv-spin--sm"></span>
                    <span :class="['brv-fix', `brv-fix--${(detail.fixStatus || 'none').toLowerCase()}`]">{{ fixLabel(detail.fixStatus) }}</span>
                    <span v-if="fixInProgress && fixElapsed" class="brv-fix-elapsed">{{ fixElapsed }} 경과</span>
                  </span>
                </div>
                <div class="brv-row" v-if="detail.fixBranch">
                  <span>브랜치</span>
                  <span class="brv-selectable">{{ detail.fixBranch }}</span>
                </div>
                <div class="brv-row" v-if="detail.fixPrUrl">
                  <span>PR</span>
                  <a class="brv-link" :href="detail.fixPrUrl" target="_blank" rel="noopener">{{ detail.fixPrUrl.replace(/^https?:\/\/github\.com\//, '') }}</a>
                </div>
                <div v-if="detail.fixSummary" class="brv-text brv-selectable brv-fix-summary">{{ detail.fixSummary }}</div>
                <details v-if="detail.fixLog" class="brv-fix-log" :open="fixInProgress">
                  <summary>진행 로그</summary>
                  <pre ref="fixLogPre" class="brv-selectable">{{ detail.fixLog }}</pre>
                </details>

                <!-- 이어서 대화: 질문(코드 변경 없음) · 추가 요청(수정 → 검증 → PR/병합) -->
                <div v-if="detail.fixStatus" class="brv-chat">
                  <div v-for="(m, i) in fixChat" :key="i" :class="['brv-chat__msg', `brv-chat__msg--${m.role}`]">
                    <span class="brv-chat__who">{{ m.role === 'user' ? '나' : 'Claude' }}</span>
                    <div class="brv-chat__text brv-selectable">{{ m.text }}</div>
                  </div>
                  <div v-if="fixInProgress && fixChat.length && fixChat[fixChat.length - 1].role === 'user'" class="brv-chat__msg brv-chat__msg--assistant">
                    <span class="brv-chat__who">Claude</span>
                    <div class="brv-chat__text"><span class="brv-spin brv-spin--sm"></span> 생각 중…</div>
                  </div>
                  <textarea v-model="chatInput" class="brv-chat__input" rows="2" :disabled="fixBusy || fixInProgress"
                            placeholder="예) 왜 이렇게 고쳤어?  /  라이트 테마에서도 맞는지 확인해서 같이 고쳐줘"
                            @keydown.ctrl.enter.prevent="sendChat('ask')" @keydown.meta.enter.prevent="sendChat('ask')"></textarea>
                  <div class="brv-fix-actions">
                    <button class="brv-fix-btn brv-fix-btn--ghost" :disabled="fixBusy || fixInProgress || !chatInput.trim()" @click="sendChat('ask')" title="코드는 바꾸지 않고 답만 합니다">질문</button>
                    <button class="brv-fix-btn" :disabled="fixBusy || fixInProgress || !chatInput.trim()" @click="sendChat('change')" title="같은 세션에서 추가로 고치고 검증 → PR → 병합까지">추가 수정 요청</button>
                  </div>
                </div>
                <div class="brv-fix-actions">
                  <button class="brv-fix-btn" :disabled="fixBusy || fixInProgress" @click="requestFix">
                    {{ fixInProgress ? 'Claude 가 고치는 중…' : (detail.fixStatus ? '다시 수정 요청' : 'Claude 에게 수정 요청') }}
                  </button>
                  <button v-if="detail.fixStatus" class="brv-fix-btn brv-fix-btn--ghost" :disabled="fixBusy" @click="refreshDetail">새로고침</button>
                </div>
                <div class="brv-hint">개발서버의 Claude Code 가 원인을 찾아 고치고, 검증(lint·build)이 통과하면 PR 을 올린 뒤 <b>바로 병합</b>합니다. 그사이 다른 변경과 충돌하면 Claude 가 풀고 다시 검증합니다. 병합되지 않으면 PR 이 열린 채 남습니다.</div>
              </div>

              <!-- 문제 상황 -->
              <div class="brv-section" v-if="detail.problem || detail.reproSteps || detail.expectedResult">
                <div class="brv-label">내용</div>
                <div v-if="detail.problem" class="brv-field">
                  <div class="brv-field-label">문제 상황</div>
                  <div class="brv-text brv-selectable">{{ detail.problem }}</div>
                </div>
                <div v-if="detail.reproSteps" class="brv-field">
                  <div class="brv-field-label">재현 단계</div>
                  <div class="brv-text brv-selectable">{{ detail.reproSteps }}</div>
                </div>
                <div v-if="detail.expectedResult" class="brv-field">
                  <div class="brv-field-label">기대 결과</div>
                  <div class="brv-text brv-selectable">{{ detail.expectedResult }}</div>
                </div>
              </div>

              <!-- 컨텍스트 요약 -->
              <div class="brv-section" v-if="parsedContext">
                <div class="brv-label">컨텍스트</div>
                <div class="brv-row" v-if="parsedContext.camera">
                  <span>카메라</span>
                  <span class="brv-selectable">
                    {{ parsedContext.camera.longitude }}°, {{ parsedContext.camera.latitude }}°
                    · 고도 {{ parsedContext.camera.height }}m
                    · H{{ parsedContext.camera.heading }}° P{{ parsedContext.camera.pitch }}°
                  </span>
                </div>
                <div class="brv-row" v-if="parsedContext.menus?.header">
                  <span>상단 탭</span><span class="brv-selectable">{{ parsedContext.menus.header }}</span>
                </div>
                <div class="brv-row" v-if="parsedContext.activeData">
                  <span>데이터셋</span>
                  <span class="brv-selectable">
                    {{ parsedContext.activeData.datasets?.map(d => d._displayName).join(', ') || '없음' }}
                  </span>
                </div>
                <div class="brv-row" v-if="parsedContext.activeData?.terrain">
                  <span>지형</span><span class="brv-selectable">{{ parsedContext.activeData.terrain }}</span>
                </div>
                <div class="brv-row" v-if="parsedContext.datetime">
                  <span>발생 시각</span><span class="brv-selectable">{{ parsedContext.datetime }}</span>
                </div>
              </div>

              <!-- 로그 탭 -->
              <div class="brv-section">
                <div class="brv-label-row">
                  <div class="brv-label" style="margin-bottom:0">로그</div>
                  <div class="brv-log-tabs">
                    <button
                      v-for="t in logTabs" :key="t.id"
                      :class="['brv-log-tab', { active: logTab === t.id }]"
                      @click="logTab = t.id"
                    >
                      {{ t.label }}
                      <span v-if="t.count" class="brv-log-tab-count" :class="t.countClass">{{ t.count }}</span>
                    </button>
                  </div>
                </div>

                <!-- 프론트 로그 -->
                <template v-if="logTab === 'front'">
                  <div class="brv-log-filters">
                    <label class="brv-filter-chip brv-filter-error">
                      <input type="checkbox" v-model="showFE.error" /> 오류 ({{ countFE('error') }})
                    </label>
                    <label class="brv-filter-chip brv-filter-warn">
                      <input type="checkbox" v-model="showFE.warn" /> 경고 ({{ countFE('warn') }})
                    </label>
                    <label class="brv-filter-chip brv-filter-log">
                      <input type="checkbox" v-model="showFE.log" /> 로그 ({{ countFE('log') }})
                    </label>
                  </div>
                  <div class="brv-log-list">
                    <div
                      v-for="(e, i) in filteredFrontLogs" :key="i"
                      :class="['brv-log-item', `brv-log--${e.level}`]"
                      @click="toggleExpand('f' + i)"
                    >
                      <span class="brv-log-time brv-selectable">{{ e.time?.slice(11, 23) }}</span>
                      <span class="brv-log-lv">{{ e.level }}</span>
                      <span class="brv-log-msg brv-selectable" :class="{ expanded: expanded.has('f' + i) }">{{ e.message }}</span>
                    </div>
                    <div v-if="filteredFrontLogs.length === 0" class="brv-log-empty">표시할 로그 없음</div>
                  </div>
                </template>

                <!-- 백엔드 로그 -->
                <template v-if="logTab === 'back'">
                  <div class="brv-log-filters">
                    <label class="brv-filter-chip brv-filter-error">
                      <input type="checkbox" v-model="showBE.error" /> ERROR ({{ countBE('ERROR') }})
                    </label>
                    <label class="brv-filter-chip brv-filter-warn">
                      <input type="checkbox" v-model="showBE.warn" /> WARN ({{ countBE('WARN') }})
                    </label>
                    <label class="brv-filter-chip brv-filter-log">
                      <input type="checkbox" v-model="showBE.info" /> INFO ({{ countBE('INFO') }})
                    </label>
                  </div>
                  <div class="brv-log-list">
                    <div
                      v-for="(e, i) in filteredBackLogs" :key="i"
                      :class="['brv-log-item', `brv-log--${e.level?.toLowerCase()}`]"
                      @click="toggleExpand('b' + i)"
                    >
                      <span class="brv-log-time brv-selectable">{{ e.time?.slice(11, 23) }}</span>
                      <span class="brv-log-lv">{{ e.level }}</span>
                      <span class="brv-log-logger brv-selectable">{{ shortLogger(e.logger) }}</span>
                      <span class="brv-log-msg brv-selectable" :class="{ expanded: expanded.has('b' + i) }">{{ e.message }}</span>
                    </div>
                    <div v-if="filteredBackLogs.length === 0" class="brv-log-empty">표시할 로그 없음</div>
                  </div>
                </template>

                <!-- 네트워크 -->
                <template v-if="logTab === 'net'">
                  <div class="brv-log-filters">
                    <label class="brv-filter-chip brv-filter-error">
                      <input type="checkbox" v-model="showNet.error" /> 에러 ({{ networkLogs.filter(r => r.error || r.status >= 400).length }})
                    </label>
                    <label class="brv-filter-chip brv-filter-log">
                      <input type="checkbox" v-model="showNet.ok" /> 성공 ({{ networkLogs.filter(r => !r.error && r.status < 400).length }})
                    </label>
                  </div>
                  <div class="brv-log-list">
                    <div
                      v-for="(r, i) in filteredNetLogs" :key="i"
                      :class="['brv-net-item', netClass(r)]"
                      @click="toggleExpand('n' + i)"
                    >
                      <span :class="['brv-net-status', statusClass(r.status)]">{{ r.status || 'ERR' }}</span>
                      <span class="brv-net-method brv-selectable">{{ r.method }}</span>
                      <span class="brv-log-msg brv-selectable" :class="{ expanded: expanded.has('n' + i) }">{{ r.url }}</span>
                      <span class="brv-net-dur brv-selectable">{{ r.duration }}ms</span>
                      <span class="brv-log-time brv-selectable">{{ r.time?.slice(11, 19) }}</span>
                    </div>
                    <template v-for="(r, i) in filteredNetLogs" :key="'d' + i">
                      <div v-if="expanded.has('n' + i)" class="brv-net-detail brv-selectable">
                        <div v-if="r.params"><b>Params:</b> {{ r.params }}</div>
                        <div v-if="r.requestBody"><b>Request:</b> {{ r.requestBody }}</div>
                        <div v-if="r.responseBody"><b>Response:</b> {{ r.responseBody }}</div>
                        <div v-if="r.error" class="brv-log--error"><b>Error:</b> {{ r.error }}</div>
                      </div>
                    </template>
                    <div v-if="filteredNetLogs.length === 0" class="brv-log-empty">표시할 요청 없음</div>
                  </div>
                </template>

                <!-- Mutation 로그 -->
                <template v-if="logTab === 'mutation'">
                  <div class="brv-log-list">
                    <div
                      v-for="(m, i) in parsedMutationLog" :key="i"
                      class="brv-log-item"
                      @click="toggleExpand('m' + i)"
                    >
                      <span class="brv-log-time brv-selectable">{{ m.time }}</span>
                      <span class="brv-log-msg brv-mutation brv-selectable" :class="{ expanded: expanded.has('m' + i) }">{{ m.type }}</span>
                      <span v-if="m.payload !== null" class="brv-log-payload brv-selectable">{{ formatPayload(m.payload) }}</span>
                    </div>
                    <div v-if="parsedMutationLog.length === 0" class="brv-log-empty">기록된 mutation 없음</div>
                  </div>
                </template>

              </div>
            </template>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

const FIX_LABELS = {
  none:      '요청 전',
  QUEUED:    '대기 중',
  RUNNING:   'Claude 가 고치는 중',
  PR_OPENED: 'PR 올라옴 · 병합 안 됨(로그 확인)',
  MERGED:    '병합 완료',
  FAILED:    '실패 · 진행 로그 확인',
};
const FIX_SHORT = { QUEUED: '대기', RUNNING: '수정중', PR_OPENED: 'PR', MERGED: '병합', FAILED: '실패' };

const STATUSES = [
  { value: 'OPEN',        label: '접수' },
  { value: 'IN_PROGRESS', label: '진행중' },
  { value: 'RESOLVED',    label: '해결' },
  { value: 'CLOSED',      label: '보류' },
];

export default {
  name: 'BugfixViewer',
  props: { kit: { type: Object, default: null } },
  expose: ['open', 'close'],
  data() {
    return {
      STATUSES,
      isOpen: false,
      loading: false,
      list: [],
      selected: null,
      detail: null,
      detailLoading: false,
      statusSaving: false,
      fixBusy: false,
      chatInput: '',
      now: Date.now(),
      notice: null,
      logTab: 'front',
      expanded: new Set(),
      showFE: { error: true, warn: true, log: false },
      showBE: { error: true, warn: true, info: false },
      showNet: { error: true, ok: false },
    };
  },
  computed: {
    hotkey() { return this.kit?.options?.hotkeys?.viewer || ''; },
    fixInProgress() { return ['QUEUED', 'RUNNING'].includes(this.detail?.fixStatus); },
    fixChat() { try { return this.detail?.fixChat ? JSON.parse(this.detail.fixChat) : []; } catch { return []; } },
    // 진행 중 경과 시간 - 후속 대화면 마지막 내 메시지부터, 아니면 수정 요청 시각부터
    fixElapsed() {
      const chat = this.fixChat;
      const lastMine = [...chat].reverse().find(m => m.role === 'user');
      const from = lastMine?.at || this.detail?.fixRequestedAt;
      if (!from) return '';
      const sec = Math.max(0, Math.floor((this.now - new Date(from).getTime()) / 1000));
      return sec < 60 ? `${sec}초` : `${Math.floor(sec / 60)}분 ${sec % 60}초`;
    },
    parsedContext() {
      try { return this.detail?.contextJson ? JSON.parse(this.detail.contextJson) : null; } catch { return null; }
    },
    parsedFrontLogs() {
      try { return this.detail?.frontendLogs ? JSON.parse(this.detail.frontendLogs) : []; } catch { return []; }
    },
    parsedBackLogs() {
      try { return this.detail?.backendLogs ? JSON.parse(this.detail.backendLogs) : []; } catch { return []; }
    },
    networkLogs() {
      try { return this.detail?.networkLogs ? JSON.parse(this.detail.networkLogs) : []; } catch { return []; }
    },
    parsedMutationLog() {
      try { return this.detail?.mutationLog ? JSON.parse(this.detail.mutationLog) : []; } catch { return []; }
    },

    filteredFrontLogs() {
      return [...this.parsedFrontLogs].reverse().filter(e => {
        if (e.level === 'error') return this.showFE.error;
        if (e.level === 'warn')  return this.showFE.warn;
        return this.showFE.log;
      });
    },
    filteredBackLogs() {
      return this.parsedBackLogs.filter(e => {
        if (e.level === 'ERROR') return this.showBE.error;
        if (e.level === 'WARN')  return this.showBE.warn;
        return this.showBE.info;
      });
    },
    filteredNetLogs() {
      return [...this.networkLogs].reverse().filter(r => {
        const isErr = r.error || (r.status && r.status >= 400);
        return isErr ? this.showNet.error : this.showNet.ok;
      });
    },

    logTabs() {
      const feErrors = this.countFE('error');
      const beErrors = this.countBE('ERROR');
      const netErrors = this.networkLogs.filter(r => r.error || (r.status && r.status >= 400)).length;
      return [
        { id: 'front',    label: '프론트',   count: feErrors || null,  countClass: 'brv-cnt-err' },
        { id: 'back',     label: '백엔드',   count: beErrors || null,  countClass: 'brv-cnt-err' },
        { id: 'net',      label: '네트워크', count: netErrors || null, countClass: 'brv-cnt-err' },
        { id: 'mutation', label: 'Mutation', count: this.parsedMutationLog.length || null, countClass: '' },
      ];
    },
  },
  watch: {
    'detail.fixLog'() {
      this.$nextTick(() => { const el = this.$refs.fixLogPre; if (el) el.scrollTop = el.scrollHeight; });
    },
  },
  beforeUnmount() { this._stopFixPolling(); },
  methods: {
    async open() {
      this.isOpen = true;
      this.selected = null;
      this.detail = null;
      this.expanded = new Set();
      await this.fetchList();
    },
    close() { this.isOpen = false; this._stopFixPolling(); },

    async fetchList() {
      this.loading = true;
      try {
        this.list = (await this.kit.api.list()) ?? [];
      } catch (e) {
        console.error('[BugReportViewer] 목록 조회 실패:', e);
      } finally {
        this.loading = false;
      }
    },

    async openDetail(id) {
      this.selected = id;
      this.detail = null;
      this.detailLoading = true;
      this.logTab = 'front';
      this.expanded = new Set();
      try {
        this.detail = (await this.kit.api.get(id)) ?? null;
        // 에러 있는 탭으로 초기 포커스
        if (this.detail) {
          const fe = (() => { try { return JSON.parse(this.detail.frontendLogs || '[]'); } catch { return []; } })();
          const net = (() => { try { return JSON.parse(this.detail.networkLogs || '[]'); } catch { return []; } })();
          if (!fe.some(e => e.level === 'error') && net.some(r => r.error || r.status >= 400)) {
            this.logTab = 'net';
          }
        }
      } catch (e) {
        console.error('[BugReportViewer] 상세 조회 실패:', e);
      } finally {
        this.detailLoading = false;
      }
      if (this.fixInProgress) this._startFixPolling(); else this._stopFixPolling();
    },

    // 앱의 알림 훅(kit.notify)이 있으면 그쪽으로, 없으면 뷰어 안에 잠깐 표시
    showNotice(title, message, type) {
      if (this.kit?.options?.notify) { this.kit.notify({ title, message, type }); return; }
      this.notice = { title, message, type };
      clearTimeout(this._noticeTimer);
      this._noticeTimer = setTimeout(() => { this.notice = null; }, 5000);
    },
    statusLabel(status) {
      return STATUSES.find(s => s.value === status)?.label ?? '접수';
    },

    // ── Claude 자동 수정 ──
    fixLabel(st) { return FIX_LABELS[st || 'none'] || st; },
    fixShort(st) { return FIX_SHORT[st] || st; },
    async requestFix() {
      if (!this.detail || this.fixBusy) return;
      const id = this.detail.bugReportId;
      this.fixBusy = true;
      try {
        const r = await this.kit.api.requestFix(id);
        if (r) { this.detail = { ...this.detail, ...r }; this._syncListFix(r); }
        this.showNotice('수정 요청', '서버에서 Claude 가 고치기 시작합니다. 진행 로그가 여기에 쌓이고, PR 이 올라오면 링크가 표시됩니다.', 'success');
        this._startFixPolling();
      } catch (e) {
        this.showNotice('수정 요청 실패', e?.message || '요청에 실패했습니다.', 'error');
      } finally { this.fixBusy = false; }
    },
    async sendChat(mode) {
      const msg = this.chatInput.trim();
      if (!msg || !this.detail || this.fixBusy) return;
      const id = this.detail.bugReportId;
      this.fixBusy = true;
      try {
        const r = await this.kit.api.fixChat(id, msg, mode);
        if (r) { this.detail = { ...this.detail, ...r }; this._syncListFix(r); }
        this.chatInput = '';
        this._startFixPolling();
      } catch (e) {
        this.showNotice('전송 실패', e?.message || '실패했습니다.', 'error');
      } finally { this.fixBusy = false; }
    },
    async refreshDetail() {
      if (!this.detail) return;
      const id = this.detail.bugReportId;
      try {
        // PR 이 열려 있는 리포트는 GitHub 상태와 맞춘다(병합됐으면 반영, 가능하면 병합 재시도)
        // 진행 중엔 스크린샷·로그 없이 fix_* 만 주는 가벼운 API 로 자주 읽는다
        const r = this.detail.fixPrUrl && ['PR_OPENED', 'FAILED'].includes(this.detail.fixStatus)
          ? await this.kit.api.fixSync(id)
          : (this.fixInProgress ? await this.kit.api.fixState(id) : await this.kit.api.get(id));
        if (r && this.detail?.bugReportId === id) { this.detail = { ...this.detail, ...r }; this._syncListFix(r); }
      } catch (_) { /* ignore */ }
    },
    _syncListFix(r) {
      const li = this.list.find(i => i.bugReportId === r.bugReportId);
      if (li) { li.fixStatus = r.fixStatus; li.fixPrUrl = r.fixPrUrl; }
    },
    // 진행 중이면 3초마다 상태·로그를 다시 읽고(가벼운 /fix API), 경과 시간은 1초마다 갱신
    _startFixPolling() {
      this._stopFixPolling();
      this.now = Date.now();
      this._fixTimer = setInterval(async () => {
        if (!this.detail || !this.fixInProgress) { this._stopFixPolling(); return; }
        if (this._fixPolling) return;              // 앞 요청이 늦으면 겹치지 않게
        this._fixPolling = true;
        try { await this.refreshDetail(); } finally { this._fixPolling = false; }
      }, 3000);
      this._clockTimer = setInterval(() => { this.now = Date.now(); }, 1000);
    },
    _stopFixPolling() {
      if (this._fixTimer) { clearInterval(this._fixTimer); this._fixTimer = null; }
      if (this._clockTimer) { clearInterval(this._clockTimer); this._clockTimer = null; }
    },

    async changeStatus(status) {
      if (!this.detail || this.statusSaving) return;
      const id = this.detail.bugReportId;
      const prev = this.detail.status;
      if (status === prev) return;
      this.statusSaving = true;
      // 낙관적 업데이트 (목록도 즉시 반영)
      this.detail.status = status;
      const li = this.list.find(r => r.bugReportId === id);
      if (li) li.status = status;
      try {
        await this.kit.api.setStatus(id, status);
      } catch (e) {
        console.error('[BugReportViewer] 상태 변경 실패:', e);
        this.detail.status = prev;          // 롤백
        if (li) li.status = prev;
      } finally {
        this.statusSaving = false;
      }
    },

    async deleteReport(id) {
      if (!confirm('리포트를 삭제하시겠습니까?')) return;
      try {
        await this.kit.api.remove(id);
        this.list = this.list.filter(r => r.bugReportId !== id);
      } catch (e) {
        console.error('[BugReportViewer] 삭제 실패:', e);
      }
    },

    toggleExpand(key) {
      const s = new Set(this.expanded);
      s.has(key) ? s.delete(key) : s.add(key);
      this.expanded = s;
    },

    countFE(level) { return this.parsedFrontLogs.filter(e => e.level === level).length; },
    countBE(level) { return this.parsedBackLogs.filter(e => e.level === level).length; },

    shortLogger(logger) {
      if (!logger) return '';
      const parts = logger.split('.');
      return parts.length > 2 ? '…' + parts.slice(-2).join('.') : logger;
    },

    statusClass(status) {
      if (!status || status === 'ERR') return 'st-err';
      if (status >= 500) return 'st-5xx';
      if (status >= 400) return 'st-4xx';
      if (status >= 300) return 'st-3xx';
      return 'st-2xx';
    },
    netClass(r) {
      return r.error || (r.status && r.status >= 400) ? 'brv-net-err' : '';
    },

    formatPayload(p) {
      if (p === null || p === undefined) return '';
      try {
        const s = JSON.stringify(p);
        return s.length > 200 ? s.slice(0, 200) + '…' : s;
      } catch { return String(p); }
    },

    formatDate(dt) {
      if (!dt) return '';
      return String(dt).slice(0, 16).replace('T', ' ');
    },
  },
};
</script>

<style scoped>
.brv-notice { margin: 0 16px; padding: 8px 12px; border-radius: 6px; font-size: 12px; background: #eef4ff; color: #1e3a8a; }
.brv-notice--error { background: #fdecec; color: #8a1c1c; }
.brv-notice--success { background: #e9f8ee; color: #14532d; }
/* 드래그 복사 허용 — 앱 전역 user-select:none 오버라이드 */
.brv-modal        { user-select: none; }
.brv-selectable,
.brv-log-list,
.brv-net-detail,
.brv-text         { user-select: text; cursor: text; }

.brv-overlay {
  position: fixed; inset: 0; z-index: 99998;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
}
.brv-modal {
  background: #141c28;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  width: 700px; max-width: 96vw; max-height: 84vh;
  display: flex; flex-direction: column; overflow: hidden;
}
.brv-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
}
.brv-title  { font-size: 13px; font-weight: 600; color: #c8d8e8; }
.brv-shortcut { font-size: 10px; font-weight: 400; color: #445566; margin-left: 6px; }
.brv-close  {
  background: none; border: none; color: #778899; cursor: pointer; font-size: 14px;
  &:hover { color: #fff; }
}
.brv-body   { flex: 1; overflow-y: auto; padding: 12px 16px; }

/* 로딩 / 빈 */
.brv-loading { display: flex; align-items: center; gap: 8px; color: #88aacc; font-size: 12px; padding: 16px 0; }
.brv-empty   { color: #556677; font-size: 12px; padding: 16px 0; text-align: center; }

/* 목록 */
.brv-list { display: flex; flex-direction: column; gap: 6px; }
.brv-item {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 6px; cursor: pointer; transition: background .15s;
  &:hover { background: rgba(255,255,255,0.07); }
}
.brv-problem { flex: 1; font-size: 12px; color: #c8d8e8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.brv-meta    { font-size: 10px; color: #556677; white-space: nowrap; }
.brv-del     {
  background: none; border: none; color: #445566; cursor: pointer; font-size: 11px; padding: 2px 4px;
  &:hover { color: #e74c3c; }
}

/* 심각도 뱃지 */
.brv-badge {
  font-size: 10px; font-weight: 600; padding: 2px 7px;
  border-radius: 4px; white-space: nowrap;
  background: rgba(255,255,255,0.08); color: #aabbcc;
}
.brv-sev--critical { background: rgba(231,76,60,0.25);   color: #e74c3c; }
.brv-sev--high     { background: rgba(230,126,34,0.25);  color: #e6802e; }
.brv-sev--medium   { background: rgba(241,196,15,0.2);   color: #f1c40f; }
.brv-sev--low      { background: rgba(46,204,113,0.2);   color: #2ecc71; }

/* 상태 뱃지 (목록) */
.brv-status {
  font-size: 10px; font-weight: 600; padding: 2px 7px;
  border-radius: 4px; white-space: nowrap; flex-shrink: 0;
}
.brv-st--open        { background: rgba(136,170,255,0.18); color: #88aaff; }
.brv-st--in_progress { background: rgba(241,196,15,0.18);  color: #f1c40f; }
.brv-st--resolved    { background: rgba(46,204,113,0.2);   color: #2ecc71; }
.brv-st--closed      { background: rgba(120,136,153,0.18); color: #8899aa; }

/* 상태 변경 셀렉트 (상세) */
.brv-status-control { display: flex; align-items: center; gap: 6px; }
.brv-status-select {
  font-size: 11px; font-weight: 600; padding: 3px 8px;
  border-radius: 4px; cursor: pointer;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: #c8d8e8;
  &:disabled { opacity: 0.5; cursor: default; }
  & option { background: #141c28; color: #c8d8e8; }
}
.brv-spin--sm { width: 11px; height: 11px; border-width: 2px; }

/* 상세 */
.brv-back {
  background: none; border: none; color: #88aacc; cursor: pointer;
  font-size: 11px; padding: 0 0 10px; display: block;
  &:hover { color: #fff; }
}
.brv-screenshot {
  width: 100%; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08);
  margin-top: 4px;
}
.brv-section { margin-bottom: 16px; }
.brv-fix { display: inline-block; padding: 1px 7px; border-radius: 10px; font-size: 11px; background: #e9eef3; color: #445; }
.brv-fix--queued    { background: #fff3cd; color: #7a5a00; }
.brv-fix--running   { background: #dbeafe; color: #1e3a8a; }
.brv-fix--pr_opened { background: #e0f2fe; color: #075985; }
.brv-fix--merged    { background: #dcfce7; color: #166534; }
.brv-fix--failed    { background: #fee2e2; color: #991b1b; }
.brv-link { color: #2563eb; text-decoration: underline; word-break: break-all; }
.brv-fix-summary { margin-top: 6px; }
.brv-fix-actions { display: flex; gap: 6px; margin-top: 8px; }
.brv-fix-btn { padding: 6px 12px; border: 1px solid #2563eb; border-radius: 6px; background: #2563eb; color: #fff; font-size: 12px; cursor: pointer; }
.brv-fix-btn:disabled { opacity: .55; cursor: default; }
.brv-fix-btn--ghost { background: transparent; color: #2563eb; }
.brv-hint { margin-top: 6px; font-size: 11px; color: #667; line-height: 1.5; }
.brv-fix-elapsed { margin-left: 6px; font-size: 11px; color: #667; }
.brv-fix-log { margin-top: 8px; font-size: 11px; }
.brv-fix-log summary { cursor: pointer; color: #445; }
/* 배경을 직접 칠하므로 글자색도 직접 - 어두운 테마에서 글자색이 밝게 상속되어 안 보였다 */
.brv-fix-log pre { margin: 6px 0 0; max-height: 260px; overflow: auto; padding: 8px; background: #1f2530; color: #d8dee6; border-radius: 6px; white-space: pre-wrap; word-break: break-all; font-size: 11px; line-height: 1.45; font-family: ui-monospace, Menlo, Consolas, monospace; }
.brv-fix-summary { color: inherit; }
.brv-chat { margin-top: 10px; border-top: 1px dashed #c9d0d8; padding-top: 8px; }
.brv-chat__msg { margin: 6px 0; font-size: 12px; }
.brv-chat__who { display: inline-block; min-width: 44px; font-size: 11px; color: #667; }
.brv-chat__msg--user .brv-chat__who { color: #1e5bb8; }
.brv-chat__text { display: inline-block; max-width: calc(100% - 52px); vertical-align: top; white-space: pre-wrap; word-break: break-word; line-height: 1.5; }
.brv-chat__input { width: 100%; box-sizing: border-box; margin-top: 6px; padding: 6px 8px; font-size: 12px; border: 1px solid #c9d0d8; border-radius: 6px; resize: vertical; color: inherit; background: transparent; }
.brv-label {
  font-size: 10px; color: #556677; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.brv-label-row {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;
}
.brv-row {
  display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;
  font-size: 11px; color: #a8b8c8; padding: 4px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.brv-row > span:first-child { color: #556677; flex-shrink: 0; }
.brv-row > span:last-child  { text-align: right; word-break: break-all; }

.brv-field       { margin-bottom: 8px; }
.brv-field-label { font-size: 10px; color: #445566; margin-bottom: 3px; }
.brv-text {
  font-size: 11px; color: #c8d8e8; line-height: 1.6;
  white-space: pre-wrap; background: rgba(0,0,0,0.2);
  padding: 8px; border-radius: 4px;
}

/* 로그 탭 */
.brv-log-tabs { display: flex; gap: 4px; }
.brv-log-tab {
  display: flex; align-items: center; gap: 4px;
  padding: 3px 9px; border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  color: #667788; font-size: 11px; cursor: pointer;
  transition: background .15s;
  &:hover  { background: rgba(255,255,255,0.07); color: #aabbcc; }
  &.active { background: rgba(136,170,255,0.12); border-color: rgba(136,170,255,0.3); color: #88aaff; }
}
.brv-log-tab-count {
  font-size: 9px; font-weight: 700; padding: 1px 4px;
  border-radius: 8px; background: rgba(231,76,60,0.3); color: #e87070;
}
.brv-cnt-err { background: rgba(231,76,60,0.3); color: #e87070; }

/* 필터 */
.brv-log-filters {
  display: flex; gap: 6px; margin-bottom: 6px; flex-wrap: wrap;
}
.brv-filter-chip {
  display: flex; align-items: center; gap: 4px;
  font-size: 10px; color: #667788; cursor: pointer;
  padding: 2px 6px; border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  &:hover { background: rgba(255,255,255,0.06); }
}
.brv-filter-error { color: #c06060; }
.brv-filter-warn  { color: #b09040; }
.brv-filter-log   { color: #558899; }

/* 로그 리스트 */
.brv-log-list {
  max-height: 220px; overflow-y: auto;
  background: rgba(0,0,0,0.25); border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.05);
  font-family: 'Consolas', 'Menlo', monospace;
}
.brv-log-item {
  display: flex; gap: 6px; align-items: flex-start;
  font-size: 10.5px; color: #a8b8c8;
  padding: 3px 8px; border-bottom: 1px solid rgba(255,255,255,0.03);
  cursor: pointer;
  &:hover { background: rgba(255,255,255,0.04); }
  &:last-child { border-bottom: none; }
}
.brv-log-time   { color: #445566; flex-shrink: 0; font-size: 10px; padding-top: 1px; }
.brv-log-lv     { font-weight: 700; flex-shrink: 0; width: 38px; font-size: 10px; padding-top: 1px; }
.brv-log-logger { color: #557788; flex-shrink: 0; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; padding-top: 1px; }
.brv-log-msg {
  flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  &.expanded { white-space: pre-wrap; overflow: visible; }
}
.brv-log-payload { color: #556677; font-size: 10px; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-top: 1px; }
.brv-mutation    { color: #88aacc; font-weight: 600; }
.brv-log--error  { color: #e87070; }
.brv-log--warn   { color: #d4a84b; }
.brv-log--info   { color: #a8b8c8; }
.brv-log-empty   { padding: 12px 8px; color: #445566; font-size: 11px; text-align: center; }

/* 네트워크 */
.brv-net-item {
  display: flex; gap: 6px; align-items: flex-start;
  font-size: 10.5px; color: #a8b8c8;
  padding: 3px 8px; border-bottom: 1px solid rgba(255,255,255,0.03);
  cursor: pointer; font-family: 'Consolas', 'Menlo', monospace;
  &:hover { background: rgba(255,255,255,0.04); }
}
.brv-net-err { background: rgba(231,76,60,0.05); }
.brv-net-status {
  font-weight: 700; flex-shrink: 0; width: 32px; font-size: 10px; padding-top: 1px;
}
.brv-net-method { flex-shrink: 0; width: 36px; color: #88aacc; font-size: 10px; padding-top: 1px; }
.brv-net-dur    { flex-shrink: 0; color: #445566; font-size: 10px; padding-top: 1px; }
.st-err { color: #e87070; }
.st-5xx { color: #e87070; }
.st-4xx { color: #d4a84b; }
.st-3xx { color: #88aacc; }
.st-2xx { color: #66cc88; }

.brv-net-detail {
  padding: 6px 12px; font-size: 10px; color: #8899aa;
  background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(255,255,255,0.03);
  word-break: break-all; white-space: pre-wrap; line-height: 1.6;
  font-family: 'Consolas', 'Menlo', monospace;
}

/* 스피너 */
.brv-spin {
  display: inline-block; width: 13px; height: 13px; flex-shrink: 0;
  border: 2px solid rgba(136,170,255,0.3); border-top-color: #88aaff;
  border-radius: 50%; animation: brv-spin .7s linear infinite;
}
@keyframes brv-spin { to { transform: rotate(360deg); } }
</style>
