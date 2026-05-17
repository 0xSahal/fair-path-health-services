import Link from 'next/link'
import { ClipboardCheck, HeartHandshake, Phone } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'

const steps = [
  {
    n: '1',
    title: 'Reach Out',
    body:
      'Call us or fill out our online form. Our care coordinators are available anytime to answer your questions and guide you through the next steps.',
    icon: Phone,
  },
  {
    n: '2',
    title: 'Free Assessment',
    body: "We'll schedule a complimentary in-home assessment to understand your loved one's unique needs.",
    icon: ClipboardCheck,
  },
  {
    n: '3',
    title: 'Care Begins',
    body:
      'Within days, your matched, vetted caregiver arrives, and your family gets the peace of mind it deserves.',
    icon: HeartHandshake,
  },
] as const

export default function HomeHowItWorks() {
  return (
    <section aria-label="How to get started" className="bg-fp-brown-dark fp-section-padding text-fp-cream">
      <div className="section-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-center text-fp-copper">Simple & Stress-Free</SectionTag>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-cream">
            Getting Started is Easy
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            aria-hidden
            className="absolute left-[16.6667%] right-[16.6667%] top-[31px] hidden h-[2px] md:block"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(201,154,107,0.9) 0px, rgba(201,154,107,0.9) 10px, transparent 10px, transparent 22px)',
            }}
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.n} delay={i * 0.08} className="relative z-10 text-center">
                  <div className="relative mb-5 inline-block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-fp-copper bg-fp-brown-dark text-fp-copper shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <span
                      aria-label={`Step ${step.n}`}
                      className="absolute -right-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-fp-copper font-display text-[11px] font-bold text-fp-white shadow-md ring-2 ring-fp-brown-dark"
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-fp-cream">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs font-body text-[15px] leading-relaxed text-fp-cream/75">
                    {step.body}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/contact/book-appointment"
            className="inline-flex w-full max-w-[380px] items-center justify-center rounded-md border-2 border-fp-copper bg-fp-copper px-8 py-3.5 font-body text-sm font-semibold normal-case tracking-normal text-fp-white transition-colors duration-200 hover:bg-fp-copper-light"
          >
            Schedule Your Free Assessment →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
