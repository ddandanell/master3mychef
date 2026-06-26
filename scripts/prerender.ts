/**
 * Prerender critical pages for SEO
 * Generates static HTML snapshots of React SPA routes so Googlebot sees full content
 * 
 * Problem: SPA = blank HTML shell, all content client-side via React
 * Solution: Run Vite build, spawn dev server, use Playwright to snapshot fully-rendered HTML
 * 
 * Phase 3: SSR/Prerendering implementation
 */

import { chromium } from 'playwright'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { spawn, ChildProcess } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const DIST_DIR = join(__dirname, '../dist')
const BASE_URL = 'http://localhost:4173' // Vite preview server

// Critical pages to prerender
const ROUTES = [
  { path: '/', file: 'index.html' },
  { path: '/fine-dining', file: 'fine-dining.html' },
  { path: '/catering', file: 'catering.html' },
  { path: '/events', file: 'events.html' },
  { path: '/events/villa-parties', file: 'events-villa-parties.html' },
  { path: '/events/weddings', file: 'events-weddings.html' },
  { path: '/fine-dining/private-chef-bali', file: 'private-chef-bali.html' },
  { path: '/faq', file: 'faq.html' },
  { path: '/pricing', file: 'pricing.html' },
  { path: '/chefs', file: 'chefs.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/book', file: 'book.html' },
  { path: '/reviews', file: 'reviews.html' },
  { path: '/partner-platform', file: 'partner-platform.html' },
  { path: '/certified-partner', file: 'certified-partner.html' },
  { path: '/press', file: 'press.html' },
  { path: '/retreats', file: 'retreats.html' },
  // Service & utility pages that were internally linked but 404'd on direct access
  { path: '/villa-chef', file: 'villa-chef.html' },
  { path: '/recommended-services', file: 'recommended-services.html' },
  { path: '/join-our-team', file: 'join-our-team.html' },
  // Staffing
  { path: '/staffing', file: 'staffing.html' },
  // In-villa service
  { path: '/in-villa-service', file: 'in-villa-service.html' },
  // Locations hub
  { path: '/locations', file: 'locations.html' },
  // Locations
  { path: '/seminyak', file: 'seminyak.html' },
  { path: '/canggu', file: 'canggu.html' },
  { path: '/ubud', file: 'ubud.html' },
  { path: '/uluwatu', file: 'uluwatu.html' },
  { path: '/nusa-dua', file: 'nusa-dua.html' },
  { path: '/jimbaran', file: 'jimbaran.html' },
  { path: '/sanur', file: 'sanur.html' },
  { path: '/berawa', file: 'berawa.html' },
  { path: '/pererenan', file: 'pererenan.html' },
  { path: '/bukit', file: 'bukit.html' },
  // Legal / policies
  { path: '/cancellation', file: 'cancellation.html' },
  { path: '/privacy', file: 'privacy.html' },
  { path: '/terms', file: 'terms.html' },
  // Guides
  { path: '/guide/bali-cuisine-glossary', file: 'guide-bali-cuisine-glossary.html' },
  { path: '/guide/private-chef-bali', file: 'guide-private-chef-bali.html' },
  // Blog posts
  { path: '/blog/private-chef-bali-cost-breakdown-2026', file: 'blog-private-chef-bali-cost-breakdown-2026.html' },
  { path: '/blog/best-bali-villas-private-chef-kitchen', file: 'blog-best-bali-villas-private-chef-kitchen.html' },
  { path: '/blog/wedding-rehearsal-dinner-bali', file: 'blog-wedding-rehearsal-dinner-bali.html' },
  { path: '/blog/yoga-retreat-chef-bali-meal-planning', file: 'blog-yoga-retreat-chef-bali-meal-planning.html' },
  { path: '/blog/private-chef-vs-restaurant-bali', file: 'blog-private-chef-vs-restaurant-bali.html' },
  { path: '/blog/how-to-plan-villa-birthday-party-bali', file: 'blog-how-to-plan-villa-birthday-party-bali.html' },
  { path: '/blog/private-chef-romantic-dinners-bali', file: 'blog-private-chef-romantic-dinners-bali.html' },
  { path: '/blog/how-to-hire-private-chef-bali-complete-guide', file: 'blog-how-to-hire-private-chef-bali-complete-guide.html' },
  { path: '/blog/private-chef-bali-cost-breakdown-detailed-2026', file: 'blog-private-chef-bali-cost-breakdown-detailed-2026.html' },
  { path: '/blog/chef-qualifications-credentials-bali-hiring', file: 'blog-chef-qualifications-credentials-bali-hiring.html' },
  { path: '/blog/private-chef-roles-responsibilities-explained', file: 'blog-private-chef-roles-responsibilities-explained.html' },
  { path: '/blog/wedding-private-chef-bali-planning-guide', file: 'blog-wedding-private-chef-bali-planning-guide.html' },
  { path: '/blog/corporate-events-catering-bali-team-dining', file: 'blog-corporate-events-catering-bali-team-dining.html' },
  { path: '/blog/romantic-dinner-at-home-bali-private-chef', file: 'blog-romantic-dinner-at-home-bali-private-chef.html' },
  { path: '/blog/dining-by-location-bali-neighborhood-guide', file: 'blog-dining-by-location-bali-neighborhood-guide.html' },
  { path: '/blog/fine-dining-trends-bali-2026-innovations', file: 'blog-fine-dining-trends-bali-2026-innovations.html' },
  { path: '/blog/seasonal-ingredients-bali-cooking-guide', file: 'blog-seasonal-ingredients-bali-cooking-guide.html' },
  // Journal index
  { path: '/journal', file: 'journal.html' },
  // Journal posts (all 16)
  { path: '/journal/michelin-training-bali', file: 'journal-michelin-training-bali.html' },
  { path: '/journal/sustainable-sourcing', file: 'journal-sustainable-sourcing.html' },
  { path: '/journal/private-chef-vs-villa-staff-bali', file: 'journal-private-chef-vs-villa-staff-bali.html' },
  { path: '/journal/bali-private-chef-cost-guide-2026', file: 'journal-bali-private-chef-cost-guide-2026.html' },
  { path: '/journal/villa-wedding-catering-logistics-bali', file: 'journal-villa-wedding-catering-logistics-bali.html' },
  { path: '/journal/yoga-retreat-meal-planning-bali', file: 'journal-yoga-retreat-meal-planning-bali.html' },
  { path: '/journal/private-chef-seminyak-guide', file: 'journal-private-chef-seminyak-guide.html' },
  { path: '/journal/private-chef-canggu-guide', file: 'journal-private-chef-canggu-guide.html' },
  { path: '/journal/private-chef-ubud-villa-dining', file: 'journal-private-chef-ubud-villa-dining.html' },
  { path: '/journal/bali-wedding-catering-complete-guide', file: 'journal-bali-wedding-catering-complete-guide.html' },
  { path: '/journal/private-chef-jakarta-guide', file: 'journal-private-chef-jakarta-guide.html' },
  { path: '/journal/rehearsal-dinner-planning-bali', file: 'journal-rehearsal-dinner-planning-bali.html' },
  { path: '/journal/live-in-chef-vs-daily-service', file: 'journal-live-in-chef-vs-daily-service.html' },
  { path: '/journal/bbq-catering-cost-breakdown-bali', file: 'journal-bbq-catering-cost-breakdown-bali.html' },
  { path: '/journal/italian-tasting', file: 'journal-italian-tasting.html' },
  { path: '/journal/wagyu-experience', file: 'journal-wagyu-experience.html' },
  // /private-chef/[slug] — Bali Domination Blueprint area landing pages (TASK-027)
  { path: '/private-chef/seminyak', file: 'private-chef-seminyak.html' },
  { path: '/private-chef/canggu', file: 'private-chef-canggu.html' },
  { path: '/private-chef/ubud', file: 'private-chef-ubud.html' },
  { path: '/private-chef/uluwatu', file: 'private-chef-uluwatu.html' },
  { path: '/private-chef/jimbaran', file: 'private-chef-jimbaran.html' },
  { path: '/private-chef/nusa-dua', file: 'private-chef-nusa-dua.html' },
  { path: '/private-chef/sanur', file: 'private-chef-sanur.html' },
  { path: '/private-chef/denpasar', file: 'private-chef-denpasar.html' },
  { path: '/private-chef/berawa', file: 'private-chef-berawa.html' },
  { path: '/private-chef/pererenan', file: 'private-chef-pererenan.html' },
  { path: '/private-chef/kerobokan', file: 'private-chef-kerobokan.html' },
  { path: '/private-chef/petitenget', file: 'private-chef-petitenget.html' },
  { path: '/private-chef/kuta', file: 'private-chef-kuta.html' },
  { path: '/private-chef/legian', file: 'private-chef-legian.html' },
  { path: '/private-chef/bukit', file: 'private-chef-bukit.html' },
]

