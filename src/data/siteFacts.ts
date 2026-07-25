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

  /** Display phone number. */
  phoneDisplay: '+62 896-7407-2020',

  /** Business email. */
  email: 'bali@mychef.id',

  /** Direct Google Business Profile / Maps URL. */
  googleBusinessProfileUrl:
    'https://www.google.com/maps/place/myCHEF.+-+Private+Chef+and+Catering/data=!4m2!3m1!1s0x0:0x84318764e9490ac2?sa=X',
} as const

export default siteFacts
