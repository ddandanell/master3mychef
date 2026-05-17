import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Star, ShieldCheck, Award, Wine } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  detailedServiceSchema,
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

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I'd like to hire a bartender for my villa event in Bali.",
)}`

const PRICING_TIERS = [
  {
    title: 'Standard Bartender',
    price: 'IDR 450,000',
    unit: '/shift',
    features: ['4-hour shift', 'Classic cocktails', 'Beer & wine service', 'Glassware provided', 'Basic bar setup', 'Ice & garnishes'],
    bestFor: 'Villa dinners, small parties, casual gatherings',
  },
  {
    title: 'Premium Bartender',
    price: 'IDR 650,000',
    unit: '/shift',
    features: ['6-hour shift', 'Signature cocktails', 'Full spirits menu', 'Premium glassware', 'Custom menu design', 'Flair techniques'],
    bestFor: 'Weddings, corporate events, milestone celebrations',
    highlight: true,
  },
  {
    title: 'Bar Team (2 pax)',
    price: 'IDR 1,100,000',
    unit: '/shift',
    features: ['6-hour shift', '2 bartenders', 'High-volume service', 'Multiple stations', 'Full bar management', 'Stock control'],
    bestFor: 'Large events, 50+ guests, multi-station bars',
  },
]

const WHAT_INCLUDED = [
  'Professional, experienced bartender',
  'English-speaking service',
  'Full bar equipment and tools',
  'Glassware and garnishes',
  'Ice supply and management',
  'Custom cocktail menu design',
  'Responsible service standards',
  'Complete bar breakdown',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Event details', desc: 'Date, guest count, venue, and drink preferences.', icon: Calendar },
  { step: '02', title: 'Menu design', desc: 'We create a cocktail menu matched to your theme and guest profile.', icon: Wine },
  { step: '03', title: 'Shopping list', desc: 'Detailed spirits, mixers, and garnish list. You buy or we source.', icon: ShieldCheck },
  { step: '04', title: 'Setup & service', desc: 'Bar built 1 hour before guests arrive. Service until last call.', icon: Award },
  { step: '05', title: 'Breakdown', desc: 'Bar packed, glassware cleaned, space restored.', icon: Star },
]

const FAQS = [
  { q: 'Do I need to buy the alcohol?', a: 'Yes. We provide a detailed shopping list based on your cocktail menu. You purchase the alcohol — we bring everything else: equipment, glassware, ice, garnishes, and expertise. Alternatively, we can source everything for a 15% service fee.' },
  { q: 'What cocktails can you make?', a: 'Our bartenders are trained in classics (Martini, Old Fashioned, Mojito, Margarita) and can create signature cocktails matched to your event theme. Premium bartenders offer molecular and flair techniques.' },
  { q: 'How many bartenders do I need?', a: 'One bartender per 30 guests for cocktail service, or one per 50 guests for beer and wine only. For high-volume events, we recommend a bar team of two.' },
  { q: 'Do you provide non-alcoholic options?', a: 'Absolutely. Mocktails, fresh juices, infused waters, and zero-proof cocktails are available and increasingly popular.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: '3–7 days for standard service. 2–4 weeks for premium events during peak season.' },
  { q: 'Can you do themed bars?', a: 'Yes. Tiki, Prohibition, Tropical, Mediterranean — we design the menu, garnishes, and presentation to match your theme.' },
  { q: 'What happens if we run out of alcohol?', a: 'We monitor stock throughout service and alert you before running low. For remote villas, we recommend a 20% buffer on initial purchases.' },
]

export default function ServiceBartendersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bartender-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bartender-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Bartender Hire Bali | Villa Bartenders — myCHEF"
        description="Hire a bartender for your Bali villa. Cocktails, glassware, ice, garnishes, full pour for parties and events. From IDR 450,000 per shift."
        canonical={`${SITE}/in-villa-service/bartenders`}
        ogImage={`${SITE}/generated/aura-bartender.webp`}
        jsonLd={[
          localBusinessSchema,
          detailedServiceSchema(
            'Bartender Hire Bali',
            'myCHEF.id provides professional bartender hire in Bali for villa dinners, weddings, and private parties. We handle cocktail service, bar setup, glassware, and smooth event execution from first pour to last call.',
            `${SITE}/in-villa-service/bartenders`,
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 112),
          breadcrumbSchema('Bartender Hire Bali', `${SITE}/in-villa-service/bartenders`, 'In-Villa Service', `${SITE}/in-villa-service`),
        ]}
      />
{/* Hero */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">
  <div className="absolute inset-0">
    <img src="/generated/aura-bartender.webp" alt="Professional bartender mixing cocktails at a private Bali villa bar" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
      }}
    />
    <div className="absolute inset-0 bg-black/20 md:hidden" />
  </div>
  <div className="relative z-10 px-6 md:px-12 py-12 md:py-20 max-w-[1280px] mx-auto w-full text-white">
    <Breadcrumb items={[
      { label: 'In-Villa Service', href: '/in-villa-service' },
      { label: 'Bartenders' },
    ]} theme="dark" className="px-0 pt-0 pb-8" />
    <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-Villa Service</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Bartender Hire in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Professional bartenders for your villa party, wedding, or event. 
            Classic cocktails, signature drinks, full bar setup. From IDR 450,000 per shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-bartenders-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              <Calendar className="w-4 h-4" /> Book a Bartender
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Pricing" title="Bartender Packages" subtitle="Choose the service level that matches your event." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every bartender booking comes fully equipped." />
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
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From menu design to last call — five smooth steps." />
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
          { name: 'Tom & Lisa', location: 'Melbourne', quote: 'The bartender created a signature cocktail for our wedding. Guests are still talking about it six months later. Absolute professional.', rating: 5 },
          { name: 'Corporate Team', location: 'Jakarta', quote: 'Hired two bartenders for our 80-person offsite. Service was seamless, cocktails were outstanding, and the bar looked incredible.', rating: 5 },
          { name: 'The Patel Family', location: 'Mumbai', quote: 'Bartender for our villa reunion. Made amazing mocktails for the kids and proper cocktails for the adults. Everyone was happy.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from villa events across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Bartender Hire FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-3 font-semibold">Explore More Services</p>
          <h3 className="font-playfair text-3xl text-[#1A1A1A] mb-6">You might also need</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/in-villa-service/mixology" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Mixology</h4>
              <p className="text-xs text-[#4A4745]">Go beyond service with signature cocktails and interactive masterclasses.</p>
            </Link>
            <Link to="/in-villa-service/waiters" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Waiter Hire</h4>
              <p className="text-xs text-[#4A4745]">Add smooth floor service for plated dinners, parties, and receptions.</p>
            </Link>
            <Link to="/in-villa-service" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">In-Villa Service</h4>
              <p className="text-xs text-[#4A4745]">Browse the full staffing hub for drinks, dining, and guest-facing support.</p>
            </Link>
            <Link to="/events" className="rounded-xl border border-[#C5A028]/20 bg-[#FAFAF8] p-5 transition-colors hover:border-[#C5A028]/40 hover:bg-[#C5A028]/5">
              <h4 className="font-semibold text-sm mb-1 text-[#1A1A1A]">Events</h4>
              <p className="text-xs text-[#4A4745]">Plan the full event experience around your bar concept and guest count.</p>
            </Link>
          </div>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/party-ultimate.webp" alt="Villa bar setup at Bali event" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Book Your Bartender</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your event details and we will design the perfect bar experience.
            Reply within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="service-bartenders-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
