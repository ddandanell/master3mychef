import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, serviceSchema, faqPageSchema, aggregateRatingSchema } from './SeoHead'
import FAQAccordion from './catering/FAQAccordion'
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

  // Pillar-specific FAQ fallback content
  const pillarFaqs: Record<string, { q: string; a: string }[]> = {
    'fine-dining': [
      { q: 'What is the minimum number of guests?', a: 'Four guests minimum for the full fine dining experience. We can arrange intimate two-guest romantic evenings on request.' },
      { q: 'How far in advance should I book?', a: '7+ days is ideal. Peak season (July–August, December) books 2+ weeks ahead. We can sometimes accommodate 48-hour requests.' },
      { q: 'Do you provide wine pairing?', a: 'Yes. Our sommelier wine pairing is IDR 850,000 per guest and includes 4–5 glasses matched to each course.' },
      { q: 'Can you accommodate dietary restrictions?', a: 'Absolutely. Gluten-free, vegan, halal, shellfish allergy, pregnancy-friendly — we adjust every course at no extra charge.' },
    ],
    'catering': [
      { q: 'What is the minimum guest count?', a: 'BBQ catering: 10 guests minimum. Buffet: 15 guests. Drop-off: 10 guests. Villa chef: no minimum, 4-hour minimum booking.' },
      { q: 'Are groceries included?', a: 'For fine dining and events, ingredients are included. For villa chef catering, groceries are billed at cost with receipts — no markup.' },
      { q: 'How far in advance should I book catering?', a: '3+ days for villa chef. 7+ days for BBQ and buffet. 2+ weeks for large events and peak season.' },
      { q: 'Can I customize the menu?', a: 'Yes. Every menu is tailored to your preferences, dietary needs, and kitchen capabilities. Just tell us what you need.' },
    ],
    'events': [
      { q: 'Do you handle event planning or just catering?', a: 'We handle both. Our event team coordinates timeline, vendors, staffing, and hospitality flow — food handled by our catering team.' },
      { q: 'What is the minimum guest count for events?', a: 'Villa parties: 10 guests. Weddings: 20 guests. Corporate events: no minimum. We scale from intimate dinners to 200-guest receptions.' },
      { q: 'How far in advance should I book an event?', a: '4+ weeks for weddings and large events. 2+ weeks for villa parties and birthdays. Peak season books 6+ weeks ahead.' },
      { q: 'Can you coordinate with my vendors?', a: 'Yes. We liaise with DJs, photographers, florists, and rental companies on your behalf — one point of contact for everything.' },
    ],
    'in-villa-service': [
      { q: 'Can I hire staff without booking catering?', a: 'Yes. Our in-villa service staff can be hired independently for events where you have your own catering.' },
      { q: 'How many staff do I need?', a: 'For plated dinners: 1 waiter per 8–10 guests. For buffet: 1 per 15 guests. For cocktail parties: 1 bartender per 25 guests.' },
      { q: 'What do your staff wear?', a: 'Professional uniforms — black and white for formal events, branded myCHEF attire for casual settings.' },
      { q: 'How far in advance should I book staff?', a: '3+ days for small teams. 2+ weeks for large events or peak season.' },
    ],
    'staffing': [
      { q: 'What is the placement fee?', a: 'Private chef placement starts at IDR 15,000,000. Villa staff and household staff placement fees vary by role and experience level.' },
      { q: 'How long does placement take?', a: 'Typically 2–4 weeks from initial request to candidate start date. Includes profiling, interviews, trial dinners, and contract setup.' },
      { q: 'Do you handle payroll and contracts?', a: 'We provide contract templates and payroll guidance. Some clients prefer us to manage payroll — we offer this as an add-on service.' },
      { q: 'What if the placement does not work out?', a: 'We offer a 30-day replacement guarantee. If the candidate is not the right fit, we find a replacement at no additional placement fee.' },
    ],
  }
  const faqs = pillarFaqs[pillar.slug] || pillarFaqs['fine-dining']

  // OG image by pillar
  const pillarOgImages: Record<string, string> = {
    'fine-dining': 'https://mychef.id/generated/luna-hero-v2.webp',
    'catering': 'https://mychef.id/generated/catering-hero.webp',
    'events': 'https://mychef.id/generated/aura-hero-v2.webp',
    'in-villa-service': 'https://mychef.id/generated/in-villa-service-hero.webp',
    'staffing': 'https://mychef.id/generated/staffing-hero.webp',
  }
  const ogImage = pillarOgImages[pillar.slug]

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={subPage.title}
        description={subPage.description}
        canonical={canonical}
        ogImage={ogImage}
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema(subPage.label, canonical, pillar.navLabel, `${SITE}${pillar.url}`),
          serviceSchema(subPage.label, subPage.description, canonical),
          aggregateRatingSchema(4.9, 127),
          faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        ]}
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
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
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

      {/* FAQ */}
      <section className="px-6 py-16 border-t border-[#E8E6E3] bg-white">
        <div className="max-w-[800px] mx-auto">
          <p className="text-sm text-[#C5A028] uppercase tracking-[4px] mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Frequently Asked</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

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
