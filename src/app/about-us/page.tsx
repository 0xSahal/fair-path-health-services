import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'About Us | Fair Path Health Services',
  description:
    'Our story, mission and values, clinical leadership, commitments, why families trust Fair Path, and how we coordinate premium in-home care across Georgia.',
}

export default function AboutUsPage() {
  redirect('/about')
}

