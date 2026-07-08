# Skill 02 — Git History Audit

**Purpose:** Understand what actually changed (and shipped) over a time window before doing new work — prevents redoing finished work and re-breaking reverted work.

**When to use:** Start of every sprint; whenever asked "what changed recently"; before touching any area you didn't personally last edit.

## Sandbox note
Sandbox git may error on the worktree pointer. Use `GIT_DIR=.git git <cmd>` in the sandbox, or run git via the Mac Terminal (osascript) for writes. The stale `.git/index.lock` must be removed (`rm -f .git/index.lock`) before any commit.

## Checklist
1. `git log --since="N days ago" --oneline --decorate`
2. `git log --since="N days ago" --pretty=format:"%h %ad %s" --date=iso`
3. `GIT_DIR=.git git log --since="N days ago" --name-only --pretty=format: | grep -v '^$' | sort | uniq -c | sort -rn | head -30` → most-churned files (churn hot-spots = risk).
4. Scan for **Revert** commits and their original — these are settled decisions. Do NOT redo them.
5. Scan for paired add→revert (e.g. `4ac063c`→`e6ad238`) — confirm before re-attempting.
6. Confirm commits touch the production tree: `... --name-only ... | grep -c '^app/'` should be 0.

## Verification
- You can name: what was built, changed, reverted, documented, shipped.
- You have flagged every Revert so you don't repeat rejected work.

## Output
A dated bullet list grouped by category (built / changed / reverted / SEO / tracking / content / images / pricing / legal / dead-code / duplicate / needs-verification), each line ending with the commit hash.
