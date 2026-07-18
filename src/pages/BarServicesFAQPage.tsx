import { MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'
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
            Answers about our bar consulting, staffing, training and management services in Bali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
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

      <StickyMobileCTA
        pageSource="bar-services-faq"
        serviceName="bar services in Bali"
        intent="answers to a few questions"
      />
    </>
  )
}
