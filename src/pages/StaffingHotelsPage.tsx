import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, Briefcase, ClipboardList } from 'lucide-react'
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

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF, I run a hotel/restaurant in Bali and need staffing support.",
)}`

const PRICING_TIERS = [
  {
    title: 'Kitchen Staff',
    price: 'IDR 3,500,000',
    unit: 'one-time',
    features: ['Sous chef to line cook', 'Cuisine-specific matching', 'Kitchen trial shift', 'Reference verification', 'Contract preparation', '60-day replacement guarantee'],
    bestFor: 'Boutique restaurants and hotel kitchens',
  },
  {
    title: 'Service Staff',
    price: 'IDR 2,500,000',
    unit: 'one-time',
    features: ['Waiters, bartenders, hosts', 'Front-of-house trials', 'Language assessment', 'Uniform & grooming check', 'Service standards briefing', '60-day replacement guarantee'],
    bestFor: 'Restaurants, beach clubs, hotel F&B',
    highlight: true,
  },
  {
    title: 'Management',
    price: 'IDR 6,000,000',
    unit: 'one-time',
    features: ['Restaurant manager, F&B director', 'Leadership assessment', 'P&L experience screening', 'Team management trials', 'Strategic planning review', '90-day replacement guarantee'],
    bestFor: 'Hotels, resorts, multi-outlet venues',
  },
]

const WHAT_INCLUDED = [
  'Industry-specific vetting',
  'Trial shifts & assessments',
  'Reference & background checks',
  'Contract & onboarding support',
  'Replacement guarantee',
  'Volume rate access',
  'Performance tracking',
  'Dedicated recruitment partner',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Brief', desc: 'Share your establishment needs, team structure, and culture.', icon: ClipboardList },
  { step: '02', title: 'Shortlist', desc: 'Receive matched candidates for your kitchen or front-of-house.', icon: Users },
  { step: '03', title: 'Trials', desc: 'Trial shifts with your top candidates at your venue.', icon: Briefcase },
  { step: '04', title: 'Placement', desc: 'Contracts, onboarding, and first-week support.', icon: ShieldCheck },
  { step: '05', title: 'Support', desc: 'Ongoing check-ins, replacements, and volume planning.', icon: Award },
]

const FAQS = [
  { q: 'Do you offer volume rates for multiple hires?', a: 'Yes. Our Volume Package offers custom pricing for 10+ placements. Contact us for a tailored rate card based on your hiring forecast.' },
  { q: 'What types of hospitality roles do you place?', a: 'Kitchen staff (sous chef, line cook, pastry), service staff (waiter, bartender, host), and management (restaurant manager, F&B director, head chef).' },
  { q: 'How does the trial shift process work?', a: 'Candidates complete a paid trial shift at your establishment. You assess their skills, attitude, and fit before making a hiring decision.' },
  { q: 'What is your replacement guarantee?', a: 'Kitchen and service placements include a 60-day replacement guarantee. Management placements include 90 days. We re-match at no additional fee.' },
  { q: 'Can you handle seasonal or high-season staffing?', a: 'Yes. We maintain a pool of pre-vetted seasonal staff. Volume clients receive priority access for peak periods and event coverage.' },
  { q: 'Do you place staff for new restaurant openings?', a: 'Yes. We provide full team build-outs for new openings, including recruitment timeline planning and batch hiring coordination.' },
  { q: 'What areas of Bali do you cover?', a: 'All major hospitality zones: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding areas.' },
  { q: 'How do you ensure candidate quality?', a: 'Every candidate passes skills assessment, reference checks, background verification, and a trial shift before placement at your establishment.' },
]

export default function StaffingHotelsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hotel-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.hotel-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Hotels & Restaurants Staffing Bali | myCHEF"
        description="Hospitality recruitment in Bali for boutique hotels, restaurants and resorts. Kitchen, service, management. Volume rates available."
        canonical={`${SITE}/staffing/for-hotels-restaurants`}
        ogImage={`${SITE}/generated/aura-corporate.webp`}
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Hotels & Restaurants Staffing Bali',
            'Hospitality recruitment for boutique hotels, restaurants and resorts in Bali. Kitchen staff, service staff, and management placements with volume rates.',
            `${SITE}/staffing/for-hotels-restaurants`,
            'IDR',
          ),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 168),
          breadcrumbSchema('Hotels & Restaurants Staffing', `${SITE}/staffing/for-hotels-restaurants`, 'Staffing', `${SITE}/staffing`),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-experience-bali-aura-corporate.webp" alt="Professional hospitality team at Bali hotel restaurant" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" />
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
            { label: 'Staffing', href: '/staffing' },
            { label: 'Hotels & Restaurants' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Hotels & Restaurants Staffing
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Hospitality recruitment in Bali for boutique hotels, restaurants and resorts. 
            Kitchen, service, management. Volume rates available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-hotels-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              <Calendar className="w-4 h-4" /> Request Volume Rates
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Placement Tiers" title="Hospitality Recruitment Options" subtitle="From kitchen staff to management — find the right talent for your establishment." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every placement includes industry-specific vetting and ongoing support." />
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
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From brief to placement — five careful steps for your team." />
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
          { name: 'Restaurant Owner', location: 'Seminyak', quote: 'myCHEF placed our entire opening team — 8 kitchen staff and 6 front-of-house. Every hire was solid. We opened on time with zero staffing issues.', rating: 5 },
          { name: 'Hotel GM', location: 'Ubud', quote: 'We needed a new F&B director urgently. myCHEF shortlisted three exceptional candidates within a week. The chosen director has transformed our food program.', rating: 5 },
          { name: 'Beach Club Operator', location: 'Canggu', quote: 'Volume rates and fast turnaround make myCHEF our go-to for seasonal hiring. We scale from 15 to 40 staff every high season without missing a beat.', rating: 5 },
        ]}
        title="What Hospitality Leaders Say"
        subtitle="Real reviews from hotels, restaurants, and resorts across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Hotel & Restaurant Staffing FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-kitchen.webp" alt="Professional kitchen team at Bali restaurant" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Staff Your Establishment</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us about your team needs and we will send matched candidates within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-hotels-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
