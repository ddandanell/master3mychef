#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# MYCHEF CONTROL TOWER — AUTONOMOUS WATCHER DAEMON
# Runs continuously. Watches inbox/ for update files.
# Logs every action. Triggers Claude hooks on events.
# Usage: bash control-tower/watcher.sh
# ═══════════════════════════════════════════════════════════════

BASE="/Users/openclaw/Downloads/MYCHEF . MASTER/control-tower"
INBOX="$BASE/inbox"
LOG="$BASE/logs/watcher.log"
STATE="$BASE/state/tasks.json"
HOOKS="$BASE/hooks"

log() {
  echo "[$(date '+%Y-%m-%dT%H:%M:%S%z')] $1" | tee -a "$LOG"
}

log "🚀 MYCHEF Control Tower STARTED (PID $$)"
log "Watching: $INBOX"
log "────────────────────────────────────────"

process_update() {
  local file="$1"
  local filename=$(basename "$file")
  log "📥 INBOX: Processing $filename"

  # Parse task ID and status from filename: UPDATE_<task-id>_<STATUS>.txt
  # Example: UPDATE_t01-ga4-id_DONE.txt
  if [[ "$filename" =~ ^UPDATE_(.+)_([A-Z_]+)\.txt$ ]]; then
    local task_id="${BASH_REMATCH[1]}"
    local new_status="${BASH_REMATCH[2]}"
    local notes=$(cat "$file" 2>/dev/null)

    log "  Task:   $task_id"
    log "  Status: $new_status"
    log "  Notes:  ${notes:0:120}"

    # Append to execution log
    cat >> "$BASE/logs/execution.log" <<EOF

═══════════════════════════════════
TASK UPDATE: $task_id
Timestamp: $(date '+%Y-%m-%dT%H:%M:%S%z')
Status: $new_status
Notes: $notes
═══════════════════════════════════
EOF

    # Fire domain hook if it exists
    local hook="$HOOKS/${task_id}.sh"
    if [ -f "$hook" ]; then
      log "  ⚡ Firing hook: $hook"
      bash "$hook" "$new_status" "$notes" >> "$LOG" 2>&1
    fi

    # Fire tier-completion check
    bash "$HOOKS/check-blockers.sh" "$task_id" "$new_status" >> "$LOG" 2>&1

    # Archive processed file
    mv "$file" "$BASE/inbox/processed_$(date +%s)_$filename"
    log "  ✅ Processed and archived"
  else
    log "  ⚠️  Unrecognised filename format. Expected: UPDATE_<task-id>_<STATUS>.txt"
    mv "$file" "$BASE/inbox/unrecognised_$(date +%s)_$filename"
  fi
}

# Main watch loop
while true; do
  for update_file in "$INBOX"/UPDATE_*.txt; do
    [ -f "$update_file" ] || continue
    process_update "$update_file"
  done

  # Every 60s: print heartbeat
  if (( $(date +%S) < 5 )); then
    log "💓 Heartbeat — $(date '+%H:%M') — Watching for updates…"
  fi

  sleep 5
done
