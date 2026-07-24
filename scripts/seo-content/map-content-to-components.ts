import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import {
  LANDING_PAGE_SLUGS,
  AREA_SLUGS,
  MICRO_AREA_SLUGS,
} from '../../src/data/route-slugs'
import { PUBLISHED_AREA_SLUGS } from '../../src/data/privateChefAreas'
import { BAR_SERVICE_SLUGS } from '../../src/data/bar-services/services'

const CONTENT_DIR = '/Users/openclaw/Movies/LIve website/mychef-seo/content'
const APP_TSX = 'src/App.tsx'
const PAGES_DIR = 'src/pages'
const COMPONENTS_DIR = 'src/components'

const AREA_SLUG_SET = new Set(AREA_SLUGS.map((a) => a.slug))
const MICRO_AREA_SLUG_SET = new Set(MICRO_AREA_SLUGS.map((a) => a.slug))
const LANDING_SLUG_SET = new Set(LANDING_PAGE_SLUGS)
const PUBLISHED_PRIVATE_CHEF_AREA_SET = new Set(PUBLISHED_AREA_SLUGS)
const BAR_SERVICE_SLUG_SET = new Set(BAR_SERVICE_SLUGS)

function contentFileToUrl(filename: string): string | null {
  const base = filename.replace(/\.md$/, '')

  if (base === 'home') return '/'

  if (base.startsWith('_private-chef_')) {
    return '/private-chef/' + base.replace('_private-chef_', '').replace(/_/g, '-')
  }
  if (base.startsWith('_locations_')) {
    return '/locations/' + base.replace('_locations_', '').replace(/_/g, '-')
  }

  let pathPart = base
  if (pathPart.startsWith('_')) pathPart = pathPart.slice(1)
  pathPart = pathPart.replace(/_/g, '/')
  return '/' + pathPart
}

function findRouteComponent(appContent: string, url: string): string | null {
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

function classifyDynamicRoute(url: string): { component: string; componentFile: string; status: string; note?: string } | null {
  const pathname = url.replace(/\/$/, '') || '/'

  // Bar services hub — trailing slash normalization
  if (pathname === '/bar-services') {
    return { component: 'BarServicesHubPage', componentFile: 'src/pages/BarServicesHubPage.tsx', status: 'OK', note: 'trailing-slash-normalized' }
  }

  // Bar service detail pages
  const barServiceMatch = pathname.match(/^\/bar-services\/([^/]+)\/?$/)
  if (barServiceMatch) {
    const slug = barServiceMatch[1]
    if (BAR_SERVICE_SLUG_SET.has(slug)) {
      return { component: 'BarServicePage', componentFile: 'src/pages/BarServicePage.tsx', status: 'OK', note: `dynamic-bar-service:${slug}` }
    }
  }

  // Private chef area landing pages
  const privateChefMatch = pathname.match(/^\/private-chef\/([^/]+)$/)
  if (privateChefMatch) {
    const slug = privateChefMatch[1]
    if (PUBLISHED_PRIVATE_CHEF_AREA_SET.has(slug)) {
      return { component: 'PrivateChefAreaPage', componentFile: 'src/components/PrivateChefAreaPage.tsx', status: 'OK', note: `dynamic-private-chef-area:${slug}` }
    }
    if (AREA_SLUG_SET.has(slug) || MICRO_AREA_SLUG_SET.has(slug)) {
      return { component: 'PrivateChefAreaPage', componentFile: 'src/components/PrivateChefAreaPage.tsx', status: 'OK', note: `dynamic-private-chef-area-unpublished:${slug}` }
    }
  }

  // Locations pages
  const locationMatch = pathname.match(/^\/locations\/([^/]+)$/)
  if (locationMatch) {
    const slug = locationMatch[1]
    if (slug === 'jakarta') {
      return { component: '', componentFile: '', status: 'HIDE', note: 'bali-only-focus' }
    }
  }

  // Landing pages rendered by LandingPage component
  const landingSlug = pathname.replace(/^\//, '')
  if (LANDING_SLUG_SET.has(landingSlug)) {
    return { component: 'LandingPage', componentFile: 'src/components/LandingPage.tsx', status: 'OK', note: `dynamic-landing:${landingSlug}` }
  }

  // Menteng is Jakarta-only per user directive
  if (landingSlug === 'private-chef-menteng') {
    return { component: '', componentFile: '', status: 'HIDE', note: 'bali-only-focus' }
  }

  return null
}

function main() {
  const appContent = readFileSync(APP_TSX, 'utf-8')
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md')).sort()

  const rows: Array<{
    content_file: string
    derived_url: string
    component: string
    component_file: string
    status: string
    note: string
  }> = []

  for (const file of files) {
    const url = contentFileToUrl(file)
    if (!url) {
      rows.push({ content_file: file, derived_url: '', component: '', component_file: '', status: 'URL_PARSE_ERROR', note: '' })
      continue
    }

    const dynamic = classifyDynamicRoute(url)
    if (dynamic) {
      rows.push({
        content_file: file,
        derived_url: url,
        component: dynamic.component,
        component_file: dynamic.componentFile,
        status: dynamic.status,
        note: dynamic.note || '',
      })
      continue
    }

    const component = findRouteComponent(appContent, url)
    if (!component) {
      rows.push({ content_file: file, derived_url: url, component: '', component_file: '', status: 'NO_ROUTE', note: '' })
      continue
    }

    const componentFile = findComponentFile(component)
    if (!componentFile) {
      rows.push({ content_file: file, derived_url: url, component, component_file: '', status: 'COMPONENT_FILE_NOT_FOUND', note: '' })
      continue
    }

    rows.push({ content_file: file, derived_url: url, component, component_file: componentFile, status: 'OK', note: '' })
  }

  const csv = [
    'content_file,derived_url,component,component_file,status,note',
    ...rows.map((r) => `${r.content_file},${r.derived_url},${r.component},${r.component_file},${r.status},${r.note}`),
  ].join('\n')

  writeFileSync('scripts/seo-content/map-content-to-components.csv', csv, 'utf-8')

  const okCount = rows.filter((r) => r.status === 'OK').length
  const hideCount = rows.filter((r) => r.status === 'HIDE').length
  console.log(`Mapped ${okCount}/${files.length} content files.`)
  if (hideCount > 0) console.log(`${hideCount} file(s) marked HIDE (Bali-only focus).`)
  const issues = rows.filter((r) => r.status !== 'OK' && r.status !== 'HIDE')
  if (issues.length > 0) {
    console.log('\nIssues:')
    for (const r of issues) {
      console.log(`  ${r.content_file} -> ${r.derived_url}: ${r.status}`)
    }
  }
}

main()
