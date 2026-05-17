import JsonLd from '@/components/seo/JsonLd'

export default function BreadcrumbJsonLd({
  items,
  siteUrl,
}: {
  items: { label: string; href: string }[]
  siteUrl: string
}) {
  const itemListElement = items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.label,
    item: new URL(it.href, siteUrl).toString(),
  }))

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
      }}
    />
  )
}