async function startPreviewServer(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    console.log('🌐 Starting preview server...')
    
    const server = spawn('pnpm', ['exec', 'vite', 'preview', '--host', '127.0.0.1', '--port', '4173'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe',
      detached: false,
      shell: true,
    })
    
    let output = ''
    
    server.stdout?.on('data', (data) => {
      const msg = data.toString()
      output += msg
      console.log('  [stdout]', msg.trim())
      // Look for server ready signal
      if (output.includes('Local:') || output.includes('ready in') || output.includes('http://')) {
        setTimeout(() => resolve(server), 5000) // Extra 5s for stability
      }
    })
    
    server.stderr?.on('data', (data) => {
      const msg = data.toString()
      console.log('  [stderr]', msg.trim())
      if (msg.includes('EADDRINUSE')) {
        console.log('    ℹ Server already running on port 4173')
        resolve(server)
      } else if (!msg.includes('MallocStack')) {
        output += msg
      }
      // Also check stderr for ready signal
      if (msg.includes('Local:') || msg.includes('ready in') || msg.includes('http://')) {
        setTimeout(() => resolve(server), 5000)
      }
    })
    
    server.on('error', reject)
    
    // Timeout after 45s
    setTimeout(() => reject(new Error('Server start timeout')), 45000)
  })
}

