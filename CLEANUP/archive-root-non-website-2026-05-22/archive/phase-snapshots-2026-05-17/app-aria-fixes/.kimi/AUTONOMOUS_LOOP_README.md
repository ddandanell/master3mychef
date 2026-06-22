# myCHEF Autonomous Loop System

## Overview

An autonomous continuous improvement loop for the myCHEF website that runs while owner-side blockers (photography, GA4, chat widget) are being resolved. Uses **Sequential Pipeline + De-Sloppify + Quality Gates** pattern.

## Architecture

```
┌────────────────────────────────────────────────────────┐
│  CONTINUOUS IMPROVEMENT LOOP                          │
│                                                        │
│  For each task in queue (8 improvement areas):        │
│                                                        │
│  1. Read agent-state.json + plan.md (context)         │
│  2. Implement improvement (Copilot -p)                │
│  3. De-sloppify cleanup pass (Copilot -p)             │
│  4. Quality gates (TS + audit + build)                │
│     └─ Fail? → Auto-fix pass → Retry gates            │
│  5. Commit changes (conventional commit)               │
│  6. Log to execution-tracker.md                        │
│  7. Merge to main → Next iteration                     │
│                                                        │
│  Limits: --max-iterations 10 | --max-duration 2h      │
└────────────────────────────────────────────────────────┘
```

## Task Queue (8 Improvement Areas)

The loop cycles through these improvement tasks:

1. **SEO Optimization** — Meta descriptions under 155 chars, value props clear
2. **Mobile UX** — Touch targets, spacing, mobile conversion paths
3. **Content Gaps** — FAQ coverage based on persona feedback
4. **Internal Linking** — Service ↔ location page link strengthening
5. **Schema Audit** — JSON-LD completeness on all catering/events pages
6. **Image Optimization** — PNG → WebP conversion, file size audit
7. **Accessibility Sweep** — WCAG 2.1 AA compliance check
8. **Conversion Copy** — CTA optimization on top 10 conversion pages

Each iteration picks the next task in the queue and cycles back to the start.

## Usage

### Basic Run (10 iterations, 2 hours max)

```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
bash .kimi/autonomous-loop.sh
```

### Custom Limits

```bash
# 20 iterations
MAX_ITERATIONS=20 bash .kimi/autonomous-loop.sh

# 4 hours max
MAX_DURATION=14400 bash .kimi/autonomous-loop.sh

# Combined
MAX_ITERATIONS=50 MAX_DURATION=28800 bash .kimi/autonomous-loop.sh
```

### Background Mode (runs while you work)

```bash
nohup bash .kimi/autonomous-loop.sh > .kimi/loop.log 2>&1 &

# Check progress
tail -f .kimi/loop.log

# Check status
ps aux | grep autonomous-loop
```

## Integration with Agent Harness

The loop is **harness-aware**:

1. **Reads `agent-state.json` first** — Gets current build status, blockers, metrics
2. **Reads `plan.md` for strategy** — Follows tone system, brand rules, workstream ownership
3. **Updates both on completion** — Logs to tracker, updates state metrics
4. **Respects quality gates** — Same TS + audit + build checks as manual work

## Quality Gates (Always Run)

Every iteration must pass:

```bash
# 1. TypeScript validation
npx tsc -b --noEmit

# 2. Security audit
npm audit --audit-level=moderate

# 3. Production build
npm run build
```

**Failure handling:** Auto-fix pass with Copilot, then retry gates. If still failing, skip iteration.

## De-Sloppify Pattern

Each implementation step is followed by a focused cleanup pass:

**Implement** (be thorough):
- Add features, fix issues, optimize content
- Don't worry about over-engineering

**De-Sloppify** (separate context):
- Remove defensive type checks TypeScript already enforces
- Remove console.logs, commented code
- Simplify overly complex logic
- Ensure tone rules are followed
- Keep all business logic and real error handling

This two-pass approach prevents quality degradation from negative instructions.

## Commit Strategy

Each iteration creates a feature branch:
```
auto-improve/seo-optimization-iter-1
auto-improve/mobile-ux-iter-2
auto-improve/content-gaps-iter-3
```

After quality gates pass:
1. Generate conventional commit (`feat:`, `fix:`, `refactor:`)
2. Merge to main with `--no-ff` (preserves iteration history)
3. Delete feature branch

## Logging

All iterations append to `execution-tracker.md`:

```markdown
## AUTONOMOUS LOOP — seo-optimization (2026-05-16 22:30)

| Item | Status | Notes |
|-----|--------|-------|
| Task | ✅ DONE | Audit all page meta descriptions... |
| Implementation | ✅ DONE | Iteration 1 |
| De-sloppify | ✅ DONE | Cleanup pass completed |
| Quality gates | ✅ PASSED | TypeScript + audit + build |
| Branch | ✅ MERGED | auto-improve/seo-optimization-iter-1 |
```

Plus updates `agent-state.json` metrics.

