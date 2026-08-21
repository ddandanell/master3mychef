# 02 — Build debugging (Vite on Vercel)

This site is **Vite + React**, not Next.js. The filename is historical so CI does not break.

Common failures:

- Missing import or wrong path casing (Linux CI is case-sensitive)
- Dependency missing from `package.json`
- `window` / `document` during prerender
- TypeScript error from `tsc -b`
- Playwright/Chromium missing (local `pnpm build` and GitHub Actions install it; Vercel’s own build image cannot prerender)
- Env var missing for `api/send-email.ts` (`SMTP_*`)
- Generated `vercel.json` / sitemap out of date because `prebuild` was skipped

Always read the first real error line. Fix the root cause. Do not rewrite the app to Next.js.
