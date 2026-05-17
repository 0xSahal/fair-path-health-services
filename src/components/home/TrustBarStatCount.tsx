'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

export default function TrustBarStatCount({
  end,
  suffix = '',
  prefix = '',
}: {
  end: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <span ref={ref} className="font-display text-xl font-bold text-fp-copper md:text-2xl">
      {inView ? (
        <CountUp end={end} suffix={suffix} prefix={prefix} duration={2} decimals={0} />
      ) : (
        <span aria-hidden>
          {prefix}0{suffix}
        </span>
      )}
    </span>
  )
}
