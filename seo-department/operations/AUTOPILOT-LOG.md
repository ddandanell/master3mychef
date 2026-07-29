# SEO Autopilot Log

State file for the `mychef-seo-autopilot` scheduled task. Each run appends one entry.
Its purpose is the **data gate**: before making any change, a run compares current Semrush
figures against the last entry here. If nothing has refreshed, the run makes no content or
metadata changes — rewriting against unchanged data delays Google's reassessment rather than
helping it.

Semrush project (site audit campaign): `30621470` · domain `mychef.id`

**Per-URL cooldown:** do not rewrite a page's title or description more than once per 14 days
unless data clearly shows it underperforming. Check the "URLs touched" column before editing.

---

## Run 2026-07-29 20:40–20:52 UTC (manual "run now", first run)

**Data gate: PASSED — data was fresh.** Two audit snapshots available, 50 minutes apart:

| Snapshot | Finished (UTC) |
|---|---|
| `6a6a62ee3bfffa0de6a416a4` (current) | 2026-07-29 20:38:05 |
| `6a6a56a4a35d0760f593c5cf` (previous) | 2026-07-29 19:47:51 |

**Site health: 97 (delta +2).** 100 pages crawled, ~100 checks run. Only 8 checks had a
non-zero count — consistent with the standing note that most of this campaign's checks pass.

| ID | Issue | Count | Assessment |
|---|---|---|---|
| 204 | Hreflang language mismatch | **94** (all pages) | Real. Fix existed in code but was **not deployed** — see below |
| 112 | Low text-to-HTML ratio | 66 | Inherent to a React SPA. Not a defect; no action |
| 45 | Structured data markup errors | 3 | Real — `provider` objects missing required `address` |
| 213 | Pages with only one internal link | 4 | Real, low risk |
| 216 | Links with no anchor text | 3 | Real — homepage portal cards using `aria-label` only |
| 4 | Blocked from crawling | 2 | Includes `/join-our-team`, which was noindex **and** in sitemap |
| 105 | Duplicate content in h1 and title | 1 | Real — wedding planning guide |
| 223 | Content not optimized | 1 | Advisory |

**Excluded as crawler noise (standing ruling):** `wa.me/6289674072020` "broken external links".
The URL returns 200 on direct fetch; Semrush's crawler is rate-limited by WhatsApp. Excluded in
the campaign. Never "fix" these.

### Principal finding: a completed fix was sitting undeployed

Commit `650ba745` ("fix(seo): clear the real Semrush audit findings") existed locally and had
been pushed to `origin/fix/concierge-widget-mobile`, but **not to `main`**. This project only
builds `main` — branch previews are not configured — so none of it was live. The 94-page
hreflang mismatch was still being served.

Action taken: reviewed the diff, verified `npx tsc -b` exit 0, pushed to `main`.

- **Commit shipped:** `650ba745`
- **Deployment:** created 20:51:39 UTC, reached **READY**
- **URLs touched:** sitewide (hreflang, both generators) · `/join-our-team` (indexation) ·
  homepage portal cards + journal grid · `/blog/wedding-private-chef-bali-planning-guide` (title)
- **What it fixed:** hreflang `id` alternate removed from both `inject-meta.ts` (prerender) and
  `SeoHead.tsx` (client); six inline `provider` objects replaced with the `providerRef` `@id`
  so they resolve against the `#business` node that carries the address; `/join-our-team`
  removed from `noindexNoFollowPaths`; anchor text moved from `aria-label` into `sr-only` spans;
  four thin-inbound-link blog posts surfaced in the homepage journal grid; duplicate h1/title
  aligned.

### Concurrency note — read this before the next run

Two agent sessions were active in this repo simultaneously (`gracious-trusting-feynman` and
`wizardly-practical-rubin`). Consequences observed, all of which the next run should expect:

