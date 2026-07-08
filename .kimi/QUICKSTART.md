# myCHEF Agent System — Quick Start Guide

## 🎯 What You Have Now

A **production-ready autonomous agent system** with:
- ✅ Structured state management (agent-state.json)
- ✅ Continuous improvement loop (autonomous-loop.sh)
- ✅ Quality gates (TypeScript + audit + build)
- ✅ Master planning blueprint (../mychef/plan.md)
- ✅ Complete execution history (execution-tracker.md)

## 🚀 Start Here (Every Session)

### 1. Check Current State (5 seconds)
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
cat .kimi/agent-state.json | grep -A 5 "build_status"
```

Should show:
```json
"build_status": "✅ PASSING"
```

### 2. Check Blockers
```bash
cat .kimi/agent-state.json | grep -A 10 "blockers"
```

All blockers are **owner-side** (photography, GA4, chat, CRM).

### 3. Check What Needs Doing
```bash
cat .kimi/agent-state.json | grep -A 10 "active_tasks"
```

## 🤖 Run Autonomous Loop

### Basic (10 iterations, ~1 hour)
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
bash .kimi/autonomous-loop.sh
```

### Watch Progress
```bash
# In another terminal
tail -f .kimi/loop.log
```

### Custom Limits
```bash
# 20 iterations
MAX_ITERATIONS=20 bash .kimi/autonomous-loop.sh

# 4 hours
MAX_DURATION=14400 bash .kimi/autonomous-loop.sh

# Background mode
nohup bash .kimi/autonomous-loop.sh > .kimi/loop.log 2>&1 &
```

## 📋 What the Loop Does

Cycles through 8 improvement tasks:
1. **SEO** — Meta descriptions optimization
2. **Mobile UX** — Touch targets and spacing
3. **Content** — FAQ gaps from persona feedback
4. **Linking** — Internal service ↔ location links
5. **Schema** — JSON-LD completeness
6. **Images** — PNG → WebP conversion
7. **A11y** — WCAG 2.1 AA compliance
8. **Conversion** — CTA copy optimization

Each iteration:
- Reads agent-state.json for context
- Implements improvement
- Cleanup pass (de-sloppify)
- Quality gates (TS + audit + build)
- Auto-fix if needed
- Commits + logs
- Merges to main

## 🔍 Monitor Progress

### During Loop
```bash
# Watch commits
watch -n 5 'git log --oneline -5'

# Check state
watch -n 10 'cat .kimi/agent-state.json | grep build_status'

# View changes
git diff HEAD~5..HEAD --stat
```

### After Loop
```bash
# Review autonomous commits
git log --oneline --grep="Auto-merge" -20

# Final verification
npm run build

# Push changes
git push origin main
```

## 📚 File Reference

| File | Purpose | When to Use |
|------|---------|-------------|
| `agent-state.json` | Current state, blockers, metrics | **Every session start** |
| `execution-tracker.md` | Full history (558 lines) | When need implementation details |
| `../mychef/plan.md` | Master blueprint, strategy | Before major new work |
| `AGENT_HARNESS_README.md` | Agent operating manual | When learning system |
| `AUTONOMOUS_LOOP_README.md` | Loop documentation | Before running loop |
| `autonomous-loop.sh` | Executable loop script | To run continuous improvement |

## 🎓 Agent Workflow Pattern

```
Every session:
1. Read agent-state.json (< 1s)
   └─> Check: build_status, blockers, active_tasks
   
2. If blocked by owner → inform user
   If unblocked → execute or run loop
   
3. Before major work:
   └─> Read ../mychef/plan.md for strategy
   └─> Check tone system (Section 4)
   └─> Verify workstream ownership
   
4. After completing work:
   └─> Update agent-state.json
   └─> Append to execution-tracker.md
   └─> Run quality gates
```

## ⚡ Quality Gates (Always)

Before marking any task complete:

```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"

# 1. TypeScript
npx tsc -b --noEmit

# 2. Security
npm audit

# 3. Build
npm run build
```

All three must pass with 0 errors.

## 🎯 Current Project Status

From agent-state.json:

| Metric | Value |
|--------|-------|
| **Status** | ✅ Production-ready |
| **Pages** | 150+ |
| **Routes** | 92 canonical URLs |
| **Redirects** | 126 |
| **Blog Posts** | 12 |
| **Build Time** | 4.17s |
| **TypeScript** | 0 errors |
| **Vulnerabilities** | 0 |

**Blockers:** All owner-side (photography, GA4, chat, CRM)

## 🔧 Troubleshooting

### Loop Hangs
```bash
ps aux | grep autonomous-loop
kill <PID>
```

### Quality Gates Fail
```bash
# Manual diagnostics
npx tsc -b --noEmit
npm audit
npm run build
```

### Git Issues
```bash
# Reset to clean state
git checkout main
git reset --hard origin/main
```

## 📞 Getting Help

1. **Read AGENT_HARNESS_README.md** — Agent operating patterns
2. **Read AUTONOMOUS_LOOP_README.md** — Loop details and examples
3. **Check execution-tracker.md** — See what's been done
4. **Review plan.md** — Strategic context

## ⚠️ Important Rules

✅ **DO:**
- Read agent-state.json first every session
- Follow tone system from plan.md Section 4
- Run quality gates before marking tasks complete
- Update agent-state.json after major work
- Log to execution-tracker.md

❌ **DON'T:**
- Skip quality gates
- Create new markdown planning files in repo
- Work on owner-blocked items (B1-B4)
- Merge without TypeScript + audit + build passing

---

**System Version:** 2.0.0-harness  
**Last Updated:** 2026-05-16  
**Status:** Production-ready, tested, documented
