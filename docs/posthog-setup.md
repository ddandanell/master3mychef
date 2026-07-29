# PostHog — setup state, how it works, what is left

Installed 30 Jul 2026. Project **458871** (`myCHEF.id`), US cloud, org `Mehomypg`.

Dashboard: <https://us.posthog.com/project/458871/dashboard/1926526>

---

## 1. Do this first — the deploy will fail without it

`posthog-js` was added to `package.json` but **could not be installed from the
Cowork sandbox** (the Linux sandbox has no write access to the pnpm store on
this mount). Two consequences:

- `pnpm-lock.yaml` does not contain `posthog-js`.
- Vercel's CI install runs pnpm with `--frozen-lockfile`, which **fails hard**
  on a lockfile that disagrees with `package.json`
  (`ERR_PNPM_OUTDATED_LOCKFILE`).

So, locally:

```bash
cd "/Users/openclaw/Movies/LIve website/master3mychef"
pnpm install          # installs posthog-js AND updates pnpm-lock.yaml
pnpm build            # confirm the build passes
```

Commit **both** `package.json` and `pnpm-lock.yaml`. Until `pnpm install` has
run, `pnpm dev` also fails with `Cannot find module 'posthog-js'`.

Nothing has ever been ingested (`ingested_event: false` at time of writing).
Every insight below stays empty until a deploy carrying `posthog-js` is live.

---

## 2. What was changed in the codebase

| File | Change |
| --- | --- |
| `src/lib/posthog.ts` | **New.** Init, PII scrubbing, replay masking, exclusion filter. |
| `src/main.tsx` | Calls `initPostHog()` before render, after `syncAnalyticsOptOut()`. |
| `src/lib/analytics.ts` | PostHog added as a fourth sink inside `trackEvent()`. |
| `src/components/QuoteFunnel.tsx` | Emits `quote_step_viewed` per step; calls `trackFormStart`. |
| `package.json` | `posthog-js@^1.408.0`. |
| `.env.example` | Documents `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST`. |

### Why PostHog sits inside `trackEvent()`

`trackEvent()` already fanned out to GA4, the GTM dataLayer and Vercel. PostHog
was added as a fourth sink there, so **every existing call site reports to it
without being touched**.

The Vercel and PostHog branches are deliberately asymmetric:

- **Vercel** is filtered down hard — `toVercelEvent()` drops high-frequency
  engagement events and trims to 2 properties, because Vercel bills per event
  and silently discards properties past the plan ceiling.
- **PostHog** receives everything, untrimmed. There is no property ceiling, and
  `scroll_depth` / `time_on_page` are precisely the signals that separate "read
  the page and left" from "couldn't find the price and left".

### The `POSTHOG_API_KEY` already in `.env.local` was never in effect

Two entries existed: one set to the literal `***`, one empty. Neither carried
the `VITE_` prefix, so **neither was ever visible to browser code** under Vite.
They can be deleted. The live key is `VITE_POSTHOG_KEY`, and it is a
write-only public project key (`phc_…`) — safe in the bundle, exactly like the
GA4 measurement ID in `index.html`. Never put a personal API key (`phx_…`)
there.

---

## 3. The gap this closed (the actual finding)

**The 9-step quote funnel emitted exactly one event** — `quote_submitted`, on
the final step. Anyone who started the funnel and gave up was indistinguishable
from someone who never opened it, in all four analytics sinks. The single most
valuable question about the highest-intent page on the site had no answer.