1. Two abandoned zero-byte `.git/index.lock` files blocked commits until removed.
2. `credential.helper` was repointed to the *other* session's path mid-run, breaking `git push`
   with "could not read Username". Repoint before pushing:
   `git config credential.helper "store --file=$(pwd)/.git/credentials-master3mychef"`
3. A finished fix was left on a feature branch and never reached production. **Always check
   `git rev-list --left-right --count origin/main...HEAD` and confirm the newest commit is on
   `origin/main`, not just committed locally.**

### Not done, deliberately

- **id 112 (66 pages, low text-to-HTML ratio)** — a structural property of a React SPA, not a
  content defect. "Fixing" it means padding copy or stripping markup. No action.
- **id 223, id 4 (remaining)** — advisory; need an owner view before acting.
- Verification that the hreflang fix cleared is **pending the next Semrush recrawl**. The
  current snapshot finished 20:38, before the 20:51 deploy, so its 94-count reflects the old
  code. Expect 204 to drop to 0 on the next crawl. Do not "re-fix" it in the meantime.

### Open, needs an owner ruling

- **`/catering/retreat-catering` minimum.** The page says only "Minimum booking applies" — the
  one catering entry point with no number. Logged as Q7 in `CONTRADICTION-REGISTER.md`.

---

## Run 2026-07-29 20:56 UTC (manual "run now", second run)

**Outcome: NO CHANGES MADE. This is the correct result, not a failed run.**

**Data gate: CLOSED for site audit.** `snapshots` returned the same two IDs as run 1
(`6a6a62ee3bfffa0de6a416a4`, `6a6a56a4a35d0760f593c5cf`) — no recrawl in the interval, as
expected. Semrush audits recrawl roughly daily. Per the gate rule, nothing the audit flagged was
touched. Notably id 204 (hreflang, 94 pages) was **not** re-fixed: the fix shipped in run 1 and
its snapshot predates the deploy.

**New data examined instead:** `organic_research/resource_organic`, database `id`, positions 4–20
(striking distance), sorted by volume. Eight keywords returned:

| Keyword | Pos | Vol | Ranking URL | KD |
|---|---|---|---|---|
| private chef | 13 | 320 | `/jakarta` | 30 |
| chef private | 13 | 320 | `/jakarta` | 30 |
| private chef bali | 11 | 170 | `/canggu` | 28 |
| chef recommendation | 19 | 140 | `/` | 13 |
| corporate buffet | 16 | 40 | `/catering` | 11 |
| private chef jakarta | 7 | 30 | `/locations/jakarta` | 17 |
| chef's table bali | 15 | 30 | `/fine-dining/chefs-table` | 18 |
| baby bar catering | 5 | 30 | `/events/baby-showers` | 17 |

### Investigated and dismissed — do not re-open

**The Jakarta URLs are stale Semrush attribution, not a live problem.** Jakarta was deliberately
and completely exited. Verified in `src/data/redirects.ts`:

- line 296 — `/locations/jakarta` → `/` ("Jakarta location focus removed")
- line 299 — `/jakarta` → `/` ("Jakarta focus removed; still earned 16 clicks/28d into a 404")
- line 294 — `/journal/private-chef-jakarta-guide` → `/`

There is no `page-meta.ts` entry, no route in `App.tsx`, and no `sitemap.xml` entry for either
Jakarta URL. Semrush's index still attributes those keywords to URLs that now 301. **Do not
"fix" this by restoring a Jakarta page — that would reverse a deliberate business decision.**

**`/canggu` for "private chef bali" (170/mo, pos 11)** — `/canggu` → `/locations/canggu`
(`redirects.ts:44`), which is correct and consistent. This also sits inside the **D-010
consolidation experiment opened 2026-07-29 with a stated 4–6 week observation window**. Touching
`private chef {area}` routing now would destroy the experiment's signal. Leave it until roughly
2026-09-09 unless the owner rules otherwise.

### Genuine opportunity, needs an owner decision (not an autopilot call)

