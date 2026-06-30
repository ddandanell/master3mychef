Environment variable rules:
- Never rename env vars without approval.
- Never hardcode secrets.
- Never expose server secrets to client-side code.
- Client-visible variables must use the correct public prefix for the framework.
- If a new env var is required, document:
  - exact name
  - where it is used
  - whether it is required in local, preview, production
  - what happens if missing
