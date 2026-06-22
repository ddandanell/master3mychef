#!/usr/bin/env node
// Generate a hero image via Black Forest Labs FLUX 1.1 Pro (middle tier — $0.04/image).
// Usage: BFL_API_KEY=... node scripts/generate-image.mjs <slug> "<prompt>" [width] [height]
//
// The output is saved to public/generated/<slug>.jpg.

import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const apiKey = process.env.BFL_API_KEY
if (!apiKey) {
  console.error('BFL_API_KEY missing. Pass it via env.')
  process.exit(1)
}

const slug = process.argv[2]
const prompt = process.argv[3]
const width = parseInt(process.argv[4] ?? '1440', 10)
const height = parseInt(process.argv[5] ?? '800', 10)

if (!slug || !prompt) {
  console.error('Usage: BFL_API_KEY=... node scripts/generate-image.mjs <slug> "<prompt>" [width] [height]')
  process.exit(1)
}

const base = 'https://api.bfl.ai'

async function startJob() {
  const res = await fetch(`${base}/v1/flux-pro-1.1`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-key': apiKey },
    body: JSON.stringify({
      prompt,
      width,
      height,
      prompt_upsampling: false,
      safety_tolerance: 2,
      output_format: 'jpeg',
    }),
  })
  if (!res.ok) {
    console.error(`POST failed: ${res.status} ${await res.text()}`)
    process.exit(1)
  }
  return res.json()
}

async function pollResult(id, pollUrl) {
  const url = pollUrl || `${base}/v1/get_result?id=${id}`
  for (let i = 0; i < 90; i++) {
    await new Promise((r) => setTimeout(r, 1500))
    const res = await fetch(url, { headers: { 'x-key': apiKey } })
    if (!res.ok) {
      console.error(`Poll failed: ${res.status} ${await res.text()}`)
      process.exit(1)
    }
    const json = await res.json()
    if (json.status === 'Ready') return json.result.sample
    if (json.status === 'Failed' || json.status === 'Error') {
      console.error(`Generation failed: ${JSON.stringify(json)}`)
      process.exit(1)
    }
    process.stdout.write(`.${json.status} `)
  }
  console.error('\nTimeout waiting for image.')
  process.exit(1)
}

console.log(`Submitting prompt for ${slug} (${width}x${height})...`)
const job = await startJob()
console.log(`Job ID: ${job.id}`)

const imageUrl = await pollResult(job.id, job.polling_url)
console.log(`\nImage ready: ${imageUrl.slice(0, 80)}...`)

const img = await fetch(imageUrl)
if (!img.ok) {
  console.error(`Download failed: ${img.status}`)
  process.exit(1)
}
const buf = Buffer.from(await img.arrayBuffer())
const out = join(__dirname, '..', 'public', 'generated', `${slug}.jpg`)
await writeFile(out, buf)
console.log(`Saved to ${out} (${(buf.length / 1024).toFixed(0)} KB)`)
