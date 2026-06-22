import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import StrategicLinksSection from '@/components/shared/StrategicLinksSection'
import { JOURNAL_POSTS, JOURNAL_CATEGORIES, type JournalPost } from '../data/siteArchitecture'

const SITE = 'https://mychef.id'

function getJournalStrategicLinks(post: JournalPost) {
  const links = [
    {
      eyebrow: 'Fine Dining',
      title: 'Private chef fine dining in Bali',
      description: 'Compare chef-led villa dinners, tasting menus, and special-occasion dining before you book.',
      href: '/fine-dining/private-chef-bali',
    },
    {
      eyebrow: 'Catering',
      title: 'Villa catering in Bali',
      description: 'Useful for groups, family stays, and larger guest counts that need broader menu coverage.',
      href: '/catering/villa-catering',
    },
    {
      eyebrow: 'Locations',
      title: 'Explore private chef locations in Bali',
      description: 'See the villa areas we cover if your booking depends on travel time, logistics, or neighborhood fit.',
      href: '/locations',
    },
    {
      eyebrow: 'Booking',
      title: 'Book a private chef or catering quote',
      description: 'Move from reading into a confirmed quote once you know your dates, villa area, and guest count.',
      href: '/book',
    },
  ]

  if (post.category === 'buyer-guides' || post.category === 'cost-value') {
    links[0] = {
      eyebrow: 'Pricing',
      title: 'Compare private chef and catering pricing',
      description: 'Use our pricing page to benchmark chef dinners, group catering, and service-level differences.',
      href: '/pricing',
    }
  }

  if (post.category === 'event-planning-guides' || post.category === 'events' || post.category === 'hosting-tips') {
    links[1] = {
      eyebrow: 'Events',
      title: 'Bali wedding and event catering',
      description: 'Compare this article with our event pages for weddings, birthdays, retreats, and villa parties.',
      href: '/events',
    }
    links[2] = {
      eyebrow: 'Staffing',
      title: 'In-villa service staff for events',
      description: 'Useful when your dinner or celebration also needs waiters, bartenders, or floor support.',
      href: '/in-villa-service',
    }
  }

  if (post.slug.includes('seminyak')) {
    links[2] = {
      eyebrow: 'Seminyak',
      title: 'Private chef and catering in Seminyak',
      description: 'See how myCHEF plans villa dining, guest flow, and catering logistics in Seminyak.',
      href: '/seminyak',
    }
  }

  if (post.slug.includes('ubud')) {
    links[1] = {
      eyebrow: 'Retreats',
      title: 'Retreat catering in Ubud',
      description: 'Compare this article with our retreat catering page for multi-day villa programs and wellness schedules.',
      href: '/events/retreats',
    }
    links[2] = {
      eyebrow: 'Ubud',
      title: 'Private chef service in Ubud',
      description: 'Explore how myCHEF handles Ubud villa access, retreat kitchens, and multi-day chef coverage.',
      href: '/ubud',
    }
  }

  return links
}

export function JournalIndexPage() {
  const canonical = `${SITE}/journal`
  const posts = [...JOURNAL_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Bali Private Chef Journal | Tips, Menus & Guides — myCHEF"
        description="Guides, cost breakdowns, and culinary insights for hosting in Bali — private chef cost, villa kitchens, retreats, and rehearsal dinners."
        ogImage="/og-image.webp"
        canonical={canonical}
        jsonLd={[
          localBusinessSchema,
          aggregateRatingSchema(4.9, 560),
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
            numberOfItems: posts.length,
            itemListElement: posts.slice(0, 10).map((p, i) => ({
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
  const strategicLinks = getJournalStrategicLinks(post)
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
        ogImage="/og-image.webp"
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
            author: { '@type': 'Organization', name: 'myCHEF', url: SITE },
            publisher: {
              '@type': 'Organization',
              name: 'myCHEF',
              url: SITE,
              logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
          },
        ]}
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

        <div className="mt-12">
          <StrategicLinksSection
            eyebrow="Article next steps"
            title="Use this guide to plan the right booking"
            description="These pages extend the article with the service, location, and booking routes guests most often need next."
            cards={strategicLinks}
            className="rounded-2xl border border-[#E8E6E3] bg-white p-0"
            gridClassName="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          />
        </div>

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
