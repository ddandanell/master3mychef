import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'
import { LANDING_PAGES, GUIDES, BLOG_POSTS } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

// Catch-all template for SEO keyword landing pages, guides, and blog posts.
// Looks up the current pathname in the matching data array. Real article content
// is intentionally kept short here — Kimi can replace this stub with full copy
// per page. The route still preserves the URL and ships valid SEO meta.
export default function LandingPage({ kind = 'landing' }: { kind?: 'landing' | 'guide' | 'blog' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')

  const source = kind === 'landing' ? LANDING_PAGES : kind === 'guide' ? GUIDES : BLOG_POSTS
  const entry = source.find((e) => e.slug === slug)
  if (!entry) return <Navigate to="/404" replace />

  const canonical = `${SITE}/${entry.slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm interested in ${entry.title}.`)}`

  const articleSchema =
    kind === 'guide' || kind === 'blog'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: entry.title,
          description: entry.description,
          url: canonical,
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

  const jsonLdArr = [localBusinessSchema, breadcrumbSchema(entry.title, canonical), ...(articleSchema ? [articleSchema] : [])]

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${entry.title} | myCHEF`} description={entry.description} canonical={canonical} ogType={kind === 'guide' || kind === 'blog' ? 'article' : 'website'} jsonLd={jsonLdArr} />

      <section className="px-8 pt-32 pb-16 max-w-[800px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">
          {kind === 'guide' ? 'Guide' : kind === 'blog' ? 'Blog' : 'myCHEF'}
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{entry.title}</h1>
        <p className="text-lg text-[#4A4745] mb-8">{entry.description}</p>

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
      </section>
    </main>
  )
}
