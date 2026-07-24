import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, ChefHat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, {
  breadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
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
const WA_LINK = buildWhatsAppUrl({ serviceName: 'private chef placement in Bali', intent: 'availability and pricing' })

const PRICING_TIERS = [
  {
    title: 'Part-Time Chef',
    price: 'IDR 5,500,000',
    unit: '/month',
    features: ['3 days per week', 'Lunch & dinner', 'Grocery shopping', 'Menu planning', 'Kitchen management', 'Monthly review'],
    bestFor: 'Small villas, couples, part-time residents',
  },
  {
    title: 'Full-Time Chef',
    price: 'IDR 9,500,000',
    unit: '/month',
    features: ['6 days per week', 'All meals', 'Grocery management', 'Guest catering', 'Dietary specialization', 'Recipe development'],
    bestFor: 'Family villas, regular entertaining, food-focused households',
    highlight: true,
  },
  {
    title: 'Executive Chef',
    price: 'IDR 15,000,000',
    unit: '/month',
    features: ['Full-time + events', 'Multi-course menus', 'Wine pairing', 'Staff training', 'Vendor relationships', 'Menu consultancy'],
    bestFor: 'Luxury villas, high-net-worth households, estate management',
  },
]

const WHAT_INCLUDED = [
  'Vetted chef profiles',
  'Cooking trial session',
  'Background verification',
  'Contract preparation',
  'Payroll guidance',
  'Replacement guarantee',
  'Ongoing support',
  'Performance reviews',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Brief', desc: 'Cuisine, schedule, household size, dietary needs.', icon: Calendar },
  { step: '02', title: 'Shortlist', desc: '3–5 chef profiles matched to your requirements.', icon: Users },
  { step: '03', title: 'Trials', desc: 'Cooking sessions with your top 2 candidates.', icon: ChefHat },
  { step: '04', title: 'Placement', desc: 'Contract, onboarding, first week support.', icon: ShieldCheck },
  { step: '05', title: 'Support', desc: 'Monthly check-ins, feedback, ongoing guidance.', icon: Award },
]

const FAQS = [
  { q: 'How long does chef placement take?', a: 'Typically 1–2 weeks from brief to placement. Trial sessions are scheduled within 3–5 days of shortlist approval.' },
  { q: 'What if the chef is not the right fit?', a: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.' },
  { q: 'Do you handle contracts and payroll?', a: 'We prepare standard employment contracts and provide payroll guidance. For complex arrangements, we can recommend local payroll partners.' },
  { q: 'What cuisines can your chefs cook?', a: 'Mediterranean, Italian, French, Asian fusion, Balinese, Japanese, plant-based, halal, kosher — we match cuisine to your preference.' },
  { q: 'Can the chef cook for events as well?', a: 'Yes. Full-time and executive placements include event cooking. Part-time chefs can be booked for events at additional rates.' },
  { q: 'What areas do you cover?', a: 'All Bali areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'Do you place chefs outside Bali?', a: 'Yes. We have placed chefs in Lombok and on private yachts. International placements available on request.' },
  { q: 'What is your placement fee?', a: 'One month of the chef salary as a placement fee. This covers sourcing, trials, contract, and 6 months of ongoing support.' },
]

export default function StaffingPlacementPage() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.querySelectorAll('.placement-reveal').forEach(el => {
        (el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.placement-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.placement-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Placement Bali | Villa Recruitment — myCHEF"
        description="Fill long-term kitchen roles in Bali fast. Vetted private chef candidates, cooking trials, contracts & onboarding support. WhatsApp to start the search."
        canonical={`${SITE}/staffing/private-chef-placement`}
        ogImage={`${SITE}/generated/mychef-staffing-bali-staffing-hero.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Private Chef Placement Bali',
            description: 'Long-term private chef placement for villas in Bali. Vetted candidates, cooking trials, contracts, and ongoing support.',
            url: `${SITE}/staffing/private-chef-placement`,
            lowPrice: '5500000',
            highPrice: '15000000',
            unitText: 'per placement',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema('Private Chef Placement', `${SITE}/staffing/private-chef-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchema({
            name: 'How to Place a Private Chef in Bali',
            description: 'Find and place a long-term private chef for your Bali villa in 5 steps.',
            totalTime: 'P1W',
            steps: [
              { name: 'Brief', text: 'Share your cuisine preferences, schedule, household size, and dietary needs.' },
              { name: 'Shortlist', text: 'We send 3–5 chef profiles matched to your requirements within 24 hours.' },
              { name: 'Trials', text: 'Cooking sessions with your top 2 candidates to assess fit and skill.' },
              { name: 'Placement', text: 'Contract signed, onboarding handled, and first-week support included.' },
              { name: 'Ongoing support', text: 'Monthly check-ins, feedback, and performance reviews for six months.' },
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-staffing-bali-staffing-hero.webp" alt="Private chef placement Bali preparing a meal at a luxury villa" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
            { label: 'Staffing', href: '/staffing' },
            { label: 'Private Chef Placement' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Private Chef Placement in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Long-term private chef placement for your villa. Vetted candidates, cooking trials, 
            contracts, and ongoing support. From IDR 5,500,000 per month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-placement-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Place a Private Chef
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              <Calendar className="w-4 h-4" /> Request Profiles
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Placement Tiers" title="Chef Placement Options" subtitle="From part-time to executive — find the right chef for your villa." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every placement includes full vetting and ongoing support." />
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
          <SectionHeader eyebrow="Process" title="How It Works" subtitle="From brief to placement — five careful steps." />
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
          { name: 'The Williams Family', location: 'London', quote: 'We found our chef through myCHEF two years ago. He has become part of the family. The placement process was thorough and professional.', rating: 5 },
          { name: 'Villa Owner', location: 'Canggu', quote: 'The trial sessions were invaluable. We cooked with two candidates and knew immediately who was right. Six months later, zero regrets.', rating: 5 },
          { name: 'Estate Manager', location: 'Uluwatu', quote: 'We needed an executive chef for a complex household. myCHEF delivered three exceptional candidates. The chosen chef has transformed our dining.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from chef placements across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Chef Placement FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-kitchen.webp" alt="Private chef placement Bali working in a luxury villa kitchen" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Find Your Chef</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your requirements and we will send matched chef profiles within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-placement-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="staffing-placement"
        serviceName="private chef placement in Bali"
        intent="placement service and pricing"
      />
    </div>
  )
}