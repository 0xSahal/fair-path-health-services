'use client'

import { BadgeCheck, ClipboardList, MapPin, ShieldCheck } from 'lucide-react'

import { SectionTag } from '@/components/ui/SectionTag'

import { SlideInWhenVisible } from '../FadeInWhenVisible'

const ROWS = [
  {
    title: 'Private pay accepted',
    body: 'Straightforward private pay arrangements with transparent pricing and flexible scheduling, so families know what to expect from the first conversation.',
    Icon: BadgeCheck,
  },
  {
    title: 'Caregiver background checks',
    body: 'Every caregiver completes thorough screening before stepping through your door. We hire slowly, train deeply, and remove doubt from the equation.',
    Icon: ShieldCheck,
  },
  {
    title: 'Personalized care plans',
    body: 'No cookie-cutter visit grids. We listen first, then build routines, goals, and communication rhythms that match your loved one’s personality and medical needs.',
    Icon: ClipboardList,
  },
  {
    title: 'Local Georgia team',
    body: 'Douglasville-rooted leadership with coordinators who know the counties we serve. When weather, traffic, or life shifts plans, you are talking to neighbors, not a distant call center.',
    Icon: MapPin,
  },
] as const

/**
 * Zigzag differentiators: alternating layout with scroll-driven horizontal motion.
 */
export function WhyChooseUs() {
  return (
    <section aria-label="Why choose Fair Path" className="bg-[var(--fp-cream-dark)] fp-section-padding">
      <div className="section-container">
        <SlideInWhenVisible fromLeft className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-[var(--fp-gold)]">Why families choose us</SectionTag>
          <h2 className="mt-3 font-accent text-h2 font-semibold text-[var(--fp-text-primary)]">
            Boutique attention. Operational rigor.
          </h2>
          <p className="mt-4 font-body text-lg text-[var(--fp-text-body)]">
            A few of the reasons Georgia families invite us into their homes with confidence.
          </p>
        </SlideInWhenVisible>

        <div className="mx-auto mt-16 max-w-5xl space-y-16 md:space-y-20">
          {ROWS.map((row, i) => {
            const Icon = row.Icon
            const fromLeft = i % 2 === 0
            return (
              <SlideInWhenVisible key={row.title} fromLeft={fromLeft} delay={0.04}>
                <div
                  className={`flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12 ${
                    fromLeft ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex w-full shrink-0 justify-center md:w-[72px] md:justify-start">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[var(--fp-gold)]/30 bg-[var(--fp-white)] text-[var(--fp-gold)] shadow-card">
                      <Icon className="h-8 w-8" strokeWidth={1.35} aria-hidden />
                    </div>
                  </div>
                  <div className={`min-w-0 flex-1 ${fromLeft ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="font-accent text-2xl font-semibold text-[var(--fp-text-primary)]">
                      {row.title}
                    </h3>
                    <p className="mt-3 font-body text-[16px] leading-relaxed text-[var(--fp-text-muted)] md:text-[17px]">
                      {row.body}
                    </p>
                  </div>
                </div>
              </SlideInWhenVisible>
            )
          })}
        </div>
      </div>
    </section>
  )
}
