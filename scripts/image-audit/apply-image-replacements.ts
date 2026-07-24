import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const PAGES_DIR = join(import.meta.dirname, '..', '..', 'src', 'pages')

// Mapping: old image path -> new image path for the image overhaul.
// This map covers the 10 scoped pages and preserves every URL/route.
const REPLACEMENTS: Record<string, Record<string, string>> = {
  'src/pages/ExperiencesHubPage.tsx': {
    '/generated/private-experiences-bali-hub.webp': '/generated/mychef-experiences-hub-hero-bali-landscape.webp',
    '/generated/bartender-hire-bali-cocktail-party.webp': '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    '/generated/sushi-making-class-bali-masterclass.webp': '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    '/generated/private-cooking-class-bali-villa.webp': '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    '/generated/kids-birthday-party-bali-chef.webp': '/generated/mychef-kids-party-children-cooking-bali-landscape.webp',
    '/generated/oyster-bar-bali-champagne.webp': '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    '/generated/proposal-package-bali-dinner.webp': '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
  },
  'src/pages/ExperiencePrivateCocktailPartyPage.tsx': {
    '/generated/bartender-hire-bali-cocktail-party.webp': '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    '/generated/mychef-events-bali-villa-parties-bar.webp': '/generated/mychef-cocktail-party-cocktails-canapes-bali-landscape.webp',
    '/generated/mychef-service-bali-hero-bartenders.webp': '/generated/mychef-cocktail-party-bartenders-setup-bali-portrait.webp',
    '/generated/mychef-mixology-bali-bar-setup.webp': '/generated/mychef-cocktail-party-mobile-bar-detail-bali-landscape.webp',
  },
  'src/pages/ExperienceSushiMasterclassPage.tsx': {
    '/generated/sushi-making-class-bali-masterclass.webp': '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    '/generated/mychef-experience-bali-luna-hero-v4.webp': '/generated/mychef-sushi-masterclass-instruction-bali-landscape.webp',
    '/generated/luna-ingredients.webp': '/generated/mychef-sushi-masterclass-ingredients-bali-portrait.webp',
    '/generated/mychef-experience-bali-luna-table.webp': '/generated/mychef-sushi-masterclass-guests-dining-bali-landscape.webp',
  },
  'src/pages/ExperiencePrivateCookingClassPage.tsx': {
    '/generated/private-cooking-class-bali-villa.webp': '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    '/generated/mychef-experience-bali-luna-gallery-3.webp': '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp',
    '/generated/mychef-experience-bali-luna-table.webp': '/generated/mychef-cooking-class-group-dining-bali-landscape.webp',
  },
  'src/pages/ExperienceKidsBirthdayChefPartyPage.tsx': {
    '/generated/kids-birthday-party-bali-chef.webp': '/generated/mychef-kids-party-children-cooking-bali-landscape.webp',
    '/generated/mychef-families-bali-kids-menus.webp': '/generated/mychef-kids-party-kids-hands-cooking-bali-landscape.webp',
    '/generated/mychef-events-bali-birthdays-table.webp': '/generated/mychef-kids-party-family-table-bali-landscape.webp',
  },
  'src/pages/ExperienceChampagneOysterExperiencePage.tsx': {
    '/generated/oyster-bar-bali-champagne.webp': '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    '/generated/mychef-events-bali-party-medi.webp': '/generated/mychef-oyster-champagne-seafood-station-bali-landscape.webp',
    '/generated/mychef-experience-bali-aura-toast.webp': '/generated/mychef-oyster-champagne-champagne-pour-bali-portrait.webp',
  },
  'src/pages/ExperienceRomanticProposalDinnerPage.tsx': {
    '/generated/proposal-package-bali-dinner.webp': '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
    '/generated/mychef-misc-bali-section-romantic-dinner.webp': '/generated/mychef-proposal-dinner-plated-dish-bali-portrait.webp',
    '/generated/section-romantic-dinner.webp': '/generated/mychef-proposal-dinner-plated-dish-bali-portrait.webp',
  },
  'src/pages/CompleteVillaExperiencePage.tsx': {
    '/generated/mychef-catering-bali-catering-hero.webp': '/generated/mychef-complete-villa-chef-kitchen-bali-landscape.webp',
    '/generated/hub-villa.webp': '/generated/mychef-villa-interior-pool-living-bali-landscape.webp',
    '/generated/mychef-vip-transport-bali-hero.webp': '/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp',
    '/generated/mychef-events-bali-weddings-reception.webp': '/generated/mychef-complete-villa-wedding-reception-bali-landscape.webp',
    '/generated/mychef-service-bali-hero-waiters.webp': '/generated/mychef-villa-staff-waiters-service-bali-landscape.webp',
    '/generated/bali-hub-hero.webp': '/generated/mychef-villa-pool-infinity-pool-bali-landscape.webp',
    '/generated/mychef-experience-bali-aura-tablescape.webp': '/generated/mychef-villa-tablescape-reset-table-bali-landscape.webp',
  },
  'src/pages/VillaEventPackagesPage.tsx': {
    '/generated/mychef-villa-event-packages-hero.webp': '/generated/mychef-villa-packages-banquet-lawn-bali-landscape.webp',
    '/generated/hub-villa.webp': '/generated/mychef-villa-interior-pool-living-bali-landscape.webp',
    '/generated/bali-hub-hero.webp': '/generated/mychef-villa-pool-infinity-pool-bali-landscape.webp',
    '/generated/mychef-experience-bali-home-hero-ivory-villa.webp': '/generated/mychef-villa-packages-chef-dinner-table-bali-landscape.webp',
    '/generated/mychef-experience-bali-aura-bartender.webp': '/generated/mychef-villa-packages-packages-bartender-bali-landscape.webp',
    '/generated/mychef-experience-bali-aura-hero-v2.webp': '/generated/mychef-villa-packages-staff-setting-table-bali-landscape.webp',
    '/generated/mychef-experience-bali-aura-tablescape.webp': '/generated/mychef-villa-tablescape-reset-table-bali-landscape.webp',
  },
  'src/pages/VipTransportBaliPage.tsx': {
    '/generated/mychef-vip-transport-bali-hero.webp': '/generated/mychef-vip-transport-chauffeur-vehicle-bali-landscape.webp',
    '/generated/mychef-city-jimbaran.webp': '/generated/mychef-vip-transport-jimbaran-sunset-bali-landscape.webp',
    '/generated/mychef-vip-minibus-bali.webp': '/generated/mychef-vip-transport-minibus-driver-bali-landscape.webp',
    '/generated/mychef-bali-yacht-charter.webp': '/generated/mychef-vip-transport-yacht-deck-bali-landscape.webp',
  },
}

function replaceInFile(file: string, mapping: Record<string, string>) {
  const absolutePath = join(import.meta.dirname, '..', '..', file)
  let content = readFileSync(absolutePath, 'utf-8')
  let changed = false

  for (const [oldPath, newPath] of Object.entries(mapping)) {
    if (content.includes(oldPath)) {
      content = content.split(oldPath).join(newPath)
      changed = true
      console.log(`  ${file}: ${oldPath} -> ${newPath}`)
    }
  }

  if (changed) {
    writeFileSync(absolutePath, content, 'utf-8')
  }
  return changed
}

function main() {
  let totalChanged = 0
  for (const [file, mapping] of Object.entries(REPLACEMENTS)) {
    const changed = replaceInFile(file, mapping)
    if (changed) totalChanged++
  }
  console.log(`\nUpdated ${totalChanged} page file(s).`)
}

main()
