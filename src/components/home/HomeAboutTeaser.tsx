import Image from 'next/image'
import { BadgeCheck, Star } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'

export default function HomeAboutTeaser() {
  return (
    <section
      aria-label="About Fair Path Health Services"
      className="bg-fp-white pt-5 pb-12 md:pt-7 md:pb-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <SectionTag>Our Story</SectionTag>
            <h2 className="mt-5 font-display text-h2 font-semibold text-fp-text-primary">
              Building Trust Through Genuine Compassion
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-fp-text-body">
              At Fair Path Health Services, we believe that exceptional care begins with a simple
              truth: your loved one deserves to remain in the comfort and familiarity of their own
              home. Our team of professionally trained, background-checked caregivers delivers
              personalized care with warmth, dignity, and respect.
            </p>
            <p className="mt-5 font-body text-lg leading-relaxed text-fp-text-body">
              Founded on the values of compassion, care, integrity, and wellness, we serve families
              across 10 Georgia counties, providing everything from daily personal assistance to
              skilled nursing care and specialized memory and respite programs. Founded right here
              in Georgia, by people who understand firsthand what
              it means to need trusted care at home.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-fp-border pt-8 font-body text-sm font-semibold text-fp-brown-dark">
              <span>10 Counties Served</span>
              <span className="text-fp-copper" aria-hidden>•</span>
              <span>9+ Service Types</span>
              <span className="text-fp-copper" aria-hidden>•</span>
              <span>24/7 Emergency Support</span>
            </div>

            <div className="mt-8">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                className="normal-case tracking-normal"
              >
                Our Full Story →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative lg:col-span-2">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-fp-copper/25 via-fp-copper/5 to-transparent blur-2xl"
              aria-hidden
            />

            <div className="relative">
              <div className="relative -rotate-2 overflow-hidden rounded-2xl border-[3px] border-fp-copper shadow-card-hover">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/about.webp"
                    alt="Smiling Fair Path Health Services care coordinator at her desk, ready to help families"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

              <div className="absolute -bottom-3 left-2 z-10 max-w-[220px] rounded-xl bg-gradient-to-br from-fp-copper to-fp-copper-dark p-4 text-fp-white shadow-lg">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-6 w-6 shrink-0" aria-hidden />
                  <p className="font-body text-[13px] font-bold leading-snug">
                    Medicaid Certified Provider
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-1 z-10 w-[200px] rounded-xl border border-fp-border bg-fp-white p-4 shadow-card">
                <div className="flex items-center gap-2 text-fp-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-fp-text-primary">
                  7+ Years Serving Georgia
                </p>
                <p className="mt-1 font-body text-xs text-fp-text-muted">Trusted by local families</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
