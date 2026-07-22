# SEO Cleanup Plan

## Global Constraints (MANDATORY)
- **NO URL changes.** Do not modify any routes, redirects, canonical URLs, sitemap entries, or vercel.json redirects.
- Do not change page slugs, file names, or the public URL structure.
- Only update on-page text (titles, meta descriptions) and internal link `href`/`src` attributes.
- All changes must preserve the existing keyword focus and intent.

## Task 1: Trim over-length titles and meta descriptions
- Audit all pages in `src/pages/**/*.tsx` and components that set page meta.
- Identify titles longer than 70 characters and meta descriptions longer than 160 characters.
- Trim them to ≤70 chars (titles) and ≤160 chars (descriptions) while keeping the primary keyword near the front.
- Prioritize the 76 flagged pages from the SEO audit (mostly `/private-chef/[area]`, `/locations/[area]`, and chef profile pages).
- Do not change the `metaKey`, `route`, `canonical`, or any URL-related fields.

## Task 2: Replace internal redirect links with canonical targets
- Use `src/data/redirects.ts` and `vercel.json` as the source of truth for redirect mappings.
- Find internal `href`/`src` attributes in `src/` that point to source URLs (e.g. `/about`, `/berawa`, `/blog/...`) and update them to point to the canonical destination URLs (e.g. `/fine-dining/our-chefs`, `/locations/canggu`, `/journal/...`).
- Do not remove or change any redirect rules themselves — they must remain for external/backward compatibility.
- Only change source links; leave canonical destinations and existing canonical/og:url values untouched.

## Task 3: Add prerender validation guard
- Create or extend a post-prerender validation script that fails the build if any prerendered `dist/<route>/index.html` still contains `<div id="root"></div>` as the only body content (i.e., prerender was skipped).
- The script should check a sample of critical routes (homepage, /bar-services/, /catering/, /fine-dining/, /events/, /contact/, a few location pages) and assert each has at least one `<h1>` and rendered body text.
- Wire it into `npm run build` / postbuild so a skipped prerender causes a non-zero exit.
- The check must not modify URLs or content; it is a build-time safety net only.

## Verification
- `npm run build` must pass locally with prerender 281/281 routes.
- The new validation script must pass on the prerendered dist.
- Live deployment via `vercel build --prod && vercel --prod --prebuilt --yes` must serve prerendered HTML.
