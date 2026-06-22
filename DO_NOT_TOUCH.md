# DO NOT TOUCH

> **AUTHORITATIVE PROTECTION LAYER.** Before making ANY change, check whether the target path, system, or concept appears below. If it does, STOP and run `project-skills/15-do-not-touch-guard.md` before acting. This is the single source of truth for protection — do not create a second protection file.

**Quick checklist (every sprint):**
1. Do **not** edit `app/`.
2. Do **not** edit `Mychef Live/`.
3. Do **not** touch GTM / GA4 / CSP in `index.html` until GA4 DebugView / GTM Preview measurement confirms the exact problem.
4. Do **not** re-add `AggregateRating` or `Review` schema (unless backed by real, on-page, verifiable reviews).
5. Do **not** re-attempt previously reverted changes (read the revert rationale first).
6. Do **not** rely on `.claude/`, `.kimi/`, or `.ai/` as production truth.

_Protected paths/systems. Edit only to delete or document, and only after re-verifying. See project-skills/15-do-not-touch-guard.md._

| Path / system | Why protected | Allowed action |
|---|---|---|
| `app/` | Stale parallel repo (own `.git`), does NOT deploy, divergent history, 0 recent commits | None. Do not edit. Candidate for archive/delete (owner decision). |
| `Mychef Live/` | Second stale nested repo (own `.git`) | None. Do not edit. Candidate for archive. |
| `src/components/BlogIndexPage.tsx` | Vestigial: `/blog` 301→`/journal`, so it never serves users | Do not invest. Delete only as a deliberate decision. |
| `index.html` GTM/GA4/CSP block | Tracking; blind edits cause data loss or double-count | Change only after Skill 06 measurement (GA4 DebugView / GTM Preview). |
| `AggregateRating` / `Review` schema | Self-serving review markup = manual-action risk; removed site-wide on purpose (`21390a7`,`7adfc18`) | Re-add ONLY if backed by real, on-page, verifiable reviews. |
| Previously-reverted changes | Already decided against (e.g. cost card on BlogPage `e6ad238`/`2bf0196`; footer link repoint `be67488`) | Do not re-attempt without reading the revert rationale. |
| `.claude/`, `.kimi/`, `.ai/` | Session/agent artifacts, not production | Treat as history; do not rely on for prod truth. |

**Rule:** if a target is on this list, STOP and run Skill 15 before doing anything.
