import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { UtensilsCrossed, ShoppingCart, FileText, ShieldCheck, Clock, BookOpen } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Live-In Chef Bali',
    title: 'What Is a Live-In Chef — and Who Hires One in Bali?',
    body: `<p>A live-in chef is a culinary professional who resides at your property — or very close to it — and takes full responsibility for all household meal preparation. Unlike a daily private chef (who arrives, cooks, and departs), a live-in chef is integrated into your household routine: present for breakfast, available for unplanned lunches, and on-call for dinners that start late. The distinction matters because it changes the service model entirely.</p>

    <p>A daily chef gives you structured meal events. A live-in chef gives you a staffed kitchen — a domestic anchor who manages grocery runs, keeps the pantry stocked, tracks dietary needs for every household member, and adapts in real time when plans change. If your guests extend dinner by two hours, your live-in chef stays. If a child has a new food preference, it is noted and implemented the next morning.</p>

    <p>In Bali, live-in chef placements are most common among four groups. <strong>Long-stay expats and remote workers</strong> who lease villas for 6–12 months and want a structured, healthy meal routine without the overhead of daily catering bookings. <strong>Luxury villa homeowners</strong> who host rotating guests throughout the year and need consistent kitchen management. <strong>Corporate housing</strong> — executives on extended assignment who expect the same quality of service they receive at five-star hotels. And <strong>high-net-worth families</strong> with children, dietary complexity, or both, who require a professional who can manage all of it quietly and competently.</p>

    <p>Bali's advantage is real: the island has a deep talent pool of professionally trained chefs who have worked in international hotel kitchens, Michelin-affiliated restaurants, and high-end villa hospitality — at a cost that is a fraction of what an equivalent chef commands in Europe, Australia, or North America. A trained live-in chef with years of international hotel experience in Bali typically costs a small fraction of what the same profile would command in London or other Western capitals. That gap is the reason live-in chef placements in Bali have grown substantially over the past three years.</p>`,
  },
  {
    id: 'duties',
    type: 'content' as const,
    subtitle: 'Role & Responsibilities',
    title: 'What a Live-In Chef Does (and What They Don\'t)',
    body: `<p>A live-in chef's core scope covers the entire kitchen and meal lifecycle. <strong>Daily meal planning and preparation</strong>: breakfast, lunch, and dinner for all household members, planned weekly and adjusted as needs change. <strong>Grocery shopping</strong>: sourcing ingredients daily or as needed, managing produce quality, comparing markets, and adhering to household budgets. <strong>Menu rotation</strong>: ensuring variety across the week so meals feel intentional rather than repetitive — a critical skill in long-term placements. <strong>Dietary management</strong>: tracking allergies, intolerances, preferences, and medical dietary requirements across all residents and guests, without prompting.</p>

    <p><strong>Kitchen stock management</strong>: maintaining dry goods, spices, condiments, and specialty ingredients at appropriate levels. <strong>Food hygiene and cleanliness</strong>: keeping the kitchen to HACCP-compliant standards — clean workspaces, safe storage temperatures, correct labelling of prepared foods. <strong>Cooking demonstrations</strong>: many clients request occasional cooking demos or lessons as part of the arrangement, and most myCHEF placements include this where interest exists.</p>

    <p>What live-in chefs do <em>not</em> cover without explicit agreement: general housekeeping (cleaning, laundry, ironing) falls outside the culinary role. Serving at formal dinner parties for larger groups typically requires additional service staff — a live-in chef can plate and present, but running full table service for 12+ guests simultaneously is beyond the role without support. Sourcing alcohol and managing a wine cellar may or may not be included depending on the candidate's background. Clarifying scope at the contract stage avoids friction later.</p>

    <p>The ideal live-in chef is proactive, communicative, and professionally discreet. They integrate into your household rhythm without becoming a social presence — the best ones are quietly exceptional.</p>`,
  },
  {
    id: 'costs',
    type: 'content' as const,
    subtitle: 'Pricing & Budget',
    title: 'Live-In Chef Costs in Bali 2026',
    body: `<p>Live-in chef salaries in Bali span a wide range depending on experience, training, cuisine specialisation, and language ability. Here is a practical breakdown of the three tiers for 2026 — request a quote for current market guidance on specific salary ranges:</p>

    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:1rem;">
      <li><strong>Basic household cook:</strong> the entry-level tier. Solid Indonesian and Asian cuisine, reliable daily cooking, limited English. Well suited to households with straightforward dietary needs and Indonesian cuisine preferences.</li>
      <li><strong>Trained private chef:</strong> the mid-range tier. Formal culinary training, multi-cuisine capability (Asian, Mediterranean, Western), conversational English, able to handle dietary complexity. This is the most common placement tier for expat households and villa owners.</li>
      <li><strong>Executive / internationally trained chef:</strong> the premium tier. Michelin-adjacent training, extensive fine-dining background, fluent English, multi-lingual capability, ability to execute elaborate tasting menus and manage a kitchen team if needed. Appropriate for ultra-premium households and corporate executive housing.</li>
    </ul>

    <p><strong>Additional cost factors to budget for:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:1rem;">
      <li><strong>Accommodation:</strong> If the chef lives on-site at your property and you provide a room and meals, this is included in the arrangement. If you are placing a chef who commutes from nearby accommodation, a modest monthly housing allowance is standard practice.</li>
      <li><strong>Transport allowance:</strong> A small monthly allowance covering fuel or motorbike costs, depending on distance and how frequently the chef drives to market.</li>
      <li><strong>THR bonus:</strong> Indonesian law requires a religious holiday bonus (Tunjangan Hari Raya) equivalent to one full month's salary, paid before Eid or as agreed. This applies to all full-time employees, including live-in chefs.</li>
      <li><strong>myCHEF placement fee:</strong> Equivalent to one month's salary, paid once at placement. Includes vetting, testing, reference verification, and a 90-day replacement guarantee.</li>
    </ul>

    <p>What drives price variation beyond the tiers above: <strong>cuisine expertise</strong> (a chef trained in French fine dining costs more than a generalist), <strong>English proficiency</strong> (fluent English commands a premium in expat-facing roles), and <strong>track record</strong> in comparable placements. Candidates with demonstrable household chef experience, strong references, and HACCP certification command the upper end of their tier.</p>

    <p>For context: even once the THR bonus and standard allowances are included, the total annual cost of a trained private chef in Bali remains remarkably affordable by international standards. For a household of 4–6 people eating three meals a day, seven days a week, the per-meal cost works out to less than a casual café meal — and far below what an equivalent arrangement would cost in Europe, Australia, or North America. That is the Bali advantage. Request a quote for current market guidance on total monthly costs.</p>`,
  },
  {
    id: 'vetting',
    type: 'features' as const,
    subtitle: 'myCHEF Vetting Process',
    title: 'How We Vet Live-In Chef Candidates',
    features: [
      {
        icon: BookOpen,
        title: 'Culinary Background Verification',
        desc: 'We verify every listed employment — hotel kitchen experience, restaurant tenure, and previous household placements — by contacting prior employers directly. Unverifiable claims are flagged and discussed with the candidate before presentation.'
      },
      {
        icon: UtensilsCrossed,
        title: 'Practical Cooking Test',
        desc: 'Candidates complete a structured cooking test in a supervised kitchen. They are assessed on technique, hygiene, timing, mise en place, and ability to handle a multi-course brief. We test across at least two cuisine categories relevant to the role.'
      },
      {
        icon: FileText,
        title: 'English Communication Assessment',
        desc: 'For households that operate in English, we assess spoken and written communication directly. Candidates who list English proficiency on their CV are tested conversationally. The result is graded and disclosed in the candidate profile.'
      },
      {
        icon: ShieldCheck,
        title: 'Criminal Background Check',
        desc: 'All candidates undergo a formal Indonesian criminal background check (SKCK) before placement. We do not place candidates with unresolved records. The SKCK is provided to the client on request.'
      },
      {
        icon: ShoppingCart,
        title: 'Reference Verification',
        desc: 'We contact a minimum of two professional references — ideally previous household clients or head chefs. We ask structured questions about reliability, cleanliness, dietary management, and how the candidate handled challenges.'
      },
      {
        icon: Clock,
        title: 'HACCP Food Safety Certification',
        desc: 'All myCHEF live-in chef candidates hold a current HACCP food safety certificate. Candidates without certification are required to complete accredited training before they are eligible for placement through our network.'
      },
    ],
  },
  {
    id: 'contract',
    type: 'content' as const,
    subtitle: 'Contracts & Employment Terms',
    title: 'Essential Contract Elements for a Live-In Chef Bali',
    body: `<p>A well-structured employment contract protects both parties and prevents the most common sources of friction in live-in arrangements. Here are the essential elements to include, based on Indonesian labour law and best practice for household chef placements in Bali:</p>

    <p><strong>Working hours:</strong> The standard live-in chef schedule is 6 days per week, 8–10 hours per day. The rest day is typically Friday or Sunday — agreed in advance and consistent. Hours exceeding 10 per day or 54 per week are overtime and must be compensated at the statutory rate (1.5× base hourly for the first hour, 2× thereafter under Indonesian law).</p>

    <p><strong>Holiday entitlement:</strong> Indonesian law mandates 12 days of paid annual leave after 12 months of continuous employment. National public holidays (approximately 16 per year) are additional and must either be given as rest days or compensated as overtime if the employee is required to work. Bali has additional regional days of significance — Nyepi (Day of Silence) is a nationwide rest day and cannot be waived.</p>

    <p><strong>Accommodation terms:</strong> If the chef lives on-site, the contract should specify the room provided, meals included (if any), and what happens to accommodation arrangements if the employment ends. Clarity here avoids awkward eviction conversations.</p>

    <p><strong>Trial period:</strong> We recommend a 2-week paid trial period before confirming the placement as permanent. During the trial, either party can terminate with 48 hours notice and no penalty. This is separate from (and shorter than) the statutory probation period.</p>

    <p><strong>Termination notice:</strong> Standard notice periods for household staff in Indonesia are 2–4 weeks for non-cause termination, increasing with length of service. Termination for cause (theft, gross misconduct, food hygiene violations) can be immediate but requires documented evidence. Indonesian labour law is employee-protective — document everything in writing from day one.</p>

    <p><strong>Note:</strong> myCHEF provides a standard contract template as part of the placement package. We recommend all clients have a local Indonesian labour consultant review the final contract, particularly for arrangements lasting 12 months or more.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Frequently Asked Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Your Placement',
    title: 'Find Your Live-In Chef',
    body: 'Tell us your location, household size, and cuisine preferences — we\'ll present vetted candidates within 5 business days.',
    primaryAction: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20hiring%20a%20live-in%20chef%20for%20my%20Bali%20villa.',
      external: true,
    },
    secondaryAction: { label: 'Get a Quote', href: '/quote' },
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
  { label: 'Staffing & Placement', href: '/staffing/private-chef-placement', desc: 'Full details on myCHEF\'s chef placement service for Bali households.' },
  { label: 'Live-In Chef Service', href: '/staffing/live-in-chef', desc: 'Our dedicated live-in chef staffing page with service inclusions and process.' },
  { label: 'Villa Staff Bali', href: '/staffing/villa-staff', desc: 'Complete villa staffing solutions — chefs, butlers, hosts, and more.' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'End-to-end guide to hiring a private chef in Bali — the complete process.' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Full pricing breakdown for private chefs in Bali by format and session length.' },
  { label: 'Staffing for Hotels & Restaurants', href: '/staffing/for-hotels-restaurants', desc: 'Culinary staffing solutions for hospitality businesses in Bali.' },
]

export default function LiveInChefBaliHiringGuidePage() {
  return (
    <PremiumPage
      slug="blog/live-in-chef-bali-hiring-guide"
      title="Live-In Chef Bali: The Complete Hiring Guide"
      description="Considering a live-in chef for your Bali villa or home? Learn about costs, contracts, vetting, duties and myCHEF's placement service."
      seoTitle="Live-In Chef Bali: Hiring Guide, Costs & What to Expect | myCHEF"
      seoDescription="Considering a live-in chef for your Bali villa or home? Learn about costs, contracts, vetting, duties and myCHEF's placement service."
      canonicalUrl="https://mychef.id/blog/live-in-chef-bali-hiring-guide"
      h1="Live-In Chef Bali: The Complete Hiring Guide"
      subtitle="Everything You Need to Know Before Hiring a Live-In Private Chef in Bali"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Professional live-in chef preparing meals in a Bali villa kitchen"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['live in chef bali', 'hire live in chef bali', 'private household chef bali', 'live in private chef bali cost', 'bali villa chef hire']}
      highlights={['Duties', 'Costs', 'Vetting', 'Contracts']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Live-In Chef Bali Hiring Guide', 'https://mychef.id/blog/live-in-chef-bali-hiring-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Live-In Chef Bali: The Complete Hiring Guide',
          description: 'Considering a live-in chef for your Bali villa or home? Learn about costs, contracts, vetting, duties, and how myCHEF\'s placement service works.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/live-in-chef-bali-hiring-guide' },
          url: 'https://mychef.id/blog/live-in-chef-bali-hiring-guide',
          wordCount: 1600,
          keywords: 'live in chef bali, hire live in chef bali, private household chef bali',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Hire a Live-In Chef in Bali',
          description: 'Step-by-step guide to finding, vetting, and hiring a live-in private chef for your Bali villa or household.',
          step: [
            {
              '@type': 'HowToStep',
              name: 'Define your household brief',
              text: 'Identify your household size, cuisine preferences, dietary requirements, working hours needed, and whether you can provide on-site accommodation.',
            },
            {
              '@type': 'HowToStep',
              name: 'Set your budget',
              text: 'Establish a monthly budget based on the chef tier you need — basic cook, trained private chef, or executive chef — plus allowances and the annual THR bonus. Request a quote for current market guidance on salary ranges.',
            },
            {
              '@type': 'HowToStep',
              name: 'Work with a placement agency',
              text: 'Engage myCHEF to source and vet candidates. We conduct background checks, practical cooking tests, English assessments, and reference verification before presenting 2–3 shortlisted candidates.',
            },
            {
              '@type': 'HowToStep',
              name: 'Meet candidates and choose',
              text: 'Review candidate profiles, conduct brief interviews, and if possible observe a short cooking demonstration. Select your preferred candidate and confirm the placement.',
            },
            {
              '@type': 'HowToStep',
              name: 'Run a trial period',
              text: 'Begin with a 2-week paid trial period. This lets both parties assess fit before committing to a longer arrangement. Either party can end the trial with 48 hours notice.',
            },
            {
              '@type': 'HowToStep',
              name: 'Sign a formal employment contract',
              text: 'Formalise the arrangement with a written contract covering salary, working hours, rest days, accommodation terms, notice periods, and THR entitlement under Indonesian labour law.',
            },
          ],
        },
      ]}
      ctaText="Find Your Live-In Chef"
      ctaSubtext="Tell us your location, household size, and cuisine preferences — we'll present vetted candidates within 5 business days."
    />
  )
}
