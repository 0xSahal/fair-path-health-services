import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BadgeDollarSign,
  CalendarClock,
  GraduationCap,
  HandHeart,
  TrendingUp,
  Users,
} from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import CareersApplicationForm from '@/components/careers/CareersApplicationForm'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Careers | Join Fair Path Health Services Team',
  description:
    'Join Fair Path Health Services. We’re building a team of compassionate, qualified caregivers dedicated to dignity, respect, and exceptional care.',
}

const benefits = [
  {
    title: 'Competitive Pay',
    body: 'Fair compensation that reflects the importance of your work.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Flexible Schedules',
    body: 'Options designed to work with your availability and life.',
    icon: CalendarClock,
  },
  {
    title: 'Ongoing Training',
    body: 'Support and development to strengthen your skills and confidence.',
    icon: GraduationCap,
  },
  {
    title: 'Supportive Team',
    body: 'A respectful, responsive team that has your back.',
    icon: Users,
  },
  {
    title: 'Career Growth',
    body: 'Opportunities to expand responsibility and progress over time.',
    icon: TrendingUp,
  },
  {
    title: 'Making Real Impact',
    body: 'Meaningful work that protects dignity and improves daily life.',
    icon: HandHeart,
  },
] as const

const jobs = [
  {
    title: 'Certified Nursing Assistant (CNA)',
    meta: 'Full/Part-time, Multiple Counties',
    desc: 'Provide respectful ADL support and assist with routine care tasks under guidance.',
  },
  {
    title: 'Personal Care Aide (PCA)',
    meta: 'Part-time, Flexible Hours',
    desc: 'Support daily routines, companionship, light housekeeping, and safety-focused assistance.',
  },
  {
    title: 'Home Health Aide (HHA)',
    meta: 'Full-time, Benefits eligible',
    desc: 'Deliver dependable in-home care support with a strong focus on comfort and safety.',
  },
] as const

export default function CareersPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Careers"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Careers', href: '/careers' },
          ]}
          imageSrc="/images/service.webp"
          imageAlt="Diverse team of home care professionals in scrubs standing together in a bright living room"
          serviceBanner
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Careers hero content">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Join Our Team</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Make a Real Difference Every Single Day
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                We&apos;re building a team of compassionate, qualified caregivers who share our
                commitment to dignity, respect, and exceptional care.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 1 — Why Work at Fair Path */}
        <section className="bg-fp-white fp-section-padding" aria-label="Why work at Fair Path">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Why Work Here</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                A Team Built on Respect
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <Reveal
                    key={b.title}
                    delay={i * 0.04}
                    className="rounded-2xl border border-fp-border bg-fp-cream p-7 shadow-card"
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-fp-text-primary">
                      {b.title}
                    </h3>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-fp-text-muted">
                      {b.body}
                    </p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 2 — Open Positions */}
        <section className="bg-fp-cream fp-section-padding" aria-label="Open positions">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Open Positions</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                Current Opportunities
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
              {jobs.map((j, i) => (
                <Reveal
                  key={j.title}
                  delay={i * 0.05}
                  className="flex h-full flex-col rounded-2xl border border-[#E8DDD0] bg-[#FAF6F1] p-7"
                >
                  <h3 className="font-display text-xl font-semibold text-fp-text-primary">
                    {j.title}
                  </h3>
                  <p className="mt-2 font-body text-sm font-semibold text-fp-copper-dark">
                    {j.meta}
                  </p>
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-fp-text-muted">
                    {j.desc}
                  </p>
                  <div className="mt-auto pt-6">
                    <Button href="#apply" variant="primary" size="md">
                      Apply Now
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Application Process */}
        <section className="bg-fp-brown-dark fp-section-padding text-fp-cream" aria-label="Application process">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center text-fp-copper">Application Process</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-cream">
                What to Expect
              </h2>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4">
              {[
                'Apply Online',
                'Phone Screening',
                'Background Check & Training',
                'Start Caring',
              ].map((s, i) => (
                <Reveal
                  key={s}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-fp-copper bg-fp-brown-dark font-display text-[22px] font-semibold text-[#C9A96E]">
                    {i + 1}
                  </div>
                  <p className="font-body text-[14px] font-semibold text-white">{s}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Application Form */}
        <section id="apply" className="bg-fp-cream fp-section-padding" aria-label="Application form">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <SectionTag>Apply</SectionTag>
                <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                  Submit Your Application
                </h2>
                <p className="mt-4 font-body text-lg text-fp-text-muted">
                  Tell us a little about your experience and what you’re looking for. We’ll follow up soon.
                </p>
                <p className="mt-6 font-body text-sm text-fp-text-muted">
                  Prefer to speak with us first?{' '}
                  <Link href="/contact/book-appointment" className="font-semibold text-fp-copper hover:text-fp-copper-dark">
                    Book a quick call →
                  </Link>
                </p>
              </Reveal>

              <Reveal
                delay={0.06}
                className="rounded-[16px] border border-[#E8DDD0] bg-[#FAF6F1] p-10"
              >
                <CareersApplicationForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

