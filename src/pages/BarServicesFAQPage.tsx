import { MessageCircle, ShieldCheck, Clock, MapPin, Award, Users, ArrowRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_SERVICES } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'

const GENERAL_FAQS = [
  {
    question: 'What areas in Bali do you cover?',
    answer:
      'We cover all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Kuta, Legian, Pererenan and Denpasar. Travel fees may apply for remote locations.',
  },
  {
    question: 'Do you work with hotels and villas?',
    answer:
      'Yes. We work with boutique hotels, luxury villas, beach clubs, restaurants, cafés and event companies across Bali. Our services are built for both recurring venue support and one-off events.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Message us on WhatsApp with your venue type, location, service needed and preferred dates. We usually reply within one business day with a tailored proposal.',
  },
  {
    question: 'Do you provide staff for events and weddings?',
    answer:
      'Yes. Our temporary bartender staffing service supplies vetted bartenders and barbacks for events, weddings and venue cover. Staff are employed by us, so you carry no employment-law risk.',
  },
  {
    question: 'Can you help open a new bar from scratch?',
    answer:
      'Yes. Our New Bar Setup service covers concept, layout, equipment procurement, supplier onboarding, SOP library and opening-week support.',
  },
]

const TRUST_SIGNALS = [
  {
    icon: ShieldCheck,
    title: 'Vetted & insured staff',
    description: 'Every bartender passes a practical trade test, reference checks and ongoing skills reviews.',
  },
  {
    icon: Clock,
    title: 'Four-hour response',
    description: 'We reply to B2B enquiries within four business hours, Monday to Saturday.',
  },
  {
    icon: Award,
    title: '90-day guarantee',
    description: 'Permanent placements include a 90-day replacement guarantee at no extra fee.',
  },
  {
    icon: Users,
    title: 'Employer risk on us',
    description: 'Temporary staff are MyChef employees: payroll, BPJS and compliance are our responsibility.',
  },
]

const FAQ_GALLERY = [
  { src: '/generated/mychef-bar-services-bali-consultant.webp', alt: 'myCHEF bar consultant advising a Bali venue owner' },
  { src: '/generated/mychef-bar-services-bali-hero-hub.webp', alt: 'Bali bar setup with professional bartender and equipment' },
  { src: '/generated/aura-bartender.webp', alt: 'Indonesian bartender preparing drinks at a Bali bar' },
]

function uniqueFaqs(faqs: { question: string; answer: string }[]) {
  const seen = new Set<string>()
  return faqs.filter((faq) => {
    const key = `${faq.question}|${faq.answer}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export default function BarServicesFAQPage() {
  const meta = getPageMeta('bar-services-faq')
  const canonical = meta.canonical ?? `${SITE}/bar-services/faq/`

  const serviceFaqs = BAR_SERVICES.flatMap((service) => service.faqs)
  const allFaqs = uniqueFaqs([...serviceFaqs, ...GENERAL_FAQS])

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          breadcrumbSchema('FAQ', canonical, 'Bar Services', `${SITE}/bar-services/`),
          faqPageSchema(allFaqs),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'FAQ', href: '/bar-services/faq/' },
        ]}
      />

      <section className="relative py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#0F0E0C]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,40,0.08),transparent_40%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 text-[#F5F2EB]">
            Bar Services FAQ
          </h1>
          <p className="text-lg text-[#F5F2EB]/70 leading-relaxed">
            Straight answers about our bar consulting, staffing, training and management services in Bali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-[#F5F2EB]/70 leading-relaxed">
                Running a bar in Bali means juggling staffing, licensing, costing, menu design and guest experience all at once. Whether you are opening a new venue, planning a villa wedding, or trying to bring a drifting pour cost back under control, the same questions tend to come up. We have collected the answers here so you can plan with confidence.
              </p>
              <p className="text-[#F5F2EB]/70 leading-relaxed">
                The questions below cover pricing, staffing, consulting, legal and logistics. Each answer is written to be self-contained, so you can scan for what matters to you. If your question is not here, WhatsApp us and we will reply within four business hours.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
              <OptimizedImage
                src={FAQ_GALLERY[0].src}
                alt={FAQ_GALLERY[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <FAQAccordion items={allFaqs.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} dark />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              Why venues choose us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Trust signals that matter
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {TRUST_SIGNALS.map((signal) => (
                <div
                  key={signal.title}
                  className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center mb-4">
                    <signal.icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <h3 className="font-semibold text-[#F5F2EB] mb-2">{signal.title}</h3>
                  <p className="text-sm text-[#F5F2EB]/60 leading-relaxed">{signal.description}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
              <OptimizedImage
                src={FAQ_GALLERY[1].src}
                alt={FAQ_GALLERY[1].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-6">
                All of Bali, one point of contact
              </h2>
              <p className="text-[#F5F2EB]/70 mb-8 leading-relaxed">
                MyChef Bar Services works across Bali&apos;s core hospitality zones and travels to event locations island-wide. Our core consulting coverage includes Badung, Gianyar (including Ubud) and the Bukit/Uluwatu peninsula. Events and temporary staffing are covered island-wide, including Tabanan, Candidasa, Sidemen, Lovina and the Nusa islands, with travel surcharges quoted upfront for locations outside our core zone.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-[#F5F2EB]/70">
                {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Denpasar'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A028]" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                <OptimizedImage
                  src={FAQ_GALLERY[2].src}
                  alt={FAQ_GALLERY[2].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-playfair text-[#F5F2EB] mb-4">What to expect</h3>
                <p className="text-[#F5F2EB]/70 mb-4 leading-relaxed">
                  When you contact us, a bar specialist — not a call centre — reviews your enquiry. Most questions are answered within four business hours. For larger projects, we arrange a short discovery call, then issue a written proposal with scope, timeline and pricing before any commitment.
                </p>
                <p className="text-[#F5F2EB]/70 leading-relaxed">
                  Our services include bar audits, costing and inventory control, cocktail menu development, signature cocktail creation, bar staff training, temporary bartender staffing, permanent bar staff recruitment, new bar setup, monthly bar management support, bar equipment supply and rental, and the complete bar performance programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="py-16 md:py-24 bg-[#C5A028]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#0A0A0A] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#0A0A0A]/80 mb-8 text-lg">
            We usually reply within four business hours. Message us on WhatsApp for the fastest response.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsAppUrl({ serviceName: 'bar services in Bali', intent: 'answers to a few questions' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-[#F5F2EB] font-semibold rounded-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="/bar-services/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A]/30 text-[#0A0A0A] hover:bg-[#0A0A0A]/10 font-medium rounded-lg transition-all duration-300"
            >
              Contact Page
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="bar-services-faq"
        serviceName="bar services in Bali"
        intent="answers to a few questions"
      />
    </>
  )
}
