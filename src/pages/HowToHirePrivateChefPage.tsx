import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from '@/components/SeoHead'
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Hiring Guide',
    title: 'How to Hire a Private Chef in Bali',
    body: `<p>A private chef is a professional cook hired to prepare meals exclusively for you and your household (or group, for event-based work). Unlike caterers who deliver prepared food, private chefs work in your kitchen, plan menus collaboratively, and adapt to your dietary needs, preferences, and schedule in real time.</p>
    <p>This guide walks you through finding, vetting, interviewing, and booking the right chef for your <a href="/in-villa-service" class="text-[#C5A028] hover:underline font-medium">villa stay</a> or event. You can also <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">view our pricing</a> to get oriented.</p>`,
  },
  {
    id: 'what-they-do',
    type: 'content' as const,
    subtitle: 'Role Overview',
    title: 'What Does a Private Chef Do?',
    body: `<p><strong>Key Responsibilities:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Meal planning based on your preferences and dietary restrictions</li>
      <li>Shopping for local and imported ingredients within budget</li>
      <li>Preparing breakfast, lunch, and/or dinner from scratch</li>
      <li>Accommodating allergies, vegan/keto/low-carb, and cultural preferences</li>
      <li>Post-meal cleanup (some chefs do this; others coordinate with villa staff)</li>
      <li>Discussing food preferences, seasonal availability, and costs weekly or daily</li>
    </ul>
    <p><strong>When to Hire:</strong> Villa stays of 3+ days, groups of 4–20 with complex dietary needs, <a href="/events" class="text-[#C5A028] hover:underline font-medium">special events</a>, health-focused trips, or when avoiding restaurants entirely.</p>`,
  },
  {
    id: 'price-guide-cta',
    type: 'custom' as const,
    subtitle: '',
    title: '',
    body: '',
    render: <EmailCaptureBar />,
  },
  {
    id: 'chef-types',
    type: 'features' as const,
    subtitle: 'Specialties',
    title: 'Types of Private Chefs',
    features: [
      { icon: TrendingUp, title: 'Fine Dining', desc: 'Michelin-star restaurants or classical training. IDR 2.7M–4.5M+/person. Best for special occasions.' },
      { icon: Users, title: 'Mediterranean/Wood-Fire', desc: 'Italian, Spanish, Moroccan training. IDR 1.8M–2.7M/person. Best for social dinners.' },
      { icon: CheckCircle, title: 'Casual/Everyday', desc: 'Home cooking or hospitality training. IDR 900K–1.5M/person. Best for longer villa stays.' },
      { icon: Shield, title: 'Dietary Specialists', desc: 'Vegan, keto, raw, gluten-free expertise. IDR 1.5M–3M/person. Best for health-focused trips.' },
    ],
  },
  {
    id: 'cost-breakdown',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'How Much Does a Private Chef Cost?',
    body: `<p><strong>Pricing Models</strong> — see our <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">full pricing page</a> for up-to-date rates:</p>
    <p><strong>Per-Person Rate (Most Common):</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Emerging chef: IDR 1.2M–1.8M per person per meal</li>
      <li>Established chef: IDR 1.8M–2.7M per person per meal</li>
      <li>Celebrity chef: IDR 2.7M–4.5M+ per person per meal</li>
    </ul>
    <p><strong>Daily/Weekly Flat Rate:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Budget: IDR 4.5M–9M/day (groceries included)</li>
      <li>Mid-range: IDR 9M–15M/day</li>
      <li>Premium: IDR 15M–30M/day</li>
    </ul>
    <p><strong>Meal-by-Meal:</strong> Breakfast IDR 150K–300K/person, Lunch IDR 300K–600K/person, Dinner IDR 450K–1.5M+/person.</p>`,
  },
  {
    id: 'vetting',
    type: 'content' as const,
    subtitle: 'Verification',
    title: 'Finding & Vetting Private Chefs',
    body: `<p><strong>Finding Chefs:</strong> Use <a href="/chefs" class="text-[#C5A028] hover:underline font-medium">myCHEF.id vetted chef profiles</a> with reviews and menus. Ask your villa manager for referrals. Join Bali Facebook groups. Search chef portfolios on Instagram.</p>
    <p><strong>Vetting Checklist:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Culinary training or 5+ years professional kitchen experience</li>
      <li>Food safety certification (HACCP or equivalent)</li>
      <li>References from 2–3 recent clients (call them directly)</li>
      <li>Clear menu examples tailored to your interests</li>
      <li>Responsive communication via email, WhatsApp</li>
      <li>Transparent pricing and inclusions</li>
      <li>Past feedback and any complaints handled professionally</li>
    </ul>`,
  },
  {
    id: 'questions-to-ask',
    type: 'content' as const,
    subtitle: 'Interview',
    title: 'Key Questions to Ask',
    body: `<p><strong>Culinary Background:</strong> What's your formal training? Do you have food safety certifications? Which cuisines are your specialties?</p>
    <p><strong>Dietary & Flexibility:</strong> How do you handle allergies? What if a guest reveals a new allergy mid-event? Do you work with local or imported ingredients?</p>
    <p><strong>Process & Workflow:</strong> Do you design menus or collaborate? What's your sourcing process? How do you handle last-minute ingredient unavailability?</p>
    <p><strong>Experience & Logistics:</strong> How many guests have you cooked for? Do you work solo or with villa staff? What kitchen setup do you need?</p>
    <p><strong>References & Verification:</strong> Can you provide 2–3 recent client references? Have you ever had client issues? Do you have liability insurance? What's your cancellation policy?</p>`,
  },
  {
    id: 'booking-process',
    type: 'content' as const,
    subtitle: 'Timeline',
    title: 'Booking Process & Preparation',
    body: `<p><strong>4–6 Weeks Before:</strong> Identify chefs, request quotes, have initial consultation, discuss menu ideas and dietary needs, secure 25–50% deposit.</p>
    <p><strong>2–3 Weeks Before:</strong> Finalize menu outline, confirm head count, pay remainder of fee (or arrange final payment).</p>
    <p><strong>1 Week Before:</strong> Confirm arrival date and time, share kitchen layout and appliances, discuss dietary restrictions again, arrange shopping list.</p>
    <p><strong>Day of Arrival:</strong> Welcome chef, show kitchen setup, clarify meal timing, introduce to villa staff.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Book',
    title: 'Find Your Perfect Private Chef',
    body: 'Browse vetted chefs on myCHEF.id, review their specialties, and book your custom culinary experience.',
    primaryAction: { label: 'Browse Chefs', href: '/chefs' },
    secondaryAction: { label: 'Get Recommendations', href: '/contact' },
  },
]

const FAQS = [
  {
    question: 'How far in advance should I book a private chef?',
    answer: '4–6 weeks is ideal, allowing the chef to source ingredients and customize menus. 2–3 weeks is acceptable for most chefs. 1 week is possible but may incur rush fees.',
  },
  {
    question: 'What if my group has multiple dietary restrictions?',
    answer: 'Share all dietary needs upfront. The chef will design menus that accommodate everyone without compromising quality or flavor.',
  },
  {
    question: "Can a private chef work with my villa's existing staff?",
    answer: 'Yes. Most chefs coordinate with villa staff for cleanup, service, and logistics. Clarify this in your initial consultation.',
  },
  {
    question: 'What happens if the chef gets sick?',
    answer: 'Discuss backup plans and cancellation policies upfront. Established chefs often have backup staff or networks.',
  },
  {
    question: 'Can I hire a chef for just one special dinner?',
    answer: 'Yes, but pricing is usually per-meal or per-event, which can be higher than daily rates. Ideal for focused experiences like tasting menus or romantic dinners.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Explore available chefs and their specialties.' },
  { label: 'Fine Dining Guide', href: '/blog/fine-dining-guide', desc: 'Learn about tasting menus and fine dining experiences.' },
  { label: 'Chef Hiring Best Practices', href: '/blog/chef-qualifications-credentials-bali-hiring', desc: 'Advanced tips on credentials, interviews, and vetting.' },
  { label: 'Catering Menus', href: '/blog/bali-catering-menu', desc: 'Explore menu options and cuisine styles.' },
  { label: 'Contact Us', href: '/contact', desc: 'Get personalized chef recommendations.' },
]

export default function HowToHirePrivateChefPage() {
  return (
    <PremiumPage
      slug="blog/how-to-hire-private-chef-bali-complete-guide"
      title="Complete Guide: How to Hire a Private Chef in Bali"
      description="Learn how to hire a private chef in Bali. Compare costs, required qualifications, booking process, and find chefs for your villa stay."
      seoTitle="How to Hire a Private Chef in Bali | Cost, Skills & Booking Guide"
      seoDescription="Learn how to hire a private chef in Bali. Compare costs, required qualifications, booking process, and find chefs for your villa stay."
      canonicalUrl="https://mychef.id/blog/how-to-hire-private-chef-bali-complete-guide"
      h1="How to Hire a Private Chef in Bali"
      subtitle="Complete guide to cost, qualifications, and booking process."
      heroImage="/generated/mychef-catering-bali-hub-catering.webp"
      heroImageAlt="Private chef meeting with guests in Bali villa"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hub-catering.webp"
      keywords={['hire private chef bali', 'private chef cost', 'how to hire chef']}
      highlights={['Finding Chefs', 'Vetting Process', 'Cost Breakdown', 'Booking Timeline']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('How to Hire a Private Chef Bali', 'https://mychef.id/blog/how-to-hire-private-chef-bali-complete-guide', 'Blog', 'https://mychef.id/blog'),
        aggregateRatingSchema(4.9, 183),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'How to Hire a Private Chef in Bali',
          description: 'Learn how to hire a private chef in Bali. Compare costs, required qualifications, booking process, and find chefs for your villa stay.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-03-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hub-catering.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/how-to-hire-private-chef-bali-complete-guide' },
          url: 'https://mychef.id/blog/how-to-hire-private-chef-bali-complete-guide',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Hire a Private Chef in Bali',
          description: 'Step-by-step guide to finding, vetting, and booking a private chef for your Bali villa stay or event.',
          totalTime: 'PT30M',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'IDR',
            value: '1500000',
          },
          step: [
            {
              '@type': 'HowToStep',
              name: 'Define Your Needs',
              text: 'Decide on guest count, meal occasions (breakfast, lunch, dinner), dietary restrictions, cuisine preferences, and your overall budget before searching.',
              position: 1,
            },
            {
              '@type': 'HowToStep',
              name: 'Find and Compare Chefs',
              text: 'Browse vetted chef profiles on myCHEF.id, ask your villa manager for referrals, or search chef portfolios on Instagram. Compare specialties, pricing models, and availability.',
              position: 2,
            },
            {
              '@type': 'HowToStep',
              name: 'Vet Credentials and References',
              text: 'Confirm culinary training or 5+ years of professional kitchen experience, food safety certification (HACCP or equivalent), and call 2–3 recent client references directly.',
              position: 3,
            },
            {
              '@type': 'HowToStep',
              name: 'Conduct an Interview',
              text: 'Ask about cuisine specialties, how they handle allergies, their menu planning process, sourcing approach, and logistics such as kitchen setup needs and cleanup arrangements.',
              position: 4,
            },
            {
              '@type': 'HowToStep',
              name: 'Book and Secure the Chef',
              text: 'Agree on a finalized menu outline, confirm head count and pricing, sign a written contract, and secure a 25–50% deposit 4–6 weeks before your event.',
              position: 5,
            },
          ],
        },
      ]}
      ctaText="Browse Available Chefs"
      ctaSubtext="Start with vetted chef profiles and book your private dining experience."
    />
  )
}
