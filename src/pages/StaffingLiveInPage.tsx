import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, Phone, Calendar, Users, ShieldCheck, Award, ChefHat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import SeoHead, { howToSchema } from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { ArticleContentSection, Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a live-in chef in Bali', intent: 'availability and tailored quote' })

const BRIEF_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mychef.id/staffing/live-in-chef#service',
      name: 'Live-In Chef Bali',
      serviceType: 'Live-in private chef placement',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF',
        url: 'https://mychef.id',
        telephone: '+62 896-7407-2020',
      },
      areaServed: ['Bali'],
      description: 'Live-in chefs in Bali who manage all meals, groceries and kitchen logistics for families and guests. Tailored salaries based on experience, estate size and scope; trial dinners and a 30-day replacement guarantee included.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does live-in chef placement take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typically one to two weeks from brief to placement. Trial sessions are scheduled within three to five days of shortlist approval.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the live-in chef is not the right fit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle contracts and payroll for live-in chefs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A standard Indonesian employment contract is part of every live-in placement, and we guide you on payroll, BPJS and THR; households with more complex arrangements are referred to local payroll partners.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where does the chef live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On-site, in your property\'s staff accommodation, defined in the employment contract including working hours, days off and house rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the live-in chef cook for events as well?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Estate and family placements include event cooking. Additional event coverage can be arranged at separate rates.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
        { '@type': 'ListItem', position: 2, name: 'Staffing', item: 'https://mychef.id/staffing' },
        { '@type': 'ListItem', position: 3, name: 'Live-In Chef', item: 'https://mychef.id/staffing/live-in-chef' },
      ],
    },
  ],
}

