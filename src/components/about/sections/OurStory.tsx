'use client'

import Image from 'next/image'

import { SectionTag } from '@/components/ui/SectionTag'
import { cn } from '@/lib/utils'

import { FadeInWhenVisible } from '../FadeInWhenVisible'

/**
 * Long-form story + rotated photo collage.
 */
export function OurStory() {
  return (
    <section aria-label="Our story" className="bg-[var(--fp-cream)] fp-section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="relative max-w-xl lg:max-w-none">
            <SectionTag className="text-[var(--fp-gold)]">Our Story</SectionTag>
            <h2 className="mt-3 font-accent text-h2 font-semibold leading-tight text-[var(--fp-text-primary)]">
              Founded in Georgia, shaped by real families
            </h2>

            <div className="relative mt-8">
              <FadeInWhenVisible>
                <p className="relative font-body text-lg leading-relaxed text-[var(--fp-text-body)]">
                  Fair Path Health Services began with a question too many families know well:{' '}
                  <em className="font-accent not-italic text-[var(--fp-text-primary)]">
                    who can we trust in our home?
                  </em>{' '}
                  Our founders navigated that search themselves, and built an agency that answers it
                  with consistency, heart, and respect for dignity.
                </p>
              </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible delay={0.08} className="mt-6">
              <p className="font-body text-lg leading-relaxed text-[var(--fp-text-body)]">
                We believe aging and healing belong in the comfort of home, with caregivers who show up
                as professionals and leave as trusted extensions of your family. That belief guides who
                we hire, how we train, and how we show up on hard days.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.14} className="mt-6">
              <p className="font-body text-lg leading-relaxed text-[var(--fp-text-body)]">
                Today we proudly serve families across ten Georgia counties with a broad spectrum of
                services, including Medicaid CCSP, SOURCE, and private pay, without ever losing the
                boutique attention that makes care feel personal.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* Photo collage: slight rotations, organic overlap */}
          <FadeInWhenVisible className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none" delay={0.06}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:aspect-auto lg:min-h-[520px] lg:max-w-none">
              <div
                className={cn(
                  'absolute left-0 top-4 w-[58%] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-[var(--fp-border)]',
                  'rotate-[-4deg] lg:top-8 lg:w-[55%]',
                )}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/about/home.webp"
                    alt="Care coordinator visiting with an older couple in their living room"
                    fill
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className={cn(
                  'absolute bottom-2 right-0 w-[62%] overflow-hidden rounded-[2rem] shadow-card-hover ring-1 ring-[var(--fp-gold)]/25',
                  'rotate-[5deg] lg:bottom-6 lg:w-[58%]',
                )}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/about/caretaker.webp"
                    alt="Caregiver supporting a client during daily activities at home"
                    fill
                    sizes="(max-width: 1024px) 50vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute -right-6 bottom-1/4 hidden h-40 w-40 rounded-full bg-[var(--fp-gold)]/[0.08] blur-2xl lg:block"
                aria-hidden
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
