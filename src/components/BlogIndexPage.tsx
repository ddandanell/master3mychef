import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, localBusinessSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { BLOG_POSTS, GUIDES } from '@/data/sitemap'

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
        title="myCHEF Blog | Private Chef Bali Guides"
        description="Guides, cost breakdowns, and culinary insights for hosting in Bali — written by myCHEF."
        ogImage="/og-image.webp"
        canonical={`${SITE}/blog`}
        jsonLd={[
            localBusinessSchema,
            aggregateRatingSchema(4.9, 560),
            breadcrumbSchema('Blog', `${SITE}/blog`),
            faqPageSchema([
              { question: 'What topics does the myCHEF blog cover?', answer: 'The myCHEF blog covers private chef cost guides, villa dining tips, event planning in Bali, menu showcases, location guides, and hospitality staffing insights for villa owners and guests.' },
              { question: 'Who writes the myCHEF guides?', answer: 'All guides are written by the myCHEF team — based on real experience delivering 12,000+ guest experiences, 560+ villa dinners, and 500+ events across Bali.' },
            ]),
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'myCHEF Blog',
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

      <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Blog &amp; Guides</p>
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-10">myCHEF Journal</h1>

        <div className="space-y-6">
          {ALL_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="block bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 hover:border-[#C5A028] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                {p.slug.startsWith('guide/') && (
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6B8E5A] bg-[#6B8E5A]/10 px-2 py-0.5 rounded-full">Guide</span>
                )}
                {p.slug.startsWith('blog/') && (
                  <span className="text-xs font-medium uppercase tracking-wider text-[#2C5F7C] bg-[#2C5F7C]/10 px-2 py-0.5 rounded-full">Article</span>
                )}
                {p.date && (
                  <span className="text-xs text-[#4A4745]/60">{formatDate(p.date)}</span>
                )}
              </div>
              <h2 className="font-playfair text-2xl mb-2">{p.title}</h2>
              <p className="text-sm text-[#4A4745]">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
