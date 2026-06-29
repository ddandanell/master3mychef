import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Household Chef Bali',
    title: 'Everything You Need to Know About Hiring a Household Chef in Bali',
    body: `<p>A household chef is a private culinary professional engaged on an ongoing basis — cooking for a household, villa, or residence on a recurring schedule rather than for a single event. In Bali, this arrangement has become increasingly common among long-term residents, villa owners, expatriate families, and extended-stay guests who want the convenience of freshly prepared meals without the complexity of employing a full-time staff member.</p>
    <p>Unlike a <a href="/blog/live-in-chef-bali-hiring-guide" class="text-[#C5A028] hover:underline font-medium">live-in chef</a>, a household chef typically visits on a service schedule — a set number of days per week — rather than residing at the property. This makes the arrangement more flexible, more affordable, and better suited to households that do not need catering seven days a week or at all hours.</p>
    <p>myCHEF's household chef service is designed for exactly this market. We place experienced, background-checked, English-speaking chefs with households across Bali's expat and villa communities — on monthly rolling arrangements that can be adjusted as your needs change. Whether you need a chef three mornings a week to prepare healthy breakfasts and leave prepared lunches, or five days a week for full family cooking, we can structure a service around your household.</p>`,
  },
  {
    id: 'who-needs',
    type: 'content',
    subtitle: 'Who Is This For',
    title: 'Who Hires a Household Chef in Bali? Long-Stay Guests, Expats, and Villa Residents',
    body: `<p>The demand for household chef services in Bali comes from several distinct groups:</p>
    <p><strong>Long-term villa residents:</strong> Many Bali villas are rented on monthly or quarterly leases. After the first week or two of eating out daily, residents typically want a more sustainable, healthier, and more cost-effective solution. A household chef provides home-cooked quality at a fraction of the cost of daily restaurant meals, with the added benefit of meals tailored precisely to your dietary preferences.</p>
    <p><strong>Expatriate families:</strong> Bali's growing expatriate community — particularly around Canggu, Seminyak, and Ubud — includes many families with children who prioritise wholesome, consistent home cooking. A household chef on a 3–5 day weekly schedule handles breakfast prep, school lunch boxes, family dinners, and batch-cooking for busy weeks.</p>
    <p><strong>Remote workers and digital nomads on extended stays:</strong> Increasingly, professionals working remotely from Bali for 1–6 months find that a household chef is the single most impactful quality-of-life addition to their stay. Good food, prepared on your schedule, eaten at home — it frees evenings and mornings and removes the daily decision fatigue of where to eat.</p>
    <p><strong>Villa owners:</strong> Owners who spend extended periods at their Bali property, or who manage short-term rental villas where recurring kitchen support is required, often benefit from a placed chef who knows the property and the preferences of regular guests.</p>
    <p>Read more about Bali long-term private chef options in our <a href="/blog/private-chef-bali-expats" class="text-[#C5A028] hover:underline font-medium">guide for expats</a>.</p>`,
  },
  {
    id: 'service-structure',
    type: 'content',
    subtitle: 'Service Structure',
    title: 'How a Household Chef Arrangement Works in Practice',
    body: `<p>A typical myCHEF household chef arrangement works as follows:</p>
    <p><strong>Scheduling:</strong> You select a service schedule — commonly 3 to 5 days per week. Service days and times are agreed in advance and remain consistent each week. Most clients choose morning and early afternoon service (7am–2pm) covering breakfast, lunch preparation, and advance prep for dinner. Evening-focused schedules are also available.</p>
    <p><strong>Menu planning:</strong> At the start of each week (or fortnight), your chef shares a proposed menu based on your preferences, seasonal availability, and the household's schedule. You approve, adjust, or redirect as desired. The chef then handles all shopping, prep, cooking, and kitchen cleanup.</p>
    <p><strong>Grocery sourcing:</strong> Your chef sources ingredients from local markets and trusted suppliers. Groceries are charged at cost — myCHEF does not mark up ingredient prices. You will receive a weekly grocery spend report and can set a per-week budget if preferred.</p>
    <p><strong>Communication:</strong> Your chef communicates directly with you via WhatsApp for menu planning, schedule changes, and any household requests. myCHEF's operations team provides support and acts as intermediary if needed.</p>
    <p><strong>Adjustments:</strong> Schedules can be adjusted with appropriate notice. If you are travelling for a week, the arrangement pauses. If you want additional days during a busy period, we try to accommodate. Minimum engagement is one month.</p>`,
  },
  {
    id: 'what-included',
    type: 'content',
    subtitle: "What's Included",
    title: 'What a Household Chef Service Covers — and What It Does Not',
    body: `<p>Understanding the scope of a household chef arrangement helps set the right expectations from the start. Here is a clear breakdown:</p>
    <p><strong>Included in the chef fee:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
      <li>Menu planning and consultation</li>
      <li>Grocery shopping and market sourcing</li>
      <li>All meal preparation and cooking during service days</li>
      <li>Kitchen cleanup after each service</li>
      <li>Dietary accommodation (vegan, gluten-free, halal, allergy-aware)</li>
      <li>Advance prep for meals on non-service days (e.g., prepared sauces, batch-cooked proteins, labelled containers)</li>
    </ul>
    <p><strong>Charged separately (at cost):</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.75rem;display:flex;flex-direction:column;gap:0.4rem;">
      <li>All grocery and ingredient costs (itemised and transparent)</li>
      <li>Specialty or imported ingredients requested by the household</li>
    </ul>
    <p><strong>Not included:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;display:flex;flex-direction:column;gap:0.4rem;">
      <li>Service on non-contracted days (extra days are available at a day rate)</li>
      <li>General kitchen duties outside of cooking (dishes outside meal service, general cleaning)</li>
      <li>Event-style service for guests beyond the household (this is quoted separately)</li>
    </ul>`,
  },
  {
    id: 'costs',
    type: 'content',
    subtitle: 'Pricing',
    title: 'How Much Does a Household Chef Cost in Bali?',
    body: `<p>Household chef pricing is structured around a monthly service fee based on the number of service days per week and the scope of cooking. Unlike single-event private chef bookings, monthly arrangements are more cost-effective on a per-day basis.</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>3 days/week arrangement:</strong> From IDR 7,000,000 – 10,000,000 per month (chef fee only, excluding groceries). Suitable for couples or small households wanting consistent home cooking 3 days a week.</li>
      <li><strong>5 days/week arrangement:</strong> From IDR 11,000,000 – 15,000,000 per month (chef fee only, excluding groceries). Ideal for families and households that want reliable daily cooking on weekdays.</li>
      <li><strong>Daily rate (ad hoc):</strong> IDR 650,000 – 1,000,000 per service day for clients who prefer flexible ad hoc bookings rather than a monthly arrangement. Best for occasional rather than regular needs.</li>
    </ul>
    <p style="margin-top:0.75rem;">Grocery costs add IDR 150,000 – 400,000 per person per day depending on menu complexity and ingredient preferences. Specialty diets (organic, imported foods, specific proteins) typically sit at the higher end of this range.</p>
    <p>For a full comparison of private chef pricing structures, see our <a href="/blog/private-chef-cost-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef cost guide</a>. Use the <a href="/calculator" class="text-[#C5A028] hover:underline font-medium">pricing calculator</a> to estimate your monthly arrangement cost.</p>`,
  },
  {
    id: 'placement',
    type: 'content',
    subtitle: 'Placement vs Managed Service',
    title: 'Managed Chef vs. Direct Chef Placement — What Is the Difference?',
    body: `<p>myCHEF offers two models for household chef arrangements, and choosing the right one depends on your situation:</p>
    <p><strong>Managed household chef service:</strong> myCHEF manages the relationship — we assign a qualified chef, handle scheduling and substitutions, ensure consistent quality, and act as your point of contact if anything needs to change. The chef is employed and insured through myCHEF. This is the recommended option for most clients — it removes the HR burden and guarantees a backup chef if your primary chef is unavailable.</p>
    <p><strong>Chef placement:</strong> myCHEF sources and vets a chef for your household, conducts background checks, assesses culinary skills, and presents candidates. Once you choose a chef and confirm the placement, the working relationship is directly between you and the chef. This model suits households who want to employ a dedicated private chef directly and have the administrative capacity to manage the relationship independently. Placement involves a one-time placement fee. See our full <a href="/staffing" class="text-[#C5A028] hover:underline font-medium">staffing and placement services</a> page.</p>
    <p>For most long-term villa guests and expat households, the managed service is the simpler and lower-risk option — no employment paperwork, guaranteed substitutes, and consistent quality oversight by myCHEF's operations team.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Get Started',
    title: 'Hire a Household Chef in Bali',
    body: 'Tell us about your household, schedule, and cooking preferences. We will match you with the right chef and get your arrangement started.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'View Staffing Services', href: '/staffing' },
  },
]

const FAQS = [
  {
    question: "What is the minimum engagement period for a household chef arrangement in Bali?",
    answer: "The minimum engagement for a managed household chef service is one calendar month. This gives the chef time to learn your preferences and establish a consistent routine. For ad hoc day-rate bookings, there is no minimum — though these are better suited to occasional needs rather than ongoing household cooking."
  },
  {
    question: "Can a household chef accommodate multiple dietary requirements within the same household?",
    answer: "Yes. This is one of the key advantages of a household chef over restaurant dining. If your household includes a vegan, a meat-eater, a gluten-intolerant family member, and children with separate preferences, your chef plans menus that accommodate everyone simultaneously — using shared base preparations and tailored components for each person."
  },
  {
    question: "What happens if my household chef is sick or unavailable?",
    answer: "Under the managed household chef service, myCHEF provides a qualified substitute chef for any days your regular chef is unavailable due to illness or personal circumstances. We aim to match your regular chef's knowledge of your household as closely as possible. This is one of the primary advantages of the managed service over a direct employment arrangement."
  },
  {
    question: "Can my household chef also cook for dinner parties or events at my villa?",
    answer: "Yes, with advance notice. If you are hosting guests for dinner and want your regular household chef to take on the event, this is typically possible within the scope of the arrangement or at a small supplementary rate. For larger events (8+ guests, formal dinner parties), a supplementary staffing fee may apply. Discuss with your operations contact to confirm."
  },
  {
    question: "Do household chef arrangements include grocery shopping, or does the client shop separately?",
    answer: "Grocery shopping is included in the chef's service. Your chef shops at local markets and selected suppliers and charges ingredients at cost. You receive an itemised weekly grocery report. You can set a weekly ingredient budget and the chef will plan menus to match. You do not need to shop or source ingredients yourself."
  },
  {
    question: "Is a household chef available outside of Canggu and Seminyak?",
    answer: "Yes. We place household chefs across Bali including Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Berawa, Pererenan, and the wider expat belt. We also operate in Jakarta for household chef placements in residential and expat communities. Contact us with your location to confirm availability and current chef capacity in your area."
  },
]

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', url: 'https://mychef.id/' },
    { name: 'Journal', url: 'https://mychef.id/journal' },
    { name: 'Household Chef Bali Hiring Guide', url: 'https://mychef.id/blog/household-chef-bali-hiring-guide' },
  ]),
  faqPageSchema(FAQS),
]

export default function HouseholdChefBaliGuidePage() {
  return (
    <PremiumPage
      title="Household Chef Bali: How to Hire a Personal Chef for Your Villa or Home"
      description="Hire a household chef in Bali for recurring weekly cooking — expats, long-stay villa guests, and Bali residents. Monthly arrangements, daily rates, managed service and direct placement options."
      heroImage="/images/hero-private-chef.jpg"
      heroAlt="Household chef preparing a family meal in a Bali villa kitchen"
      sections={SECTIONS}
      faqs={FAQS}
      jsonLd={jsonLd}
    />
  )
}
