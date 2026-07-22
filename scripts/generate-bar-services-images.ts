#!/usr/bin/env node
/**
 * Batch image generator for MyChef Bar Services pages.
 *
 * Primary provider: Pollinations.ai (OpenAI key in this environment points to a
 * chat-only Kimi endpoint and has no image endpoint).
 *
 * Generates:
 *   - 11 service hero WebP images
 *   - 11 service body WebP images
 *   - 1 hub hero WebP image
 *   - 7 resource featured WebP images
 *   - 2 contact WebP images
 *   - 22 OG JPG images (1200x630 with text overlay)
 *   - 66 gallery WebP images (3 per page across 22 pages)
 *
 * Uses sharp for resizing, compression and OG text overlay.
 * Resumable: skips files that already exist.
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

const OPENAI_API_URL = 'https://api.openai.com/v1/images/generations'
const OPENAI_MODEL = 'gpt-image-2'
const OPENAI_SIZE = '1536x1024'

const BFL_API_URL = 'https://api.bfl.ai/v1/flux-2-klein-9b'
const BFL_POLL_URL = 'https://api.bfl.ai/v1/get_result'

const POLLINATIONS_URL = 'https://image.pollinations.ai/prompt'

const BRAND_RULES =
  'Ultra-realistic professional editorial hospitality photograph, natural daylight or warm golden-hour light, shallow depth of field, candid working moment, looks 100% real. Real Bali venue: villa bar, hotel bar, beach club, or restaurant back-bar. Any service staff shown must look Indonesian/Balinese; guests may be international. Avoid visible text, logos, watermarks, religious or sacred symbols, plastic or disposable ware, neon cocktail signs, generic stock mojitos, flair-bartending theatrics, or anything artificial.'

const NEGATIVE = 'No text, no logos, no watermarks, no religious symbols, no plastic/disposable ware, no neon signs, no generic stock cocktails, no flair bartending.'

type ImageType = 'hero' | 'body' | 'resource' | 'contact' | 'og' | 'gallery'
type Provider = 'openai' | 'bfl' | 'pollinations'

interface ImageJob {
  type: ImageType
  filename: string
  prompt: string
  ogTitle?: string
}

interface JobResult {
  ok: boolean
  filename: string
  provider: Provider
  error?: string
  sizeKB?: number
  dims?: string
}

const SERVICE_SLUGS = [
  'bar-staff-training',
  'cocktail-menu-development',
  'signature-cocktail-creation',
  'temporary-bartender-staffing',
  'permanent-bar-staff-recruitment',
  'new-bar-setup',
  'bar-audit-improvement',
  'bar-costing-inventory-control',
  'bar-equipment-supply-rental',
  'monthly-bar-management-support',
  'complete-bar-performance-programme',
]

const SERVICE_PROMPTS: Record<string, { hero: string; body: string }> = {
  'bar-staff-training': {
    hero: 'Indonesian bartender training a junior team member behind a modern Bali villa bar at golden hour. Warm natural light, candid teaching moment, professional but relaxed. Tropical greenery visible through open windows.',
    body: 'Two Indonesian bartenders practising cocktail-making during a hands-on training session at a Bali venue. Warm light, focused expressions, professional bar tools and recipe cards on the counter.',
  },
  'cocktail-menu-development': {
    hero: 'Balinese bartender presenting a costed cocktail menu on a venue tablet behind a polished back-bar. Warm ambient light, professional working moment, premium Bali restaurant interior.',
    body: 'Cocktail spec sheets, ingredient audit and fresh tropical garnishes spread across a dark bar counter in a Bali venue. Warm light, organised flat-lay, no hands.',
  },
  'signature-cocktail-creation': {
    hero: 'A named signature cocktail being carefully poured at a Bali beach club bar at sunset. Indonesian bartender focused on the serve, warm golden light, tropical backdrop softly blurred.',
    body: 'Indonesian bartender garnishing a bespoke signature cocktail for a tasting panel at a Bali villa bar. Warm light, small glasses lined up, fresh botanical garnish.',
  },
  'temporary-bartender-staffing': {
    hero: 'Uniformed Indonesian bartenders setting up a professional event bar at a Bali villa wedding. Warm late-afternoon light, polished mobile bar, tropical garden in the background.',
    body: 'Bartender pouring cocktails at a high-volume Bali wedding reception bar. Warm evening light, guests softly blurred in background, professional working moment.',
  },
  'permanent-bar-staff-recruitment': {
    hero: 'Indonesian bartender completing a practical trial behind a modern Bali restaurant bar. Warm light, focused expression, bar manager observing in soft background.',
    body: 'Bar manager interviewing a trade-tested candidate at a Bali restaurant table. Warm light, professional but relaxed, tablet with notes visible.',
  },
  'new-bar-setup': {
    hero: 'New Bali restaurant bar being fitted out before opening, with copper tools, glassware and tropical plants on a polished counter. Warm daylight, empty but ready for service.',
    body: 'Bar layout plan and equipment specification spread on a venue desk next to material samples and a tablet. Warm light, clean organisation, no people.',
  },
  'bar-audit-improvement': {
    hero: 'Auditor reviewing bar inventory records at a Bali venue bar during quiet morning light. Warm natural light, clipboard and bottles in soft background, professional concentration.',
    body: 'Mystery guest assessment form next to a freshly built cocktail on a Bali bar counter. Warm ambient light, shallow depth of field, discreet documentation.',
  },
  'bar-costing-inventory-control': {
    hero: 'Indonesian bar manager reviewing costing cards and par levels at a Bali bar before service. Warm light, focused working moment, organised back-bar.',
    body: 'Inventory count sheets and recipe costing cards arranged on a bar back counter next to jiggers and a calculator. Warm light, professional flat-lay.',
  },
  'bar-equipment-supply-rental': {
    hero: 'Mobile bar unit, glassware and bartender toolkit being loaded for a Bali event. Warm daylight, professional preparation, tropical villa driveway in background.',
    body: 'Professional bartender toolkit, polished glassware and copper jiggers prepared for rental on a dark counter. Warm light, clean arrangement.',
  },
  'monthly-bar-management-support': {
    hero: 'Indonesian bar manager reviewing KPIs with a Bali venue owner at a restaurant table. Warm light, professional discussion, tablet with charts visible.',
    body: 'Bar manager supervising a stocktake behind a Bali restaurant bar in the morning. Warm light, clipboard in hand, bottles neatly arranged.',
  },
  'complete-bar-performance-programme': {
    hero: 'Bali venue leadership team reviewing a quarterly bar scorecard in a bright restaurant office. Warm light, professional meeting, charts on screen softly blurred.',
    body: 'Bartenders executing a newly launched cocktail menu behind a busy Bali bar. Warm evening light, coordinated team, guests in soft background.',
  },
}

const GALLERY_PROMPTS: Record<string, string[]> = {
  'hub': [
    'Bali villa bar at golden hour with Indonesian bartender shaking a cocktail. Warm natural light, tropical pool and greenery softly blurred, premium hospitality aesthetic.',
    'Close-up of a polished Bali bar counter with fresh tropical garnishes, copper jiggers and crystal glassware. Warm ambient light, shallow depth of field.',
    'Indonesian bartender smiling while serving guests at an open-air Bali beach club bar. Warm sunset light, candid professional moment.',
  ],
  'bar-staff-training': [
    'Indonesian bartender training a junior team member behind a modern Bali villa bar at golden hour. Warm natural light, candid teaching moment, professional but relaxed.',
    'Two Indonesian bartenders practising cocktail-making during a hands-on training session at a Bali venue. Warm light, focused expressions, professional bar tools and recipe cards on the counter.',
    'Bali bar trainer demonstrating free-pour technique to a small group of Indonesian bartenders. Warm light, attentive faces, polished back-bar.',
  ],
  'cocktail-menu-development': [
    'Balinese bartender presenting a costed cocktail menu on a venue tablet behind a polished back-bar. Warm ambient light, professional working moment, premium Bali restaurant interior.',
    'Cocktail spec sheets, ingredient audit and fresh tropical garnishes spread across a dark bar counter in a Bali venue. Warm light, organised flat-lay, no hands.',
    'Bartender tasting a new cocktail creation with a small panel at a Bali villa bar. Warm light, focused expressions, flight of glasses on the counter.',
  ],
  'signature-cocktail-creation': [
    'A named signature cocktail being carefully poured at a Bali beach club bar at sunset. Indonesian bartender focused on the serve, warm golden light, tropical backdrop softly blurred.',
    'Indonesian bartender garnishing a bespoke signature cocktail for a tasting panel at a Bali villa bar. Warm light, small glasses lined up, fresh botanical garnish.',
    'Close-up of a signature cocktail in an elegant glass on a Bali bar counter, with tropical flowers and a copper straw. Warm sunset light, shallow depth of field.',
  ],
  'temporary-bartender-staffing': [
    'Uniformed Indonesian bartenders setting up a professional event bar at a Bali villa wedding. Warm late-afternoon light, polished mobile bar, tropical garden in the background.',
    'Bartender pouring cocktails at a high-volume Bali wedding reception bar. Warm evening light, guests softly blurred in background, professional working moment.',
    'Team of Indonesian event bartenders briefing before a Bali villa party. Warm light, professional uniforms, mobile bar in background.',
  ],
  'permanent-bar-staff-recruitment': [
    'Indonesian bartender completing a practical trial behind a modern Bali restaurant bar. Warm light, focused expression, bar manager observing in soft background.',
    'Bar manager interviewing a trade-tested candidate at a Bali restaurant table. Warm light, professional but relaxed, tablet with notes visible.',
    'Newly recruited Indonesian bartender in uniform receiving a welcome briefing at a Bali hotel bar. Warm light, professional atmosphere.',
  ],
  'new-bar-setup': [
    'New Bali restaurant bar being fitted out before opening, with copper tools, glassware and tropical plants on a polished counter. Warm daylight, empty but ready for service.',
    'Bar layout plan and equipment specification spread on a venue desk next to material samples and a tablet. Warm light, clean organisation, no people.',
    'Freshly installed back-bar shelving with glassware and premium spirits at a new Bali venue. Warm light, clean lines, tropical accent.',
  ],
  'bar-audit-improvement': [
    'Auditor reviewing bar inventory records at a Bali venue bar during quiet morning light. Warm natural light, clipboard and bottles in soft background, professional concentration.',
    'Mystery guest assessment form next to a freshly built cocktail on a Bali bar counter. Warm ambient light, shallow depth of field, discreet documentation.',
    'Bar manager and auditor comparing stock sheets behind a Bali restaurant bar. Warm morning light, professional discussion.',
  ],
  'bar-costing-inventory-control': [
    'Indonesian bar manager reviewing costing cards and par levels at a Bali bar before service. Warm light, focused working moment, organised back-bar.',
    'Inventory count sheets and recipe costing cards arranged on a bar back counter next to jiggers and a calculator. Warm light, professional flat-lay.',
    'Bar manager checking par levels on a clipboard in a Bali venue store room. Warm light, neatly arranged bottles, professional concentration.',
  ],
  'bar-equipment-supply-rental': [
    'Mobile bar unit, glassware and bartender toolkit being loaded for a Bali event. Warm daylight, professional preparation, tropical villa driveway in background.',
    'Professional bartender toolkit, polished glassware and copper jiggers prepared for rental on a dark counter. Warm light, clean arrangement.',
    'Rental mobile bar counter assembled in a Bali villa garden for an event. Warm afternoon light, tropical greenery, ready for service.',
  ],
  'monthly-bar-management-support': [
    'Indonesian bar manager reviewing KPIs with a Bali venue owner at a restaurant table. Warm light, professional discussion, tablet with charts visible.',
    'Bar manager supervising a stocktake behind a Bali restaurant bar in the morning. Warm light, clipboard in hand, bottles neatly arranged.',
    'Bar manager coaching a bartender during pre-service setup at a Bali hotel bar. Warm light, professional interaction.',
  ],
  'complete-bar-performance-programme': [
    'Bali venue leadership team reviewing a quarterly bar scorecard in a bright restaurant office. Warm light, professional meeting, charts on screen softly blurred.',
    'Bartenders executing a newly launched cocktail menu behind a busy Bali bar. Warm evening light, coordinated team, guests in soft background.',
    'Celebration moment after a successful bar programme launch at a Bali venue. Warm light, team of Indonesian bartenders, polished bar.',
  ],
  'faq': [
    'Indonesian bartender answering questions while polishing glassware behind a Bali bar. Warm light, friendly professional expression.',
    'Bali bar manager consulting with a venue owner over a drink menu at a restaurant table. Warm light, relaxed professional discussion.',
    'Close-up of commonly used bar tools and glassware on a Bali bar counter with soft warm light. Clean, organised, inviting.',
  ],
  'contact': [
    'MyChef bar consultant discussing a Bali venue programme with a bar manager at golden hour. Warm light, professional discussion, villa bar interior softly blurred.',
    'Professional Indonesian bar consultant reviewing a venue programme in Bali. Warm natural light, confident expression, tablet in hand, tropical bar interior.',
    'Bar consultant shaking hands with a Bali venue owner after a programme review. Warm light, professional agreement, tropical bar backdrop.',
  ],
  'resources': [
    'Bali bar manager browsing resources on a tablet at a venue desk. Warm light, organised workspace, cocktail recipe cards nearby.',
    'Collection of bar management guides, costing sheets and menu templates spread on a Bali venue table. Warm light, flat-lay, professional.',
    'Indonesian bartender reading a training guide during a quiet moment at a Bali bar. Warm light, focused expression, premium interior.',
  ],
  'how-much-does-a-bartender-cost-bali': [
    'Indonesian bartender preparing drinks at a polished Bali villa bar. Warm golden-hour light, professional working moment, tropical greenery visible.',
    'Bali venue owner reviewing staffing costs on a tablet at a restaurant table. Warm light, thoughtful expression, calculator nearby.',
    'Close-up of a bartender pouring a premium spirit at a Bali bar. Warm light, professional technique, shallow depth of field.',
  ],
  'bartender-salary-benchmarks-bali': [
    'Bali bar manager reviewing rosters and salary benchmarks on a tablet at a restaurant table. Warm light, focused professional moment.',
    'Indonesian bartender team in uniform briefing before service at a Bali hotel bar. Warm light, professional atmosphere.',
    'Bar manager and accountant reviewing payroll documents at a Bali venue office. Warm light, organised paperwork, laptop open.',
  ],
  'how-many-bartenders-per-guest': [
    'Event bartenders serving guests at a Bali villa wedding reception bar. Warm evening light, professional service, guests in soft background.',
    'Bali event planner and bar manager calculating staff ratios on a clipboard. Warm light, tropical garden venue in background.',
    'Busy Bali beach club bar with multiple bartenders working in sync. Warm sunset light, guests waiting, coordinated team.',
  ],
  'beverage-cost-percentage-guide': [
    'Bar manager calculating beverage cost percentage on a calculator next to cocktail specs and inventory notes. Warm light, organised desk.',
    'Close-up of cocktail costing cards and jiggers on a Bali bar counter. Warm light, professional flat-lay.',
    'Bar manager reviewing pour costs on a tablet behind a Bali restaurant bar. Warm light, focused expression.',
  ],
  'how-to-open-a-bar-in-bali': [
    'New Bali restaurant bar being fitted out before opening, with clean counter, glassware and tropical plants. Warm daylight, empty and ready.',
    'Bali entrepreneur reviewing bar floor plans and permits at a cafe table. Warm light, laptop and blueprints visible.',
    'Freshly stocked back-bar at a new Bali venue with tropical plants and warm lighting. Clean, modern, inviting.',
  ],
  'how-to-create-a-cocktail-menu': [
    'Balinese bartender presenting a costed cocktail menu on a venue tablet behind a modern back-bar. Warm ambient light, professional moment.',
    'Cocktail menu design sketches and ingredient lists spread on a Bali bar counter. Warm light, creative flat-lay.',
    'Bartender garnishing a menu-featured cocktail during a tasting session at a Bali villa bar. Warm light, small tasting glasses.',
  ],
  'how-to-reduce-bar-shrinkage-bali': [
    'Bar manager checking stock variance after a busy service in Bali, clipboard in hand, bottles neatly arranged. Warm light, focused expression.',
    'Indonesian bartender measuring spirits with a jigger at a Bali bar. Warm light, precise technique, organised back-bar.',
    'Bar manager reviewing CCTV and inventory records at a Bali venue office. Warm light, professional concentration.',
  ],
}

const RESOURCE_SLUGS = [
  'how-much-does-a-bartender-cost-bali',
  'bartender-salary-benchmarks-bali',
  'how-many-bartenders-per-guest',
  'beverage-cost-percentage-guide',
  'how-to-open-a-bar-in-bali',
  'how-to-create-a-cocktail-menu',
  'how-to-reduce-bar-shrinkage-bali',
]

const RESOURCE_PROMPTS: Record<string, string> = {
  'how-much-does-a-bartender-cost-bali':
    'Indonesian bartender preparing drinks at a polished Bali villa bar. Warm golden-hour light, professional working moment, tropical greenery visible.',
  'bartender-salary-benchmarks-bali':
    'Bali bar manager reviewing rosters and salary benchmarks on a tablet at a restaurant table. Warm light, focused professional moment.',
  'how-many-bartenders-per-guest':
    'Event bartenders serving guests at a Bali villa wedding reception bar. Warm evening light, professional service, guests in soft background.',
  'beverage-cost-percentage-guide':
    'Bar manager calculating beverage cost percentage on a calculator next to cocktail specs and inventory notes. Warm light, organised desk.',
  'how-to-open-a-bar-in-bali':
    'New Bali restaurant bar being fitted out before opening, with clean counter, glassware and tropical plants. Warm daylight, empty and ready.',
  'how-to-create-a-cocktail-menu':
    'Balinese bartender presenting a costed cocktail menu on a venue tablet behind a modern back-bar. Warm ambient light, professional moment.',
  'how-to-reduce-bar-shrinkage-bali':
    'Bar manager checking stock variance after a busy service in Bali, clipboard in hand, bottles neatly arranged. Warm light, focused expression.',
}

const OG_TITLES: Record<string, string> = {
  hub: 'Bar Consultant Bali',
  'bar-staff-training': 'Bar Staff Training Bali',
  'cocktail-menu-development': 'Cocktail Menu Development Bali',
  'signature-cocktail-creation': 'Signature Cocktail Creation Bali',
  'temporary-bartender-staffing': 'Bartender Hire Bali',
  'permanent-bar-staff-recruitment': 'Bar Staff Recruitment Bali',
  'new-bar-setup': 'New Bar Setup Bali',
  'bar-audit-improvement': 'Bar Audit Bali',
  'bar-costing-inventory-control': 'Bar Costing & Inventory Control Bali',
  'bar-equipment-supply-rental': 'Bar Equipment Rental Bali',
  'monthly-bar-management-support': 'Monthly Bar Management Bali',
  'complete-bar-performance-programme': 'Bar Performance Programme Bali',
  faq: 'Bar Services FAQ',
  contact: 'Contact MyChef Bar Services',
  resources: 'Bar Services Resources',
  'how-much-does-a-bartender-cost-bali': 'Bartender Cost in Bali',
  'bartender-salary-benchmarks-bali': 'Bartender Salary Benchmarks Bali',
  'how-many-bartenders-per-guest': 'Bartenders Per Guest Guide',
  'beverage-cost-percentage-guide': 'Beverage Cost Percentage Guide',
  'how-to-open-a-bar-in-bali': 'How to Open a Bar in Bali',
  'how-to-create-a-cocktail-menu': 'Create a Cocktail Menu',
  'how-to-reduce-bar-shrinkage-bali': 'Reduce Bar Shrinkage Bali',
}

function buildJobs(): ImageJob[] {
  const jobs: ImageJob[] = []

  jobs.push({
    type: 'hero',
    filename: 'mychef-bar-services-bali-hero-hub.webp',
    prompt:
      'Bali villa bar setup with professional Indonesian bartender preparing drinks at golden hour. Warm natural light, candid working moment, tropical pool and greenery softly blurred in background. Premium hospitality aesthetic.',
  })

  for (const slug of SERVICE_SLUGS) {
    const { hero, body } = SERVICE_PROMPTS[slug]
    jobs.push({ type: 'hero', filename: `mychef-bar-services-bali-hero-${slug}.webp`, prompt: hero })
    jobs.push({ type: 'body', filename: `mychef-bar-services-bali-${slug}-body.webp`, prompt: body })
  }

  for (const slug of RESOURCE_SLUGS) {
    jobs.push({
      type: 'resource',
      filename: `mychef-bar-services-bali-resource-${slug}.webp`,
      prompt: RESOURCE_PROMPTS[slug],
    })
  }

  jobs.push({
    type: 'contact',
    filename: 'mychef-bar-services-bali-contact-hero.webp',
    prompt:
      'MyChef bar consultant discussing a Bali venue programme with a bar manager at golden hour. Warm light, professional discussion, villa bar interior softly blurred.',
  })
  jobs.push({
    type: 'contact',
    filename: 'mychef-bar-services-bali-consultant.webp',
    prompt:
      'Professional Indonesian bar consultant reviewing a venue programme in Bali. Warm natural light, confident expression, tablet in hand, tropical bar interior.',
  })

  for (const [key, title] of Object.entries(OG_TITLES)) {
    jobs.push({
      type: 'og',
      filename: `mychef-bar-services-bali-og-${key}.jpg`,
      prompt:
        'Dark moody background texture for a Bali bar services brand. Subtle deep charcoal and amber tones, soft bokeh lights, premium hospitality feel. No text, no logos, no people.',
      ogTitle: title,
    })
  }

  // Task 9: 3 gallery images per page across all 22 pages.
  for (const [slug, prompts] of Object.entries(GALLERY_PROMPTS)) {
    for (let i = 0; i < prompts.length; i++) {
      jobs.push({
        type: 'gallery',
        filename: `mychef-bar-services-bali-${slug}-gallery-${i + 1}.webp`,
        prompt: prompts[i],
      })
    }
  }

  return jobs
}

function makeOgSvg(title: string): Buffer {
  const line1 = title
  const line2 = 'MyChef Bar Services Bali'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1a1a" stop-opacity="0.75"/>
        <stop offset="1" stop-color="#0f0f0f" stop-opacity="0.92"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="600" y="260" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="bold" fill="#f5f5f5">${escapeXml(line1)}</text>
    <text x="600" y="360" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#d97706">${escapeXml(line2)}</text>
  </svg>`
  return Buffer.from(svg)
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function generateWithOpenAI(prompt: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return null

  const res = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OPENAI_MODEL, prompt, n: 1, size: OPENAI_SIZE, quality: 'high' }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OpenAI ${res.status}: ${text.slice(0, 300)}`)
  }

  const json = (await res.json()) as { data?: Array<{ b64_json?: string; url?: string }> }
  const item = json.data?.[0]
  if (!item) throw new Error('No image returned')

  return item.b64_json
    ? Buffer.from(item.b64_json, 'base64')
    : Buffer.from(await (await fetch(item.url!)).arrayBuffer())
}

async function generateWithBfl(prompt: string): Promise<Buffer | null> {
  const apiKey = process.env.BFL_API_KEY
  if (!apiKey) return null

  const submitRes = await fetch(BFL_API_URL, {
    method: 'POST',
    headers: { 'x-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, width: 1536, height: 1024 }),
  })

  if (!submitRes.ok) {
    const text = await submitRes.text()
    throw new Error(`BFL submit ${submitRes.status}: ${text.slice(0, 300)}`)
  }

  const { id, polling_url } = (await submitRes.json()) as { id?: string; polling_url?: string }
  if (!id) throw new Error('BFL did not return an id')

  const pollUrl = polling_url || `${BFL_POLL_URL}?id=${id}`
  for (let i = 0; i < 60; i++) {
    await sleep(2000)
    const pollRes = await fetch(pollUrl, { headers: { 'x-key': apiKey } })
    const pollJson = (await pollRes.json()) as { status?: string; result?: { sample?: string }; error?: string }
    if (pollJson.status === 'Ready' && pollJson.result?.sample) {
      return Buffer.from(await (await fetch(pollJson.result.sample)).arrayBuffer())
    }
    if (pollJson.status === 'Error') throw new Error(`BFL generation error: ${pollJson.error || 'unknown'}`)
  }
  throw new Error('BFL polling timed out')
}

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal })
    return res
  } finally {
    clearTimeout(timer)
  }
}

async function generateWithPollinations(prompt: string, seed: number): Promise<Buffer> {
  const encoded = encodeURIComponent(`${prompt}. ${BRAND_RULES} ${NEGATIVE}`)
  // Use a smaller SDXL-friendly size so Pollinations returns faster; final
  // output is still resized/cropped to 1200x800 with sharp.
  const url = `${POLLINATIONS_URL}/${encoded}?width=1024&height=768&seed=${seed}&nologo=true&negative_prompt=text,logo,watermark,religious,plastic,neon,flair`
  // Pollinations free endpoint can occasionally hang; cap wait at 90s.
  const res = await fetchWithTimeout(url, 90_000)
  if (!res.ok) throw new Error(`Pollinations ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

// Set to true once OpenAI returns a billing-limit error so we stop wasting
// time (and failed-request budget) on subsequent jobs.
let openAiBillingLimited = false

async function generateRaw(job: ImageJob, seed: number): Promise<{ buffer: Buffer; provider: Provider }> {
  const fullPrompt = `${job.prompt}. ${BRAND_RULES}. ${NEGATIVE}`

  // Try OpenAI first only while the key still has quota.
  if (!openAiBillingLimited) {
    try {
      const buf = await generateWithOpenAI(fullPrompt)
      if (buf) return { buffer: buf, provider: 'openai' }
    } catch (openaiErr) {
      const openaiMsg = openaiErr instanceof Error ? openaiErr.message : String(openaiErr)
      if (openaiMsg.includes('billing') || openaiMsg.includes('Billing hard limit')) {
        openAiBillingLimited = true
        console.warn('   OpenAI billing limit reached — switching to Pollinations for remaining images.')
      } else if (!openaiMsg.includes('520')) {
        console.warn(`   OpenAI failed (${openaiMsg}), trying Pollinations...`)
      }
    }
  }

  // Pollinations primary / fallback
  let lastPollErr: unknown
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const buf = await generateWithPollinations(job.prompt, seed + attempt)
      return { buffer: buf, provider: 'pollinations' }
    } catch (pollErr) {
      lastPollErr = pollErr
      const pollMsg = pollErr instanceof Error ? pollErr.message : String(pollErr)
      const is429 = pollMsg.includes('429')
      const is500 = pollMsg.includes('500')
      console.warn(`   Pollinations attempt ${attempt}/3 failed (${pollMsg})`)
      if (attempt < 3) {
        // Back off more aggressively on rate-limit / server errors.
        await sleep(is429 || is500 ? 10000 * attempt : 2000 * attempt)
      }
    }
  }

  // Try BFL last
  try {
    const buf = await generateWithBfl(fullPrompt)
    if (buf) return { buffer: buf, provider: 'bfl' }
  } catch {
    // fall through
  }

  throw new Error(`All providers failed. Last Pollinations error: ${lastPollErr instanceof Error ? lastPollErr.message : String(lastPollErr)}`)
}

function limitConcurrency<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results = new Array<T>(tasks.length)
    let running = 0
    let index = 0
    let completed = 0
    let rejected = false

    function runNext() {
      if (rejected) return
      if (completed >= tasks.length) {
        resolve(results)
        return
      }
      while (running < limit && index < tasks.length) {
        const i = index++
        running++
        tasks[i]()
          .then((result) => {
            results[i] = result
          })
          .catch((err) => {
            rejected = true
            reject(err)
          })
          .finally(() => {
            running--
            completed++
            runNext()
          })
      }
    }

    runNext()
  })
}

async function processJob(job: ImageJob, index: number, total: number): Promise<JobResult> {
  const outPath = join(OUT_DIR, job.filename)

  if (existsSync(outPath)) {
    const stats = await sharp(outPath).metadata()
    const sizeKB = Math.round((readFileSync(outPath).length / 1024) * 10) / 10
    console.log(`⏭️  [${index + 1}/${total}] SKIP existing ${job.filename} (${stats.width}x${stats.height}, ${sizeKB} KB)`)
    return { ok: true, filename: job.filename, provider: 'openai', sizeKB, dims: `${stats.width}x${stats.height}` }
  }

  console.log(`🎨 [${index + 1}/${total}] ${job.type.toUpperCase()} → ${job.filename}`)

  try {
    const { buffer: raw, provider } = await generateRaw(job, 1000 + index)
    let pipeline = sharp(raw)
    const meta = await pipeline.clone().metadata()

    let outputBuffer: Buffer
    let finalMeta: sharp.Metadata

    if (job.type === 'og') {
      const bg = await pipeline
        .resize(1200, 630, { fit: 'cover', position: 'centre' })
        .jpeg({ quality: 88, progressive: true })
        .toBuffer()

      const textOverlay = await sharp(makeOgSvg(job.ogTitle!))
        .resize(1200, 630, { fit: 'fill' })
        .png()
        .toBuffer()

      outputBuffer = await sharp(bg)
        .composite([{ input: textOverlay, blend: 'over' }])
        .jpeg({ quality: 88, progressive: true })
        .toBuffer()

      let quality = 88
      while (outputBuffer.length > 120 * 1024 && quality > 60) {
        quality -= 4
        outputBuffer = await sharp(outputBuffer).jpeg({ quality, progressive: true }).toBuffer()
      }

      finalMeta = await sharp(outputBuffer).metadata()
    } else if (job.type === 'gallery') {
      // Gallery images: 1200x800 WebP, max 100 KB.
      const targetWidth = 1200
      const targetHeight = 800
      const maxSizeKB = 100

      pipeline = pipeline.resize(targetWidth, targetHeight, { fit: 'cover', position: 'centre' })

      let quality = 78
      outputBuffer = await pipeline.webp({ quality }).toBuffer()

      while (outputBuffer.length > maxSizeKB * 1024 && quality > 50) {
        quality -= 3
        outputBuffer = await sharp(raw)
          .resize(targetWidth, targetHeight, { fit: 'cover', position: 'centre' })
          .webp({ quality })
          .toBuffer()
      }

      finalMeta = await sharp(outputBuffer).metadata()
    } else {
      const targetWidth = job.type === 'hero' ? 1440 : 1200
      const maxSizeKB = job.type === 'hero' ? 150 : 100
      if ((meta.width ?? 0) > targetWidth) {
        pipeline = pipeline.resize({ width: targetWidth })
      } else if ((meta.width ?? 0) < targetWidth) {
        // Upscale smaller fallback images (e.g. Pollinations returns 940px wide)
        pipeline = pipeline.resize({ width: targetWidth, fit: 'cover' })
      }

      let quality = job.type === 'hero' ? 82 : 78
      outputBuffer = await pipeline.webp({ quality }).toBuffer()

      while (outputBuffer.length > maxSizeKB * 1024 && quality > 50) {
        quality -= 3
        outputBuffer = await sharp(raw)
          .resize({ width: targetWidth, fit: 'cover' })
          .webp({ quality })
          .toBuffer()
      }

      finalMeta = await sharp(outputBuffer).metadata()
    }

    writeFileSync(outPath, outputBuffer)
    const sizeKB = Math.round((outputBuffer.length / 1024) * 10) / 10
    console.log(`✅ [${index + 1}/${total}] ${provider} → ${job.filename} (${finalMeta.width}x${finalMeta.height}, ${sizeKB} KB)`)
    return { ok: true, filename: job.filename, provider, sizeKB, dims: `${finalMeta.width}x${finalMeta.height}` }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`❌ [${index + 1}/${total}] failed ${job.filename}: ${message}`)
    return { ok: false, filename: job.filename, provider: 'pollinations', error: message }
  }
}

async function main(): Promise<void> {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  const jobs = buildJobs()
  const galleryCount = jobs.filter((j) => j.type === 'gallery').length
  console.log(`\n🚀 Generating ${jobs.length} bar-services images (${galleryCount} gallery images across 22 pages)...`)
  console.log(`Providers: OpenAI (${OPENAI_MODEL}, 1536x1024, quality: high) → Pollinations → BFL\n`)

  // Sequential processing keeps the free Pollinations endpoint stable.
  // A short pause between jobs reduces rate-limit risk.
  const results: JobResult[] = []
  for (let i = 0; i < jobs.length; i++) {
    results.push(await processJob(jobs[i], i, jobs.length))
    if (i < jobs.length - 1) await sleep(1500)
  }

  const ok = results.filter((r) => r.ok)
  const failed = results.filter((r) => !r.ok)
  const providers = results.reduce((acc, r) => {
    if (r.ok) acc[r.provider] = (acc[r.provider] || 0) + 1
    return acc
  }, {} as Record<Provider, number>)

  const galleryOk = results.filter((r) => r.ok && r.filename.includes('-gallery-')).length

  console.log(`\n📊 Summary: ${ok.length}/${jobs.length} succeeded, ${failed.length} failed`)
  console.log(`Gallery images: ${galleryOk}/${galleryCount}`)
  console.log('Providers used:', providers)
  if (failed.length > 0) {
    console.log('\nMissing files:')
    for (const f of failed) console.log(`  - ${f.filename}: ${f.error}`)
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    total: jobs.length,
    succeeded: ok.length,
    failed: failed.length,
    galleryCount,
    gallerySucceeded: galleryOk,
    providers,
    files: results,
  }
  writeFileSync(join(OUT_DIR, 'mychef-bar-services-images-manifest.json'), JSON.stringify(manifest, null, 2))

  if (failed.length > 0) process.exit(1)
}

main().catch((err) => {
  console.error('Batch generation failed:', err.message)
  process.exit(1)
})
