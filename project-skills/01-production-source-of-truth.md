# Skill 01 — Production Source of Truth

**Purpose:** Never edit the wrong tree. Confirm which folder/repo/branch actually deploys before changing anything.

**When to use:** At the start of EVERY sprint, and before the first file edit.

## Facts (verified 2026-06-23)
- **Deployed tree:** repo ROOT `/src` (`index.html` → `/src/main.tsx`).
- **Build:** root `package.json` (`name: my-app`) → `npx playwright install chromium && tsc -b && vite build`; `postbuild` runs `validate-critical-assets.ts` + `inject-meta.ts` + `prerender`.
- **Vercel project:** `master3mychef` (`prj_VkMbGIUciFBk2VE0EUy2SikfWOgK`, team `team_WumSlShMHjkfsJtedvxDTaDd`), builds from root.
- **Remote/branch:** `github.com/ddandanell/master3mychef` → `main`. Push to main = auto-deploy.
- **Routing:** `src/App.tsx`, react-router, ~174 routes.
- **`app/` was REMOVED 2026-06-23** (commit `2614624`) — the stale duplicate is gone (backed up to `~/Desktop/mychef-app-archive-2026-06-23/`). Do NOT re-clone it. **NON-production / DO NOT EDIT:** `Mychef Live/` (separate Next.js app, own `.git`). See `DO_NOT_TOUCH.md`.

## Checklist
1. `cat .vercel/project.json` → confirm projectId/projectName.
2. `grep main index.html` → confirm `/src/main.tsx` entry.
3. `git remote -v` and `git branch --show-current` → `origin master3mychef`, `main`.
4. `find . -maxdepth 3 -name .git -not -path ./.git` → list nested repos (now only `Mychef Live/`; `app/` removed 2026-06-23). Confirm your target file is NOT inside them.
5. Confirm the file you intend to edit is under root `/src`, `/public`, root `index.html`, or root `vercel.json`.

## Verification
- Path of every file you will edit starts with the repo root, not `app/` or `Mychef Live/`.
- `git ls-files <yourfile>` returns the path (root repo tracks it).

## Output
One line: "Production source confirmed: root /src, branch main, project master3mychef. Editing <paths> (all in production tree)."
