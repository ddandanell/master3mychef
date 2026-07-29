/**
 * Single source of truth for mychef.id facts.
 *
 * Use these constants anywhere the site states founding year, founder training,
 * deposit terms, cancellation policy, grocery policy, or operational review
 * stats. Do not hardcode contradictory values elsewhere.
 */

export const siteFacts = {
  /** Defensible founding year used across the site. */
  foundingYear: 2019,

  /** City where the founder completed formal Michelin-kitchen training. */
  founderTrainingCity: 'Milan',

  /** Deposit percentage required to confirm a booking. */
  depositPercent: 50,

  /** When the remaining balance is due. */
  balanceTiming: 'the day before the event',

  /** Minimum spend for corporate events and corporate catering programmes. */
  corporateMinSpend: 'IDR 15,000,000',

  /**
   * Cancellation policy wording, taken verbatim from /cancellation.
   * Cancellations made 14 or more days before the event receive a full refund.
   * Cancellations between 7–13 days before receive a 50% refund.
   * Cancellations less than 7 days before are non-refundable.
   */
  cancellationPolicy:
    'Cancellations made 14 or more days before the event receive a full refund. Cancellations between 7–13 days before receive a 50% refund. Cancellations less than 7 days before are non-refundable.',

  /** Short cancellation policy summary for cards/accordions. */
  cancellationPolicyShort:
    'Full refund 14+ days before. 50% refund 7–13 days. No refund under 7 days.',

  /** Grocery billing policy. */
  groceryPolicy: 'Groceries are billed at cost, no markup',

  /**
   * Operational social-proof framing.
   * No Google rating, no review count, no unverifiable platform claims.
   */
  reviewFraming: '560+ events served · 12,000+ guests · 500+ villa bookings',

  /** Individual stat lines derived from reviewFraming. */
  eventsServed: '560+ events served',
  guestsServed: '12,000+ guests served',
  villaBookings: '500+ villa bookings',

  /** WhatsApp contact number (E.164 without +). */
  whatsappNumber: '6289674072020',

  /** Display phone number. Use this in every schema `telephone` field. */
  phoneDisplay: '+62 896-7407-2020',

  /** tel: href value (E.164 with +). */
  phoneHref: '+6289674072020',

  /** Business email. */
  email: 'bali@mychef.id',

  /**
   * Canonical business name for schema `name` fields.
   * Must match the Google Business Profile to strengthen entity matching.
   */
  businessName: 'myCHEF.id',

  /** Registered entity name used in legal documents (privacy policy, terms). */
  legalName: 'myCHEF Indonesia',

  /**
   * Name variants used elsewhere on the site and on third-party profiles.
   * Declared as schema `alternateName` so Google can resolve them to one entity.
   */
  alternateNames: ['myCHEF', 'myCHEF Bali', 'myCHEF. - Private Chef and Catering'],

  /**
   * Canonical postal address — the single source of truth for NAP.
   *
   * Indonesian address hierarchy: Panjer (kelurahan) sits inside
   * Denpasar Selatan (kecamatan) inside Kota Denpasar (city).
   * schema.org `addressLocality` takes the CITY, so sub-district detail
   * belongs in `streetAddress`.
   *
   * Any change here must be mirrored on the Google Business Profile.
   */
  address: {
    streetAddress: 'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan',
    addressLocality: 'Denpasar',
    addressRegion: 'Bali',
    postalCode: '80226',
    addressCountry: 'ID',
  },

  /** One-line address for visible on-page text. */
  addressDisplay:
    'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226',

  /** Business coordinates (used in LocalBusiness geo). */
  geo: { latitude: -8.6905, longitude: 115.2126 },

  /** In-villa private bartender rate (owner page /in-villa-service/bartenders). */
  bartenderRate: 'IDR 350,000',

  /** In-villa private bartender rate with hourly wording. */
  bartenderRateHourly: 'IDR 350,000/hour',

  /** Direct Google Business Profile / Maps URL. */
  googleBusinessProfileUrl:
    'https://www.google.com/maps/place/myCHEF.+-+Private+Chef+and+Catering/data=!4m2!3m1!1s0x0:0x84318764e9490ac2?sa=X',
} as const

export default siteFacts
