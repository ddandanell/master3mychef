/**
 * Visual system for supporting / SEO landing pages (not main commercial pillars).
 * Heroes + mid-article images keep long-form copy scannable on mobile.
 */
export interface SupportingMidImage {
  src: string
  alt: string
  /** Insert after this 0-based H2 block (0 = after first H2 section). */
  afterH2Index: number
}

export interface SupportingLandingVisual {
  hero: string
  heroAlt: string
  mid: SupportingMidImage[]
}

export const SUPPORTING_LANDING_VISUALS: Record<string, SupportingLandingVisual> = {
  'private-dining-indonesia': {
    hero: '/generated/support-private-dining-hero.webp',
    heroAlt:
      'Candlelit private dining table at a Bali villa terrace with plated courses and soft evening light',
    mid: [
      {
        src: '/generated/support-private-dining-service.webp',
        alt: 'Private chef plating a course in an open Bali villa kitchen for at-home fine dining',
        afterH2Index: 1,
      },
      {
        src: '/generated/support-private-dining-table.webp',
        alt: 'Family-style private dining service on a luxury Bali villa deck at golden hour',
        afterH2Index: 3,
      },
    ],
  },
  'best-private-chef-indonesia': {
    hero: '/generated/support-best-chef-hero.webp',
    heroAlt:
      'Professional Indonesian chef in black uniform presenting a finished plate in a premium Bali villa kitchen',
    mid: [
      {
        src: '/generated/support-best-chef-team.webp',
        alt: 'myCHEF hospitality team coordinating villa dinner service with calm professional presence',
        afterH2Index: 1,
      },
      {
        src: '/generated/support-best-chef-proof.webp',
        alt: 'Guests at a refined private chef dinner in Bali with attentive waiter service',
        afterH2Index: 3,
      },
    ],
  },
  'luxury-chef-indonesia': {
    hero: '/generated/support-luxury-chef-hero.webp',
    heroAlt:
      'Ultra-luxury Bali estate dining pavilion set for a private chef tasting menu at blue hour',
    mid: [
      {
        src: '/generated/support-luxury-chef-service.webp',
        alt: 'Discreet luxury butler and chef team serving a multi-course dinner at a private estate',
        afterH2Index: 1,
      },
      {
        src: '/generated/support-luxury-chef-estate.webp',
        alt: 'Open-air luxury villa dining room overlooking tropical gardens prepared for private service',
        afterH2Index: 3,
      },
    ],
  },
  'chef-for-hire-indonesia': {
    hero: '/generated/support-chef-hire-hero.webp',
    heroAlt:
      'Private chef and assistant preparing fresh market ingredients in a bright Bali villa kitchen',
    mid: [
      {
        src: '/generated/support-chef-hire-formats.webp',
        alt: 'Household breakfast service prepared by a daily villa chef for a family stay in Bali',
        afterH2Index: 1,
      },
      {
        src: '/generated/support-chef-hire-placement.webp',
        alt: 'Chef consulting with hosts over a villa menu plan and grocery list in Bali',
        afterH2Index: 4,
      },
    ],
  },
  'wedding-catering-indonesia': {
    hero: '/generated/support-wedding-indo-hero.webp',
    heroAlt:
      'Long candlelit wedding dinner tables at a private Bali estate with ocean backdrop at dusk',
    mid: [
      {
        src: '/generated/support-wedding-indo-service.webp',
        alt: 'Wedding catering team plating reception courses for a villa celebration in Bali',
        afterH2Index: 1,
      },
      {
        src: '/generated/support-wedding-indo-setup.webp',
        alt: 'Villa wedding reception setup with florals, place settings and professional hospitality staff',
        afterH2Index: 3,
      },
    ],
  },
}

export function getSupportingLandingVisual(slug: string): SupportingLandingVisual | null {
  return SUPPORTING_LANDING_VISUALS[slug] ?? null
}
