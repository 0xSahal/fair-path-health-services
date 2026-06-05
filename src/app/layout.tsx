import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Playfair_Display,
  Lora,
  DM_Sans,
  Cormorant_Garamond,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { BRAND_LOGO, SITE_CONFIG } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

const siteUrl = 'https://www.fairpathhealth.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Fair Path Health Services provides compassionate, professional in-home care across 10 Georgia counties. We accept private pay only.',
  keywords: [
    'home care georgia',
    'in-home care douglasville',
    'private pay home care georgia',
    'elder care atlanta',
    'personal care aide georgia',
  ],
  authors: [{ name: SITE_CONFIG.name, url: siteUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      'Luxury-minded home care rooted in compassion, integrity, and clinical excellence, serving families across Georgia.',
    images: [
      {
        url: BRAND_LOGO.src,
        width: 1200,
        height: 630,
        alt: BRAND_LOGO.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    images: [BRAND_LOGO.src],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: BRAND_LOGO.src, type: 'image/png' }],
    shortcut: BRAND_LOGO.src,
    apple: [{ url: BRAND_LOGO.src, sizes: '180x180', type: 'image/png' }],
  },
  alternates: { canonical: siteUrl },
  category: 'health',
}

const fontVars = [
  playfair.variable,
  lora.variable,
  dmSans.variable,
  cormorant.variable,
].join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: siteUrl,
    logo: new URL(BRAND_LOGO.src, siteUrl).toString(),
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    url: siteUrl,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: new URL(BRAND_LOGO.src, siteUrl).toString(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Douglasville',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }

  const medicalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_CONFIG.name,
    url: siteUrl,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Douglasville',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }

  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <body className="min-h-dvh bg-fp-cream font-body text-fp-text-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fp-cream focus:px-4 focus:py-3 focus:font-body focus:text-sm focus:font-semibold focus:text-fp-brown-dark focus:shadow-card focus:ring-2 focus:ring-fp-copper"
        >
          Skip to main content
        </a>
        <JsonLd data={org} />
        <JsonLd data={localBusiness} />
        <JsonLd data={medicalBusiness} />
        <Navbar />
        {children}
        <Analytics />
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/f8624917b17c68468003f1b48685e13a/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
