import { useEffect, useRef, useState } from 'react'
import { appendLeadRef } from '@/lib/whatsapp'
import { Link } from 'react-router-dom'
import { trackWhatsAppClick } from '@/lib/analytics'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Award, Building2, Camera, FileText, Mail, MessageCircle, Send, ShieldCheck, Star } from 'lucide-react'
import BestPartnerBadge from '@/components/BestPartnerBadge'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'

import OptimizedImage from '@/components/OptimizedImage'
gsap.registerPlugin(ScrollTrigger)

const WA = 6289674072020
const PRESS_EMAIL = 'bali@mychef.id'

const heroStats = ['50+ staff', '560+ events', '12,000+ guests']

const pressStats = [
  'Served 12,000+ guests',
  'Built for Bali villa and lifestyle media',
  'Serving Bali since 2019',
]

const pressResources = [
  {
    icon: FileText,
    title: 'Media kit available',
    desc: 'Brand story, service overview, founder background, and approved boilerplate for quick editorial use.',
  },
  {
    icon: Camera,
    title: 'Photo + b-roll library',
    desc: 'Request approved service, team, and behind-the-scenes visuals for editorial use while the final press library is prepared.',
  },
  {
    icon: Mail,
    title: 'Fast press contact',
    desc: 'Email bali@mychef.id for interview requests, quote approvals, and publication timelines.',
  },
]

const partnerBenefits = [
  {
    icon: Star,
    title: 'Priority booking windows',
    desc: 'Certified partners get first access to peak-date chef availability for villas, retreats, and event stays.',
  },
  {
    icon: Award,
    title: '12% co-branded / 7% white-label',
    desc: 'Co-branded partners earn 12% on every referred booking. White-label partners earn 7%. Tracked per booking, paid monthly.',
  },
  {
    icon: FileText,
    title: 'Branded guest menus',
    desc: 'Co-branded menus and service collateral that help your villa present dining as part of the stay experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified execution',
    desc: 'Milan-trained leadership, vetted teams, and SOP-led service designed for high-end villa operations.',
  },
]

const partnerSupport = [
  'Dedicated account support for villa managers',
  'Preferred coordination for arrivals, celebrations, and retreat stays',
  'Guest-ready menu recommendations tailored to your property profile',
  'Certification story and badge assets for your marketing touchpoints',
]

const logoGroups = [
  {
    title: 'Active partner segments',
    items: ['Seminyak villa portfolios', 'Uluwatu retreat operators', 'Canggu boutique stays'],
  },
]

const testimonials = [
  {
    quote:
      'We have partnered with myCHEF for 3 years across our 12-villa portfolio. The consistency, professionalism, and guest satisfaction scores speak for themselves.',
    name: 'James Richardson',
    detail: 'GM, Luxury Villa Collection, Canggu',
  },
  {
    quote:
      'Finding reliable culinary talent in Bali was our biggest challenge. myCHEF solved it completely with fast communication and a level of polish guests remember.',
    name: 'Sarah Chen',
    detail: 'Operations Director, Boutique Hotel Group, Seminyak',
  },
  {
    quote:
      'Their chefs understood our wellness philosophy immediately. Reviews for food quality improved within the first month and have stayed there.',
    name: 'Michael Torres',
    detail: 'Founder, Ubud Wellness Retreat',
  },
]

