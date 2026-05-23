import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '1',
    title: 'Reach Out',
    description:
      'Call us or complete our simple form. We respond within hours, because your family\u2019s needs simply cannot wait.',
  },
  {
    number: '2',
    title: 'Free Assessment',
    description:
      'We visit your home, listen carefully, and build a fully personalized care plan around your loved one\u2019s unique situation.',
  },
  {
    number: '3',
    title: 'Care Begins',
    description:
      'Your dedicated, vetted caregiver arrives, ready to become a trusted, reliable presence in your family\u2019s daily life.',
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-label="How our care works"
      className="bg-white py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="Getting Started"
          title="Care in Three Simple Steps"
          align="center"
        />

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Dashed connector (desktop only) */}
          <div
            aria-hidden
            className="absolute left-[20%] right-[20%] top-[40px] hidden h-[2px] md:block"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(var(--fp-copper-rgb) / 0.7) 0px, rgba(var(--fp-copper-rgb) / 0.7) 8px, transparent 8px, transparent 18px)',
            }}
          />

          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.2}>
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-mahogany font-display text-[32px] font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-h3 font-bold text-mahogany">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[240px] font-body text-[15px] leading-[1.7] text-slate">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
