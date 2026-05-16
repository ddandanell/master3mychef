import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check, Calendar, ArrowRight, Utensils } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema, serviceSchema } from './SeoHead'
import { LANDING_PAGES, GUIDES, BLOG_POSTS } from '@/data/sitemap'
import Breadcrumb from './shared/Breadcrumb'

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
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm reading "${entry.title}" and have a question.`)}`

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

  const landingServiceSchema =
    kind === 'landing'
      ? serviceSchema(entry.title, entry.description, canonical)
      : null

  const jsonLdArr = [localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema(entry.title, canonical), faqPageSchema([
    { question: 'How do I book a private chef in Bali with myCHEF?', answer: 'Contact us via WhatsApp at +62 822-3756-5997 with your date, villa location, and guest count. We reply within the hour and send a full proposal within 24 hours.' },
    { question: 'What areas in Bali does myCHEF serve?', answer: 'We serve all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and beyond — covering 560+ villas across the island.' },
  ]), ...(landingServiceSchema ? [landingServiceSchema] : []), ...(articleSchema ? [articleSchema] : [])]

  const heroImage = kind === 'landing' ? '/generated/hero-how-it-works.webp' : '/generated/luna-hero-v3.webp'

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${entry.title} | myCHEF`} description={entry.description} canonical={canonical} ogImage={heroImage} ogType={kind === 'guide' || kind === 'blog' ? 'article' : 'website'} jsonLd={jsonLdArr} />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '65vh' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={entry.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 w-full px-8 md:px-12 py-20 max-w-4xl mx-auto text-left text-white">
          <div className="max-w-[700px]">
            <Breadcrumb 
              items={[
                { label: kind === 'blog' ? 'Journal' : kind === 'guide' ? 'Help' : 'Home', href: kind === 'blog' ? '/blog' : kind === 'guide' ? '/help' : '/' }, 
                { label: entry.title }
              ]} 
              theme="dark" 
              className="px-0 pt-0 pb-8" 
            />
            <div className="flex items-center gap-3 mb-6">
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] font-semibold">
                {kind === 'guide' ? 'Help Guide' : kind === 'blog' ? 'Journal Entry' : 'myCHEF Experience'}
              </p>
              {entry.date && (
                <span className="inline-flex items-center gap-1 text-[11px] text-white/50 tracking-wider uppercase font-bold">
                  <Calendar size={12} className="text-[#C5A028]" /> {formatDate(entry.date)}
                </span>
              )}
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl leading-[1.1] mb-8">{entry.title}</h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-[600px]">{entry.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" data-source={`landing-${entry.slug}-cta`} className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
                <MessageCircle className="w-4 h-4" /> Message our Team
              </a>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                View Pricing Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 max-w-[800px] mx-auto">
        {entry.content ? (
          <div
            className="prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-li:text-lg prose-li:leading-relaxed prose-strong:text-[#1A1A1A] prose-blockquote:border-l-[#C5A028] prose-blockquote:bg-[#FAFAF8] prose-blockquote:p-6 prose-blockquote:rounded-r-2xl"
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />
        ) : (
          <div className="prose prose-stone max-w-none text-[#4A4745]">
            <p className="text-lg leading-relaxed">
              Full article content for this page is being prepared. In the meantime, here is what you can do right now:
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-3"><div className="h-6 w-6 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0 mt-1"><Check className="w-4 h-4 text-[#C5A028]" strokeWidth={2.5} /></div> <span className="text-lg">Message us on WhatsApp for an immediate answer from our guest relations team.</span></li>
              <li className="flex items-start gap-3"><div className="h-6 w-6 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0 mt-1"><Check className="w-4 h-4 text-[#C5A028]" strokeWidth={2.5} /></div> <span className="text-lg">Request a personalized quote — we respond within 24 hours with a full proposal.</span></li>
              <li className="flex items-start gap-3"><div className="h-6 w-6 rounded-full bg-[#C5A028]/10 flex items-center justify-center flex-shrink-0 mt-1"><Check className="w-4 h-4 text-[#C5A028]" strokeWidth={2.5} /></div> <span className="text-lg">Browse our sample menus to see exactly what our Michelin-trained chefs can cook.</span></li>
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-10 border-t border-black/5">
          <Link to="/quote" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-10 py-5 rounded-full hover:bg-[#D4B43A] transition-all">
            Get My Free Quote
          </Link>
          <Link to="/menus" className="inline-flex items-center justify-center gap-2 border border-black/10 text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-10 py-5 rounded-full hover:bg-black/5 transition-all">
            <Utensils size={18} /> Browse Menus
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#1A1A1A]/10">
            <h2 className="font-playfair text-3xl mb-10 text-center">More from the Journal</h2>
            <div className="grid gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className="group block bg-white border border-black/5 rounded-3xl p-6 md:p-8 hover:border-[#C5A028]/30 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.slug.startsWith('guide/') ? 'text-[#6B8E5A] bg-[#6B8E5A]/10 border-[#6B8E5A]/20' : 'text-[#2C5F7C] bg-[#2C5F7C]/10 border-[#2C5F7C]/20'}`}>
                      {p.slug.startsWith('guide/') ? 'Guide' : 'Article'}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl mb-2 group-hover:text-[#C5A028] transition-colors">{p.title}</h3>
                  <p className="text-base text-[#4A4745]/70 truncate">{p.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/blog" className="inline-flex items-center gap-2 text-[#C5A028] font-bold text-xs uppercase tracking-[3px] hover:text-black transition-colors">
                View All Journal Entries <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
