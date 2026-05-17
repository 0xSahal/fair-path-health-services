'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type FadeInWhenVisibleProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Extra vertical offset on enter (px). */
  y?: number
}

/**
 * Scroll-triggered fade + slight rise. Respects `prefers-reduced-motion`.
 */
export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  y = 20,
}: FadeInWhenVisibleProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

type SlideInWhenVisibleProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Slide from left (true) or right (false). */
  fromLeft: boolean
}

/** Horizontal slide-in for zigzag rows. */
export function SlideInWhenVisible({
  children,
  className,
  delay = 0,
  fromLeft,
}: SlideInWhenVisibleProps) {
  const reduceMotion = useReducedMotion()
  const x = reduceMotion ? 0 : fromLeft ? -40 : 40

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-64px 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
