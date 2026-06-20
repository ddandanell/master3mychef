import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Award, CheckCircle, Users, Shield } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Hiring Best Practices',
    title: 'Chef Hiring Best Practices: Skills, Credentials & Interview Guide',
    body: `<p>Hiring a private chef is one of the most important decisions for your villa stay or event. This advanced guide walks you through evaluating chef credentials, conducting effective interviews, assessing experience, and avoiding red flags.</p>
    <p>By the end, you'll have a systematic approach to vetting and selecting chefs who deliver consistent, world-class dining.</p>`,
  },
  {
    id: 'credentials',
    type: 'features' as const,
    subtitle: 'Qualifications',
    title: 'Essential Chef Credentials & Certifications',
    features: [
      { icon: Award, title: 'Culinary Training', desc: 'Culinary school (2–4 years), apprenticeships (2–5 years in Europe), or Michelin experience (3+ years).' },
      { icon: CheckCircle, title: 'Food Safety', desc: 'HACCP or equivalent certification (valid 2–3 years). Servsafe certification widely recognized. Local health permits required.' },
      { icon: Users, title: 'Professional Membership', desc: 'World Association of Chefs Societies (WACS) or local associations show professional standards and peer recognition.' },
      { icon: Shield, title: 'Experience', desc: 'Formal culinary training, 5+ years professional kitchen, Michelin background, references from past clients.' },
    ],
  },
  {
    id: 'specialties',
    type: 'content' as const,
    subtitle: 'Cuisine Focus',
    title: 'Culinary Specialties: Matching Skills to Your Needs',
    body: `<p><strong>French Classical:</strong> Sauces, knife work, plating finesse. Background: formal culinary school or France apprenticeship. Cost: IDR 2.25M–4.5M+/person. Skills: mother sauces, classical technique, plating philosophy.</p>
    <p><strong>Italian Regional:</strong> Pasta-making, risotto, regional specialties. Background: Italian culinary school or family heritage. Cost: IDR 1.5M–2.7M/person. Skills: pasta dough ratios, risotto technique, regional ingredients.</p>
    <p><strong>Asian (Japanese, Thai, Vietnamese, Chinese):</strong> Wok technique, flavor layering, ingredient knowledge. Background: training in home country or extensive Asian kitchen experience. Cost: IDR 1.2M–2.25M/person. Skills: knife skills, flavor balance, Asian ingredient sourcing.</p>
    <p><strong>Mediterranean (Spanish, Greek, Moroccan):</strong> Grilling, slow-cooking, spice knowledge. Background: Mediterranean culinary training. Cost: IDR 1.5M–2.4M/person. Skills: wood-fire cooking, spice blending, ingredient sourcing.</p>
    <p><strong>Contemporary/Fusion:</strong> Plating art, flavor experimentation, technical execution. Background: Michelin background or culinary school + experimentation. Cost: IDR 2.25M–3.75M+/person. Skills: inspiration sources, menu adaptation.</p>
    <p><strong>Dietary Specialists (Vegan, Keto, Gluten-Free):</strong> Vegetable-forward cooking, protein alternatives, nutritional knowledge. Background: culinary training + specialization. Cost: IDR 1.5M–3M/person. Skills: vegan protein ratios, richness without dairy, pastry expertise.</p>
    <p><strong>Pastry/Dessert:</strong> Baking, chocolate work, pastry dough. Background: formal pastry school (2+ years). Cost: IDR 1.2M–2.25M/person. Skills: favorite desserts, chocolate tempering, bread-making.</p>`,
  },
  {
    id: 'interview-questions',
    type: 'content' as const,
    subtitle: 'Vetting Questions',
    title: '20 Questions Every Client Should Ask a Chef',
    body: `<p><strong>About Culinary Background:</strong></p>
    <ol style="margin: 1rem 0; padding-left: 2rem;">
      <li>What's your formal culinary training? (Culinary school, apprenticeships, Michelin experience, self-taught years)</li>
      <li>Do you have food safety certifications? (HACCP, Servsafe, current permit)</li>
      <li>Which cuisines are your specialties? (2–3 areas of deep expertise)</li>
      <li>Can you describe your culinary style in 2–3 sentences? (Philosophy, technique-driven, flavor-forward, ingredient-focused, creative)</li>
    </ol>
    <p><strong>About Dietary & Flexibility:</strong></p>
    <ol style="margin: 1rem 0; padding-left: 2rem;" start="5">
      <li>How do you approach allergies and restrictions? (Proactive questioning, cross-contamination awareness, substitute knowledge)</li>
      <li>What if a guest reveals a new allergy mid-event? (Problem-solving ability, stress response, creativity under pressure)</li>
      <li>Do you work with local sourcing or prefer imported ingredients? (Budget, seasonality, preference for traditional or modern)</li>
      <li>Have you worked with large group dietary diversity before? (Critical if varied diets in group)</li>
    </ol>
    <p><strong>About Process & Workflow:</strong></p>
    <ol style="margin: 1rem 0; padding-left: 2rem;" start="9">
      <li>How do you plan menus — do you design or do we collaborate? (Preference for creative autonomy or input)</li>
      <li>What's your process for menu consultations? (Multiple conversations, questions about preferences, willingness to iterate)</li>
      <li>How do you handle ingredient sourcing? Do you shop or do we provide a budget? (Who controls costs, where sourcing happens)</li>
      <li>What happens if a key ingredient is unavailable last-minute? (Creativity, flexibility, stress management)</li>
    </ol>
    <p><strong>About Experience & Logistics:</strong></p>
    <ol style="margin: 1rem 0; padding-left: 2rem;" start="13">
      <li>How many guests have you cooked for at once? How many in a villa setting? (Critical: confirm they've handled your group size)</li>
      <li>Do you work with villa staff or do you prefer solo? (Will they integrate with existing team or work independently)</li>
      <li>What's your kitchen setup requirement? Do you need specific equipment? (Ensure villa kitchen meets their needs)</li>
      <li>How do you handle cleanup? Do you manage or coordinate with villa staff? (Clarify expectations)</li>
    </ol>
    <p><strong>About References & Verification:</strong></p>
    <ol style="margin: 1rem 0; padding-left: 2rem;" start="17">
      <li>Can you provide 2–3 references from recent clients I can call directly? (Non-negotiable: always call references)</li>
      <li>Have you ever had a client issue or complaint? How did you handle it? (Reveals honesty, problem-solving, accountability)</li>
      <li>Are you insured? Do you have liability coverage? (Protection for you and the chef)</li>
      <li>What's your cancellation policy if plans change? (Agree on terms upfront)</li>
    </ol>`,
  },
  {
    id: 'evaluation-framework',
    type: 'content' as const,
    subtitle: 'Assessment',
    title: 'Evaluating Chef Experience: Portfolio, References & Trial Meals',
    body: `<p><strong>Portfolio Review:</strong> Ask for sample menus, client photos, and video clips. Look for consistency in plating quality, creativity within cuisine, diverse menu progression, and professional food photography.</p>
    <p><strong>Reference Calling:</strong> Ask what the occasion was, how many guests, how the chef handled special requests or last-minute changes, how dietary issues were managed, whether you'd hire them again, any negatives or concerns. Red flags: hesitation, vague answers, "fine but...", unwillingness to be contacted again, mention of conflicts or unprofessionalism.</p>
    <p><strong>Trial Meal:</strong> Format: 1–2 dish preparation in your villa kitchen (1–2 hours), you taste and observe. Cost: often free or IDR 800K–1.6M minimal fee. Evaluate: cleanliness and workspace organization, knife work and pacing, communication and explanation of process, does food match expectations, do you enjoy being around them for 1–2 hours?</p>`,
  },
  {
    id: 'contract-red-flags',
    type: 'content' as const,
    subtitle: 'Final Steps',
    title: 'Contract & Red Flags When Hiring',
    body: `<p><strong>Essential Contract Components:</strong></p>
    <ul style="margin: 1rem 0; padding-left: 2rem;">
      <li>Dates, times, meals included, head count, dietary restrictions listed</li>
      <li>Finalized menu (or process for finalization), substitution policy, special requests procedures</li>
      <li>Per-person rate or flat fee, what's included (shopping, equipment, cleanup), payment schedule, surcharge triggers</li>
      <li>Cancellation fees, chef illness backup plan, force majeure rescheduling option</li>
      <li>Chef responsible for food safety, liability insurance details, health permit confirmation, allergen handling protocols</li>
      <li>Primary contact person, emergency contact (24-hour availability), dietary form deadline (1 week prior), final headcount deadline</li>
    </ul>
    <p><strong>Red Flags:</strong> No references or only written testimonials. No food safety certification. Unwilling to discuss allergies. No experience with your group size. Vague or non-responsive communication. No written contract or pricing ambiguity. Arrogant or inflexible ("My way only"). No portfolio or recent work samples. Demands full payment upfront (standard is 50% deposit, 50% final).</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Hire',
    title: 'Hire a Vetted Chef Using This Framework',
    body: 'Browse our screened chef profiles, apply these hiring best practices, and book with confidence.',
    primaryAction: { label: 'Browse Our Chefs', href: '/chefs' },
    secondaryAction: { label: 'Get Recommendations', href: '/contact' },
  },
]

const FAQS = [
  {
    question: "What's the minimum set of credentials I should require?",
    answer: 'Culinary training (formal school, apprenticeship, or 5+ years professional kitchen), food safety certification (HACCP or Servsafe), and references from 2–3 past clients (call them directly).',
  },
  {
    question: 'Should I always do a trial meal?',
    answer: "For high-stakes events (weddings, fine dining), yes. For casual group stays, it's optional but helpful if you're unsure about fit.",
  },
  {
    question: 'How important are Michelin credentials?',
    answer: 'Michelin experience signals precision and technique excellence, but not all skilled chefs have it. Strong references and a trial meal matter more than brand names.',
  },
  {
    question: "What if a chef's references are glowing but my gut says no?",
    answer: "Trust your gut. Chemistry and communication matter. If you don't feel comfortable, keep looking.",
  },
  {
    question: "Can I negotiate the chef's deposit amount?",
    answer: 'Yes, though 50% deposit / 50% final balance is standard. Discuss payment terms upfront as part of contract negotiation.',
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Explore available chefs and their credentials.' },
  { label: 'How to Hire a Chef', href: '/blog/how-to-hire-private-chef', desc: 'Complete beginner guide to hiring.' },
  { label: 'Fine Dining Guide', href: '/blog/fine-dining-guide', desc: 'Learn about fine dining experiences.' },
  { label: 'Contact Us', href: '/contact', desc: 'Discuss your needs with our team.' },
]

export default function ChefHiringGuidePage() {
  return (
    <PremiumPage
      slug="blog/chef-qualifications-credentials-bali-hiring"
      title="Chef Qualifications & Credentials: Hiring Guide for Bali Villas"
      description="Hire the right private chef in Bali. Learn what credentials to check, how to interview, key questions, and red flags when vetting a chef."
      seoTitle="Chef Qualifications & Credentials Bali | Private Chef Hiring Guide"
      seoDescription="Hire the right private chef in Bali. Learn what credentials to check, how to interview, key questions, and red flags when vetting a chef."
      canonicalUrl="https://mychef.id/blog/chef-qualifications-credentials-bali-hiring"
      h1="Chef Qualifications & Credentials: Hiring Guide for Bali"
      subtitle="Skills, Credentials & Interview Guide for Villa Stays"
      heroImage="/generated/mychef-catering-bali-hub-catering.webp"
      heroImageAlt="Professional chef credentials and interview process in Bali"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hub-catering.webp"
      keywords={['chef qualifications bali', 'private chef credentials bali', 'how to hire chef bali']}
      highlights={['Credentials', 'Interview Questions', 'Red Flags', 'Vetting Process']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Chef Qualifications Bali', 'https://mychef.id/blog/chef-qualifications-credentials-bali-hiring', 'Blog', 'https://mychef.id/blog'),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Chef Qualifications & Credentials: Hiring Guide for Bali Villas',
          description: 'Hire the right private chef in Bali. Learn what credentials to check, how to interview, key questions, and red flags when vetting a chef.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2025-04-01',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hub-catering.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/chef-qualifications-credentials-bali-hiring' },
          url: 'https://mychef.id/blog/chef-qualifications-credentials-bali-hiring',
        },
      ]}
      ctaText="Browse Vetted Chefs"
      ctaSubtext="Apply these hiring best practices to our pre-screened chef profiles."
    />
  )
}