async function prerender() {
  console.log('🚀 Starting prerender...')
  
  let server: ChildProcess | null = null
  
  try {
    // Start preview server
    server = await startPreviewServer()
    console.log('    ✅ Server ready\n')
    
    let browser
    try {
      browser = await chromium.launch({ headless: true })
    } catch (e) {
      console.log('    ⚠️  Playwright chromium not available, skipping prerender')
      console.log('    This is expected on Vercel builds — prerender runs locally instead')
      if (server) {
        server.kill('SIGTERM')
      }
      return
    }
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      viewport: { width: 1920, height: 1080 },
    })
    
    const page = await context.newPage()
    
    let successCount = 0
    let errorCount = 0
    
    for (const route of ROUTES) {
      const url = `${BASE_URL}${route.path}`
      const outputPath = join(DIST_DIR, route.file)
      
      try {
        console.log(`  → Rendering ${route.path}`)
        
        // Navigate and wait for React hydration + network idle
        await page.goto(url, { 
          waitUntil: 'networkidle',
          timeout: 45000 
        })
        
        // Wait for React root to have content
        await page.waitForSelector('#root:not(:empty)', { timeout: 10000 })
        
        // Wait extra for any lazy images/fonts
        await page.waitForTimeout(1000)
        
        // Get full HTML
        const html = await page.content()
        
        // Validate we got real content (not blank SPA shell)
        if (!html.includes('<h1') || html.length < 5000) {
          throw new Error(`Page seems incomplete (${html.length} bytes, no H1)`)
        }
        
        // Clean up: remove scripts that would cause hydration mismatch
        const cleanedHtml = html
          .replace(/<script type="module" crossorigin src="[^"]+"><\/script>/g, '')
          .replace(/<script type="module">import\.meta\.url;import\("_"\)\.catch[^<]+<\/script>/g, '')
        
        // Write to dist
        const dir = dirname(outputPath)
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true })
        }
        writeFileSync(outputPath, cleanedHtml, 'utf-8')
        
        console.log(`    ✅ ${route.file} (${Math.round(html.length / 1024)}KB)`)
        successCount++
        
      } catch (error: any) {
        console.error(`    ❌ ${route.path}: ${error.message}`)
        errorCount++
      }
    }
    
    await browser.close()
    
    console.log(`\n✅ Prerender complete: ${successCount} pages, ${errorCount} errors`)
    
    if (errorCount > 0) {
      throw new Error(`Prerender failed: ${errorCount} errors`)
    }
    
  } finally {
    // Kill server
    if (server) {
      console.log('\n🛑 Stopping preview server...')
      server.kill('SIGTERM')
      // Force kill after 2s if still running
      setTimeout(() => {
        if (server && !server.killed) {
          server.kill('SIGKILL')
        }
      }, 2000)
    }
  }
}

// Self-execute
prerender().catch((err) => {
  console.error('Fatal prerender error:', err)
  process.exit(1)
})
