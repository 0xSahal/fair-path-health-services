'use client'

import { HandHeart, ShieldCheck, UserCheck, UsersRound } from 'lucide-react'

import { SectionTag } from '@/components/ui/SectionTag'
import { cn } from '@/lib/utils'

import { FadeInWhenVisible } from '../FadeInWhenVisible'

const VALUES = [
  {
    name: 'Compassion',
    description:
      'We lead with patience and warmth, seeing the whole person behind every care plan, every visit, and every question.',
    Icon: HandHeart,
  },
  {
    name: 'Dignity',
    description:
      'Independence, privacy, and choice matter. We protect your loved one’s sense of self with discreet, respectful support.',
    Icon: UserCheck,
  },
  {
    name: 'Reliability',
    description:
      'Families cannot afford surprises. Clear communication, vetted caregivers, and steady follow-through define how we work.',
    Icon: ShieldCheck,
  },
  {
    name: 'Family-First',
    description:
      'You stay at the center of decisions. We coordinate closely with relatives and advocates so care feels collaborative.',
    Icon: UsersRound,
  },
] as const

/**
 * Horizontal value cards: cream field, brown borders, gold icon accents, lift on hover.
 */
export function CoreValues() {
  return (
    <section aria-label="Core values" className="bg-[var(--fp-cream)] fp-section-padding">
      <div className="section-container">
        <FadeInWhenVisible className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-[var(--fp-gold)]">What guides us</SectionTag>
          <h2 className="mt-3 font-accent text-h2 font-semibold text-[var(--fp-text-primary)]">
            Values you can feel in every visit
          </h2>
        </FadeInWhenVisible>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, idx) => {
            const Icon = v.Icon
            return (
              <FadeInWhenVisible key={v.name} delay={idx * 0.06}>
                <article
                  className={cn(
                    'group relative flex h-full flex-col rounded-2xl border-2 border-fp-brown-dark/25',
                    'bg-[var(--fp-cream-dark)]/80 p-7 shadow-card backdrop-blur-[2px]',
                    'transition-all duration-300 ease-out',
                    'hover:-translate-y-1.5 hover:border-[var(--fp-gold)]/55 hover:shadow-[0_22px_48px_rgba(44,26,14,0.14)]',
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] scale-x-0 rounded-t-2xl bg-[var(--fp-gold)] transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--fp-gold)]/35 bg-[var(--fp-white)] text-[var(--fp-gold)]">
                    <Icon className="h-6 w-6" strokeWidth={1.35} aria-hidden />
                  </div>
                  <h3 className="font-accent text-xl font-semibold text-[var(--fp-text-primary)]">{v.name}</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-[var(--fp-text-muted)]">
                    {v.description}
                  </p>
                </article>
              </FadeInWhenVisible>
            )
          })}
        </div>
      </div>
    </section>
  )
}
