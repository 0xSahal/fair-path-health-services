import Link from 'next/link'
import {
  Accessibility,
  Brain,
  CalendarCheck,
  Car,
  Coffee,
  HeartHandshake,
  Hospital,
  Medal,
  MessagesSquare,
  Pill,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { Button } from '@/components/ui/Button'
import { getServiceBySlug } from '@/lib/services-data'
import { cn } from '@/lib/utils'

const IconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Stethoscope,
  Car,
  Accessibility,
  CalendarCheck,
  Pill,
  Brain,
  Coffee,
  Medal,
  MessagesSquare,
  Hospital,
}

export default function RelatedServicesStrip({
  relatedSlugs,
  sectionClassName,
}: {
  relatedSlugs: string[]
  sectionClassName?: string
}) {
  const items = relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
    .slice(0, 8)

  if (!items.length) return null

  return (
    <section
      aria-label="Related services"
      className={cn('bg-fp-cream', sectionClassName ?? 'fp-section-padding')}
    >
      <div className="section-container">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
              Related services
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-fp-text-primary">
              You May Also Consider
            </h2>
          </div>
          <div className="hidden md:block">
            <Button href="/services" variant="secondary" size="md">
              View Directory →
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {items.map((s) => {
            const Icon = IconMap[s.icon] ?? HeartHandshake
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={cn(
                  'flex min-h-[220px] h-full flex-col rounded-2xl border border-[#E8DDD0] bg-[#FAF6F1] p-6 shadow-[0_2px_12px_rgba(44,26,14,0.04)] transition-all duration-200',
                  'hover:-translate-y-0.5 hover:border-[#C9A96E]/45 hover:shadow-[0_8px_24px_rgba(44,26,14,0.08)]',
                )}
              >
                <div className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="font-display text-lg font-semibold text-fp-text-primary">{s.title}</p>
                <p className="mt-2 flex-1 line-clamp-3 font-body text-sm text-fp-text-muted">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex font-body text-sm font-semibold text-fp-copper">
                  Learn more →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

