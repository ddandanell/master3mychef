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
import { JOURNAL_POSTS } from '../src/data/siteArchitecture';

import { REDIRECTS } from '../src/data/redirects';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://mychef.id';

// Build URL entries from the dynamic SITEMAP
const URLS: { path: string; priority: number; changefreq: string }[] = [
  ...SITEMAP.map((entry: SitemapEntry) => ({
    path: entry.path,
    priority: entry.priority,
    changefreq: entry.changefreq,
  })),
  // Journal post URLs (individual journal entries under /journal/)
  ...JOURNAL_POSTS.map((post) => ({
    path: `/journal/${post.slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
  })),
];

// Fjern redirects fra sitemap
const REDIRECT_PATHS = new Set(REDIRECTS.map(r => r.from));
const FILTERED_URLS = URLS.filter(url => !REDIRECT_PATHS.has(url.path));

// Deduplicate by path (sitemap already includes journal posts, but this ensures no duplicates)
const seen = new Set<string>();
const UNIQUE_URLS = FILTERED_URLS.filter((url) => {
  const key = url.path;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

function generateSitemap(): string {
  // TODO: Improve lastmod by using actual content dates where available.
  // SITEMAP entries carry a `date` field for blog posts, guides, journal posts,
  // and landing pages (e.g. entry.date). JOURNAL_POSTS also expose post.date.
  // Ideal approach: pass the date through the URL pipeline and use it here as
  // lastmod, falling back to the build date for pages without a content date.
  // Keeping the build date for now is safe and avoids stale-date issues.
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const urlEntries = UNIQUE_URLS.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`).join('\n');

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