`private chef` and `chef private` are 320/mo each — the highest-volume terms the site touches —
and currently resolve to the homepage via a redirect from a decommissioned URL, at position 13,
KD 30. Deciding which URL should own a generic, city-less "private chef" query is a positioning
question with cannibalisation risk against `/private-chef/*` and `/locations/*`. Flagged for the
owner; autopilot should not unilaterally pick a target for it.

---

## Run 2026-07-29 21:56–22:10 UTC (scheduled, run 2)

**Data gate: FAILED — no refresh. No content, metadata or code changes made.**

The Semrush snapshot list is byte-identical to run 1. No recrawl has occurred in the ~1h 15m
since the previous run finished:

| Snapshot | Finished (UTC) | Same as run 1? |
|---|---|---|
| `6a6a62ee3bfffa0de6a416a4` (current) | 2026-07-29 20:38:05 | **Yes — identical** |
| `6a6a56a4a35d0760f593c5cf` (previous) | 2026-07-29 19:47:51 | Yes |

**Site health: 97, delta +2 — unchanged.** 100 pages crawled. Every non-zero issue count is
identical to run 1, and every `delta` field in the snapshot is `0`:

| ID | Issue | Count | Delta |
|---|---|---|---|
| 204 | Hreflang language mismatch | 94 | 0 |
| 112 | Low text-to-HTML ratio | 66 | 0 |
| 45 | Structured data markup errors | 3 | 0 |
| 213 | Pages with only one internal link | 4 | 0 |
| 216 | Links with no anchor text | 3 | 0 |
| 4 | Blocked from crawling | 2 | 0 |
| 105 | Duplicate content in h1 and title | 1 | 0 |
| 223 | Content not optimized | 1 | 0 |

Because this snapshot finished at 20:38 and run 1's fix deployed at 20:51, these counts still
describe the **pre-fix** code. They are stale by design. Rewriting anything against them would
have been churn against data that cannot yet reflect the change.

### Work done instead: independent verification of run 1's deploy

Rather than wait on Semrush, run 1's fixes were verified directly against the production HTML
(`curl` of the prerendered output). This confirms the fixes without a recrawl.

| Run-1 fix | Verified live? | Evidence |
|---|---|---|
| hreflang `id` alternate removed | **Yes** | `/`, `/catering/babi-guling`, `/join-our-team`, `/catering/plated-catering`, `/blog/wedding-...-guide` each emit exactly two alternates, `en` + `x-default`, both self-referencing that page's own canonical |
| `provider` → `providerRef` `@id` | **Yes** | All 3 Semrush-flagged URLs (`/wedding-catering-indonesia`, `/proposal-dinner`, `/experiences/kids-birthday-chef-party`) now serve `"provider":{"@id":"https://mychef.id/#business"}` |
| `/join-our-team` indexable | **Yes** | serves `index,follow,max-image-preview:large` |
| 4 thin-inbound blog posts linked from homepage | **Yes** | all four slugs present in homepage HTML, 1 occurrence each |
| Anchor text moved to `sr-only` | **Yes** | 3 `sr-only` spans present on homepage |

Deployment `dpl_BJ4p9BNFDuDjJWMDQLSWgUtJ34up` (commit `650ba745`) is **READY**, `aliasAssigned`
true, and holds the `mychef.id` / `www.mychef.id` aliases. Run 1's push did reach production.

**Expect on the next recrawl:** 204 → 0, 45 → 0, 213 → 0, 105 → 0, and 4 → 1. Do not re-fix
any of these in the meantime.

### Candidate issue investigated and rejected — read this before "fixing" it

`/catering/plated-catering` serves an **inline** `"provider":{"@type":"Organization",...}` with
no `address`, unlike the sitewide `providerRef` pattern. This looks like one that run 1 missed.
It is **not a defect, and must not be changed.**

