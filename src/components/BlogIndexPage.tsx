import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, localBusinessSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { BLOG_POSTS, GUIDES } from '@/data/sitemap'
import Breadcrumb from './shared/Breadcrumb'

const SITE = 'https://mychef.id'

// Merge guides + blog posts sorted by date descending
const ALL_POSTS = [...GUIDES.filter((g) => g.slug !== 'guide/private-chef-bali'), ...BLOG_POSTS].sort((a, b) => {
  if (!a.date && !b.date) return 0
  if (!a.date) return 1
  if (!b.date) return -1
  return b.date.localeCompare(a.date)
})

function formatDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="myCHEF Journal | Private Chef Bali & Hosting Guides"
        description="Practical guides, cost breakdowns, and culinary insights for hosting in Bali villas — written by the myCHEF team."
        ogImage="/og-image.webp"
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
              '@type': 'ItemList',
              name: 'myCHEF Journal',
              url: `${SITE}/blog`,
              numberOfItems: ALL_POSTS.length,
              itemListElement: ALL_POSTS.slice(0, 10).map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE}/${p.slug}`,
                name: p.title,
              })),
            },
          ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/luna-plating.webp"
            alt="Chef plating fine dining dinner in a Bali villa — myCHEF Journal"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
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
        <div className="relative z-10 w-full px-8 md:px-12 py-20 max-w-4xl mx-auto text-center text-white">
          <Breadcrumb items={[{ label: 'Journal' }]} theme="dark" className="justify-center mb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Inside our kitchen</p>
          <h1 className="font-playfair text-5xl md:text-7xl leading-tight mb-6">myCHEF Journal</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Technical guides, menu insights, and practical advice for hosting extraordinary evenings in Bali villas.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-[960px] mx-auto">
        <div className="space-y-6">
          {ALL_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="group block bg-white border border-black/5 rounded-3xl p-6 md:p-8 hover:border-[#C5A028]/30 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {p.slug.startsWith('guide/') && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B8E5A] bg-[#6B8E5A]/10 px-2.5 py-1 rounded-full border border-[#6B8E5A]/20">Guide</span>
                )}
                {p.slug.startsWith('blog/') && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F7C] bg-[#2C5F7C]/10 px-2.5 py-1 rounded-full border border-[#2C5F7C]/20">Article</span>
                )}
                {p.date && (
                  <span className="text-[11px] font-medium text-[#4A4745]/50 tracking-wide">{formatDate(p.date)}</span>
                )}
              </div>
              <h2 className="font-playfair text-2xl md:text-3xl mb-3 group-hover:text-[#C5A028] transition-colors">{p.title}</h2>
              <p className="text-base text-[#4A4745]/80 leading-relaxed mb-4">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
