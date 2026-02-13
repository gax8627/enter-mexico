import { MetadataRoute } from 'next'
import { cities } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://entermexico.com'

  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guideUrls = [
    '/guides/safety-reality-check',
    '/guides/solvency-2025',
    '/advisor',
    '/premium',
    '/partner',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...cityRoutes,
    ...guideUrls,
  ]
}