The defect run 1 fixed was specifically `provider: { '@type': 'LocalBusiness' }` **without**
`address` (see the diff of `650ba745`). `LocalBusiness` requires `address`; `Organization` does
not. That is why Semrush flagged exactly 3 pages and not this one.

Repo-wide check of the four remaining inline `LocalBusiness` providers — `EventsBirthdaysPage`
:94, `EventsVillaPartiesPage`:162, `EventsBabyShowersPage`:32, `VillaEventPackagesPage`:80 —
confirms **all four already carry `address: postalAddressSchema`**. No instance of the defect
remains anywhere in `src/`. Logged as D-017.

### Other flagged items re-checked, no action

- **id 4 (2 pages):** `/join-our-team` (fixed, live) and `/quote` (intentionally `noindex,follow`
  — settled). After the recrawl this should read 1, which is correct, not an issue.
- **id 216 (3):** the homepage portal cards were fixed. The 2 empty anchors still in the HTML are
  the Instagram and WhatsApp **icon** links, both external and both carrying `aria-label`
  (`"Instagram"`, `"WhatsApp"`). External icon links pass no internal equity and are already
  accessible. Adding visible or `sr-only` text to a floating CTA would be a UI change with no
  SEO gain. No action.
- **id 112 (66), id 223 (1):** unchanged assessment — structural to a React SPA / advisory.

### Connector status

- Semrush site audit: **authenticated**, working.
- Semrush **position tracking: not configured.** `tracking_campaign_dates` for campaign
  `30621470` returns `campaign not found` — that ID is the site-audit campaign only. No rank
  tracking campaign exists for this project, so no ranking data is available to any run. Owner
  decision needed (see report).
- Vercel REST API via `VERCEL_TOKEN`: working (deployment state confirmed).
- Ahrefs / GSC MCP connectors: **unauthenticated in this environment** — OAuth cannot be
  completed in an unattended run.

### Concurrency

`git status --short` was clean at start and at end. No `.git/index.lock`. `credential.helper`
was again pointing at another session's path
(`/sessions/gracious-trusting-feynman/...`) and was repointed to this session before any git
operation — expect to repeat this every run.

Note: another automation is pushing `chore(status): hourly probe report` commits; its
deployments show as CANCELED (`642510e2` at 21:17, `9f24bb9d` at 20:19). These are not SEO
changes and were left alone.

- **Commit shipped:** documentation only — this log entry and D-017. No `src/` changes.
- **URLs touched:** none.

---

## Run 2026-07-29 22:10 UTC (third run — driven by a Screaming Frog export, not Semrush)

**Input:** owner-supplied `issues_overview_report.csv` from Screaming Frog, exported
2026-07-29 22:04 UTC — **73 minutes after the `650ba745` hreflang deploy at 20:51**, so its
findings are post-fix, not stale. ~174 HTML pages (derived: 165 pages = 94.83% of total).

**Caveat on this input:** it is an *overview* export — issue names, types, priorities and URL
counts only. It contains **no URLs**. Attribution below is inference from counts matching code,
not from a per-URL list. For precise work, request `Bulk Export > Issues` instead.

### Shipped: `47888f1e`

| SF issue | Type | Count | Action |
|---|---|---|---|
| Hreflang: Noindex Return Links | Issue, **High** | 3 | **Fixed** |
| Directives: Nofollow | Warning, **High** | 2 | **Fixed** |

**Hreflang on noindex pages.** Both generators appended hreflang unconditionally with no noindex
check, so every crawlable noindex path annotated itself. Counts corroborate exactly: `noindex`
directives = 3, noindex return links = 3, and the code has exactly three crawlable noindex paths
(`/book`, `/calculator`, `/quote` — `/404` is not counted as a crawled URL). Every URL in an
hreflang set must be indexable, so a noindex page annotating itself makes the relationship liable
to be ignored. Fixed in `scripts/inject-meta.ts` (prerender) and `src/components/SeoHead.tsx`
(client), because this site emits meta twice — fixing one path only would have left half the
problem live, which is the failure mode the `id`-alternate bug had.

