import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Role Guide',
    title: 'What Does a Private Chef Do? Roles, Responsibilities & What to Expect',
    body: `<p>The term "private chef" is used loosely — and often interchangeably with "villa cook," "personal chef," or "hired chef" — which creates confusion when people are booking. Understanding exactly what a private chef does, what responsibilities are included in the role, and how it differs from a villa cook or household chef helps you book the right level of service and have the right expectations before the chef arrives.</p>
    <p>This guide explains the full scope of a private chef engagement: pre-service planning, market sourcing, mise en place, cooking, service, and kitchen management — and draws the line between what a private chef handles and what other roles (butler, server, villa cook) are responsible for.</p>`,
  },
  {
    id: 'core-duties',
    type: 'content',
    subtitle: 'Core Responsibilities',
    title: 'Core Duties of a Private Chef',
    body: `<p>A professional private chef's responsibilities cover the full food service lifecycle, from initial planning through post-service cleanup:</p>
    <p><strong>Menu planning and consultation:</strong> Before the engagement, the chef works with you to design a menu aligned to your preferences, dietary requirements, and occasion. This may be a brief WhatsApp conversation for a single dinner, or a multi-day tasting menu consultation for a week-long villa stay. The menu plan sets the grocery list, identifies sourcing requirements, and allows any allergen or preference flags to be resolved before service day.</p>
    <p><strong>Market and grocery sourcing:</strong> At myCHEF, groceries are provided at cost — the chef sources all ingredients and charges you the exact market price with no markup. This is a core part of the role: a private chef who knows which wet market to visit for which produce, and what to look for in terms of freshness and quality, is not the same as using a delivery service. The sourcing decision directly affects the quality of your meal.</p>
    <p><strong>Mise en place and kitchen preparation:</strong> The chef arrives at the villa at the agreed time (typically 2-4 hours before service for a dinner), organises the kitchen workspace, and begins mise en place — the professional kitchen practice of preparing, portioning, and organising every element of a dish before cooking begins. This stage determines whether service will be smooth or rushed.</p>
    <p><strong>Cooking and plating:</strong> The core of the role. A trained private chef manages multiple dishes in sequence, times the service to ensure nothing is cold or overcooked, and plates each course to a presentation standard appropriate for the occasion and the food type.</p>
    <p><strong>Service coordination:</strong> In a villa setting without dedicated waitstaff, the chef often manages plate delivery as well as cooking — moving between the kitchen and dining area. For larger or more formal events, myCHEF can provide dedicated service staff to allow the chef to focus entirely on the kitchen. See our <a href="/fine-dining" class="text-[#7E6410] hover:underline font-medium">fine dining service page</a> for full-service setups.</p>
    <p><strong>Kitchen cleanup:</strong> After service, the chef is responsible for returning the kitchen to its original state: washing up, disposing of waste properly, storing any leftover ingredients, and ensuring the villa kitchen is clean. Most clients specify whether they want the chef to clean as they go (preferred for multi-course dinners where kitchen cleanliness between courses matters) or clean at the end.</p>`,
  },
  {
    id: 'vs-villa-cook',
    type: 'content',
    subtitle: 'Private Chef vs Villa Cook',
    title: 'Private Chef vs Villa Cook: The Key Differences',
    body: `<p>In Bali, the distinction between a "private chef" and a "villa cook" (sometimes called a villa chef or warung-style cook) is significant and directly affects what you receive:</p>
    <p><strong>Training and culinary skill level:</strong> A professional private chef has formal culinary training — typically from a hotel management school or international culinary institute — combined with experience in restaurant kitchens or hotel banquet operations. A villa cook typically has practical cooking experience but without formal training. The difference shows in technical dishes: a private chef can execute a proper béarnaise, a multi-temperature tasting menu, or a Japanese omakase sequence. A villa cook is best suited for local Indonesian cuisine and simple grilled preparations.</p>
    <p><strong>Menu range:</strong> A private chef can cook across multiple cuisines at a professional level: French, Italian, Japanese, Mediterranean, modern Indonesian, and custom fusion menus. A villa cook typically specialises in local Balinese and Indonesian dishes and may struggle with international requests.</p>
    <p><strong>Presentation standard:</strong> Restaurant-trained private chefs plate to restaurant standards: garnishes, sauce work, height and composition on the plate. Villa cook service is typically family-style or simple plated service without fine dining presentation.</p>
    <p><strong>Dietary and allergen competency:</strong> Professional private chefs are trained to handle serious food allergies, intolerances, and complex dietary requirements (vegan, kosher, halal, multiple simultaneous restrictions). This requires understanding cross-contamination, ingredient labelling, and substitute techniques. This training is not universal in villa cook backgrounds.</p>
    <p><strong>Price difference:</strong> A professional private chef costs more than a villa cook — typically IDR 700,000–1,200,000 per person for a dinner versus IDR 150,000–300,000 for a simple villa cook meal. The cost difference reflects training, skill, and the level of experience provided. Our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">pricing guide</a> breaks this down in detail.</p>`,
  },
  {
    id: 'vs-household-chef',
    type: 'content',
    subtitle: 'Private vs Household vs Personal',
    title: 'Private Chef vs Household Chef vs Personal Chef',
    body: `<p>These three terms are sometimes used interchangeably but have distinct meanings in the context of hiring:</p>
    <p><strong>Private chef (single occasion or short term):</strong> A chef hired for a specific event or villa stay — a dinner party, a week in Bali, a corporate event. The engagement has a defined start and end. This is the most common format for villa and holiday bookings.</p>
    <p><strong>Household chef (live-in or long-term placement):</strong> A chef hired on a permanent or semi-permanent basis to cook daily meals for a household or estate. In Bali, this usually means a live-in chef who prepares breakfast and dinner for a family or long-term resident, often with grocery purchasing and kitchen management responsibilities. See our <a href="/staffing/household-staff" class="text-[#7E6410] hover:underline font-medium">household chef hiring guide</a> for what this involves.</p>
    <p><strong>Personal chef (ongoing flexible contract):</strong> A chef who visits regularly — several times per week — to prepare meals in batches or cook specific meals on a schedule. Less common in Bali but increasingly requested by expat residents and long-stay villa guests who want regular high-quality cooking without a full-time hire. See our <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">expat private chef guide</a>.</p>`,
  },
  {
    id: 'what-not-included',
    type: 'content',
    subtitle: 'Scope Boundaries',
    title: "What a Private Chef Is NOT Responsible For",
    body: `<p>Understanding the boundaries of the private chef role prevents misunderstandings before the engagement:</p>
    <p><strong>Butler and server duties:</strong> A chef's primary role is kitchen-based. Extensive table service (topping up drinks throughout a long dinner, managing wine pairings, formal silver service) is typically a butler or dedicated server responsibility. For formal events, myCHEF provides separate service staff to ensure both kitchen and front-of-house are properly covered.</p>
    <p><strong>Purchasing alcohol and beverages:</strong> Private chefs do not typically source alcohol — wine, spirits, and cocktail ingredients are usually provided by the client or sourced separately. A chef can advise on wine pairings and suggest what to stock, but the purchase is separate from the food service.</p>
    <p><strong>General household tasks:</strong> A private chef is not a housekeeper, cleaner, or general household assistant. Kitchen-adjacent tasks — washing up after service, organising the pantry, managing kitchen equipment — are within scope. General cleaning, pool maintenance, laundry, and other household management are separate roles.</p>
    <p><strong>Event setup and decoration:</strong> Table settings, floral arrangements, event decoration, and candle setup are typically managed by the villa or by a dedicated event planner, not the chef. The chef may provide basic table setting for the place settings they need for service, but elaborate setup is outside the cooking role.</p>`,
  },
  {
    id: 'how-to-book',
    type: 'content',
    subtitle: 'Booking Process',
    title: 'How to Book a Private Chef with myCHEF',
    body: `<p>The myCHEF booking process is designed to be simple and fast — most bookings are confirmed by WhatsApp within a few hours:</p>
    <ol style="list-style:decimal;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Contact us with your details:</strong> Villa location, number of guests, date and time, type of occasion, and any dietary requirements. WhatsApp is the fastest channel.</li>
      <li><strong>Menu consultation:</strong> Our team discusses your preferences with you and connects you with the chef. For longer stays or complex occasions, this may include a more detailed conversation about the menu over several days.</li>
      <li><strong>Confirm and deposit:</strong> A 50% deposit confirms the booking. The remaining 50% is due the day before the event.</li>
      <li><strong>Chef arrival:</strong> The chef arrives at the villa at the agreed time with all ingredients sourced and ready to begin mise en place.</li>
      <li><strong>Service and cleanup:</strong> Full service through to kitchen cleanup. The chef leaves the kitchen as they found it.</li>
    </ol>
    <p style="margin-top:0.75rem;">For our full service overview see the <a href="/why-mychef" class="text-[#7E6410] hover:underline font-medium">how it works page</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book a Chef',
    title: 'Ready to Book a Private Chef?',
    body: 'Tell us your villa, dates, and group size. We match you with the right chef for your occasion — from a simple family dinner to a full fine-dining tasting menu.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  { question: 'How much is a private chef in Bali per day?', answer: 'From IDR 1,000,000++/day for one meal (chef + assistant). Two meals IDR 1.8M++, three IDR 2.7M++. Weekly −10%, monthly −20%. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is meal-count day rates. <a href="/fine-dining">Fine dining</a>.' },
  { question: 'Do you cover my area?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Kids menus with daily chef?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { question: 'Live-in vs daily chef?', answer: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { question: 'Payment methods?', answer: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { question: 'Last-minute private chef?', answer: 'Often possible outside peak — WhatsApp availability.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
]

export default function PrivateChefRolesResponsibilitiesPage() {
  return (
    <PremiumPage
      slug="blog/private-chef-roles-responsibilities-explained"
      title="Private Chef Roles & Responsibilities Explained | myCHEF"
      description="Understand exactly what a private chef does: menu planning, market sourcing, cooking, service, and cleanup. How a private chef differs from a villa cook."
      h1="Private Chef Roles & Responsibilities Explained"
      subtitle="What a private chef does, what's included in the role, and how it differs from a villa cook or household chef"
      heroImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=80"
      heroImageAlt="Professional private chef in a villa kitchen preparing a multi-course meal"
      ogImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=80"
      keywords={['private chef roles responsibilities', 'what does a private chef do', 'private chef vs villa cook', 'private chef duties', 'hire private chef bali']}
      highlights={['Menu Planning', 'Market Sourcing', 'Full Service', 'Kitchen Cleanup']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'How to Hire a Private Chef Bali', href: '/blog/how-to-hire-private-chef-bali-complete-guide', desc: 'Step-by-step guide to hiring a private chef in Bali.' },
        { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Full pricing breakdown — what a private chef costs in Bali.' },
        { label: 'Household Chef Hiring Guide', href: '/staffing/household-staff', desc: 'How to hire a live-in or long-term household chef in Bali.' },
        { label: 'Fine Dining Private Chef', href: '/fine-dining', desc: 'Full-service fine dining experiences with dedicated waitstaff.' },
        { label: 'Our Chef Profiles', href: '/chefs', desc: 'Meet our team of trained private chefs.' },
        { label: 'Book a Chef', href: '/contact', desc: 'Check availability and get a quote.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Roles & Responsibilities', 'https://mychef.id/blog/private-chef-roles-responsibilities-explained', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Roles & Responsibilities Explained',
          description: 'Understand exactly what a private chef does: menu planning, market sourcing, cooking, service, and cleanup.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-roles-responsibilities-explained' },
          url: 'https://mychef.id/blog/private-chef-roles-responsibilities-explained',
        },
      ]}
      ctaText="Book a Professional Private Chef"
      ctaSubtext="From a single villa dinner to a week-long residency, we match you with a trained private chef."
    />
  )
}
