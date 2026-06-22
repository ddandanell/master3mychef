#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# MYCHEF AGENT: CONTENT (David/SEO tasks)
# Handles content generation tasks using cheaper model.
# ═══════════════════════════════════════════════════════════════

TASK="$1"
STATUS="$2"
NOTES="$3"
BASE="/Users/openclaw/Downloads/MYCHEF . MASTER"
LOG="$BASE/control-tower/logs/agent-content.log"

log() { echo "[$(date '+%Y-%m-%dT%H:%M:%S%z')] [CONTENT] $1" | tee -a "$LOG"; }

log "Agent triggered: task=$TASK status=$STATUS"

case "$TASK" in
  "t25-partners-copy")
    log "▶️ ACTION: Generating /partners page copy (commission structure)"
    claude --model claude-haiku-4.5 --print \
      "Write clear, outcome-first copy for myCHEF's /partners page surfacing the commission structure: Co-branded partners earn 12% on referred bookings. White-label partners earn 7%. No adjectives like luxury/bespoke. Lead with what the villa manager gets. Output markdown sections ready to paste into the page." \
      >> "$LOG" 2>&1
    ;;
  "t29-social-cal")
    log "▶️ ACTION: Drafting 8-week social calendar"
    claude --model claude-haiku-4.5 --print \
      "Draft an 8-week content calendar for myCHEF.id Instagram+TikTok. 3x weekly posts (Mon/Wed/Fri) + daily Stories. Topics: private dining outcomes, Bali villa experiences, chef behind-scenes, guest transformations. No vague adjectives. Output as a table." \
      >> "$LOG" 2>&1
    ;;
  *)
    log "ℹ️ No auto-action for $TASK"
    ;;
esac
