'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const TRUST_ITEMS = [
  'Medicaid CCSP Certified',
  'DBHDD State Approved',
  'Licensed & Insured Agency',
  '500+ Families Served',
  '10 Georgia Counties',
] as const

export default function TrustBar() {
  return (
    <motion.section
      aria-label="Trust signals"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.2,
      }}
      className="bg-mahogany py-[18px]"
    >
      <div className="section-container">
        <ul className="grid grid-cols-2 items-center gap-y-3 md:flex md:flex-wrap md:justify-center md:gap-y-0">
          {TRUST_ITEMS.map((item, i) => (
            <li
              key={item}
              className={
                'flex items-center justify-center gap-2.5 px-4 md:px-8 ' +
                (i === TRUST_ITEMS.length - 1
                  ? ''
                  : 'md:border-r md:border-white/15')
              }
            >
              <CheckCircle2
                className="h-4 w-4 flex-shrink-0 text-roseGold"
                aria-hidden
              />
              <span className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
