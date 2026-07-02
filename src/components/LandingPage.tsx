import { useMemo } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Check, ChevronLeft, ChevronRight, Clock3, MessageCircle, Utensils } from 'lucide-react'
import SeoHead, { aggregateRatingSchema, breadcrumbSchema, faqPageSchema, serviceSchema } from './SeoHead'
import { BLOG_POSTS, GUIDES, LANDING_PAGES } from '@/data/sitemap'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import Breadcrumb from './shared/Breadcrumb'
import { type EnrichedPost, enrichPost, formatBlogDate, getRelatedPosts, injectContentEnhancements, sortPostsByDate } from '@/lib/blog'

const SITE = 'https://mychef.id'
const WA = '62089674072020'
const AUTHOR = 'myCHEF Team'
const GUIDE_ENTRIES = sortPostsByDate(GUIDES.filter((guide) => guide.slug !== 'guide/private-chef-bali').map((guide) => enrichPost(guide, 'guide')))
const BLOG_ENTRIES = sortPostsByDate(BLOG_POSTS.map((post) => enrichPost(post, 'blog')))
const RELATED_ENTRIES = sortPostsByDate([...GUIDE_ENTRIES, ...BLOG_ENTRIES])

export default function LandingPage({ kind = 'landing' }: { kind?: 'landing' | 'guide' | 'blog' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const isArticle = kind === 'guide' || kind === 'blog'

  const entry = useMemo(() => {
    if (kind === 'landing') return LANDING_PAGES.find((page) => page.slug === slug)
    if (kind === 'guide') return GUIDE_ENTRIES.find((page) => page.slug === slug)
    return BLOG_ENTRIES.find((page) => page.slug === slug)
  }, [kind, slug])

  if (!entry) return <Navigate to="/404" replace />

  const articleEntry: EnrichedPost | null = isArticle && 'readTimeMinutes' in entry ? (entry as EnrichedPost) : null
  const canonical = `${SITE}/${entry.slug}`
  const heroImage = kind === 'landing' ? '/generated/hero-how-it-works.webp' : '/generated/luna-hero-v3.webp'
  const hubPath = kind === 'blog' ? '/blog' : kind === 'guide' ? '/help' : '/'
  const hubLabel = kind === 'blog' ? 'Journal' : kind === 'guide' ? 'Help' : 'Home'
  const hubCtaLabel = kind === 'blog' ? 'View All Journal Entries' : kind === 'guide' ? 'View All Help Guides' : 'View All Pages'
  const backLabel = kind === 'blog' ? 'Back to Blog' : kind === 'guide' ? 'Back to Help' : 'Back to Home'
  const shareText = `Reading ${entry.title} on myCHEF`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm reading "${entry.title}" and have a question.`)}`
  const shareLinks = articleEntry
    ? {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(`${entry.title} — ${canonical}`)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonical)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(canonical)}`,
      }
    : null
  const orderedEntries = kind === 'guide' ? GUIDE_ENTRIES : kind === 'blog' ? BLOG_ENTRIES : []
  const currentIndex = articleEntry ? orderedEntries.findIndex((post) => post.slug === articleEntry.slug) : -1
  const previousEntry = currentIndex > 0 ? orderedEntries[currentIndex - 1] : null
  const nextEntry = currentIndex >= 0 && currentIndex < orderedEntries.length - 1 ? orderedEntries[currentIndex + 1] : null
  const relatedEntries = articleEntry ? getRelatedPosts(RELATED_ENTRIES, articleEntry, 3) : []
  const enhancedContent = articleEntry?.content
    ? injectContentEnhancements(articleEntry.content, articleEntry.headings)
    : (ARTICLE_CONTENT[`/${entry.slug}`] ?? entry.content)

  const articleSchema =
    articleEntry
      ? {
          '@context': 'https://schema.org',
          '@type': articleEntry.kind === 'blog' ? 'BlogPosting' : 'Article',
          headline: entry.title,
          description: entry.description,
          url: canonical,
          datePublished: articleEntry.date,
          dateModified: articleEntry.date,
          author: { '@type': 'Person', name: AUTHOR },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF',
            url: SITE,
            logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
          },
          image: `${SITE}${heroImage}`,
          wordCount: articleEntry.content ? articleEntry.content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length : undefined,
          keywords: articleEntry.topics.join(', '),
          articleSection: articleEntry.topics[0],
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        }
      : null

  const landingServiceSchema = kind === 'landing' ? serviceSchema(entry.title, entry.description, canonical) : null
  const breadcrumbJsonLd = isArticle ? breadcrumbSchema(entry.title, canonical, hubLabel, `${SITE}${hubPath}`) : breadcrumbSchema(entry.title, canonical)
  const jsonLdArr = [
    aggregateRatingSchema(4.9, 560),
    breadcrumbJsonLd,
    faqPageSchema([
      { question: 'How do I book a private chef in Bali with myCHEF?', answer: 'Contact us via WhatsApp at +62089674072020 with your date, villa location, and guest count. We reply within the hour and send a full proposal within 24 hours.' },
      { question: 'What areas in Bali does myCHEF serve?', answer: 'We serve all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond — covering 560+ villas across the island.' },
    ]),
    ...(landingServiceSchema ? [landingServiceSchema] : []),
    ...(articleSchema ? [articleSchema] : []),
  ]
  const extraMeta = articleEntry
    ? [
        ...(articleEntry.date
          ? [
              { key: 'article-published', property: 'article:published_time', content: articleEntry.date },
              { key: 'article-modified', property: 'article:modified_time', content: articleEntry.date },
            ]
          : []),
        { key: 'article-author', property: 'article:author', content: AUTHOR },
        { key: 'article-section', property: 'article:section', content: articleEntry.topics[0] ?? 'Private Chef' },
        ...(articleEntry.topics.slice(1).map((tag) => ({ key: `article-tag-${tag}`, property: 'article:tag', content: tag }))),
      ]
    : []

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={`${entry.title} | myCHEF`}
        description={entry.description}
        canonical={canonical}
        ogImage={heroImage}
        ogType={isArticle ? 'article' : 'website'}
        jsonLd={jsonLdArr}
        extraMeta={extraMeta}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={entry.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-left text-white md:px-12">
          <div className="max-w-[760px]">
            <Link to={hubPath} className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-white/75 transition-colors hover:text-[#C5A028]">
              <ArrowLeft size={14} /> {backLabel}
            </Link>
            <Breadcrumb
              items={[
                { label: hubLabel, href: hubPath },
                { label: entry.title },
              ]}
              theme="dark"
              className="px-0 pb-8 pt-0"
            />
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[3px] text-white/70">
              <span className="font-cormorant text-sm font-semibold text-[#C5A028]">
                {kind === 'guide' ? 'Help Guide' : kind === 'blog' ? 'Journal Entry' : 'myCHEF Experience'}
              </span>
              {articleEntry?.date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#C5A028]" /> {formatBlogDate(articleEntry.date)}
                </span>
              )}
              {articleEntry && (
                <>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={12} className="text-[#C5A028]" /> {articleEntry.readTimeMinutes} min read
                  </span>
                  <span>{AUTHOR}</span>
                </>
              )}
            </div>
            <h1 className="mb-8 font-playfair text-4xl leading-[1.1] md:text-6xl">{entry.title}</h1>
            <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-white/85 md:text-xl">{entry.description}</p>

            {articleEntry && shareLinks && (
              <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="font-medium text-white">Share:</span>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  WhatsApp
                </a>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  Facebook
                </a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition-colors hover:bg-white/10">
                  X / Twitter
                </a>
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`landing-${entry.slug}-cta`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-black transition-all hover:bg-[#D4B43A]">
                <MessageCircle className="h-4 w-4" /> Message our Team
              </a>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all hover:bg-white/10">
                View Pricing Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className={`gap-12 ${articleEntry && articleEntry.headings.length >= 3 ? 'lg:grid lg:grid-cols-[250px_minmax(0,1fr)]' : ''}`}>
          {articleEntry && articleEntry.headings.length >= 3 && (
            <aside className="mb-10 self-start rounded-[28px] border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:mb-0">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7E6410]">On this page</p>
              <h2 className="mt-3 font-playfair text-2xl">Table of contents</h2>
              <nav aria-label="Table of contents" className="mt-6 space-y-3">
                {articleEntry.headings.map((heading: EnrichedPost['headings'][number]) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm leading-relaxed text-[#4A4745]/80 transition-colors hover:text-[#7E6410] ${heading.level === 3 ? 'pl-4' : ''}`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          <div>
            {enhancedContent ? (
              <article
                className="prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed prose-strong:text-[#1A1A1A] prose-a:font-medium prose-a:text-[#7E6410] prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:border-l-[#C5A028] prose-blockquote:bg-[#FAFAF8] prose-blockquote:p-6 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28"
                dangerouslySetInnerHTML={{ __html: enhancedContent }}
              />
            ) : (
              <div className="prose prose-stone max-w-none text-[#4A4745]">
                <p className="text-lg leading-relaxed">
                  Full article content for this page is being prepared. In the meantime, here is what you can do right now:
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Message us on WhatsApp for an immediate answer from our guest relations team.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Request a personalized quote — we respond within 24 hours with a full proposal.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A028]/10"><Check className="h-4 w-4 text-[#7E6410]" strokeWidth={2.5} /></div> <span className="text-lg">Browse our sample menus to see exactly what our Michelin-trained chefs can cook.</span></li>
                </ul>
              </div>
            )}

            {articleEntry && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-black/5 pt-8">
                {articleEntry.topics.map((topic: string) => (
                  <span key={topic} className="rounded-full bg-[#F3EFE7] px-4 py-2 text-sm font-medium text-[#4A4745]">
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-16 flex flex-col gap-4 border-t border-black/5 pt-10 sm:flex-row">
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-10 py-5 text-sm font-semibold uppercase tracking-[2px] text-black transition-all hover:bg-[#D4B43A]">
                Get My Free Quote
              </Link>
              <Link to="/menus" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-10 py-5 text-sm font-semibold uppercase tracking-[2px] text-[#1A1A1A] transition-all hover:bg-black/5">
                <Utensils size={18} /> Browse Menus
              </Link>
            </div>

            {articleEntry && (previousEntry || nextEntry) && (
              <div className="mt-16 grid gap-4 border-t border-black/5 pt-12 md:grid-cols-2">
                {previousEntry ? (
                  <Link to={previousEntry.path} className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5">
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410]">
                      <ChevronLeft size={14} /> Previous Post
                    </p>
                    <h2 className="font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{previousEntry.title}</h2>
                  </Link>
                ) : <div />}

                {nextEntry ? (
                  <Link to={nextEntry.path} className="group rounded-[28px] border border-black/5 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5 md:text-right">
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410] md:ml-auto">
                      Next Post <ChevronRight size={14} />
                    </p>
                    <h2 className="font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{nextEntry.title}</h2>
                  </Link>
                ) : <div />}
              </div>
            )}

            {relatedEntries.length > 0 && (
              <div className="mt-20 border-t border-[#1A1A1A]/10 pt-16">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-[#7E6410]">Related Posts</p>
                    <h2 className="mt-3 font-playfair text-3xl">Keep reading</h2>
                  </div>
                  <Link to={hubPath} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#7E6410] transition-colors hover:text-black">
                    {hubCtaLabel} <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {relatedEntries.map((post) => (
                    <Link
                      key={post.slug}
                      to={post.path}
                      className="group block rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5"
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#4A4745]/80">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[2px] ${post.kind === 'guide' ? 'border-[#6B8E5A]/20 bg-[#6B8E5A]/10 text-[#6B8E5A]' : 'border-[#2C5F7C]/20 bg-[#2C5F7C]/10 text-[#2C5F7C]'}`}>
                          {post.label}
                        </span>
                        <span>{post.readTimeMinutes} min read</span>
                      </div>
                      <h3 className="mb-3 font-playfair text-2xl transition-colors group-hover:text-[#7E6410]">{post.title}</h3>
                      <p className="text-base leading-relaxed text-[#4A4745]/75">{post.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
