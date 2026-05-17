'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  y = 32,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
