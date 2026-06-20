# setup/VPS_SETUP.md — Always-On Server

**Audience:** Hermes (developer). **Plain-English summary for David at the bottom.**

## Why a VPS (not your Mac)
Peter must answer customers 24/7 on WhatsApp, Messenger, and the website. If he runs on David's
Mac, customers get no reply whenever the laptop is closed or asleep. A **VPS** (Virtual Private
Server — a small computer in a data centre that never turns off) keeps Peter, the database, the
nightly loop, and the panel running around the clock.

## Recommended spec (starting point)
- **Provider:** DigitalOcean / Hetzner / Vultr (any Ubuntu VPS works).
- **Size:** 2 vCPU, 4 GB RAM, 80 GB SSD to start (~$20–30/mo). Scale up later.
- **OS:** Ubuntu 22.04 LTS.
- **If running DeepSeek locally** (see `QUESTIONS_FOR_DAVID.md` Q-009): a GPU server is required —
  otherwise use the DeepSeek cloud API and a normal VPS is fine.

## Services that run on it (always on)
| Service | What it is | Keep alive with |
|---------|-----------|-----------------|
| PostgreSQL | the database (shared with the CRM) | systemd / managed DB |
| API server | Node.js/FastAPI — receives messages, calls Peter | `pm2` or systemd |
| Peter worker | builds prompts, calls the LLM | same API process or a worker |
| Channel webhooks | WhatsApp / Messenger / website / Telegram in | part of API server |
| Nightly Hermes loop | learning + daily email | `cron` (see `CONTROL_PANEL.md` §6: 23:00 UTC) |
| Feedback panel | David's login site | `pm2` / served behind nginx |
| nginx | reverse proxy + HTTPS (Let's Encrypt) | systemd |

## Install order (high level)
1. Create the VPS, add David's + Hermes's SSH keys, disable password login, enable `ufw` firewall
   (allow 22, 80, 443 only).
2. Install: `nodejs` (LTS), `postgresql`, `nginx`, `certbot`, `pm2` (global).
3. Create the database + run the schema from `SYSTEM_SETUP_REQUIREMENTS.md` (+ the new `settings`
   and `calendar_events` tables — see `setup/DATABASE_AND_CRM_CONNECTIONS.md`).
4. Deploy the API + panel, set `pm2 startup` so they auto-restart on reboot.
5. Point `mychef.id` (or a subdomain like `panel.mychef.id` and `chat.mychef.id`) at the VPS,
   issue HTTPS certs with certbot.
6. Add the cron entry for the nightly loop.
7. Set up backups (below).

## Environment variables
All secrets live in a single `.env` on the VPS (never committed to git). The full list is in
`SYSTEM_SETUP_REQUIREMENTS.md` → "Environment Variables Required", plus:
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_OPERATOR_CHAT_ID` (operator alerts — see `FEEDBACK_APP_SPEC.md`)
- `PANEL_LOGIN_USER`, `PANEL_LOGIN_PASSWORD_HASH` (panel auth)

## Backups
- **Daily** Postgres dump at 02:00 UTC, encrypted, off-server (S3 or provider snapshots).
- **30-day** rolling retention. Test a restore once before go-live.

## Health & safety
- `pm2` auto-restarts crashed processes; `pm2 logs` for debugging.
- Add a simple `/health` endpoint and an uptime check (e.g. UptimeRobot) that alerts Telegram.
- Rate-limit the public message endpoints to prevent abuse.

---
### Plain-English summary for David
A VPS is just "a computer in the cloud that never sleeps." We rent a small one (~$20–30/month),
and it runs Peter, the database, your feedback site, and the nightly learning — all the time, so
customers always get an answer. You don't manage it; Hermes sets it up and it auto-restarts itself.
**What we need from you:** answers to Q-008 (do you have a VPS / can Hermes get access?) in
`QUESTIONS_FOR_DAVID.md`.
