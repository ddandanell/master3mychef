# Ops Sprint — app/ Safety Audit, Route Policy, Repo Hygiene (2026-06-23)

_Analysis & decision sprint. No production code changed. No deletion/archive performed. Documentation only._

---

## ⚠️ P0 SECURITY FINDING (action required by owner)

`app/.git/config` contains a **plaintext GitHub Personal Access Token** embedded in the remote URL (`https://ddandanell:ghp_…@github.com/ddandanell/master3mychef.git`).

- **Scope:** the token is **only** in `app/.git/config` — an **untracked, local** git config. It is **NOT** in any tracked file, **NOT** in git history (verified `git grep ghp_` = 0 in both root and `app/` trees), and **NOT** in any tracked `.env` (only `.env.example` templates exist). So this is a **local credential exposure**, not a public/repo leak.
- **Risk:** it is a live PAT with **push access to the production repo**, sitting in plaintext. Anyone with local filesystem access could use it.
- **Recommended owner actions:**
  1. **Revoke/rotate** the token at GitHub → Settings → Developer settings → Personal access tokens (regardless of `app/` deletion).
  2. Stop embedding tokens in remote URLs; use the macOS keychain credential helper (`git config --global credential.helper osxkeychain`).
  3. Deleting `app/` (see Part A) removes this copy of the token, but rotation is still required because it was exposed.

---

## Part A — `app/` safety audit + archive plan

### What `app/` is
A **second, stale clone of the same production repo** (`master3mychef.git`), living inside the root repo as a nested git checkout.

| Attribute | Finding |
|---|---|
| Size | **1.2 GB** |
| Own `.git`? | **Yes** (nested repo), branch `main`, remote = same `master3mychef.git` (with the leaked token) |
| Last commit | `48bc7d6` (2026-06-21) "content: restructure 'Choose Your Catering Style'…" |
| Is `48bc7d6` in production? | **Yes — it is an ANCESTOR of root prod HEAD.** All of `app/`'s committed work is already live. |
| Uncommitted files | **107** (105 `src/`, 1 `index.html`, 1 `_DO_NOT_USE_STALE_DUPLICATE.md` marker) |
| Uncommitted edit age | Last touched **2026-06-21/22** — an abandoned in-progress state |
| Of a 40-file sample of uncommitted `src/` edits | **20 identical** to current prod `/src`, **20 differ** (stale divergent state) |
| Does it deploy to mychef.id? | **No.** Vercel project `master3mychef` builds from repo ROOT; `app/` is a subdirectory that does not deploy. |

### Why it is risky
1. **Wrong-folder risk** — agents/humans can edit `app/src/...` (looks like the app) with **zero live effect**; this has already wasted prior sprints.
2. **P0 token exposure** (above).
3. **1.2 GB bloat** inside the repo working tree.

### Can it be deleted now?
- **Committed work:** safe to lose — `48bc7d6` is already in production.
- **Uncommitted work (107 files):** ~half already match prod; the rest are an abandoned Jun-21/22 divergent state, almost certainly superseded by the root `/src` tree. **Low value, but not provably zero** → back it up before deletion (cheap insurance).
- **Verdict:** safe to delete **after** (a) backing up the uncommitted diff and (b) owner sign-off. Do **not** delete in this sprint.

### Exact archive plan (for owner approval — do NOT run yet)
```bash
cd "/Users/openclaw/Movies/LIve website/MYCHEF Live webste/app"

# 1. Capture the 107 uncommitted files as a patch (preserves any unique edits)
git stash list >/dev/null 2>&1
git diff > ../app_uncommitted_2026-06-23.patch         # tracked-file edits
git status --porcelain > ../app_uncommitted_filelist.txt

# 2. (Optional, max safety) zip the whole folder to an EXTERNAL location, not inside the repo
cd ".."
ditto -c -k --sequesterRsrc --keepParent app ~/Desktop/app_archive_2026-06-23.zip

# 3. Verify the backup opens and the patch is non-empty, THEN remove the working copy
rm -rf "app"          # only after owner confirms the backup is good

# 4. SECURITY: rotate the leaked PAT at GitHub regardless of the above.
```
**Before deletion:** confirm the backup zip/patch exists and is readable; confirm nothing in `app/` is referenced by the root build (it is not — root builds from `/src`); rotate the token.

---

## Part B — Remaining non-prerendered route policy (classification)

**Corrected count: 25 routes** (the earlier "~26" estimate). They are App.tsx static routes that are NOT in the generated sitemap and NOT redirect sources, so they return **HTTP 404 on direct access** (SPA renders client-side). **None of the 25 is internally linked. None is a unique page that belongs in the sitemap** — every one is either a client-side alias or a duplicate of a page that already exists, is canonical, and is live in the sitemap.

