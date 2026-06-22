# Agent Harness System — myCHEF Project

## Purpose
This harness improves agent completion rates by providing structured state, clear recovery paths, and efficient context loading.

## File Structure

### 1. `agent-state.json` — Machine-Readable State
**When to use:** First read in every session for quick state check.

**Contains:**
- Current build/quality status
- Active blockers with recovery paths
- Next actions for pending tasks
- Key metrics and completion summary

**Benefits:**
- Fast parsing (< 1KB vs 42KB tracker)
- Structured observation format
- Explicit recovery instructions
- Clear stop conditions

### 2. `execution-tracker.md` — Detailed History
**When to use:** When you need full context on what was built and how.

**Contains:**
- 558 lines of detailed progress
- Technical implementation notes
- Agent collaboration history
- Build fix documentation

**Benefits:**
- Complete audit trail
- Technical decision rationale
- Pattern recognition for similar tasks

### 3. `../mychef/plan.md` — Strategic Blueprint
**When to use:** Before starting any major new work.

**Contains:**
- Vision, mission, positioning
- Tone & brand operating system
- Workstream ownership
- Priority backlog
- Decision log

**Benefits:**
- Strategic alignment
- Brand consistency
- Clear ownership model
- Standardized workflow

## Agent Workflow (Optimized)

### Start of Every Session:
```
1. Read agent-state.json (fast state check)
   └─> Extract: build_status, blockers, active_tasks, next_actions
   
2. Check blockers array
   └─> If owner-blocked: inform user and offer alternatives
   └─> If agent-blocked: read recovery_path and execute
   
3. If starting new major work:
   └─> Read ../mychef/plan.md for strategic context
   └─> Check workstream ownership
   └─> Add task to plan.md backlog
   
4. If need implementation details:
   └─> Search execution-tracker.md for similar patterns
   └─> Use grep for specific technical decisions
```

### End of Every Task:
```
1. Update agent-state.json
   └─> Move task from active_tasks to completed_summary
   └─> Update quality_gates if relevant
   └─> Add new blockers if discovered
   
2. Append to execution-tracker.md
   └─> Use structured format (see template below)
   
3. Update ../mychef/plan.md if major milestone
   └─> Update backlog status
   └─> Add decision to decision log
```

## Structured Output Template

When logging to execution-tracker.md, use this format for maximum clarity:

```markdown
## [TASK NAME] (YYYY-MM-DD) — [Agent Name]

| Item | Status | Files | Notes |
|-----|--------|------|-------|
| [Action taken] | ✅ DONE | [file paths] | [technical details] |
| TypeScript | ✅ CLEAN | — | 0 errors |
| Build | ✅ CLEAN | — | [time]s · [details] |
| Git push | ✅ DONE | — | Commit [hash] → main |

**Status:** ✅ PASSING
**Next Actions:** [what comes next]
**Recovery Notes:** [if something might fail, how to fix it]
```

## Observation Quality Pattern

Every tool response should include:

```json
{
  "status": "success|warning|error",
  "summary": "One-line result description",
  "next_actions": [
    "Concrete follow-up step 1",
    "Concrete follow-up step 2"
  ],
  "artifacts": [
    "/path/to/file1.tsx",
    "/path/to/file2.tsx"
  ],
  "recovery_hint": "If X fails, do Y because Z"
}
```

## Context Budget Strategy

### Compaction Rules:
1. **Every 50 tasks:** Archive execution-tracker sections to `archive/YYYY-MM.md`
2. **At phase boundaries:** Update agent-state.json summary, collapse tracker details
3. **Before major work:** Clear obsolete notes from last 3 months

### Priority Loading:
1. **High-frequency (< 1s):** agent-state.json (current state)
2. **Medium-frequency (< 5s):** plan.md (strategic context)
3. **Low-frequency (as needed):** execution-tracker.md (historical patterns)

## Error Recovery Contract

### For Every Error Path:

1. **Root cause hint:** "Build failed because X import was missing"
2. **Safe retry instruction:** "Add import, then run `npm run build`"
3. **Explicit stop condition:** "Stop retrying after 3 attempts; escalate to owner"

### Example Recovery Paths:

```json
{
  "error": "TypeScript compilation failed",
  "root_cause": "Missing import or type definition",
  "retry": "1) Check error output for file:line, 2) Add missing import, 3) Run npx tsc -b --noEmit",
  "stop_condition": "After 2 failed fixes, read similar patterns in tracker"
}
```

## Quality Gates (Always Run)

Before marking any task complete:

```bash
# 1. TypeScript check
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
npx tsc -b --noEmit

# 2. Security audit
npm audit

# 3. Production build
npm run build

# 4. Update state
# Edit agent-state.json with results
```

## Agent Collaboration Protocol

### When Multiple Agents Work in Parallel:

1. **Before starting:** Check agent-state.json for locked files/tasks
2. **During work:** Update agent-state.json with "in_progress" status
3. **After completion:** Atomic update to agent-state.json + tracker append
4. **On conflict:** Last write wins; use git merge for resolution

### Handoff Pattern:

```json
{
  "handoff": {
    "from_agent": "Copilot",
    "to_agent": "Kimi",
    "task": "SEO optimization sprint",
    "context": "Completed tone pass, ready for keyword integration",
    "next_actions": [
      "Read plan.md Section 9 for SEO strategy",
      "Check execution-tracker Phase 3 for existing SEO work"
    ]
  }
}
```

## Benefits of This Harness

### Completion Rate Improvements:
- **Fast state loading:** 1KB JSON vs 42KB markdown
- **Clear next actions:** No ambiguity about what to do
- **Explicit recovery:** Every error has a path forward
- **Stop conditions:** Agents know when to escalate vs retry

### Context Budget Savings:
- **3x faster state check:** JSON parse vs markdown search
- **Focused loading:** Only read what's needed
- **Compaction strategy:** History archived, not inline
- **Reference pattern:** Links to details vs inline details

### Error Recovery Improvements:
- **Root cause hints:** Agents understand why something failed
- **Safe retry paths:** Step-by-step recovery instructions
- **Stop conditions:** No infinite retry loops
- **Escalation protocol:** Clear handoff to owner or other agent

---

**Last Updated:** 2026-05-16  
**Version:** 2.0.0-harness  
**Maintained By:** Agent Harness Construction Skill
