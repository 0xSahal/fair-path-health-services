import {
  Award,
  CalendarDays,
  HandHeart,
  Medal,
  ShieldCheck,
  Star,
  Stethoscope,
} from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import TrustBarStatCount from '@/components/home/TrustBarStatCount'
import { cn } from '@/lib/utils'

const items = [
  {
    key: 'families',
    icon: Medal,
    stat: <TrustBarStatCount end={500} suffix="+" />,
    label: 'Families Served',
  },
  {
    key: 'years',
    icon: CalendarDays,
    stat: <TrustBarStatCount end={10} suffix="+" />,
    label: 'Years Experience',
  },
  {
    key: 'sat',
    icon: Star,
    stat: <TrustBarStatCount end={98} suffix="%" />,
    label: 'Client Satisfaction',
  },
  {
    key: 'med',
    icon: Stethoscope,
    stat: (
      <HandHeart
        className="h-7 w-7 text-fp-copper md:h-8 md:w-8"
        strokeWidth={2.25}
        aria-hidden
      />
    ),
    label: 'Private Pay Accepted',
  },
  {
    key: 'bond',
    icon: Award,
    stat: (
      <ShieldCheck
        className="h-7 w-7 text-fp-copper md:h-8 md:w-8"
        strokeWidth={2.25}
        aria-hidden
      />
    ),
    label: 'Fully Bonded & Insured',
  },
] as const

export default function HomeTrustBar() {
  return (
    <Reveal as="section" className="border-t border-fp-copper bg-fp-cream" aria-label="Trust signals">
      <div className="section-container py-4 md:py-5">
        <ul className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <li
                key={item.key}
                className={cn(
                  'flex min-w-[220px] flex-1 snap-center items-center gap-3 px-4 py-2 md:min-w-0 md:px-6',
                  i !== items.length - 1 && 'border-r border-fp-border/80',
                )}
              >
                <Icon className="h-6 w-6 shrink-0 text-fp-copper" aria-hidden />
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-baseline gap-1.5">{item.stat}</div>
                  <span className="mt-0.5 font-body text-[11px] font-semibold uppercase tracking-wide text-fp-text-muted md:text-xs">
                    {item.label}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Reveal>
  )
}
