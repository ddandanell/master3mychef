import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Mail } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'

const SECTIONS = [
  {
    title: '1. Introduction',
    content: `myCHEF Indonesia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our private chef booking services in Bali, Indonesia.\n\nBy using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.\n\nData controller: MyChef (myCHEF.id), NPWP 1000000005064323, Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80226, Indonesia. Privacy enquiries: bali@mychef.id.`,
  },
  {
    title: '2. Information We Collect',
    content: `2.1 Personal Information\nWe collect information that you provide directly to us when booking our services:\n\n• Name and contact information (email, phone number, WhatsApp number)\n• Villa or accommodation address in Bali\n• Event details (date, time, number of guests, occasion)\n• Dietary preferences and restrictions\n• Payment information (processed securely through our payment providers)\n• Communication history with our team and chefs\n\n2.2 Automatically Collected Information\nWhen you visit our website, we may automatically collect:\n\n• Device information (IP address, browser type, operating system)\n• Usage data (pages visited, time spent, links clicked)\n• Cookies and similar tracking technologies`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the collected information for the following purposes:\n\n• Process and fulfill your private chef bookings\n• Match you with appropriate chefs based on your preferences\n• Communicate with you about your booking, menu selections, and service details\n• Process payments and prevent fraud\n• Send booking confirmations, reminders, and follow-up communications\n• Improve our services and customer experience\n• Respond to your inquiries and provide customer support\n• Comply with legal obligations under Indonesian law\n• Send marketing communications (with your consent)\n\nLegal basis: we process personal data to perform our contract with you (your booking), to comply with legal and tax obligations, with your consent (marketing communications), and for our legitimate interests in operating, securing and improving the service — which is the basis on which we run website analytics and session recording. You can opt out of analytics and session recording at any time; see section 7 for how.`,
  },
  {
    title: '4. Information Sharing and Disclosure',
    content: `We may share your information with:\n\nOur Chefs: We share necessary booking details with the chef assigned to your event.\n\nService Providers: Payment processors, ingredient suppliers, and other vendors who assist in delivering our services.\n\nLegal Requirements: When required by Indonesian law or to protect our legal rights.\n\nBusiness Transfers: In connection with any merger, sale, or acquisition of our business.\n\nWe do not sell your personal information to third parties for marketing purposes.`,
  },
  {
    title: '5. Data Security',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.\n\nPayment information is processed through secure, PCI-compliant payment gateways and is not stored on our servers.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:\n\n• Access and receive a copy of your personal information\n• Correct inaccurate or incomplete information\n• Request deletion of your personal information (subject to legal requirements)\n• Object to or restrict certain processing of your information\n• Withdraw consent for marketing communications at any time\n• Lodge a complaint with relevant data protection authorities\n\nTo exercise these rights, please contact us at bali@mychef.id or via WhatsApp at +62 896-7407-2020.`,
  },
  {
    title: '7. Cookies, Analytics and Session Recording',
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you use our site, remember your preferences, and improve our services.\n\nWe use the following analytics providers:\n\n• PostHog — product analytics, error reporting and session recording\n• Google Analytics and Google Tag Manager — website traffic measurement\n• Vercel Analytics and Speed Insights — traffic and page performance measurement\n\nSession recording: PostHog reconstructs a visual replay of your visit, including the pages you viewed, where you moved and clicked, how far you scrolled, and any errors the site produced. We use this to find parts of the site that are confusing or broken.\n\nWhat session recording does NOT capture:\n\n• The contents of anything you type into a form field. Text you enter — your name, email address, phone number, villa address and any notes — is masked in your browser before the recording is sent to us, so it never reaches our analytics provider.\n• Passwords, which are never recorded under any circumstances.\n\nWe do not attach your name or email address to your analytics or recording data; it is held against a randomly generated identifier. Recordings are retained for 30 days and then deleted automatically.\n\nHow to opt out: visit https://mychef.id/?va-disable=1 once in any browser. That browser is then excluded from all of the above — analytics, session recording and performance measurement — and stays excluded until you visit https://mychef.id/?va-disable=0. The setting is stored locally in your own browser and applies to that browser only. Nothing is recorded or sent while it is active.\n\nYou can also control cookie settings through your browser preferences, though disabling cookies may affect the functionality of our website. If you would like us to delete analytics or session recording data already associated with your visit, contact us at bali@mychef.id.`,
  },
  {
    title: '8. International Data Transfers',
    content: `Your information is primarily stored and processed in Indonesia. If we transfer information to other countries, we ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.`,
  },
  {
    title: '9. Data Retention',
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by Indonesian law. Booking records are typically retained for accounting and legal purposes for up to 7 years after the service date.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.`,
  },
  {
    title: '11. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nmyCHEF Indonesia\nJl. Tukad Barito Timur III No.16\nPanjer, Denpasar Selatan\nKota Denpasar, Bali 80226\nIndonesia\n\nEmail: bali@mychef.id\nWhatsApp: +62 896-7407-2020`,
  },
]

const FAQS = [
  {
    q: 'What personal data does myCHEF collect?',
    a: 'We collect name, contact details, villa address, event details, dietary preferences, and payment information. We also collect device and usage data automatically when you visit our website.',
  },
  {
    q: 'How does myCHEF use my data?',
    a: 'Your data is used to process bookings, match you with chefs, communicate about your event, process payments, send confirmations, and improve our services. Marketing communications are only sent with your consent.',
  },
  {
    q: 'Does myCHEF share my information with third parties?',
    a: 'We share necessary booking details with your assigned chef and trusted service providers such as payment processors. We do not sell your personal information to third parties for marketing purposes.',
  },
  {
    q: 'How can I request deletion of my data?',
    a: 'You can request deletion of your personal information by contacting us at bali@mychef.id or via WhatsApp at +62 896-7407-2020. We will process your request subject to any legal retention requirements.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Yes. Payment information is processed through secure, PCI-compliant payment gateways and is not stored on our servers. We use appropriate technical and organizational measures to protect all personal data.',
  },
  {
    q: 'Does myCHEF use cookies?',
    a: 'Yes, we use cookies and similar tracking technologies to enhance your experience, understand site usage, remember preferences, and improve our services. We also record anonymised replays of site visits to find pages that are confusing or broken — anything you type into a form is masked in your browser and never reaches us. See section 7 for detail. You can control cookies through your browser settings.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Privacy Policy | myCHEF.id Private Chef & Catering Services"
        description="myCHEF.id privacy policy — how we collect, store and use your data when you book private chef or catering services in Bali."
        ogImage="/og-image.webp"
        canonical="https://mychef.id/privacy"
        jsonLd={[
          breadcrumbSchema('Privacy Policy', 'https://mychef.id/privacy'),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
        ]}
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#C5A028] text-sm tracking-wider uppercase mb-8 hover:text-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Legal</p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
          <p className="text-white/[40%] text-sm">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.title} className="border-b border-white/10 pb-12">
                <h2 className="text-xl md:text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{section.title}</h2>
                <div className="text-white/[60%] text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 text-center">
            <p className="text-[#C5A028] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions?</p>
            <p className="text-white/[60%] text-sm mb-6">If you have any questions about this Privacy Policy, please reach out.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6289674072020" target="_blank" rel="noopener noreferrer" data-source="privacy-cta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-white text-sm rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:bali@mychef.id" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm rounded-full hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">
                <Mail className="w-4 h-4" /> bali@mychef.id
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Privacy FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>
    </div>
  )
}
