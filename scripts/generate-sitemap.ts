#!/usr/bin/env tsx
/**
 * Generate XML sitemap with all prerendered pages
 * 
 * Creates sitemap.xml in dist/ with proper lastmod dates
 * Helps Google discover all 18 prerendered pages
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://mychef.id';

// All 18 prerendered pages with priority hints
const URLS = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/fine-dining', priority: 0.9, changefreq: 'weekly' },
  { path: '/catering', priority: 0.9, changefreq: 'weekly' },
  { path: '/events', priority: 0.9, changefreq: 'weekly' },
  { path: '/events/villa-parties', priority: 0.8, changefreq: 'weekly' },
  { path: '/events/weddings-bali', priority: 0.8, changefreq: 'weekly' },
  { path: '/fine-dining/private-chef-bali', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.8, changefreq: 'weekly' },
  { path: '/chefs', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/seminyak', priority: 0.8, changefreq: 'weekly' },
  { path: '/canggu', priority: 0.8, changefreq: 'weekly' },
  { path: '/ubud', priority: 0.8, changefreq: 'weekly' },
  { path: '/uluwatu', priority: 0.8, changefreq: 'weekly' },
  { path: '/nusa-dua', priority: 0.8, changefreq: 'weekly' },
  { path: '/jimbaran', priority: 0.8, changefreq: 'weekly' },
];

function generateSitemap(): string {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const urlEntries = URLS.map(({ path, priority, changefreq }) => `  <url>
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
  const distPath = path.join(__dirname, '../dist/sitemap.xml');
  const publicPath = path.join(__dirname, '../public/sitemap.xml');

  // Write to dist (prerendered output)
  fs.writeFileSync(distPath, sitemap, 'utf-8');
  console.log(`✅ Created: ${distPath}`);

  // Write to public (dev server)
  fs.writeFileSync(publicPath, sitemap, 'utf-8');
  console.log(`✅ Created: ${publicPath}`);

  console.log(`\n📊 Sitemap stats:`);
  console.log(`   URLs: ${URLS.length}`);
  console.log(`   Size: ${(sitemap.length / 1024).toFixed(1)} KB`);
  console.log(`\n🌐 Sitemap URL: ${SITE_URL}/sitemap.xml`);
  console.log(`\n✅ Sitemap generation complete!`);
}

main().catch(console.error);
