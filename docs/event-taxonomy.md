# MyChef first-party event taxonomy

Source of truth for what Neon accepts via `POST /api/collect` (`lib/ingest.ts` allowlist).
GA4 and PostHog may see additional events; only names below are guaranteed in Postgres.

## Identity on every event

| Field | Meaning |
|-------|---------|
| `lead_ref` | Stable visitor key `MC-XXXXXX` |
| `session_id` | Client session UUID |
| `page_path` | Path without sensitive query params |
| `service_area` | Mapped service line |
| UTM / click ids | Acquisition |
| device / geo | From UA + Vercel headers (no raw IP) |
| `metadata` | JSONB extras (form_id, step, guests, …) |

## Core journey

`page_view`, `session_start`, `first_visit`, `scroll_depth`, `time_on_page`, `page_heartbeat`, `cta_click`, `outbound_click`, `file_download`, `whatsapp_click`, `phone_click`, `form_submit`, `session_end`, `view_search_results`, `user_engagement`

## MyChef business

`form_start`, `form_abandon`, `quote_step_viewed`, `quote_submitted`, `quote_addon_selected`, `exit_intent_shown`, `concierge_opened`, `service_view`, `pricing_view`, `menu_view`

## Money (not collect events)

Bookings are written only via authenticated `POST /api/ops-sales`. Do not invent `deposit_paid` / `booking_cancelled` until a payment webhook exists.
