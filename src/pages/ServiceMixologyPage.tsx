import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, FlaskConical } from 'lucide-react'
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
  "Hi myCHEF, I'd like to book a mixology experience for my villa in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Cocktail Experience',
    price: 'IDR 1,500,000',
    unit: '/session',
    features: ['2-hour session', '4 signature cocktails', 'Fresh ingredients', 'Glassware & tools', 'Tasting notes', 'Up to 8 guests'],
    bestFor: 'Intimate dinners, date nights, small gatherings',
  },
  {
    title: 'Mixology Masterclass',
    price: 'IDR 2,500,000',
    unit: '/session',
    features: ['3-hour session', '6 cocktails + techniques', 'Hands-on participation', 'Ingredient sourcing talk', 'Recipe cards', 'Up to 12 guests'],
    bestFor: 'Birthdays, team building, villa experiences',
    highlight: true,
  },
  {
    title: 'Bespoke Program',
    price: 'IDR 4,000,000',
    unit: '/day',
    features: ['Full-day program', 'Custom menu creation', 'Molecular techniques', 'Bar setup design', 'Branded cocktails', 'Unlimited guests'],
    bestFor: 'Weddings, corporate retreats, luxury launches',
  },
]

const WHAT_INCLUDED = [
  'Professional mixologist',
  'Premium spirits and ingredients',
  'Specialized bar tools',
  'Elegant glassware',
  'Fresh garnishes and botanicals',
  'Custom cocktail menu',
  'Tasting notes and stories',
  'Recipe cards for guests',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Briefing', desc: 'Your tastes, preferences, and the occasion.', icon: Calendar },
  { step: '02', title: 'Menu design', desc: 'Bespoke cocktails crafted around your story.', icon: FlaskConical },
  { step: '03', title: 'Sourcing', desc: 'Premium spirits, fresh produce, unique ingredients.', icon: ShieldCheck },
  { step: '04', title: 'Experience', desc: 'Build, shake, stir, and taste. Interactive and memorable.', icon: Award },
  { step: '05', title: 'Take home', desc: 'Recipe cards and ingredient list to recreate.', icon: Star },
]

const FAQS = [
  { q: 'What is the difference between a bartender and a mixologist?', a: 'A bartender serves drinks efficiently. A mixologist designs cocktails as culinary creations — balancing flavors, sourcing unique ingredients, and creating an experience around each drink. Think chef versus cook.' },
  { q: 'Can guests participate in making cocktails?', a: 'Absolutely. Our masterclass tier is designed for hands-on participation. Guests learn techniques, build their own drinks, and take home recipe cards.' },
  { q: 'Do you use local Balinese ingredients?', a: 'Yes. We incorporate arak, local fruits, Balinese spices, and tropical botanicals into our creations. It is Bali in a glass.' },
  { q: 'How long does a session last?', a: 'Cocktail Experience: 2 hours. Mixology Masterclass: 3 hours. Bespoke Program: full day with breaks.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '1–2 weeks for standard sessions. 3–4 weeks for bespoke programs during peak season.' },
  { q: 'Can you create non-alcoholic experiences?', a: 'Yes. Our zero-proof programs are increasingly popular — complex, layered mocktails that rival their alcoholic counterparts.' },
  { q: 'Do you provide the alcohol?', a: 'We provide a detailed shopping list. You purchase the spirits. We bring all mixers, garnishes, tools, and glassware.' },
]

export default function ServiceMixologyPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mixology-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.mixology-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Mixology Bali | Private Villa Cocktail Programs — myCHEF"
        description="Private mixology in Bali — bespoke cocktail menus, signature drinks, demonstrations, fresh-pressed builds. From IDR 1,500,000 per session."
        canonical={`${SITE}/in-villa-service/mixology`}
        ogImage={`${SITE}/generated/aura-bartender.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Mixology Bali',
            'Private mixology experiences in Bali villas. Bespoke cocktail programs, masterclasses, and signature drink creation.',
            `${SITE}/in-villa-service/mixology`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 45),
          breadcrumbSchema('Mixology', `${SITE}/in-villa-service/mixology`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />

      <Breadcrumb items={[
        { label: 'In-Villa Service', href: '/in-villa-service' },
        { label: 'Mixology' },
      ]} />

      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/hero-mixology.webp" alt="Mixologist crafting signature cocktail at Bali villa" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1280px] mx-auto w-full">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Mixology in Bali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-[600px] mb-8">
            Bespoke cocktail programs and masterclasses in your villa. 
            Signature drinks, fresh ingredients, unforgettable experiences. From IDR 1,500,000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1ea855] transition-colors">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
              <Calendar className="w-4 h-4" /> Book Mixology
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Experiences" title="Mixology Programs" subtitle="From intimate tastings to full-day masterclasses." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every mixology experience is fully equipped." />
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
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From concept to cocktail — five creative steps." />
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
          { name: 'Alex & Jordan', location: 'Los Angeles', quote: 'The mixology masterclass was the highlight of our trip. We learned techniques we still use at home. The cocktails were incredible.', rating: 5 },
          { name: 'Corporate Team', location: 'Sydney', quote: 'Booked for our team retreat. The branded cocktails were a hit. Professional, fun, and genuinely educational.', rating: 5 },
          { name: 'The Nguyen Family', location: 'Ho Chi Minh City', quote: 'Zero-proof experience for our family reunion. Even the teenagers loved it. Beautiful, complex drinks without alcohol.', rating: 5 },
        ]}
        title="What Guests Say"
        subtitle="Real reviews from mixology experiences across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Mixology FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/bartenders" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Bartender Hire</h4>
              <p className="text-xs text-[#4A4745]">Professional bartenders for your villa event.</p>
            </Link>
            <Link to="/in-villa-service/sommelier" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Sommelier Service</h4>
              <p className="text-xs text-[#4A4745]">Curated wine pairings for your villa dinner.</p>
            </Link>
            <Link to="/events/villa-parties" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Villa Parties</h4>
              <p className="text-xs text-[#4A4745]">BBQ, cocktail, and pool parties with full bar service.</p>
            </Link>
            <Link to="/catering/bbq-catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">BBQ Catering</h4>
              <p className="text-xs text-[#4A4745]">Live BBQ stations and grilled feasts for your group.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/party-ultimate.webp" alt="Mixology experience at Bali villa" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Mixology Experience</h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us your vision and we will design a cocktail program your guests will never forget.
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
