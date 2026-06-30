# Skill 12 — Build & TypeScript Verification

**Purpose:** Never ship a build that breaks Vercel. TypeScript strict mode + prerender are unforgiving.

**When to use:** Before EVERY commit.

## Hard rules
- TS strict: unused vars/imports fail the build. Prefix intentionally-unused with `_`.
- Escape apostrophes in JSX strings (recurring TS1002/TS1005 breakages — see `2276608`, `8a4583d`).
- Newly added files must be committed (untracked files broke the build before — `f7d4f2c`, `cddcc46`).

## Checklist
1. `cd <root> && npx tsc -b 2>&1` → **exit 0** (ignore npm notices).
2. If touching prerender/data: ensure new routes exist in `src/data/sitemap.ts` and `scripts/prerender` list.
3. `git status` → no required new file left untracked.
4. (If configured) run lint; fix errors, not just warnings.
5. The real gate is the Vercel build (`tsc -b && vite build` + `postbuild` prerender) reaching READY.

## Verification
- `tsc -b` exit 0 locally AND Vercel deployment state = READY for the pushed commit SHA.

## Output
"tsc -b exit 0; untracked-needed=none; Vercel <sha> = READY/ERROR."
