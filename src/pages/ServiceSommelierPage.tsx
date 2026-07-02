import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, Wine } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  breadcrumbSchema,
  detailedServiceSchema,
  faqPageSchema,
  aggregateRatingSchema,
  howToSchema,
} from '@/components/SeoHead'
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
  { q: 'What does a sommelier do at a villa dinner?', a: 'A sommelier builds wine pairings for your menu, sources the bottles, serves tableside with tasting notes, and ensures each wine is opened and poured at the perfect moment. They turn dinner into a complete hospitality moment.' },
  { q: 'Do I need to buy the wine separately?', a: 'Yes. The sommelier fee covers planning, service, and expertise. Wine is purchased separately based on the recommended list. We work with your budget — from approachable to investment-grade.' },
  { q: 'Can the sommelier work with my existing wine collection?', a: 'Absolutely. If you have a cellar or purchased wines, our sommelier will review your collection and design pairings from what you already own.' },
  { q: 'What types of wine do you pair?', a: 'Everything from Old World classics (Burgundy, Bordeaux, Champagne) to New World discoveries and emerging regions. We also curate sake, natural wine, and non-alcoholic pairings.' },
  { q: 'How many wines for a multi-course dinner?', a: 'Typically one wine per course, plus an aperitif. A 4-course dinner usually features 4–5 wines. A tasting menu may include 6–8.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for standard dinners. 3–4 weeks for rare or allocated wines during peak season.' },
  { q: 'Can you do non-alcoholic pairings?', a: 'Yes. Our sommeliers craft sophisticated non-alcoholic pairings using teas, shrubs, ferments, and botanicals that match the complexity of wine.' },
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
        title="Sommelier Hire Bali | Villa Wine Pairings — myCHEF"
        description="Hire a sommelier in Bali for villa dinners & tasting menus. Expert wine pairings, bottle selection & tableside service. WhatsApp us to add wine service."
        canonical={`${SITE}/in-villa-service/sommelier`}
        ogImage={`${SITE}/generated/luna-wine.webp`}
        jsonLd={[
          detailedServiceSchema(
            'Sommelier Service Bali',
            'myCHEF.id provides sommelier service in Bali for villa dinners, celebrations, and private events. We curate wine pairings, guide bottle selections, and deliver polished tableside service throughout the experience.',
            `${SITE}/in-villa-service/sommelier`,
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 34),
          howToSchema({
            name: 'How to Hire a Sommelier in Bali',
            description: 'Book a professional sommelier for your Bali villa dinner in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your wine experience', text: 'Select from wine pairing dinner, cellar consultation, or tasting event.' },
              { name: 'Share dinner details', text: 'Send your date, villa location, guest count, and menu style via WhatsApp.' },
              { name: 'Approve your wine selection', text: 'We curate a wine list matched to your menu, budget, and preferences within 1 hour.' },
              { name: 'Savor every sip', text: 'The sommelier arrives with selected wines, glassware, and guides each pairing tableside.' },
            ],
          }),
          breadcrumbSchema('Sommelier Service Bali', `${SITE}/in-villa-service/sommelier`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/mychef-misc-bali-chefs-table-hero-luxury.webp" alt="Sommelier presenting wine at private Bali villa dinner" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
            Sommelier Service in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Tailored wine pairings and tableside service for your villa dinner. 
            From approachable to investment-grade. From IDR 1,200,000 per dinner.
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
          <SectionHeader eyebrow="Services" title="Sommelier Packages" subtitle="From intimate pairings to full educational experiences." />
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
              { src: '/generated/mychef-sommelier-1.webp', alt: 'Balinese sommelier presenting wine to guests at a Bali villa dinner' },
              { src: '/generated/mychef-sommelier-2.webp', alt: 'Balinese sommelier pouring wine at a candlelit Bali villa table' },
              { src: '/generated/mychef-sommelier-3.webp', alt: 'Balinese sommelier decanting wine at a Bali villa' },
              { src: '/generated/mychef-sommelier-4.webp', alt: 'Balinese sommelier guiding a wine tasting on a Bali villa terrace' },
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
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mb-6">Why Hire a Sommelier for Your Bali Villa Dinner?</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            A private dinner in Bali is already an extraordinary setting — tropical garden, open-air pavilion, candlelight over a rice field or ocean view. What lifts a beautiful dinner into something genuinely memorable is the quality of what's in the glass. A certified sommelier takes the guesswork out of wine selection entirely, curating each bottle to complement the food, the occasion, and the preferences of your guests.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Sourcing wine in Bali requires local knowledge. Import duties make wine expensive and quality inconsistent without insider access. Our sommeliers know which local distributors carry exceptional stock, which bottles represent real value in the IDR pricing landscape, and how to plan a pairing menu around what's actually available — not what looks good on paper. They can also work with your existing collection if you've brought bottles, applying expert pairing logic to what you already own.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            For anniversary dinners, wedding receptions, corporate entertaining, and milestone occasions across Seminyak, Ubud, Jimbaran, and Uluwatu, a myCHEF sommelier transforms the dining table into a complete sensory experience that guests discuss long after the evening ends.
          </p>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">What's Included in Your Sommelier Service Experience</h2>
          <ul className="space-y-3 text-[#4A4745]">
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Menu review and pairing design:</strong> The sommelier studies your chef's menu in advance and designs a wine sequence that enhances every course — considering flavour weight, acidity, tannin, and guest preferences.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Wine sourcing and procurement:</strong> Selection of bottles from trusted Bali importers and suppliers, with recommendations at every price point. You purchase from the list or the sommelier can source directly.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Tableside service and presentation:</strong> Professional opening, decanting where appropriate, serving at correct temperature, and topping throughout the meal — handled with the timing of a Michelin-trained service.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Tasting notes and storytelling:</strong> Each wine introduced with its origin, producer story, and pairing rationale — turning the meal into a guided tasting experience for curious guests.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Non-alcoholic pairing option:</strong> For guests who do not drink, the sommelier designs a parallel pairing of juices, teas, shrubs, and zero-proof alternatives — ensuring they enjoy the full sensory intention of the meal.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#C5A028] font-bold mt-0.5">—</span><span><strong>Cellar consultation:</strong> For guests with a personal collection, the sommelier reviews your bottles and designs the optimal pairing sequence from what you already own.</span></li>
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-[#1A1A1A] mt-10 mb-6">Sommelier Service Pricing in Bali</h2>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            Sommelier service in Bali is priced per engagement based on the scope and scale of the event. An intimate wine pairing dinner for up to 8 guests — including a curated 4-course pairing with tableside service and tasting notes — starts at <strong className="text-[#1A1A1A]">IDR 1,200,000</strong>. This is the ideal choice for anniversary dinners, birthday celebrations, and special occasion meals in your villa.
          </p>
          <p className="text-[#4A4745] leading-relaxed mb-4">
            For larger events up to 20 guests — including weddings, corporate dinners, and milestone celebrations requiring a full event coverage with 6 or more wines, cellar consultation, and service team briefing — the full Sommelier Service package starts at <strong className="text-[#1A1A1A]">IDR 2,000,000 per event</strong>. For corporate team-building, wine club experiences, or educational tasting sessions with a regional or varietal focus, the Wine Experience package starts at <strong className="text-[#1A1A1A]">IDR 3,500,000 per session</strong>.
          </p>
          <p className="text-[#4A4745] leading-relaxed">
            Wine purchase is always separate from the service fee, based on the sommelier's recommended list. All service fees are subject to 11% tax + 10% service charge (++). Contact us via WhatsApp to discuss your menu and receive a personalised wine pairing proposal.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/mixology" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Mixology</h4>
              <p className="text-xs text-[#4A4745]">Add a cocktail moment before dinner or a creative after-party pour.</p>
            </Link>
            <Link to="/fine-dining" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Fine Dining</h4>
              <p className="text-xs text-[#4A4745]">Pair your sommelier with a chef-led tasting menu for a full experience.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">In-Villa Service</h4>
              <p className="text-xs text-[#4A4745]">Explore the full staffing hub for tableside service and guest support.</p>
            </Link>
            <Link to="/catering" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Catering</h4>
              <p className="text-xs text-[#4A4745]">Explore menus and formats for villa dinners, receptions, and larger groups.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-experience-bali-luna-wine.webp" alt="Wine pairing at Bali villa dinner" className="w-full h-full object-cover" loading="lazy" />
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
            <a href="tel:+62089674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
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