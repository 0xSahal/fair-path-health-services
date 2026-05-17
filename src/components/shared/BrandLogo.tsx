import Image from 'next/image'

import { BRAND_LOGO } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  /** Sized box for `fill` + `object-contain` (keeps official artwork aspect ratio). */
  boxClassName: string
  className?: string
  sizes: string
  priority?: boolean
}

/**
 * Renders the official Fair Path logo from `/public/brand/Logo.png`
 * at high quality (95) without altering the artwork.
 */
export default function BrandLogo({
  boxClassName,
  className,
  sizes,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={cn('relative block', boxClassName)}>
      <Image
        src={BRAND_LOGO.src}
        alt={BRAND_LOGO.alt}
        fill
        sizes={sizes}
        quality={95}
        className={cn('object-contain object-center', className)}
        priority={priority}
      />
    </span>
  )
}
