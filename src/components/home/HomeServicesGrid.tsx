import Link from 'next/link'
import {
  Accessibility,
  ArrowRight,
  CalendarCheck,
  Car,
  HeartHandshake,
  Home,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const services: {
  name: string
  href: string
  icon: LucideIcon
  desc: string
}[] = [
  {
    name: 'Personal Care',
    href: '/services/personal-care',
    icon: HeartHandshake,
    desc:
      'Help with bathing, grooming, dressing, and daily routines that preserve dignity.',
  },
  {
    name: 'Nursing Care',
    href: '/services/nursing-care',
    icon: Stethoscope,
    desc:
      'Skilled visits, medication management, and wound care from licensed nurses.',
  },
  {
    name: 'Companion & Homemaking',
    href: '/services/companion-homemaking',
    icon: Home,
    desc:
      'Companionship, light housekeeping, meal prep, and laundry to keep your home comfortable.',
  },
  {
    name: 'Transportation',
    href: '/services/transportation',
    icon: Car,
    desc:
      'Reliable door-to-door rides to appointments, errands, and community outings.',
  },
  {
    name: 'Disability Support Services',
    href: '/services/developmental-disabilities',
    icon: Accessibility,
    desc:
      "State-approved support for developmental disabilities through Georgia's DBHDD program.",
  },
  {
    name: 'Care Coordination',
    href: '/services/care-coordination',
    icon: CalendarCheck,
    desc:
      'A dedicated coordinator handles your care plan, providers, and scheduling for you.',
  },
]

export default function HomeServicesGrid() {
  return (
    <section aria-label="Home care services" className="bg-fp-cream fp-section-padding">
      <div className="section-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-center">What We Offer</SectionTag>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
            Comprehensive Home Care Services Built Around You
          </h2>
          <p className="mt-4 font-body text-lg text-fp-text-muted">
            Every client is unique. We match personalized care plans to your exact needs.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal
                key={s.name}
                as="article"
                delay={i * 0.05}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card',
                  'transition-all duration-200 hover:-translate-y-1 hover:border-l-4 hover:border-l-fp-copper hover:bg-fp-cream-dark hover:shadow-card-hover',
                )}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-fp-text-primary">{s.name}</h3>
                <p className="mt-3 line-clamp-2 font-body text-[15px] leading-relaxed text-fp-text-muted">
                  {s.desc}
                </p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1 font-body text-sm font-bold text-fp-copper transition-colors group-hover:gap-2 hover:text-fp-copper-dark"
                >
                  Learn More <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button
            href="/services"
            variant="primary"
            size="lg"
            className="normal-case tracking-normal"
          >
            View All 12 Services →
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
