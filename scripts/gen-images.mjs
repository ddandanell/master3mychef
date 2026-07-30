/**
 * gen-images.mjs — plain-Node image generator for the Vercel AI Gateway.
 *
 * Why this exists alongside scripts/generate-image.ts:
 *   `tsx` cannot run in the Cowork Linux sandbox (node_modules carries the macOS
 *   @esbuild/darwin-arm64 binary), and `sharp` is likewise a macOS native build.
 *   This file uses only Node built-ins so it runs anywhere, and shells out to
 *   ImageMagick for the WebP conversion instead of sharp.
 *
 * Usage:
 *   set -a; . ./.env.local; set +a
 *   node scripts/gen-images.mjs <jobs.json>
 *
 * jobs.json: [{ "out": "file-name", "prompt": "...", "size": "1536x1024" }, ...]
 * Writes public/generated/<out>.webp
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const GATEWAY = process.env.AI_GATEWAY_BASE_URL || 'https://ai-gateway.vercel.sh/v1'
const KEY = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_AI_GATEWAY_KEY
const MODEL = process.env.IMAGE_MODEL || 'google/imagen-4.0-generate-001'
const OUT_DIR = 'public/generated'
const TMP = '/tmp'

if (!KEY) throw new Error('AI_GATEWAY_API_KEY not set — run: set -a; . ./.env.local; set +a')

/**
 * Shared realism contract. Every prompt gets this appended.
 * The negative clauses matter more than the positive ones: the failure mode we are
 * correcting is "looks like an AI image" (waxy skin, plastic sheen, symmetrical
 * over-lit staging) and "not actually Indonesian" (Western faces, US kitchens,
 * temperate supermarket produce).
 */
const REALISM =
  'Shot on a full-frame DSLR with a fast prime lens, natural available light, ' +
  'authentic reportage photography, true-to-life skin texture with visible pores and ' +
  'fine lines, natural skin tone variation, imperfect candid composition, subtle motion, ' +
  'genuine unposed expression, real-world clutter and wear. ' +
  'NOT AI-generated, NOT CGI, NOT a 3D render, NOT airbrushed, NOT waxy or plastic skin, ' +
  'NOT over-saturated, NOT a symmetrical studio setup, NOT stock-photo staging.'

async function generate(job) {
  const size = job.size || '1536x1024'
  const prompt = `${job.prompt}\n\n${REALISM}`
  process.stdout.write(`\n🎨 ${job.out}  [${MODEL} ${size}]\n`)

  const res = await fetch(`${GATEWAY}/images/generations`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, prompt, n: 1, size }),
  })
  if (!res.ok) {
    console.error(`   ✗ gateway ${res.status}: ${(await res.text()).slice(0, 400)}`)
    return false
  }
  const json = await res.json()
  const item = json.data?.[0]
  if (!item) {
    console.error('   ✗ no image in response:', JSON.stringify(json).slice(0, 300))
    return false
  }

  const raw = item.b64_json
    ? Buffer.from(item.b64_json, 'base64')
    : Buffer.from(await (await fetch(item.url)).arrayBuffer())

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
  const tmp = join(TMP, `${job.out}.src`)
  writeFileSync(tmp, raw)

  // sharp is unavailable in the sandbox; ImageMagick does the same job here.
  const outPath = join(OUT_DIR, `${job.out}.webp`)
  const maxW = job.width || 1600
  execFileSync('convert', [tmp, '-resize', `${maxW}>`, '-quality', '82', outPath])

  const kb = Math.round(readFileSync(outPath).length / 1024)
  console.log(`   ✓ ${outPath} (${kb} KB)`)
  return true
}

const jobs = JSON.parse(readFileSync(process.argv[2], 'utf8'))
let ok = 0
for (const job of jobs) {
  try {
    if (await generate(job)) ok++
  } catch (err) {
    console.error(`   ✗ ${job.out}: ${err.message}`)
  }
}
console.log(`\n${ok}/${jobs.length} generated`)