const faqs = [
  { q: 'How fast do you reply?', a: 'Usually within 2 hours on WhatsApp during operating hours.' },
  { q: 'Best way to book?', a: 'WhatsApp with date, guests, area and service — or <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Phone number?', a: 'Published sitewide — WhatsApp +62 896-7407-2020.' },
  { q: 'Email?', a: 'bali@mychef.id for written requests and invoices.' },
  { q: 'Office location?', a: 'Denpasar, Bali — full address on the site footer and contact pages.' },
  { q: 'Languages?', a: 'English and Indonesian service.' },
  { q: 'Corporate enquiries?', a: 'Yes — mention NPWP needs and multi-day schedule.' },
  { q: 'Partner / villa manager enquiries?', a: 'Yes — <a href="/partner">partner</a> pathways.' },
  { q: 'Urgent same-day requests?', a: 'Often possible — message ASAP with location.' },
  { q: 'What to include in first message?', a: 'Date, villa area, guest count, service type, diets.' },
  { q: 'Can you call me?', a: 'WhatsApp first is fastest; calls arranged when needed.' },
  { q: 'FAQ hub?', a: 'Yes — <a href="/faq">FAQ</a>.' },
  { q: 'How do I book this with myCHEF in Bali?', a: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { q: 'Where can I see prices?', a: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { q: 'Is service available island-wide?', a: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { q: 'Can you handle dietary requirements?', a: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { q: 'What is included vs extra?', a: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { q: 'Deposit and cancellation?', a: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { q: 'How fast is a proposal?', a: 'Often within 2–24 hours of a complete brief.' },
  { q: 'Can this combine with other services?', a: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

export default function PartnersPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', property: '', type: '', size: '', notes: '' })
  const pressMailto = `mailto:${PRESS_EMAIL}?subject=${encodeURIComponent('myCHEF press inquiry')}`
  const partnerWhatsapp = `https://wa.me/${WA}?text=${encodeURIComponent("Hi myCHEF, I'd like to discuss the Certified Partner programme.")}`

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!partnerForm.name || !partnerForm.email) return

    const text = encodeURIComponent(
      `Hi myCHEF, I would like to discuss the Certified Partner programme.\n\nName: ${partnerForm.name}\nEmail: ${partnerForm.email}\nProperty: ${partnerForm.property || '—'}\nProperty Type: ${partnerForm.type || '—'}\nRooms / Villas: ${partnerForm.size || '—'}\n\n${partnerForm.notes || ''}`.trim(),
    )

    trackWhatsAppClick('partners-form')
    window.open(appendLeadRef(`https://wa.me/${WA}?text=${text}`), '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.part-hero-label', { y: 20 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    tl.fromTo('.part-hero-title', { y: 30 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.part-hero-sub', { y: 20 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  }, [])

  useGSAP(() => {
    document.querySelectorAll('.part-reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        },
      )
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef} className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Villa Partner Program Bali | Press & Partners — myCHEF"
        description="myCHEF villa partner program: co-branded chef service, certified partner benefits & press kit details for villa managers in Bali. WhatsApp us to join."
        canonical="https://mychef.id/partners"
        ogImage="https://mychef.id/generated/mychef-misc-bali-partner-platform-hero.webp"
        jsonLd={[breadcrumbSchema('Press & Partners', 'https://mychef.id/partners'), faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a })))]}
      />

      <section className="relative overflow-hidden border-b border-[#E8E3D8]">
        <div className="absolute inset-0">
          <OptimizedImage src="/generated/mychef-misc-bali-partner-platform-hero.webp" alt="myCHEF Bali villa partner programme — luxury properties with private chef service" className="w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,248,0.86),rgba(250,250,248,0.98))]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <p className="part-hero-label text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-5">Press & Partners</p>
          <h1 className="part-hero-title font-playfair text-4xl md:text-6xl leading-[1.05] max-w-[900px] mb-6">
            Partner With Bali&apos;s Premier Private Chef Service
          </h1>
          <p className="part-hero-sub text-[#4A4745] text-base md:text-lg max-w-[760px] mb-8 leading-relaxed">
            myCHEF.id helps journalists cover the Bali private dining story and helps villa managers unlock a stronger guest experience through the Certified Partner programme. Founded by Adriano, fine-dining trained in Milan, and trusted across Bali for private chef, catering, events, and staffing.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {heroStats.map((stat) => (
              <span key={stat} className="inline-flex items-center rounded-full border border-[#C5A028]/30 bg-white/90 px-4 py-2 text-sm text-[#1A1A1A]">
                {stat}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-white/92 border border-[#E8E3D8] rounded-[28px] p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <div className="inline-flex items-center gap-2 text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                <FileText className="w-4 h-4" /> Press & Media
              </div>
              <h2 className="font-playfair text-3xl mb-3">Need the myCHEF story fast?</h2>
              <p className="text-[#4A4745] text-sm leading-relaxed mb-6">
                Request our media kit, founder background, approved brand details, and interview availability for Bali hospitality, villa dining, and high-end travel coverage.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#press-media" className="inline-flex items-center justify-center rounded-full bg-[#C5A028] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Explore Press Info
                </a>
                <a href={pressMailto} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:border-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  <Mail className="w-4 h-4" /> Email Press Desk
                </a>
              </div>
            </div>

            <div className="bg-[#111111] text-white rounded-[28px] p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="inline-flex items-center gap-2 text-[#C5A028] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                <Building2 className="w-4 h-4" /> Villa Partners
              </div>
              <h2 className="font-playfair text-3xl mb-3">Want to become a Certified Partner?</h2>
              <p className="text-white/[72%] text-sm leading-relaxed mb-6">
                Designed for villa managers who want reliable chef availability, partner rewards, and dining assets that feel premium from enquiry to guest table.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/certified-partner" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#F1ECE0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  View Partner Programme
                </Link>
                <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" data-source="partners-cta" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="press-media" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Press & Media</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-[1.08] mb-5">A quick media brief for journalists, editors, and Bali storytellers.</h2>
            <p className="text-[#4A4745] text-base leading-relaxed mb-6 max-w-[720px]">
              myCHEF has served 12,000+ guests across Bali villas, events, and private dining experiences. Our press kit covers the brand story, Adriano&apos;s Milan fine-dining background, company milestones, and approved visual assets for editorial requests.
            </p>
            <p className="text-[#1A1A1A] text-sm md:text-base font-medium mb-8">
              {pressStats.join(' · ')}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={pressMailto} className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-[#2A2A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <Mail className="w-4 h-4" /> Contact {PRESS_EMAIL}
              </a>
              <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" data-source="partners-cta" className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:border-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                <MessageCircle className="w-4 h-4" /> Request a Quick Quote
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {pressResources.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#E8E3D8] bg-white p-6">
                <item.icon className="w-5 h-5 text-[#C5A028] mb-4" />
                <h3 className="font-playfair text-2xl mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="part-reveal py-16 px-6 md:px-10 lg:px-16 border-y border-[#E8E3D8] bg-white/60">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
          {logoGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[#8A8785] text-xs uppercase tracking-[0.3em] font-semibold mb-4">{group.title}</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-dashed border-[#C5A028]/40 bg-[#FAFAF8] px-4 py-8 text-center text-xs uppercase tracking-[0.22em] text-[#6B6560]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="villa-partners" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="bg-[#111111] text-white rounded-[28px] p-8 md:p-10">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Certified Partner Programme</p>
            <h2 className="font-playfair text-3xl md:text-5xl leading-[1.08] mb-5">Built for villa managers who want the dining side handled properly.</h2>
            <p className="text-white/[72%] text-sm md:text-base leading-relaxed mb-8">
              The programme gives your property a cleaner operational handoff, stronger guest-facing presentation, and direct access to the myCHEF team for booking, menus, and event support.
            </p>
            <div className="mb-8">
              <BestPartnerBadge variant="dark" width={260} />
            </div>
            <ul className="space-y-3 mb-8">
              {partnerSupport.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/[78%]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A028] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/certified-partner" className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                Certified Partner Details <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" data-source="partners-cta" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <MessageCircle className="w-4 h-4" /> Partnership WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partner Benefits</p>
            <h3 className="font-playfair text-3xl md:text-4xl mb-6">Why properties join the network</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[24px] border border-[#E8E3D8] bg-white p-6">
                  <benefit.icon className="w-5 h-5 text-[#C5A028] mb-4" />
                  <h4 className="font-playfair text-2xl mb-2">{benefit.title}</h4>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Commission tier comparison */}
            <div className="rounded-[24px] border border-[#E8E3D8] bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-[#E8E3D8]">
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A028]">Commission Structure</p>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E3D8]">
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-playfair text-4xl text-[#1A1A1A]">12%</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#4A4745]">Co-Branded</span>
                  </div>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-4">Your villa's name and ours appear together on menus, collateral, and guest communications. Full credit for every referral.</p>
                  <ul className="space-y-1.5">
                    {['Priority chef availability','Co-branded menus + collateral','Monthly commission payout','Named certification badge'].map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#4A4745]">
                        <span className="text-[#C5A028] mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-playfair text-4xl text-[#1A1A1A]">7%</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#4A4745]">White-Label</span>
                  </div>
                  <p className="text-sm text-[#4A4745] leading-relaxed mb-4">myCHEF operates invisibly under your brand. Guests see only your villa's dining experience. Commission on every booking.</p>
                  <ul className="space-y-1.5">
                    {['Chef availability on request','Unbranded service delivery','Monthly commission payout','Operational SOP support'].map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#4A4745]">
                        <span className="text-[#C5A028] mt-0.5">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#E8E3D8] text-xs text-[#6B6560]">
                Commissions tracked per booking and paid monthly. WhatsApp <a href={partnerWhatsapp} className="text-[#C5A028] underline underline-offset-2">+62 896-7407-2020</a> to discuss which tier fits your property.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partner Stories</p>
            <h2 className="font-playfair text-3xl md:text-5xl mb-4">What hospitality partners say</h2>
            <p className="text-sm md:text-base text-[#4A4745] max-w-[720px] mx-auto">
              Social proof for villa managers still matters here, so we kept the strongest reassurance content from the original page and reframed it around partnership outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[24px] border border-[#E8E3D8] bg-[#FAFAF8] p-6 md:p-8">
                <p className="font-playfair italic text-lg leading-relaxed mb-5">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="w-10 h-px bg-[#C5A028] mb-4" />
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-[#8A8785]">{testimonial.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Questions</p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Common press and partner questions</h2>
        </div>
        <div className="max-w-[800px] mx-auto">
          <FAQAccordion items={faqs} defaultOpenCount={4} showToc ctaEvery={5} />
        </div>
      </section>

      <section id="partner-form" className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-white border-y border-[#E8E3D8]">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Partnership Inquiry</p>
            <h2 className="font-playfair text-3xl md:text-5xl mb-4">Tell us about your property</h2>
            <p className="text-sm md:text-base text-[#4A4745]">
              Share the basics and we&apos;ll continue the conversation on WhatsApp with your details pre-filled.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handlePartnerSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="partner-name" className="block text-xs font-medium mb-2 text-[#1A1A1A]">Your Name *</label>
                <input id="partner-name" required value={partnerForm.name} onChange={(e) => setPartnerForm((current) => ({ ...current, name: e.target.value }))} type="text" placeholder="John Smith" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:outline-none focus:ring-2 focus:ring-[#C5A028] transition-all" />
              </div>
              <div>
                <label htmlFor="partner-email" className="block text-xs font-medium mb-2 text-[#1A1A1A]">Email *</label>
                <input id="partner-email" required value={partnerForm.email} onChange={(e) => setPartnerForm((current) => ({ ...current, email: e.target.value }))} type="email" placeholder="john@villa.com" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:outline-none focus:ring-2 focus:ring-[#C5A028] transition-all" />
              </div>
            </div>
            <div>
              <label htmlFor="partner-property" className="block text-xs font-medium mb-2 text-[#1A1A1A]">Property / Villa Name</label>
              <input id="partner-property" value={partnerForm.property} onChange={(e) => setPartnerForm((current) => ({ ...current, property: e.target.value }))} type="text" placeholder="Villa Serenity" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] focus:outline-none focus:ring-2 focus:ring-[#C5A028] transition-all" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="partner-type" className="block text-xs font-medium mb-2 text-[#1A1A1A]">Property Type</label>
                <select id="partner-type" value={partnerForm.type} onChange={(e) => setPartnerForm((current) => ({ ...current, type: e.target.value }))} className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] transition-all appearance-none">
                  <option value="">Property Type</option>
                  <option>Luxury Villa</option>
                  <option>Boutique Hotel</option>
                  <option>Wellness Retreat</option>
                  <option>Private Estate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="partner-size" className="sr-only">Number of rooms or villas</label>
                <input id="partner-size" value={partnerForm.size} onChange={(e) => setPartnerForm((current) => ({ ...current, size: e.target.value }))} type="text" placeholder="Number of Rooms / Villas" className="w-full rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
              </div>
            </div>
            <div>
              <label htmlFor="partner-notes" className="sr-only">Partnership details</label>
              <textarea id="partner-notes" value={partnerForm.notes} onChange={(e) => setPartnerForm((current) => ({ ...current, notes: e.target.value }))} placeholder="Tell us what type of guests you host, what support you want, and any timing constraints..." rows={5} className="w-full resize-none rounded-2xl border border-[#1A1A1A]/15 bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#6B6560] outline-none focus:border-[#C5A028]" />
            </div>
            <button type="submit" className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] transition-colors hover:bg-[#D5AF35] focus:outline-none focus:ring-2 focus:ring-white">
              <Send className="w-4 h-4" /> Send Partnership Request
            </button>
            <p className="text-center text-xs text-[#8A8785]">This opens WhatsApp with your details pre-filled for the myCHEF team.</p>
          </form>
        </div>
      </section>

      <section className="part-reveal py-20 md:py-24 px-6 md:px-10 lg:px-16 bg-[#111111] text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#C5A028] text-xs uppercase tracking-[0.35em] font-semibold mb-4">Let&apos;s Talk</p>
          <h2 className="font-playfair text-3xl md:text-5xl mb-5">WhatsApp is the fastest way to start a partnership conversation.</h2>
          <p className="text-white/[72%] text-base leading-relaxed mb-8 max-w-[680px] mx-auto">
            Whether you&apos;re writing a feature, managing a villa portfolio, or building a new hospitality partnership, message the team and we&apos;ll route you fast.
          </p>
          <a href={partnerWhatsapp} target="_blank" rel="noopener noreferrer" data-source="partners-cta" className="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#050505] hover:bg-[#D5AF35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
            <MessageCircle className="w-4 h-4" /> WhatsApp Partnership Inquiries
          </a>
        </div>
      </section>
    </div>
  )
}
