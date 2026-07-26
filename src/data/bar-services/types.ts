export interface BarService {
  slug: string
  route: string
  metaKey: string
  eyebrow: string
  h1: string
  heroImage: string
  heroAlt: string
  problemImage?: string
  problemAlt?: string
  deliverablesImage?: string
  deliverablesAlt?: string
  processImage?: string
  processAlt?: string
  proofImage?: string
  proofAlt?: string
  valueProp: string
  whatsappMessage: string
  /** Optional published "from" anchor. Omitted when rates are quote-only (e.g. bartender staffing). */
  fromPrice?: {
    value: number
    label: string
  }
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
  keywords?: {
    primary: string
    secondary: string[]
  }
  expandedSections?: {
    whyBali: {
      title: string
      paragraphs: string[]
    }
    whoFor: {
      title: string
      items: {
        label: string
        description: string
      }[]
    }
    commonMistakes: {
      title: string
      items: string[]
    }
    compliance?: {
      title: string
      paragraphs: string[]
    }
    successKpis: {
      title: string
      items: string[]
    }
    connections: {
      title: string
      paragraphs: string[]
    }
  }
  expandedImages?: Partial<Record<
    'whyBali' | 'whoFor' | 'commonMistakes' | 'successKpis' | 'connections',
    { src: string; alt: string }
  >>
  /** @deprecated Keep for backward compatibility; use section image fields instead. */
  galleryImages?: {
    src: string
    alt: string
  }[]
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
  /** Optional path to the canonical markdown source file for this resource. */
  contentPath?: string
  keywords?: {
    primary: string
    secondary: string[]
  }
  expandedSections?: {
    context: {
      title: string
      paragraphs: string[]
    }
    deepDive: {
      title: string
      paragraphs: string[]
    }
    mistakes: {
      title: string
      items: string[]
    }
    actionableTips: {
      title: string
      items: string[]
    }
  }
  galleryImages?: {
    src: string
    alt: string
  }[]
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
  expandedCopy?: {
    intro: { title: string; paragraphs: string[] }
    whyNow: { title: string; paragraphs: string[] }
    whyMyChef: { title: string; paragraphs: string[] }
    howWeWork: { title: string; paragraphs: string[] }
    cta: { title: string; paragraphs: string[] }
  }
  galleryImages?: {
    src: string
    alt: string
  }[]
}
