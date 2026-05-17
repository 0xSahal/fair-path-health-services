'use client'

import { useMemo, useState } from 'react'
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
  Phone,
  Pill,
  Search,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'
import { SERVICE_CATEGORIES, SERVICES, type ServiceCategory } from '@/lib/services-data'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

const IconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Stethoscope,
  Home: HeartHandshake,
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

const dividerByCategory: Record<ServiceCategory, string> = {
  'Personal & Daily Care': 'from-fp-copper/0 via-fp-copper/60 to-fp-copper/0',
  'Medical & Skilled Care': 'from-fp-success/0 via-fp-success/55 to-fp-success/0',
  'Specialized Programs': 'from-fp-brown-dark/0 via-fp-brown-dark/45 to-fp-brown-dark/0',
}

export default function ServicesDirectoryClient() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'All' | ServiceCategory>('All')

  const normalized = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    return SERVICES.filter((s) => {
      const inCat = category === 'All' ? true : s.category === category
      const inQuery =
        !normalized ||
        s.title.toLowerCase().includes(normalized) ||
        s.description.toLowerCase().includes(normalized)
      return inCat && inQuery
    })
  }, [category, normalized])

  const grouped = useMemo(() => {
    const map = new Map<ServiceCategory, typeof filtered>()
    for (const c of SERVICE_CATEGORIES) map.set(c, [])
    for (const s of filtered) map.get(s.category)?.push(s)
    return map
  }, [filtered])

  return (
    <div className="bg-fp-cream fp-section-padding">
      <div className="section-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-center">Services Directory</SectionTag>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
            Find the Right Care Path
          </h2>
          <p className="mt-4 font-body text-lg text-fp-text-muted">
            Search by service type or filter by category. Every offering is designed to protect dignity, safety, and peace of mind.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-col gap-4 rounded-2xl border border-fp-border bg-fp-white p-5 shadow-card md:flex-row md:items-center md:justify-between">
            <label className="relative flex-1">
              <span className="sr-only">Search services</span>
              <Search
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fp-text-muted/60"
                aria-hidden
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                className="h-[50px] w-full rounded-xl border border-fp-border bg-fp-cream pl-12 pr-4 font-body text-[15px] text-fp-text-primary placeholder:text-fp-text-muted/50 focus:border-fp-copper focus:outline-none focus:ring-2 focus:ring-fp-copper/20"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {(['All', ...SERVICE_CATEGORIES] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={cn(
                    'rounded-pill border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors',
                    c === category
                      ? 'border-fp-copper bg-fp-copper/10 text-fp-brown-dark'
                      : 'border-fp-border bg-transparent text-fp-text-muted hover:border-fp-copper/45 hover:bg-fp-cream-dark',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 space-y-16">
          {SERVICE_CATEGORIES.map((cat) => {
            const list = grouped.get(cat) ?? []
            if (!list.length) return null
            return (
              <section key={cat} aria-label={cat}>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                      Category
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-fp-text-primary">
                      {cat}
                    </h3>
                  </div>
                  <div className="hidden h-px flex-1 bg-gradient-to-r md:block" />
                </div>

                <div
                  className={cn(
                    'mt-6 h-[2px] w-full bg-gradient-to-r',
                    dividerByCategory[cat],
                  )}
                  aria-hidden
                />

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {list.map((s, i) => {
                    const Icon = IconMap[s.icon] ?? HeartHandshake
                    return (
                      <Reveal key={s.slug} delay={i * 0.03}>
                        <article className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-fp-copper/50 hover:shadow-card-hover">
                          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                            <Icon className="h-6 w-6" aria-hidden />
                          </div>
                          <h4 className="font-display text-xl font-semibold text-fp-text-primary">
                            {s.title}
                          </h4>
                          <p className="mt-3 line-clamp-3 font-body text-[15px] leading-relaxed text-fp-text-muted">
                            {s.description}
                          </p>
                          <div className="mt-6">
                            <Button href={`/services/${s.slug}`} variant="secondary" size="md">
                              Learn More →
                            </Button>
                          </div>
                        </article>
                      </Reveal>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-fp-border bg-fp-brown-dark p-8 text-fp-cream shadow-card-hover md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-copper-light">
                  Not sure which service you need?
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-fp-cream">
                  Let us help.
                </h3>
                <p className="mt-3 font-body text-[15px] text-fp-cream/75">
                  Call us and we’ll guide you to the right care plan with no obligation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/70 px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-fp-copper-light" aria-hidden />
                  {SITE_CONFIG.phone}
                </a>
                <Button href="/contact/book-appointment" variant="primary" size="lg">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

