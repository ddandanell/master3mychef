# DO NOT TOUCH

> **AUTHORITATIVE PROTECTION LAYER.** Before making ANY change, check whether the target path, system, or concept appears below. If it does, STOP and run `project-skills/15-do-not-touch-guard.md` before acting. This is the single source of truth for protection — do not create a second protection file.

**Quick checklist (every sprint):**
1. `app/` was **REMOVED 2026-06-23** (commit `2614624`, externally backed up). Do **not** re-clone or re-create it inside the repo. (Root `/src` remains the only production tree.)
2. Do **not** edit `Mychef Live/`.
3. Do **not** touch GTM / GA4 / CSP in `index.html` until GA4 DebugView / GTM Preview measurement confirms the exact problem.
4. Do **not** re-add `AggregateRating` or `Review` schema (unless backed by real, on-page, verifiable reviews).
5. Do **not** re-attempt previously reverted changes (read the revert rationale first).
6. Do **not** rely on `.claude/`, `.kimi/`, or `.ai/` as production truth.

_Protected paths/systems. Edit only to delete or document, and only after re-verifying. See project-skills/15-do-not-touch-guard.md._

| Path / system | Why protected | Allowed action |
|---|---|---|
| `app/` | **REMOVED 2026-06-23** (commit `2614624`). Was a stale 1.2 GB duplicate (own `.git`, `48bc7d6` already in prod). Backed up token-free to `~/Desktop/mychef-app-archive-2026-06-23/` (working-tree tar + 107-file uncommitted patch). | Gone. Do NOT re-create/re-clone inside the repo. |
| `Mychef Live/` | **NOT a duplicate — a SEPARATE Next.js app** (auth + chef-application + admin + notifications; `.next/`, `actions/`, own `.env.local`; last commit `90d1a8f`, 0 uncommitted, 1.3 GB). Unrelated to the mychef.id marketing site. | Do not edit during marketing-site sprints. **Do not delete** — it is a distinct project; confirm status with owner. |
| `src/components/BlogIndexPage.tsx` | Vestigial: `/blog` 301→`/journal`, so it never serves users | Do not invest. Delete only as a deliberate decision. |
| `index.html` GTM/GA4/CSP block | Tracking; blind edits cause data loss or double-count | Change only after Skill 06 measurement (GA4 DebugView / GTM Preview). |
| `AggregateRating` / `Review` schema | Self-serving review markup = manual-action risk; removed site-wide on purpose (`21390a7`,`7adfc18`) | Re-add ONLY if backed by real, on-page, verifiable reviews. |
| Previously-reverted changes | Already decided against (e.g. cost card on BlogPage `e6ad238`/`2bf0196`; footer link repoint `be67488`) | Do not re-attempt without reading the revert rationale. |
| `.claude/`, `.kimi/`, `.ai/` | Session/agent artifacts, not production | Treat as history; do not rely on for prod truth. |

**Rule:** if a target is on this list, STOP and run Skill 15 before doing anything.
