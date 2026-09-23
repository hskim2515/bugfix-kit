<template>
  <div class="bugfix-root">
    <!-- 캡처 중 스피너 (모달 열리기 전 즉시 표시) -->
    <div v-if="isCapturing && !isOpen" class="bug-capture-overlay">
      <div class="bug-capture-spinner">
        <span class="bug-capture-spin"></span>
        화면 캡처 중...
      </div>
    </div>

    <!-- 바깥(오버레이)에서 누르고 뗀 경우에만 닫는다: 창 안에서 드래그하다 밖에서 떼면 click 이 오버레이로 가서 닫히던 문제 -->
    <div v-if="isOpen" class="bug-report-overlay"
      @mousedown="backdropPressed = $event.target === $event.currentTarget"
      @click.self="backdropPressed && close()">
      <!-- 캡처 이미지 그리기·표시 편집기 -->
      <ScreenshotEditor
        v-if="isEditingShot && screenshotUrl"
        :src="screenshotUrl"
        @apply="onShotEdited"
        @cancel="isEditingShot = false"
      />

      <div class="bug-report-modal">

        <!-- 헤더 -->
        <div class="bug-report-header">
          <span class="bug-report-title">버그 신고 <span v-if="hotkey" class="bug-report-shortcut">{{ hotkey }}</span></span>
          <!-- 신고 대상 (프론트/백엔드 저장소가 다른 앱처럼 프로젝트가 여럿 등록된 경우) -->
          <span v-if="appProjects.length > 1" class="bug-target" title="어디에 대한 신고인지">
            <button v-for="p in appProjects" :key="p.key" :class="{ 'bug-target__on': project === p.key }" @click="setProject(p.key)">{{ p.label }}</button>
          </span>
          <!-- 버그 신고 도구 자체의 문제 - 같은 프로젝트에 '도구' 표시로 저장되고 AI 수정 대상이 아니다(운영자가 도구 저장소에서 처리) -->
          <label v-if="kit?.api?.enabled" class="bug-target-tool" title="신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)">
            <input type="checkbox" v-model="tool"> 버그 신고 도구 문제
          </label>
          <button class="bug-report-close" @click="close">✕</button>
        </div>

        <!-- 탭 -->
        <div class="bug-report-tabs">
          <button
            v-for="tab in tabs" :key="tab.id"
            :class="['bug-tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
            <span v-if="tab.badge" class="bug-tab-badge">{{ tab.badge }}</span>
          </button>
        </div>

        <div class="bug-report-body">

          <!-- ── 탭 1: 기본 ── -->
          <template v-if="activeTab === 'basic'">
            <!-- 스크린샷 -->
            <div class="bug-report-section">
              <div class="bug-report-label">
                화면 캡처
                <button class="bug-btn-sm" @click="recapture" :disabled="isCapturing">
                  {{ isCapturing ? '캡처 중...' : '다시 찍기' }}
                </button>
                <button class="bug-btn-sm" @click="isEditingShot = true" :disabled="!screenshotUrl">그리기·표시</button>
                <button class="bug-btn-sm" @click="$refs.shotFile.click()">이미지 불러오기</button>
                <input ref="shotFile" type="file" accept="image/*" hidden @change="onShotFile" />
              </div>
              <div class="screenshot-wrap" :class="{ 'screenshot-wrap--editable': screenshotUrl }"
                title="클릭해서 그리기·표시" @click="screenshotUrl && (isEditingShot = true)">
                <img v-if="screenshotUrl" :src="screenshotUrl" class="screenshot-img" alt="screenshot" />
                <div v-else-if="isCapturing" class="screenshot-placeholder">캡처 중...</div>
                <div v-else class="screenshot-placeholder">화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다</div>
              </div>
              <div class="screenshot-hint">이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.</div>
            </div>

            <!-- 심각도 -->
            <div class="bug-report-section">
              <div class="bug-report-label">심각도</div>
              <div class="severity-group">
                <button
                  v-for="s in severityOptions" :key="s.value"
                  :class="['severity-btn', `severity-btn--${s.value.toLowerCase()}`, { active: severity === s.value }]"
                  @click="severity = s.value"
                >
                  {{ s.label }}
                </button>
              </div>
            </div>

            <!-- 구조화된 재현 폼 -->
            <div class="bug-report-section">
              <div class="bug-report-label">문제 상황</div>
              <textarea
                v-model="problemDesc"
                class="bug-report-textarea"
                placeholder="어떤 문제가 발생했나요?"
                rows="2"
              />
            </div>
            <div class="bug-report-section">
              <div class="bug-report-label">재현 단계</div>
              <textarea
                v-model="reproSteps"
                class="bug-report-textarea"
                placeholder="1. …&#10;2. …&#10;3. …"
                rows="3"
              />
            </div>
            <div class="bug-report-section">
              <div class="bug-report-label">기대 결과</div>
              <textarea
                v-model="expectedResult"
                class="bug-report-textarea"
                placeholder="어떻게 동작해야 하나요?"
                rows="2"
              />
            </div>

            <!-- 포함 정보 요약 -->
            <div class="bug-report-section">
              <div class="bug-report-label">다운로드에 포함되는 정보</div>
              <div class="included-chips">
                <span class="chip">📸 스크린샷</span>
                <span class="chip">🌐 환경 정보</span>
                <span class="chip">📡 네트워크 요청 ({{ networkLogs.length }}건)</span>
                <span class="chip">📋 프론트 로그 ({{ allLogs.length }}건)</span>
                <span class="chip" :class="backendLogsState === 'ok' ? 'chip--ok' : backendLogsState === 'error' ? 'chip--err' : ''">
                  🖥 백엔드 로그 ({{
                    backendLogsState === 'ok'      ? backendLogs.length + '건' :
                    backendLogsState === 'loading' ? '로딩 중' :
                    backendLogsState === 'skipped' ? '프론트 에러로 판단, 미수집' :
                    backendLogsState === 'error'   ? '조회 실패' : '대기'
                  }})
                </span>
                <span class="chip" v-if="context?.camera">📍 카메라 위치</span>
                <span class="chip">🗂 앱 상태</span>
                <span class="chip" v-if="context?.user">👤 {{ context.user.username }}</span>
              </div>
            </div>
          </template>

          <!-- ── 탭 2: 로그 ── -->
          <template v-if="activeTab === 'logs'">
            <!-- 프론트 / 백엔드 토글 -->
            <div class="log-source-toggle">
              <button :class="['log-src-btn', { active: logSource === 'front' }]" @click="logSource = 'front'">
                프론트엔드
              </button>
              <button :class="['log-src-btn', { active: logSource === 'backend' }]" @click="logSource = 'backend'">
                백엔드
                <span v-if="backendLogsState === 'loading'" class="log-src-spin">⟳</span>
                <span v-else-if="backendLogsState === 'error'" class="log-src-err">!</span>
              </button>
            </div>

            <!-- 프론트엔드 로그 -->
            <div class="bug-report-section" v-if="logSource === 'front'">
              <div class="bug-report-label">
                프론트엔드 콘솔 로그
                <div class="log-filter-group">
                  <label class="log-filter-chip error"><input type="checkbox" v-model="showError"> 오류 ({{ countByLevel('error') }})</label>
                  <label class="log-filter-chip warn"><input type="checkbox" v-model="showWarn"> 경고 ({{ countByLevel('warn') }})</label>
                  <label class="log-filter-chip log"><input type="checkbox" v-model="showLog"> 로그 ({{ countByLevel('log') }})</label>
                </div>
              </div>
              <div class="log-list">
                <div v-for="(entry, i) in filteredLogs" :key="i" :class="['log-item', `log-item--${entry.level}`]">
                  <span class="log-time">{{ entry.time.slice(11) }}</span>
                  <span class="log-badge-lv">{{ entry.level }}</span>
                  <span class="log-msg">{{ entry.message }}</span>
                </div>
                <div v-if="filteredLogs.length === 0" class="log-empty">표시할 로그가 없습니다</div>
              </div>
            </div>

            <!-- 백엔드 로그 -->
            <div class="bug-report-section" v-if="logSource === 'backend'">
              <div class="bug-report-label">
                백엔드 서버 로그
                <div class="log-filter-group">
                  <label class="log-filter-chip error"><input type="checkbox" v-model="showBEError"> ERROR ({{ countBackendByLevel('ERROR') }})</label>
                  <label class="log-filter-chip warn"><input type="checkbox" v-model="showBEWarn"> WARN ({{ countBackendByLevel('WARN') }})</label>
                  <label class="log-filter-chip log"><input type="checkbox" v-model="showBEInfo"> INFO ({{ countBackendByLevel('INFO') }})</label>
                </div>
              </div>
              <div v-if="backendLogsState === 'loading'" class="log-empty">백엔드 로그 가져오는 중...</div>
              <div v-else-if="backendLogsState === 'skipped'" class="log-empty">
                네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집
                <button class="bug-btn-sm" style="margin-top:8px" @click="fetchBackendLogs">그래도 가져오기</button>
              </div>
              <div v-else-if="backendLogsState === 'error'" class="log-empty log-empty--error">백엔드 로그 조회 실패 (인증 확인)</div>
              <div v-else class="log-list">
                <div v-for="(entry, i) in filteredBackendLogs" :key="i" :class="['log-item', `log-item--${entry.level.toLowerCase()}`]">
                  <span class="log-time">{{ entry.time.slice(11) }}</span>
                  <span class="log-badge-lv">{{ entry.level }}</span>
                  <span class="log-logger">{{ entry.logger }}</span>
                  <span class="log-msg">{{ entry.message }}</span>
                </div>
                <div v-if="filteredBackendLogs.length === 0" class="log-empty">표시할 로그가 없습니다</div>
              </div>
            </div>
          </template>

          <!-- ── 탭 3: 네트워크 ── -->
          <template v-if="activeTab === 'network'">
            <div class="bug-report-section">
              <div class="bug-report-label">최근 API 요청 (최대 50건, 최신순)</div>
              <div class="net-list">
                <template v-for="(req, i) in reversedNetwork" :key="i">
                  <div
                    :class="['net-item', req.error || req.status >= 400 ? 'net-item--error' : '']"
                    @click="toggleNetDetail(i)"
                  >
                    <span :class="['net-status', statusClass(req.status)]">{{ req.status }}</span>
                    <span class="net-method">{{ req.method }}</span>
                    <span class="net-url">{{ req.url }}</span>
                    <span class="net-dur">{{ req.duration }}ms</span>
                    <span class="net-time">{{ req.time?.slice(11, 19) }}</span>
                  </div>
                  <div v-if="expandedNet === i" class="net-detail">
                    <div v-if="req.params"><b>Params:</b> <code>{{ req.params }}</code></div>
                    <div v-if="req.requestBody"><b>Request:</b> <code>{{ req.requestBody }}</code></div>
                    <div v-if="req.responseBody"><b>Response:</b> <code>{{ req.responseBody }}</code></div>
                    <div v-if="req.error" class="net-error-msg"><b>Error:</b> {{ req.error }}</div>
                  </div>
                </template>
                <div v-if="networkLogs.length === 0" class="log-empty">기록된 요청이 없습니다</div>
              </div>
            </div>
          </template>

          <!-- ── 탭 4: 상태 ── -->
          <template v-if="activeTab === 'state'">
            <!-- Vuex Mutation 이력 -->
            <div class="bug-report-section">
              <div class="bug-report-label">Vuex Mutation 이력 (최신순, 최대 100건)</div>
              <div class="log-list">
                <div v-for="(m, i) in context?.mutationLog || []" :key="i" class="log-item">
                  <span class="log-time">{{ m.time }}</span>
                  <span class="mutation-type">{{ m.type }}</span>
                  <span class="log-msg mutation-payload" v-if="m.payload !== null">{{ formatPayload(m.payload) }}</span>
                </div>
                <div v-if="!context?.mutationLog?.length" class="log-empty">기록된 mutation이 없습니다</div>
              </div>
            </div>

            <!-- 라우터 이력 -->
            <div class="bug-report-section">
              <div class="bug-report-label">라우터 이력</div>
              <div class="route-list">
                <div v-for="(r, i) in context?.routeHistory || []" :key="i" class="route-item">
                  <span class="log-time">{{ r.time }}</span>
                  <span class="route-from">{{ r.from }}</span>
                  <span class="route-arrow">→</span>
                  <span class="route-to">{{ r.to }}</span>
                </div>
                <div v-if="!context?.routeHistory?.length" class="log-empty">기록된 라우터 이력이 없습니다</div>
              </div>
            </div>

            <!-- localStorage -->
            <div class="bug-report-section" v-if="context?.storage && Object.keys(context.storage).length">
              <div class="bug-report-label">localStorage (민감 키 제외)</div>
              <div class="env-group">
                <div v-for="(val, key) in context.storage" :key="key" class="env-row">
                  <span>{{ key }}</span>
                  <span>{{ val }}</span>
                </div>
              </div>
            </div>

            <!-- Cesium 성능 -->
            <div class="bug-report-section" v-if="context?.cesiumPerf">
              <div class="bug-report-label">Cesium 성능 지표</div>
              <div class="env-group">
                <div class="env-row"><span>Primitives</span><span>{{ context.cesiumPerf.primitives }}</span></div>
                <div class="env-row"><span>Tiles Loaded</span><span>{{ context.cesiumPerf.tilesLoaded }}</span></div>
                <div class="env-row"><span>Max Screen Space Error</span><span>{{ context.cesiumPerf.maximumScreenSpaceError }}</span></div>
                <div class="env-row"><span>Shadows</span><span>{{ context.cesiumPerf.shadowsEnabled ? '활성' : '비활성' }}</span></div>
                <div class="env-row"><span>MSAA Samples</span><span>{{ context.cesiumPerf.msaaSamples }}</span></div>
              </div>
            </div>
          </template>

          <!-- ── 탭 5: 컨텍스트 ── -->
          <template v-if="activeTab === 'env'">
            <div class="bug-report-section" v-if="!context">
              <div class="log-empty log-empty--error">컨텍스트 수집에 실패했습니다 (콘솔 확인)</div>
            </div>
            <div class="bug-report-section" v-else>

              <!-- 사용자 정보 -->
              <div class="env-group" v-if="context.user">
                <div class="env-group-title">사용자</div>
                <div class="env-row"><span>아이디</span><span>{{ context.user.username }}</span></div>
                <div class="env-row" v-if="context.user.roles.length">
                  <span>권한</span><span>{{ context.user.roles.join(', ') }}</span>
                </div>
                <div class="env-row" v-if="context.user.exp">
                  <span>토큰 만료</span><span>{{ context.user.exp }}</span>
                </div>
              </div>

              <!-- 메뉴 상태 -->
              <div class="env-group">
                <div class="env-group-title">메뉴 상태</div>
                <div class="env-row"><span>상단 탭</span><span>{{ context.menus.headerName }}</span></div>
                <div class="env-row"><span>하위 메뉴</span><span>{{ context.menus.subMenuName }}</span></div>
                <div class="env-row">
                  <span>좌측 메뉴</span>
                  <span>{{ joinOrNone(context.menus.leftMenus) }}</span>
                </div>
                <div class="env-row">
                  <span>열린 패널</span>
                  <span>{{ joinOrNone(context.menus.openPanels) }}</span>
                </div>
                <div class="env-row">
                  <span>활성 도구</span>
                  <span>{{ joinOrNone(context.menus.activeTools) }}</span>
                </div>
              </div>

              <!-- 활성 데이터 -->
              <div class="env-group">
                <div class="env-group-title">표시 중인 데이터</div>
                <div class="env-row"><span>지도 타입</span><span>{{ context.activeData.mapType }}</span></div>
                <div class="env-row"><span>지형</span><span>{{ context.activeData.terrain || '기본' }}</span></div>
                <div class="env-row">
                  <span>데이터셋 ({{ context.activeData.datasets.length }})</span>
                  <span class="env-list">
                    <span v-if="!context.activeData.datasets.length">없음</span>
                    <span v-for="d in context.activeData.datasets" :key="d.layerId" class="env-tag">{{ d._displayName }}</span>
                  </span>
                </div>
                <div class="env-row">
                  <span>3D 타일 ({{ context.activeData.threeDTiles.length }})</span>
                  <span class="env-list">
                    <span v-if="!context.activeData.threeDTiles.length">없음</span>
                    <span v-for="t in context.activeData.threeDTiles" :key="t.threeDTilesId || t.sourceId" class="env-tag">{{ t._displayName }}</span>
                  </span>
                </div>
                <div class="env-row" v-if="context.activeData.autoPlacement.length">
                  <span>배치안 ({{ context.activeData.autoPlacement.length }})</span>
                  <span class="env-list">
                    <span v-for="ap in context.activeData.autoPlacement" :key="ap.sourceId" class="env-tag">{{ ap._displayName }}</span>
                  </span>
                </div>
                <div class="env-row" v-if="context.activeData.topicMaps.length">
                  <span>주제도 ({{ context.activeData.topicMaps.length }})</span>
                  <span class="env-list">
                    <span v-for="tm in context.activeData.topicMaps" :key="tm.key" class="env-tag">{{ tm._displayName }}</span>
                  </span>
                </div>
              </div>

              <!-- 최근 이벤트 -->
              <div class="env-group">
                <div class="env-group-title">최근 이벤트 (최신순)</div>
                <div class="event-list">
                  <div v-for="(ev, i) in context.recentEvents.slice(0, 30)" :key="i" class="event-item">
                    <span class="event-time">{{ ev.time }}</span>
                    <span class="event-type">{{ ev.type }}</span>
                  </div>
                  <div v-if="!context.recentEvents.length" class="log-empty">기록된 이벤트 없음</div>
                </div>
              </div>

              <!-- 카메라 -->
              <div class="env-group" v-if="context.camera">
                <div class="env-group-title">카메라 위치</div>
                <div class="env-row"><span>경도</span><span>{{ context.camera.longitude }}</span></div>
                <div class="env-row"><span>위도</span><span>{{ context.camera.latitude }}</span></div>
                <div class="env-row"><span>높이 (m)</span><span>{{ context.camera.height }}</span></div>
                <div class="env-row"><span>Heading / Pitch</span><span>{{ context.camera.heading }}° / {{ context.camera.pitch }}°</span></div>
              </div>

              <!-- 브라우저/환경 -->
              <div class="env-group">
                <div class="env-group-title">브라우저 / 화면</div>
                <div class="env-row"><span>일시</span><span>{{ context.datetime }}</span></div>
                <div class="env-row"><span>해상도</span><span>{{ context.screen.resolution }} · 뷰포트 {{ context.screen.viewport }}</span></div>
                <div class="env-row" v-if="context.memory"><span>JS 힙 메모리</span><span>{{ context.memory.usedMB }}MB / {{ context.memory.limitMB }}MB</span></div>
                <div class="env-row" v-if="context.connection"><span>네트워크</span><span>{{ context.connection.effectiveType }} · {{ context.connection.downlink }}Mbps</span></div>
                <div class="env-row"><span>언어</span><span>{{ context.browser.language }}</span></div>
              </div>

            </div>
          </template>

        </div>

        <!-- 푸터 -->
        <div class="bug-report-footer">
          <button v-if="serverEnabled" class="bug-btn-list" @click="openViewer">저장 목록</button>
          <button class="bug-btn-cancel" @click="close">취소</button>
          <button class="bug-btn-copy" @click="copyToClipboard" :disabled="!screenshotUrl" :title="copyStatus">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            {{ copyStatus }}
          </button>
          <button v-if="serverEnabled" class="bug-btn-save" @click="saveToServer" :disabled="isSaving || isCapturing">
            <span v-if="isSaving" class="bug-capture-spin" style="width:11px;height:11px;border-width:2px;"></span>
            {{ saveStatus }}
          </button>
          <button class="bug-btn-download" @click="download" :disabled="isCapturing">
            다운로드
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ScreenshotEditor from './ScreenshotEditor.vue';

