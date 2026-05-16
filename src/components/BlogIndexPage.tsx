import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock3 } from 'lucide-react'
import SeoHead, { aggregateRatingSchema, breadcrumbSchema, faqPageSchema, localBusinessSchema } from './SeoHead'
import { BLOG_POSTS, GUIDES } from '@/data/sitemap'
import Breadcrumb from './shared/Breadcrumb'
import { enrichPost, formatBlogDate, sortPostsByDate } from '@/lib/blog'

const SITE = 'https://mychef.id'
const ALL_POSTS = sortPostsByDate([
  ...GUIDES.filter((guide) => guide.slug !== 'guide/private-chef-bali').map((guide) => enrichPost(guide, 'guide')),
  ...BLOG_POSTS.map((post) => enrichPost(post, 'blog')),
])
const LATEST_POSTS = ALL_POSTS.slice(0, 3)
const TOPIC_FILTERS = ['All topics', ...new Set(ALL_POSTS.flatMap((post) => post.topics))]

export default function BlogIndexPage() {
  const [activeTopic, setActiveTopic] = useState('All topics')

  const filteredPosts = useMemo(
    () => (activeTopic === 'All topics' ? ALL_POSTS : ALL_POSTS.filter((post) => post.topics.includes(activeTopic))),
    [activeTopic]
  )

  const featuredPost = LATEST_POSTS[0]

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="myCHEF Journal | Private Chef Bali & Hosting Guides"
        description="Practical guides, cost breakdowns, and culinary insights for hosting in Bali villas — written by the myCHEF team."
        ogImage="/mychef-misc-bali-og-image.webp"
        canonical={`${SITE}/blog`}
        jsonLd={[
          localBusinessSchema,
          aggregateRatingSchema(4.9, 560),
          breadcrumbSchema('Journal', `${SITE}/blog`),
          faqPageSchema([
            { question: 'What topics does the myCHEF Journal cover?', answer: 'The myCHEF Journal covers private chef cost guides, villa dining tips, event planning in Bali, menu showcases, and hospitality staffing insights.' },
            { question: 'Who writes the myCHEF guides?', answer: 'All guides are written by our in-house Bali team based on experience delivering 12,000+ guest experiences across the island.' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'myCHEF Journal',
            url: `${SITE}/blog`,
            description: 'Latest myCHEF guides and articles about villa dining, events, retreats, and private chef planning in Bali.',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: ALL_POSTS.length,
              itemListElement: ALL_POSTS.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${SITE}${post.path}`,
                name: post.title,
              })),
            },
          },
        ]}
      />

      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-finedining-bali-luna-plating.webp"
            alt="Chef plating fine dining dinner in a Bali villa — myCHEF Journal"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center text-white md:px-12">
          <Breadcrumb items={[{ label: 'Journal' }]} theme="dark" className="mb-8 justify-center" />
          <p className="mb-4 font-cormorant text-sm uppercase tracking-[4px] text-[#C5A028]">Inside our kitchen</p>
          <h1 className="mb-6 font-playfair text-5xl leading-tight md:text-7xl">myCHEF Journal</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Practical Bali hosting advice, menu inspiration, and chef-led planning notes for villa stays, celebrations, and retreats.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C5A028]">Latest Posts</p>
            <h2 className="mt-3 font-playfair text-3xl md:text-4xl">Fresh planning ideas from the myCHEF team</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Link
            to={featuredPost.path}
            className="group flex min-h-[320px] flex-col justify-between rounded-[32px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5 md:p-8"
          >
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-[#4A4745]/70">
                <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] ${featuredPost.kind === 'guide' ? 'border-[#6B8E5A]/20 bg-[#6B8E5A]/10 text-[#6B8E5A]' : 'border-[#2C5F7C]/20 bg-[#2C5F7C]/10 text-[#2C5F7C]'}`}>
                  {featuredPost.label}
                </span>
                {featuredPost.date && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#C5A028]" />
                    {formatBlogDate(featuredPost.date)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={14} className="text-[#C5A028]" />
                  {featuredPost.readTimeMinutes} min read
                </span>
              </div>
              <h3 className="mb-4 font-playfair text-3xl leading-tight transition-colors group-hover:text-[#C5A028] md:text-4xl">{featuredPost.title}</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-[#4A4745]/80">{featuredPost.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {featuredPost.topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-[#F3EFE7] px-3 py-1 text-xs font-medium text-[#4A4745]">
                    {topic}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#C5A028] transition-colors group-hover:text-black">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {LATEST_POSTS.filter((post) => post.slug !== featuredPost.slug).map((post) => (
              <Link
                key={post.slug}
                to={post.path}
                className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#4A4745]/70">
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[2px] ${post.kind === 'guide' ? 'border-[#6B8E5A]/20 bg-[#6B8E5A]/10 text-[#6B8E5A]' : 'border-[#2C5F7C]/20 bg-[#2C5F7C]/10 text-[#2C5F7C]'}`}>
                    {post.label}
                  </span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>
                <h3 className="mb-3 font-playfair text-2xl leading-tight transition-colors group-hover:text-[#C5A028]">{post.title}</h3>
                <p className="text-sm leading-relaxed text-[#4A4745]/75">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C5A028]">Browse by topic</p>
            <h2 className="mt-3 font-playfair text-3xl md:text-4xl">Find the right article faster</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4A4745]/75 md:text-base">
            Filter the journal by the hosting questions guests ask most: costs, villa logistics, events, wellness stays, and romantic dining.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {TOPIC_FILTERS.map((topic) => {
            const isActive = activeTopic === topic
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'border-[#C5A028] bg-[#C5A028] text-black' : 'border-black/10 bg-white text-[#4A4745] hover:border-[#C5A028]/40 hover:text-black'}`}
              >
                {topic}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={post.path}
              className="group flex h-full flex-col rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A028]/30 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#4A4745]/70">
                <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[2px] ${post.kind === 'guide' ? 'border-[#6B8E5A]/20 bg-[#6B8E5A]/10 text-[#6B8E5A]' : 'border-[#2C5F7C]/20 bg-[#2C5F7C]/10 text-[#2C5F7C]'}`}>
                  {post.label}
                </span>
                {post.date && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#C5A028]" />
                    {formatBlogDate(post.date)}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={14} className="text-[#C5A028]" />
                  {post.readTimeMinutes} min read
                </span>
              </div>

              <h3 className="mb-3 font-playfair text-2xl leading-tight transition-colors group-hover:text-[#C5A028]">{post.title}</h3>
              <p className="mb-6 flex-1 text-base leading-relaxed text-[#4A4745]/80">{post.description}</p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {post.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-[#F3EFE7] px-3 py-1 text-xs font-medium text-[#4A4745]">
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#C5A028] transition-colors group-hover:text-black">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
