Next.js debugging rules:

Common Vercel build failures:
- missing import
- wrong file path casing
- dependency missing from package.json
- server-only code used in client component
- window/document used during server render
- missing environment variable
- TypeScript error
- invalid metadata export
- dynamic route error
- image domain not configured
- API route runtime mismatch
- package works locally but fails on Linux because of case-sensitive paths

Always check exact error line first.
Fix the root cause, not the symptom.
Avoid broad rewrites.
