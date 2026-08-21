import { useState, type FormEvent } from 'react'
import { MessageCircle, Mail, MapPin, Clock, CheckCircle2, ClipboardList, HelpCircle, ArrowRight, Send } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { siteFacts } from '@/data/siteFacts'
import { Breadcrumb } from '@/components/shared'
import OptimizedImage from '@/components/OptimizedImage'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { BAR_SERVICES } from '@/data/bar-services'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { formLeadFields } from '@/lib/collect'

const SITE = 'https://mychef.id'
const WA_LINK = buildWhatsAppUrl({ serviceName: 'bar services in Bali', intent: 'a consultation' })

const VENUE_TYPES = ['Hotel', 'Restaurant', 'Villa', 'Beach club', 'Café', 'Event company', 'Other']

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
  // A separate "Phone" row was removed: it carried the same number as the
  // WhatsApp row above and pointed at the same WhatsApp link. The number is a
  // WhatsApp number — one row, one channel.
  {
    icon: MapPin,
    label: 'Office',
    value: siteFacts.addressDisplay,
    href: undefined,
    hint: 'Serving all of Bali',
  },
]

const WHAT_TO_PREPARE = [
  'Venue type and name — hotel, villa, beach club, restaurant or event.',
  'Location in Bali and whether it is inside our core zone or remote.',
  'The service you are interested in, or your biggest current pain point.',
  'Your preferred dates or timeline, especially for events and peak season.',
  'Guest count or expected covers, if relevant to staffing or menu work.',
]

const CONTACT_FAQS = [
  {
    question: 'How quickly do you reply to bar service enquiries?',
    answer:
      'We reply to B2B bar service enquiries within four business hours, Monday to Saturday, Bali time. Urgent venue cover requests are prioritised.',
  },
  {
    question: 'What information should I include in my first message?',
    answer:
      'Tell us your venue type, location in Bali, the service you need or your biggest pain point, your preferred timeline, and guest count or covers if relevant. The more specific you are, the faster we can move to a written proposal.',
  },
  {
    question: 'Can I book a call before committing to a service?',
    answer:
      'Yes. Ask for a free 30-minute bar health call. We will ask a few questions, give you an honest read on your bar, and tell you plainly whether a paid engagement is worth it.',
  },
  {
    question: 'Do you work outside South Bali?',
    answer:
      'Yes. Our core consulting zone covers Badung, Gianyar (including Ubud) and the Bukit/Uluwatu peninsula. Events and temporary staffing are covered island-wide, including remote areas, with travel costs quoted upfront.',
  },
  {
    question: 'Will I receive a written proposal?',
    answer:
      'Yes. Before any commitment you receive a clear written scope, timeline and pricing. No hidden retainers and no vague day rates.',
  },
  {
    question: 'What is the best channel for urgent same-day bartender cover?',
    answer:
      'WhatsApp is fastest for same-day or next-day bar cover. Include venue name, shift times, role needed and location. We reply with availability or a clear no if inventory is empty.',
  },
  {
    question: 'Do you invoice companies and hotels?',
    answer:
      'Yes. B2B clients receive written proposals and invoices suitable for hotel, restaurant and event-company accounts. Share billing entity details early.',
  },
  {
    question: 'Can international owners brief you remotely?',
    answer:
      'Yes. Many owners brief on WhatsApp or a scheduled call from abroad while local managers handle on-site access for audits and training.',
  },
  {
    question: 'Which bar services can I combine in one proposal?',
    answer:
      'Common stacks: audit + training, menu development + costing, temporary staffing + event support, or a full performance programme. See the <a href="/bar-services">bar services hub</a>.',
  },
  {
    question: 'Do you require a site visit before quoting?',
    answer:
      'Not always. Staffing and many training scopes can be quoted from a clear brief. Audits, new bar setups and layout work usually need a visit or detailed photos/plans.',
  },
  {
    question: 'What are your business hours for bar service replies?',
    answer:
      'Monday–Saturday, Bali time, with urgent cover prioritised. Complex consulting proposals may follow within one business day of a complete brief.',
  },
  {
    question: 'Can you NDA a concept before we share financials?',
    answer:
      'Yes — NDAs are available for concept, recipe and commercial data before deeper discovery.',
  },
  {
    question: 'How do I switch from a free health call to a paid project?',
    answer:
      'After the call we send a written scope if there is a fit. You decide — no automatic retainers and no pressure close.',
  },
  {
    question: 'Do you support beach clubs and nightlife venues?',
    answer:
      'Yes — high-volume bars, beach clubs and late service venues are in scope for staffing, costing, menus and training.',
  },
  {
    question: 'Where can I read bar resources before contacting you?',
    answer:
      'Start at the <a href="/bar-services/resources">bar resources index</a> for salary, costing and setup guides, then contact us when you want implementation help.',
  },
]