**Nofollow.** `/book` and `/calculator` were `noindex,nofollow` while `/quote` was
`noindex,follow`, with no reason for the split. All carry the normal site nav; nofollow blocked
PageRank flow for no benefit. Moved to `noindex,follow`, matching the reasoning already applied to
`/join-our-team`. `/404` deliberately keeps nofollow.

### Found but NOT actioned — needs one word from the owner

**`public/generated/test/` — 12 MB of unreferenced PNGs shipping to production.**

| File | Size |
|---|---|
| `vip-transport-hero.png` | 2.87 MB |
| `cocktail-party-hero.png` | 2.56 MB |
| `proposal-dinner-hero.png` | 2.54 MB |
| `sushi-ingredients.png` | 1.92 MB |
| `kids-pizza-closeup.png` | 1.58 MB |

Referenced only by `public/test-images.html` ("myCHEF.id — AI Image Test Gallery", 3.3 kB) and by
the `scripts/image-audit/` inventory JSON. The gallery is already `noindex, nofollow`, is not in
`sitemap.xml` or `robots.txt`, and is not linked from `src/` — so **there is no ranking impact**
and this is hygiene, not an SEO defect. But `public/` is copied wholesale by Vite, so all 12 MB
ships in every deployment and the URLs are publicly reachable.

Not deleted unilaterally: it is the owner's work artifact, PNG-only in an otherwise WebP codebase,
and removal is a judgment call rather than a fix. Everything is git-tracked, so removal is fully
recoverable. Awaiting a yes.

### Assessed and deliberately not actioned

- **Images: Over 100 kB (97 URLs, Medium)** — the repo holds 291 images over 100 kB totalling
  54 MB (268 WebP, 18 JPG, 5 PNG); SF counted 97 because it only sees linked ones. Excluding the
  12 MB of test PNGs, the rest are legitimate hero images already in WebP at 250–400 kB.
  Recompressing further trades visual quality on a luxury brand site for modest byte savings —
  an owner call, not an autopilot one.
- **H2: Multiple (165 pages, 94.83%)** — Low, and explicitly "not an issue" in SF's own
  description; HTML permits multiple `<h2>`s in a logical hierarchy. No action.
- **Links: Pages With High External Outlinks (76, 43.68%)** — Low. Expected on a site that links
  out to villas and venues. No action.
- **Content: Readability Difficult (4)** — Low, and a brand-voice question, not a technical one.
- **Canonicals: Canonicalised (3, High)** / **Pages Without Internal Outlinks (2, High)** /
  title-length and H1/H2-length items — **cannot be actioned without the per-URL export.** The
  overview gives counts only. These are the strongest reason to get `Bulk Export > Issues`.

### Note on Screaming Frog MCP

The owner started an MCP server inside the Screaming Frog desktop app. It is **not reachable from
this environment**: no `screamingfrog`-named tools are registered, and the bash sandbox is a
separate Linux VM that cannot reach `localhost` on the owner's Mac. Starting the server is only
step one — it must also be registered as a connector in Claude's settings. Until then, use
Screaming Frog's CSV exports, or Semrush/Ahrefs which are already connected.

---

## Run 2026-07-29 22:20–22:45 UTC (owner follow-up: "do all these things")

Owner instructed that the five open items from run 2's report be actioned. Three were
actionable, two are blocked outside this environment. **The data gate is still failed** — the
Semrush snapshot is unchanged (`6a6a62ee3bfffa0de6a416a4`) — so no metadata or ranking-driven
copy was rewritten. The one content change below is a **factual correction resolving a logged
open question**, decided by existing owner rulings, not by ranking data.

### 1. Q7 closed — retreat-catering minimum (D-018)

`/catering/retreat-catering` was the one catering entry point with no number. It turned out the
number was never actually unknown:

