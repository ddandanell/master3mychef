import { useState } from 'react'
import { buildWhatsAppUrlForPath, isCookingClassPath } from '@/lib/whatsapp'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, MessageCircle, LogIn, MapPin, Mail, ChefHat, ChevronDown, ExternalLink } from 'lucide-react'
import { PILLARS, LOCATIONS, PRIMARY_NAV, PRIMARY_CTA, hasLocationPage } from '@/data/siteArchitecture'
import { siteFacts } from '@/data/siteFacts'

// Top Bali locations shown by default — chosen by traffic + villa density
const TOP_LOCATION_SLUGS = ['seminyak', 'canggu', 'uluwatu', 'ubud', 'nusa-dua']

export default function Footer() {
  const { pathname } = useLocation()
  const waHref = buildWhatsAppUrlForPath(pathname, {
    serviceName: 'private chef or catering service in Bali',
    intent: 'help choosing the right service and getting pricing',
  })
  const pillars = Object.values(PILLARS)
  const allLocations = Object.values(LOCATIONS)
  const topLocations = TOP_LOCATION_SLUGS.map(s => allLocations.find(l => l.slug === s)).filter(Boolean)
  const [showAllLocations, setShowAllLocations] = useState(false)
  const visibleLocations = showAllLocations ? allLocations : topLocations

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A0A] to-black text-white pt-20 pb-8 noise-pattern overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A028]/30 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Brand row - Enhanced with better visual hierarchy */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16 pb-12 border-b border-white/5">
          <div className="lg:max-w-md">
            <Link to="/" aria-label="myCHEF home" className="inline-flex items-center gap-3 mb-4 group focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              <div className="p-2 bg-[#C5A028]/10 rounded-lg">
                <ChefHat className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#C5A028]">CHEF</span>
              </h3>
            </Link>
            <p className="text-base text-white/70 leading-relaxed mb-6">
              Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/mychef.id"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#C5A028]/20 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/70 hover:text-[#C5A028]" />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                data-source="footer-social"
                className="p-2.5 bg-white/5 hover:bg-[#C5A028]/20 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white/70 hover:text-[#C5A028]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-3 font-semibold">Contact Us</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="footer-top"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold bg-[#C5A028] text-black px-6 py-3.5 rounded-full hover:bg-[#D4B033] transition-all shadow-lg shadow-[#C5A028]/20 hover:shadow-xl hover:shadow-[#C5A028]/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp {siteFacts.phoneDisplay}
                </a>
                <a
                  href={`tel:${siteFacts.phoneHref}`}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold border border-white/20 text-white px-6 py-3.5 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`Call ${siteFacts.phoneDisplay}`}
                >
                  Call {siteFacts.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href={`mailto:${siteFacts.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C5A028] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {siteFacts.email}
              </a>
              <a
                href={siteFacts.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 hover:text-[#C5A028] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  <span className="block text-white/80">{siteFacts.addressDisplay}</span>
                  <span className="inline-flex items-center gap-1 text-white/50 text-xs mt-0.5">
                    Google Business Profile <ExternalLink className="w-3 h-3 opacity-60" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap grid - Enhanced with better spacing and hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 py-12">
          {pillars.map((pillar) => (
            <div key={pillar.slug} className="group">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">
                {pillar.navLabel}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={pillar.url}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                  >
                    {pillar.navLabel} overview
                  </Link>
                </li>
                {pillar.subPages.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        to={`${pillar.url}/${sub.slug}`}
                        className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                {pillar.slug === 'fine-dining' && (
                  <li>
                    <Link
                      to="/michelin-private-chef-bali-prices"
                      className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                    >
                      Michelin Private Chef
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Top Experiences</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/villa-bbq-catering-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Villa BBQ Nights
                </Link>
              </li>
              <li>
                <Link to="/bali-wedding-catering-packages" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Wedding Packages
                </Link>
              </li>
              <li>
                <Link to="/events/weddings" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Wedding Catering
                </Link>
              </li>
              <li>
                <Link to="/michelin-private-chef-bali-prices" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Michelin Chef Prices
                </Link>
              </li>
              <li>
                <Link to="/fine-dining/tasting-menu" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Tasting Menus
                </Link>
              </li>
              <li>
                <Link to="/fine-dining/chefs-table" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Chef Table Experience
                </Link>
              </li>
              <li>
                <Link to="/luxury-birthday-party-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Villa Birthday Parties
                </Link>
              </li>
              <li>
                <Link to="/seafood-bbq-catering-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Seafood BBQ Catering
                </Link>
              </li>
              <li>
                <Link to="/group-villa-dinner-packages-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Group Villa Dinners
                </Link>
              </li>
              <li>
                <Link to="/private-chef-for-events" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Chef for Events
                </Link>
              </li>
              <li>
                <Link to="/proposal-dinner" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Proposal Dinners
                </Link>
              </li>
              <li>
                <Link to="/honeymoon-chef" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Honeymoon Chef
                </Link>
              </li>
              <li>
                <Link to="/catering/floating-breakfast" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Chef Breakfast
                </Link>
              </li>
              <li>
                <Link to="/corporate-retreat-catering-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Corporate Retreat Catering
                </Link>
              </li>
              <li>
                <Link to="/private-chef-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Chef Bali
                </Link>
              </li>
              <li>
                {/* /villa-staff-bali-agency 301s to this URL (vercel.json) — link direct to avoid a sitewide redirect hop. */}
                <Link to="/staffing/villa-staff" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Villa Staff Agency
                </Link>
              </li>
              <li>
                <Link to="/butler-service-bali-daily-rate" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Butler Service
                </Link>
              </li>
              <li>
                <Link to="/luxury-chef-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Luxury Chef Indonesia
                </Link>
              </li>
              <li>
                <Link to="/best-private-chef-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Best Private Chef Indonesia
                </Link>
              </li>
              <li>
                <Link to="/private-dining-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Dining Indonesia
                </Link>
              </li>
              <li>
                <Link to="/wedding-catering-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Wedding Catering Indonesia
                </Link>
              </li>
              <li>
                <Link to="/healthy-meal-delivery-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Healthy Meal Delivery
                </Link>
              </li>
              <li>
                <Link to="/chef-for-hire-indonesia" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Chef for Hire Indonesia
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Menus</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/three-course" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Three-Course Dining
                </Link>
              </li>
              <li>
                <Link to="/bbq-grill" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  BBQ Grill Experience
                </Link>
              </li>
              <li>
                <Link to="/kids-menus" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Kids' Menus
                </Link>
              </li>
              <li>
                <Link to="/dining-styles" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Dining Styles
                </Link>
              </li>
              <li>
                <Link to="/family-styling" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Family Styling Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/locations"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  All Areas
                </Link>
              </li>
              {visibleLocations.filter((loc): loc is NonNullable<typeof loc> => !!loc && hasLocationPage(loc.slug)).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                  >
                    {loc.label}
                  </Link>
                </li>
              ))}
              {!showAllLocations && (
                <li>
                  <button
                    onClick={() => setShowAllLocations(true)}
                    className="flex items-center gap-1 text-xs text-[#C5A028]/70 hover:text-[#C5A028] transition-colors mt-1 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1 group/btn"
                    aria-label="Show all locations"
                  >
                    <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" />
                    See all areas
                  </button>
                </li>
              )}
              {showAllLocations && (
                <>
                  <li className="pt-2 border-t border-white/5">
                    <span className="text-sm text-white/40">
                      All Bali areas served
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Planning Guides</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/help/pricing"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/help/menu-guide"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Menu Planning
                </Link>
              </li>
              <li>
                <Link
                  to="/help/wedding-guide"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Wedding Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/help/corporate-guide"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Corporate Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/help/staffing-guide"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Staffing Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  myCHEF Journal
                </Link>
              </li>
            </ul>
          </div>

          <div className="group">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A028] mb-5 font-bold group-hover:text-[#D4B033] transition-colors">Who We Serve</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/restaurant-kitchen-solutions" className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  B2B Restaurant Solution
                </Link>
              </li>
              <li>
                <Link to="/bar-services/" className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  B2B Bar Solution
                </Link>
              </li>
              {/* The five per-segment anchors (#hotels, #villas, #beach-clubs, #restaurants,
                  #events) were removed 2026-08-05. All 22 /bar-services/ URLs are deliberately
                  excluded from the sitemap (owner decision 2026-07-28, unproven line) to protect
                  crawl budget for the /private-chef/ area pages — but the footer was pushing six
                  sitewide links at that cluster from all 243 pages, working against that decision.
                  One entry point is enough; the hub links onward to every segment. */}
            </ul>
          </div>

        </div>

        {/* Secondary nav row - Enhanced with better visual separation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-8 border-y border-white/5 text-sm text-white/50">
          {PRIMARY_NAV.filter((n) => !['Fine Dining', 'Events & Catering', 'Events', 'In-Villa Service', 'Staffing'].includes(n.label)).map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="hover:text-[#C5A028] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C5A028] hover:after:w-full after:transition-all focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/services" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Services</Link>
          <Link to="/bar-services/" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">B2B Bar Solution</Link>
          <Link to="/recommended-services" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Recommended</Link>
          <Link to="/pricing" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Pricing</Link>
          <Link to="/calculator" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Price Calculator</Link>
          <Link to="/faq" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">FAQ</Link>
          <Link to="/reviews" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Reviews</Link>
          <Link to="/why-mychef" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Why myCHEF</Link>
          <Link to="/press" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Press</Link>
          <Link to="/join-our-team" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Join the Team</Link>
          <Link to="/certified-partner" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Partner Platform</Link>
          <Link to="/certified-partner" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Certified Partner</Link>
          <Link to="/journal" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Journal</Link>
          <Link to="/journal" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Blog & Guides</Link>
          {isCookingClassPath(pathname) ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-source="footer-book-now-cooking-class"
              className="px-4 py-1.5 bg-[#C5A028]/10 text-[#C5A028] font-semibold rounded-full hover:bg-[#C5A028] hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              Book Now
            </a>
          ) : (
            <Link
              to={PRIMARY_CTA.href}
              className="px-4 py-1.5 bg-[#C5A028]/10 text-[#C5A028] font-semibold rounded-full hover:bg-[#C5A028] hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              Book Now
            </Link>
          )}
        </div>

        {/* Staff login + legal - Enhanced layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            to="/certified-partner"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 hover:text-[#C5A028] transition-all px-5 py-2.5 rounded-full border border-white/10 hover:border-[#C5A028]/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <LogIn className="w-4 h-4" /> Staff Login
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/55">
            <Link to="/terms" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Terms of Service</Link>
            <span className="text-white/20">•</span>
            <Link to="/privacy" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/cancellation" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Cancellation Policy</Link>
          </div>
        </div>

        {/* Global presence */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 border-t border-white/5">
          <span className="text-xs text-white/55 uppercase tracking-[0.15em]">Part of Global Catering</span>
          <span className="hidden sm:block text-white/20">·</span>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-white/50">
              <MapPin className="w-3 h-3 text-[#C5A028]/60" />
              Bali, Indonesia
              <span className="text-white/55 ml-1 font-medium text-white/50">mychef.id</span>
            </span>
            <span className="text-white/20">·</span>
            <a
              href="https://www.mychef.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
            >
              <MapPin className="w-3 h-3 text-[#C5A028]/60" />
              Dubai, UAE
              <span className="text-white/55 group-hover:text-[#C5A028] ml-1 font-medium">mychef.ae</span>
            </a>
          </div>
        </div>

        {/* Copyright - Enhanced with decorative element */}
        <div className="relative py-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
          <p className="text-xs text-white/55 text-center">
            &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
    </footer>
  )
}
