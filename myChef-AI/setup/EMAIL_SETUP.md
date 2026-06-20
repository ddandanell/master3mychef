# setup/EMAIL_SETUP.md — The Daily Report Email

**You asked: "I don't know what the email is."** Here's the plain answer.

## What "the email" actually is — two separate things
1. **The destination address** — the inbox where *you* receive Peter's **Daily Learning Report**
   every night (e.g. what worked today, what Peter still needs, conversion rate). This is just an
   email address you already own (e.g. `daviddandanell@gmail.com` or `hello@mychef.id`).
2. **The sender service** — a tool that actually *delivers* that email from the server. A server
   can't reliably send email by itself (it lands in spam). So we use a "transactional email"
   provider that does it properly. You don't log into it daily — it just runs.

> So when the docs say "email is set up in the database," it means: the **destination address**
> is stored as a setting, and the **sender service's API key** is stored as a secret. That's it.

## Recommended sender service
- **Resend** (resend.com) — simplest, modern, generous free tier. *(Recommended.)*
- Alternatives: **SendGrid**, **Postmark**, or your own **SMTP** (e.g. Google Workspace).
- All do the same job. Pick one; it's a 10-minute signup.

## Setup steps (Hermes does this)
1. Sign up for Resend (or chosen provider).
2. **Verify the sending domain** — add a couple of DNS records to `mychef.id` so emails come from
   `peter@mychef.id` and don't hit spam. (Provider gives exact records.)
3. Copy the **API key** into the server's `.env`:
   ```
   EMAIL_PROVIDER="resend"
   EMAIL_API_KEY="re_..."          # the sender service key
   REPORT_EMAIL_FROM="peter@mychef.id"
   REPORT_EMAIL_TO="<your address>"   # the destination — see Q-011
   ```
4. The nightly loop builds the report (template already in `SYSTEM_SETUP_REQUIREMENTS.md` →
   "Generate Daily Report") and sends it at 23:30 UTC.

## How to test it works
- Hermes triggers a one-off send ("send test report now"). You should get an email within a minute.
- If it lands in spam: the domain verification (step 2) isn't complete.

## What we need from you
- **Q-011** in `QUESTIONS_FOR_DAVID.md`: which address should receive the daily report?
- Confirmation we can add DNS records to `mychef.id` (or who manages your domain).

---
### One-line version
"The email" = the address that gets your nightly report (you pick it) + a small free service
(Resend) that sends it reliably. Hermes wires both; you just tell us the address.
