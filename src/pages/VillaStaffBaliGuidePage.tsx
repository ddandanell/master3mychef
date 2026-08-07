import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Star, Shield, MessageCircle, RefreshCw } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'The Bali Villa Staff Landscape',
    title: 'Why Villa Staff Quality in Bali Varies So Dramatically',
    body: `<p>Bali has no shortage of people willing to work as villa staff. Finding someone to show up and clean a villa or pour a drink is not the problem. Finding staff who operate at the level your guests expect — anticipating needs, executing with precision, presenting professionally, and communicating in English — is a completely different challenge.</p>

    <p>The majority of villa staff referral networks in Bali operate through informal chains: a villa manager knows a cousin, a property owner got a recommendation from a neighbour, a previous guest "left behind" their housekeeper. These arrangements work until they don't — and when they fail, they fail during a client's stay. Unvetted references, inflated CVs, undefined job roles, and no accountability structure are the norm in the informal market.</p>

    <p>Agency solutions exist but come with their own problems: high markups, staff who are hospitality-adjacent (domestic workers moved into villa roles without training), and replacement guarantees that exist on paper but are hard to enforce in practice.</p>

    <p>myCHEF approaches villa staffing from the inside of the hospitality industry outward. Our founders are chefs and service professionals, not household recruiters. That distinction matters: when we vet a private chef, we run a culinary skills test. When we assess a butler, we observe actual service execution — not just presentation. Our staff are hospitality-trained, not just domestically available. That means your villa guests experience service that feels like a hotel, not a house.</p>

    <p>This guide covers the roles you need for a Bali villa team, what each role should cost, what separates good villa staff from great villa staff, and what the placement and contracting process should look like when done properly.</p>`,
  },
  {
    id: 'roles',
    type: 'content' as const,
    subtitle: 'Roles & Costs',
    title: 'Bali Villa Staff Roles: What Each Person Does and What They Cost',
    body: `<p>Understanding the distinction between roles matters before you hire. Mixing up a villa cook and a private chef, or assigning a housekeeper the duties of a butler, creates confusion and usually ends in a poor guest experience. Here is what each role actually covers and how each is typically priced in 2026.</p>

    <p><strong>Private Chef / Villa Cook</strong><br/>
    A private chef has formal culinary training and is responsible for full meal planning, market shopping, and daily cooking for villa guests. A higher-level chef can design set menus, execute fine dining courses, handle dietary requirements professionally, and adapt to cuisine styles beyond Indonesian. A villa cook, by contrast, handles everyday family cooking competently — breakfast, lunch, dinner — without the fine-dining execution layer. Both roles include sourcing ingredients. Rates vary significantly depending on training level, cuisine range, and experience — request a quote for current market guidance.</p>

    <p><strong>Butler</strong><br/>
    The butler is the highest-skill household role and the one most frequently misunderstood. A proper villa butler anticipates guest needs before they are expressed, manages the villa's presentation standards, executes formal table service, handles guest requests and errands, and acts as the primary liaison between guests and the property. They are not a glorified receptionist — they are the person who makes the villa feel effortless. Rates depend on training background, English proficiency, and experience — request a quote for current market guidance.</p>

    <p><strong>Waiter / Service Staff</strong><br/>
    Service staff handle food and drink delivery during meals and events: table setup and clearance, drink pouring, canape passing during cocktail hour, and coordination with the kitchen during multi-course meals. For villa events with 10+ guests, dedicated service staff are essential — relying on the chef to serve while cooking is a false economy. Rates vary by experience and event scope, with daily hire available for events — request a quote for current market guidance.</p>

    <p><strong>Housekeeper</strong><br/>
    The housekeeper maintains the villa's physical presentation: rooms, bathrooms, communal areas, pool surrounds, and linen management. In larger villas this may be a two-person role split between interior and exterior. Villa housekeeping is different from hotel housekeeping — turnover is less frequent, but presentation standards for long-stay guests are higher and more personal. Rates depend on villa size and scope of duties — request a quote for current market guidance.</p>

    <p><strong>Villa Manager</strong><br/>
    The villa manager oversees the entire staff team, manages supplier relationships, coordinates maintenance contractors, handles guest services at a property level, and is the owner's operational representative when the owner is not present. Good villa managers are rare and significantly reduce the operational burden on villa owners. Rates vary significantly with property size and scope of responsibility — request a quote for current market guidance.</p>

    <p><strong>Driver</strong><br/>
    For villas outside walkable areas — Uluwatu, Ubud, many Seminyak and Canggu compounds — a dedicated driver for airport transfers, market runs, and guest transportation is a genuine service differentiator. Rates depend on hours, vehicle arrangements, and fuel terms — request a quote for current market guidance.</p>`,
  },
  {
    id: 'what-good-looks-like',
    type: 'features' as const,
    subtitle: 'Standards',
    title: 'What Separates Great Villa Staff from Average',
    features: [
      {
        icon: Star,
        title: 'Hospitality Training',
        desc: 'Professional service training — culinary school, hotel service programs, formal butler training — not just years of household experience. Training produces consistent, repeatable quality. Experience alone does not.',
      },
      {
        icon: Shield,
        title: 'Verified Background',
        desc: 'Criminal background check, reference verification with minimum two previous employers contacted directly, and skills assessment in the actual role. Not a reference letter the candidate brought themselves.',
      },
      {
        icon: MessageCircle,
        title: 'English Communication',
        desc: 'Assessed English for guest-facing roles — not self-reported. Villa staff who cannot communicate clearly with international guests create friction that guests remember. We assess conversational English before placement.',
      },
      {
        icon: RefreshCw,
        title: 'Guaranteed Replacement',
        desc: '90-day replacement guarantee on all placements. If the placement does not work out for any reason within the first 90 days, we replace at no additional fee. No argument, no delay.',
      },
    ],
  },
  {
    id: 'vetting',
    type: 'content' as const,
    subtitle: 'Our Vetting Process',
    title: 'How myCHEF Vets Villa Staff Before Placement',
    body: `<p>Our vetting process is longer and more demanding than most agencies apply. That is deliberate — we are not a volume business. Here is what each candidate goes through before we present them to a client.</p>

    <p><strong>Skills Assessment:</strong> For chefs, we run a practical culinary test covering knife skills, mise en place, a timed cooking challenge, and dietary accommodation handling. For service staff, we observe a mock table service scenario — setup, pouring sequence, clearing, and guest interaction. For butlers, we add a situational judgment assessment covering guest request scenarios and problem resolution.</p>

    <p><strong>English Communication Assessment:</strong> All guest-facing candidates are assessed by a native English speaker in a real conversation, not a written test. We assess vocabulary range, comprehension, confidence, and the ability to handle unexpected questions — the real-world test of guest service capability.</p>

    <p><strong>Criminal Background Check:</strong> Conducted through the Indonesian National Police (SKCK) for all candidates. We verify the document is current and authentic before proceeding.</p>

    <p><strong>Reference Verification:</strong> We contact a minimum of two previous employers directly — not references the candidate provides, but employers we identify from the work history. We ask structured questions about reliability, guest interaction, and reasons for departure.</p>

    <p><strong>Food Safety Certification:</strong> For all chef candidates, we verify HACCP food safety certification or require completion before placement.</p>

    <p><strong>Mock Shift:</strong> Where practical, we conduct a supervised mock shift in a test environment before the candidate meets a client. This surfaces issues that assessment alone misses.</p>

    <p>The result: a significant proportion of candidates who apply do not pass our vetting. That is the point. The ones who do pass are the ones your guests will encounter.</p>`,
  },
  {
    id: 'contracts',
    type: 'content' as const,
    subtitle: 'Contracts & Legal',
    title: 'Employment Contracts for Bali Villa Staff: What You Need to Know',
    body: `<p>Indonesia has a structured labor law framework that applies to domestic and villa staff. Getting this right at the start of an employment relationship avoids disputes and protects both parties. Here are the key elements to understand.</p>

    <p><strong>Contract Type:</strong> Indonesian law recognizes two main employment contract types: PKWT (Perjanjian Kerja Waktu Tertentu) is a fixed-term contract, appropriate for short-season villa staffing or trial periods. PKWTT (Perjanjian Kerja Waktu Tidak Tertentu) is an open-ended contract, appropriate for permanent villa staff. PKWT contracts cannot be extended indefinitely — after the maximum term (generally 2 years), continued employment converts the relationship to PKWTT.</p>

    <p><strong>Probation Period:</strong> PKWTT contracts may include a probation period of up to 3 months. During probation, either party may terminate without notice or severance. Use this period actively to assess performance — do not let it pass passively.</p>

    <p><strong>THR Bonus:</strong> Tunjangan Hari Raya (THR) is a mandatory bonus paid before Eid al-Fitr (and, for non-Muslim employees, may be timed to other religious holidays). For employees who have worked a full year, this equals one full month's salary. For employees who have worked less than a year, it is prorated. This is a legal obligation, not optional.</p>

    <p><strong>Overtime:</strong> Overtime pay applies beyond standard hours (typically 8 hours/day, 40 hours/week or 7 hours/day in a 6-day week). Rates are prescribed by law — 1.5x for the first hour, 2x thereafter. Define expected hours and overtime handling clearly in the contract.</p>

    <p><strong>Accommodation Terms:</strong> If the role includes accommodation (live-in chef, resident butler), document the accommodation terms explicitly — what is provided, what the employee is responsible for, and what happens to accommodation rights on termination.</p>

    <p><strong>Termination Notice:</strong> Termination requirements depend on contract type and employment duration. Legal counsel review before terminating a permanent employee is strongly recommended.</p>

    <p>myCHEF provides a template contract aligned with Indonesian labor law for all placements. We strongly recommend having this reviewed by a qualified Indonesian employment lawyer before signing, particularly for permanent positions or roles with accommodation components.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Find Your Villa Staff',
    title: 'Tell Us What You Need',
    body: "Tell us which roles you need, your villa location, and start date — we'll present vetted candidates within 3 business days.",
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20looking%20to%20hire%20villa%20staff%20in%20Bali%20and%20would%20like%20to%20discuss%20options.',
    },
    secondaryAction: { label: 'View Staffing Page', href: '/staffing/villa-staff' },
  },
]

const FAQS = [
  { question: 'Is this guide free?', answer: 'Yes — educational content to help you plan. Booking is optional.' },
  { question: 'Can myCHEF deliver what this guide describes?', answer: 'Yes — start at <a href="/services">services</a> or <a href="/private-chef-bali">private chef</a>.' },
  { question: 'How do I get prices after reading?', answer: 'See <a href="/pricing">pricing</a> or WhatsApp a fixed quote request.' },
  { question: 'Does advice apply across Bali?', answer: 'Yes for major villa areas — confirm logistics for remote spots.' },
  { question: 'Allergies covered in real bookings?', answer: 'Yes — brief us at enquiry. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide</a>.' },
  { question: 'Daily chef vs one dinner?', answer: 'Multi-day stays → private chef day rates; celebration nights → fine dining or catering.' },
  { question: 'How to book after this guide?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
  { question: 'Related services?', answer: 'Browse <a href="/dining-styles">dining styles</a> and <a href="/events">events</a>.' },
  { question: 'Cancellation if I book?', answer: 'See <a href="/cancellation">cancellation policy</a>.' },
  { question: 'Who writes the operational standards?', answer: 'myCHEF operations and chef leadership in Bali.' },
  { question: 'Can villa managers share this guide?', answer: 'Yes — free to share with guests.' },
  { question: 'More FAQs?', answer: 'Central hub: <a href="/faq">FAQ</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const RELATED_PAGES = [
  { label: 'Live-In Chef Guide', href: '/staffing', desc: 'How to hire, vet, and manage a live-in private chef for your Bali villa.' },
  { label: 'Staffing Placement', href: '/staffing/private-chef-placement', desc: 'myCHEF permanent and temporary staffing placement service.' },
  { label: 'Staffing: Villa Staff', href: '/staffing/villa-staff', desc: 'Full villa team staffing — chefs, butlers, housekeepers, drivers.' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Private chef service for Bali villa guests and residents.' },
  { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing for all myCHEF services and staffing.' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'Step-by-step guide to hiring a private chef in Bali.' },
]

export default function VillaStaffBaliGuidePage() {
  return (
    <PremiumPage
      slug="blog/villa-staff-bali-hiring-guide"
      title="Villa Staff Bali: Complete Hiring Guide"
      description="Complete guide to hiring villa staff in Bali. Chef, butler, waiter and housekeeper roles explained. Costs, vetting process and myCHEF staffing service."
      seoTitle="Villa Staff Bali | Hiring Guide: Chefs, Butlers, Waiters | myCHEF"
      seoDescription="Complete guide to hiring villa staff in Bali. Chef, butler, waiter and housekeeper roles explained. Costs, vetting process and myCHEF staffing service."
      canonicalUrl="https://mychef.id/blog/villa-staff-bali-hiring-guide"
      h1="Villa Staff Bali: Complete Hiring Guide"
      subtitle="Chefs, Butlers, Waiters &amp; Housekeepers — How to Hire the Right Villa Team"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Professional villa staff team at a Bali luxury villa — myCHEF staffing service"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['villa staff bali', 'hire villa staff bali', 'bali villa staff agency', 'villa staff bali cost', 'private villa staff bali']}
      highlights={['Roles & Costs', 'Vetting', 'Contracts', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Villa Staff Bali Hiring Guide', 'https://mychef.id/blog/villa-staff-bali-hiring-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Villa Staff Bali: Complete Hiring Guide',
          description:
            'Complete guide to hiring villa staff in Bali. Chef, butler, waiter, housekeeper roles explained. Costs IDR, vetting process, myCHEF staffing service.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/villa-staff-bali-hiring-guide' },
          url: 'https://mychef.id/blog/villa-staff-bali-hiring-guide',
          wordCount: 1500,
          keywords: 'villa staff bali, hire villa staff bali, bali villa staff agency, villa staff bali cost, private villa staff bali',
        },
      ]}
      ctaText="Find Your Villa Staff"
      ctaSubtext="Tell us which roles you need, your villa location, and start date — we'll present vetted candidates within 3 business days."
    />
  )
}
