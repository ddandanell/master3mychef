# GIT DANGER RULES — Read Before Any Git Command

**These rules were written after a catastrophic git incident (commit `0a3d99f`, 2026-06-30) that wiped all file tracking from the repository and caused 7 consecutive Vercel build failures.**

---

## THE INCIDENT — What happened and why

Commit `0a3d99f` ran:
```bash
git rm -r --cached .    # ← THIS DESTROYED EVERYTHING
git add <11 new files>
git commit ...
git push
```

`git rm -r --cached .` **removes every file in the entire repo from git tracking**. The files still exist on disk but become "untracked" — invisible to Vercel. The entire `src/`, `scripts/`, `public/`, `package.json`, `tsconfig.json`, etc. were all wiped from git tracking simultaneously.

Result: 7 cascading build failures, hours of recovery work restoring files one layer at a time:
1. `vite: command not found` — `package.json` missing from git
2. `Cannot find module validate-hero-images.ts` — scripts missing
3. `Missing hero images` — `public/generated/` missing
4. `Cannot find module src/data/sitemap` — entire `src/` missing (239 files)
5. `Cannot read file tsconfig.json` — tsconfig missing

**Recovery took 7 commits and multiple hours. The site was broken for the entire recovery period.**

---

## ABSOLUTE PROHIBITIONS — Never run these

```bash
# ❌ NEVER — wipes all git tracking
git rm -r --cached .
git rm -r --cached src/
git rm --cached -r .

# ❌ NEVER — overwrites ALL tracked files
git add -A
git add .   ← dangerous in the root (picks up app/, .claude/worktrees/)

# ❌ NEVER stage these (they are gitlinks/submodules that break the tree)
git add app/
git add "Mychef Live/"
git add .claude/worktrees/
```

---

## SAFE git patterns — Always use these

```bash
# ✅ Stage SPECIFIC files only
git add src/pages/MyNewPage.tsx src/App.tsx scripts/prerender.ts

# ✅ Check what will be staged BEFORE staging
git status
git diff --cached

# ✅ Verify tracked files before committing
git ls-files src/ | head -20    # should show hundreds of files
git ls-files | grep package.json  # should appear

# ✅ Run tsc before every commit
npx tsc -b 2>&1 | tail -5   # must exit 0

# ✅ Commit with clear message
git commit -m "feat(scope): what and why"

# ✅ Push
git push origin main

# ✅ Verify deployment reached READY
# Check Vercel for the commit SHA — must reach state=READY
```

---

## Before any git add, run this sanity check

```bash
# Confirm critical files are still tracked (should all return paths):
git ls-files package.json index.html tsconfig.json src/main.tsx src/App.tsx

# If ANY of these returns empty → STOP. Something is wrong. Do not commit.
```

---

## If you must use git add -f (force-tracking gitignored files)

Only ever for specific files, never recursive:
```bash
# ✅ Acceptable
git add -f vercel.json
git add -f public/generated/specific-image.webp

# ❌ Never
git add -f .
git add -f public/
```

---

## After any commit, verify these files are still tracked

```bash
git ls-files | wc -l   # should be 300+ files; if < 50, something went wrong
git ls-files src/ | wc -l   # should be 200+ 
git ls-files scripts/ | wc -l   # should be 5+
```

---

## If files accidentally become untracked

```bash
# Restore specific files:
git add src/           # adds all untracked src/ files
git add scripts/
git add public/generated/
git add -f tsconfig.json tsconfig.node.json tsconfig.app.json

# Commit immediately:
git commit -m "fix: restore files accidentally removed from git tracking"
git push origin main
```

---

## Key lesson

**`git rm --cached` is for removing files from tracking permanently** (like when you add something to .gitignore). It is NOT for "clearing" or "resetting" the staging area. The correct way to unstage staged changes is `git restore --staged <file>`.

Never run `git rm --cached` without knowing exactly which single file you are removing and why.
