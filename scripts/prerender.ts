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
  // Locations
  { path: '/seminyak', file: 'seminyak.html' },
  { path: '/canggu', file: 'canggu.html' },
  { path: '/ubud', file: 'ubud.html' },
  { path: '/uluwatu', file: 'uluwatu.html' },
  { path: '/nusa-dua', file: 'nusa-dua.html' },
  { path: '/jimbaran', file: 'jimbaran.html' },
]

async function startPreviewServer(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    console.log('🌐 Starting preview server...')
    
    const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', '4173'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe',
      detached: false,
    })
    
    let output = ''
    
    server.stdout?.on('data', (data) => {
      output += data.toString()
      // Look for server ready signal
      if (output.includes('Local:') || output.includes('ready in')) {
        setTimeout(() => resolve(server), 2000) // Extra 2s for stability
      }
    })
    
    server.stderr?.on('data', (data) => {
      const msg = data.toString()
      if (msg.includes('EADDRINUSE')) {
        console.log('    ℹ Server already running on port 4173')
        resolve(server)
      } else if (!msg.includes('MallocStack')) {
        output += msg
      }
    })
    
    server.on('error', reject)
    
    // Timeout after 15s
    setTimeout(() => reject(new Error('Server start timeout')), 15000)
  })
}

async function prerender() {
  console.log('🚀 Starting prerender...')
  
  let server: ChildProcess | null = null
  
  try {
    // Start preview server
    server = await startPreviewServer()
    console.log('    ✅ Server ready\n')
    
    const browser = await chromium.launch({ headless: true })
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
          timeout: 30000 
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
