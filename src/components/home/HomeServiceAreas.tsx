import { MapPin } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'
import { COUNTIES_SERVED, SITE_CONFIG } from '@/lib/constants'

export default function HomeServiceAreas() {
  return (
    <section aria-label="Service areas" className="bg-fp-cream fp-section-padding">
      <div className="section-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-sm italic tracking-[0.14em] text-fp-copper md:text-base">
            Where We Serve
          </p>
          <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
            Proudly Serving 10 Georgia Counties
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-fp-text-muted md:text-lg">
            Our caregivers live and work in these communities. We understand Georgia families
            because we are one.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          delay={0.05}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
        >
          {COUNTIES_SERVED.map((county) => (
            <li key={county}>
              <span className="group inline-flex w-full items-center justify-center gap-2 rounded-pill border border-fp-border bg-fp-white px-3 py-2.5 font-body text-sm font-semibold text-fp-brown-dark transition-colors duration-200 ease-out hover:border-fp-copper hover:bg-fp-copper hover:text-fp-white">
                <MapPin
                  className="h-4 w-4 text-fp-copper transition-colors duration-200 ease-out group-hover:text-fp-white"
                  aria-hidden
                />
                {county}
              </span>
            </li>
          ))}
        </Reveal>

        <p className="mt-10 text-center font-body text-sm text-fp-text-muted md:text-base">
          Not sure if we serve your area? Call us:{' '}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="font-semibold text-fp-copper transition-colors hover:text-fp-copper-dark"
          >
            {SITE_CONFIG.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
