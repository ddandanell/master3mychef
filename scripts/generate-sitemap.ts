#!/usr/bin/env tsx
/**
 * Generate XML sitemap with all prerendered pages
 * 
 * Creates sitemap.xml in dist/ with proper lastmod dates
 * Uses the dynamic SITEMAP from src/data/sitemap as the source of truth
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SITEMAP, type SitemapEntry } from '../src/data/sitemap';
import { JOURNAL_POSTS } from '../src/data/content/journalPosts';

import { REDIRECTS } from '../src/data/redirects';
import { SITEMAP_LASTMOD } from '../src/data/sitemap-lastmod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://mychef.id';

// Build URL entries from the dynamic SITEMAP
const URLS: { path: string; priority: number; changefreq: string; lastmod?: string }[] = [
  ...SITEMAP.map((entry: SitemapEntry) => ({
    path: entry.path,
    priority: entry.priority,
    changefreq: entry.changefreq,
    lastmod: entry.date,
  })),
  // Journal post URLs (individual journal entries under /journal/)
  ...JOURNAL_POSTS.map((post) => ({
    path: `/journal/${post.slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: post.date,
  })),
];

// Noindex utility pages must NOT be in the sitemap (§2.2.2 — sitemap = indexable URLs only).
// They are still served (inject-meta) with a noindex tag; they just don't belong here.
// Must stay in sync with `noindexFollowPaths` / `noindexNoFollowPaths` in scripts/inject-meta.ts.
// A URL that is noindex must never appear here — that contradiction is what D-022 fixed for /calculator.
const NOINDEX_PATHS = new Set(['/404', '/book', '/calculator', '/join-our-team', '/quote', '/ops']);

// Bar-services is an unproven test line with no clients (owner, 2026-07-28). All 21 of
// its URLs sat in GSC "Discovered - currently not indexed", consuming crawl budget the
// /private-chef/{area} pages need — 57 of those 61 are unindexed on a DR-23 domain.
// Excluded from sitemap.xml ONLY. The pages stay in SITEMAP so inject-meta and prerender
// still generate their static HTML — removing them there made every bar URL 404.
// Reverse by deleting this filter.
// 2026-08-21: bar-services re-included in the sitemap. The pages are a live revenue
// service line, are already crawled via nav links, and were sitting in GSC
// "crawled - currently not indexed" partly for lacking a sitemap signal. Owner wants
// them indexed. (To re-exclude for crawl budget, restore the isBarServices filter.)

// Fjern redirects fra sitemap
const REDIRECT_PATHS = new Set(REDIRECTS.map(r => r.from));
const FILTERED_URLS = URLS.filter(url => !REDIRECT_PATHS.has(url.path) && !NOINDEX_PATHS.has(url.path));

// Deduplicate by path (sitemap already includes journal posts, but this ensures no duplicates)
const seen = new Set<string>();
const UNIQUE_URLS = FILTERED_URLS.filter((url) => {
  const key = url.path;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

function generateSitemap(): string {
  // Only emit <lastmod> when we have a REAL per-page content date. Previously every
  // page without a date got the build date (new Date()), so 149 pages falsely claimed
  // "changed today" on every deploy — an unreliable freshness signal that erodes crawl
  // trust and wastes crawl budget (Blueprint §2.2.3). Omitting is better than lying.
  const urlEntries = UNIQUE_URLS.map(({ path, priority, changefreq, lastmod }) => {
    // Real content date (B) → frozen spread date for existing undated pages (C-lite,
    // src/data/sitemap-lastmod.ts) → omit for anything else, incl. future new pages (A).
    const lm = lastmod || SITEMAP_LASTMOD[path];
    return `  <url>
    <loc>${SITE_URL}${path}</loc>${lm ? `\n    <lastmod>${lm}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function main() {
  console.log('🗺️  Generating sitemap.xml\n');

  const sitemap = generateSitemap();
  const publicPath = path.join(__dirname, '../public/sitemap.xml');

  // Write to public/ — vite automatically copies public/ into dist/ during build
  fs.writeFileSync(publicPath, sitemap, 'utf-8');
  console.log(`✅ Created: ${publicPath}`);

  console.log(`\n📊 Sitemap stats:`);
  console.log(`   URLs: ${UNIQUE_URLS.length}`);
  console.log(`   Size: ${(sitemap.length / 1024).toFixed(1)} KB`);
  console.log(`\n🌐 Sitemap URL: ${SITE_URL}/sitemap.xml`);
  console.log(`\n✅ Sitemap generation complete!`);
}

main().catch(console.error);
