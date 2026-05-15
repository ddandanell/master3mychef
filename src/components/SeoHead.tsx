import { useEffect } from 'react'

interface SeoHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mychef.id/#business',
  name: 'myCHEF.id',
  description: 'Private chef, catering, events, and staffing services in Bali',
  url: 'https://mychef.id',
  telephone: '+62-822-3756-5997',
  email: 'hello@mychef.id',
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
  priceRange: '$$$$',
  openingHours: 'Mo-Su 07:00-23:00',
  image: 'https://mychef.id/generated/hub-hero-v3.webp',
}


const cateringProviderSchema = {
  '@type': 'FoodEstablishment',
  name: 'myCHEF.id',
  url: 'https://mychef.id',
  telephone: '+62-822-3756-5997',
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
      telephone: '+62-822-3756-5997',
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

export function aggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
  }
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
export default function SeoHead({ title, description, canonical, ogImage, noindex, jsonLd }: SeoHeadProps) {
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
    }

    // Inject JSON-LD schemas
    document.head.querySelectorAll('script[data-seohead="jsonld"]').forEach((el) => el.remove())

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      schemas.forEach((schema) => {
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
  }, [title, description, canonical, ogImage, noindex, jsonLd])

  return null
}
