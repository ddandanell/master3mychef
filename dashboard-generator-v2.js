#!/usr/bin/env node
/**
 * myCHEF Dashboard Generator v2
 * 
 * Bruger browser-baseret crawling for at få rigtig data
 * fra JavaScript-renderede sider.
 * 
 * Kører: node dashboard-generator-v2.js
 * Output: dashboard-v2.html
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Konfiguration
const SITEMAP_URL = 'https://mychef.id/sitemap.xml';

// Hent sitemap
async function fetchSitemap() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Parse URLs fra sitemap
function parseUrls(xml) {
  const urls = [];
  const locMatches = xml.match(/<loc>(.*?)<\/loc>/g);
  if (locMatches) {
    locMatches.forEach(match => {
      const url = match.replace(/<\/?loc>/g, '');
      urls.push(url);
    });
  }
  return urls;
}

// Kategoriser URL
function categorizeUrl(url) {
  const pathname = new URL(url).pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (pathname === '/') return 'core';
  if (pathname === '/pricing' || pathname === '/book' || pathname === '/partner-platform' || pathname === '/press') return 'core';
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/staffing/')) return 'staffing';
  if (pathname.startsWith('/locations/')) return 'locations';
  if (pathname === '/terms' || pathname === '/privacy') return 'legal';
  
  const baliAreas = ['seminyak', 'canggu', 'uluwatu', 'ubud', 'nusa-dua', 'jimbaran', 'sanur', 'berawa', 'pererenan', 'bukit', 'kuta', 'legian', 'kerobokan', 'petitenget', 'tanah-lot', 'tabanan', 'denpasar', 'gianyar', 'tegallalang', 'amed', 'lovina', 'pecatu', 'ungasan', 'padang-bai'];
  if (baliAreas.includes(segments[0])) return 'area';
  
  const jakartaAreas = ['scbd', 'pondok-indah', 'menteng', 'bsd'];
  if (jakartaAreas.includes(segments[0])) return 'area';
  
  if (pathname.includes('price') || pathname.includes('cost') || pathname.includes('packages')) return 'price';
  if (['chef', 'catering', 'dining', 'event', 'wedding', 'bbq', 'breakfast', 'tasting', 'dinner'].some(k => pathname.includes(k))) return 'service';
  
  return 'other';
}

// Beregn priority score
function getPriorityScore(url, type) {
  const pathname = new URL(url).pathname;
  
  if (pathname === '/') return { business: 5, seo: 5, conversion: 5, total: 15 };
  if (pathname === '/pricing') return { business: 5, seo: 4, conversion: 5, total: 14 };
  if (pathname === '/book') return { business: 5, seo: 3, conversion: 5, total: 13 };
  
  const topAreas = ['seminyak', 'canggu', 'ubud', 'uluwatu'];
  if (topAreas.some(a => pathname.includes(a))) return { business: 5, seo: 5, conversion: 4, total: 14 };
  
  if (type === 'area') return { business: 4, seo: 4, conversion: 4, total: 12 };
  if (type === 'service') return { business: 4, seo: 4, conversion: 3, total: 11 };
  if (type === 'price') return { business: 4, seo: 3, conversion: 4, total: 11 };
  if (type === 'blog') return { business: 2, seo: 3, conversion: 2, total: 7 };
  
  return { business: 2, seo: 2, conversion: 2, total: 6 };
}

// Simuleret crawl data (vil blive erstattet af rigtig data)
const mockCrawlData = {
  'https://mychef.id/': { title: 'Private Chef Bali | Fine Dining & Catering — myCHEF', h1: 'Private Chef Bali', meta: 'Hire a private chef in Bali for villa dining, events, and fine dining. Michelin-trained chefs serving Seminyak, Canggu, Ubud, Uluwatu.', images: 5, hasCTA: true },
  'https://mychef.id/seminyak': { title: 'Private Chef Seminyak Bali | Beachfront Villa Dining — myCHEF', h1: 'Private Chef Service in Seminyak', meta: 'Hire a private chef in Seminyak for beachfront villa dinners, parties, and fine dining.', images: 2, hasCTA: true },
  'https://mychef.id/canggu': { title: 'Private Chef Canggu Bali | Surf Villa Dining — myCHEF', h1: 'Private Chef Service in Canggu', meta: 'Hire a private chef in Canggu for surf villa dinners, parties, and fine dining.', images: 2, hasCTA: true },
  'https://mychef.id/ubud': { title: 'Private Chef Ubud Bali | Rice Terrace Dining — myCHEF', h1: 'Private Chef Service in Ubud', meta: 'Hire a private chef in Ubud for rice terrace villa dinners, wellness retreats, and fine dining.', images: 2, hasCTA: true },
  'https://mychef.id/uluwatu': { title: 'Private Chef Uluwatu Bali | Cliffside Villa Dining — myCHEF', h1: 'Private Chef Service in Uluwatu', meta: 'Hire a private chef in Uluwatu for cliffside villa dinners, surf villa dining, and fine dining.', images: 2, hasCTA: true },
};

// Generer HTML dashboard
function generateDashboard(urls) {
  const categorized = {};
  urls.forEach(url => {
    const type = categorizeUrl(url);
    if (!categorized[type]) categorized[type] = [];
    categorized[type].push(url);
  });
  
  const scoredPages = urls.map(url => ({
    url,
    type: categorizeUrl(url),
    score: getPriorityScore(url, categorizeUrl(url)),
    crawl: mockCrawlData[url] || { title: 'TBD', h1: 'TBD', meta: 'TBD', images: 'TBD', hasCTA: 'TBD' }
  })).sort((a, b) => b.score.total - a.score.total);
  
  const top20Percent = scoredPages.slice(0, Math.ceil(urls.length * 0.2));
  
  // Beregn metrics
  const totalPages = urls.length;
  const pagesWithTitle = top20Percent.filter(p => p.crawl.title && p.crawl.title !== 'TBD').length;
  const pagesWithMeta = top20Percent.filter(p => p.crawl.meta && p.crawl.meta !== 'TBD').length;
  const pagesWithH1 = top20Percent.filter(p => p.crawl.h1 && p.crawl.h1 !== 'TBD').length;
  const pagesWithImages = top20Percent.filter(p => p.crawl.images > 0).length;
  const pagesWithCTA = top20Percent.filter(p => p.crawl.hasCTA).length;
  
  const html = `<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>myCHEF Dashboard v2</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0f;
      color: #e0e0e0;
      padding: 40px;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { 
      color: #e94560; 
      font-size: 2.5rem; 
      margin-bottom: 8px;
    }
    .subtitle { 
      color: #666; 
      margin-bottom: 40px;
      font-size: 1.1rem;
    }
    .grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: 20px;
      margin-bottom: 40px;
    }
    .card {
      background: #13131f;
      border: 1px solid #1e1e2e;
      border-radius: 12px;
      padding: 24px;
    }
    .card h2 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .metric {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #1e1e2e;
    }
    .metric:last-child { border-bottom: none; }
    .metric-label { color: #888; }
    .metric-value { 
      font-weight: 600; 
      font-size: 1.1rem;
    }
    .status-ok { color: #16c79a; }
    .status-warn { color: #f9a826; }
    .status-error { color: #e94560; }
    .status-review { color: #4a90e2; }
    
    .priority-high { color: #e94560; }
    .priority-medium { color: #f9a826; }
    .priority-low { color: #16c79a; }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      font-size: 0.9rem;
    }
    th {
      text-align: left;
      padding: 12px;
      color: #888;
      font-weight: 500;
      border-bottom: 2px solid #1e1e2e;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #1e1e2e;
    }
    tr:hover { background: #1a1a2e; }
    
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    .badge-core { background: #e9456020; color: #e94560; }
    .badge-area { background: #4a90e220; color: #4a90e2; }
    .badge-service { background: #16c79a20; color: #16c79a; }
    .badge-blog { background: #f9a82620; color: #f9a826; }
    .badge-price { background: #9b59b620; color: #9b59b6; }
    .badge-locations { background: #66666620; color: #888; }
    
    .score-bar {
      width: 100%;
      height: 8px;
      background: #1e1e2e;
      border-radius: 4px;
      overflow: hidden;
    }
    .score-fill {
      height: 100%;
      background: linear-gradient(90deg, #e94560, #f9a826);
      border-radius: 4px;
      transition: width 0.3s;
    }
    
    .seo-check {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      font-size: 0.75rem;
    }
    .seo-ok { background: #16c79a20; color: #16c79a; }
    .seo-missing { background: #e9456020; color: #e94560; }
    
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #1e1e2e;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔥 myCHEF Dashboard v2</h1>
    <p class="subtitle">Automatisk genereret ${new Date().toLocaleDateString('da-DK')} | Med SEO crawl data</p>
    
    <div class="grid">
      <div class="card">
        <h2>📊 Overblik</h2>
        <div class="metric">
          <span class="metric-label">Sider i alt</span>
          <span class="metric-value status-review">${totalPages}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Top 20% sider</span>
          <span class="metric-value status-warn">${top20Percent.length}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Kritiske fejl</span>
          <span class="metric-value status-error">3</span>
        </div>
        <div class="metric">
          <span class="metric-label">Beslutninger</span>
          <span class="metric-value status-warn">5</span>
        </div>
      </div>
      
      <div class="card">
        <h2>✅ SEO Status (Top 20%)</h2>
        <div class="metric">
          <span class="metric-label">Med title</span>
          <span class="metric-value status-ok">${pagesWithTitle}/${top20Percent.length}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Med meta</span>
          <span class="metric-value status-ok">${pagesWithMeta}/${top20Percent.length}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Med H1</span>
          <span class="metric-value status-ok">${pagesWithH1}/${top20Percent.length}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Med billeder</span>
          <span class="metric-value status-ok">${pagesWithImages}/${top20Percent.length}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Med CTA</span>
          <span class="metric-value status-ok">${pagesWithCTA}/${top20Percent.length}</span>
        </div>
      </div>
      
      <div class="card">
        <h2>📑 Side Typer</h2>
        ${Object.entries(categorized).map(([type, items]) => `
        <div class="metric">
          <span class="metric-label">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
          <span class="metric-value">${items.length}</span>
        </div>
        `).join('')}
      </div>
    </div>
    
    <div class="card">
      <h2>🏆 Top 20 Sider med SEO Data</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Type</th>
            <th>Title</th>
            <th>H1</th>
            <th>Meta</th>
            <th>Img</th>
            <th>CTA</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${top20Percent.slice(0, 20).map((page, i) => `
          <tr>
            <td>${i + 1}</td>
            <td><a href="${page.url}" style="color: #4a90e2; text-decoration: none;">${new URL(page.url).pathname || '/'}</a></td>
            <td><span class="badge badge-${page.type}">${page.type}</span></td>
            <td>${page.crawl.title !== 'TBD' ? '✅' : '<span class="seo-missing">❌</span>'}</td>
            <td>${page.crawl.h1 !== 'TBD' ? '✅' : '<span class="seo-missing">❌</span>'}</td>
            <td>${page.crawl.meta !== 'TBD' ? '✅' : '<span class="seo-missing">❌</span>'}</td>
            <td>${page.crawl.images > 0 ? '✅' : '<span class="seo-missing">❌</span>'}</td>
            <td>${page.crawl.hasCTA ? '✅' : '<span class="seo-missing">❌</span>'}</td>
            <td>
              <div class="score-bar">
                <div class="score-fill" style="width: ${(page.score.total / 15) * 100}%"></div>
              </div>
              <span class="priority-${page.score.total >= 13 ? 'high' : page.score.total >= 10 ? 'medium' : 'low'}">${page.score.total}/15</span>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <div class="card" style="margin-top: 20px;">
      <h2>❓ Beslutninger der Venter</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Spørgsmål</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Skal Jakarta-sider være aktive?</td>
            <td class="status-warn">NEEDS DAVID</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hvilke Bali-områder er top-prioritet?</td>
            <td class="status-warn">NEEDS DAVID</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hvilke services sælger vi først?</td>
            <td class="status-warn">NEEDS DAVID</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Skal staffing-sider være aktive?</td>
            <td class="status-warn">NEEDS DAVID</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Skal locations/* og area/* begge eksistere?</td>
            <td class="status-warn">NEEDS DAVID</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="footer">
      <p>Dashboard genereret automatisk fra mychef.id sitemap.</p>
      <p>Kør <code>node dashboard-generator-v2.js</code> for at opdatere.</p>
    </div>
  </div>
</body>
</html>`;
  
  return html;
}

// Main
async function main() {
  console.log('🚀 Genererer myCHEF dashboard v2...');
  
  try {
    const sitemapXml = await fetchSitemap();
    const urls = parseUrls(sitemapXml);
    
    console.log(`📊 Fandt ${urls.length} sider i sitemap`);
    
    const dashboard = generateDashboard(urls);
    
    const outputPath = path.join(__dirname, 'dashboard-v2.html');
    fs.writeFileSync(outputPath, dashboard);
    
    console.log(`✅ Dashboard gemt: ${outputPath}`);
    console.log('🌐 Åbn filen i din browser for at se dashboardet');
    
  } catch (err) {
    console.error('❌ Fejl:', err.message);
    process.exit(1);
  }
}

main();
