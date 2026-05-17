#!/usr/bin/env tsx
/**
 * Pre-Launch Baseline Analysis
 * Run this before May 25 launch to capture site architecture metrics
 * These metrics will be compared against post-optimization results in Phase 5
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

interface PageMetrics {
  url: string
  wordCount: number
  h1Count: number
  h2Count: number
  internalLinkCount: number
  imageCount: number
  hasSchema: boolean
  hasFAQ: boolean
}

interface BaselineReport {
  timestamp: string
  totalPages: number
  totalWords: number
  avgWordsPerPage: number
  pagesWithFAQ: number
  pagesWithSchema: number
  avgH2sPerPage: number
  avgLinksPerPage: number
  avgImagesPerPage: number
  pages: PageMetrics[]
}

async function analyzeDistFiles(): Promise<BaselineReport> {
  const distPath = path.join(process.cwd(), 'dist')
  const pages: PageMetrics[] = []

  // Get all HTML files from dist
  const htmlFiles = getAllHtmlFiles(distPath)

  for (const filePath of htmlFiles) {
    const content = fs.readFileSync(filePath, 'utf-8')
    const relativePath = path.relative(distPath, filePath)
    const url = `/${relativePath.replace('/index.html', '').replace('index.html', '')}`

    // Extract metrics
    const wordCount = countWords(content)
    const h1Count = (content.match(/<h1[^>]*>/g) || []).length
    const h2Count = (content.match(/<h2[^>]*>/g) || []).length
    const internalLinkCount = (content.match(/<a[^>]*href="\/[^"]*"/g) || []).length
    const imageCount = (content.match(/<img[^>]*>/g) || []).length
    const hasSchema = content.includes('application/ld+json')
    const hasFAQ = content.includes('FAQPage') || content.includes('Question')

    pages.push({
      url,
      wordCount,
      h1Count,
      h2Count,
      internalLinkCount,
      imageCount,
      hasSchema,
      hasFAQ,
    })
  }

  // Calculate aggregates
  const totalPages = pages.length
  const totalWords = pages.reduce((sum, p) => sum + p.wordCount, 0)
  const avgWordsPerPage = Math.round(totalWords / totalPages)
  const pagesWithFAQ = pages.filter((p) => p.hasFAQ).length
  const pagesWithSchema = pages.filter((p) => p.hasSchema).length
  const avgH2sPerPage = Math.round(
    pages.reduce((sum, p) => sum + p.h2Count, 0) / totalPages
  )
  const avgLinksPerPage = Math.round(
    pages.reduce((sum, p) => sum + p.internalLinkCount, 0) / totalPages
  )
  const avgImagesPerPage = Math.round(
    pages.reduce((sum, p) => sum + p.imageCount, 0) / totalPages
  )

  return {
    timestamp: new Date().toISOString(),
    totalPages,
    totalWords,
    avgWordsPerPage,
    pagesWithFAQ,
    pagesWithSchema,
    avgH2sPerPage,
    avgLinksPerPage,
    avgImagesPerPage,
    pages: pages.sort((a, b) => b.wordCount - a.wordCount),
  }
}

function getAllHtmlFiles(dir: string): string[] {
  const files: string[] = []

  function traverse(currentPath: string) {
    const items = fs.readdirSync(currentPath)

    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        traverse(fullPath)
      } else if (item.endsWith('.html')) {
        files.push(fullPath)
      }
    }
  }

  traverse(dir)
  return files
}

function countWords(html: string): number {
  // Remove HTML tags and count words
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const words = text.split(/\s+/).filter((word) => word.length > 0)
  return words.length
}

async function main() {
  console.log('🔍 Analyzing site architecture...\n')

  const baseline = await analyzeDistFiles()

  // Write JSON report
  const jsonPath = path.join(process.cwd(), 'reports', 'PRE_LAUNCH_BASELINE_2026-05-17.json')
  fs.writeFileSync(jsonPath, JSON.stringify(baseline, null, 2))
  console.log(`✅ JSON report saved: ${jsonPath}`)

  // Write human-readable markdown report
  const mdPath = path.join(process.cwd(), 'reports', 'PRE_LAUNCH_BASELINE_2026-05-17.md')
  const mdContent = `# Pre-Launch Baseline Report
**Generated:** ${baseline.timestamp}

## Site Architecture Summary

| Metric | Value |
|--------|-------|
| Total Pages | ${baseline.totalPages} |
| Total Word Count | ${baseline.totalWords.toLocaleString()} |
| Avg Words/Page | ${baseline.avgWordsPerPage} |
| Pages with FAQ Schema | ${baseline.pagesWithFAQ} (${Math.round((baseline.pagesWithFAQ / baseline.totalPages) * 100)}%) |
| Pages with Schema Markup | ${baseline.pagesWithSchema} (${Math.round((baseline.pagesWithSchema / baseline.totalPages) * 100)}%) |
| Avg H2s per Page | ${baseline.avgH2sPerPage} |
| Avg Internal Links/Page | ${baseline.avgLinksPerPage} |
| Avg Images/Page | ${baseline.avgImagesPerPage} |

## Top Pages by Word Count

| URL | Words | H1s | H2s | Links | Images | Schema | FAQ |
|-----|-------|-----|-----|-------|--------|--------|-----|
${baseline.pages
  .slice(0, 20)
  .map(
    (p) =>
      `| ${p.url} | ${p.wordCount} | ${p.h1Count} | ${p.h2Count} | ${p.internalLinkCount} | ${p.imageCount} | ${p.hasSchema ? '✓' : '✗'} | ${p.hasFAQ ? '✓' : '✗'} |`
  )
  .join('\n')}

## Optimization Opportunities

### Pages Under 500 Words
${baseline.pages
  .filter((p) => p.wordCount < 500)
  .slice(0, 10)
  .map((p) => `- ${p.url} (${p.wordCount} words)`)
  .join('\n') || 'None'}

### Pages Missing H2s
${baseline.pages
  .filter((p) => p.h2Count === 0)
  .slice(0, 10)
  .map((p) => `- ${p.url}`)
  .join('\n') || 'None'}

### Pages Missing Schema
${baseline.pages
  .filter((p) => !p.hasSchema)
  .slice(0, 10)
  .map((p) => `- ${p.url}`)
  .join('\n') || 'None'}

---

**Next Steps:**
1. Use this baseline to compare against post-optimization metrics in Phase 5 Week 2+
2. Target pages with <500 words for content expansion
3. Add H2 structure to pages with 0 H2s
4. Implement schema markup for pages without it
`

  fs.writeFileSync(mdPath, mdContent)
  console.log(`✅ Markdown report saved: ${mdPath}\n`)

  // Print summary
  console.log('📊 Summary:')
  console.log(`   ${baseline.totalPages} pages analyzed`)
  console.log(`   ${baseline.totalWords.toLocaleString()} total words`)
  console.log(`   ${baseline.avgWordsPerPage} avg words/page`)
  console.log(`   ${baseline.pagesWithFAQ}/${baseline.totalPages} pages with FAQ`)
  console.log(`   ${baseline.pagesWithSchema}/${baseline.totalPages} pages with schema\n`)

  console.log('✅ Pre-launch baseline complete!')
  console.log('   Use reports/PRE_LAUNCH_BASELINE_2026-05-17.md for human review')
  console.log('   Use reports/PRE_LAUNCH_BASELINE_2026-05-17.json for automated comparison')
}

main().catch((error) => {
  console.error('Error analyzing baseline:', error)
  process.exit(1)
})
