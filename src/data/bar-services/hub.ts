import type { BarServicesHubData } from './types'

export const BAR_SERVICES_HUB: BarServicesHubData = {
  hero: {
    eyebrow: 'Bar Services for Venues',
    h1: 'Bar Consultant Bali',
    description: 'The team behind Bali\'s private dining standard — now building world-class bar programmes for the island\'s venues.',
    heroImage: '/generated/mychef-bar-services-bali-hero-hub.webp',
    heroAlt: 'Bali villa bar setup with professional bartender preparing drinks at golden hour'
  },
  groups: [
    {
      title: 'Consulting',
      services: ['bar-audit-improvement', 'bar-costing-inventory-control', 'cocktail-menu-development', 'signature-cocktail-creation', 'new-bar-setup']
    },
    {
      title: 'Staffing',
      services: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment', 'bar-equipment-supply-rental']
    },
    {
      title: 'Management',
      services: ['bar-staff-training', 'monthly-bar-management-support']
    },
    {
      title: 'Flagship',
      services: ['complete-bar-performance-programme']
    }
  ],
  whyUs: {
    title: 'Why venues choose MyChef Bar Services',
    items: [
      { title: 'Bali-focused', description: 'We understand local staffing laws, supply chains, and guest expectations.' },
      { title: 'Margin-first', description: 'Every recommendation is measured against your cost structure and revenue goals.' },
      { title: 'End-to-end', description: 'From audit and setup to training and ongoing management — one partner.' }
    ]
  },
  process: [
    { step: 1, title: 'Diagnose', description: 'Audit your bar\'s operations, costs, and service flow.' },
    { step: 2, title: 'Design', description: 'Build a tailored plan for menu, staffing, and controls.' },
    { step: 3, title: 'Deliver', description: 'Implement systems, training, and standards in your venue.' },
    { step: 4, title: 'Optimise', description: 'Monitor performance and refine for lasting results.' }
  ],
  proof: {
    title: 'Built on the same standards as Bali\'s best private dining experiences',
    items: [
      'Experienced hospitality operators',
      'Local team training and recruitment expertise',
      'Focus on measurable ROI'
    ]
  }
}
