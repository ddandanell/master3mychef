import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Compass, MessageCircle, Sparkles } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from '@/components/SeoHead'
import { Button } from '@/components/ui/button'

const WA = '6282237565997'

const QUICK_LINKS = [
  {
    label: 'Home',
    href: '/',
    desc: 'Start again from the main myCHEF experience.',
  },
  {
    label: 'Fine Dining',
    href: '/fine-dining',
    desc: 'Private tasting menus for intimate villa evenings.',
  },
  {
    label: 'Events',
    href: '/events',
    desc: 'Villa parties, weddings, and celebrations in Bali.',
  },
  {
    label: 'Contact',
    href: '/contact',
    desc: 'Speak with the concierge team directly.',
  },
]

export default function NotFoundPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(
    "Hi myCHEF, I got a 404 page and need help finding the right service.",
  )}`

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5F3EE] text-[#1A1916]">
      <SeoHead
        title="Page Not Found | myCHEF — Private Chef Bali"
        description="The page you are looking for does not exist. Explore fine dining, events, villa catering, and contact options with myCHEF."
        noindex
        ogImage="/og-image.webp"
        jsonLd={[breadcrumbSchema('404', 'https://mychef.id/404')]}
      />

      <div className="absolute inset-0 opacity-80">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 20% 20%, rgba(197,160,40,0.18), transparent 38%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 80% 30%, rgba(26,25,22,0.08), transparent 34%)' }}
        />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[#6B675F] transition-colors hover:text-[#1A1916]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <section>
              <p className="font-playfair text-[5.5rem] leading-none text-[#C5A028] md:text-[9rem]">404</p>
              <p className="mt-4 text-xs uppercase tracking-[0.4em] text-[#8A857D]">Page not found</p>
              <h1 className="mt-6 font-playfair text-5xl leading-tight text-[#1A1916] md:text-7xl">
                This page took a holiday in Bali
              </h1>
              <p className="mt-6 max-w-[640px] text-lg leading-8 text-[#4A4745] md:text-xl">
                It seems the page you're looking for has gone off the grid. Let us help you find what you need.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="primary" size="brand" className="w-full sm:w-auto">
                  <Link to="/">
                    Back to Home
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="brand" className="w-full sm:w-auto">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Still lost? Chat with us directly
                  </a>
                </Button>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C5A028]/20 bg-white/70 px-5 py-3 text-sm text-[#4A4745] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[#C5A028]" />
                No worries — even beautiful Bali routes sometimes wander.
              </div>
            </section>

            <aside className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-10">
              <div className="flex items-center gap-3 text-[#C5A028]">
                <Compass className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Quick links</span>
              </div>
              <h2 className="mt-4 font-playfair text-3xl text-[#1A1916]">A few better places to land</h2>
              <div className="mt-8 space-y-4">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-[#E7E2D8] bg-[#F8F6F0] px-5 py-5 transition-all hover:border-[#C5A028]/50 hover:bg-white"
                  >
                    <div>
                      <h3 className="font-semibold text-[#1A1916] transition-colors group-hover:text-[#C5A028]">
                        {link.label}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#6B675F]">{link.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-[#1A1916] px-6 py-6 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028]">WhatsApp fallback</p>
                <p className="mt-3 text-lg leading-7 text-white/80">Still lost? Chat with us directly and we will point you to the right page fast.</p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A028]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
