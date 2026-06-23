# NEXT ACTIONS

_Prioritized. Each action names the skill to run. No new website features until structure is clean._

## Highest impact (next 5)
1. **Tracking P0 — DONE (verified directly in GTM + GA4, fix applied 2026-06-23).** No double-counting; WhatsApp-conversion mapping fixed to `generate_lead` (owner-approved). Remaining owner confirmations / follow-ups:
   - **Confirm live:** in GA4 DebugView/Realtime, click a WhatsApp CTA on mychef.id and confirm **one** `generate_lead` appears (I couldn't self-confirm — this browser's events didn't register in Realtime; likely consent-mode/cookieless or a blocker).
   - **Phone tracking — DONE 2026-06-23 (GTM Live v3 + GA4).** Added "Phone Click" trigger (Just Links, Click URL contains `tel:`) + "GA4 Event - phone_click" tag + GA4 modification `phone_click → generate_lead`. The 27 `tel:` CTAs now register as `generate_lead` conversions (single-fire, mirrors WhatsApp). Owner: confirm one `generate_lead` from a real device.
   - **Activate Internal Traffic filter? (owner decision):** GA4 has an "Internal Traffic" data filter (Exclude) currently in **Testing**. Set it to **Active** if you want dev/office traffic excluded from reports (recommended once the IP list is confirmed).
   - **Consent/collection: AUDITED 2026-06-23 — GA4 collecting fine, no banner needed for Indonesia.** Consent is unset/implicit (granted), no CMP, no denial; `/collect` not blocked; 7-day real data healthy incl. Indonesia. The 0-Realtime was internal-traffic tagging + synthetic test (an "Internal Traffic" Exclude filter exists, state: Testing). No change made.
   - **EEA/UK/CH compliance (recommended, optional):** if meaningful EEA/UK/Switzerland traffic appears, add a region-aware Consent Mode v2 + minimal CMP (deny analytics/ad storage for those regions until consent; granted elsewhere incl. Indonesia). Do not apply globally. Smallest setup: a lightweight region-gated banner wired to GTM Consent Mode.
   - Optional cleanup: the dead `window.gtag?.()` line in `src/lib/analytics.ts` is inert (gtag undefined) — remove only if desired; not required.
1b. **P0 SECURITY — rotate leaked GitHub PAT (owner, do now).** A plaintext `ghp_…` token with push access is in `app/.git/config` (local-only; not in tracked files/history). Revoke/rotate at GitHub and switch to `credential.helper osxkeychain`. See KNOWN_ISSUES #0.
2. **Archive `app/` — DONE 2026-06-23 (commit `2614624`).** Backed up token-free to `~/Desktop/mychef-app-archive-2026-06-23/` (working-tree tar + 107-file uncommitted patch, gzip-verified), then removed the gitlink. Wrong-folder risk gone; on-disk token gone. **Still open: token rotation (1b above) — the token stays valid until the owner revokes it.** `Mychef Live/` untouched.
2c. **25 non-prerendered routes — CLASSIFIED 2026-06-23 (owner-approved follow-up).** All are duplicates/aliases; none internally linked; **add none to the sitemap.** Consolidate into `src/data/redirects.ts` as 301s → live `/locations/*` (or `/fine-dining/private-chef-bali`) canonicals. **Owner decision on `/private-chef-bali` (bare):** redirect to `/fine-dining/private-chef-bali` vs promote to canonical money URL. Table: `OPS_SPRINT_2026-06-23_app-audit-route-policy.md`.
3. **Direct-access route fix — DONE & CLOSED 2026-06-23 (commits `0c25cbd` + `cdb7bef`, live + verified).** The six internally-linked routes are resolved: `/villa-chef`, `/recommended-services`, `/join-our-team` now serve **200** (added to `src/data/sitemap.ts` → `inject-meta.ts` emits the static HTML); `/terms-of-service`, `/privacy-policy`, `/payment-terms` now **308** → `/terms`, `/privacy`, `/cancellation` (vercel.json redirects). No SPA fallback used. **System learning recorded in Skill 05 + KNOWN_ISSUES #10:** on Vercel the deployed static route files come from `src/data/sitemap.ts` → `scripts/inject-meta.ts`, NOT `prerender.ts` (skipped on Vercel — no Chromium). _(The remaining ~26 non-internally-linked non-prerendered routes are out of scope; re-check only if a specific one is needed.)_
4. **Resolve the two cost-guide pages** (Skill 03/09): confirm intent; canonicalize the secondary to the primary if they overlap; ensure the live one is linked from `/journal` + pricing.
5. **Collapse vestigial `/blog` surface** (Skill 04): as a deliberate decision, remove `/blog` from `prerender.mjs` + `inject-meta.ts` and retire `BlogIndexPage.tsx` (everything 301s to `/journal`).

## Region-aware consent setup (documented future compliance task — DO NOT install now)
_Decision 2026-06-23: no global cookie banner now; do not change consent globally; do not reduce Indonesia/Bali tracking. Current state is legal-safe for our market and GA4 is collecting fine._

**If EEA / UK / Switzerland traffic becomes meaningful, implement a small, unobtrusive, region-aware consent banner or free/low-cost CMP connected to GTM Consent Mode.** Requirements:
1. Do **not** block Indonesia traffic (and other non-restricted regions) — keep full analytics there.
2. Do **not** apply denied consent globally.
3. Apply stricter consent (default `analytics_storage`/`ad_storage` = denied until opt-in) **only** for EEA/UK/CH visitors.
4. Keep the banner minimal and unobtrusive (small, dismissible, region-gated).
5. Use **GTM Consent Mode v2** properly (consent default + update; tags gated on consent).
6. Preserve as much analytics/conversion data as legally and technically possible (Consent Mode modeling, region scoping).
7. Do **not** install anything now unless there is a clear compliance reason (meaningful restricted-region traffic).

_Candidate free/low-cost CMPs that support Google Consent Mode + region scoping: Google's own consent banner (via Tag Manager templates), CookieYes, Cookiebot (free tier), Klaro, Osano. Evaluate when needed._

## Then (only after the above)
- Internal-linking sweep for orphaned money pages (Skill 09).
- Conversion-flow mobile pass on top commercial pages (Skill 11).
- Low-profile trust/updates content on `/journal` only if genuinely useful (per founder guidance) — routed correctly, no noisy widgets.

_Rule: pick from the top; run the named skill; verify; commit; update `CHANGELOG_CONTROL.md` and this file._
