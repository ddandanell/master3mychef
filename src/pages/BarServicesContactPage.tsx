import { MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { BarServiceEnquiryForm } from '@/components/bar-services'
import { getPageMeta } from '@/data/page-meta'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'bar services in Bali', intent: 'a consultation' })

const CONTACT_DETAILS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 896-7407-2020',
    href: WA_LINK,
    hint: 'Fastest — usually reply within 1 hour',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bali@mychef.id',
    href: 'mailto:bali@mychef.id',
    hint: 'For detailed proposals',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 896-7407-2020',
    href: 'tel:+6289674072020',
    hint: '08:00 – 22:00 WITA, daily',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Jl. Tukad Barito Timur III No.16, Denpasar Selatan, Bali',
    hint: 'Serving all of Bali',
  },
]

export default function BarServicesContactPage() {
  const meta = getPageMeta('bar-services-contact')
  const canonical = meta.canonical ?? `${SITE}/bar-services/contact/`

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[breadcrumbSchema('Contact', canonical, 'Bar Services', `${SITE}/bar-services/`)]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'Contact', href: '/bar-services/contact/' },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <OptimizedImage
          src="/generated/mychef-bar-services-bali-contact-hero.webp"
          alt="MyChef bar consultant discussing a Bali venue programme with a bar manager"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <span className="text-sm uppercase tracking-widest text-amber-400 mb-4 block">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 max-w-3xl">
            Talk to a bar specialist
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Tell us about your venue and we will match you to the right bar consulting, staffing or management service.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 font-medium rounded"
            >
              Send a Written Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-12 md:py-16 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_DETAILS.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 hover:text-amber-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                  )}
                  {item.hint && <p className="text-xs text-gray-500 mt-1">{item.hint}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage + response time */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                All of Bali, one point of contact
              </h2>
              <p className="text-gray-700 mb-6">
                From Seminyak beach clubs to Ubud retreats and Uluwatu resorts, our bar team travels across Bali.
                Remote locations are quoted with travel built in — no surprises.
              </p>
              <ul className="space-y-2 text-gray-700">
                {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Denpasar'].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Response time</p>
                  <p className="text-2xl font-serif text-gray-900">Within 1 business day</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Most enquiries receive a tailored proposal or next-step recommendation within one business day.
                Urgent venue cover requests are prioritised.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded"
              >
                <MessageCircle className="w-4 h-4" />
                Start on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant + form */}
      <section id="enquiry-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
                Consultant
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Your bar programme starts here
              </h2>
              <p className="text-gray-700 mb-8">
                Our bar lead reviews every enquiry and recommends the right mix of audit, training, menu work or staffing.
                No hard sell — just clear next steps.
              </p>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <OptimizedImage
                  src="/generated/mychef-bar-services-bali-consultant.webp"
                  alt="MyChef bar consultant reviewing a venue programme in Bali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <BarServiceEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="bar-services-contact"
        serviceName="bar services in Bali"
        intent="a consultation"
      />
    </>
  )
}
