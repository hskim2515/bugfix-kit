#!/usr/bin/env bash
# 서버 갱신: 큐가 빌 때까지 기다렸다가 pull → npm install → 재시작. (돌던 작업을 끊지 않기 위해)
#   ~/bugfix-kit/packages/server/deploy/update.sh [--now]   --now 면 기다리지 않는다 (끊긴 작업은 재시작 뒤 자동으로 다시 큐에 들어간다)
set -e
cd "$(dirname "$0")/../../.."
PORT=$(grep -E '^\s*port:' packages/server/bugfix-kit.yml 2>/dev/null | awk '{print $2}'); PORT=${PORT:-8790}
if [ "$1" != "--now" ]; then
  for i in $(seq 1 120); do
    Q=$(curl -s "localhost:$PORT/api/health" | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d.get("queue",0) + (1 if d.get("busy") else 0))' 2>/dev/null || echo 0)
    [ "$Q" = "0" ] && break
    [ "$i" = "1" ] && echo "진행 중인 작업이 끝나기를 기다립니다… (--now 로 건너뛸 수 있음)"
    sleep 30
  done
fi
git checkout -q -- package-lock.json 2>/dev/null || true
git pull -q && npm install --no-audit --no-fund 2>&1 | tail -1
git checkout -q -- package-lock.json 2>/dev/null || true
systemctl --user restart bugfix-server && sleep 2 && systemctl --user is-active bugfix-server && git log --oneline -1
