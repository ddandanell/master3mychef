import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = './dist'
const SITEMAP = './public/sitemap.xml'
const DOMAIN = 'https://mychef.id'

interface PageAudit {
  route: string
  file: string
  title: string | null
  titleLength: number
  description: string | null
  descriptionLength: number
  h1s: string[]
  canonical: string | null
  ogTitle: string | null
  ogDescription: string | null
  ogImage: string | null
  ogUrl: string | null
  twitterCard: string | null
  robots: string | null
  schemas: { type: string; raw: string }[]
  images: { src: string; alt: string | null; missingAlt: boolean }[]
  internalLinks: string[]
  externalLinks: string[]
  redirectSourceLinks: string[]
  wordCount: number
  inSitemap: boolean
}

const issues: Record<string, string[]> = {}
function add(issue: string, route: string) {
  if (!issues[issue]) issues[issue] = []
  issues[issue].push(route)
}

function walk(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full, files)
    } else if (entry.name === 'index.html') {
      files.push(full)
    }
  }
  return files
}

function routeFromFile(file: string): string {
  const rel = relative(DIST, file)
  const dir = rel.replace(/index\.html$/, '')
  return '/' + dir.replace(/\/$/, '')
}

function attr(tag: string, name: string): string | null {
  const double = tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))
  if (double) return double[1]
  const single = tag.match(new RegExp(`\\b${name}='([^']*)'`, 'i'))
  return single ? single[1] : null
}

function tagContent(html: string, tag: string): string | null {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return m ? m[1].trim() : null
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length
}

function extractSchemas(html: string): { type: string; raw: string }[] {
  const out: { type: string; raw: string }[] = []
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    try {
      const raw = m[1].trim()
      const parsed = JSON.parse(raw)
      const type = Array.isArray(parsed)
        ? parsed.map((p) => p['@type']).join(', ')
        : parsed['@type'] || 'Unknown'
      out.push({ type, raw })
    } catch {
      out.push({ type: 'Invalid JSON', raw: m[1].trim().slice(0, 200) })
    }
  }
  return out
}

