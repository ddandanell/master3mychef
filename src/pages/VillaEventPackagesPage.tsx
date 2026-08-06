import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Check, ChefHat, PartyPopper, Wine, Users, Sparkles, ShieldCheck, Phone, Mail, Instagram, MapPin } from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema, postalAddressSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { ArticleContentSection } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'an all-inclusive villa event package in Bali', intent: 'a tailored quotation' })
const SITE = 'https://mychef.id'

const INCLUDED = [
  { icon: ChefHat, title: 'Event chef & kitchen team', desc: 'Menu designed for the occasion, cooked fresh on site; groceries at cost with receipts.' },
  { icon: Wine, title: 'Bar service', desc: 'Staffed open bar, with cocktail and premium upgrades available.' },
  { icon: Users, title: 'Service staff', desc: 'Waiters and floor staff scaled to your guest count (from IDR 250K/hour for additional staff); bartenders from IDR 350K/hour.' },
  { icon: Calendar, title: 'Event coordination', desc: 'A day-of coordinator running the timeline: arrivals, speeches, cake, music.' },
  { icon: Sparkles, title: 'Decor & entertainment coordination', desc: 'Styling, DJs, bands and photographers booked and managed on one timeline.' },
  { icon: PartyPopper, title: 'Setup & full cleanup', desc: 'Staged breakdown, kitchen reset, waste removal.' },
  { icon: ShieldCheck, title: 'Villa handback', desc: 'Direct coordination with your property manager so the villa (and your security deposit) is returned intact.' },
]

const OCCASIONS = [
  {
    title: 'Birthday',
    desc: 'From IDR 850K++/person (15–40 guests). BBQ buffet, bartender and open bar, DJ, decor, cake, photographer and coordinator. Intimate milestone dinners from IDR 1.5M++/person (4–12).',
    href: '/events/birthdays',
    linkText: 'birthday catering formats',
  },
  {
    title: 'Villa Party',
    desc: 'From IDR 650K++/person for cocktail receptions (20–80 guests) and IDR 850K++/person for sundowner BBQ parties (15–50). Pool parties, hens, bucks, reunions.',
    href: '/events/villa-parties',
    linkText: 'villa party formats',
  },
  {
    title: 'Baby Shower',
    desc: 'From IDR 750K++/person (10–15 guests): pregnancy-safe brunch, mocktail bar, styling and photography, scaling to 50+ guest receptions from IDR 350K++/person.',
    href: '/events',
    linkText: 'all event types',
  },
  {
    title: 'Wedding & Rehearsal',
    desc: 'Villa weddings and rehearsal dinners are quoted individually around guest count and production level. See our villa wedding catering team, or browse all event types.',
    href: '/events/weddings',
    linkText: 'villa wedding catering',
  },
]

const SAMPLE_WEEKEND = [
  { label: 'Friday — arrival dinner', text: 'private chef dinner at the villa, 24 guests × IDR 700K = IDR 16.8M++' },
  { label: 'Saturday — the main event', text: 'birthday villa party package, 24 guests × IDR 850K = IDR 20.4M++' },
  { label: 'Sunday — recovery brunch', text: 'chef-cooked brunch, 24 guests × IDR 700K = IDR 16.8M++' },
]

