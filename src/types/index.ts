export type {
  NavItem,
  Service,
  Testimonial,
  TeamMember,
  JobPosting,
  FAQ,
  StatItem,
  InsuranceProgram,
  ContactFormData,
} from '@/lib/types'

/** @deprecated Use `FAQ` — kept for gradual migration */
export type FAQItem = import('@/lib/types').FAQ

/** @deprecated Use `NavItem` — kept for gradual migration */
export type NavLink = Pick<import('@/lib/types').NavItem, 'label' | 'href'>
