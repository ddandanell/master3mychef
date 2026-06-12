import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, LogIn, MapPin, Mail, ChefHat, ChevronDown } from 'lucide-react'
import { PILLARS, LOCATIONS, PRIMARY_NAV, PRIMARY_CTA } from '@/data/siteArchitecture'

// Top Bali locations shown by default — chosen by traffic + villa density
const TOP_LOCATION_SLUGS = ['seminyak', 'canggu', 'uluwatu', 'ubud', 'nusa-dua']

export default function Footer() {
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
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#C5A028]/10 rounded-lg">
                <ChefHat className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                my<span className="text-[#C5A028]">CHEF</span>
              </h3>
            </div>
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
                href="https://wa.me/491635080236"
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
              <a
                href="https://wa.me/491635080236?text=Hi%20myCHEF"
                target="_blank"
                rel="noopener noreferrer"
                data-source="footer-top"
                className="inline-flex items-center gap-2.5 text-sm font-semibold bg-[#C5A028] text-black px-6 py-3.5 rounded-full hover:bg-[#D4B033] transition-all shadow-lg shadow-[#C5A028]/20 hover:shadow-xl hover:shadow-[#C5A028]/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="w-4 h-4" /> +49 163 5080236
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:indonesia@mychef.id"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C5A028] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                indonesia@mychef.id
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" />
                Bali, Indonesia
              </div>
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
                    Overview
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
                  Wedding Catering
                </Link>
              </li>
              <li>
                <Link to="/michelin-private-chef-bali-prices" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Michelin Chef Prices
                </Link>
              </li>
              <li>
                <Link to="/private-tasting-menu-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Private Tasting Menus
                </Link>
              </li>
              <li>
                <Link to="/chef-table-experience-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Chef Table Experience
                </Link>
              </li>
              <li>
                <Link to="/luxury-birthday-party-bali" className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                  Villa Birthday Parties
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
              {visibleLocations.map((loc) => loc && (
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
                    <Link
                      to="/jakarta"
                      className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                    >
                      Jakarta
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/surabaya"
                      className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                    >
                      Surabaya
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bandung"
                      className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                    >
                      Bandung
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/yogyakarta"
                      className="text-sm text-white/50 hover:text-white hover:translate-x-1 inline-block transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                    >
                      Yogyakarta
                    </Link>
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
          <Link to="/pricing" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Pricing</Link>
          <Link to="/calculator" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Price Calculator</Link>
          <Link to="/faq" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">FAQ</Link>
          <Link to="/reviews" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Reviews</Link>
          <Link to="/why-mychef" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Why myCHEF</Link>
          <Link to="/press" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Press</Link>
          <Link to="/join-our-team" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Join the Team</Link>
          <Link to="/partner-platform" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Partner Platform</Link>
          <Link to="/journal" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Journal</Link>
          <Link to="/blog" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Blog & Guides</Link>
          <Link
            to={PRIMARY_CTA.href}
            className="px-4 py-1.5 bg-[#C5A028]/10 text-[#C5A028] font-semibold rounded-full hover:bg-[#C5A028] hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            Book Now
          </Link>
        </div>

        {/* Staff login + legal - Enhanced layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            to="/partner-platform"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#C5A028] transition-all px-5 py-2.5 rounded-full border border-white/10 hover:border-[#C5A028]/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <LogIn className="w-4 h-4" /> Staff Login
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <Link to="/terms" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Terms of Service</Link>
            <span className="text-white/20">•</span>
            <Link to="/privacy" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link to="/cancellation" className="hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-0.5">Cancellation Policy</Link>
          </div>
        </div>

        {/* Copyright - Enhanced with decorative element */}
        <div className="relative py-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
          <p className="text-xs text-white/30 text-center">
            &copy; {new Date().getFullYear()} myCHEF.id. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A028]/20 to-transparent" />
    </footer>
  )
}