`quote_step_viewed` now fires per step with `step_number`, `step_index`,
`step_title` and `service_type`. That builds the 10-stage drop-off funnel, and
pairing a step with `$rageclick` / `$dead_click` on the same step distinguishes
**reluctance** ("won't give you my villa address") from **confusion** ("can't
work out how to answer"). The fixes for those are opposite, which is why the
distinction matters.

Also noted: `trackFormStart` and `trackFormComplete` existed in
`src/lib/analytics.ts` but had **zero call sites** anywhere in `src/`. The quote
funnel now calls `trackFormStart`. `BookingForm`, `BookingFormCatering`,
`BarServiceEnquiryForm` and `ContactPage` still do not — see §7.

---

## 4. Project settings applied

| Setting | Was | Now | Why |
| --- | --- | --- | --- |
| `timezone` | `UTC` | `Asia/Makassar` | Bali is UTC+8. On UTC, "confusion by hour of day" is wrong by 8 hours. |
| `base_currency` | `USD` | `IDR` | Pricing and `ESTIMATED_LEAD_VALUE_IDR` are rupiah. |
| `capture_dead_clicks` | `false` | `true` | The primary automatic confusion signal. Was off. |
| `autocapture_exceptions_opt_in` | unset | `true` | Turns uncaught JS errors into tracked issues. |
| `autocapture_web_vitals_opt_in` | unset | `true` | Slow pages lose leads. |
| `heatmaps_opt_in` | unset | `true` | Click/scroll maps per page. |
| `week_start_day` | unset | Monday | |
| `name` | `Default project` | `myCHEF.id` | |
| `product_description` | null | full business description | Feeds PostHog's own AI the business model, so it stops assuming a checkout exists. |

Already correct and left alone: `session_recording_opt_in`,
`capture_console_log_opt_in`, `capture_performance_opt_in`,
`session_recording_masking_config.maskAllInputs`.

Replay retention is **30 days** — the shortest option. Anything older is gone.
Raise it in project settings if you want longer trend comparisons; it costs more.

---

## 5. Privacy posture — read before turning on anything else

The site collects real PII on the quote funnel, booking forms and contact page:
names, emails, phone numbers, villa addresses.

Three layers, all client-side (masked data never leaves the browser):

1. `maskAllInputs: true`, set on **both** the project and in `posthog.init`.
   Both, because the project-level default does not mask `<textarea>`, which is
   where "special requests" free text lands.
2. `scrubProperties()` in `src/lib/posthog.ts` strips anything matching an
   email or phone pattern from every string property, including
   `$current_url` / `$referrer`. This catches a form that GETs values into the
   querystring, which input masking alone would not.
3. `person_profiles: 'identified_only'` and **no `posthog.identify()` call
   anywhere**. Every visitor stays anonymous. Calling `identify()` with a
   customer email would make this a materially different legal question — don't,
   without deciding that deliberately.

Add the class `ph-no-capture` to any element that must never be recorded. It
excludes it from session replay **and** autocapture.

### Two things still outstanding, and they are yours to decide

- **There is no cookie/consent banner on the site.** `grep` found no consent
  component — only `PrivacyPage` and `TermsPage`. Session replay of EU visitors
  without consent is the real exposure here, and masking reduces but does not
  eliminate it. I have not added a banner because it is a legal/UX decision with
  a conversion cost, not a technical one.
- **`PrivacyPage` does not mention PostHog or session recording.** If it lists
  the tools you use, it is now out of date.

---

## 6. Automated analysis

### Scout — `signals-scout-mychef-conversion-blockers`

A PostHog Scout: a scheduled agent that runs **on PostHog's infrastructure**,
not in a Cowork session. It queries the funnel and confusion signals, then
AI-summarizes up to 5 real recordings per candidate pattern to confirm or kill
it before emitting a finding.

Scheduled Mondays 09:00 Asia/Makassar. **Currently `enabled: false`.**

Two reasons it is off:

1. There is no data yet. It would find nothing.
2. Scout runs cost money, and session summaries call an AI model
   (~5 min per first-time summary; results are then cached).

Turn it on once you have roughly two weeks of real traffic:
<https://us.posthog.com/project/458871/settings/environment-scouts>

It can post findings to Slack — needs a Slack integration on the project first.

### On "go through each video automatically"

Worth being precise, because it changes what you should expect:

- PostHog's session summaries **do not watch pixels**. They read the structured
  event stream of a recording — pageviews, clicks, inputs, scrolls, errors — and
  describe what happened. That is why they are fast enough to run in bulk, and
  it is genuinely what you asked for.
- **Replay Vision**, PostHog's continuous AI scanner that rates frustration
  across every session, is in beta and its tools are **not available on this
  project**. If you want it, request beta access; the Scout above is the
  working substitute until then.
- Summaries are only as good as the instrumentation. This is why §3 mattered
  more than any dashboard: a summarizer reading nine anonymous clicks cannot
  tell you which funnel step failed, but one reading `quote_step_viewed` with a
  `step_title` can.

---

## 7. Next, in priority order

1. **`pnpm install`, commit the lockfile, deploy.** Nothing works until this.
2. **Verify ingestion.** Load mychef.id, then check
   <https://us.posthog.com/project/458871/activity/explore>. Expect
   `$pageview`, `$autocapture`, and a `quote_step_viewed` after touching
   `/quote`. If nothing arrives, the cause is almost always an ad blocker —
   see item 4.
3. **Instrument the remaining forms.** `trackFormStart` / `trackFormComplete`
   still have no call sites in `BookingForm`, `BookingFormCatering`,
   `BarServiceEnquiryForm` or `ContactPage`. Wiring them gives those forms the
   same abandonment visibility the quote funnel now has. Cheap, high value.
4. **Consider a reverse proxy.** Ad blockers block `us.i.posthog.com` by
   default, and affluent Western travellers are a high-ad-blocker audience — you
   may be losing a material fraction of sessions. A Vercel rewrite
   (`/ingest/*` → PostHog) recovers them. Deliberately **not** done yet: a
   misconfigured proxy is the most common way a PostHog install fails silently,
   and it should be added only once you have a known-good direct baseline to
   compare against.
5. **Exclude your own traffic.** Visit `https://mychef.id/?va-disable=1` once
   per browser you use. This already excludes you from Vercel Analytics; it now
   excludes you from PostHog too, including replay.
6. **Playwright.** The E2E suite targets production. `navigator.webdriver`
   filtering keeps it out, which matters far more for PostHog than for Vercel —
   without it every test run would produce real session recordings and burn
   replay quota. Do not remove that check in `analytics-privacy.ts`.

---

## 8. Unrelated uncommitted changes in the working tree — not mine

`git status` also shows modifications to `vercel.json`, `public/_redirects` and
`src/data/redirects.ts`. These are **not part of the PostHog work.** They are a
redirect-chain collapse for `/corporate-events-catering-bali`, annotated
`Collapsed 2026-07-29 (autopilot)` — pre-existing work from another session.

They look coherent, but review them on their own merits. **Do not `git add -A`**
and ship them unreviewed alongside this.
