import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check, ArrowLeft, Calendar } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { LANDING_PAGES, GUIDES, BLOG_POSTS } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

function formatDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Catch-all template for SEO keyword landing pages, guides, and blog posts.
export default function LandingPage({ kind = 'landing' }: { kind?: 'landing' | 'guide' | 'blog' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')

  const source = kind === 'landing' ? LANDING_PAGES : kind === 'guide' ? GUIDES : BLOG_POSTS
  const entry = source.find((e) => e.slug === slug)
  if (!entry) return <Navigate to="/404" replace />

  const canonical = `${SITE}/${entry.slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm interested in ${entry.title}.`)}`

  // Related posts: pick up to 3 from the same kind, excluding current
  const relatedSource = kind === 'guide'
    ? [...GUIDES.filter((g) => g.slug !== 'guide/private-chef-bali'), ...BLOG_POSTS]
    : kind === 'blog'
      ? [...BLOG_POSTS, ...GUIDES.filter((g) => g.slug !== 'guide/private-chef-bali')]
      : []
  const related = relatedSource.filter((p) => p.slug !== entry.slug).slice(0, 3)

  const articleSchema =
    kind === 'guide' || kind === 'blog'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: entry.title,
          description: entry.description,
          url: canonical,
          ...(entry.date ? { datePublished: entry.date, dateModified: entry.date } : {}),
          ...(entry.content ? { articleBody: entry.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() } : {}),
          author: { '@type': 'Organization', name: 'myCHEF', url: SITE },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF',
            url: SITE,
            logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        }
      : null

  const jsonLdArr = [localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema(entry.title, canonical), faqPageSchema([
    { question: 'How do I book a private chef in Bali with myCHEF?', answer: 'Contact us via WhatsApp at +62 822-3756-5997 with your date, villa location, and guest count. We reply within the hour and send a full proposal within 24 hours.' },
    { question: 'What areas in Bali does myCHEF serve?', answer: 'We serve all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond — covering 560+ villas across the island.' },
  ]), ...(articleSchema ? [articleSchema] : [])]

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${entry.title} | myCHEF`} description={entry.description} canonical={canonical} ogImage="/og-image.webp" ogType={kind === 'guide' || kind === 'blog' ? 'article' : 'website'} jsonLd={jsonLdArr} />

      <section className="px-8 pt-32 pb-16 max-w-[800px] mx-auto">
        {(kind === 'guide' || kind === 'blog') && (
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#4A4745] hover:text-[#C5A028] transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Blog &amp; Guides
          </Link>
        )}
        <div className="flex items-center gap-3 mb-4">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px]">
            {kind === 'guide' ? 'Guide' : kind === 'blog' ? 'Article' : 'myCHEF'}
          </p>
          {entry.date && (
            <span className="inline-flex items-center gap-1 text-xs text-[#4A4745]/60">
              <Calendar className="w-3 h-3" /> {formatDate(entry.date)}
            </span>
          )}
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{entry.title}</h1>
        <p className="text-lg text-[#4A4745] mb-8">{entry.description}</p>

        {entry.content ? (
          <div
            className="prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-p:mb-5 prose-li:leading-relaxed prose-strong:text-[#1A1A1A]"
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />
        ) : (
          <div className="prose prose-stone max-w-none text-[#4A4745]">
            <p>
              Full article content for this page is being prepared. In the meantime, here is what you can do right now:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> Message us on WhatsApp for an immediate answer.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> Request a personalized quote — we respond within 24 hours.</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> Browse our sample menus to see what our chefs can cook for you.</li>
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link to="/quote" className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            Get a Quote
          </Link>
          <Link to="/menus" className="inline-flex items-center justify-center border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
            See Menus
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#1A1A1A]/10">
            <h2 className="font-playfair text-2xl mb-6">More from myCHEF</h2>
            <div className="space-y-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className="block bg-white border border-[#1A1A1A]/10 rounded-xl p-5 hover:border-[#C5A028] transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${p.slug.startsWith('guide/') ? 'text-[#6B8E5A] bg-[#6B8E5A]/10' : 'text-[#2C5F7C] bg-[#2C5F7C]/10'}`}>
                      {p.slug.startsWith('guide/') ? 'Guide' : 'Article'}
                    </span>
                  </div>
                  <h3 className="font-playfair text-lg">{p.title}</h3>
                  <p className="text-sm text-[#4A4745] mt-1">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
