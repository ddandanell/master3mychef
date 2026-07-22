import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Chef Placement Bali',
    title: 'Chef Placement Agency Bali: How to Place a Chef for Your Villa or Household',
    body: `<p>Chef placement in Bali refers to arranging a chef for an ongoing, longer-term role — rather than booking for a single event. If you are a villa owner looking for a resident chef, an expat household wanting a daily cook, or a retreat property that needs a chef on a monthly retainer, you need a placement — not a single-night booking. The process is different, the contract is different, and the type of chef is often different.</p>
    <p>myCHEF operates both as a private chef booking service (for events and villa stays) and as a chef placement agency for longer-term arrangements. This guide explains how the placement process works, what to look for in a placed chef, what a reasonable contract includes, and how our process protects both the household and the chef.</p>`,
  },
  {
    id: 'placement-vs-booking',
    type: 'content',
    subtitle: 'Placement vs Booking',
    title: 'Chef Placement vs Event Booking: Key Differences',
    body: `<p>The two models are fundamentally different and it helps to understand the distinction before starting either process:</p>
    <p><strong>Event booking (single or multi-session):</strong> You book a chef for a specific occasion — a dinner, a villa week, a series of meals during a stay. The chef comes, cooks the engagement, and leaves. There is no ongoing employment relationship. Pricing is per event. This is the model for most holiday villa bookings and corporate event catering. See our guide on <a href="/blog/private-chef-roles-responsibilities-explained" class="text-[#7E6410] hover:underline font-medium">what a private chef does</a> for this format.</p>
    <p><strong>Chef placement (ongoing role):</strong> You engage a chef as an ongoing role within your household or property — daily cooking, weekly schedule, monthly retainer, or live-in arrangement. The chef works for you regularly and operates within your household's schedule and structure. This is more akin to employment and involves a formal arrangement with clear terms on both sides.</p>
    <p>The placement model is right for: villa owners who want consistent on-property cooking quality, expat households who want regular meals without cooking themselves, retreat properties that need daily catering, and anyone who wants a chef they know and trust rather than whoever is available on a given day.</p>`,
  },
  {
    id: 'placement-process',
    type: 'content',
    subtitle: 'How Placement Works',
    title: 'How myCHEF Chef Placement Works',
    body: `<p>Our placement process is structured to find the right chef for your specific household or property context, not just the nearest available cook:</p>
    <p><strong>Step 1 — Requirements briefing:</strong> We start with a detailed conversation about what you need: number of people to cook for, dietary requirements, cuisine preferences, meal schedule (breakfast only? all three meals? dinner-focused?), kitchen facilities, budget range, and whether you need a live-in or live-out arrangement. This conversation takes 20-30 minutes via WhatsApp or call and is essential to making a good match.</p>
    <p><strong>Step 2 — Chef shortlist:</strong> Based on your requirements, we present a shortlist of 2-4 chefs whose background, cuisine skills, schedule availability, and personality are appropriate for your context. Each profile includes their training history, cuisine specialisations, dietary competencies, languages spoken, and references from previous placements.</p>
    <p><strong>Step 3 — Trial session:</strong> Before committing to a placement, we strongly recommend a paid trial session — a lunch or dinner where the chef cooks for your household and you assess fit. This is standard practice and protects both parties. Most successful long-term placements follow a trial session.</p>
    <p><strong>Step 4 — Placement agreement:</strong> Once you have chosen a chef, we structure a placement agreement covering: scope of work (what meals, what days, what prep and cleanup responsibilities), remuneration, notice periods, leave and holiday provisions, and any additional arrangements (grocery budget, kitchen management). myCHEF acts as an intermediary in this process and can provide a standard template agreement as a starting point.</p>
    <p><strong>Step 5 — Ongoing support:</strong> We remain available throughout the placement as a point of contact if issues arise, if you need a backup chef for periods when the placed chef is unavailable, or if you need to adjust the arrangement as circumstances change.</p>`,
  },
  {
    id: 'what-to-look-for',
    type: 'content',
    subtitle: 'What to Look For',
    title: 'What to Look For in a Placed Chef',
    body: `<p>Chef placement is a relationship-based arrangement and getting the right fit matters more than in a single-event booking. Key criteria:</p>
    <p><strong>Cuisine range matching your needs:</strong> A chef placed in a household that primarily eats Western food needs strong European technique. A chef in a household that eats Indonesian and Asian food needs deep fluency in those cuisines. The best placed chefs are strong in 2-3 cuisine styles relevant to the household's actual preferences.</p>
    <p><strong>Dietary competency:</strong> If your household has serious allergies, religious dietary requirements, or strict preferences (vegan, halal, coeliac), the chef needs verifiable experience with those requirements — not just familiarity. Clarify this explicitly and ask for examples from previous placements.</p>
    <p><strong>Scheduling reliability:</strong> For a placement to work well, the chef needs to be genuinely reliable on their committed schedule. This is more important than raw cooking ability. Ask for references specifically regarding reliability and punctuality from previous household placements.</p>
    <p><strong>Kitchen management and organisation:</strong> A long-term placed chef should take ownership of grocery sourcing, pantry management, and kitchen organisation — not just cooking. This reduces the household's management burden significantly. Ask whether the chef is comfortable with grocery procurement and budget management.</p>
    <p><strong>Communication:</strong> Regular communication about the upcoming week's menu, ingredient availability, scheduling adjustments, and household preferences is part of a good placement. A chef who proactively communicates is far easier to work with than one who requires constant prompting.</p>`,
  },
  {
    id: 'placement-types',
    type: 'content',
    subtitle: 'Placement Types',
    title: 'Types of Chef Placement Available Through myCHEF',
    body: `<p>We offer several placement formats depending on your situation:</p>
    <p><strong>Live-in household chef:</strong> A chef who resides at the villa or property and is available for all household meals on a daily basis. Full-time, live-in role. See our <a href="/staffing" class="text-[#7E6410] hover:underline font-medium">live-in chef guide</a> for detailed scope and contract terms.</p>
    <p><strong>Live-out daily chef:</strong> A chef who comes to the property each day to cook meals, then returns to their own accommodation. Most common for established residences where accommodation is not available or preferred for staff.</p>
    <p><strong>Part-time household chef (several days per week):</strong> A chef who comes 3-4 days per week. Common for smaller households or those with mixed cooking arrangements (some meals at home, some dining out). See our <a href="/staffing/household-staff" class="text-[#7E6410] hover:underline font-medium">household chef guide</a> for this format.</p>
    <p><strong>Villa property chef (for commercial or rental villa):</strong> A chef placed with a villa rental property to serve guests during their stays. The chef is part of the property's staff rather than a personal household hire. Pricing and contract terms differ for this format.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Start a Placement',
    title: 'Find the Right Chef Placement for Your Household or Villa',
    body: 'Tell us your location, household size, meal requirements, and preferred arrangement. We match you with a shortlist of appropriate chefs and guide the full placement process.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'Staffing Page', href: '/staffing' },
  },
]

const FAQS = [
  {
    question: "What is the difference between a chef placement and a regular private chef booking?",
    answer: "A placement is an ongoing arrangement — a chef who works for your household or property regularly (daily, weekly, or monthly). A booking is for a specific event or stay. Placement involves a more thorough matching process, a trial session, and a formal agreement covering schedule, remuneration, and responsibilities.",
  },
  {
    question: "How long does the chef placement process take?",
    answer: "For most placements, from initial briefing to confirmed start date is 1-2 weeks. This includes the requirements conversation, chef shortlisting, trial session scheduling, and agreement finalisation. For urgent placements (needed within 3-5 days), contact us directly — we can often move faster for straightforward requirements.",
  },
  {
    question: "Is there a placement fee?",
    answer: "Yes. Chef placements involve a one-time placement fee separate from the chef's ongoing remuneration. The placement fee covers the matching process, shortlisting, trial coordination, and agreement preparation. Contact us for the current placement fee structure — it is calculated based on the type and duration of placement.",
  },
  {
    question: "Can myCHEF provide a backup chef if our placed chef is unavailable?",
    answer: "Yes. One of the advantages of placing through myCHEF rather than hiring independently is backup cover. If your placed chef is sick, on leave, or unavailable for a session, we can provide a qualified backup chef with knowledge of your household's preferences and dietary requirements.",
  },
  {
    question: "What cuisine backgrounds are available through the myCHEF placement program?",
    answer: "Our placement pool includes chefs with backgrounds in Indonesian/Balinese, Western (French, Italian, Mediterranean), Japanese, Asian fusion, and plant-based/vegan cooking. For specialist requirements (kosher, halal-certified, molecular gastronomy), contact us directly to discuss availability.",
  },
]

export default function ChefPlacementAgencyBaliPage() {
  return (
    <PremiumPage
      slug="blog/chef-placement-agency-bali"
      title="Chef Placement Agency Bali: How to Place a Chef for Your Villa or Household"
      description="How chef placement in Bali works — the difference between a placement and a booking, the matching process, trial sessions, and what a placement agreement."
      h1="Chef Placement Agency Bali — How to Place a Chef for Your Villa or Household"
      subtitle="The complete guide to finding and placing a long-term chef in Bali"
      heroImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1400&q=80"
      heroImageAlt="Professional chef consulting with a Bali villa owner about a long-term placement arrangement"
      ogImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1400&q=80"
      keywords={['chef placement bali', 'chef placement agency bali', 'place a chef bali', 'hire chef long term bali', 'villa chef placement bali']}
      highlights={['Trial Session', 'Vetted Chefs', 'Backup Cover', '1-2 Week Process']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Live-in Chef Bali Guide', href: '/staffing', desc: 'Everything about hiring a live-in chef in Bali.' },
        { label: 'Household Chef Guide', href: '/staffing/household-staff', desc: 'Hiring a long-term household chef in Bali.' },
        { label: 'Villa Staff Bali Guide', href: '/staffing/villa-staff', desc: 'Hiring all villa staff categories in Bali.' },
        { label: 'Private Chef Roles Explained', href: '/blog/private-chef-roles-responsibilities-explained', desc: 'What a private chef does and what they are responsible for.' },
        { label: 'Staffing Services', href: '/staffing', desc: 'myCHEF staffing and placement services overview.' },
        { label: 'Contact Us', href: '/contact', desc: 'Start a placement inquiry.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Chef Placement Agency Bali', 'https://mychef.id/blog/chef-placement-agency-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Chef Placement Agency Bali: How to Place a Chef for Your Villa or Household',
          description: 'How chef placement in Bali works — the difference between a placement and a booking, the matching process, trial sessions, and what a placement agreement covers.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/chef-placement-agency-bali' },
          url: 'https://mychef.id/blog/chef-placement-agency-bali',
        },
      ]}
      ctaText="Start a Chef Placement"
      ctaSubtext="Tell us your requirements — we match you with the right long-term chef and guide the full placement process."
    />
  )
}
