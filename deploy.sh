#!/usr/bin/env bash
set -Eeuo pipefail

source /root/deploy-tools/common.sh

BRANCH="${BRANCH:-main}"
APP_DIR="/root/mgarciacorral"
LOCK_FILE="/tmp/deploy-mgarciacorral.lock"
BACKUP_DIR="/tmp/deploy-mgarciacorral-env"
PREVIOUS_COMMIT=""

require_cmd git
require_cmd npm
ensure_lock "$LOCK_FILE"

rollback_deploy() {
  [[ -n "$PREVIOUS_COMMIT" ]] || fail "No rollback commit available"
  log "Rolling back mgarciacorral.com to $PREVIOUS_COMMIT"
  git -C "$APP_DIR" reset --hard "$PREVIOUS_COMMIT"
  npm_install_ci_or_install "$APP_DIR/porfolio"
  npm --prefix "$APP_DIR/porfolio" run build
  reload_nginx_if_present
}

PREVIOUS_COMMIT="$(git -C "$APP_DIR" rev-parse HEAD)"
begin_rollback_guard "$PREVIOUS_COMMIT"
trap run_rollback_if_needed ERR EXIT

log "Deploying mgarciacorral.com from $APP_DIR (branch=$BRANCH)"
safe_git_sync "$APP_DIR" "$BRANCH" "$BACKUP_DIR"

npm_install_ci_or_install "$APP_DIR/porfolio"
npm --prefix "$APP_DIR/porfolio" run build
reload_nginx_if_present
finish_rollback_guard
log "mgarciacorral.com deploy OK"
