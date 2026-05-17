import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'
import { COUNTIES } from '@/lib/constants'

export default function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      aria-label="Counties we serve"
      className="bg-mahogany py-20"
    >
      <div className="section-container">
        <SectionHeader
          label="Where We Serve"
          title="Serving Families Across 10 Georgia Counties"
          align="center"
          labelClassName="text-blush/70"
          titleClassName="text-white"
        />

        <ScrollReveal delay={0.3}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {COUNTIES.map((county) => (
              <li key={county}>
                <button
                  type="button"
                  className="cursor-pointer rounded-pill border border-white/25 px-5 py-2.5 text-[14px] font-medium text-white transition-all hover:border-roseGold hover:bg-roseGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2 focus-visible:ring-offset-mahogany"
                >
                  {county}
                </button>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <p className="mt-7 text-center text-[15px] text-white/55">
          Not sure if we serve your area?{' '}
          <a
            href="#contact"
            className="font-semibold text-roseGold transition-colors hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2 focus-visible:ring-offset-mahogany"
          >
            Call us and let&rsquo;s find out →
          </a>
        </p>
      </div>
    </section>
  )
}
