import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const CONTENT_DIR = '/Users/openclaw/Movies/LIve website/mychef-seo/content'
const APP_TSX = 'src/App.tsx'
const PAGES_DIR = 'src/pages'
const COMPONENTS_DIR = 'src/components'

function contentFileToUrl(filename: string): string | null {
  const base = filename.replace(/\.md$/, '')

  if (base === 'home') return '/'

  // Special prefixes that are real URL path segments
  if (base.startsWith('_private-chef_')) {
    return '/private-chef/' + base.replace('_private-chef_', '').replace(/_/g, '-')
  }
  if (base.startsWith('_locations_')) {
    return '/locations/' + base.replace('_locations_', '').replace(/_/g, '-')
  }

  // Default: underscores become path separators, except leading underscore is stripped
  let pathPart = base
  if (pathPart.startsWith('_')) pathPart = pathPart.slice(1)
  pathPart = pathPart.replace(/_/g, '/')
  return '/' + pathPart
}

function findRouteComponent(appContent: string, url: string): string | null {
  // Escape for regex
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const routeRegex = new RegExp(`<Route\\s+path=["']${escapedUrl}["']\\s+element=\\{<([A-Za-z0-9_]+)`)
  const match = appContent.match(routeRegex)
  return match ? match[1] : null
}

function findComponentFile(componentName: string): string | null {
  const candidates = [
    join(PAGES_DIR, `${componentName}.tsx`),
    join(COMPONENTS_DIR, `${componentName}.tsx`),
  ]
  for (const c of candidates) {
    if (existsSync(c)) return c
  }
  return null
}

function main() {
  const appContent = readFileSync(APP_TSX, 'utf-8')
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).sort()

  const rows: Array<{ content_file: string; derived_url: string; component: string; component_file: string; status: string }> = []

  for (const file of files) {
    const url = contentFileToUrl(file)
    if (!url) {
      rows.push({ content_file: file, derived_url: '', component: '', component_file: '', status: 'URL_PARSE_ERROR' })
      continue
    }

    const component = findRouteComponent(appContent, url)
    if (!component) {
      rows.push({ content_file: file, derived_url: url, component: '', component_file: '', status: 'NO_ROUTE' })
      continue
    }

    const componentFile = findComponentFile(component)
    if (!componentFile) {
      rows.push({ content_file: file, derived_url: url, component, component_file: '', status: 'COMPONENT_FILE_NOT_FOUND' })
      continue
    }

    rows.push({ content_file: file, derived_url: url, component, component_file: componentFile, status: 'OK' })
  }

  const csv = [
    'content_file,derived_url,component,component_file,status',
    ...rows.map((r) => `${r.content_file},${r.derived_url},${r.component},${r.component_file},${r.status}`),
  ].join('\n')

  writeFileSync('scripts/seo-content/map-content-to-components.csv', csv, 'utf-8')

  const okCount = rows.filter((r) => r.status === 'OK').length
  console.log(`Mapped ${okCount}/${files.length} content files.`)
  const issues = rows.filter((r) => r.status !== 'OK')
  if (issues.length > 0) {
    console.log('\nIssues:')
    for (const r of issues) {
      console.log(`  ${r.content_file} -> ${r.derived_url}: ${r.status}`)
    }
  }
}

main()
