import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const PAGES_DIR = path.join(ROOT, 'src/pages')
const ARTICLE_FILE = path.join(ROOT, 'src/data/content/articleContent.ts')

const TARGETS = [
  { file: 'CateringBBQPage.tsx', route: '/catering/bbq-catering' },
  { file: 'CateringDropOffPage.tsx', route: '/catering/drop-off-catering' },
  { file: 'CateringBuffetPage.tsx', route: '/catering/buffet' },
  { file: 'CateringBabiGulingPage.tsx', route: '/catering/babi-guling' },
  { file: 'CateringGrazingPage.tsx', route: '/catering/grazing-tables' },
  { file: 'CateringPlatedPage.tsx', route: '/catering/plated-catering' },
  { file: 'CateringFloatingBreakfastPage.tsx', route: '/catering/floating-breakfast' },
  { file: 'CateringVillaPage.tsx', route: '/catering/villa-catering' },
  { file: 'CateringCorporatePage.tsx', route: '/catering/corporate-catering' },
  { file: 'CateringRetreatPage.tsx', route: '/catering/retreat-catering' },
  { file: 'EventsWeddingsPage.tsx', route: '/events/weddings' },
  { file: 'EventsBirthdaysPage.tsx', route: '/events/birthdays' },
  { file: 'EventsAnniversariesPage.tsx', route: '/events/anniversaries' },
  { file: 'EventsCorporatePage.tsx', route: '/events/corporate-events' },
  { file: 'EventsRetreatsPage.tsx', route: '/events/retreats' },
  { file: 'EventsBabyShowersPage.tsx', route: '/events/baby-showers' },
  { file: 'EventsVillaPartiesPage.tsx', route: '/events/villa-parties' },
  { file: 'RomanticDinnerPage.tsx', route: '/fine-dining/romantic-dinner' },
  { file: 'TastingMenuPage.tsx', route: '/fine-dining/tasting-menu' },
  { file: 'PrivateChefBaliPage.tsx', route: '/fine-dining/private-chef-bali' },
  { file: 'ChefsTablePage.tsx', route: '/fine-dining/chefs-table' },
  { file: 'FineDiningMenusPage.tsx', route: '/fine-dining/menus' },
  { file: 'FineDiningChefsPage.tsx', route: '/fine-dining/our-chefs' },
  { file: 'ServiceWaitersPage.tsx', route: '/in-villa-service/waiters' },
  { file: 'ServiceButlersPage.tsx', route: '/in-villa-service/butlers' },
  { file: 'ServiceBartendersPage.tsx', route: '/in-villa-service/bartenders' },
  { file: 'ServiceMixologyPage.tsx', route: '/in-villa-service/mixology' },
  { file: 'ServiceSommelierPage.tsx', route: '/in-villa-service/sommelier' },
  { file: 'ServiceHostPage.tsx', route: '/in-villa-service/host-hostess' },
  { file: 'StaffingPlacementPage.tsx', route: '/staffing/private-chef-placement' },
  { file: 'StaffingLiveInPage.tsx', route: '/staffing/live-in-chef' },
  { file: 'StaffingVillaStaffPage.tsx', route: '/staffing/villa-staff' },
  { file: 'StaffingHouseholdPage.tsx', route: '/staffing/household-staff' },
  { file: 'StaffingVillaManagersPage.tsx', route: '/staffing/for-villa-managers' },
  { file: 'StaffingHotelsPage.tsx', route: '/staffing/for-hotels-restaurants' },
  { file: 'ExperiencePrivateCocktailPartyPage.tsx', route: '/experiences/private-cocktail-party' },
  { file: 'ExperienceSushiMasterclassPage.tsx', route: '/experiences/sushi-masterclass' },
  { file: 'ExperiencePrivateCookingClassPage.tsx', route: '/experiences/private-cooking-class' },
  { file: 'ExperienceKidsBirthdayChefPartyPage.tsx', route: '/experiences/kids-birthday-chef-party' },
  { file: 'ExperienceChampagneOysterExperiencePage.tsx', route: '/experiences/champagne-oyster-experience' },
  { file: 'ExperienceRomanticProposalDinnerPage.tsx', route: '/experiences/romantic-proposal-dinner' },
]

