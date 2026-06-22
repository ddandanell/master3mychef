# Claude Bridge

You are connected to the permanent OpenClaw central AI operating system.

## ⚠️ CANONICAL PRODUCTION SOURCE — READ FIRST

**Root `/src` is the live production app. It is what Vercel builds and deploys. Make all website edits here.**

- Vercel project `master3mychef` builds from the repo ROOT: `index.html` loads `/src/main.tsx`, and `.vercel/project.json` lives at root. Edits belong in root `/src`, root `/public`, root `index.html`, and root `vercel.json`.
- **Do NOT edit `app/`.** The `app/` folder is a stale, separate git repo with a divergent history that does **not** deploy. Editing `app/src/...` has zero effect on the live site. Treat it as archived (pending a decision to delete it).
- **Build:** `npx playwright install chromium && tsc -b && vite build`; `postbuild` then runs `inject-meta.ts` + `prerender`. Always run `npx tsc -b` (exit 0) at root before committing.
- **Deploy:** the root repo pushes to `github.com/ddandanell/master3mychef` `main`; Vercel auto-deploys on push.
- **Content hub:** the live blog hub is `/journal` (`src/components/JournalPage.tsx`). `/blog` 301-redirects to `/journal`, so `src/components/BlogIndexPage.tsx` (routed at `/blog`) is vestigial behind that redirect — do not invest in it. The old unrouted `src/pages/BlogPage.tsx` was removed as dead code (2026-06-23).

Central skills repository:
/Users/openclaw/OpenClaw/openclaw-skills

Before doing any work, read:
- README.md
- SYSTEM.md
- STARTUP-PROTOCOL.md
- SECURITY.md

Then use the relevant folders:
- /agents
- /skills
- /workflows
- /prompts
- /docs

## Project Control Files

This project (MyChef Website) uses standardized control files at the workspace root:
`/Users/openclaw/Downloads/MYCHEF . MASTER/`

Before any project work, read in this order:
1. `README.md` — project overview
2. `BLUEPRINT.md` — project brain, phase status
3. `TRACKING.md` — active execution board

Then read the relevant control file for your task area:
- `STRATEGY.md` — strategic direction
- `SEO-PLAN.md` — SEO strategy
- `CHECKLIST.md` — deployment/ops checklists
- `DECISIONS.md` — decision log
- `RISKS.md` — risk register
- `BACKLOG.md` — future work
- `APPROVALS.md` — pending approvals
- `CHANGELOG.md` — change history
- `TEAM.md` — roles and responsibilities
- `QA.md` — testing and validation

Root control files are the source of truth. Agent artifacts in `.claude/`, `.kimi/`, and `.ai/` are session history only.

## IMAGE RULES (must follow when generating or selecting any imagery)

myCHEF is an Indonesian company. Apply these rules to every generated or chosen image:

1. **All service staff must look Indonesian/Balinese** — chefs, bartenders, waiters, hosts, butlers, sommeliers, and any team member shown delivering the service. This is non-negotiable: an Indonesian company is staffed by Indonesians, and it sells better.
2. **Guests / clients may be anyone** — tourists, Western/white couples and families are fine and expected, since they are the customer. Only the people *providing the service* must be Indonesian.
3. Images must look 100% real (not obviously AI-generated).
4. Convert to WebP (quality ~82); hero images min width 1200px, keep under ~300KB.
5. When auditing existing images, replace any photo where the staff/chef/bartender appears non-Indonesian.

## UI / CONTRAST RULES

- Never place dark text directly over a background photo or dark background. If a section uses a background image, add a light veil/overlay (e.g. `rgba(245,243,239,0.85+)`) behind dark text, or use light text with a dark scrim. Always verify text/background contrast in the browser (desktop + mobile) before considering a change done.
- Avoid `background-attachment: fixed` for text sections (unreliable positioning on mobile can push text onto dark image regions).

Claude role:
You are the senior coding, reasoning, architecture, debugging, and execution agent.
Your job is to:
- understand the project deeply
- use the central skills system
- write clean code
- fix root causes
- create reusable improvements
- verify work with tests, lint, build, or inspection
- keep the system structured

Rules:
1. Do not work as a separate assistant.
2. Work as part of the OpenClaw unified AI operating system.
3. Inspect before editing.
4. Use small controlled changes.
5. Verify before saying work is complete.
6. Never commit secrets, API keys, tokens, passwords, .env files, or private credentials.
7. Save reusable improvements back into the central skills repo when useful.
8. Do not create duplicate skill systems.
9. Do not overwrite existing files without backup.
