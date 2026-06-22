#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# BLOCKER CHECK HOOK — fires after every task update
# Determines which tasks just became unblocked and notifies.
# Usage: bash check-blockers.sh <completed-task-id> <new-status>
# ═══════════════════════════════════════════════════════════════

COMPLETED_TASK="$1"
NEW_STATUS="$2"
BASE="/Users/openclaw/Downloads/MYCHEF . MASTER/control-tower"
LOG="$BASE/logs/blockers.log"

log() { echo "[$(date '+%Y-%m-%dT%H:%M:%S%z')] $1" | tee -a "$LOG"; }

if [ "$NEW_STATUS" != "DONE" ]; then
  exit 0
fi

log "🔓 Task $COMPLETED_TASK marked DONE — checking what unblocks…"

# Dependency map: task → what it unblocks
declare -A UNBLOCKS
UNBLOCKS["t01-ga4-id"]="t03-netlify-ga"
UNBLOCKS["t02-gtm-id"]="t04-netlify-gtm"
UNBLOCKS["t03-netlify-ga"]="t05-netlify-deploy"
UNBLOCKS["t04-netlify-gtm"]="t05-netlify-deploy"
UNBLOCKS["t05-netlify-deploy"]="t06-dns-cname"
UNBLOCKS["t06-dns-cname"]="t07-verify-live"
UNBLOCKS["t07-verify-live"]="t08-verify-ga4 t09-verify-gtm t10-whatsapp-bot"
UNBLOCKS["t11-call-alessand"]="t12-menus t13-photographer"
UNBLOCKS["t13-photographer"]="t14-photo-shoot"
UNBLOCKS["t14-photo-shoot"]="t15-photos-site"
UNBLOCKS["t16-paco-session"]="t17-paco-draft"
UNBLOCKS["t17-paco-draft"]="t18-paco-copy"
UNBLOCKS["t18-paco-copy"]="t19-paco-integrate"
UNBLOCKS["t20-antonio-dinner"]="t21-antonio-eval"
UNBLOCKS["t21-antonio-eval"]="t22-antonio-decision"
UNBLOCKS["t22-antonio-decision"]="t23-antonio-deal"
UNBLOCKS["t23-antonio-deal"]="t24-antonio-page"
UNBLOCKS["t25-partners-copy"]="t26-partners-ui"
UNBLOCKS["t26-partners-ui"]="t27-partners-nav"
UNBLOCKS["t27-partners-nav"]="t28-partner-form"

if [ -n "${UNBLOCKS[$COMPLETED_TASK]}" ]; then
  for next_task in ${UNBLOCKS[$COMPLETED_TASK]}; do
    log "  ▶️  UNBLOCKED: $next_task — ready to start"
    echo "UNBLOCKED|$next_task|$(date '+%Y-%m-%dT%H:%M:%S%z')" >> "$BASE/state/unblocked-queue.txt"
    
    # Auto-create GitHub issue comment if gh available
    if command -v gh &>/dev/null; then
      gh issue comment \
        --repo ddandanell/master3mychef \
        --body "🔓 **$next_task is now UNBLOCKED** — $COMPLETED_TASK was marked DONE at $(date '+%Y-%m-%dT%H:%M')" \
        1 2>/dev/null || true
    fi
  done
else
  log "  ℹ️  No downstream tasks depend on $COMPLETED_TASK"
fi
