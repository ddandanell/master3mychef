import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Check, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, serviceSchema, faqPageSchema } from './SeoHead'
import FAQAccordion from './catering/FAQAccordion'
import { getSubPage, getPillarBySlug, type Pillar, type SubPage } from '@/data/siteArchitecture'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'
import { getPageMetaByPath } from '@/data/page-meta'
import { downgradeArticleH1 } from '@/lib/utils'

const SITE = 'https://mychef.id'
const WA = '6289674072020'

function getWhatsAppText(pillar: Pillar, subPage: SubPage): string {
  const base = `Hi myCHEF, I'm interested in ${subPage.label.toLowerCase()}.`
  if (pillar.slug === 'fine-dining') return `${base} I'd like to reserve a fine dining evening.`
  if (pillar.slug === 'catering') return `${base} Can I get a catering quote?`
  if (pillar.slug === 'events') return `${base} I'd like to book an event consultation.`
  if (pillar.slug === 'in-villa-service') return `${base} I'd like to hire staff.`
  if (pillar.slug === 'staffing') return `${base} I'd like to request candidate profiles.`
  return base
}

function getCTALabel(pillarSlug: string): string {
  if (pillarSlug === 'fine-dining') return 'Reserve via WhatsApp'
  if (pillarSlug === 'catering') return 'Get a Catering Quote'
  if (pillarSlug === 'events') return 'Plan My Event'
  if (pillarSlug === 'in-villa-service') return 'Hire Staff Now'
  if (pillarSlug === 'staffing') return 'Request Chef Profiles'
  return 'Chat on WhatsApp'
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
  const mappedMeta = getPageMetaByPath(path)
  const pageTitle = mappedMeta?.title ?? subPage.title
  const pageDescription = mappedMeta?.description ?? subPage.description
  const pageH1 = mappedMeta?.h1 ?? subPage.h1
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(getWhatsAppText(pillar, subPage))}`

  const related = pillar.subPages.filter((s) => s.slug !== subPage.slug).slice(0, 4)
  const articleHtml = ARTICLE_CONTENT[path]

  // Pillar-specific FAQ fallback content
  const pillarFaqs: Record<string, { q: string; a: string }[]> = {
    'fine-dining': [
      { q: 'What is the minimum number of guests for fine dining?', a: 'Four guests for full tasting formats. Intimate two-guest evenings via <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
      { q: 'How far in advance should I book fine dining in Bali?', a: '7+ days ideal; peak season 2+ weeks. 48-hour requests sometimes possible.' },
      { q: 'Do you provide wine pairing?', a: 'Yes — sommelier pairing typically from IDR 850,000 per guest (4–5 glasses). BYO wine is welcome.' },
      { q: 'Can you accommodate dietary restrictions?', a: 'Yes — gluten-free, vegan, halal-sensitive, shellfish allergy, pregnancy-friendly at no extra charge when briefed.' },
      { q: 'What does fine dining cost in a Bali villa?', a: 'Signature tasting paths are quoted per person. See <a href="/fine-dining">fine dining</a>, <a href="/fine-dining/menus">menus</a> and <a href="/pricing">pricing</a>.' },
      { q: 'Is cleanup included?', a: 'Yes — full kitchen cleanup after every fine dining service.' },
      { q: 'Fine dining vs daily private chef?', a: 'Fine dining is multi-course event pricing; multi-day meals use <a href="/private-chef-bali">private chef day rates</a>.' },
      { q: 'Can we add waiters or a bartender?', a: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
      { q: 'Which areas do you cover?', a: 'Island-wide. <a href="/locations">Locations →</a>' },
      { q: 'What is a chef’s table?', a: 'Counter-side multi-course dining — <a href="/fine-dining/chefs-table">chef’s table</a>.' },
      { q: 'Deposit and cancellation?', a: 'Usually 50% deposit. <a href="/cancellation">Cancellation policy</a>.' },
      { q: 'How do I book?', a: 'WhatsApp date, guests, area and menu path — or <a href="/quote">quote</a>.' },
      { q: 'Kids at fine dining?', a: 'Adapted plates available, or pair <a href="/kids-menus">kids menus</a>.' },
      { q: 'How long does the evening take?', a: 'Plan roughly 3–4 hours for a five-course tasting with pauses.' },
      { q: 'Surprise setups?', a: 'Yes for anniversaries and proposals — coordinate empty-villa timing.' },
      { q: 'Why myCHEF?', a: '<a href="/why-mychef">Why myCHEF</a> · <a href="/chefs">chefs</a> · <a href="/reviews">reviews</a>.' },
    ],
    'catering': [
      { q: 'What is the minimum guest count for catering?', a: 'BBQ ~10 guests; buffet often 30; drop-off as low as 4. We route you to the right format on <a href="/catering">catering</a>.' },
      { q: 'Are groceries included?', a: 'Event packages usually include ingredients. Daily villa chef hire bills groceries at cost with receipts.' },
      { q: 'How far in advance should I book catering?', a: '3+ days villa chef; 7+ BBQ/buffet; 2+ weeks large events and peak season.' },
      { q: 'Can I customize the menu?', a: 'Yes — preferences, diets and kitchen limits shape the final menu before shopping.' },
      { q: 'What catering formats do you offer?', a: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate. Browse <a href="/catering">all catering</a>.' },
      { q: 'Do you clean up after catering?', a: 'Yes on serviced packages. Drop-off does not keep staff on site.' },
      { q: 'Can we add a mobile cocktail bar?', a: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
      { q: 'Areas covered?', a: 'Island-wide. <a href="/locations">Locations →</a>' },
      { q: 'Deposit?', a: 'Usually 50%. <a href="/cancellation">Cancellation policy</a>.' },
      { q: 'Catering vs private chef?', a: 'Catering is event production; multi-day meals use <a href="/private-chef-bali">private chef</a>.' },
      { q: 'Kids and allergies?', a: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols when briefed.' },
      { q: 'Rain plan?', a: 'Covered setups and indoor pivots planned ahead.' },
      { q: 'How do I book?', a: 'WhatsApp date, guests, area and format — <a href="/quote">quote</a>.' },
      { q: 'Wedding catering?', a: '<a href="/events/weddings">Wedding catering</a> · <a href="/bali-wedding-catering-packages">packages</a>.' },
      { q: 'Corporate catering?', a: '<a href="/catering/corporate-catering">Corporate catering</a> · <a href="/events/corporate-events">corporate events</a>.' },
      { q: 'Why myCHEF?', a: '<a href="/why-mychef">Why myCHEF</a>.' },
    ],
    'events': [
      { q: 'Do you handle event planning or just catering?', a: 'Both — timeline, staffing and hospitality flow with chef-led food. <a href="/events">Events hub</a>.' },
      { q: 'What is the minimum guest count for events?', a: 'Villa parties often from ~10; weddings from ~20; corporate flexible. We scale to 200+ receptions.' },
      { q: 'How far in advance should I book an event?', a: '4+ weeks weddings/large events; 2+ weeks villa parties; peak season 6+ weeks.' },
      { q: 'Can you coordinate with my vendors?', a: 'Yes — DJs, photographers, florists and rentals through one ops contact.' },
      { q: 'What event types do you cover?', a: 'Weddings, birthdays, villa parties, corporate, retreats, anniversaries and more.' },
      { q: 'Staffing ratios?', a: 'About 1 waiter per 8–10 seated guests; cocktail hours add tray staff. <a href="/in-villa-service">In-villa service</a>.' },
      { q: 'Rain plan?', a: 'Marquee/indoor fallback locked before outdoor receptions.' },
      { q: 'Deposit and cancellation?', a: 'Usually 50% deposit. <a href="/cancellation">Policy</a>.' },
      { q: 'Areas?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
      { q: 'Alcohol and mobile bar?', a: 'BYO or free-flow mobile cocktail packages from IDR 500K++ per guest. <a href="/in-villa-service/bartenders">Mobile bar →</a>' },
      { q: 'Dietary needs?', a: 'Supported when guest counts by diet are shared early.' },
      { q: 'How do I book?', a: 'WhatsApp date, guests, area and format — <a href="/quote">quote</a>.' },
      { q: 'Wedding packages?', a: '<a href="/bali-wedding-catering-packages">Wedding packages</a>.' },
      { q: 'Corporate offsites?', a: '<a href="/events/corporate-events">Corporate events</a>.' },
      { q: 'Villa parties only?', a: '<a href="/events/villa-parties">Villa parties</a> · <a href="/catering/bbq-catering">BBQ</a>.' },
      { q: 'Why myCHEF?', a: '<a href="/why-mychef">Why myCHEF</a> · <a href="/reviews">reviews</a>.' },
    ],
    'in-villa-service': [
      { q: 'Can I hire staff without booking catering?', a: 'Yes — independent waiters, bartenders and butlers for self-catered or third-party events. <a href="/in-villa-service">In-villa service</a>.' },
      { q: 'How many staff do I need?', a: 'Plated: ~1 waiter per 8–10 guests. Buffet: ~1 per 15. Cocktail: ~1 bartender per 20–25.' },
      { q: 'What do your staff wear?', a: 'Professional uniforms matched to formality — black/white formal or smart resort casual.' },
      { q: 'How far in advance should I book staff?', a: '3+ days small teams; 2+ weeks large events or peak season.' },
      { q: 'Mobile bar rates?', a: 'Complete mobile cocktail packages from IDR 500,000++ per guest (min 10) — not hourly hire. <a href="/in-villa-service/bartenders">Mobile bar packages →</a>' },
      { q: 'Waiter rates?', a: 'Contact us for pricing via WhatsApp. Details on the service pages.' },
      { q: 'Alcohol included?', a: 'BYO packages: you supply spirits. Free-flow packages include spirits for the four-cocktail menu. <a href="/in-villa-service/bartenders">Details →</a>' },
      { q: 'Butler service?', a: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
      { q: 'Mixology?', a: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
      { q: 'Areas covered?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
      { q: 'Combine with private chef and catering?', a: 'Yes — the full villa F&amp;B stack. <a href="/private-chef-bali">Private chef</a> · <a href="/catering">Catering</a> · <a href="/in-villa-service/bartenders">Mobile bar</a>.' },
      { q: 'Vetted staff?', a: 'Supervised teams with replacement cover. <a href="/why-mychef">Why myCHEF</a>.' },
      { q: 'Deposit?', a: 'Usually 50%. <a href="/cancellation">Policy</a>.' },
      { q: 'Long-term staffing?', a: 'Placement is under <a href="/staffing">staffing</a>, not day-rate in-villa hire.' },
      { q: 'How do I book?', a: 'WhatsApp date, area, headcount and roles — <a href="/contact">contact</a>.' },
      { q: 'Cleanup?', a: 'Service stations and guest areas cleared; kitchen deep-clean when myCHEF also cooks.' },
    ],
    'staffing': [
      { q: 'What is the placement fee?', a: 'Quoted after role and seniority are clear — written before candidates are released.' },
      { q: 'How long does placement take?', a: 'Often 2–4 weeks from brief to start, including interviews and optional trial dinners. Urgent cover can be faster.' },
      { q: 'Do you handle payroll and contracts?', a: 'Contract templates and payroll guidance included; managed payroll available as an add-on where agreed.' },
      { q: 'What if the placement does not work out?', a: '30-day replacement guarantee on standard programmes — we restart the search without a second placement fee.' },
      { q: 'Live-in vs live-out?', a: 'Live-in resides on property; live-out works shifts. <a href="/staffing/live-in-chef">Live-in chef</a>.' },
      { q: 'Roles you place?', a: 'Chefs, villa managers, butlers, housekeepers and F&amp;B teams. <a href="/staffing">Staffing hub</a>.' },
      { q: 'Holiday chef vs placement?', a: 'Holiday multi-day cooking is day-rate <a href="/private-chef-bali">private chef</a>; placement is employment-style.' },
      { q: 'Background checks?', a: 'Interviews, references and supervised matching — not classified ads.' },
      { q: 'Trial days?', a: 'Paid trials before long-term hire are common and recommended.' },
      { q: 'Hotels and restaurants?', a: 'Yes — <a href="/staffing/for-hotels-restaurants">hotel staffing</a> and kitchen programmes.' },
      { q: 'Areas covered?', a: 'Island-wide. <a href="/locations">Locations</a>.' },
      { q: 'What info starts a search?', a: 'Role, location, live-in/out, languages, salary band, start date.' },
      { q: 'Backup if staff is sick?', a: 'Temporary cover can be arranged through the network.' },
      { q: 'English-speaking staff?', a: 'Guest-facing roles are English-capable when required.' },
      { q: 'How do I start?', a: 'WhatsApp the brief or <a href="/contact">contact</a>.' },
      { q: 'Why myCHEF staffing?', a: '<a href="/why-mychef">Why myCHEF</a> · continuity and replacement cover.' },
    ],
  }
  const faqs = pillarFaqs[pillar.slug] || pillarFaqs['fine-dining']

  // OG image by pillar
  const pillarOgImages: Record<string, string> = {
    'fine-dining': 'https://mychef.id/generated/mychef-experience-bali-luna-hero-v2.webp',
    'catering': 'https://mychef.id/generated/mychef-catering-bali-catering-hero.webp',
    'events': 'https://mychef.id/generated/aura-hero-v2.webp',
    'in-villa-service': 'https://mychef.id/generated/in-villa-service-hero.webp',
    'staffing': 'https://mychef.id/generated/mychef-staffing-bali-staffing-hero.webp',
  }
  const ogImage = pillarOgImages[pillar.slug]

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        ogImage={ogImage}
        jsonLd={[
          breadcrumbSchema(subPage.label, canonical, pillar.navLabel, `${SITE}${pillar.url}`),
          serviceSchema(subPage.label, subPage.description, canonical),
          faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 max-w-[900px] mx-auto">
        <p
          className="font-cormorant text-sm uppercase tracking-[4px] mb-4"
          style={{ color: pillar.accent }}
        >
          {pillar.navLabel}
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">{pageH1}</h1>
        <p className="text-lg text-[#4A4745] mb-10 max-w-[640px]">{pageDescription}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={waLink}
            data-source={`${pillarSlug}-${subSlug}-cta`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> {getCTALabel(pillarSlug)}
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

      {/* Article body from mychef-seo content */}
      {articleHtml && (
        <section className="px-6 py-16 border-t border-[#E8E6E3]">
          <div
            className="max-w-[900px] mx-auto prose prose-stone"
            dangerouslySetInnerHTML={{ __html: downgradeArticleH1(articleHtml) }}
          />
        </section>
      )}

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
          <p className="font-cormorant text-sm text-[#C5A028] uppercase tracking-[4px] mb-4 text-center">Questions</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Frequently Asked</h2>
          <FAQAccordion items={faqs} defaultOpenCount={2} showToc ctaEvery={5} />
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
    </div>
  )
}

function SubPageNotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] px-6 pt-32 pb-16 max-w-[800px] mx-auto">
      <h1 className="font-playfair text-4xl mb-4">Page not found</h1>
      <p className="text-[#4A4745] mb-8">That page doesn’t exist or may have moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 text-[#C5A028] font-semibold text-sm uppercase tracking-[2px]">
        <ArrowRight className="w-4 h-4" /> Back to home
      </Link>
    </div>
  )
}