## Monitoring

### While Loop is Running

```bash
# Watch log file
tail -f .kimi/loop.log

# Check git history
git log --oneline -10

# Check build status
cat .kimi/agent-state.json | grep build_status

# Check current iteration
ps aux | grep autonomous-loop
```

### After Loop Completes

```bash
# Review all autonomous commits
git log --oneline --grep="Auto-merge" -20

# Run final verification
npm run build

# Push to GitHub
git push origin main
```

## Stop Conditions

The loop stops when ANY of these is true:

1. **Max iterations reached** (default: 10)
2. **Max duration exceeded** (default: 2 hours)
3. **Quality gate failure after auto-fix** (skips iteration, continues to next)
4. **Manual interrupt** (Ctrl+C)

## Safety Features

### 1. Isolated Branches
Each iteration works in its own branch. Failed iterations are deleted without affecting main.

### 2. Quality Gates Every Iteration
No merge without TypeScript + audit + build passing.

### 3. Time Limits
Default 2-hour max prevents runaway loops.

### 4. State Persistence
All progress logged to tracker. Resume from any point.

### 5. Auto-Fix Attempts
Quality gate failures trigger one auto-fix attempt before skipping.

## Extending the Task Queue

Add new tasks to `TASK_QUEUE` array in `autonomous-loop.sh`:

```bash
TASK_QUEUE=(
    # ... existing tasks ...
    "new-task:Your task description here"
)
```

**Task format:** `task-id:Full description for Copilot prompt`

## Combining with Other Patterns

### With Continuous Copilot PR Loop

For production deployment, wrap the autonomous loop in a PR workflow:

```bash
# Create PR per iteration instead of direct merge
# Requires continuous-copilot installed
continuous-copilot \
  --prompt "Run the autonomous improvement loop" \
  --max-runs 10 \
  --merge-strategy squash
```

### With Manual Review Gates

Add human approval before merge:

```bash
# Pause before merge
read -p "Review changes and press enter to merge (or Ctrl+C to skip)..."
git merge --no-ff "$branch_name"
```

### With Parallel Execution

Run multiple loops on different workstreams:

```bash
# Terminal 1: Content improvements
TASK_QUEUE=(content-gaps conversion-copy) bash .kimi/autonomous-loop.sh

# Terminal 2: Technical improvements  
TASK_QUEUE=(seo-optimization schema-audit) bash .kimi/autonomous-loop.sh
```

## When NOT to Use Autonomous Loop

❌ **Owner-side blockers require action** — Photography, GA4 setup, chat widget activation  
❌ **Major architectural changes** — Use manual review and planning  
❌ **Breaking changes** — Require human approval  
❌ **Production incident response** — Manual intervention needed  

✅ **Continuous improvement** — SEO, UX polish, content gaps  
✅ **Maintenance tasks** — Image optimization, accessibility fixes  
✅ **Quality improvements** — Copy refinement, internal linking  

## Troubleshooting

### Loop Hangs

Check if Copilot is waiting for input:
```bash
ps aux | grep "gh copilot"
# Kill if hung
kill <PID>
```

### Quality Gates Keep Failing

Run manual diagnostics:
```bash
cd app/
npx tsc -b --noEmit     # Check TypeScript errors
npm audit               # Check security issues
npm run build           # Check build output
```

### Git Conflicts

Loop creates isolated branches, but if main changes during execution:
```bash
# Rebase current branch
git rebase main

# Or restart loop from clean state
git checkout main
git reset --hard origin/main
```

### Out of Disk Space

Check build output size:
```bash
du -sh dist/
# If too large, clean and rebuild
rm -rf dist/ node_modules/.vite/
npm run build
```

## Performance Metrics

Expected iteration times:

| Task Type | Implementation | De-Sloppify | Quality Gates | Total |
|-----------|---------------|-------------|---------------|-------|
| Content | 2-3 min | 1 min | 30s | ~4 min |
| SEO | 3-5 min | 1 min | 30s | ~6 min |
| UX | 4-6 min | 2 min | 30s | ~8 min |
| Technical | 5-8 min | 2 min | 45s | ~10 min |

**Full 10-iteration run:** 40-80 minutes typical

## Cost Estimates

Using GitHub Copilot CLI (free tier):
- No direct API costs
- Limited by rate limits (typically 50-100 requests/hour)

If using Claude API directly:
- ~$0.02-0.10 per iteration (Sonnet)
- ~$0.10-0.30 per iteration (Opus)
- Full 10-iteration run: $0.20-$3.00

## Related Skills

- **agent-harness-construction** — State management and recovery patterns
- **continuous-agent-loop** — Alternative loop architectures
- **verification-loop** — Quality gate patterns
- **tdd-workflow** — Test-driven development integration

---

**Last Updated:** 2026-05-16  
**Pattern:** Sequential Pipeline + De-Sloppify + Quality Gates  
**Status:** Production-ready, tested on myCHEF project