const CONTACT_GALLERY = [
  { src: '/generated/mychef-bar-services-bali-consultant.webp', alt: 'MyChef bar consultant reviewing a venue programme' },
  { src: '/generated/mychef-bar-services-bali-contact-hero.webp', alt: 'Bar specialist meeting with a Bali venue owner' },
  { src: '/generated/mychef-bar-services-bali-new-bar-setup-body.webp', alt: 'MyChef team on-site during a new bar setup' },
]

export default function BarServicesContactPage() {
  const meta = getPageMeta('bar-services-contact')
  const canonical = meta.canonical ?? `${SITE}/bar-services/contact/`

  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    venueType: '',
    services: [] as string[],
    phone: '',
    email: '',
    message: '',
    preferredChannel: 'WhatsApp',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleServiceToggle = (slug: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(slug)
        ? prev.services.filter((s) => s !== slug)
        : [...prev.services, slug],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 'bar-services',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Bar Services Enquiry from ${formData.name}`,
          message: formData.message,
          metadata: {
            Venue: formData.venue,
            'Venue type': formData.venueType,
            Services: formData.services.join(', '),
            'Preferred reply channel': formData.preferredChannel,
          },
          ...formLeadFields(),
        }),
      })

      if (!response.ok) throw new Error('Email request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={canonical}
        ogImage={meta.ogImage}
        jsonLd={[
          breadcrumbSchema('Contact', canonical, 'Bar Services', `${SITE}/bar-services/`),
          faqPageSchema(CONTACT_FAQS),
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Bar Services', href: '/bar-services/' },
          { label: 'Contact', href: '/bar-services/contact/' },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#0A0A0A]">
        <OptimizedImage
          src="/generated/mychef-bar-services-bali-contact-hero.webp"
          alt="MyChef bar consultant discussing a Bali venue programme with a bar manager"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#F5F2EB] mb-6 max-w-3xl leading-[1.1]">
            Let&apos;s talk about your bar
          </h1>
          <p className="text-lg md:text-xl text-[#F5F2EB]/80 max-w-2xl mb-10 leading-relaxed">
            Whether your pour cost is creeping up, your team needs training, or you are opening something new — the fastest way to an answer is a message. We reply to every B2B enquiry within four business hours, Monday to Saturday.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              Send a Written Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-12 md:py-16 bg-[#0F0E0C] border-b border-[#F5F2EB]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_DETAILS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[#1A1A1A]/40 border border-[#F5F2EB]/10 p-5 rounded-xl transition-all duration-300 hover:border-[#C5A028]/30"
              >
                <div className="w-11 h-11 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#F5F2EB]/40 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#F5F2EB] hover:text-[#C5A028] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#F5F2EB]">{item.value}</p>
                  )}
                  {item.hint && <p className="text-xs text-[#F5F2EB]/50 mt-1">{item.hint}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens after you contact us */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              Our process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              What happens after you contact us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: 'We reply within four business hours',
                description:
                  'Every B2B enquiry is read by a bar specialist, not a call centre. We respond Monday to Saturday, Bali time, and urgent venue cover requests are prioritised.',
              },
              {
                icon: MessageCircle,
                title: 'Short discovery call or WhatsApp exchange',
                description:
                  'We ask about your venue, your biggest pain point and your timeline. If you are not sure what you need, we guide you to the right service or tell you honestly if a paid engagement is not worth it yet.',
              },
              {
                icon: CheckCircle2,
                title: 'Written proposal before any commitment',
                description:
                  'You receive a clear scope, timeline and pricing in writing. No retainers sprung on you, no vague day rates. If we quote it, it is in writing.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A028]/30"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F2EB] mb-3">{step.title}</h3>
                <p className="text-[#F5F2EB]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
            <OptimizedImage
              src={CONTACT_GALLERY[0].src}
              alt={CONTACT_GALLERY[0].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Coverage + response time */}
      <section className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-6">
                Where we work in Bali
              </h2>
              <p className="text-[#F5F2EB]/70 mb-8 leading-relaxed">
                From Seminyak beach clubs to Ubud retreats and Uluwatu resorts, our bar team travels across Bali. Our core consulting zones are Badung, Gianyar (including Ubud) and the Bukit/Uluwatu peninsula. Events and temporary staffing are covered island-wide, including Tabanan, Candidasa, Sidemen, Lovina and the Nusa islands. Remote locations are quoted with travel built in — no surprises.
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
                  src={CONTACT_GALLERY[1].src}
                  alt={CONTACT_GALLERY[1].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#C5A028]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#F5F2EB]/40">Response time</p>
                    <p className="text-2xl font-playfair text-[#F5F2EB]">Within 4 business hours</p>
                  </div>
                </div>
                <p className="text-[#F5F2EB]/70 mb-6 leading-relaxed">
                  Most enquiries receive a tailored proposal or next-step recommendation within four business hours. Urgent venue cover requests are prioritised.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to prepare */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                Get a faster answer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB] mb-6">
                What to prepare before you message
              </h2>
              <p className="text-[#F5F2EB]/70 mb-8 leading-relaxed">
                You do not need a formal brief. A few details are enough for us to point you to the right service and give you a realistic estimate. The more specific you can be about your venue, timeline and goals, the faster we can move to a written proposal.
              </p>
              <ul className="space-y-4 text-[#F5F2EB]/70">
                {WHAT_TO_PREPARE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ClipboardList className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                <OptimizedImage
                  src={CONTACT_GALLERY[2].src}
                  alt={CONTACT_GALLERY[2].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-playfair text-[#F5F2EB] mb-4">
                  Not sure what you need? Start with a free bar health call
                </h3>
                <p className="text-[#F5F2EB]/70 mb-6 leading-relaxed">
                  Book a free 30-minute bar health call. We will ask a few questions about your operation, give you an honest read on where your bar stands, and tell you plainly whether a paid engagement is worth it. If it is not, we will say so.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#C5A028] hover:bg-[#C5A028]/90 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book a Bar Health Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant + form */}
      <section id="enquiry-form" className="py-16 md:py-24 bg-[#0F0E0C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
                  Consultant
                </span>
                <h2 className="text-3xl md:text-4xl font-playfair text-[#F5F2EB] mb-4">
                  Your bar programme starts here
                </h2>
                <p className="text-[#F5F2EB]/70 leading-relaxed">
                  Our bar lead reviews every enquiry and recommends the right mix of audit, training, menu work or staffing. No hard sell — just clear next steps.
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-inset ring-[#F5F2EB]/10">
                <OptimizedImage
                  src="/generated/mychef-bar-services-bali-consultant.webp"
                  alt="MyChef bar consultant reviewing a venue programme in Bali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A]/60 border border-[#F5F2EB]/10 rounded-2xl backdrop-blur-sm p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-playfair text-[#F5F2EB] mb-8 text-center">
                  Get a written quote
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        Venue / company *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        Venue type *
                      </label>
                      <select
                        required
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.venueType}
                        onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                      >
                        <option value="">Select venue type</option>
                        {VENUE_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        Preferred reply channel
                      </label>
                      <select
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.preferredChannel}
                        onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}
                      >
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-3">
                      Services needed *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BAR_SERVICES.map((s) => (
                        <button
                          key={s.slug}
                          type="button"
                          onClick={() => handleServiceToggle(s.slug)}
                          className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                            formData.services.includes(s.slug)
                              ? 'bg-[#C5A028] border-[#C5A028] text-[#0A0A0A] font-medium'
                              : 'bg-transparent border-[#F5F2EB]/20 text-[#F5F2EB]/70 hover:border-[#C5A028]/40 hover:text-[#F5F2EB]'
                          }`}
                        >
                          {s.eyebrow}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        WhatsApp / phone *
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#F5F2EB]/50 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-[#0A0A0A] border border-[#F5F2EB]/15 rounded-lg px-4 py-3 text-[#F5F2EB] placeholder:text-[#F5F2EB]/30 focus:border-[#C5A028]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A028]/30 transition-colors"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {status === 'sent' && (
                    <div className="p-4 bg-[#C5A028]/10 border border-[#C5A028]/30 text-[#C5A028] rounded-lg">
                      Thank you — your enquiry has been sent. We will reply within four business hours.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg">
                      Something went wrong. Please email us directly at{' '}
                      <a href="mailto:bali@mychef.id" className="underline">
                        bali@mychef.id
                      </a>.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-[#C5A028] hover:bg-[#C5A028]/90 disabled:bg-[#C5A028]/50 text-[#0A0A0A] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,40,0.3)] inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {status === 'sending' ? 'Sending...' : 'Request a Quote'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#F5F2EB]">
              Questions about contacting us
            </h2>
          </div>
          <FAQAccordion items={CONTACT_FAQS.map((f) => ({ q: f.question, a: f.answer }))} defaultOpenCount={2} dark showToc ctaEvery={5} />
          <div className="mt-10 text-center">
            <a
              href="/bar-services/faq/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F5F2EB]/30 text-[#F5F2EB] hover:bg-[#F5F2EB]/10 font-medium rounded-lg transition-all duration-300"
            >
              <HelpCircle className="w-4 h-4" />
              View all bar services FAQs
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
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
