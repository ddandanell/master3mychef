import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'
import { getSubPage, getPillarBySlug, type Pillar, type SubPage } from '../data/siteArchitecture'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

function getWhatsAppText(pillar: Pillar, subPage: SubPage): string {
  const base = `Hi myCHEF, I'm interested in ${subPage.label.toLowerCase()}.`
  if (pillar.slug === 'fine-dining') return `${base} I'd like to reserve a fine dining evening.`
  if (pillar.slug === 'catering') return `${base} Can I get a catering quote?`
  if (pillar.slug === 'events') return `${base} I'd like to book an event consultation.`
  if (pillar.slug === 'in-villa-service') return `${base} I'd like to hire staff.`
  if (pillar.slug === 'staffing') return `${base} I'd like to request candidate profiles.`
  return base
}

export default function PillarSubPage() {
  const location = useLocation()
  const path = location.pathname.replace(/\/$/, '')
  const segments = path.split('/').filter(Boolean)

  // Expected: [pillarSlug, subSlug]
  if (segments.length < 2) return <SubPageNotFound />

  const [pillarSlug, subSlug] = segments
  const pillar = getPillarBySlug(pillarSlug)
  const subPage = pillar ? getSubPage(pillarSlug, subSlug) : undefined

  if (!pillar || !subPage) return <SubPageNotFound />

  const canonical = `${SITE}${path}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(getWhatsAppText(pillar, subPage))}`

  const related = pillar.subPages.filter((s) => s.slug !== subPage.slug).slice(0, 4)

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={subPage.title}
        description={subPage.description}
        canonical={canonical}
        jsonLd={[localBusinessSchema, breadcrumbSchema(subPage.label, canonical)]}
      />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 max-w-[900px] mx-auto">
        <p
          className="text-sm uppercase tracking-[4px] mb-4"
          style={{ color: pillar.accent, fontFamily: "'Cormorant Garamond', serif" }}
        >
          {pillar.navLabel}
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{subPage.h1}</h1>
        <p className="text-lg text-[#4A4745] mb-10 max-w-[640px]">{subPage.description}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1ea855] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            style={{ background: pillar.accent }}
          >
            {pillar.ctaPrimary}
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl mb-8">What’s included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Vetted, background-checked team',
              'All equipment, tableware and linens',
              'Grocery shopping at cost — no markup',
              'Setup, service and full clean-up',
              'Same-day WhatsApp confirmation',
              'Dietary customization at no extra cost',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E6E3]">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: pillar.accent }} />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      {related.length > 0 && (
        <section className="px-6 py-16 border-t border-[#E8E6E3]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl mb-8">More {pillar.navLabel}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`${pillar.url}/${r.slug}`}
                  className="group flex items-center justify-between p-5 rounded-xl bg-white border border-[#E8E6E3] hover:border-[#C5A028] transition-colors"
                >
                  <span className="font-medium text-[#1A1A1A]">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-pillar */}
      <section className="px-6 py-16 border-t border-[#E8E6E3]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-sm text-[#4A4745] mb-4">Not quite what you’re looking for?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {pillar.relatedPillars.map((rp) => {
              const relatedPillar = getPillarBySlug(rp)
              if (!relatedPillar) return null
              return (
                <Link
                  key={rp}
                  to={relatedPillar.url}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8E6E3] text-sm hover:border-[#C5A028] hover:text-[#C5A028] transition-colors"
                >
                  {relatedPillar.navLabel}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

function SubPageNotFound() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] px-6 pt-32 pb-16 max-w-[800px] mx-auto">
      <h1 className="font-playfair text-4xl mb-4">Page not found</h1>
      <p className="text-[#4A4745] mb-8">That page doesn’t exist or may have moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 text-[#C5A028] font-semibold text-sm uppercase tracking-[2px]">
        <ArrowRight className="w-4 h-4" /> Back to home
      </Link>
    </main>
  )
}
