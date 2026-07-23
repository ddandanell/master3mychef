import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from './SeoHead'
import { JOURNAL_CATEGORIES, type JournalPost } from '@/data/siteArchitecture'
import { JOURNAL_POSTS } from '@/data/content/journalPosts'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { SITEMAP } from '@/data/sitemap'

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
        title="Bali Private Chef Journal | Tips, Menus & Guides — myCHEF"
        description="Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners."
        ogImage="/mychef-misc-bali-og-image.webp"
        canonical={canonical}
        jsonLd={[
          breadcrumbSchema('Journal', canonical),
          faqPageSchema([
            { question: 'What topics does the myCHEF journal cover?', answer: 'The myCHEF journal covers practical guides for hosting in Bali — private chef costs, villa kitchen setups, event planning, retreat catering, rehearsal dinners, menu showcases, and location guides.' },
            { question: 'Are the guides based on real Bali hosting experience?', answer: 'Yes — every guide is written from direct experience delivering 12,000+ guest events, 560+ villa dinners, and 500+ catered events across Bali since 2019.' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'myCHEF Journal',
            url: canonical,
            numberOfItems: allPosts.length,
            itemListElement: allPosts.slice(0, 10).map((p: JournalPost, i: number) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}/journal/${p.slug}`,
              name: p.title,
            })),
          },
        ]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[1000px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">Journal</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-12">
          Practical guides for hosting in Bali — from hiring a private chef to planning villa events.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all border focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded ${
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
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[2px] transition-all border focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)
              return (
                <Link
                  key={post.slug}
                  to={`/journal/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <div className="flex items-center gap-2 text-xs text-[#4A4745] mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    {category && (
                      <>
                        <span>·</span>
                        <span className="text-[#7E6410] font-medium">{category.label}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-playfair text-xl mb-3 group-hover:text-[#7E6410] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#4A4745] leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#7E6410]">
                    Read <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
  const postContent = post.content ?? ARTICLE_CONTENT[`/journal/${post.slug}`] ?? ''
  const canonical = `${SITE}/journal/${post.slug}`
  const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)

  // Article schema: image (Google-recommended field). Use the first image in the
  // post body if present (made absolute), else the site OG fallback.
  const firstImgMatch = postContent.match(/<img[^>]+src="([^"]+)"/)
  const rawImg = firstImgMatch?.[1] ?? '/mychef-misc-bali-og-image.webp'
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
        title={post.title}
        description={post.excerpt}
        canonical={canonical}
        ogImage="/mychef-misc-bali-og-image.webp"
        ogType="article"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema(post.title, canonical),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            url: canonical,
            datePublished: post.date,
            dateModified: post.date,
            image: articleImage,
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
          },
        ]}
      />

      <article className="px-6 pt-32 pb-16 max-w-[720px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#4A4745] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>· {post.readTime}</span>
          {category && <span className="text-[#7E6410]">· {category.label}</span>}
        </div>
        <h1 className="font-playfair text-3xl md:text-4xl leading-tight mb-6">{post.title}</h1>
        <p className="text-lg text-[#4A4745] mb-10">{post.excerpt}</p>

        <div
          className="prose prose-lg max-w-none text-[#4A4745] prose-p:leading-relaxed prose-p:text-[#4A4745] prose-p:mb-6"
          dangerouslySetInnerHTML={{ __html: postContent }}
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
                className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <p className="text-xs uppercase tracking-[2px] text-[#7E6410] mb-2">{relatedPost.readTime}</p>
                <h3 className="font-playfair text-xl mb-2">{relatedPost.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{relatedPost.excerpt}</p>
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
