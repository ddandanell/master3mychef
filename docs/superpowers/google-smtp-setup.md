# Google SMTP Setup for mychef.id Contact Forms

Contact-form submissions from the website are sent through the `api/send-email.ts` serverless function using **nodemailer** and Google's SMTP servers.

## Required environment variables

| Variable   | Value for `bali@mychef.id` | Notes |
|------------|----------------------------|-------|
| `SMTP_HOST` | `smtp.gmail.com` | Google's SMTP host. |
| `SMTP_PORT` | `587` | Uses STARTTLS (`secure: false`). |
| `SMTP_USER` | `bali@mychef.id` | The Google Workspace / Gmail account that authenticates. |
| `SMTP_PASS` | `<16-character App Password>` | Generate this below. **Not your regular Google password.** |
| `SMTP_TO` | `bali@mychef.id` | Where form enquiries are delivered. |

## How to generate the App Password

1. **Enable 2-Step Verification** on the Google account behind `bali@mychef.id`.
   - Go to [Google Account → Security → 2-Step Verification](https://myaccount.google.com/security).
   - Follow the prompts to turn it on.

2. **Generate an App Password**:
   - Visit [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
   - Select **Mail** and the device you are using (e.g., "Other" → type `mychef.id website`).
   - Click **Generate**.
   - Google will show a 16-character password such as `abcd efgh ijkl mnop`.

3. **Copy the App Password** immediately — Google will not show it again.

## Where to set the variables

### Production / Vercel

1. Open the Vercel dashboard for the `mychef.id` project.
2. Go to **Settings → Environment Variables**.
3. Add each variable from the table above.
4. Redeploy the project so the new values are available to the serverless function.

### Local development

Copy the relevant lines from `.env.example` into `.env.local` and fill in the real App Password:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bali@mychef.id
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_TO=bali@mychef.id
```

> Never commit `.env.local`. It is already ignored by `.gitignore`.

## Security notes

- MyChef never stores the Google password or App Password in source code.
- The only password reference is in environment variables and the example file uses a placeholder.
- If the SMTP variables are missing, `api/send-email.ts` logs a clear error and returns `500 Email service is not configured`.

## Forms that use this handler

- `src/pages/ContactPage.tsx` — general contact form
- `src/components/bar-services/BarServiceEnquiryForm.tsx` — B2B bar-services enquiry form
