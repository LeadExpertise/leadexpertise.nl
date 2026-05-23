import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeadExpertise - Google & META Ads Bureau',
    short_name: 'LeadExpertise',
    description: 'Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0071eb',
    orientation: 'portrait',
    icons: [
      {
        src: '/logo-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
