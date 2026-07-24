import { readFileSync } from 'node:fs'

const csv = readFileSync('scripts/seo-content/map-content-to-components.csv', 'utf-8')
const lines = csv.trim().split('\n').slice(1)

let ok = 0
let hide = 0
let issues = 0

for (const line of lines) {
  const [content_file, derived_url, component, component_file, status, note] = line.split(',')
  if (status === 'OK') {
    ok++
    if (!component || !component_file) {
      console.error(`ERROR: OK row missing component or file: ${content_file}`)
      issues++
    }
  } else if (status === 'HIDE') {
    hide++
  } else {
    console.error(`ERROR: ${content_file} -> ${derived_url}: ${status}${note ? ` (${note})` : ''}`)
    issues++
  }
}

console.log(`OK: ${ok}, HIDE: ${hide}, Issues: ${issues}`)
if (issues > 0) process.exit(1)
console.log('verify-mapping: all content files resolved.')
