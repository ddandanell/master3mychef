import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, Wine } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getPageMeta } from '@/data/page-meta'
import SeoHead from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a sommelier in Bali', intent: 'availability and pricing' })

const BRIEF_JSON_LD: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Private Sommelier Hire Bali',
      serviceType: 'Private sommelier and wine pairing service',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF',
        url: 'https://mychef.id',
        telephone: '+62 896-7407-2020',
        email: 'bali@mychef.id',
      },
      areaServed: ['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Bali'],
      description: 'Hire a private sommelier for your Bali villa dinner — pairing design, wine sourcing, decanting and tableside service from IDR 1,200,000 per dinner. Wine pairing add-on for tasting menus from IDR 850,000 per guest.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '1200000',
        highPrice: '3500000',
        offerCount: '3',
        description: 'Wine Pairing Dinner IDR 1,200,000; Sommelier Service IDR 2,000,000/event; Wine Experience IDR 3,500,000/session. Wine purchased separately. Subject to 11% tax + 10% service charge.',
      },
      url: 'https://mychef.id/in-villa-service/sommelier',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a private sommelier cost in Bali?', acceptedAnswer: { '@type': 'Answer', text: 'From IDR 1,200,000 per dinner for a 4-course pairing (up to 8 guests); full event coverage from IDR 2,000,000; guided tastings from IDR 3,500,000. Tasting-menu pairing add-on from IDR 850,000 per guest. Fees are ++ and exclude the wine.' } },
        { '@type': 'Question', name: 'Do I need to buy the wine separately?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The fee covers planning, sourcing expertise and service. Wine is purchased from the recommended list at your chosen budget, or poured from your own collection.' } },
        { '@type': 'Question', name: 'Can the sommelier work with wines I already own?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the sommelier reviews your cellar or brought bottles and designs the pairing sequence from what you have.' } },
        { '@type': 'Question', name: 'How many wines does a multi-course dinner need?', acceptedAnswer: { '@type': 'Answer', text: 'Typically one per course plus an aperitif: 4–5 wines for a four-course dinner, 6–8 for a tasting menu.' } },
        { '@type': 'Question', name: 'What styles of wine do you pair?', acceptedAnswer: { '@type': 'Answer', text: 'Old World classics, New World discoveries and emerging regions, plus sake, natural wine and non-alcoholic pairings on request.' } },
        { '@type': 'Question', name: 'Can non-drinkers join a pairing dinner?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a parallel zero-proof pairing of juices, teas, shrubs and ferments is designed to match the same courses.' } },
        { '@type': 'Question', name: 'How far in advance should I book?', acceptedAnswer: { '@type': 'Answer', text: '1–2 weeks for standard dinners; 3–4 weeks when rare or allocated wines are involved, especially in peak season.' } },
        { '@type': 'Question', name: 'Which areas do you cover?', acceptedAnswer: { '@type': 'Answer', text: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id' },
        { '@type': 'ListItem', position: 2, name: 'In-Villa Service', item: 'https://mychef.id/in-villa-service' },
        { '@type': 'ListItem', position: 3, name: 'Sommelier', item: 'https://mychef.id/in-villa-service/sommelier' },
      ],
    },
  ],
}

const PRICING_TIERS = [
  {
    title: 'Wine Pairing Dinner',
    price: 'IDR 1,200,000',
    unit: '/dinner',
    features: ['4-course pairing', '4 wines selected', 'Tableside presentation', 'Tasting notes', 'Up to 8 guests', 'Service included'],
    bestFor: 'Intimate dinners, anniversaries, special occasions',
  },
  {
    title: 'Sommelier Service',
    price: 'IDR 2,000,000',
    unit: '/event',
    features: ['Full event coverage', '6+ wines', 'Cellar consultation', 'Custom pairing menu', 'Service team briefing', 'Up to 20 guests'],
    bestFor: 'Weddings, corporate dinners, milestone events',
    highlight: true,
  },
  {
    title: 'Wine Experience',
    price: 'IDR 3,500,000',
    unit: '/session',
    features: ['3-hour tasting', '8+ wines', 'Regional focus', 'Food pairings', 'Education component', 'Unlimited guests'],
    bestFor: 'Team building, wine clubs, educational events',
  },
]