const SEVERITY_OPTIONS = [
  { value: 'CRITICAL', label: '치명적' },
  { value: 'HIGH',     label: '높음' },
  { value: 'MEDIUM',   label: '보통' },
  { value: 'LOW',      label: '낮음' },
];

export default {
  name: 'BugfixReportModal',
  components: { ScreenshotEditor },
  // kit: createBugfix() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ['open-viewer'],
  expose: ['open', 'close'],
  mounted() {
    this._onKeydown = (e) => {
      if (e.key !== 'Escape' || !this.isOpen) return;
      // 편집기가 열려 있으면 편집기만 닫는다 (그린 내용 때문에 신고 창까지 닫히지 않도록)
      if (this.isEditingShot) this.isEditingShot = false;
      else this.close();
    };
    // 신고 창이 열려 있을 때 붙여넣은 이미지를 스크린샷으로 쓴다
    this._onPaste = (e) => {
      if (!this.isOpen || this.isEditingShot) return;
      const item = [...(e.clipboardData?.items || [])].find(i => i.type.startsWith('image/'));
      if (!item) return;
      e.preventDefault();
      this.loadShotFile(item.getAsFile());
    };
    window.addEventListener('keydown', this._onKeydown);
    window.addEventListener('paste', this._onPaste);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this._onKeydown);
    window.removeEventListener('paste', this._onPaste);
  },
  data() {
    return {
      isOpen: false,
      tool: false,             // '버그 신고 도구 문제' 체크
      backdropPressed: false,
      isEditingShot: false,
      isCapturing: false,
      activeTab: 'basic',
      screenshotUrl: null,
      severity: 'MEDIUM',
      problemDesc: '',
      reproSteps: '',
      expectedResult: '',
      allLogs: [],
      networkLogs: [],
      backendLogs: [],
      backendLogsState: 'idle',
      context: null,
      logSource: 'front',
      showError: true,
      showWarn: true,
      showLog: false,
      showBEError: true,
      showBEWarn: true,
      showBEInfo: false,
      expandedNet: null,
      copyStatus: '복사',
      isSaving: false,
      saveStatus: '서버 저장',
      severityOptions: SEVERITY_OPTIONS,
      project: null,
      info: {},
    };
  },
  computed: {
    hotkey() { return this.kit?.options?.hotkeys?.report || ''; },
    projects() { return this.kit?.projects || []; },
    // canFix=false(운영자 전용) 프로젝트는 '도구 문제' 체크박스로, 나머지는 신고 대상 선택으로
    appProjects() { return this.projects.filter((p) => this.info[p.key]?.canFix !== false); },
    serverEnabled() { return !!this.kit?.api?.enabled; },

    tabs() {
      const beErrCount = this.backendLogsState === 'ok'
        ? this.backendLogs.filter(e => e.level === 'ERROR').length : 0;
      const logBadge = (this.countByLevel('error') + beErrCount) || null;
      const mutCount = this.context?.mutationLog?.length || null;
      return [
        { id: 'basic',   label: '기본' },
        { id: 'logs',    label: '로그',     badge: logBadge },
        { id: 'network', label: '네트워크', badge: this.networkLogs.filter(r => r.error || r.status >= 400).length || null },
        { id: 'state',   label: '상태',     badge: mutCount },
        { id: 'env',     label: '컨텍스트' },
      ];
    },

    filteredLogs() {
      return this.allLogs.filter(e => {
        if (e.level === 'error') return this.showError;
        if (e.level === 'warn')  return this.showWarn;
        return this.showLog;
      }).slice(-100).reverse();
    },

    filteredBackendLogs() {
      return this.backendLogs.filter(e => {
        if (e.level === 'ERROR') return this.showBEError;
        if (e.level === 'WARN')  return this.showBEWarn;
        return this.showBEInfo;
      });
    },

    reversedNetwork() {
      return [...this.networkLogs].reverse();
    },
  },
  methods: {
    countByLevel(level) {
      return this.allLogs.filter(e => e.level === level).length;
    },

    countBackendByLevel(level) {
      return this.backendLogs.filter(e => e.level === level).length;
    },

    statusClass(status) {
      if (!status || status === 'ERR') return 'status-err';
      if (status >= 500) return 'status-5xx';
      if (status >= 400) return 'status-4xx';
      if (status >= 300) return 'status-3xx';
      return 'status-2xx';
    },

    toggleNetDetail(i) {
      this.expandedNet = this.expandedNet === i ? null : i;
    },

    joinOrNone(values) {
      return values && values.length ? values.join(', ') : '없음';
    },

    formatPayload(payload) {
      if (payload === null || payload === undefined) return '';
      if (typeof payload === 'string') return payload.length > 120 ? payload.slice(0, 120) + '…' : payload;
      try {
        const s = JSON.stringify(payload);
        return s.length > 120 ? s.slice(0, 120) + '…' : s;
      } catch {
        return String(payload);
      }
    },

    async fetchBackendLogs() {
      if (!this.kit?.options?.backendLogs) { this.backendLogsState = 'skipped'; return; }
      this.backendLogsState = 'loading';
      try {
        this.backendLogs = (await this.kit.fetchBackendLogs()) ?? [];
        this.backendLogsState = 'ok';
      } catch {
        this.backendLogsState = 'error';
      }
    },

    hasNetworkError() {
      return this.networkLogs.some(r => r.error || (r.status && r.status >= 400));
    },

    open() { return this.openReport(); },
    setProject(key) { this.kit?.setProject(key); this.project = key; },
    async openReport() {
      if (this.isCapturing || this.isOpen) return;
      this.project = this.kit?.project || null;
      if (this.kit?.projectInfo) this.kit.projectInfo().then((i) => { this.info = { ...i }; });
      this.problemDesc = '';
      this.reproSteps = '';
      this.expectedResult = '';
      this.tool = false;
      this.severity = 'MEDIUM';
      this.screenshotUrl = null;
      this.activeTab = 'basic';
      this.expandedNet = null;
      this.logSource = 'front';
      this.allLogs = this.kit?.getLogs() ?? [];
      this.networkLogs = this.kit?.getNetwork() ?? [];
      this.backendLogs = [];
      this.backendLogsState = 'idle';
      this.isCapturing = true;
      await this.$nextTick();

      const tasks = [this.kit ? this.kit.captureScreen() : Promise.reject(new Error('kit 없음'))];
      if (this.hasNetworkError()) tasks.push(this.fetchBackendLogs());
      else this.backendLogsState = 'skipped';

      const [screenshot] = await Promise.allSettled(tasks);
      if (screenshot.status === 'fulfilled') this.screenshotUrl = screenshot.value;
      else console.warn('[BugReport] 캡처 실패:', screenshot.reason);
      this.context = this.safeCaptureContext();
      this.isCapturing = false;
      this.isOpen = true;
    },

    // 컨텍스트 수집이 실패해도 모달은 열려야 한다
    // (예외가 나면 isCapturing이 true로 남아 캡처 오버레이에서 멈춘다)
    safeCaptureContext() {
      try {
        return this.kit?.captureContext() ?? null;
      } catch (e) {
        console.error('[BugReport] 컨텍스트 수집 실패:', e);
        return null;
      }
    },

    async recapture() {
      this.isCapturing = true;
      this.isOpen = false;
      await this.$nextTick();
      try {
        this.screenshotUrl = await this.kit.captureScreen();
      } catch (e) {
        console.warn('[BugReport] 캡처 실패:', e);
      }
      this.context = this.safeCaptureContext();
      this.isCapturing = false;
      this.isOpen = true;
    },

    close() {
      this.isOpen = false;
      this.isEditingShot = false;
      this.screenshotUrl = null;
    },

    onShotEdited(dataUrl) {
      this.screenshotUrl = dataUrl;
      this.isEditingShot = false;
    },

    onShotFile(e) {
      const file = e.target.files?.[0];
      e.target.value = '';
      this.loadShotFile(file);
    },

    // 사용자가 고른(붙여넣은) 이미지를 PNG dataURL 로 바꿔 스크린샷 자리에 넣는다
    loadShotFile(file) {
      if (!file || !file.type.startsWith('image/')) return;
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        this.screenshotUrl = canvas.toDataURL('image/png');
        URL.revokeObjectURL(url);
      };
      img.onerror = () => URL.revokeObjectURL(url);
      img.src = url;
    },
    // 저장 목록: Vue 앱은 open-viewer 이벤트로, Web Component 는 kit 이 붙여 둔 뷰어를 직접 연다
    openViewer() {
      this.$emit('open-viewer');
      this.close();
      this.kit?.openViewer?.();
    },

    buildReport() {
      return {
        severity: this.severity,
        problem: this.problemDesc,
        reproSteps: this.reproSteps,
        expectedResult: this.expectedResult,
        context: this.context,
        frontendLogs: this.kit?.getLogs() ?? [],
        backendLogs: this.backendLogs,
        network: this.kit?.getNetwork() ?? [],
        mutationLog: this.kit?.getMutations() ?? [],
        routeHistory: this.kit?.getRoutes() ?? [],
      };
    },

    async copyToClipboard() {
      try {
        const report = this.buildReport();
        await navigator.clipboard.writeText(JSON.stringify(report, null, 2));
        this.copyStatus = '복사됨 ✓';
        setTimeout(() => { this.copyStatus = '복사'; }, 2000);
      } catch {
        this.copyStatus = '실패';
        setTimeout(() => { this.copyStatus = '복사'; }, 2000);
      }
    },

    async saveToServer() {
      this.isSaving = true;
      this.saveStatus = '저장 중...';
      try {
        const report = this.buildReport();
        const payload = {
          severity:       this.severity,
          problem:        this.problemDesc,
          tool:           this.tool,
          reproSteps:     this.reproSteps,
          expectedResult: this.expectedResult,
          screenshot:     this.screenshotUrl,
          contextJson:    JSON.stringify(report.context),
          frontendLogs:   JSON.stringify(report.frontendLogs),
          backendLogs:    JSON.stringify(report.backendLogs),
          networkLogs:    JSON.stringify(report.network),
          mutationLog:    JSON.stringify(report.mutationLog),
        };
        await this.kit.api.save(payload);
        this.saveStatus = '저장됨 ✓';
        setTimeout(() => { this.saveStatus = '서버 저장'; }, 3000);
      } catch (e) {
        console.error('[BugReport] 서버 저장 실패:', e);
        this.saveStatus = '저장 실패';
        setTimeout(() => { this.saveStatus = '서버 저장'; }, 3000);
      } finally {
        this.isSaving = false;
      }
    },

    download() {
      const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const severityTag = this.severity.toLowerCase();

      if (this.screenshotUrl) {
        const imgLink = document.createElement('a');
        imgLink.href = this.screenshotUrl;
        imgLink.download = `bug-screenshot_${severityTag}_${ts}.png`;
        imgLink.click();
      }

      const report = this.buildReport();
      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const jsonLink = document.createElement('a');
      jsonLink.href = URL.createObjectURL(blob);
      jsonLink.download = `bug-report_${severityTag}_${ts}.json`;
      setTimeout(() => { jsonLink.click(); URL.revokeObjectURL(jsonLink.href); }, 300);

      this.close();
    },
  },
};
</script>