const PREMIUM_PAGES = new Set([
  'ExperiencePrivateCocktailPartyPage.tsx',
  'ExperienceSushiMasterclassPage.tsx',
  'ExperiencePrivateCookingClassPage.tsx',
  'ExperienceKidsBirthdayChefPartyPage.tsx',
  'ExperienceChampagneOysterExperiencePage.tsx',
  'ExperienceRomanticProposalDinnerPage.tsx',
])

function readFile(filePath: string) {
  return fs.readFileSync(filePath, 'utf8')
}

function writeFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content, 'utf8')
}

function parseArticleContent(filePath: string): Record<string, string> {
  const content = readFile(filePath)
  const start = content.indexOf('{')
  const end = content.lastIndexOf('}')
  const map: Record<string, string> = {}
  if (start === -1 || end === -1 || end <= start) return map

  let i = start + 1
  const len = end

  function skipWhitespaceAndComments() {
    while (i < len) {
      const ch = content[i]
      if (ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t') {
        i++
      } else if (ch === '/' && content[i + 1] === '/') {
        while (i < len && content[i] !== '\n') i++
      } else if (ch === '/' && content[i + 1] === '*') {
        i += 2
        while (i < len && !(content[i] === '*' && content[i + 1] === '/')) i++
        i += 2
      } else {
        break
      }
    }
  }

  function readString() {
    if (content[i] !== '"') return null
    i++
    let result = ''
    while (i < len) {
      const ch = content[i]
      if (ch === '\\') {
        i++
        const next = content[i]
        if (next === 'n') result += '\n'
        else if (next === 't') result += '\t'
        else if (next === 'r') result += '\r'
        else if (next === '"') result += '"'
        else if (next === '\\') result += '\\'
        else result += next ?? ''
        i++
      } else if (ch === '"') {
        i++
        return result
      } else {
        result += ch
        i++
      }
    }
    return result
  }

  while (i < len) {
    skipWhitespaceAndComments()
    if (i >= len) break
    if (content[i] !== '"') break

    const key = readString()
    if (key == null) break

    skipWhitespaceAndComments()
    if (content[i] !== ':') break
    i++
    skipWhitespaceAndComments()

    const value = readString()
    if (value == null) break
    map[key] = value

    skipWhitespaceAndComments()
    if (content[i] === ',') i++
  }

  return map
}

