import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol' | 'li'

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  delay?: number
  className?: string
  /** Render as a different element/tag while keeping reveal behavior. */
  as?: RevealTag
}

/**
 * Server-rendered reveal wrapper. Ships zero client JavaScript.
 *
 * Visual behavior:
 *  - Modern browsers (Chrome/Edge/Safari TP) use `animation-timeline: view()`
 *    so children fade/slide in as they scroll into the viewport.
 *  - Older browsers (Firefox, etc.) fall back to a one-time entrance animation
 *    on initial mount; content is fully visible at all times — no
 *    `opacity: 0` is shipped to the user, so the page never flashes blank.
 *  - Users with `prefers-reduced-motion: reduce` see no animation at all.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
  style,
  ...rest
}: RevealProps) {
  const mergedStyle: CSSProperties | undefined = delay
    ? { ...style, animationDelay: `${delay}s` }
    : style

  return (
    <Tag className={cn('fp-reveal', className)} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  )
}
