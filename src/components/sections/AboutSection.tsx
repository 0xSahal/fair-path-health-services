import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'

const VALUES = ['Compassion', 'Care', 'Integrity', 'Wellness'] as const

const STORY_PARAGRAPHS: string[] = [
  'Fair Path Health Services was founded on a simple but powerful belief: every individual deserves to age and heal with dignity, in the comfort of the place they call home.',
  'For over seven years we have walked alongside Georgia families during some of life\u2019s most tender moments — providing professional, deeply personal care that honors each client as a whole person, not just a list of needs.',
  'Today, our team of trained caregivers, nurses, and care coordinators serves more than 500 families across ten Metro Atlanta counties — and our standard remains exactly the same as on day one: treat every client like our own family.',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="Our story"
      className="bg-blush/15 py-section"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Visual column */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=85"
                  alt="A caregiver gently holding hands with an elderly client at home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[24px] ring-[3px] ring-inset ring-roseGold/25"
                />
              </div>

              {/* Years badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-mahogany px-5 py-4 text-white shadow-lg">
                <p className="font-display text-[36px] font-bold leading-none">
                  7+
                </p>
                <p className="mt-1 text-[12px] opacity-75">Years of Excellence</p>
              </div>

              {/* Certified card (desktop only) */}
              <div className="absolute right-[-24px] top-6 hidden w-[160px] rounded-xl border border-blush/60 bg-white p-4 shadow-card lg:block">
                <CheckCircle2
                  className="text-sage"
                  size={20}
                  aria-hidden
                />
                <p className="mt-2 font-body text-[13px] font-semibold text-mahogany">
                  State Certified Agency
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text column */}
          <ScrollReveal delay={0.2}>
            <SectionHeader
              label="Our Story"
              title="Founded on Compassion, Built on Trust"
              align="left"
            />

            <div className="mt-6 space-y-4">
              {STORY_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[16px] leading-[1.8] text-slate"
                >
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-2 rounded-pill border border-blush bg-white px-4 py-2 text-[13px] font-semibold text-mahogany"
                >
                  <span
                    aria-hidden
                    className="block h-2 w-2 rounded-full bg-roseGold"
                  />
                  {v}
                </li>
              ))}
            </ul>

            <Link href="#team" className="btn-outline-mah mt-8">
              Meet Our Full Team →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
