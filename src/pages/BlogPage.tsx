import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { BookOpen } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 'private-chef-cost-bali',
    title: 'How Much Does a Private Chef in Bali Cost? Complete 2026 Price Guide',
    excerpt: 'Real private chef prices in Bali — per-person rates, what is included, and how to budget. Pricing tiers from IDR 500k to 2M per person, with booking tips and FAQs.',
    date: 'June 20, 2026',
    readTime: '12 min read',
    href: '/blog/private-chef-cost-bali',
    image: '/generated/pricing-hero.webp',
    category: 'Pricing',
    keywords: ['private chef cost bali', 'private chef price bali', 'how much does a private chef cost in bali'],
  },
  {
    id: 'fine-dining-guide',
    title: 'Fine Dining in Bali: Ultimate Guide to Private Chef Tasting Menus',
    excerpt: 'Discover fine dining in Bali with private chefs. Curated tasting menus, wine pairings, and luxury culinary experiences for villa stays.',
    date: 'June 4, 2026',
    readTime: '8 min read',
    href: '/blog/fine-dining-guide',
    image: '/generated/fine-dining-plating.webp',
    category: 'Fine Dining',
    keywords: ['fine dining bali', 'private chef tasting menu', 'chef luna'],
  },
  {
    id: 'how-to-hire-private-chef',
    title: 'Complete Guide: How to Hire a Private Chef in Bali',
    excerpt: 'Learn how to hire a private chef in Bali. Compare costs, required qualifications, booking process, and find chefs for your villa stay.',
    date: 'June 10, 2026',
    readTime: '10 min read',
    href: '/blog/how-to-hire-private-chef',
    image: '/generated/chef-interview.webp',
    category: 'Hiring',
    keywords: ['hire private chef bali', 'chef qualifications', 'chef cost'],
  },
  {
    id: 'bali-catering-menu',
    title: 'Bali Catering Menus: Traditional & Modern Options for Your Villa',
    excerpt: 'Explore Bali catering menus for weddings, events, and group stays. Traditional Balinese, fusion, and international cuisine options.',
    date: 'June 11, 2026',
    readTime: '9 min read',
    href: '/blog/bali-catering-menu',
    image: '/generated/balinese-spread.webp',
    category: 'Catering',
    keywords: ['bali catering menu', 'balinese cuisine', 'fusion menu'],
  },
  {
    id: 'event-planning-bali',
    title: 'Event Planning in Bali: Complete Guide for Weddings & Private Celebrations',
    excerpt: 'Complete Bali event planning guide. Catering, staffing, venue setup, and timeline for weddings, corporate events, and celebrations.',
    date: 'June 12, 2026',
    readTime: '11 min read',
    href: '/blog/event-planning-bali',
    image: '/generated/bali-wedding-setup.webp',
    category: 'Events',
    keywords: ['event planning bali', 'bali wedding catering', 'private celebration'],
  },
  {
    id: 'chef-hiring-guide',
    title: 'Chef Hiring Best Practices: Skills, Credentials & Interview Guide',
    excerpt: 'Hire the right private chef. Learn what to look for in credentials, how to interview, ask key questions, and verify culinary expertise.',
    date: 'June 18, 2026',
    readTime: '10 min read',
    href: '/blog/chef-hiring-guide',
    image: '/generated/chef-credentials.webp',
    category: 'Hiring',
    keywords: ['chef credentials', 'chef interview questions', 'hire professional chef'],
  },
]

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'myCHEF Blog',
    title: 'Private Chef, Catering & Event Planning Insights for Bali',
    body: `<p>Discover guides, tips, and strategies for hiring private chefs, planning menus, and executing unforgettable private dining experiences in Bali. Whether you're planning a romantic dinner, a corporate retreat, or a villa celebration, our blog explores the skills, logistics, and decisions that make dining in private spaces work beautifully.</p>`,
  },
  {
    id: 'featured-posts',
    type: 'features' as const,
    subtitle: 'Latest Articles',
    title: 'Read the myCHEF Blog',
    features: BLOG_POSTS.map(post => ({
      icon: BookOpen,
      title: post.title,
      desc: `${post.excerpt} — ${post.category} • ${post.readTime}`,
    })),
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Hire?',
    title: 'Ready to Plan Your Private Dining Experience?',
    body: 'Browse our chefs, explore menu options, or contact our team to discuss your villa, guests, and culinary vision.',
    primaryAction: { label: 'Browse Chefs', href: '/chefs' },
    secondaryAction: { label: 'Contact Us', href: '/contact' },
  },
]

const FAQS = [
  {
    question: 'How often does myCHEF publish new blog content?',
    answer: 'We publish in-depth guides monthly, covering topics from fine dining to event planning, hiring practices, menu design, and villa hospitality logistics.',
  },
  {
    question: 'Can I find hiring tips in the blog?',
    answer: 'Yes. Our hiring guides cover credentials, interview questions, vetting processes, and what to look for when selecting a private chef for your stay.',
  },
  {
    question: 'Are there menu planning guides?',
    answer: 'Absolutely. Explore our catering menu guide for Balinese traditional, fusion, and international options suited to different event types and dietary needs.',
  },
  {
    question: "What if my question isn't answered in the blog?",
    answer: "Contact our team directly via WhatsApp or our contact form. We're happy to discuss your specific situation, villa, and culinary preferences.",
  },
]

const RELATED_PAGES = [
  { label: 'Browse Chefs', href: '/chefs', desc: 'Meet our lead private chefs and their specialties.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Explore premium tasting menus and chef experiences.' },
  { label: 'Catering', href: '/catering', desc: 'Full catering and menu options for groups and events.' },
  { label: 'Events', href: '/events', desc: 'Plan your wedding, celebration, or corporate retreat.' },
  { label: 'Contact', href: '/contact', desc: 'Chat with our team about your dates and preferences.' },
]

export default function BlogPage() {
  return (
    <PremiumPage
      slug="blog"
      title="myCHEF Blog"
      description="Private chef guides, catering tips, event planning strategies, and insider knowledge for planning unforgettable dining in Bali villas."
      seoTitle="myCHEF Blog | Private Chef Guides for Bali"
      seoDescription="Discover how to hire private chefs, plan menus, and execute world-class private dining in Bali villas. Expert guides and insider tips."
      canonicalUrl="https://mychef.id/blog"
      h1="The myCHEF Blog"
      subtitle="Insider guides, chef interviews, and private dining strategies for Bali villas."
      heroImage="/generated/mychef-location-bali-hub-hero.webp"
      heroImageAlt="Private chef guides and blog for Bali villas"
      ogImage="https://mychef.id/generated/mychef-location-bali-hub-hero.webp"
      keywords={['private chef blog', 'bali catering guide', 'event planning bali', 'chef hiring tips']}
      highlights={['Expert Guides', 'Chef Interviews', 'Menu Planning', 'Event Logistics']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Blog', 'https://mychef.id/blog'),
      ]}
      ctaText="Explore More Articles"
      ctaSubtext="From fine dining to event planning, our blog covers everything you need to know."
    />
  )
}
