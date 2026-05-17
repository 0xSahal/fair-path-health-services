import AnimatedCounter from '@/components/shared/AnimatedCounter'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { STATS } from '@/lib/constants'

export default function StatsSection() {
  return (
    <section
      id="stats"
      aria-label="Our impact"
      className="bg-mahogany py-20"
    >
      <div className="section-container">
        <div className="mb-12 h-[2px] w-24 bg-roseGold mx-auto" aria-hidden />

        <div className="mx-auto grid max-w-[960px] grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const isLastInMobileRow = index === 1
            return (
              <ScrollReveal key={stat.label} delay={index * 0.15}>
                <div
                  className={[
                    'px-4 py-5 text-center md:px-8',
                    'border-r border-white/[0.12]',
                    isLastInMobileRow ? 'border-r-0 lg:border-r' : '',
                    index === STATS.length - 1 ? 'lg:border-r-0' : '',
                  ].join(' ')}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                  <p className="mt-3 font-body text-[13px] uppercase tracking-[0.08em] text-blush/70">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-12 h-[2px] w-24 bg-roseGold mx-auto" aria-hidden />
      </div>
    </section>
  )
}
