import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, Briefcase, ClipboardList } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
const WA_LINK = buildWhatsAppUrl({ serviceName: 'a villa-staffing partnership in Bali', intent: 'availability and pricing' })

const PRICING_TIERS = [
  {
    title: 'Chef Placement',
    price: 'IDR 4,000,000',
    unit: 'one-time',
    features: ['Pre-vetted chef profiles', 'Cooking trial session', 'Background verification', 'Contract preparation', 'Payroll guidance', '30-day replacement guarantee'],
    bestFor: 'Single villa or small property portfolio',
  },
  {
    title: 'Service Staff Pool',
    price: 'IDR 2,000,000',
    unit: '/month retainer',
    features: ['Access to vetted service staff', 'Front-of-house coverage', 'Housekeeping support', 'On-call replacements', 'Monthly performance reviews', 'Dedicated account manager'],
    bestFor: 'Villa managers with rotating guest schedules',
    highlight: true,
  },
  {
    title: 'Full Hospitality Package',
    price: 'IDR 8,000,000',
    unit: '/month',
    features: ['Chef + service staff bundle', 'Full kitchen & front-of-house', 'Event staffing included', 'Vendor relationship management', 'Weekly reporting', 'Priority placement'],
    bestFor: 'Multi-villa portfolios and private estates',
  },
]

const WHAT_INCLUDED = [
  'Pre-vetted candidate pool',
  'Cooking & service trials',
  'Background & reference checks',
  'Contract & payroll setup',
  'Replacement guarantee',
  'Dedicated account manager',
  'Performance tracking',
  'Partnership rate access',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Brief', desc: 'Share your properties, guest profiles, and staffing needs.', icon: ClipboardList },
  { step: '02', title: 'Shortlist', desc: 'Receive matched candidates for your properties.', icon: Users },
  { step: '03', title: 'Trials', desc: 'Trial sessions at your villa with top candidates.', icon: Briefcase },
  { step: '04', title: 'Placement', desc: 'Contracts, onboarding, and first-week support.', icon: ShieldCheck },
  { step: '05', title: 'Ongoing', desc: 'Monthly reviews, replacements, and account management.', icon: Award },
]

const FAQS = [
  { q: 'Do you offer partnership rates for multiple properties?', a: 'Yes. Villa managers with 3+ properties receive tiered partnership discounts. Contact us for a custom rate sheet based on your portfolio size.' },
  { q: 'How quickly can you fill a last-minute staffing gap?', a: 'Our pool of pre-vetted candidates allows us to fill most roles within 48–72 hours. Emergency placements are available for retainer clients.' },
  { q: 'What happens if a placed staff member leaves?', a: 'All placements include a replacement guarantee. Retainer clients receive priority re-matching at no additional placement fee.' },
  { q: 'Do you handle payroll and contracts for our team?', a: 'We prepare standard employment contracts and provide payroll guidance. For larger portfolios, we can recommend integrated payroll partners.' },
  { q: 'Can you staff for events and high-season surges?', a: 'Yes. Our Full Hospitality Package includes event staffing. Retainer clients can request additional staff for peak periods.' },
  { q: 'What areas of Bali do you cover?', a: 'All major areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding regions.' },
  { q: 'Do you place staff for short-term rentals?', a: 'Yes. We work with villa management companies handling short-term rentals, providing flexible staffing that scales with occupancy.' },
  { q: 'What is your vetting process?', a: 'Every candidate passes identity verification, reference checks, skills assessment, and a trial session before joining our pool.' },
]

export default function StaffingVillaManagersPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-reveal', start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Villa Manager Staffing Bali | Chef & Service Hires — myCHEF"
        description="Outsource hospitality hiring to myCHEF for your Bali villa properties. Pre-vetted chefs & service staff, partnership rates, 48-hour placement. WhatsApp us."
        canonical={`${SITE}/staffing/for-villa-managers`}
        ogImage={`${SITE}/generated/corp-villa.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Staffing for Villa Managers Bali',
            description: 'Hospitality staffing partnerships for villa managers in Bali. Pre-vetted chefs and front-of-house staff with partnership rates.',
            url: `${SITE}/staffing/for-villa-managers`,
            lowPrice: '8000000',
            highPrice: '15000000',
            unitText: 'per month',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Staff Your Villa in Bali',
            description: 'Get professional staffing support for your Bali villa management in 4 easy steps.',
            totalTime: 'PT20M',
            steps: [
              { name: 'Share your villa profile', text: 'Send your villa size, location, guest capacity, and current staffing gaps via WhatsApp.' },
              { name: 'Define roles needed', text: 'Specify: villa manager, chef, housekeepers, maintenance, or guest services staff.' },
              { name: 'Review vetted candidates', text: 'We present experienced hospitality professionals with villa references within 48 hours.' },
              { name: 'Scale with confidence', text: 'Hire full-time or seasonal staff. We handle contracts, training, and ongoing support.' },
            ],
          }),
          breadcrumbSchema('Staffing for Villa Managers', `${SITE}/staffing/for-villa-managers`, 'Staffing', `${SITE}/staffing`),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-events-bali-corp-villa.webp" alt="Villa manager staffing Bali hospitality team at a luxury villa" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
            { label: 'For Villa Managers' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Staffing for Villa Managers
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            Outsource your hospitality hiring to myCHEF. Pre-vetted chefs and front-of-house staff 
            for your properties. Partnership rates available for portfolio managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-managers-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
              <Calendar className="w-4 h-4" /> Request Partnership Info
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Partnership Tiers" title="Staffing Options for Your Portfolio" subtitle="From single placements to full hospitality coverage for your properties." />
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
          <SectionHeader eyebrow="Inclusions" title="What's Included" subtitle="Every partnership includes full vetting and dedicated account support." />
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
          { name: 'Villa Management Co.', location: 'Seminyak', quote: 'myCHEF has become our exclusive staffing partner across 12 villas. The quality of candidates and speed of placement is unmatched in Bali.', rating: 5 },
          { name: 'Portfolio Manager', location: 'Canggu', quote: 'We used to spend weeks recruiting for each property. With myCHEF, we get matched candidates within days. It has transformed how we operate.', rating: 5 },
          { name: 'Estate Director', location: 'Uluwatu', quote: 'The Full Hospitality Package covers everything — chefs, service staff, even event coverage. One partner, one invoice, zero headaches.', rating: 5 },
        ]}
        title="What Villa Managers Say"
        subtitle="Real reviews from hospitality partners across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Villa Manager FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-y border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-sm text-[#4A4745]">
            Need bar staff, menu development or bar management for your properties?{' '}
            <Link to="/bar-services/" className="font-medium text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore MyChef Bar Services
            </Link>.
          </p>
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-kitchen.webp" alt="Villa manager staffing Bali professional hospitality team in a villa kitchen" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Partner With Us</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us about your properties and we will build a custom staffing plan for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-villa-managers-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
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
        pageSource="staffing-villa-managers"
        serviceName="villa manager staffing in Bali"
        intent="villa manager staffing and pricing"
      />
    </div>
  )
}