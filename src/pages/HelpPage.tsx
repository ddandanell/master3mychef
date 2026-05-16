import { Link } from 'react-router-dom'
import { Search, BookOpen, Zap, Settings, Users, Heart, MessageCircle, ChevronRight } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'

const SITE = 'https://mychef.id'

interface GuideCard {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  link: string
  category: string
  readTime: string
}

const GUIDES: GuideCard[] = [
  {
    title: 'Getting Started: First Booking',
    description: 'Step-by-step walkthrough for booking your first private chef or catering service in Bali.',
    icon: Zap,
    link: '/help/getting-started',
    category: 'Booking',
    readTime: '5 min',
  },
  {
    title: 'Pricing Breakdown',
    description: 'Understand all costs, what is included, and how to budget for your event.',
    icon: Heart,
    link: '/help/pricing',
    category: 'Pricing',
    readTime: '4 min',
  },
  {
    title: 'Menu Selection Guide',
    description: 'How to choose a menu, customize courses, and handle dietary preferences.',
    icon: BookOpen,
    link: '/help/menu-guide',
    category: 'Menus',
    readTime: '6 min',
  },
  {
    title: 'Planning a Villa Wedding',
    description: 'Complete guide to planning a wedding dinner at your Bali villa, from proposal to cleanup.',
    icon: Heart,
    link: '/help/wedding-guide',
    category: 'Events',
    readTime: '8 min',
  },
  {
    title: 'Corporate & Team Retreat Planning',
    description: 'How to plan team meals, multi-day retreat catering, and event logistics.',
    icon: Users,
    link: '/help/corporate-guide',
    category: 'Events',
    readTime: '7 min',
  },
  {
    title: 'In-Villa Staffing & Service',
    description: 'Waiters, bartenders, butlers — roles, hiring, and how our team integrates with your villa.',
    icon: Users,
    link: '/help/staffing-guide',
    category: 'Staffing',
    readTime: '6 min',
  },
  {
    title: 'Managing Your Booking',
    description: 'After you book: communicate with chefs, make changes, and prepare your villa.',
    icon: Settings,
    link: '#',
    category: 'Post-Booking',
    readTime: '5 min',
  },
  {
    title: 'Common Questions',
    description: 'Answers to the most frequently asked questions about myCHEF services.',
    icon: MessageCircle,
    link: '/faq',
    category: 'FAQ',
    readTime: '3 min',
  },
]

const QUICK_ANSWERS = [
  { q: 'How do I book?', a: 'Message us on WhatsApp — we reply within 1 hour.', link: '/help/getting-started' },
  { q: "What's included in the price?", a: 'Chef team, ingredients, setup, service, and cleanup.', link: '/help/pricing' },
  { q: 'Can you do dietary needs?', a: 'Yes — vegan, gluten-free, halal, allergies, all supported.', link: '/help/menu-guide' },
  { q: 'Do you cater weddings?', a: 'Yes — up to 200 guests with full planning support.', link: '/help/wedding-guide' },
]

export default function HelpPage() {
  const canonical = `${SITE}/help`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Help & Guides | myCHEF Bali Support Center"
        description="Comprehensive guides, FAQs, and support for booking private chefs, catering, events and villa staffing in Bali."
        canonical={canonical}
        ogImage="/og-image.webp"
        jsonLd={[
          breadcrumbSchema('Help', canonical, 'Home', SITE),
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-light text-white mb-6">Help & Support Center</h1>
          <p className="text-xl text-white/70 mb-12">Guides, answers, and everything you need to book and manage your myCHEF experience.</p>

          {/* Quick Search */}
          <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur max-w-md mx-auto border border-white/20">
            <Search size={20} className="text-white/50" />
            <input
              type="text"
              placeholder="Search guides..."
              className="bg-transparent text-white placeholder-white/50 flex-1 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="border-t border-[#DDD] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-light mb-12">Quick Answers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {QUICK_ANSWERS.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="p-6 border border-[#DDD] rounded-lg hover:border-[#C5A028] hover:bg-[#FAFAF8] transition group"
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-[#1A1A1A]">
                  {item.q}
                  <ChevronRight size={18} className="text-[#C5A028] opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="text-[#666]">{item.a}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">All Guides</h2>
          <p className="text-lg text-[#666] mb-12">Browse detailed guides for every stage of your booking and event.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {GUIDES.map((guide, i) => {
              const Icon = guide.icon
              return (
                <Link
                  key={i}
                  to={guide.link}
                  className="p-8 border border-[#DDD] rounded-lg hover:border-[#C5A028] hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Icon size={24} className="text-[#C5A028]" />
                    </div>
                    <span className="text-xs font-semibold text-[#999] uppercase tracking-wide">{guide.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-[#666] mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#EEE]">
                    <span className="text-xs text-[#999]">{guide.readTime} read</span>
                    <ChevronRight className="w-5 h-5 text-[#C5A028]" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light mb-6">Didn't find what you need?</h2>
          <p className="text-white/70 mb-8">Message us directly on WhatsApp — we reply within 1 hour.</p>
          <a
            href="https://wa.me/6282237565997?text=Hi%20myCHEF%2C%20I%20have%20a%20question..."
            className="inline-block px-8 py-3 bg-[#C5A028] text-black rounded-full font-semibold hover:bg-[#D4B833] transition"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