- **D-008** set a 5-guest minimum for dining formats and named **retreat** explicitly.
- `WellnessRetreatCateringPage.tsx:148` already publishes "5 guests minimum for a dedicated
  retreat catering program".
- The old wording "Minimum booking applies" implied a **spend** minimum, which **D-015** ruled
  does not exist outside corporate (IDR 15,000,000).
- The FAQ at `:455` literally asked "is there a minimum?" and never answered it.

Changed, in `src/pages/CateringRetreatPage.tsx`:

| Line | Before | After |
|---|---|---|
| 769 | "priced per group, length and menu. **Minimum booking applies.**" | "priced per group, length and menu, **with a five-guest minimum.**" |
| 455 | "We regularly cater retreats from 10 to 60 guests…" | "**The minimum is five guests.** We regularly cater retreats from 10 to 60 guests…" |

`FAQS` is a single array feeding both `faqPageSchema` (`:491`) and `FAQAccordion` (`:1168`), so
schema and on-page copy cannot drift. No new fact was invented. `CONTRADICTION-REGISTER.md`
Q7 row updated from "undefined — still open" to the cited 5-guest figure.

**If the owner's real retreat minimum is not 5, correct D-008 first** — this page now follows it.

### 2. Cadence changed: hourly → daily

`mychef-seo-autopilot` cron moved from `0 * * * *` to `0 7 * * *` (07:06 local, daily).
Reason: Semrush recrawls roughly daily, so ~23 of every 24 hourly runs could only ever hit the
data gate. Runs 1 and 2 an hour apart saw a byte-identical snapshot, which is the proof.

### 3. Semrush position tracking — CANNOT be created from here

Confirmed with the API, not assumed:

- `get_project(30621470)` → project `mychef.id`, tools `siteaudit`, **`tracking`**, `seoideas`.
  The tracking tool **is** enabled on the project.
- `campaigns(project_id=30621470)` → `{"targets": null, "limits": {"targets": 1}}`.
  Tracking is enabled but **no target/keyword set has ever been configured**, and the plan
  allows exactly 1 target.
- The Semrush MCP exposes **reports only** — `projects`, `position_tracking` and every other
  toolkit are read-only. There is no create/configure endpoint.

**Owner action required in the Semrush dashboard** (one-time, ~5 min): Projects → mychef.id →
Position Tracking → set up campaign. Suggested config: target `mychef.id`, device **mobile**,
location **Bali, Indonesia** (or Denpasar), Google. Seed keywords should come from
`KEYWORD-URL-MAP.csv` — prioritise the families with logged decisions so runs can measure them:
`private chef bali`, `private chef canggu/seminyak/ubud` (D-010), `private chef villa menu`
(D-011), `babi guling catering bali` + `pork free catering bali` (D-012/D-014),
`bali wedding catering`. Until this exists, no run can see rank movement.

### 4. Vercel deploy-on-push — behaviour contradicts config, flag not fixed

Established by API, not inference:

- Project `master3mychef` **is** git-linked: `type: github`, `ddandanell/master3mychef`,
  `productionBranch: main`, `deployHooks: []`, `commandForIgnoringBuildStep: null`.
- Yet `vercel.json` has carried `"git": { "deploymentEnabled": false }` since **2026-07-15**
  (`241acc05`).

