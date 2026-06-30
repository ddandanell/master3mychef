# Skill 14 — Sprint Reporting

**Purpose:** Every sprint ends with an honest, verifiable record so the next sprint never repeats work or trusts unverified claims.

**When to use:** End of every sprint.

## Required report sections
1. What changed (with commit SHAs).
2. What did NOT change / deliberately skipped (and why).
3. What was verified (build, deploy, live check) and HOW.
4. What remains / unfinished.
5. Risks & open questions.
6. Commit hash(es) + deployment status.
7. Highest-impact next actions.

## Rules
- Never claim "fixed" without evidence (build exit code, deploy state, live URL status).
- Flag any work that turned out to be a no-op or a duplicate.
- Record reverts and WHY (so they aren't re-attempted).
- Save the report as `SPRINT_REPORT_<date>[_vN].md` at repo root and append a one-line entry to `CHANGELOG_CONTROL.md`.

## Verification
- Report cross-references real commit SHAs and a READY deployment.

## Output
A dated `SPRINT_REPORT_*.md` + a `CHANGELOG_CONTROL.md` line + updated `NEXT_ACTIONS.md`.