function stripHtmlEntities(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractTitle(html: string | undefined): string | null {
  if (!html) return null
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (!match) return null
  const text = match[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return stripHtmlEntities(text) || null
}

function fallbackTitle(route: string) {
  const last = route.split('/').pop() || route
  return last
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function insertImport(text: string, importLine: string) {
  if (text.includes(importLine.split('from')[0].trim())) return text
  const lastImportIdx = text.lastIndexOf('import ')
  if (lastImportIdx === -1) return importLine + '\n' + text
  const endOfImport = text.indexOf('\n', lastImportIdx) + 1
  return text.slice(0, endOfImport) + importLine + '\n' + text.slice(endOfImport)
}

function mergeSharedImport(text: string) {
  const match = text.match(/import\s*\{([^}]*)\}\s*from\s*['"]@\/components\/shared['"]/)
  if (!match) return null
  const inside = match[1]
  if (/\bArticleContentSection\b/.test(inside)) return text
  const replacement = `{ ArticleContentSection, ${inside.trim()} }`
  return text.replace(match[0], `import ${replacement} from '@/components/shared'`)
}

function patchHardcoded(filePath: string) {
  let text = readFile(filePath)
  if (/<ArticleContentSection/.test(text)) return 'already-present'

  const merged = mergeSharedImport(text)
  if (merged) {
    text = merged
  } else {
    text = insertImport(text, "import { ArticleContentSection } from '@/components/shared'")
  }

  if (text.includes('<StickyMobileCTA')) {
    text = text.replace(/(\s*)<StickyMobileCTA/, (match, space) => {
      return `${space}<ArticleContentSection />\n${space}<StickyMobileCTA`
    })
  } else {
    text = text.replace(/\n( *)<\/div>\n( *)\)\n\}$/, (match, indent) => {
      return `\n${indent}<ArticleContentSection />\n${indent}</div>\n  )\n}`
    })
  }

  writeFile(filePath, text)
  return 'patched'
}

function patchPremium(filePath: string, route: string, html: string | undefined) {
  let text = readFile(filePath)
  if (/id:\s*['"]seo-content['"]/.test(text)) return 'already-present'

  if (!/ARTICLE_CONTENT/.test(text)) {
    text = insertImport(text, "import { ARTICLE_CONTENT } from '@/data/content/articleContent'")
  }

  const title = extractTitle(html) || fallbackTitle(route)
  const sectionBlock = `  {
    id: 'seo-content',
    type: 'content' as const,
    title: ${JSON.stringify(title)},
    body: ARTICLE_CONTENT['${route}'],
  },
`

  const faqMatch = text.match(/( *)\{\n *id: '[^']+',\n *type: 'faq'(?: as const)?/)
  const featuresMatch = text.match(/( *)\{\n *id: '[^']+',\n *type: 'features'(?: as const)?/)
  let insertIndex = -1
  let indent = '  '

  if (faqMatch && featuresMatch) {
    if (faqMatch.index! < featuresMatch.index!) {
      insertIndex = faqMatch.index!
      indent = faqMatch[1]
    } else {
      insertIndex = featuresMatch.index!
      indent = featuresMatch[1]
    }
  } else if (faqMatch) {
    insertIndex = faqMatch.index!
    indent = faqMatch[1]
  } else if (featuresMatch) {
    insertIndex = featuresMatch.index!
    indent = featuresMatch[1]
  }

  if (insertIndex !== -1) {
    const normalizedBlock = sectionBlock.replace(/^  /gm, indent)
    text = text.slice(0, insertIndex) + normalizedBlock + text.slice(insertIndex)
  } else {
    const ctaMatch = text.match(/( *)\{\n *id: '[^']+',\n *type: 'cta'(?: as const)?/)
    if (ctaMatch) {
      const normalizedBlock = sectionBlock.replace(/^  /gm, ctaMatch[1])
      text = text.slice(0, ctaMatch.index!) + normalizedBlock + text.slice(ctaMatch.index!)
    } else {
      return 'no-anchor'
    }
  }

  writeFile(filePath, text)
  return 'patched'
}

function main() {
  const articleMap = parseArticleContent(ARTICLE_FILE)
  console.log(`Parsed ${Object.keys(articleMap).length} article entries from ${ARTICLE_FILE}`)

  const results = TARGETS.map(({ file, route }) => {
    const filePath = path.join(PAGES_DIR, file)
    if (!fs.existsSync(filePath)) {
      return { file, route, status: 'missing-file' }
    }
    const html = articleMap[route]
    if (!html) {
      return { file, route, status: 'missing-content' }
    }

    if (PREMIUM_PAGES.has(file)) {
      const status = patchPremium(filePath, route, html)
      return { file, route, status, title: extractTitle(html) || fallbackTitle(route) }
    }
    const status = patchHardcoded(filePath)
    return { file, route, status }
  })

  const patched = results.filter((r) => r.status === 'patched')
  const already = results.filter((r) => r.status === 'already-present')
  const failures = results.filter((r) => r.status !== 'patched' && r.status !== 'already-present')

  console.log(`\nPatched: ${patched.length}`)
  patched.forEach((r) => console.log(`  ✓ ${r.file} (${r.route})`))

  if (already.length) {
    console.log(`\nAlready had article content: ${already.length}`)
    already.forEach((r) => console.log(`  • ${r.file}`))
  }

  if (failures.length) {
    console.log(`\nFailures: ${failures.length}`)
    failures.forEach((r) => console.log(`  ✗ ${r.file} -> ${r.route}: ${r.status}`))
    process.exitCode = 1
  } else {
    console.log('\nAll target components processed successfully.')
  }
}

main()
