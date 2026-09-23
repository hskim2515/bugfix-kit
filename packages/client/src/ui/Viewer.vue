<template>
  <div class="bugfix-root">
    <!-- 바깥(오버레이)에서 누르고 뗀 경우에만 닫는다: 창 안에서 드래그하다 밖에서 떼면 click 이 오버레이로 가서 닫히던 문제 -->
    <div v-if="isOpen" class="brv-overlay"
      @mousedown="backdropPressed = $event.target === $event.currentTarget"
      @click.self="backdropPressed && close()">
      <div class="brv-modal">

        <!-- 헤더 -->
        <div class="brv-header">
          <span class="brv-title">
            저장된 버그 리포트
            <span v-if="hotkey" class="brv-shortcut">{{ hotkey }}</span>
          </span>
          <span v-if="viewProjects.length > 1" class="brv-projects">
            <button v-for="p in viewProjects" :key="p.key" :class="{ 'brv-projects__on': project === p.key }" @click="switchProject(p.key)">{{ p.label }}</button>
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
                <span v-if="item.tool" class="brv-badge brv-badge--tool" title="버그 신고 도구 자체의 문제">도구</span>
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

              <!-- 스크린샷 크게 보기 -->
      <div v-if="bigShot" class="brv-shots__big" @click="bigShot = null">
        <img :src="shotUrls[bigShot.file]" :alt="bigShot.name">
        <div class="brv-shots__bigcap">{{ bigShot.name }} · {{ bigShot.label }} <span class="brv-suggest__hint">(눌러서 닫기)</span></div>
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

              <!-- AI 자동 수정: 머리줄(제목·상태·경과·도구) → 요청 전이면 큰 버튼 하나, 아니면 PR·요약 → 진행 로그 → 추천 개선 → 대화 -->
              <div class="brv-section brv-ai">
                <div class="brv-ai__head">
                  <span class="brv-label brv-ai__title">AI 자동 수정</span>
                  <span :class="['brv-fix', `brv-fix--${(detail.fixStatus || 'none').toLowerCase()}`]">{{ fixLabel(detail.fixStatus) }}</span>
                  <span v-if="fixBusy || fixInProgress" class="brv-spin brv-spin--sm"></span>
                  <span v-if="fixInProgress && fixElapsed" class="brv-fix-elapsed">{{ fixElapsed }}</span>
                  <span v-else-if="deployPending" class="brv-fix-elapsed"><span class="brv-spin brv-spin--sm"></span> 배포 중</span>
                  <span v-if="detail.fixStatus && fixable" class="brv-ai__tools">
                    <button class="brv-ai__tool" :disabled="fixBusy" @click="refreshDetail" title="상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)">새로고침</button>
                    <button class="brv-ai__tool" :disabled="fixBusy || fixInProgress" @click="requestFix" title="앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다">처음부터 다시</button>
                  </span>
                </div>

                <!-- 요청 전 -->
                <div v-if="!detail.fixStatus && detail.tool" class="brv-ai__hint">버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.</div>
                <div v-else-if="!detail.fixStatus && !fixable" class="brv-ai__hint">이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.</div>
                <div v-else-if="!detail.fixStatus" class="brv-ai__start">
                  <button class="brv-fix-btn brv-fix-btn--lg" :disabled="fixBusy" @click="requestFix">AI 에게 수정 요청</button>
                  <span class="brv-ai__hint">서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.</span>
                </div>

                <template v-else>
                  <div v-if="detail.fixPrUrl || detail.fixBranch" class="brv-ai__meta">
                    <a v-if="detail.fixPrUrl" class="brv-link brv-ai__pr" :href="detail.fixPrUrl" target="_blank" rel="noopener">PR #{{ prNumber }}</a>
                    <span v-if="detail.fixBranch" class="brv-ai__branch brv-selectable">{{ detail.fixBranch }}</span>
                    <template v-if="detail.fixVersion != null">
                      <span class="brv-ai__branch">v{{ detail.fixVersion }}</span>
                      <template v-if="detail.preview">
                        <a v-if="detail.preview.status === 'UP' && detail.preview.url" class="brv-link" :href="detail.preview.url" target="_blank" rel="noopener" title="이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)">미리보기 열기 ↗</a>
                        <span v-else-if="previewPending" class="brv-ai__hint"><span class="brv-spin brv-spin--sm"></span> 미리보기 준비 중({{ previewLabel }})</span>
                        <button v-else-if="detail.preview.canPreview && fixable" class="brv-ai__tool" :disabled="fixBusy" @click="startPreview" title="이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)">미리보기 띄우기</button>
                        <span v-if="detail.preview.status === 'FAILED'" class="brv-ai__hint" :title="detail.preview.error || ''">미리보기 실패</span>
                      </template>
                    </template>
                  </div>
                  <div v-if="detail.fixSummary" class="brv-ai__summary brv-selectable">{{ detail.fixSummary }}</div>

                  <!-- 이 신고와 관련된 지식 그래프 부분 - AI 가 참고한 것과 같은 선택. 화면 → 기능 → 파일 → API → 백엔드 층으로 -->
                  <details v-if="kgLayout" class="brv-kg" open>
                    <summary>관련 기능·파일 <span class="brv-suggest__hint">지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것</span></summary>
                    <div class="brv-kg__wrap">
                      <svg :viewBox="`0 0 ${kgLayout.w} ${kgLayout.h}`" :style="{ width: kgLayout.w + 'px', height: kgLayout.h + 'px' }" class="brv-kg__svg">
                        <text v-for="c in kgLayout.cols" :key="'c' + c.layer" :x="c.x" y="12" class="brv-kg__col">{{ c.title }}</text>
                        <path v-for="(e, i) in kgLayout.edges" :key="'e' + i" :d="e.d" :class="['brv-kg__edge', 'brv-kg__edge--' + e.rel, { 'brv-kg__edge--dim': kgHover && e.from !== kgHover && e.to !== kgHover }]" />
                        <g v-for="n in kgLayout.nodes" :key="n.id" :transform="`translate(${n.x},${n.y})`" :class="['brv-kg__node', { 'brv-kg__node--hit': n.hit, 'brv-kg__node--dim': kgHover && kgHover !== n.id && !kgNbr(n.id) }]" @mouseenter="kgHover = n.id" @mouseleave="kgHover = null">
                          <title>{{ n.label }}{{ n.path ? '\n' + n.path : '' }}{{ n.route ? '\n' + n.route : '' }}{{ n.desc ? '\n' + n.desc : '' }}</title>
                          <rect :width="n.w" :height="n.h" rx="4" :fill="kgColor(n.type)" />
                          <text x="6" y="14" class="brv-kg__label">{{ n.short }}</text>
                        </g>
                      </svg>
                    </div>
                  </details>

                  <!-- 수정 뒤 헤드리스 화면 확인(front-check) 스크린샷 - 서버에 보관된 것 -->
                  <div v-if="fixShots.length" class="brv-shots">
                    <div class="brv-shots__title">화면 확인 <span class="brv-suggest__hint">{{ fixShots[fixShots.length - 1].label }}</span></div>
                    <div class="brv-shots__strip">
                      <figure v-for="s in fixShots" :key="s.file" class="brv-shots__item" @click="openShot(s)">
                        <img v-if="shotUrls[s.file]" :src="shotUrls[s.file]" :alt="s.name">
                        <div v-else class="brv-shots__ph">…</div>
                        <figcaption>{{ s.name.replace(/\.png$/i, '') }}</figcaption>
                      </figure>
                    </div>
                  </div>

                  <details v-if="detail.fixLog" class="brv-fix-log" :open="fixInProgress || deployPending">
                    <summary>진행 로그 <span class="brv-ai__count">{{ logLineCount }}줄</span></summary>
                    <pre ref="fixLogPre" class="brv-selectable">{{ detail.fixLog }}</pre>
                  </details>

                  <!-- AI 가 남긴 추천 개선: 누르면 그 내용을 그대로 '수정 요청' 으로 보낸다 -->
                  <div v-if="fixSuggestions.length" class="brv-suggest">
                    <div class="brv-suggest__title">추천 개선 <span class="brv-suggest__hint">실행을 누르면 그 내용으로 이어서 고칩니다</span></div>
                    <div v-for="(s, i) in fixSuggestions" :key="i" class="brv-suggest__item">
                      <span class="brv-suggest__text brv-selectable">{{ s }}</span>
                      <button v-if="fixable" class="brv-fix-btn brv-fix-btn--ghost brv-suggest__run" :disabled="fixBusy || fixInProgress" @click="runSuggestion(s)">실행</button>
                    </div>
                  </div>

                  <!-- 이어서 대화: 질문(코드 변경 없음) · 수정 요청(수정 → 검증 → PR/병합) -->
                  <div class="brv-chat">
                    <div v-for="(m, i) in fixChat" :key="i" :class="['brv-chat__msg', `brv-chat__msg--${m.role}`]">
                      <span class="brv-chat__who">{{ m.role === 'user' ? '나' : 'AI' }}</span>
                      <div class="brv-chat__text brv-selectable">{{ m.text }}</div>
                    </div>
                    <div v-if="fixInProgress && fixChat.length && fixChat[fixChat.length - 1].role === 'user'" class="brv-chat__msg brv-chat__msg--assistant">
                      <span class="brv-chat__who">AI</span>
                      <div class="brv-chat__text"><span class="brv-spin brv-spin--sm"></span> 생각 중…</div>
                    </div>
                    <div v-if="fixable" class="brv-chat__compose">
                      <textarea v-model="chatInput" class="brv-chat__input" rows="2" :disabled="fixBusy || fixInProgress"
                                placeholder="질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘"
                                @keydown.ctrl.enter.prevent="sendChat('ask')" @keydown.meta.enter.prevent="sendChat('ask')"></textarea>
                      <div class="brv-chat__btns">
                        <button class="brv-fix-btn brv-fix-btn--ghost" :disabled="fixBusy || fixInProgress || !chatInput.trim()" @click="sendChat('ask')" title="코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)">질문</button>
                        <button class="brv-fix-btn" :disabled="fixBusy || fixInProgress || !chatInput.trim()" @click="sendChat('change')" title="앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지">수정 요청</button>
                      </div>
                    </div>
                    <div v-if="fixable" class="brv-ai__hint">질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.</div>
                  </div>
                </template>
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
  RUNNING:   'AI 가 고치는 중',
  READY:     '수정본 준비 · 아직 내보내지 않음(콘솔에서 PR·병합)',
  PR_OPENED: 'PR 올라옴 · 병합 안 됨(로그 확인)',
  MERGED:    '병합 완료',
  FAILED:    '실패 · 진행 로그 확인',
};
const FIX_SHORT = { QUEUED: '대기', RUNNING: '수정중', READY: '준비', PR_OPENED: 'PR', MERGED: '병합', FAILED: '실패' };

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
      backdropPressed: false,
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
      canFix: true,            // 프로젝트 설정(fixFrom) - 앱 사용자에게 수정 요청을 열어 두었는가
      kg: null,                // 이 신고의 관련 부분 그래프 { nodes, edges }
      kgHover: null,
      shotUrls: {},            // fixShots file → object URL
      bigShot: null,           // 크게 보는 스크린샷
      project: null,
      info: {},
      logTab: 'front',
      expanded: new Set(),
      showFE: { error: true, warn: true, log: false },
      showBE: { error: true, warn: true, info: false },
      showNet: { error: true, ok: false },
    };
  },
  computed: {
    hotkey() { return this.kit?.options?.hotkeys?.viewer || ''; },
    projects() { return this.kit?.projects || []; },
    // 앱 사용자에게는 고칠 수 있는(canFix) 프로젝트만 보인다. 관리 콘솔(adminKey)은 목록을 한데 모아 보여 주고 프로젝트를 골라 열므로 전환 탭이 없다
    // 도구 문제 리포트는 이 프로젝트 코드와 무관하므로 수정 UI 를 두지 않는다
    fixable() { return this.canFix && !this.detail?.tool; },
    /** 관련 부분 그래프를 층(열)으로 배치한 SVG 좌표 - 열: 화면·메뉴 / 기능 / 파일 / API / 백엔드 / 테이블 */
    kgLayout() {
      const g = this.kg;
      if (!g?.nodes?.length) return null;
      const COLS = [{ layers: [0, 1, 2], title: '화면·메뉴' }, { layers: [3], title: '기능' }, { layers: [4], title: '구현 파일' }, { layers: [5], title: 'API' }, { layers: [6], title: '백엔드' }, { layers: [7], title: '테이블' }];
      const colW = 168, rowH = 30, top = 22, gapX = 26;
      const used = COLS.map((c) => g.nodes.filter((n) => c.layers.includes(n.layer))).map((ns, i) => ({ ...COLS[i], ns })).filter((c) => c.ns.length);
      const nodes = [], cols = [];
      let x = 8;
      for (const c of used) {
        cols.push({ layer: c.layers[0], x, title: c.title });
        c.ns.sort((a, b) => (b.hit - a.hit) || (b.score || 0) - (a.score || 0));
        c.ns.forEach((n, i) => {
          const short = n.label.length > 22 ? n.label.slice(0, 21) + '…' : n.label;
          nodes.push({ ...n, x, y: top + i * rowH, w: colW - gapX, h: 20, short });
        });
        x += colW;
      }
      const at = new Map(nodes.map((n) => [n.id, n]));
      const edges = [];
      for (const e of g.edges) {
        const a = at.get(e.from), b = at.get(e.to);
        if (!a || !b || a === b) continue;
        const [l, r] = a.x <= b.x ? [a, b] : [b, a];
        const x1 = l.x + l.w, y1 = l.y + l.h / 2, x2 = r.x, y2 = r.y + r.h / 2;
        const d = l.x === r.x ? `M${x1},${y1} C${x1 + 18},${y1} ${x2 + l.w + 18},${y2} ${x2 + l.w},${y2}` : `M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
        edges.push({ d, rel: e.rel, from: e.from, to: e.to });
      }
      const h = top + Math.max(...used.map((c) => c.ns.length)) * rowH + 4;
      return { nodes, edges, cols, w: x + 4, h };
    },
    fixShots() { try { return this.detail?.fixShots ? JSON.parse(this.detail.fixShots) : []; } catch { return []; } },
    viewProjects() { return this.kit?.options?.adminKey ? [] : this.projects.filter((p) => this.info[p.key]?.canFix !== false); },
    prNumber() { return this.detail?.fixPrNumber || (this.detail?.fixPrUrl || '').split('/').pop(); },
    logLineCount() { return (this.detail?.fixLog || '').split('\n').filter(Boolean).length; },
    fixInProgress() { return ['QUEUED', 'RUNNING'].includes(this.detail?.fixStatus); },
    // 병합 뒤 배포(GitHub Actions) 추적이 아직 진행 중인가 - 로그에 끝났다는 줄이 없고 갱신이 최근(35분 안)이면
    previewPending() { return ['QUEUED', 'BUILDING', 'STARTING'].includes(this.detail?.preview?.status); },
    previewLabel() { return ({ QUEUED: '대기', BUILDING: '빌드', STARTING: '시작' })[this.detail?.preview?.status] || ''; },
    deployPending() {
      if (this.detail?.fixStatus !== 'MERGED') return false;
      const log = this.detail?.fixLog || '';
      if (/배포 완료|배포 추적 종료|시작되지 않았습니다|실패한 워크플로/.test(log)) return false;
      const t = new Date(this.detail?.fixUpdatedAt || 0).getTime();
      return Date.now() - t < 35 * 60 * 1000;
    },
    fixChat() { try { return this.detail?.fixChat ? JSON.parse(this.detail.fixChat) : []; } catch { return []; } },
    fixSuggestions() {
      try { const v = this.detail?.fixSuggestions ? JSON.parse(this.detail.fixSuggestions) : []; return Array.isArray(v) ? v : []; } catch { return []; }
    },
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
    fixShots: { immediate: true, handler(list) { this.loadShots(list); } },
    'detail.fixLog'() {
      this.$nextTick(() => { const el = this.$refs.fixLogPre; if (el) el.scrollTop = el.scrollHeight; });
    },
  },
  beforeUnmount() { this._stopFixPolling(); },
  methods: {
    async open(id) {
      this.isOpen = true;
      this.selected = null;
      this.detail = null;
      this.expanded = new Set();
      if (this.kit?.projectInfo) this.info = { ...(await this.kit.projectInfo()) };
      // 앱 사용자에게 안 보이는(운영자 전용) 프로젝트가 현재 대상이면 첫 앱 프로젝트로
      if (!this.kit?.options?.adminKey && this.info[this.kit?.project]?.canFix === false) { const first = this.projects.find((p) => this.info[p.key]?.canFix !== false); if (first) this.kit.setProject(first.key); }
      this.project = this.kit?.project || null;
      await this.loadInfo();
      await this.fetchList();
      if (id) await this.openDetail(Number(id));     // 대시보드 등에서 특정 리포트로 바로
    },
    kgColor(t) { return { module: '#6b5b1f', screen: '#1f5e4f', menu: '#1f4a6b', feature: '#334c66', component: '#4a3466', store: '#6b4a2a', util: '#3d4450', api: '#6b2a3a', service: '#6b3f2a', table: '#5e4a1f' }[t] || '#3a4050'; },
    kgNbr(id) { return !!this.kg?.edges.some((e) => (e.from === this.kgHover && e.to === id) || (e.to === this.kgHover && e.from === id)); },
    async loadKnowledge(id) {
      this.kg = null;
      if (!this.kit?.api?.knowledge) return;
      try { const k = await this.kit.api.knowledge(id); if (this.selected === id && k?.nodes?.length) this.kg = k; } catch { /* 그래프 없음 */ }
    },
    async loadShots(list) {
      for (const s of list || []) {
        if (this.shotUrls[s.file] || !this.kit?.api?.shot) continue;
        try { this.shotUrls[s.file] = await this.kit.api.shot(s.file); } catch { /* 없어진 파일 */ }
      }
    },
    openShot(s) { this.bigShot = s; },
    async loadInfo() {
      try { const i = await this.kit.api.info(); this.canFix = i?.canFix !== false; } catch { this.canFix = true; }
    },
    async switchProject(key) {
      if (key === this.project) return;
      this.kit?.setProject(key);
      this.project = key;
      this.selected = null; this.detail = null; this._stopFixPolling();
      await this.loadInfo();
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
        this.loadKnowledge(id);
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
      if (this.fixInProgress || this.deployPending || this.previewPending) this._startFixPolling(); else this._stopFixPolling();
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

    // ── AI 자동 수정 ──
    fixLabel(st) { return FIX_LABELS[st || 'none'] || st; },
    fixShort(st) { return FIX_SHORT[st] || st; },
    async requestFix() {
      if (!this.detail || this.fixBusy) return;
      const id = this.detail.bugReportId;
      this.fixBusy = true;
      try {
        const r = await this.kit.api.requestFix(id);
        if (r) { this.detail = { ...this.detail, ...r }; this._syncListFix(r); }
        this.showNotice('수정 요청', '서버에서 AI 가 고치기 시작합니다. 진행 로그가 여기에 쌓이고, PR 이 올라오면 링크가 표시됩니다.', 'success');
        this._startFixPolling();
      } catch (e) {
        this.showNotice('수정 요청 실패', e?.message || '요청에 실패했습니다.', 'error');
      } finally { this.fixBusy = false; }
    },
    // 추천 개선 실행 - 입력창에 쓰던 내용은 건드리지 않고 추천 문장을 그대로 수정 요청으로 보낸다
    runSuggestion(text) {
      if (!window.confirm(`이 추천을 AI 에게 수정 요청으로 보낼까요?\n\n${text}`)) return;
      this.sendChat('change', `추천 개선 실행: ${text}`);
    },
    async sendChat(mode, text) {
      const fromInput = text === undefined;
      const msg = (fromInput ? this.chatInput : text).trim();
      if (!msg || !this.detail || this.fixBusy) return;
      const id = this.detail.bugReportId;
      this.fixBusy = true;
      try {
        const r = await this.kit.api.fixChat(id, msg, mode);
        if (r) { this.detail = { ...this.detail, ...r }; this._syncListFix(r); }
        if (fromInput) this.chatInput = '';
        this._startFixPolling();
      } catch (e) {
        this.showNotice('전송 실패', e?.message || '실패했습니다.', 'error');
      } finally { this.fixBusy = false; }
    },
    async startPreview() {
      if (!this.detail) return;
      this.fixBusy = true;
      try { const r = await this.kit.api.previewStart(this.detail.bugReportId); this.detail = { ...this.detail, ...r }; this._startFixPolling(); }
      catch (e) { this.showNotice('미리보기 실패', e?.message || '실패했습니다.', 'error'); }
      finally { this.fixBusy = false; }
    },
    async refreshDetail() {
      if (!this.detail) return;
      const id = this.detail.bugReportId;
      try {
        // PR 이 열려 있는 리포트는 GitHub 상태와 맞춘다(병합됐으면 반영, 가능하면 병합 재시도)
        // 진행 중엔 스크린샷·로그 없이 fix_* 만 주는 가벼운 API 로 자주 읽는다
        const r = this.detail.fixPrUrl && ['PR_OPENED', 'FAILED'].includes(this.detail.fixStatus)
          ? await this.kit.api.fixSync(id)
          : (this.fixInProgress || this.deployPending || this.previewPending ? await this.kit.api.fixState(id) : await this.kit.api.get(id));
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
        if (!this.detail || !(this.fixInProgress || this.deployPending || this.previewPending)) { this._stopFixPolling(); return; }
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
.brv-projects { margin-left: auto; margin-right: 12px; display: inline-flex; border: 1px solid rgba(255,255,255,0.18); border-radius: 6px; overflow: hidden; }
.brv-projects button { border: 0; padding: 4px 11px; font-size: 11px; background: transparent; color: #aab; cursor: pointer; }
.brv-projects button + button { border-left: 1px solid rgba(255,255,255,0.18); }
.brv-projects__on { background: rgba(136,170,255,0.28); color: #fff; }
.brv-ai__head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.brv-ai__title { margin: 0 !important; }
.brv-ai__tools { margin-left: auto; display: inline-flex; gap: 6px; }
.brv-ai__tool { font-size: 11px; padding: 3px 9px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.18); background: transparent; color: #aab; cursor: pointer; }
.brv-ai__tool:hover:not(:disabled) { background: rgba(255,255,255,0.08); color: #fff; }
.brv-ai__tool:disabled { opacity: 0.4; cursor: default; }
.brv-ai__start { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding: 6px 0 2px; }
.brv-fix-btn--lg { padding: 9px 18px; font-size: 13px; }
.brv-ai__hint { font-size: 11px; color: #8898aa; line-height: 1.5; margin-top: 6px; }
.brv-ai__meta { display: flex; gap: 10px; align-items: center; font-size: 12px; margin-bottom: 6px; }
.brv-kg { margin: 8px 0 4px; font-size: 11px; }
.brv-kg summary { cursor: pointer; color: #aab; }
.brv-kg__wrap { overflow-x: auto; margin-top: 6px; padding-bottom: 4px; }
.brv-kg__svg { display: block; font-family: inherit; }
.brv-kg__col { font-size: 10px; fill: #889; }
.brv-kg__label { font-size: 11px; fill: #e6ebf5; pointer-events: none; }
.brv-kg__node rect { stroke: rgba(255,255,255,0.12); stroke-width: 1; transition: opacity .15s; }
.brv-kg__node--hit rect { stroke: #f2d35b; stroke-width: 1.5; }
.brv-kg__node--dim { opacity: 0.25; }
.brv-kg__edge { fill: none; stroke: rgba(170,180,200,0.35); stroke-width: 1; transition: opacity .15s; }
.brv-kg__edge--contains { stroke: rgba(230,235,245,0.5); }
.brv-kg__edge--calls { stroke: rgba(239,71,111,0.6); }
.brv-kg__edge--reads, .brv-kg__edge--writes { stroke: rgba(255,183,3,0.55); }
.brv-kg__edge--navigates { stroke: rgba(6,214,160,0.6); }
.brv-kg__edge--dim { opacity: 0.12; }
.brv-shots { margin: 8px 0 6px; }
.brv-shots__title { font-size: 11px; color: #aab; margin-bottom: 4px; }
.brv-shots__strip { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
.brv-shots__item { margin: 0; flex: 0 0 auto; width: 150px; cursor: zoom-in; }
.brv-shots__item img, .brv-shots__ph { width: 150px; height: 88px; object-fit: cover; object-position: top; border: 1px solid rgba(255,255,255,0.18); border-radius: 4px; background: #111; display: block; }
.brv-shots__ph { color: #666; text-align: center; line-height: 88px; }
.brv-shots__item figcaption { font-size: 10px; color: #99a; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.brv-shots__big { position: fixed; inset: 0; z-index: 100000; background: rgba(0,0,0,0.85); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: zoom-out; gap: 8px; }
.brv-shots__big img { max-width: 94vw; max-height: 86vh; border: 1px solid rgba(255,255,255,0.25); border-radius: 4px; }
.brv-shots__bigcap { color: #ddd; font-size: 12px; }
.brv-ai__pr { font-weight: 600; }
.brv-ai__branch { color: #8898aa; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 11px; }
.brv-ai__summary { font-size: 12px; line-height: 1.55; padding: 8px 10px; background: rgba(255,255,255,0.05); border-radius: 6px; margin-bottom: 8px; }
.brv-ai__count { font-weight: 400; color: #778; margin-left: 4px; font-size: 11px; }
.brv-chat__compose { display: flex; gap: 8px; align-items: stretch; margin-top: 8px; }
.brv-chat__compose .brv-chat__input { flex: 1; margin: 0; }
.brv-chat__btns { display: flex; flex-direction: column; gap: 6px; justify-content: center; }
.brv-chat__btns .brv-fix-btn { white-space: nowrap; }
.brv-chat__input { font-family: inherit; }
.brv-chat__text { color: #d0d6de; }
.brv-chat__msg--user .brv-chat__text { color: #e6ebf2; }
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
.brv-badge--tool { background: rgba(170,170,190,0.25); color: #ccd; }
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
.brv-fix--ready     { background: #ccfbf1; color: #115e59; }
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
.brv-suggest { margin-top: 10px; border-top: 1px dashed #c9d0d8; padding-top: 8px; }
.brv-suggest__title { font-size: 12px; font-weight: 600; color: #334; margin-bottom: 4px; }
.brv-suggest__hint { margin-left: 6px; font-size: 11px; font-weight: 400; color: #778; }
.brv-suggest__item { display: flex; align-items: flex-start; gap: 8px; padding: 5px 0; font-size: 12px; line-height: 1.5; }
.brv-suggest__item + .brv-suggest__item { border-top: 1px solid #eef1f4; }
.brv-suggest__text { flex: 1; color: #d0d6de; }
.brv-suggest__run { flex-shrink: 0; padding: 3px 10px; font-size: 11px; }
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
