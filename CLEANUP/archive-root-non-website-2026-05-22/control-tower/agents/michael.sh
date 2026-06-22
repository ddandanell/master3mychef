#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# MYCHEF AGENT: MICHAEL (Tech Execution)
# Handles all technical tasks. Auto-runs when unblocked.
# ═══════════════════════════════════════════════════════════════

TASK="$1"
STATUS="$2"
NOTES="$3"
BASE="/Users/openclaw/Downloads/MYCHEF . MASTER"
APP="$BASE/app"
LOG="$BASE/control-tower/logs/agent-michael.log"

log() { echo "[$(date '+%Y-%m-%dT%H:%M:%S%z')] [MICHAEL] $1" | tee -a "$LOG"; }

log "Agent triggered: task=$TASK status=$STATUS"

case "$TASK" in

  "t05-netlify-deploy")
    log "▶️ ACTION: Triggering Netlify deploy"
    cd "$APP"
    git add -A && git commit -m "chore: pre-deploy final state [control-tower]

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>" && git push
    log "✅ Pushed. Manual Netlify deploy step required in dashboard."
    ;;

  "t10-whatsapp-bot")
    log "▶️ ACTION: Starting WhatsApp bot"
    cd "$BASE"
    if [ -d "knightbot-fresh" ]; then
      node knightbot-fresh/main.js &
      log "✅ WhatsApp bot started (PID $!)"
    else
      log "❌ knightbot-fresh/ not found in $BASE"
    fi
    ;;

  "t15-photos-site"|"t19-paco-integrate"|"t24-antonio-page"|"t28-partner-form")
    log "▶️ ACTION: Launching Claude CLI for code task: $TASK"
    cd "$APP"
    claude --model claude-haiku-4.5 --print \
      "Task: $TASK. Context: $NOTES. Work in $APP. Make the minimal correct code change, commit, and push." \
      >> "$LOG" 2>&1
    ;;

  *)
    log "ℹ️ No auto-action defined for $TASK. Manual step required."
    ;;
esac
