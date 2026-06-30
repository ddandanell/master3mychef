## Pull Request Checklist

Before requesting review, confirm the following:

### AI Skills Compliance
- [ ] I read the relevant files in `/ai-skills/` before making changes.
- [ ] My change follows the rules in `00-master-rules.md` and `01-vercel-deployment-safety.md`.
- [ ] I did not delete routes, pages, APIs, metadata, sitemap, robots.txt, or redirects without explaining the impact.
- [ ] I did not rename environment variables without approval.

### Build & Verification
- [ ] `npm run build` passes locally.
- [ ] `npm run lint` passes (if available).
- [ ] `npm run typecheck` passes (if available).
- [ ] No new warnings were introduced.

### Vercel Safety
- [ ] This PR targets a feature branch, not `main` directly.
- [ ] Vercel Preview deployment will be used before production.
- [ ] Changed routes were checked.
- [ ] Homepage, landing pages, and forms still work.

### SEO & Routes Protection
- [ ] Existing URLs were not broken.
- [ ] Metadata titles/descriptions were preserved where applicable.
- [ ] Sitemap and robots.txt were not damaged.
- [ ] Internal links and CTAs still work.

### Description
- What changed:
- Why it changed:
- How it was tested:
- Risk level (Low / Medium / High):