### Classification table

| Route(s) | Live status | Linked? | Component exists? | Recommended action | Priority | Reason |
|---|---|---|---|---|---|---|
| `/private-chef-bali` | 404 (soft) | No | Yes — `PrivateChefBaliPage` | **Owner decision:** either 301 → `/fine-dining/private-chef-bali` (its declared canonical) **or** promote `/private-chef-bali` to be the canonical money page (repoint canonical + sitemap + internal links). | **P1** | Exact primary keyword ("private chef bali"), but the page already self-canonicals to `/fine-dining/private-chef-bali`; choosing which URL is canonical is an SEO **strategy** call. |
| `/private-chef-bali/{seminyak,canggu,uluwatu,ubud,jimbaran,nusa-dua,sanur,denpasar}` (8) | 404 (soft) | No | Yes — `[Area]Page` (same component as `/locations/[area]`) | **301 → `/locations/[area]`.** Do NOT add to sitemap. | P2 | Each renders the same component as `/locations/[area]` and **already self-canonicals to `/locations/[area]`** (live, in sitemap). They are non-canonical duplicates. |
| `/private-chef-bali/{berawa,petitenget,legian,kerobokan,kuta,tanah-lot,pecatu,ungasan,gianyar,tegallalang,tabanan,padang-bai}` (12) | 404 (soft) | No | Client-side `<Navigate>` only | **301 → the live `/locations/[parent]`** (e.g. berawa→`/locations/canggu`; petitenget/legian/kerobokan/kuta/tanah-lot→`/locations/seminyak`; pecatu/ungasan→`/locations/uluwatu`; gianyar/tegallalang/tabanan→`/locations/ubud`; padang-bai→`/fine-dining/private-chef-bali`). Do NOT add to sitemap. | P2 | Already client-side aliases; some currently `<Navigate>` to **other 404 duplicates** — point the server 301 at the live canonical instead. |
| `/private-chef-{bsd,kemang,scbd,pondok-indah}` (4) | 404 (soft) | No | Client-side `<Navigate>` → `/jakarta` | **301 → `/locations/jakarta`** (the live canonical; note `/jakarta` is itself a non-canonical duplicate of `/locations/jakarta`). Do NOT add to sitemap. | P2 | Jakarta-area aliases; current target `/jakarta` is not in the sitemap (itself a duplicate). |

### Which to fix next vs ignore
- **Fix next (P1, owner decision):** `/private-chef-bali` — decide redirect-vs-promote. This is the only one with real SEO upside.
- **Fix as a batch (P2, owner-approved follow-up):** consolidate the other 24 into `src/data/redirects.ts` as server-side 301s → their live `/locations/*` (or `/fine-dining/private-chef-bali`) canonicals. This removes the soft-404s and the client-only redirects, the SEO-correct treatment for alias/duplicate URLs.
- **Ignore / do NOT do:** do **not** add any of the 25 to the sitemap (all are duplicates/aliases → would create duplicate-content/doorway signals). Do not create content for them.
- **Bonus cleanup spotted:** `/jakarta` (line 276) duplicates `/locations/jakarta`; fold into the same redirect consolidation.

**Net:** zero of the 25 should become new indexable pages. The correct end-state is "25 → 301 to existing canonicals," handled via the redirect source of truth (`src/data/redirects.ts`), pending owner approval (and a decision on `/private-chef-bali`).

---

## Part C — Repo hygiene status

| Item | Status |
|---|---|
| Branch / sync | `main`, in sync with `origin/main` |
| Modified (uncommitted) | `app` (gitlink — stale duplicate, protected), `.claude/worktrees/quizzical-matsumoto-006baa` (session gitlink artifact) |
| Untracked | `SPRINT_REPORT_2026-06-23_v3.md`, `…_v4.md`, `…_v5.md` (session report artifacts at repo root) |
| Staged | none (clean) |
| `.gitignore` | Correctly ignores `node_modules` + `dist` (no build artifacts tracked) |
| Generated files | `vercel.json`, `public/_redirects`, `public/sitemap.xml` are generated from `src/data/*` — committed and consistent (reconciled `7c28d17`) |
| Paused process | A `git diff … # review` pager (PID 15864) is still open in Terminal — harmless; owner can quit with `q` |

**Assessment:** the working tree has **no unclear production files** uncommitted. Everything outstanding is either protected (`app/`), a session artifact (`.claude/worktrees`, `SPRINT_REPORT_*`), or already handled. No destructive cleanup performed.

**Owner to decide:** (1) rotate the leaked PAT; (2) approve the `app/` archive plan; (3) decide `/private-chef-bali` redirect-vs-promote and approve the 24-route redirect consolidation; (4) optionally commit-or-remove the untracked `SPRINT_REPORT_*.md` clutter.
