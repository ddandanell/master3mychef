import { useEffect } from 'react'

interface SeoHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  extraMeta?: Array<{
    key: string
    name?: string
    property?: string
    content: string
  }>
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mychef.id/#business',
  name: 'myCHEF.id',
  description: 'Private chef, catering, events, and staffing services in Bali',
  url: 'https://mychef.id',
  telephone: '+62 811-3803-488',
  email: 'indonesia@mychef.id',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer',
    addressLocality: 'Denpasar Selatan',
    addressRegion: 'Bali',
    postalCode: '80226',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.6905,
    longitude: 115.2126,
  },
  areaServed: [
    { '@type': 'Place', name: 'Seminyak, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.6916, longitude: 115.1626 } },
    { '@type': 'Place', name: 'Canggu, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.6478, longitude: 115.1385 } },
    { '@type': 'Place', name: 'Ubud, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.5069, longitude: 115.2625 } },
    { '@type': 'Place', name: 'Uluwatu, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.8291, longitude: 115.0849 } },
    { '@type': 'Place', name: 'Nusa Dua, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.8004, longitude: 115.2313 } },
    { '@type': 'Place', name: 'Jimbaran, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.7862, longitude: 115.1669 } },
    { '@type': 'Place', name: 'Sanur, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.7063, longitude: 115.2631 } },
    { '@type': 'Place', name: 'Kuta, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.7183, longitude: 115.1677 } },
    { '@type': 'Place', name: 'Legian, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.7036, longitude: 115.1662 } },
    { '@type': 'Place', name: 'Pererenan, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.6365, longitude: 115.1241 } },
    { '@type': 'Place', name: 'Bukit Peninsula, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.8119, longitude: 115.1313 } },
    { '@type': 'Place', name: 'Denpasar, Bali', geo: { '@type': 'GeoCoordinates', latitude: -8.6705, longitude: 115.2126 } },
  ],
  priceRange: '$$$$',
  openingHours: 'Mo-Su 07:00-23:00',
  image: 'https://mychef.id/generated/hub-hero-v3.webp',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'HACCP Food Safety Certification',
    credentialCategory: 'Food Safety',
  },
}


const cateringProviderSchema = {
  '@type': 'FoodEstablishment',
  name: 'myCHEF.id',
  url: 'https://mychef.id',
  telephone: '+62 811-3803-488',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bali',
    addressCountry: 'ID',
  },
}

export function cateringServiceSchema(
  name: string,
  description: string,
  url: string,
  type: 'Service' | 'FoodService' = 'Service',
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    provider: cateringProviderSchema,
    areaServed: {
      '@type': 'Place',
      name: 'Bali, Indonesia',
    },
    url,
  }
}

export function cateringBreadcrumbSchema(currentName: string, currentUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id' },
      { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://mychef.id/catering' },
      { '@type': 'ListItem', position: 3, name: currentName, item: currentUrl },
    ],
  }
}

export function breadcrumbSchema(currentName: string, currentUrl: string, parentName?: string, parentUrl?: string) {
  const items: Record<string, unknown>[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
  ]
  if (parentName && parentUrl) {
    items.push({ '@type': 'ListItem', position: 2, name: parentName, item: parentUrl })
    items.push({ '@type': 'ListItem', position: 3, name: currentName, item: currentUrl })
  } else {
    items.push({ '@type': 'ListItem', position: 2, name: currentName, item: currentUrl })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  priceRange?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': 'https://mychef.id/#business' },
    areaServed: {
      '@type': 'Place',
      name: 'Bali, Indonesia',
    },
    ...(priceRange ? { priceRange } : {}),
  }
}

export function detailedServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'myCHEF.id',
      url: 'https://mychef.id',
      telephone: '+62 811-3803-488',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Bali, Indonesia',
    },
    url,
  }
}

export function offerSchema(
  name: string,
  price: number,
  priceCurrency: string = 'IDR',
  url?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    price: price.toString(),
    priceCurrency,
    availability: 'https://schema.org/InStock',
    url: url || 'https://mychef.id',
    seller: { '@id': 'https://mychef.id/#business' },
  }
}

export function faqPageSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

export function howToSchema(params: {
  name: string
  description: string
  steps: { name: string; text: string }[]
  totalTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    ...(params.totalTime ? { totalTime: params.totalTime } : {}),
    step: params.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export function eventSchema(params: {
  name: string
  description: string
  url: string
  eventType?: string
  lowPrice?: number
  priceCurrency?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': params.eventType ?? 'Event',
    name: params.name,
    description: params.description,
    url: params.url,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Your private villa, Bali',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Bali',
        addressCountry: 'ID',
      },
    },
    organizer: { '@id': 'https://mychef.id/#business' },
    ...(params.image ? { image: params.image } : {}),
    ...(params.lowPrice
      ? {
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: params.lowPrice.toString(),
            priceCurrency: params.priceCurrency ?? 'IDR',
            availability: 'https://schema.org/InStock',
            url: params.url,
          },
        }
      : {}),
  }
}

// NOTE: Self-serving AggregateRating on LocalBusiness/Organization is ineligible for Google
// review-snippet rich results and is flagged "invalid" in Search Console, so the rating was
// removed. This now returns the LocalBusiness entity only. Args kept for call-site compatibility.
export function aggregateRatingSchema(_ratingValue: number, _reviewCount: number) {
  return null as any
}

export function organizationSchema(
  logoUrl: string,
  sameAs: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://mychef.id/#organization',
    name: 'myCHEF.id',
    url: 'https://mychef.id',
    logo: logoUrl,
    sameAs,
  }
}

