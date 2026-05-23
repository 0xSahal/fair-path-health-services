import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'

const bullets = [
  'Professionally trained & background-checked caregivers',
  'Fully personalized care plans for every individual',
  'Private pay accepted',
  '24/7 support line for families and emergencies',
  'Regular care plan reviews and family updates',
  'Serving 10 Georgia counties with local expertise',
] as const

export default function HomeWhyChoose() {
  return (
    <section aria-label="Why choose Fair Path" className="bg-fp-cream fp-section-padding">
      <div className="section-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <Reveal className="relative lg:flex-1">
            <div className="relative aspect-[5/6] overflow-hidden rounded-2xl shadow-card-hover">
              <Image
                src="/images/why-choose.webp"
                alt="Caregiver with a warm, confident smile"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:flex-1">
            <SectionTag>The Fair Path Difference</SectionTag>
            <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
              Care That Goes Beyond the Basics
            </h2>

            <ul className="mt-8 flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fp-copper/15 text-fp-copper">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-body text-[16px] leading-relaxed text-fp-text-body">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border-2 border-fp-copper bg-transparent px-7 py-3.5 font-body text-sm font-semibold text-fp-copper transition-all duration-200 hover:bg-fp-copper hover:text-fp-white"
              >
                See Why Families Choose Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
