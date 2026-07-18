export interface BarService {
  slug: string
  route: string
  metaKey: string
  eyebrow: string
  h1: string
  heroImage: string
  heroAlt: string
  bodyImage: string
  bodyAlt: string
  valueProp: string
  whatsappMessage: string
  problem: {
    title: string
    paragraphs: string[]
  }
  deliverables: {
    title: string
    description: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  included: string[]
  proof: {
    title: string
    items: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
  relatedResources: string[]
}

export interface BarResource {
  slug: string
  route: string
  metaKey: string
  title: string
  h1: string
  featuredImage: string
  featuredAlt: string
  summary: string
  content: { heading?: string; paragraphs: string[] }[]
  relatedServices: string[]
}

export interface BarServiceGroup {
  title: string
  services: string[] // slugs
}

export interface BarServicesHubData {
  hero: {
    eyebrow: string
    h1: string
    description: string
    heroImage: string
    heroAlt: string
  }
  groups: BarServiceGroup[]
  whyUs: {
    title: string
    items: { title: string; description: string }[]
  }
  process: { step: number; title: string; description: string }[]
  proof: { title: string; items: string[] }
}
