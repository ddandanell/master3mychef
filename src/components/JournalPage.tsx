import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from './SeoHead'
import { JOURNAL_CATEGORIES, type JournalPost } from '@/data/siteArchitecture'
import { JOURNAL_POSTS } from '@/data/content/journalPosts'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { downgradeArticleH1 } from '@/lib/utils'
import { getPageMetaByPath } from '@/data/page-meta'
import { SITEMAP } from '@/data/sitemap'
import OptimizedImage from '@/components/OptimizedImage'

// Every article route (data-driven BLOG_POSTS + standalone /journal & /guide page
// components) so none get orphaned — sourced from the sitemap, sorted by title.
const ARTICLE_LINKS = SITEMAP
  .filter((e) => e.path.startsWith('/journal') || e.path.startsWith('/guide/'))
  .slice()
  .sort((a, b) => a.title.localeCompare(b.title))

import { useState, useMemo } from 'react'

const SITE = 'https://mychef.id'

export function JournalIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const canonical = `${SITE}/journal`
  
  const allPosts = useMemo(() => 
    [...JOURNAL_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  )

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return allPosts
    return allPosts.filter(p => p.category === activeCategory)
  }, [activeCategory, allPosts])

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Bali Private Chef Journal | Cost Guides, Menus & Hosting Tips"
        description="SEO-ready guides for hosting in Bali: private chef cost 2026, Seminyak Canggu Ubud dining, villa wedding catering, BBQ prices, and retreat menus. myCHEF journal."
        ogImage={`${SITE}/generated/mychef-journal-private-chef-cost-guide.webp`}
        canonical={canonical}
        jsonLd={[
          breadcrumbSchema('Journal', canonical),
          faqPageSchema([
            { question: 'What topics does the myCHEF journal cover?', answer: 'The myCHEF journal covers practical guides for hosting in Bali — private chef costs, villa kitchen setups, event planning, retreat catering, rehearsal dinners, menu showcases, and location guides.' },
            { question: 'Are the guides based on real Bali hosting experience?', answer: 'Yes — every guide is written from direct experience delivering 560+ events, 12,000+ guests served, and 500+ villa bookings across Bali since 2019.' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'myCHEF Journal',
            description: 'Bali private chef and villa catering guides from myCHEF.',
            url: canonical,
            isPartOf: { '@type': 'WebSite', name: 'myCHEF', url: SITE },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'myCHEF Journal Articles',
            url: canonical,
            numberOfItems: allPosts.length,
            itemListElement: allPosts.map((p: JournalPost, i: number) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}/journal/${p.slug}`,
              name: p.title,
              ...(p.image ? { image: `${SITE}${p.image}` } : {}),
            })),
          },
        ]}
      />

      <section className="px-6 pt-28 md:pt-32 pb-16 max-w-[1200px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF Journal</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">
          Bali Private Chef Guides &amp; Hosting Tips
        </h1>
        <p className="text-lg text-[#4A4745] max-w-[720px] mb-10">
          Practical, keyword-focused guides for villa hosting in Bali — private chef costs, area logistics, wedding catering, BBQ pricing, and retreat menus.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all border focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
              activeCategory === null
                ? 'bg-[#C5A028] border-[#C5A028] text-[#1A1A1A] shadow-md'
                : 'bg-white border-[#E8E6E3] text-[#4A4745] hover:border-[#C5A028]'
            }`}
          >
            All Articles
          </button>
          {JOURNAL_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all border focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                activeCategory === cat.slug
                  ? 'bg-[#C5A028] border-[#C5A028] text-[#1A1A1A] shadow-md'
                  : 'bg-white border-[#E8E6E3] text-[#4A4745] hover:border-[#C5A028]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {filteredPosts.map((post) => {
              const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)
              const cover = post.image || '/generated/mychef-location-bali-hub-hero.webp'
              return (
                <Link
                  key={post.slug}
                  to={`/journal/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E6E3] bg-white shadow-sm hover:border-[#C5A028] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EEEA]">
                    <OptimizedImage
                      src={cover}
                      alt={post.focusKeyword ? `${post.focusKeyword} — myCHEF journal` : post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    {category && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7E6410]">
                        {category.label}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4A4745]">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      {post.readTime != null && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime} min read
                        </span>
                      )}
                    </div>
                    <h2 className="font-playfair text-xl md:text-[1.35rem] leading-snug mb-3 group-hover:text-[#7E6410] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#4A4745] leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#7E6410]">
                      Read guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8E6E3] flex flex-col items-center">
            <Tag className="w-12 h-12 text-[#E8E6E3] mb-4" />
            <p className="text-[#4A4745]">No articles found in this category yet.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-4 text-[#7E6410] font-semibold uppercase tracking-[2px] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              Show all articles
            </button>
          </div>
        )}
      </section>

      {/* Complete guides & articles index — makes every /journal and /guide article reachable in 2 clicks (fixes orphaned posts, Ch 7.1.2) */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#E8E6E3] bg-white px-6 py-8">
          <p className="font-cormorant text-[#7E6410] text-sm uppercase tracking-[4px] mb-2">More Guides &amp; Articles</p>
          <h2 className="font-playfair text-2xl mb-4">Browse Every Guide</h2>
          <div className="flex flex-wrap gap-2.5">
            {ARTICLE_LINKS.map((a) => (
              <Link
                key={a.path}
                to={a.path}
                className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-[#1A1A1A] transition-all hover:border-[#C5A028] hover:bg-[#C5A028] hover:text-[#1A1A1A]"
              >
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function JournalPostPage() {
  const location = useLocation()
  const slug = location.pathname.replace('/journal/', '').replace(/\/$/, '')
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] px-6 pt-32 pb-16 max-w-[800px] mx-auto">
        <h1 className="font-playfair text-4xl mb-4">Article not found</h1>
        <Link to="/journal" className="text-[#7E6410] font-semibold text-sm uppercase tracking-[2px] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded inline-block">
          Back to Journal
        </Link>
      </div>
    )
  }

  // Body moved to the lazy content store — hydrate once for schema + render.
  const rawContent = post.content ?? ARTICLE_CONTENT[`/journal/${post.slug}`] ?? ''
  // When a dedicated cover exists, drop the leading body <img> so the page
  // does not render two stacked heroes (cover + first content image).
  const postContent =
    post.image && rawContent
      ? rawContent.replace(/^\s*<img\b[^>]*>\s*/i, '')
      : rawContent
  const canonical = `${SITE}/journal/${post.slug}`
  const mappedMeta = getPageMetaByPath(`/journal/${post.slug}`)
  const pageTitle = mappedMeta?.title ?? post.title
  const pageDescription = mappedMeta?.description ?? post.excerpt
  const pageH1 = mappedMeta?.h1 ?? post.title
  const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)

  // Prefer dedicated cover image, then first body image, then site fallback.
  const firstImgMatch = rawContent.match(/<img[^>]+src="([^"]+)"/)
  const rawImg = post.image ?? firstImgMatch?.[1] ?? '/mychef-misc-bali-og-image.webp'
  const articleImage = rawImg.startsWith('http') ? rawImg : `${SITE}${rawImg}`

  // Article schema: author. Real chef authors are People (E-E-A-T) and link to
  // their profile page when one exists; the in-house byline stays Organization.
  const AUTHOR_PROFILES: Record<string, string> = { Adriano: `${SITE}/chefs/adriano` }
  const isOrgAuthor = /team|mychef/i.test(post.author)
  const articleAuthor = isOrgAuthor
    ? { '@type': 'Organization', name: 'myCHEF', url: SITE }
    : {
        '@type': 'Person',
        name: post.author,
        ...(AUTHOR_PROFILES[post.author] ? { url: AUTHOR_PROFILES[post.author] } : {}),
      }

  const postIndex = JOURNAL_POSTS.findIndex((p) => p.slug === slug)
  const prevPost = postIndex < JOURNAL_POSTS.length - 1 ? JOURNAL_POSTS[postIndex + 1] : null
  const nextPost = postIndex > 0 ? JOURNAL_POSTS[postIndex - 1] : null

  const relatedPosts = [...JOURNAL_POSTS]
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const sameCategoryBoost = Number(b.category === post.category) - Number(a.category === post.category)
      if (sameCategoryBoost !== 0) return sameCategoryBoost
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        ogImage={articleImage}
        ogType="article"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema(pageH1, canonical, 'Journal', `${SITE}/journal`),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: pageH1,
            description: pageDescription,
            url: canonical,
            datePublished: post.date,
            dateModified: post.date,
            image: [articleImage],
            keywords: post.focusKeyword ?? pageH1,
            author: articleAuthor,
            publisher: {
              '@type': 'Organization',
              name: 'myCHEF',
              url: SITE,
              logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
            wordCount: postContent.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length,
            articleSection: category?.label ?? 'Private Chef Bali',
            inLanguage: 'en',
          },
        ]}
      />

      <article className="px-6 pt-28 md:pt-32 pb-16 max-w-[760px] mx-auto">
        <nav className="mb-6 text-xs text-[#4A4745]" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#7E6410]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/journal" className="hover:text-[#7E6410]">Journal</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{category?.label ?? 'Article'}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4A4745] mb-4">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          {post.readTime != null && (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          )}
          {category && <span className="text-[#7E6410] font-medium">· {category.label}</span>}
          {post.author && (
            <span className="text-[#4A4745]">· By {post.author}</span>
          )}
        </div>
        <h1 className="font-playfair text-3xl md:text-4xl leading-tight mb-4">{pageH1}</h1>
        <p className="text-lg text-[#4A4745] mb-8">{pageDescription}</p>

        {post.image && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-[#E8E6E3]">
            <OptimizedImage
              src={post.image}
              alt={post.focusKeyword ? `${post.focusKeyword} — myCHEF Bali journal` : pageH1}
              className="w-full aspect-[16/9] object-cover"
              loading="eager"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none text-[#4A4745] prose-p:leading-relaxed prose-p:text-[#4A4745] prose-p:mb-6 prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-a:text-[#7E6410]"
          dangerouslySetInnerHTML={{ __html: downgradeArticleH1(postContent) }}
        />

        {/* Prev/Next Navigation */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#E8E6E3] pt-8">
          {prevPost ? (
            <Link
              to={`/journal/${prevPost.slug}`}
              className="group flex flex-col items-start text-left focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-[#8A8785] mb-2 flex items-center gap-1">
                <ArrowRight className="w-3 h-3 rotate-180" /> Previous Article
              </span>
              <span className="font-playfair text-lg group-hover:text-[#7E6410] transition-colors line-clamp-2">
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}
          
          {nextPost ? (
            <Link
              to={`/journal/${nextPost.slug}`}
              className="group flex flex-col items-end text-right focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-[#8A8785] mb-2 flex items-center gap-1">
                Next Article <ArrowRight className="w-3 h-3" />
              </span>
              <span className="font-playfair text-lg group-hover:text-[#7E6410] transition-colors line-clamp-2">
                {nextPost.title}
              </span>
            </Link>
          ) : <div />}
        </div>

        <div className="mt-12 rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-cormorant text-[#7E6410] text-sm uppercase tracking-[4px] mb-2">Continue Reading</p>
              <h2 className="font-playfair text-2xl">Related Articles</h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-[#7E6410] font-semibold text-sm uppercase tracking-[2px] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/journal/${relatedPost.slug}`}
                className="overflow-hidden rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] transition-colors hover:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                {relatedPost.image && (
                  <OptimizedImage
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[2px] text-[#7E6410] mb-2">
                    {relatedPost.readTime != null ? `${relatedPost.readTime} min` : 'Guide'}
                  </p>
                  <h3 className="font-playfair text-lg mb-2 leading-snug">{relatedPost.title}</h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed line-clamp-3">{relatedPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E8E6E3]">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-[#7E6410] font-semibold text-sm uppercase tracking-[2px] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> All articles
          </Link>
        </div>
      </article>
    </div>
  )
}
