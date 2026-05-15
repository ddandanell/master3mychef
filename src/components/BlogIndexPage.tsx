import { Link } from 'react-router-dom'
import SeoHead, { breadcrumbSchema, localBusinessSchema, aggregateRatingSchema } from './SeoHead'
import { BLOG_POSTS } from '@/data/sitemap'

const SITE = 'https://mychef.id'

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
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'myCHEF Blog',
              url: `${SITE}/blog`,
              numberOfItems: BLOG_POSTS.length,
              itemListElement: BLOG_POSTS.slice(0, 10).map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE}/${p.slug}`,
                name: p.title,
              })),
            },
          ]}
      />

      <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Blog</p>
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-10">myCHEF Blog</h1>

        <div className="space-y-6">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="block bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 hover:border-[#C5A028] transition-all"
            >
              <h2 className="font-playfair text-2xl mb-2">{p.title}</h2>
              <p className="text-sm text-[#4A4745]">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