const FAQS = [
  { question: 'What exactly is bundled in a villa event package?', answer: 'Chef and kitchen team, menu and groceries at cost, bar service, service staff, day-of coordinator, decor and entertainment coordination, setup, full cleanup and villa handback.' },
  { question: 'How much does a villa event package cost?', answer: 'From IDR 650K++/person (cocktail reception, 20–80 guests), IDR 850K++/person (sundowner or birthday party, 15–50) and IDR 1.5M++/person (intimate dinner, 4–12). \'++\' adds 11% government tax + 10% service charge.' },
  { question: 'Is a package cheaper than booking everything separately?', answer: 'Usually better value and always cleaner: one setup crew, one coordinator, no duplicated logistics, quoted as a single itemised total.' },
  { question: 'What\'s the minimum group size?', answer: '4 guests for intimate dinners, 10 for showers, 15 for parties, 20 for cocktail receptions.' },
  { question: 'Do we need the villa\'s permission? What about noise and banjar rules?', answer: 'Yes — event approval is confirmed with the villa manager, and sound, timing and guest flow are planned around the property\'s rules including banjar notification where customary.' },
  { question: 'Can you coordinate our decor, DJ and photographer?', answer: 'Yes — styling, entertainment and photography are coordinated through trusted suppliers on one timeline, priced upfront in the proposal.' },
  { question: 'What if it rains?', answer: 'Every package includes a covered fallback — grills and bars move under shelter, styling relocates indoors, the timeline adjusts.' },
  { question: 'How do deposits and cancellation work?', answer: 'A 50% deposit confirms the date and locks the team. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { question: 'Is this the same as the Complete Villa Experience?', answer: 'No — a villa event package covers one occasion; the Complete Villa Experience covers a whole multi-day stay with daily chef, staffing and concierge.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bali Villa Event Packages',
  serviceType: 'All-inclusive single-event villa packages',
  provider: {
    '@type': 'LocalBusiness',
    name: siteFacts.businessName,
    url: 'https://mychef.id/',
    telephone: siteFacts.phoneDisplay,
    address: postalAddressSchema,
  },
  areaServed: 'Bali, Indonesia',
  description: 'All-inclusive Bali villa event packages for a single occasion: private chef, bar service, staffing, decor and entertainment coordination, setup, cleanup and villa handback under one fixed quote.',
  offers: [
    { '@type': 'Offer', name: 'Villa Party Package', price: '650000', priceCurrency: 'IDR', description: 'From IDR 650K++/person (cocktail reception, 20–80 guests) to IDR 850K++/person (sundowner, 15–50). ++ 11% tax + 10% service.' },
    { '@type': 'Offer', name: 'Birthday Event Package', price: '850000', priceCurrency: 'IDR', description: 'From IDR 850K++/person, 15–40 guests. BBQ, bar, DJ, decor, cake, photographer, coordinator.' },
    { '@type': 'Offer', name: 'Intimate Dinner Package', price: '1500000', priceCurrency: 'IDR', description: 'From IDR 1.5M++/person, 4–12 guests. 5-course dinner, cake, styling, photographer.' },
  ],
}

export default function VillaEventPackagesPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Bali Villa Event Packages | All-Inclusive Events | myCHEF"
        description="All-inclusive Bali villa event packages: private chef, bar service, staffing, transport & cleanup in one bundle. Tailored quotes. WhatsApp myCHEF."
        canonical={`${SITE}/villa-event-packages`}
        ogImage={`${SITE}/generated/mychef-villa-packages-banquet-lawn-bali-landscape.webp`}
        jsonLd={[
          breadcrumbSchema('Villa Event Packages', `${SITE}/villa-event-packages`),
          serviceSchema,
          faqPageSchema(FAQS),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-villa-packages-banquet-lawn-bali-landscape.webp"
            alt="Long banquet table with floral runners and candles set for a private event on a Bali villa lawn at dusk"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Villa Event Packages' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            All-Inclusive Villa Events
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bali Villa Event Packages — Everything, Arranged
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            One occasion. One team. One fixed quote. A myCHEF villa event package bundles everything a single celebration needs — chef, bar, staff, decor coordination, entertainment, setup and handback — so you brief us once and simply host.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Tailored Quotation
            </a>
            <a href="#enquire" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Contact the Team
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Bespoke packages · Detailed proposal without obligation
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white villa-content villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                One Fixed Quote, One Point of Contact
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Arrive in Bali to find your event already arranged
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                No chasing five vendors, no stitched-together timelines, no surprises on the invoice. Tell us the occasion, date and guest count — we reply within the hour with a detailed proposal, no obligation.
              </p>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Planning more than one event — a whole stay with daily chef and concierge? That is our <Link to="/complete-villa-experience" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">whole-stay version: multi-day concierge</Link>. This page is for the single occasion, done completely.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-intro-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                <MessageCircle className="w-4 h-4" /> Request a Tailored Quotation
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-interior-pool-living-bali-landscape.webp" alt="Open-plan living room of a luxury Bali villa prepared for guests" width={1024} height={576} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Seven Services, One Team"
            title="What Every Package Includes"
            subtitle="Seven services, scoped to your villa, your group and your occasion, delivered by one integrated team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mt-10">
            All prices "++" — 11% government tax + 10% service charge. Your proposal states the full total including tax and service before you commit.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Tailored by Occasion"
            title="Packages by Occasion"
            subtitle="Fixed per-person anchors for the most popular single-event formats in Bali villas."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OCCASIONS.map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#E8E6E3] bg-[#FAFAF8] p-6 md:p-8">
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm mb-4">{card.desc}</p>
                <Link to={card.href} className="text-[#C5A028] text-sm underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">See {card.linkText}</Link>
              </div>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mt-10">
            Production add-ons priced upfront: themed decor +IDR 3.5–7.5M, custom 3-tier cake +IDR 2–4M, DJ from IDR 4M, live band from IDR 8M, extended photography +IDR 4.8M/4h.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-packages-chef-dinner-table-bali-landscape.webp" alt="Candlelit private chef dinner table set inside a Bali villa" width={1216} height={832} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Transparent Pricing
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Sample Celebration Weekend, Costed
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                What a 24-guest birthday weekend looks like as one package (illustrative, per-person prices "++"):
              </p>
              <div className="space-y-3 mb-6">
                {SAMPLE_WEEKEND.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed"><strong>{item.label}</strong> — {item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#4A4745] leading-relaxed mb-6">
                <strong>Total: ~IDR 54M++</strong> — one proposal, one team, one point of contact across all three services. Guest <Link to="/vip-transport-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">arrival transfers, arranged</Link> as an add-on through our partner network.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-sample-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
                <MessageCircle className="w-4 h-4" /> Request Your Package Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Smarter Way to Host
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Bundle Instead of Booking Separately
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Separate vendors means separate setup crews, duplicated coordination and gaps nobody owns — the DJ who arrives during dinner service, the decorator blocking the bar, the cleanup no one's contracted to do. A package removes the seams: one timeline, one coordinator, one invoice, and a team that has run the same sequence in hundreds of Bali villas.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                It also makes the budget honest — everything itemised in a single fixed quote instead of five estimates you'll never reconcile.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-villa-packages-packages-bartender-bali-landscape.webp" alt="myCHEF mixologist preparing craft cocktails at a Bali villa bar" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] villa-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-villa-packages-staff-setting-table-bali-landscape.webp" alt="Uniformed myCHEF service team setting a long dinner table at a Bali villa" width={1440} height={800} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Privacy & Logistics
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Discretion, Villas & Logistics
              </h2>
              <p className="text-[#4A4745] leading-relaxed">
                We regularly host high-profile guests and work under an absolute discretion guarantee — silent professionals, no social posts, no name-dropping. Before any package is confirmed we check the practical frame with your villa manager: event permission, noise expectations and curfew, banjar (community) notification where customary, access and parking. Every outdoor event gets a covered fallback plan. After the last toast, we manage the full breakdown and hand the villa back to its original condition — protecting your security deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white villa-reveal">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="Questions Answered"
            title="Villa Event Packages — FAQ"
            subtitle="Everything hosts ask before booking a single-event package in a Bali villa."
          />
          <FAQAccordion items={FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} showToc ctaEvery={5} />
          <div className="text-center mt-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-faq-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <MessageCircle className="w-4 h-4" /> Request a Tailored Quotation
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      {/* ═══════ EXPLORE MORE ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Complete the Experience</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'whole-stay version: multi-day concierge', href: '/complete-villa-experience', desc: 'Whole-stay daily chef & concierge.' },
              { label: 'all event types', href: '/events', desc: 'Birthdays, parties, weddings & more.' },
              { label: 'birthday catering formats', href: '/events/birthdays', desc: 'Birthday catering formats.' },
              { label: 'villa party formats', href: '/events/villa-parties', desc: 'Villa party catering packages.' },
              { label: 'arrival transfers, arranged', href: '/vip-transport-bali', desc: 'Arrival transfers, arranged.' },
              { label: 'additional villa staff', href: '/in-villa-service', desc: 'Extra villa staff & service.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ FINAL CTA / CONTACT ═══════ */}
      <section id="enquire" className="py-20 md:py-28 bg-[#0A0A0A] villa-reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Request Your Package Quote
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Send us the occasion, date, villa and guest count
          </h2>
          <p className="text-white/[70%] leading-relaxed mb-4 max-w-2xl mx-auto">
            We'll reply within the hour and follow with a detailed, itemised proposal — every service line priced, nothing hidden, no obligation.
          </p>
          <p className="text-white/[70%] leading-relaxed mb-10 max-w-2xl mx-auto">
            Need extra hands for a longer stay? See our <Link to="/in-villa-service" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">additional villa staff</Link>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-event-packages-final-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> WhatsApp {siteFacts.phoneDisplay}
            </a>
            <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Mail className="w-4 h-4" /> bali@mychef.id
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Telephone</p>
              <a href={`https://wa.me/${siteFacts.whatsappNumber}`} className="text-white/[65%] text-sm hover:text-white transition-colors">{siteFacts.phoneDisplay}</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Mail className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Email</p>
              <a href="mailto:bali@mychef.id" className="text-white/[65%] text-sm hover:text-white transition-colors">bali@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Instagram className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Instagram</p>
              <a href="https://www.instagram.com/mychef.id" target="_blank" rel="noopener noreferrer" className="text-white/[65%] text-sm hover:text-white transition-colors">@mychef.id</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="w-5 h-5 text-[#C5A028] mb-3" />
              <p className="text-white text-sm font-semibold mb-1">Address</p>
              <p className="text-white/[65%] text-sm leading-relaxed">{siteFacts.addressDisplay}</p>
            </div>
          </div>
          <p className="text-white/40 text-xs tracking-wide uppercase">
            HACCP Food Safety Certified · Milan-trained culinary leadership · Serving Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and villas across Bali
          </p>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="villa-event-packages"
        serviceType="villa-event-package"
        label="Request a Villa Package via WhatsApp"
        serviceName="an all-inclusive villa event package in Bali"
        intent="a tailored quotation"
      />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}
