# Skill 15 — Do-Not-Touch Guard

**Purpose:** Protect stale, non-production, duplicated, or intentionally-rejected files/systems from accidental edits.

**When to use:** Before editing anything outside the obvious live page set; whenever a path looks unfamiliar.

## Protected (see DO_NOT_TOUCH.md for the live list)
- `app/` — stale parallel repo, does NOT deploy. Never edit.
- `Mychef Live/` — second stale nested repo. Never edit.
- `src/components/BlogIndexPage.tsx` — vestigial behind `/blog`→`/journal` 301. Do not invest; do not "fix" the blog index.
- Tracking (`index.html` GTM/GA4, CSP) — do not change blindly; require measurement first (Skill 06).
- AggregateRating/Review schema — do not re-add without real, on-page, verifiable reviews (Skill 08).
- Reverted work — do not re-attempt without re-reading the revert rationale (Skill 02).

## Checklist
1. Is the target inside a protected path/system above? If yes → STOP, confirm intent with owner or only document/delete.
2. Is this work a previously-reverted change? If yes → re-read the revert commit first.
3. Tracking or schema change? → run Skill 06 / 08 first; no blind edits.

## Verification
- The file you are about to edit is NOT on the protected list, OR you are deleting/documenting it deliberately.

## Output
"Target <path>: protected=Y/N. Proceeding because <reason> / Stopping and escalating."
