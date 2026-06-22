# Skill 06 — Google Tracking Audit

**Purpose:** Verify analytics fire once, correctly, and are not blocked. Do NOT change tracking blindly — measure first.

**When to use:** Any sprint touching `index.html`, CSP, GTM, GA4, or conversion events.

## Current state (verified 2026-06-23)
- `index.html` contains **both** GTM (`GTM-KCBNZBL9`) and GA4 (`G-W0PQH8ZKTF` via gtag).
- History: `0d507c8` migrated GA4→GTM and removed duplicate pageview tracking; `4aadd1e`/`59097a9` fixed CSP to allow googletagmanager + google-analytics.
- ⚠️ **Open risk:** GTM and a hardcoded gtag both present can double-count pageviews if GTM also contains a GA4 tag. MUST be verified in GA4 DebugView / GTM preview before any change.

## Checklist
1. `grep -oE "GTM-[A-Z0-9]+|G-[A-Z0-9]+|gtag|googletagmanager" index.html | sort -u`.
2. Confirm exactly ONE GA4 measurement path (either hardcoded gtag OR a GA4 tag inside GTM — not both firing).
3. CSP (`vercel.json` headers / meta): must allow `googletagmanager.com`, `google-analytics.com`, `*.analytics.google.com`.
4. GSC verification token present (meta or DNS) — do not remove.
5. Conversion events (WhatsApp click, form submit, `data-source`) fire once per action.

## Verification
- GA4 DebugView shows 1 page_view per navigation (no doubles).
- GTM Preview shows tags firing on the right triggers.
- Network: gtag/collect requests not CSP-blocked.

## Output
"Tracking: GTM=<id>, GA4=<id>, double-fire=verified-no/SUSPECTED, CSP=ok, GSC token=present. Changes: none unless double-fire confirmed."