export function blogPostingSchema(params: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  wordCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.headline,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    ...(params.dateModified ? { dateModified: params.dateModified } : {}),
    author: {
      '@type': 'Person',
      name: params.author || 'myCHEF Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'myCHEF',
      url: 'https://mychef.id',
      logo: { '@type': 'ImageObject', url: 'https://mychef.id/mychef-logo.svg' },
    },
    ...(params.image ? { image: params.image } : {}),
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  }
}

export function locationOfferSchema(
  locationName: string,
  priceRange: string = '$$$$',
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `Private Chef ${locationName}`,
    description: `Private chef services in ${locationName}, Bali.`,
    priceRange,
    availability: 'https://schema.org/InStock',
    url,
    seller: { '@id': 'https://mychef.id/#business' },
    areaServed: {
      '@type': 'Place',
      name: `${locationName}, Bali`,
    },
  }
}

export function menuSchema(
  name: string,
  description: string,
  url: string,
  items: { name: string; description?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name,
    description,
    url,
    hasMenuSection: items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

// Sets per-route document.title, meta description, canonical, OG tags, and an
// optional robots noindex directive. Works for a Vite SPA — Google executes JS.
// For first-contentful-html SEO add vite-plugin-ssg later (see SEO-PAGES-PLAN.md).
export default function SeoHead({ title, description, canonical, ogImage, ogType = 'website', noindex, jsonLd, extraMeta = [] }: SeoHeadProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta(`meta[name="description"]`, 'name', 'description', description)
    setMeta(`meta[property="og:title"]`, 'property', 'og:title', title)
    setMeta(`meta[property="og:description"]`, 'property', 'og:description', description)
    setMeta(`meta[property="og:type"]`, 'property', 'og:type', ogType)
    setMeta(`meta[property="og:site_name"]`, 'property', 'og:site_name', 'myCHEF.id')
    setMeta(`meta[property="og:locale"]`, 'property', 'og:locale', 'en_US')
    setMeta(`meta[name="twitter:card"]`, 'name', 'twitter:card', 'summary_large_image')
    setMeta(`meta[name="twitter:title"]`, 'name', 'twitter:title', title)
    setMeta(`meta[name="twitter:description"]`, 'name', 'twitter:description', description)

    setMeta(
      `meta[name="robots"]`,
      'name',
      'robots',
      noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'
    )

    if (ogImage) {
      setMeta(`meta[property="og:image"]`, 'property', 'og:image', ogImage)
      setMeta(`meta[name="twitter:image"]`, 'name', 'twitter:image', ogImage)
    }

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      setMeta(`meta[property="og:url"]`, 'property', 'og:url', canonical)
      setMeta(`meta[name="twitter:url"]`, 'name', 'twitter:url', canonical)
    }

    extraMeta.forEach(({ name, property, content }) => {
      if (name) {
        setMeta(`meta[name="${name}"]`, 'name', name, content)
      }

      if (property) {
        setMeta(`meta[property="${property}"]`, 'property', property, content)
      }
    })

    // Inject JSON-LD schemas
    document.head.querySelectorAll('script[data-seohead="jsonld"]').forEach((el) => el.remove())

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      schemas.filter(Boolean).forEach((schema) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seohead', 'jsonld')
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
      })
    }

    return () => {
      document.head.querySelectorAll('script[data-seohead="jsonld"]').forEach((el) => el.remove())
    }
  }, [title, description, canonical, ogImage, ogType, noindex, jsonLd, extraMeta])

  return null
}
