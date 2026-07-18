import { MessageCircle, ShieldCheck, Clock, MapPin, Award, Users } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_SERVICES } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { BarServiceGallery } from '@/components/bar-services'

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
  { src: '/generated/mychef-service-bali-bartenders-gallery-1.webp', alt: 'MyChef bartenders preparing for a Bali event' },
  { src: '/generated/mychef-events-bali-weddings-bartender.webp', alt: 'Wedding bartender serving guests in Bali' },
  { src: '/generated/mychef-service-bali-bartenders-gallery-3.webp', alt: 'Bali villa party bar team in action' },
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

      <section className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Bar Services FAQ
          </h1>
          <p className="text-lg text-white/80">
            Straight answers about our bar consulting, staffing, training and management services in Bali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Running a bar in Bali means juggling staffing, licensing, costing, menu design and guest experience all at once. Whether you are opening a new venue, planning a villa wedding, or trying to bring a drifting pour cost back under control, the same questions tend to come up. We have collected the answers here so you can plan with confidence.
            </p>
            <p>
              The questions below cover pricing, staffing, consulting, legal and logistics. Each answer is written to be self-contained, so you can scan for what matters to you. If your question is not here, WhatsApp us and we will reply within four business hours.
            </p>
          </div>

          <FAQAccordion items={allFaqs.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} />

          <div className="mt-12 p-6 bg-stone-50 rounded-lg text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? We usually reply within one business day.
            </p>
            <a
              href={buildWhatsAppUrl({ serviceName: 'bar services in Bali', intent: 'answers to a few questions' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
              Why venues choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Trust signals that matter
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <signal.icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                All of Bali, one point of contact
              </h2>
              <p className="text-gray-700 mb-6">
                MyChef Bar Services works across Bali’s core hospitality zones and travels to event locations island-wide. Our core consulting coverage includes Badung, Gianyar (including Ubud) and the Bukit/Uluwatu peninsula. Events and temporary staffing are covered island-wide, including Tabanan, Candidasa, Sidemen, Lovina and the Nusa islands, with travel surcharges quoted upfront for locations outside our core zone.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Denpasar'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-serif text-gray-900 mb-4">What to expect</h3>
              <p className="text-gray-700 mb-4">
                When you contact us, a bar specialist — not a call centre — reviews your enquiry. Most questions are answered within four business hours. For larger projects, we arrange a short discovery call, then issue a written proposal with scope, timeline and pricing before any commitment.
              </p>
              <p className="text-gray-700">
                Our services include bar audits, costing and inventory control, cocktail menu development, signature cocktail creation, bar staff training, temporary bartender staffing, permanent bar staff recruitment, new bar setup, monthly bar management support, bar equipment supply and rental, and the complete bar performance programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BarServiceGallery images={FAQ_GALLERY} />

      <StickyMobileCTA
        pageSource="bar-services-faq"
        serviceName="bar services in Bali"
        intent="answers to a few questions"
      />
    </>
  )
}
