// Static slug lists for route registration in App.tsx.
// These are defined separately so App.tsx does NOT need to import the full
// sitemap.ts (which contains ~46 kB of article HTML content). The content
// is only imported inside the lazy-loaded LandingPage component.

export const LANDING_PAGE_SLUGS: string[] = [
  'best-private-chef-indonesia',
  'private-chef-for-events',
  'luxury-chef-indonesia',
  'wedding-catering-indonesia',
  'private-dining-indonesia',
  'healthy-meal-delivery-indonesia',
  'private-chef-booking-indonesia',
  'chef-for-hire-indonesia',
  'proposal-dinner',
  'honeymoon-chef',
  'private-chef-breakfast-bali',
  'private-chef-cost-per-day-bali',
  'private-chef-cost-bali',
  'private-chef-menteng',
]

export const GUIDE_SLUGS: string[] = [
  'guide/bali-cuisine-glossary',
  'guide/private-chef-bali',
]

export const BLOG_POST_SLUGS: string[] = [
  'blog/private-chef-bali-cost-breakdown-2026',
  'blog/best-bali-villas-private-chef-kitchen',
  'blog/wedding-rehearsal-dinner-bali',
  'blog/yoga-retreat-chef-bali-meal-planning',
  'blog/private-chef-vs-restaurant-bali',
]

export const SERVICE_SLUGS: string[] = [
  'villa-parties',
  'romantic-dinners',
  'birthday-celebrations',
  'family-reunions',
  'corporate-events',
  'wedding-celebrations',
  'cooking-classes',
  'weekly-meal-prep',
]

export const MENU_SLUGS: string[] = [
  'mediterranean',
  'balinese',
  'asian-fusion',
  'vegan',
  'modern-european',
  'halal',
]

export const AREA_SLUGS: { slug: string; name: string }[] = [
  { slug: 'seminyak', name: 'Seminyak' },
  { slug: 'canggu', name: 'Canggu' },
  { slug: 'ubud', name: 'Ubud' },
  { slug: 'sanur', name: 'Sanur' },
  { slug: 'nusa-dua', name: 'Nusa Dua' },
  { slug: 'uluwatu', name: 'Uluwatu' },
  { slug: 'jimbaran', name: 'Jimbaran' },
  { slug: 'kuta', name: 'Kuta' },
  { slug: 'legian', name: 'Legian' },
  { slug: 'kerobokan', name: 'Kerobokan' },
  { slug: 'petitenget', name: 'Petitenget' },
  { slug: 'berawa', name: 'Berawa' },
  { slug: 'pererenan', name: 'Pererenan' },
  { slug: 'bukit', name: 'Bukit Peninsula' },
  { slug: 'tanah-lot', name: 'Tanah Lot' },
  { slug: 'tabanan', name: 'Tabanan' },
  { slug: 'denpasar', name: 'Denpasar' },
  { slug: 'gianyar', name: 'Gianyar' },
  { slug: 'tegallalang', name: 'Tegallalang' },
  { slug: 'amed', name: 'Amed' },
  { slug: 'lovina', name: 'Lovina' },
  { slug: 'candidasa', name: 'Candidasa' },
  { slug: 'padang-bai', name: 'Padang Bai' },
  { slug: 'ungasan', name: 'Ungasan' },
  { slug: 'pecatu', name: 'Pecatu' },
]

export const MICRO_AREA_SLUGS: { slug: string; name: string }[] = [
  { slug: 'echo-beach-private-chef', name: 'Echo Beach' },
  { slug: 'batu-bolong-private-chef', name: 'Batu Bolong' },
  { slug: 'bingin-private-chef', name: 'Bingin' },
  { slug: 'balangan-private-chef', name: 'Balangan' },
  { slug: 'medewi-private-chef', name: 'Medewi' },
  { slug: 'nyang-nyang-private-chef', name: 'Nyang Nyang' },
  { slug: 'green-bowl-private-chef', name: 'Green Bowl' },
  { slug: 'dreamland-private-chef', name: 'Dreamland' },
]
