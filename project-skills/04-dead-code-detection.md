# Skill 04 — Dead Code Detection

**Purpose:** Prove whether a file is live before spending effort on it. Editing dead code = wasted work (e.g. `BlogPage.tsx` was edited/reverted twice before deletion).

**When to use:** Before editing or deleting any page/component, especially anything blog/legacy.

## A file is LIVE only if ALL are true
1. **Imported:** `grep -rn "<ComponentName>" src/App.tsx` (or a parent) shows an import.
2. **Routed:** a `<Route ... element={<Component/>}>` exists in `src/App.tsx`.
3. **Not redirect-shadowed:** the route's path is NOT 301'd away in `vercel.json` / `public/_redirects` / `src/data/redirects.ts`. (e.g. `/blog` → `/journal` makes `BlogIndexPage` vestigial.)
4. **Built/served:** appears in `scripts/prerender.mjs` route list OR is reachable at runtime, and resolves 200 (not a redirect/404) in the browser.

## Checklist
1. Confirm import + route.
2. Check redirect tables for the path.
3. Load the live URL; record the FINAL url + status (redirect target reveals shadowing).
4. If unrouted AND unimported → dead. Safe to delete; verify build after.

## Verification
- Build (`tsc -b` exit 0 + Vercel READY) after deletion proves nothing depended on it.

## Output
"<file>: imported=Y/N routed=Y/N redirect-shadowed=Y/N live-status=200/301/404 → LIVE / DEAD. Action: <edit/delete/document>."