<style scoped>
.bug-target-tool { margin-left: 10px; margin-right: 12px; font-size: 11px; color: #aab; display: inline-flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap; }
.bug-target-tool input { margin: 0; }
.bug-target { margin-left: auto; margin-right: 12px; display: inline-flex; border: 1px solid rgba(255,255,255,0.18); border-radius: 6px; overflow: hidden; }
.bug-target button { border: 0; padding: 4px 11px; font-size: 11px; background: transparent; color: #aab; cursor: pointer; }
.bug-target button + button { border-left: 1px solid rgba(255,255,255,0.18); }
.bug-target__on { background: rgba(136,170,255,0.28); color: #fff; }
.screenshot-hint { margin-top: 4px; font-size: 11px !important; color: #7f8a99 !important; }
/* lhdt public/scss/components/_bug-report.scss 를 컴파일해 옮긴 것 - Web Component 안(shadow DOM)에서는 전역 CSS 가 닿지 않는다 */
.bug-report-overlay {
  position: fixed;
  inset: 0;
  z-index: 9100;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bug-report-modal {
  width: 640px;
  max-width: calc(100vw - 32px);
  max-height: 90vh;
  background: var(--popup-bg, #1e1e2e);
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.bug-report-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--primary-color, #3a3a5c);
  flex-shrink: 0;
}

.bug-report-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text, #e0e0e0);
}

.bug-report-shortcut {
  font-size: 10px;
  font-weight: 400;
  color: #666;
  margin-left: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 1px 5px;
  letter-spacing: 0.03em;
}

.bug-report-close {
  background: none;
  border: none;
  color: #aaa;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  padding: 4px 6px;
}
.bug-report-close:hover {
  color: #fff;
}

.bug-report-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  flex-shrink: 0;
}

.bug-tab {
  padding: 8px 16px;
  font-size: 12px;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.15s;
}
.bug-tab:hover {
  color: #ccc;
}
.bug-tab.active {
  color: var(--text, #e0e0e0);
}
.bug-tab.active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color, #6060cc);
}

.bug-tab-badge {
  background: #c03030;
  color: #fff;
  border-radius: 10px;
  font-size: 10px;
  padding: 0 5px;
  min-width: 16px;
  text-align: center;
}

.bug-report-body {
  padding: 14px 16px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bug-report-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bug-report-label {
  font-size: 11px;
  color: var(--text-sub, #9090a0);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.screenshot-wrap {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #111;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screenshot-img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  display: block;
}

.screenshot-placeholder {
  color: #555;
  font-size: 13px;
  padding: 24px;
}

.bug-report-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--text, #e0e0e0);
  font-size: 13px;
  padding: 8px 10px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
}
.bug-report-textarea::placeholder {
  color: #555;
}
.bug-report-textarea:focus {
  outline: none;
  border-color: var(--primary-color, #5555aa);
}

.included-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  color: #bbb;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.log-filter-group {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.log-filter-chip {
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  color: #888;
}
.log-filter-chip input {
  cursor: pointer;
}
.log-filter-chip.error {
  color: #e06060;
}
.log-filter-chip.warn {
  color: #c8a040;
}
.log-filter-chip.log {
  color: #6080b0;
}

.log-list {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  max-height: 340px;
  overflow-y: auto;
  font-size: 11px;
  font-family: "Courier New", monospace;
}

.log-item {
  display: flex;
  gap: 6px;
  padding: 3px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.log-item:last-child {
  border-bottom: none;
}
.log-item--error {
  background: rgba(200, 60, 60, 0.08);
}
.log-item--warn {
  background: rgba(200, 160, 40, 0.08);
}

.log-time {
  color: #555;
  flex-shrink: 0;
}

.log-badge-lv {
  flex-shrink: 0;
  width: 36px;
  font-weight: bold;
}
.log-item--error .log-badge-lv {
  color: #e06060;
}
.log-item--warn .log-badge-lv {
  color: #c8a040;
}
.log-item--log .log-badge-lv {
  color: #6080b0;
}

.log-msg {
  color: #bbb;
  word-break: break-all;
  white-space: pre-wrap;
}

.log-empty {
  padding: 16px;
  color: #555;
  text-align: center;
  font-size: 12px;
}

.net-list {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  max-height: 360px;
  overflow-y: auto;
  font-size: 11px;
  font-family: "Courier New", monospace;
}

.net-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  cursor: pointer;
}
.net-item:hover {
  background: rgba(255, 255, 255, 0.04);
}
.net-item:last-child {
  border-bottom: none;
}
.net-item--error {
  background: rgba(200, 60, 60, 0.07);
}

.net-status {
  flex-shrink: 0;
  width: 36px;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  padding: 1px 0;
  font-size: 10px;
}
.net-status.status-2xx {
  color: #60c860;
}
.net-status.status-3xx {
  color: #c8c040;
}
.net-status.status-4xx {
  color: #e08040;
}
.net-status.status-5xx {
  color: #e06060;
}
.net-status.status-err {
  color: #e06060;
}

.net-method {
  flex-shrink: 0;
  width: 42px;
  color: #8888cc;
  font-weight: bold;
}

.net-url {
  flex: 1;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.net-dur {
  flex-shrink: 0;
  color: #777;
  width: 52px;
  text-align: right;
}

.net-time {
  flex-shrink: 0;
  color: #555;
  width: 56px;
  text-align: right;
}

.net-detail {
  background: rgba(0, 0, 0, 0.4);
  padding: 6px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: #aaa;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.net-detail code {
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
  color: #89b;
  margin-top: 2px;
}

.net-error-msg {
  color: #e06060;
}

.env-group {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  overflow: hidden;
}
.env-group + .env-group {
  margin-top: 8px;
}

.env-group-title {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #666;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.env-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
  font-size: 11px;
  font-family: "Courier New", monospace;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.env-row:last-child {
  border-bottom: none;
}
.env-row span:first-child {
  color: #777;
  flex-shrink: 0;
  margin-right: 12px;
}
.env-row span:last-child {
  color: #ccc;
  text-align: right;
  word-break: break-all;
}

.chip--ok {
  border-color: rgba(60, 180, 60, 0.4);
  color: #80e080;
}

.chip--err {
  border-color: rgba(200, 60, 60, 0.4);
  color: #e08080;
}

.log-source-toggle {
  display: flex;
  gap: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  align-self: flex-start;
}

.log-src-btn {
  padding: 5px 16px;
  font-size: 12px;
  background: transparent;
  border: none;
  color: #777;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s, color 0.15s;
}
.log-src-btn + .log-src-btn {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}
.log-src-btn.active {
  background: rgba(100, 100, 200, 0.2);
  color: #ccc;
}
.log-src-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.05);
}

.log-src-spin {
  animation: spin 1s linear infinite;
  display: inline-block;
}

.log-src-err {
  color: #e06060;
  font-weight: bold;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.log-logger {
  flex-shrink: 0;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #668;
  margin-right: 4px;
}

.log-empty--error {
  color: #e06060;
}

.event-list {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.25);
  max-height: 180px;
  overflow-y: auto;
  font-size: 11px;
  font-family: "Courier New", monospace;
}

.event-item {
  display: flex;
  gap: 10px;
  padding: 3px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.event-item:last-child {
  border-bottom: none;
}

.event-time {
  color: #555;
  flex-shrink: 0;
}

.event-type {
  color: #99aadd;
}

.env-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;
}

.env-tag {
  background: rgba(100, 120, 200, 0.15);
  border: 1px solid rgba(100, 120, 200, 0.25);
  border-radius: 3px;
  padding: 1px 6px;
  font-size: 10px;
  color: #aac;
}

.severity-group {
  display: flex;
  gap: 6px;
}

.severity-btn {
  padding: 4px 12px;
  font-size: 11px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: #777;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.severity-btn:hover {
  color: #ccc;
}
.severity-btn--critical.active {
  background: rgba(180, 30, 30, 0.3);
  border-color: #b01e1e;
  color: #f08080;
}
.severity-btn--high.active {
  background: rgba(200, 100, 20, 0.3);
  border-color: #c86414;
  color: #f0a060;
}
.severity-btn--medium.active {
  background: rgba(180, 160, 20, 0.3);
  border-color: #b4a014;
  color: #e0d060;
}
.severity-btn--low.active {
  background: rgba(40, 120, 60, 0.3);
  border-color: #287840;
  color: #80d090;
}

.mutation-type {
  flex-shrink: 0;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #8888cc;
  font-weight: bold;
  margin-right: 4px;
}

.mutation-payload {
  color: #7799aa;
  font-size: 10px;
}

.route-list {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  max-height: 200px;
  overflow-y: auto;
  font-size: 11px;
  font-family: "Courier New", monospace;
}

.route-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.route-item:last-child {
  border-bottom: none;
}

.route-from {
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
}

.route-arrow {
  color: #555;
  flex-shrink: 0;
}

.route-to {
  color: #aac;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.bug-btn-copy {
  padding: 7px 14px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: #aaa;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: auto;
  transition: background 0.15s, color 0.15s;
}
.bug-btn-copy:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
}
.bug-btn-copy:disabled {
  opacity: 0.4;
  cursor: default;
}

.bug-btn-sm {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: #aaa;
  cursor: pointer;
}
.bug-btn-sm:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
}
.bug-btn-sm:disabled {
  opacity: 0.4;
  cursor: default;
}

.bug-report-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}

.bug-btn-cancel {
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: #aaa;
  font-size: 13px;
  cursor: pointer;
}
.bug-btn-cancel:hover {
  background: rgba(255, 255, 255, 0.07);
}

.bug-btn-download {
  padding: 7px 18px;
  border-radius: 6px;
  border: none;
  background: #c03030;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.bug-btn-download:hover:not(:disabled) {
  background: #d04040;
}
.bug-btn-download:disabled {
  opacity: 0.4;
  cursor: default;
}

.bug-capture-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
}
.bug-capture-spinner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(20, 28, 40, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 16px 24px;
  color: #a8c0d8;
  font-size: 13px;
  letter-spacing: 0.3px;
}
.bug-capture-spin {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(136, 170, 255, 0.3);
  border-top-color: #88aaff;
  border-radius: 50%;
  animation: bug-spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes bug-spin {
  to { transform: rotate(360deg); }
}

/* 저장 목록 버튼은 BugReportModal global CSS에 있으므로 여기선 scoped 추가만 */
.bug-btn-save {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 5px;
  border: 1px solid rgba(46, 204, 113, 0.4);
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  font-size: 11px;
  cursor: pointer;
  transition: background .15s;
  &:hover:not(:disabled) { background: rgba(46, 204, 113, 0.2); }
  &:disabled { opacity: 0.5; cursor: default; }
}
.bug-btn-list {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: #778899;
  font-size: 11px;
  cursor: pointer;
  margin-right: auto;
  &:hover { background: rgba(255,255,255,0.08); color: #aabbcc; }
}
</style>
