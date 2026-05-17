'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div
      ref={ref}
      className={cn(
        'font-display text-[68px] md:text-[80px] font-bold leading-none text-white',
        className,
      )}
    >
      {inView ? (
        <CountUp
          end={value}
          suffix={suffix}
          prefix={prefix}
          duration={duration}
          enableScrollSpy
          scrollSpyOnce
        />
      ) : (
        <span aria-hidden>{prefix}0{suffix}</span>
      )}
    </div>
  )
}
