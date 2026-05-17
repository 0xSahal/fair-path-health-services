import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/payment/insurance', destination: '/payment', permanent: true },
      { source: '/payment/private-pay', destination: '/payment', permanent: true },
      { source: '/payment/medicaid', destination: '/payment', permanent: true },
      { source: '/resources/forms', destination: '/payment', permanent: true },
    ]
  },
  images: {
    qualities: [75, 95, 100],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