const PRICING_TIERS = [
  {
    title: 'Live-In Chef',
    price: 'Tailored quote',
    unit: 'Based on experience & schedule',
    features: ['6 days per week', 'All meals', 'Grocery management', 'Menu planning', 'Kitchen organization', 'Monthly review'],
    bestFor: 'Villas, families, full-time residents',
  },
  {
    title: 'Estate Chef',
    price: 'Tailored quote',
    unit: 'Based on estate complexity',
    features: ['Full-time + events', 'Multi-course menus', 'Wine pairing', 'Staff management', 'Vendor relationships', 'Menu consultancy'],
    bestFor: 'Luxury estates, high-net-worth households, complex properties',
    highlight: true,
  },
  {
    title: 'Family Chef',
    price: 'Tailored quote',
    unit: 'Based on family needs',
    features: ['Family-focused meals', 'Child-friendly menus', 'Nutritional planning', 'School lunch prep', 'Allergen management', 'Family event cooking'],
    bestFor: 'Families with children, health-focused households',
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
  { q: 'How long does live-in chef placement take?', a: 'Typically one to two weeks from brief to placement. Trial sessions are scheduled within three to five days of shortlist approval.' },
  { q: 'What if the live-in chef is not the right fit?', a: 'We offer a 30-day replacement guarantee. If the match is not right, we restart the search at no additional cost.' },
  { q: 'Do you handle contracts and payroll for live-in chefs?', a: 'Yes. A standard Indonesian employment contract is part of every live-in placement, and we guide you on payroll, BPJS and THR; households with more complex arrangements are referred to local payroll partners.' },
  { q: 'Where does the chef live?', a: 'On-site, in your property\'s staff accommodation, which we help you define in the employment contract — including working hours, days off and house rules.' },
  { q: 'What cuisines can your live-in chefs cook?', a: 'Mediterranean, Italian, French, Asian fusion, Balinese, Japanese, plant-based, halal and kosher — we match cuisine to your preference.' },
  { q: 'Can the live-in chef cook for events as well?', a: 'Yes. Estate and family placements include event cooking. Additional event coverage can be arranged at separate rates.' },
  { q: 'What areas do you cover?', a: 'All Bali areas — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur and surrounding regions.' },
]

export default function StaffingLiveInPage() {
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
        title={getPageMeta('staffing-live-in-chef').title}
        description={getPageMeta('staffing-live-in-chef').description}
        canonical={getPageMeta('staffing-live-in-chef').canonical}
        ogImage={getPageMeta('staffing-live-in-chef').ogImage}
        jsonLd={[
          BRIEF_JSON_LD,
          howToSchema({
            name: 'How to Find a Live-In Chef in Bali',
            description: 'Find and place a full-time live-in chef for your Bali villa in 5 steps.',
            totalTime: 'P1W',
            steps: [
              { name: 'Brief', text: 'Share your cuisine preferences, household schedule, dietary needs, and accommodation details.' },
              { name: 'Shortlist', text: 'We send 3–5 vetted chef profiles matched to your villa and family requirements.' },
              { name: 'Trials', text: 'Cooking sessions with your top candidates to assess fit, skill, and compatibility.' },
              { name: 'Placement', text: 'Contract signed, onboarding handled, and live-in accommodation arranged.' },
              { name: 'Ongoing support', text: 'Monthly check-ins, feedback, and six months of ongoing guidance and support.' },
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-staffing-bali-staffing-kitchen.webp" alt="Live-in chef Bali preparing a meal at a private villa" className="w-full h-full object-cover" width={1920} height={1080} decoding="async" fetchPriority="high" loading="eager" />
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
            { label: 'Live-In Chef' },
          ]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">Staffing</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 max-w-[800px]">
            Live-In Chef in Bali
          </h1>
          <p className="text-white/[80%] text-lg md:text-xl max-w-[600px] mb-8">
            A live-in chef is the closest thing to a private restaurant in your villa. Breakfast appears as your family wakes, lunch and dinner are planned around your day, the fridge stays stocked and the kitchen runs itself. myCHEF places pre-vetted live-in chefs into Bali villas and residences — salaries and packages are tailored to experience, estate size and event coverage, with trial dinners, contracts and onboarding handled for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-live-in-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> Find a Live-In Chef
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
          <SectionHeader eyebrow="Placement Tiers" title="Live-In Chef Options" subtitle="Three tiers for villas, families and estates." />
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
          <SectionHeader eyebrow="Process" title="The Placement Process" subtitle="From brief to placement — five careful steps." />
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

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Compare" title="Live-In vs Other Chef Formats" />
          <ul className="mt-12 space-y-4 max-w-3xl mx-auto text-[#4A4745]">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
              <span><strong>Live-in chef (this page):</strong> chef lives on-site; all meals, groceries and kitchen logistics included. Best for full-time households.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
              <span><Link to="/staffing/private-chef-placement" className="text-[#C5A028] hover:underline">Permanent chef placement</Link>: a salaried chef who works set days but lives off-site. Part-time and full-time options available.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
              <span><Link to="/hire-private-chef-bali-monthly" className="text-[#C5A028] hover:underline">Monthly chef hire</Link>: recurring chef service without an employment contract — suits long-stay guests and seasonal residents.</span>
            </li>
          </ul>
          <p className="mt-8 text-center text-[#4A4745] max-w-2xl mx-auto">
            Not sure which fits? Our <Link to="/journal/live-in-chef-vs-daily-service" className="text-[#C5A028] hover:underline">live-in vs daily chef comparison</Link> walks through the maths, or message us and we will recommend the right structure for your household.
          </p>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'The Williams Family', location: 'London', quote: 'We found our live-in chef through myCHEF two years ago. He has become part of the family. The placement process was thorough and professional.', rating: 5 },
          { name: 'Villa Owner', location: 'Canggu', quote: 'The trial sessions were invaluable. We cooked with two candidates and knew immediately who was right. Six months later, zero regrets.', rating: 5 },
          { name: 'Estate Manager', location: 'Uluwatu', quote: 'We needed an estate chef for a complex household. myCHEF delivered three exceptional candidates. The chosen chef has transformed our dining.', rating: 5 },
        ]}
        title="What Clients Say"
        subtitle="Real reviews from live-in chef placements across Bali."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Live-In Chef FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      <section id="book" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-staffing-bali-staffing-kitchen.webp" alt="Live-in chef Bali working in a private villa kitchen" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">Find Your Live-In Chef</h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your household's requirements and we will send matched live-in chef profiles within 48 hours. Trial dinner before you decide; 30-day replacement guarantee after you do.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="staffing-live-in-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
              <Phone className="w-4 h-4" /> Call Sofia
            </a>
          </div>
          <p className="mt-8 text-white/[70%] text-sm italic">
            Part of myCHEF <Link to="/staffing" className="text-[#C5A028] hover:underline">staffing & placement</Link>. Need more than a chef? We also place <Link to="/staffing/villa-staff" className="text-[#C5A028] hover:underline">complete villa teams</Link> — housekeepers, villa managers, gardeners and security.
          </p>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection />

      <StickyMobileCTA
        pageSource="staffing-live-in"
        serviceName="live-in chef in Bali"
        intent="live-in chef placement and pricing"
      />
    </div>
  )
}
