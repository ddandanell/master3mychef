import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, Wine } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to hire a sommelier for my villa dinner in Bali.",
)}`

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
  'Curated wine selection',
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
  { q: 'What does a sommelier do at a villa dinner?', a: 'A sommelier curates wine pairings for your menu, sources the bottles, serves tableside with tasting notes, and ensures each wine is opened and poured at the perfect moment. They elevate the meal from dinner to experience.' },
  { q: 'Do I need to buy the wine separately?', a: 'Yes. The sommelier fee covers curation, service, and expertise. Wine is purchased separately based on the curated list. We work with your budget — from approachable to investment-grade.' },
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
        title="Sommelier Bali | Villa Wine Pairings — myCHEF"
        description="Hire a sommelier in Bali for villa dinners. Curated wine pairings, table service, cellar selection. From IDR 1,200,000 per dinner."
        canonical={`${SITE}/in-villa-service/sommelier`}
        ogImage={`${SITE}/generated/luna-wine.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Sommelier Bali',
            'Professional sommelier service for villa dinners and events in Bali. Wine pairing curation, tableside service, and cellar consultation.',
            `${SITE}/in-villa-service/sommelier`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 34),
          breadcrumbSchema('Sommelier', `${SITE}/in-villa-service/sommelier`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />

      <Breadcrumb items={[
        { label: 'In-Villa Service', href: '/in-villa-service' },
        { label: 'Sommelier' },
      ]} />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/luna-wine.webp" alt="Sommelier presenting wine at Bali villa dinner" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1280px] mx-auto w-full">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Sommelier Service in Bali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-[600px] mb-8">
            Curated wine pairings and tableside service for your villa dinner. 
            From approachable to investment-grade. From IDR 1,200,000 per dinner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1ea855] transition-colors">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
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
                <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/60' : 'text-[#4A4745]'}`}>{tier.unit}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C5A028]' : 'text-[#6B8E5A]'}`} />
                      <span className={tier.highlight ? 'text-white/80' : 'text-[#4A4745]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${tier.highlight ? 'text-white/50' : 'text-[#8A8785]'}`}>Best for: {tier.bestFor}</p>
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

      <TestimonialBlock
        testimonials={[
          { name: 'Richard & Anne', location: 'London', quote: 'The sommelier transformed our anniversary dinner. Each wine was perfectly matched, and the stories behind each bottle made the evening unforgettable.', rating: 5 },
          { name: 'Private Dining Client', location: 'Tokyo', quote: 'We brought our own collection. The sommelier reviewed 40 bottles and designed a 6-course pairing that was extraordinary. True expertise.', rating: 5 },
          { name: 'Wedding Couple', location: 'Sydney', quote: 'Our wedding sommelier curated wines for 60 guests across 5 courses. Every table was talking about the pairings. A highlight of the day.', rating: 5 },
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

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/luna-wine.webp" alt="Wine pairing at Bali villa dinner" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Sommelier</h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us your menu and we will design wine pairings that elevate every course.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