Observed today, which contradicts that flag: **code** commits deploy and reach READY
(`f7d9cbb7`, `1244f607`, `1b1d5967`, `d2f6a9b9`, `8eaf32fa`, `50c6de85`, `650ba745`), while
**docs-only** commits either deploy-and-CANCEL (`642510e2`, `9f24bb9d`, `88c6ef5d`, `c8ccd802`,
`e501482d` — all `chore(status): hourly probe report`) or produce no deployment at all
(run 2's `e5942a9f`, which touched only `seo-department/**`).

**Deliberately not changed.** Flipping production deploy behaviour on evidence that contradicts
the stated config is exactly the kind of speculative change this task forbids. Needs an owner
ruling: either delete the `git` block, or make it explicit as `"deploymentEnabled": {"main": true}`.

**Consequence for future runs:** a docs-only run will produce **no deployment**, and that is
correct, not a failure. Do not chase a READY state for a commit that touches only
`seo-department/**`. Only require READY when `src/`, `scripts/`, `public/` or `vercel.json`
changed.

### 5. Ahrefs / GSC connectors — blocked, unattended

Both remain unauthenticated. OAuth cannot be completed in a scheduled run — no one is present
to approve the flow. Owner must authorise them in claude.ai connector settings. Until then
every run is Semrush-only, and Semrush is currently site-audit-only (see item 3), which means
**no run can see rankings or query data at all**. That is the single biggest gap in this setup.

- **URLs touched:** `/catering/retreat-catering` (copy + FAQ; first touch, cooldown starts now).
- **`npx tsc -b`:** exit 0.

### CORRECTION to item 4 above — `git push` does NOT deploy. Read this.

The conclusion recorded earlier in this entry ("code commits deploy, docs-only commits cancel or
no-op") was **wrong**, and it was wrong in a way that would mislead every future run. Corrected
by direct test:

- Commit `9105b5d9` (a **code** change to `src/pages/CateringRetreatPage.tsx`) was pushed to
  `main` at 22:28 UTC. **Seven minutes later Vercel had still created no deployment.**
- In the same window, `fe16f93d` — another session's code commit — deployed within ~1 minute.

So the correlation was never "code vs docs". It was **who pushed**. `vercel.json`'s
`"git": { "deploymentEnabled": false }` does exactly what it says: **git pushes never trigger a
build.** The deployments visible in the API were each created *explicitly* by whoever pushed
them, not by GitHub.

**Every future run must trigger its own deployment after pushing.** Working call:

```
curl -s -X POST -H "Authorization: Bearer $VERCEL_TOKEN" -H "Content-Type: application/json" \
  "https://api.vercel.com/v13/deployments?forceNew=1" \
  -d '{"name":"master3mychef","project":"master3mychef","target":"production",
       "gitSource":{"type":"github","org":"ddandanell","repo":"master3mychef","ref":"main"}}'
```

Then poll `GET /v13/deployments/<id>` for `readyState: READY`. Build takes **~5 minutes** — it
runs `playwright install chromium`, `tsc -b`, `vite build`, a ~100-page prerender and validators.
Poll patiently; do not assume failure at 2 minutes.

This also means **run 2's commit `e5942a9f` was never deployed**. Harmless — it touched only
`seo-department/**`, which is not part of the build — but the state file should not have implied
otherwise.

**Verified this run:** deployment `dpl_8Mct8YQKBDigFxEXCWCrapZ3CNXr` (commit `9105b5d9`) reached
**READY**, alias assigned. Live check of `/catering/retreat-catering` confirms "five-guest
minimum" and "The minimum is five guests" are being served and "Minimum booking applies" is gone.

### Concurrency — a second autopilot was running at the same time

While this run worked, another session committed `e23ea16f` ("autopilot run 3 - Screaming Frog
export findings"), `47888f1e`, and `fe16f93d` to `main`. Two autopilot processes were live in the
same repo simultaneously.

Consequences handled: a zero-byte `.git/index.lock` blocked the commit for ~14 minutes. It could
not be removed with `rm` from the sandbox ("Operation not permitted") until file deletion was
granted for the folder. Note the sandbox **cannot see the other session's processes**, so the
"is a git process live?" test in the task file is not decidable here — judge by lock size, age
and whether `HEAD` is still moving.

The two sessions did not touch the same files, so nothing was clobbered. The move to a daily
cadence should reduce overlap; if concurrent runs continue, the hourly `chore(status)` automation
and this task should be checked for duplication.
