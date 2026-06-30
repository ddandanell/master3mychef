Vercel deployment safety rules:

Before deployment, check:
- package.json scripts
- build command
- framework version
- next.config.js or equivalent config
- vercel.json if present
- environment variable usage
- API routes
- server/client component boundaries
- redirects and rewrites
- image configuration
- dynamic routes
- sitemap and robots.txt

Required checks:
- npm install or npm ci
- npm run build
- npm run lint if available
- npm run typecheck if available

Never say a Vercel issue is fixed until the build command is verified or the user is told exactly how to verify it.
