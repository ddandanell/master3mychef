import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { REDIRECT_MAP } from '@/data/redirects'

export interface ContentEntry {
  slug: string
  title: string
  description: string
  date?: string
  content?: string
  /** Optional per-entry H1 override. When provided, LandingPage uses this for
   *  the page H1 while keeping `title` for the document title tag. */
  h1?: string
  /** Optional per-entry JSON-LD schemas. When provided, LandingPage uses these
   *  instead of its auto-generated breadcrumb/FAQ/service schemas. */
  jsonLd?: Record<string, unknown>[]
}

export type PostKind = 'guide' | 'blog'

export interface PostHeading {
  id: string
  text: string
  level: 2 | 3
}

export interface EnrichedPost extends ContentEntry {
  kind: PostKind
  label: 'Guide' | 'Article'
  path: string
  readTimeMinutes: number
  topics: string[]
  headings: PostHeading[]
}

const WORDS_PER_MINUTE = 220
const FALLBACK_TOPIC = 'Private Chef'
const STOP_WORDS = new Set(['a', 'an', 'and', 'the', 'for', 'with', 'from', 'into', 'your', 'this', 'that', 'bali', 'private', 'chef', 'guide'])

const TOPIC_RULES: { label: string; keywords: string[] }[] = [
  { label: 'Budgeting', keywords: ['cost', 'pricing', 'price', 'budget', 'fees'] },
  { label: 'Villas', keywords: ['villa', 'villas', 'kitchen'] },
  { label: 'Events', keywords: ['wedding', 'birthday', 'party', 'rehearsal', 'celebration'] },
  { label: 'Retreats', keywords: ['retreat', 'yoga', 'wellness'] },
  { label: 'Romantic Dining', keywords: ['romantic', 'proposal', 'honeymoon', 'anniversary'] },
  { label: 'Comparisons', keywords: [' vs ', 'compare', 'comparison', 'restaurant'] },
  { label: 'Planning', keywords: ['planning', 'plan', 'hosting', 'tips'] },
]

function stripHtml(html = '') {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function tokenize(entry: ContentEntry) {
  return new Set(
    `${entry.slug} ${entry.title} ${entry.description}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 2 && !STOP_WORDS.has(token))
  )
}

export function formatBlogDate(iso?: string) {
  if (!iso) return null
  const date = new Date(`${iso}T00:00:00`)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getReadTimeMinutes(entry: ContentEntry) {
  const text = stripHtml(`${entry.description} ${entry.content ?? ''}`)
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0
  return Math.max(3, Math.ceil(words / WORDS_PER_MINUTE))
}

export function extractHeadings(content = ''): PostHeading[] {
  const headings: PostHeading[] = []
  const counts = new Map<string, number>()

  content.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_, level, _attrs, inner) => {
    const text = stripHtml(inner)
    if (!text) return ''

    const baseId = slugify(text) || 'section'
    const existingCount = counts.get(baseId) ?? 0
    counts.set(baseId, existingCount + 1)

    headings.push({
      id: existingCount === 0 ? baseId : `${baseId}-${existingCount + 1}`,
      text,
      level: Number(level) as 2 | 3,
    })

    return ''
  })

  return headings
}

export function injectContentEnhancements(content = '', headings = extractHeadings(content)) {
  let headingIndex = 0

  const withAnchors = content.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const heading = headings[headingIndex++]
    if (!heading) return match

    if (/\sid=/.test(attrs)) {
      return `<h${level}${attrs}>${inner}</h${level}>`
    }

    const normalizedAttrs = attrs.trim() ? `${attrs} ` : ' '
    return `<h${level}${normalizedAttrs}id="${heading.id}">${inner}</h${level}>`
  })

  return withAnchors.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    let nextAttrs = attrs
    if (!/\bloading=/.test(nextAttrs)) nextAttrs += ' loading="lazy"'
    if (!/\bdecoding=/.test(nextAttrs)) nextAttrs += ' decoding="async"'
    if (!/\bfetchpriority=/.test(nextAttrs)) nextAttrs += ' fetchpriority="low"'
    return `<img${nextAttrs}>`
  })
}

export function inferTopics(entry: ContentEntry) {
  const haystack = `${entry.slug} ${entry.title} ${entry.description} ${stripHtml(entry.content ?? '')}`.toLowerCase()
  const topics = TOPIC_RULES.filter(({ keywords }) => keywords.some((keyword) => haystack.includes(keyword))).map(({ label }) => label)

  return (topics.length > 0 ? topics : [FALLBACK_TOPIC]).slice(0, 3)
}

export function enrichPost(entry: ContentEntry, kind: PostKind = entry.slug.startsWith('guide/') ? 'guide' : 'blog'): EnrichedPost {
  // Article bodies now live in the lazy-loaded content store, not the eager
  // metadata array — hydrate here so downstream consumers see full content.
  const hydrated: ContentEntry = { ...entry, content: entry.content ?? ARTICLE_CONTENT[`/${entry.slug}`] ?? '' }
  const headings = extractHeadings(hydrated.content)

  return {
    ...hydrated,
    kind,
    label: kind === 'guide' ? 'Guide' : 'Article',
    path: REDIRECT_MAP[`/${entry.slug}`] ?? `/${entry.slug}`,
    readTimeMinutes: getReadTimeMinutes(hydrated),
    topics: inferTopics(hydrated),
    headings,
  }
}

export function getRelatedPosts(posts: EnrichedPost[], currentPost: EnrichedPost, limit = 3) {
  const currentTokens = tokenize(currentPost)

  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const sharedTopics = post.topics.filter((topic) => currentPost.topics.includes(topic)).length
      const postTokens = tokenize(post)
      const sharedTokens = [...currentTokens].filter((token) => postTokens.has(token)).length
      const recencyScore = post.date ? Date.parse(post.date) : 0
      const sameKindBonus = post.kind === currentPost.kind ? 1 : 0

      return {
        post,
        score: sharedTopics * 10 + sharedTokens * 2 + sameKindBonus,
        recencyScore,
      }
    })
    .sort((a, b) => b.score - a.score || b.recencyScore - a.recencyScore)
    .slice(0, limit)
    .map(({ post }) => post)
}

export function sortPostsByDate<T extends ContentEntry>(posts: T[]) {
  return [...posts].sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date.localeCompare(a.date)
  })
}
