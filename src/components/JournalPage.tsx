import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'
import { JOURNAL_POSTS, JOURNAL_CATEGORIES } from '../data/siteArchitecture'

const SITE = 'https://mychef.id'

export function JournalIndexPage() {
  const canonical = `${SITE}/journal`
  const posts = [...JOURNAL_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Journal | Bali Private Chef Guides, Menus & Hosting Tips — myCHEF"
        description="Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners."
        canonical={canonical}
        jsonLd={[localBusinessSchema, breadcrumbSchema('Journal', canonical)]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[1000px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">Journal</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-12">
          Practical guides for hosting in Bali — from hiring a private chef to planning villa events.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)
            return (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-[#4A4745] mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>· {post.readTime}</span>
                  {category && <span className="text-[#C5A028]">· {category.label}</span>}
                </div>
                <h3 className="font-playfair text-xl mb-3 group-hover:text-[#C5A028] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#4A4745] leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#C5A028]">
                  Read <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export function JournalPostPage() {
  const location = useLocation()
  const slug = location.pathname.replace('/journal/', '').replace(/\/$/, '')
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] px-6 pt-32 pb-16 max-w-[800px] mx-auto">
        <h1 className="font-playfair text-4xl mb-4">Article not found</h1>
        <Link to="/journal" className="text-[#C5A028] font-semibold text-sm uppercase tracking-[2px]">
          Back to Journal
        </Link>
      </main>
    )
  }

  const canonical = `${SITE}/journal/${post.slug}`
  const category = JOURNAL_CATEGORIES.find((c) => c.slug === post.category)
  const relatedPosts = [...JOURNAL_POSTS]
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const sameCategoryBoost = Number(b.category === post.category) - Number(a.category === post.category)
      if (sameCategoryBoost !== 0) return sameCategoryBoost
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={post.title}
        description={post.excerpt}
        canonical={canonical}
        jsonLd={[localBusinessSchema, breadcrumbSchema(post.title, canonical)]}
      />

      <article className="px-6 pt-32 pb-16 max-w-[720px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#4A4745] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>· {post.readTime}</span>
          {category && <span className="text-[#C5A028]">· {category.label}</span>}
        </div>
        <h1 className="font-playfair text-3xl md:text-4xl leading-tight mb-6">{post.title}</h1>
        <p className="text-lg text-[#4A4745] mb-10">{post.excerpt}</p>

        <div
          className="prose prose-lg max-w-none text-[#4A4745] prose-p:leading-relaxed prose-p:text-[#4A4745] prose-p:mb-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-2">Continue Reading</p>
              <h2 className="font-playfair text-2xl">Related Articles</h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-[#C5A028] font-semibold text-sm uppercase tracking-[2px]"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/journal/${relatedPost.slug}`}
                className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]"
              >
                <p className="text-xs uppercase tracking-[2px] text-[#C5A028] mb-2">{relatedPost.readTime}</p>
                <h3 className="font-playfair text-xl mb-2">{relatedPost.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E8E6E3]">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-[#C5A028] font-semibold text-sm uppercase tracking-[2px]"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> All articles
          </Link>
        </div>
      </article>
    </main>
  )
}