function main() {
  const files = walk(DIST)
  const sitemapXml = readFileSync(SITEMAP, 'utf8')
  const sitemapPaths = new Set<string>(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
      const url = m[1]
      const path = url.replace(DOMAIN, '') || '/'
      // Treat trailing-slash variants as the same route as the file system audit.
      return path === '/' ? path : path.replace(/\/$/, '')
    })
  )

  // Redirect map from source of truth
  const redirectsModule = readFileSync('./src/data/redirects.ts', 'utf8')
  const redirectSources = new Set<string>(
    [...redirectsModule.matchAll(/from:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
  )

  const pages: PageAudit[] = []
  const titles: Record<string, string[]> = {}
  const descriptions: Record<string, string[]> = {}

  for (const file of files) {
    const route = routeFromFile(file)
    if (route === '/404') continue
    if (redirectSources.has(route)) continue
    const html = readFileSync(file, 'utf8')

    const title = tagContent(html, 'title')
    const description =
      attr(
        html.match(/<meta[^>]*name=["']description["'][^>]*>/i)?.[0] || '',
        'content'
      ) || null
    const canonical =
      attr(
        html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || '',
        'href'
      ) || null
    const ogTitle =
      attr(html.match(/<meta[^>]*property=["']og:title["'][^>]*>/i)?.[0] || '', 'content') || null
    const ogDescription =
      attr(
        html.match(/<meta[^>]*property=["']og:description["'][^>]*>/i)?.[0] || '',
        'content'
      ) || null
    const ogImage =
      attr(html.match(/<meta[^>]*property=["']og:image["'][^>]*>/i)?.[0] || '', 'content') || null
    const ogUrl =
      attr(html.match(/<meta[^>]*property=["']og:url["'][^>]*>/i)?.[0] || '', 'content') || null
    const twitterCard =
      attr(html.match(/<meta[^>]*name=["']twitter:card["'][^>]*>/i)?.[0] || '', 'content') || null
    const robots =
      attr(html.match(/<meta[^>]*name=["']robots["'][^>]*>/i)?.[0] || '', 'content') || null

    const h1s: string[] = []
    const h1Re = /<h1[\s>][\s\S]*?<\/h1>/gi
    let h1m
    while ((h1m = h1Re.exec(html)) !== null) {
      h1s.push(stripTags(h1m[0]))
    }

    const schemas = extractSchemas(html)

    const images: { src: string; alt: string | null; missingAlt: boolean }[] = []
    const imgRe = /<img[^>]*>/gi
    let imgm
    while ((imgm = imgRe.exec(html)) !== null) {
      const src = attr(imgm[0], 'src') || ''
      const alt = attr(imgm[0], 'alt')
      images.push({ src, alt, missingAlt: !alt || alt.trim().length === 0 })
    }

    const internalLinks: string[] = []
    const externalLinks: string[] = []
    const redirectSourceLinks: string[] = []
    const linkRe = /<(a|link)[^>]*href=["']([^"']+)["'][^>]*>/gi
    let lm
    while ((lm = linkRe.exec(html)) !== null) {
      const href = lm[2]
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
      if (href.startsWith('/') || href.startsWith(DOMAIN)) {
        const path = href.replace(DOMAIN, '')
        internalLinks.push(path)
        if (redirectSources.has(path)) redirectSourceLinks.push(path)
      } else if (/^https?:\/\//i.test(href)) {
        externalLinks.push(href)
      }
    }

    const text = stripTags(html)
    const wc = wordCount(text)

    const page: PageAudit = {
      route,
      file: relative(DIST, file),
      title,
      titleLength: title ? title.length : 0,
      description,
      descriptionLength: description ? description.length : 0,
      h1s,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterCard,
      robots,
      schemas,
      images,
      internalLinks,
      externalLinks,
      redirectSourceLinks,
      wordCount: wc,
      inSitemap: sitemapPaths.has(route),
    }
    pages.push(page)

    // Title/description duplicate tracking
    if (title) {
      if (!titles[title]) titles[title] = []
      titles[title].push(route)
    }
    if (description) {
      if (!descriptions[description]) descriptions[description] = []
      descriptions[description].push(route)
    }

    // Issue detection
    if (!title || title.trim().length === 0) add('Missing title', route)
    else {
      if (title.length > 70) add(`Title too long (${title.length} chars)`, route)
      if (title.length < 30) add(`Title too short (${title.length} chars)`, route)
    }

    if (!description || description.trim().length === 0) add('Missing meta description', route)
    else {
      if (description.length > 160) add(`Meta description too long (${description.length} chars)`, route)
      if (description.length < 70) add(`Meta description too short (${description.length} chars)`, route)
    }

    // Noindex utility pages don't need an H1 for ranking; their shells are meta-only.
    const isNoindex = robots ? robots.toLowerCase().includes('noindex') : false
    if (h1s.length === 0 && !isNoindex) add('Missing H1', route)
    if (h1s.length > 1) add('Multiple H1 tags', route)

    if (!canonical) add('Missing canonical tag', route)
    else {
      const expected = `${DOMAIN}${route === '/' ? '' : route}/`
      if (!canonical.replace(/\/$/, '').endsWith(route.replace(/\/$/, ''))) {
        add(`Canonical mismatch (expected ${expected}, got ${canonical})`, route)
      }
    }

    if (!ogTitle) add('Missing og:title', route)
    if (!ogDescription) add('Missing og:description', route)
    if (!ogImage) add('Missing og:image', route)
    if (!ogUrl) add('Missing og:url', route)
    if (!twitterCard) add('Missing twitter:card', route)

    if (schemas.length === 0) add('No JSON-LD schema', route)

    const missingAlt = images.filter((i) => i.missingAlt).length
    if (missingAlt > 0) add(`${missingAlt} image(s) missing alt text`, route)

    if (wc < 300) add(`Thin content (${wc} words)`, route)

    if (redirectSourceLinks.length > 0) {
      add(`Links to redirect sources: ${redirectSourceLinks.join(', ')}`, route)
    }

    // Noindex utility pages are intentionally excluded from the sitemap.
    if (!page.inSitemap && !isNoindex) add('Not in sitemap', route)
  }

  // Duplicate titles/descriptions
  for (const [title, routes] of Object.entries(titles)) {
    if (routes.length > 1) add(`Duplicate title: "${title}"`, routes.join(', '))
  }
  for (const [_desc, routes] of Object.entries(descriptions)) {
    if (routes.length > 1) add(`Duplicate meta description`, routes.join(', '))
  }

  // Sitemap pages missing from dist
  const distRoutes = new Set(pages.map((p) => p.route))
  for (const path of sitemapPaths) {
    if (!distRoutes.has(path)) add('Sitemap URL missing from dist', path)
  }

  // Generate report
  const totalPages = pages.length
  const issueCount = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0)

  let report = `# SEO Audit Report\n\n`
  report += `**Site:** ${DOMAIN}\n`
  report += `**Pages audited:** ${totalPages}\n`
  report += `**Total issues:** ${issueCount}\n`
  report += `**Sitemap URLs:** ${sitemapPaths.size}\n\n`

  report += `## Summary by issue\n\n`
  const sortedIssues = Object.entries(issues).sort((a, b) => b[1].length - a[1].length)
  for (const [issue, routes] of sortedIssues) {
    report += `- **${issue}** — ${routes.length} page(s)\n`
  }

  report += `\n## Detailed findings\n\n`
  for (const [issue, routes] of sortedIssues) {
    report += `### ${issue}\n`
    for (const r of routes.slice(0, 20)) {
      report += `- ${r}\n`
    }
    if (routes.length > 20) report += `- ... and ${routes.length - 20} more\n`
    report += `\n`
  }

  report += `\n## Page-level scores (sample)\n\n`
  report += `| Route | Title | Desc | H1 | Schema | Words | In Sitemap |\n`
  report += `|-------|-------|------|----|--------|-------|------------|\n`
  for (const p of pages.slice(0, 30)) {
    report += `| ${p.route} | ${p.titleLength} | ${p.descriptionLength} | ${p.h1s.length} | ${p.schemas.length} | ${p.wordCount} | ${p.inSitemap ? 'Yes' : 'No'} |\n`
  }
  if (pages.length > 30) report += `| ... | | | | | | |\n`

  // Simple health score
  const maxScore = totalPages * 10
  let deductions = 0
  deductions += (issues['Missing title']?.length || 0) * 10
  deductions += (issues['Missing meta description']?.length || 0) * 5
  deductions += (issues['Missing H1']?.length || 0) * 8
  deductions += (issues['Multiple H1 tags']?.length || 0) * 4
  deductions += (issues['Missing canonical tag']?.length || 0) * 6
  deductions += Object.entries(issues).filter(([k]) => k.startsWith('Title too long')).reduce((s, [, r]) => s + r.length, 0) * 2
  deductions += Object.entries(issues).filter(([k]) => k.startsWith('Meta description too long')).reduce((s, [, r]) => s + r.length, 0) * 2
  deductions += (issues['No JSON-LD schema']?.length || 0) * 3
  deductions += (issues['Not in sitemap']?.length || 0) * 4
  const score = Math.max(0, Math.round(((maxScore - deductions) / maxScore) * 100))

  report += `\n## Approximate SEO Health Score\n\n**${score}/100** (rough estimate based on on-page fundamentals)\n`

  mkdirSync('./reports', { recursive: true })
  writeFileSync('./reports/SEO_AUDIT_2026-07-19.md', report)
  writeFileSync('./reports/SEO_AUDIT_2026-07-19.json', JSON.stringify({ score, totalPages, issues, pages }, null, 2))

  console.log(`Audited ${totalPages} pages. Score: ${score}/100. Issues: ${issueCount}`)
  console.log('Report written to reports/SEO_AUDIT_2026-07-19.md')
}

main()
