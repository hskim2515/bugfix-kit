#!/usr/bin/env bash
# 서버 코드 갱신: pull → npm install → 인스턴스마다(devloop-server@<이름>) 큐가 빌 때까지 기다렸다가 재시작.
#   ~/devloop/packages/server/deploy/update.sh [--now]   --now 면 기다리지 않는다 (끊긴 작업은 재시작 뒤 자동으로 다시 큐에 들어간다)
# 인스턴스는 ~/.config/devloop/*/devloop.yml 로 찾는다. 옛 단일 유닛(devloop-server.service)이 켜져 있으면 그것도 같이.
set -e
cd "$(dirname "$0")/../../.."
git checkout -q -- package-lock.json 2>/dev/null || true
git pull -q && npm install --no-audit --no-fund 2>&1 | tail -1
git checkout -q -- package-lock.json 2>/dev/null || true
git log --oneline -1

wait_idle() {  # $1 = 포트
  [ "$NOW" = "1" ] && return 0
  for i in $(seq 1 120); do
    Q=$(curl -s "localhost:$1/api/health" | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d.get("queue",0) + (1 if d.get("busy") else 0))' 2>/dev/null || echo 0)
    [ "$Q" = "0" ] && return 0
    [ "$i" = "1" ] && echo "  :$1 진행 중인 작업이 끝나기를 기다립니다… (--now 로 건너뛸 수 있음)"
    sleep 30
  done
}
[ "$1" = "--now" ] && NOW=1

# 옛 단일 유닛
if systemctl --user is-active --quiet devloop-server 2>/dev/null; then
  PORT=$(grep -E '^\s*port:' packages/server/devloop.yml 2>/dev/null | awk '{print $2}'); PORT=${PORT:-8790}
  wait_idle "$PORT"; systemctl --user restart devloop-server && echo "devloop-server 재시작 ($(systemctl --user is-active devloop-server))"
fi
# 인스턴스들
for cfg in "$HOME"/.config/devloop/*/devloop.yml; do
  [ -f "$cfg" ] || continue
  name=$(basename "$(dirname "$cfg")")
  systemctl --user is-enabled --quiet "devloop-server@$name" 2>/dev/null || continue
  PORT=$(grep -E '^\s*port:' "$cfg" | awk '{print $2}'); PORT=${PORT:-8790}
  wait_idle "$PORT"
  systemctl --user restart "devloop-server@$name" && sleep 2 && echo "devloop-server@$name 재시작 ($(systemctl --user is-active "devloop-server@$name"), :$PORT)"
done
