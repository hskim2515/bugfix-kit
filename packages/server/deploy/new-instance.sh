#!/usr/bin/env bash
# 앱 하나에 bugfix-kit 인스턴스 하나를 만든다.
#   deploy/new-instance.sh <이름> <포트> [--data <디렉터리>]
# 만드는 것: ~/.config/bugfix-kit/<이름>/bugfix-kit.yml (프로젝트는 콘솔에서 채운다), 데이터·작업 디렉터리, systemd 유닛 bugfix-server@<이름>
# 그 다음: 앱 nginx 에 `location ^~ /bugfix/ { proxy_pass http://127.0.0.1:<포트>/api/; client_max_body_size 60m; }`,
#          콘솔 https://앱주소/bugfix/ui/ 에서 프로젝트 저장(저장소·브랜치·검증 명령)과 키 입력.
set -e
NAME=$1; PORT=$2
[ -z "$NAME" ] || [ -z "$PORT" ] && { echo "사용법: $0 <이름> <포트> [--data <디렉터리>]"; exit 1; }
[[ "$NAME" =~ ^[a-z0-9][a-z0-9_-]*$ ]] || { echo "이름은 영문 소문자·숫자·-_ 만"; exit 1; }
DATA="$HOME/bugfix-data/$NAME"
[ "$3" = "--data" ] && DATA="$4"
CFG_DIR="$HOME/.config/bugfix-kit/$NAME"
CFG="$CFG_DIR/bugfix-kit.yml"
KIT="$(cd "$(dirname "$0")/../../.." && pwd)"

mkdir -p "$CFG_DIR" "$DATA/data" "$DATA/work" "$HOME/.config/systemd/user" "$HOME/.config/bugfix-kit/projects"
if [ -f "$CFG" ]; then echo "이미 있습니다: $CFG"; else
cat > "$CFG" <<YML
# bugfix-kit 인스턴스 '$NAME' - 앱 하나에 인스턴스 하나. 프로젝트 설정은 콘솔(/bugfix/ui/ → 프로젝트 탭)에서 채운다.
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
cp "$KIT/packages/server/deploy/bugfix-server@.service" "$HOME/.config/systemd/user/bugfix-server@.service"
systemctl --user daemon-reload
systemctl --user enable --now "bugfix-server@$NAME"
sleep 2
systemctl --user is-active "bugfix-server@$NAME" && curl -s "localhost:$PORT/api/health" && echo
echo
echo "다음: 앱 nginx 에  location ^~ /bugfix/ { proxy_pass http://127.0.0.1:$PORT/api/; client_max_body_size 60m; }"
echo "      콘솔 https://<앱주소>/bugfix/ui/ (운영자 키는 ~/.config/bugfix-kit/default.env 의 ADMIN_KEY)"
