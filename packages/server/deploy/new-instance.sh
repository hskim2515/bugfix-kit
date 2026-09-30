#!/usr/bin/env bash
# 앱 하나에 devloop 인스턴스 하나를 만든다.
#   deploy/new-instance.sh <이름> <포트> [--data <디렉터리>]
# 만드는 것: ~/.config/devloop/<이름>/devloop.yml (프로젝트는 콘솔에서 채운다), 데이터·작업 디렉터리, systemd 유닛 devloop-server@<이름>
# 그 다음: 앱 nginx 에 `location ^~ /devloop/ { proxy_pass http://127.0.0.1:<포트>/api/; client_max_body_size 60m; }`,
#          콘솔 https://앱주소/devloop/ui/ 에서 프로젝트 저장(저장소·브랜치·검증 명령)과 키 입력.
set -e
NAME=$1; PORT=$2
[ -z "$NAME" ] || [ -z "$PORT" ] && { echo "사용법: $0 <이름> <포트> [--data <디렉터리>]"; exit 1; }
[[ "$NAME" =~ ^[a-z0-9][a-z0-9_-]*$ ]] || { echo "이름은 영문 소문자·숫자·-_ 만"; exit 1; }
DATA="$HOME/devloop-data/$NAME"
[ "$3" = "--data" ] && DATA="$4"
CFG_DIR="$HOME/.config/devloop/$NAME"
CFG="$CFG_DIR/devloop.yml"
KIT="$(cd "$(dirname "$0")/../../.." && pwd)"

mkdir -p "$CFG_DIR" "$DATA/data" "$DATA/work" "$HOME/.config/systemd/user" "$HOME/.config/devloop/projects"
if [ -f "$CFG" ]; then echo "이미 있습니다: $CFG"; else
cat > "$CFG" <<YML
# devloop 인스턴스 '$NAME' - 앱 하나에 인스턴스 하나. 프로젝트 설정은 콘솔(/devloop/ui/ → 프로젝트 탭)에서 채운다.
server:
  port: $PORT
  dataDir: $DATA/data
  workDir: $DATA/work
  maxTurns: 40
  timeoutMinutes: 45
projects: {}
YML
chmod 600 "$CFG"; echo "만듦: $CFG"
fi
cp "$KIT/packages/server/deploy/devloop-server@.service" "$HOME/.config/systemd/user/devloop-server@.service"
systemctl --user daemon-reload
systemctl --user enable --now "devloop-server@$NAME"
sleep 2
systemctl --user is-active "devloop-server@$NAME" && curl -s "localhost:$PORT/api/health" && echo
echo
echo "다음: 앱 nginx 에  location ^~ /devloop/ { proxy_pass http://127.0.0.1:$PORT/api/; client_max_body_size 60m; }"
echo "      콘솔 https://<앱주소>/devloop/ui/ (운영자 키는 ~/.config/devloop/default.env 의 ADMIN_KEY)"
