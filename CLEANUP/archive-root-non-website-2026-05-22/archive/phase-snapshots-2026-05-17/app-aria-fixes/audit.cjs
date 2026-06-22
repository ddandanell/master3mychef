const { chromium } = require('playwright');

const pages = [
  // Catering pages
  { url: 'http://localhost:3000/catering', name: 'catering-hub' },
  { url: 'http://localhost:3000/catering/bbq-catering', name: 'catering-bbq' },
  { url: 'http://localhost:3000/catering/buffet-catering', name: 'catering-buffet' },
  { url: 'http://localhost:3000/catering/plated-catering', name: 'catering-plated' },
  { url: 'http://localhost:3000/catering/drop-off-catering', name: 'catering-dropoff' },
  { url: 'http://localhost:3000/catering/babi-guling', name: 'catering-babiguling' },
  { url: 'http://localhost:3000/catering/grazing-tables', name: 'catering-grazing' },
  { url: 'http://localhost:3000/catering/floating-breakfast', name: 'catering-floating' },
  // Events pages
  { url: 'http://localhost:3000/events', name: 'events-hub' },
  { url: 'http://localhost:3000/events/weddings', name: 'events-weddings' },
  { url: 'http://localhost:3000/events/birthdays', name: 'events-birthdays' },
  { url: 'http://localhost:3000/events/anniversaries', name: 'events-anniversaries' },
  { url: 'http://localhost:3000/events/corporate-events', name: 'events-corporate' },
  { url: 'http://localhost:3000/events/retreats', name: 'events-retreats' },
  { url: 'http://localhost:3000/events/baby-showers', name: 'events-babyshowers' },
  { url: 'http://localhost:3000/events/villa-parties', name: 'events-villaparties' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  
  for (const page of pages) {
    const p = await context.newPage();
    try {
      await p.goto(page.url, { waitUntil: 'networkidle', timeout: 30000 });
      await p.screenshot({ path: `audit/${page.name}-desktop.png`, fullPage: false });
      // Also capture top portion for hero inspection
      await p.screenshot({ path: `audit/${page.name}-hero.png`, clip: { x: 0, y: 0, width: 1440, height: 800 } });
      console.log(`✅ ${page.name}`);
    } catch (e) {
      console.log(`❌ ${page.name}: ${e.message}`);
    }
    await p.close();
  }
  
  await browser.close();
})();
