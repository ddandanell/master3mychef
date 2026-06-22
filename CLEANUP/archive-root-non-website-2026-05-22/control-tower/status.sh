#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# MYCHEF CONTROL TOWER — STATUS BOARD GENERATOR
# Run any time to print current project status.
# Usage: bash control-tower/status.sh
# ═══════════════════════════════════════════════════════════════

BASE="/Users/openclaw/Downloads/MYCHEF . MASTER/control-tower"
UNBLOCKED_Q="$BASE/state/unblocked-queue.txt"

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║          MYCHEF CONTROL TOWER — LIVE STATUS BOARD           ║"
echo "║          $(date '+%Y-%m-%d %H:%M %Z')                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

echo "── TIER 1: LAUNCH BLOCKERS ─────────────────────────────────────"
echo "  Owner: David  → t01 GA4 ID, t02 GTM ID (both WAITING on David)"
echo "  Owner: Michael→ t03-t10 (all BLOCKED until David delivers IDs)"
echo ""
echo "  ⚠️  OVERDUE: t01 + t02 were due 17 May (TODAY). Escalate to David NOW."
echo ""

echo "── TIER 2: CONTENT & OPS ───────────────────────────────────────"
echo "  David → t11 Alessandro call (OVERDUE 17 May)"
echo "  David → t16 Paco session (due 18 May)"
echo "  David → t20 Antonio test dinner (due 18 May)"
echo ""
echo "  ⚠️  t22 ANTONIO DECISION — due 22 May. Ask for update NOW."
echo ""

echo "── TIER 3: B2B & MARKETING ─────────────────────────────────────"
echo "  David → t25 /partners copy (due 24 May)"
echo "  David → t29 Social calendar (due 23 May)"
echo "  David → t30 Social audit (due 20 May)"
echo ""

echo "── READY TO ACT (things Michael/Claude can do NOW) ─────────────"
echo "  ✅ Surface commission structure on /partners page (code change)"
echo "  ✅ Add comparison table (12% co-branded / 7% white-label)"
echo "  ✅ Commit + push Footer.tsx + RecommendedServicesPage.tsx diffs"
echo "  ✅ Open GitHub PR for review"
echo ""

if [ -f "$UNBLOCKED_Q" ]; then
  echo "── RECENTLY UNBLOCKED ──────────────────────────────────────────"
  tail -10 "$UNBLOCKED_Q"
  echo ""
fi

echo "── HOW TO REPORT AN UPDATE ─────────────────────────────────────"
echo '  Drop a file in control-tower/inbox/ named:'
echo '  UPDATE_<task-id>_<STATUS>.txt'
echo '  Status options: DONE | IN_PROGRESS | BLOCKED | WAITING'
echo '  File contents = notes/details'
echo ""
echo "  Example:"
echo '  echo "G-ABC123XYZ" > control-tower/inbox/UPDATE_t01-ga4-id_DONE.txt'
echo ""
echo "  The watcher picks it up within 5 seconds automatically."
echo ""