const WHAT_INCLUDED = [
  'Certified sommelier',
  'Tailored wine selection',
  'Food pairing design',
  'Tableside service',
  'Tasting notes and stories',
  'Cellar temperature service',
  'Decanting when needed',
  'Glassware guidance',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Menu review', desc: 'We study your menu and guest preferences.', icon: Calendar },
  { step: '02', title: 'Curation', desc: 'Wines selected to elevate each course.', icon: Wine },
  { step: '03', title: 'Sourcing', desc: 'We source from trusted suppliers or work with your cellar.', icon: ShieldCheck },
  { step: '04', title: 'Service', desc: 'Tableside pouring, timing, and storytelling.', icon: Award },
  { step: '05', title: 'Notes', desc: 'Guests receive tasting notes and wine list.', icon: Star },
]

const FAQS = [
  { q: 'How much does a private sommelier cost in Bali?', a: 'From IDR 1,200,000 per dinner for an intimate 4-course pairing (up to 8 guests). Full event coverage starts at IDR 2,000,000; guided Wine Experience tastings at IDR 3,500,000. With a myCHEF tasting menu, the pairing add-on starts at IDR 850,000 per guest. Fees are ++ and exclude the wine itself.' },
  { q: 'Do I need to buy the wine separately?', a: 'Yes. The fee covers planning, sourcing expertise and tableside service. Wine is purchased from the sommelier\'s recommended list at a budget you set — from approachable to investment-grade — or poured from your own collection.' },
  { q: 'Can the sommelier work with wines I already own?', a: 'Absolutely. If you have a cellar or have brought bottles, the sommelier reviews your collection and designs the optimal pairing sequence from what you have.' },
  { q: 'How many wines does a multi-course dinner need?', a: 'Typically one per course plus an aperitif: 4–5 wines for a four-course dinner, 6–8 for a tasting menu.' },
  { q: 'What styles of wine do you pair?', a: 'Old World classics (Burgundy, Bordeaux, Champagne), New World discoveries and emerging regions — plus sake, natural wine and sophisticated non-alcoholic pairings on request.' },
  { q: 'Can non-drinkers join a pairing dinner?', a: 'Yes. The sommelier designs a parallel zero-proof pairing — juices, teas, shrubs and ferments — matched to the same courses.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for standard dinners; 3–4 weeks when rare or allocated wines are involved, especially in peak season.' },
  { q: 'Which areas do you cover?', a: 'All of Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
]

export default function ServiceSommelierPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sommelier-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sommelier-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={getPageMeta('in-villa-service-sommelier').title}
        description={getPageMeta('in-villa-service-sommelier').description}
        canonical={getPageMeta('in-villa-service-sommelier').canonical}
        ogImage={getPageMeta('in-villa-service-sommelier').ogImage}
        jsonLd={BRIEF_JSON_LD}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/mychef-service-bali-hero-sommelier.webp" alt="Sommelier hire Bali pouring red wine at a candlelit private villa dinner table" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
      }}
    />
    <div className="absolute inset-0 bg-black/20 md:hidden" />
  </div>
  <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
    <Breadcrumb items={[
      { label: 'In-Villa Service', href: '/in-villa-service' },
      { label: 'Sommelier' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Private Sommelier Hire in Bali — Wine Service at Your Villa
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            A certified sommelier at your villa table: pairing design, sourcing advice, decanting and tableside service — from approachable bottles to investment-grade vintages. From IDR 1,200,000 per dinner, anywhere in Bali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-sommelier-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Book a Sommelier
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book a Sommelier
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Services" title="Sommelier Services & Pricing" subtitle="Three ways to bring professional wine service to your villa." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.title} className={`rounded-2xl p-8 ${tier.highlight ? 'bg-[#1A1A1A] text-white' : 'bg-white border border-[#E8E6E3]'}`}>
                <h3 className="font-playfair text-2xl mb-2">{tier.title}</h3>
                <p className={`text-3xl font-semibold mb-1 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#1A1A1A]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/[60%]' : 'text-[#4A4745]'}`}>{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#6B8E5A]'}`} />
                      <span className={tier.highlight ? 'text-white/[80%]' : 'text-[#4A4745]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${tier.highlight ? 'text-white/[50%]' : 'text-[#8A8785]'}`}>Best for: {tier.bestFor}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4A4745] mt-10 max-w-3xl mx-auto">
            Booking one of our <Link to="/fine-dining/tasting-menu" className="text-[#6B8E5A] hover:underline">chef-led tasting menus</Link>? Add a sommelier-selected wine pairing from <strong>IDR 850,000 per guest</strong> — the sommelier tastes through the menu with the chef and matches each course.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every sommelier booking includes full service." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WHAT_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From menu to glass — five refined steps." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <p className="font-cormorant text-[#C5A028] text-sm mb-2">{step.step}</p>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="The wine moment" subtitle="Pairings and pours at Bali villas." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-service-bali-sommelier-gallery-1.webp', alt: 'Sommelier hire Bali presenting a wine bottle to guests at a private villa dinner' },
              { src: '/generated/mychef-service-bali-sommelier-gallery-2.webp', alt: 'Sommelier hire Bali pouring wine at a candlelit private villa dinner table' },
              { src: '/generated/mychef-service-bali-sommelier-gallery-3.webp', alt: 'Sommelier hire Bali decanting wine at a private villa' },
              { src: '/generated/mychef-service-bali-sommelier-gallery-4.webp', alt: 'Sommelier hire Bali guiding a wine tasting on a private villa terrace' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Richard & Anne', location: 'London', quote: 'The sommelier transformed our anniversary dinner. Each wine was perfectly matched, and the stories behind each bottle made the evening unforgettable.', rating: 5 },
          { name: 'Private Dining Client', location: 'Tokyo', quote: 'We brought our own collection. The sommelier reviewed 40 bottles and designed a 6-course pairing that was extraordinary. True expertise.', rating: 5 },
          { name: 'Wedding Couple', location: 'Sydney', quote: 'Our wedding sommelier selected wines for 60 guests across 5 courses. Every table was talking about the pairings. A highlight of the day.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa dinners across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Sommelier FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* Content depth section: Why Sommelier Service in Bali */}
      <section className="py-12 bg-[#FAFAF8] border-t border-[#E8E6E3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why In-Villa Beats the Restaurant Pairing Dinner</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Bali's best-known pairing dinners happen behind restaurant doors — fixed dates, fixed menus, a room full of other people's celebrations. A private sommelier inverts that: the pairing is built around <em>your</em> menu, your chef, your guests' palates and your timeline. The table is yours for the evening. The stories behind each bottle are told to your group alone. And if you have flown with bottles or keep a villa cellar, the sommelier works from what you already own — something no restaurant will do.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For anniversaries, <Link to="/events/weddings" className="text-[#6B8E5A] hover:underline">wedding wine service</Link>, corporate entertaining and milestone birthdays across Seminyak, Ubud, Jimbaran and Uluwatu, this is the difference between attending a wine dinner and hosting one.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Wine Sourcing in Bali — What Your Sommelier Knows</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Wine in Bali carries heavy import duties, and quality varies enormously between suppliers. Buying blind from a villa is a gamble: the same label can cost double across two shops, and storage conditions are not always kind. Our sommeliers know which local importers and distributors carry well-kept stock, which bottles represent genuine value in the IDR pricing landscape, and how to design a pairing menu around what is actually available on the island — not what looks good on paper.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            You purchase from the recommended list yourself, or the sommelier sources directly. Either way, provenance and storage are checked before a cork is pulled.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Certified sommelier, matched to your occasion</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Menu review and pairing design — flavour weight, acidity, tannin and guest preferences mapped per course</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Wine sourcing from trusted Bali importers, at every price point — or a full review of your own collection</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Tableside service: professional opening, decanting where appropriate, correct serving temperature, timed pouring</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Tasting notes and storytelling for every wine</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Cellar-temperature service and glassware guidance</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span>Non-alcoholic pairing option — teas, shrubs, ferments and botanicals built with the same rigour, so non-drinkers share the full experience</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Sommelier Service Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            An intimate <strong className="text-[#1A1A1A]">Wine Pairing Dinner</strong> for up to 8 guests — including a curated 4-course pairing with tableside service and tasting notes — starts at <strong className="text-[#1A1A1A]">IDR 1,200,000</strong>. This is the ideal choice for anniversary dinners, birthday celebrations and special-occasion meals in your villa.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For larger events up to 20 guests — including weddings, corporate dinners and milestone celebrations requiring full event coverage with 6 or more wines, cellar consultation and service-team briefing — the full <strong className="text-[#1A1A1A]">Sommelier Service</strong> package starts at <strong className="text-[#1A1A1A]">IDR 2,000,000 per event</strong>. For corporate team-building, wine clubs or educational tasting sessions with a regional focus, the <strong className="text-[#1A1A1A]">Wine Experience</strong> package starts at <strong className="text-[#1A1A1A]">IDR 3,500,000 per session</strong>.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Wine purchase is always separate from the service fee, based on the sommelier's recommended list. All service fees are subject to 11% tax + 10% service charge (++). Contact us via WhatsApp to discuss your menu and receive a personalised wine pairing proposal.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Areas & Booking</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Tell us your menu, your occasion and your budget — we reply within two hours with a personalised pairing proposal. From a candlelit dinner for two in Ubud to a 20-guest wedding table in Uluwatu, a myCHEF sommelier turns the meal into a guided tasting your guests will discuss long after the evening ends.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Complete the evening: <Link to="/fine-dining" className="text-[#6B8E5A] hover:underline">fine dining at your villa</Link>, <Link to="/in-villa-service/mixology" className="text-[#6B8E5A] hover:underline">mixology for pre-dinner cocktails</Link>, <Link to="/in-villa-service/waiters" className="text-[#6B8E5A] hover:underline">waiters for tableside support</Link>, or browse the <Link to="/in-villa-service" className="text-[#6B8E5A] hover:underline">in-villa service hub</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/fine-dining/tasting-menu" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">chef-led tasting menus with wine pairing</h4>
              <p className="text-xs text-[#4A4745]">Pair your sommelier with a chef-led tasting menu for a full experience.</p>
            </Link>
            <Link to="/fine-dining" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">fine dining at your villa</h4>
              <p className="text-xs text-[#4A4745]">Private chef-led fine dining across Bali.</p>
            </Link>
            <Link to="/in-villa-service/mixology" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">mixology for pre-dinner cocktails</h4>
              <p className="text-xs text-[#4A4745]">Add a cocktail moment before dinner or a creative after-party pour.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">in-villa service hub</h4>
              <p className="text-xs text-[#4A4745]">Explore the full staffing hub for tableside service and guest support.</p>
            </Link>
            <Link to="/in-villa-service/waiters" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">waiters for tableside support</h4>
              <p className="text-xs text-[#4A4745]">Add polished table service for seated dinners and receptions.</p>
            </Link>
            <Link to="/events/weddings" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">wedding wine service</h4>
              <p className="text-xs text-[#4A4745]">Wine service and pairings for villa weddings.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-service-bali-sommelier-cta.webp" alt="Sommelier hire Bali wine glasses and decanter on a candlelit private villa dining table" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Sommelier</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your menu and we will design wine pairings that elevate every course.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-sommelier-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Bartenders', href: '/in-villa-service/bartenders', desc: 'Cocktail and bar service.' },
              { label: 'Butlers', href: '/in-villa-service/butlers', desc: 'Discreet villa hosting.' },
              { label: 'Mixology', href: '/in-villa-service/mixology', desc: 'Signature cocktail programs.' },
              { label: 'Waiters', href: '/in-villa-service/waiters', desc: 'Professional table service.' },
              { label: 'Events', href: '/events', desc: 'Full-service event production.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="in-villa-sommelier"
        serviceName="sommelier service in Bali"
        intent="sommelier service and pricing"
      />
    </div>
  )
}