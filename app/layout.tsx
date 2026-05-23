import React from "react"
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0071eb',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://leadexpertise.nl'),
  title: {
    default: 'LeadExpertise | Google & META Ads Bureau',
    template: '%s | LeadExpertise',
  },
  description: 'Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door.',
  keywords: ['Google Ads', 'META Ads', 'leadgeneratie', 'online marketing', 'marketing bureau Nederland'],
  authors: [{ name: 'LeadExpertise', url: 'https://leadexpertise.nl' }],
  creator: 'LeadExpertise',
  publisher: 'LeadExpertise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://leadexpertise.nl',
    siteName: 'LeadExpertise',
    title: 'LeadExpertise | Google & META Ads Bureau',
    description: 'Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LeadExpertise - Google & META Ads Bureau voor Lokale Dienstverleners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadExpertise | Google & META Ads Bureau',
    description: 'Krijg een marketingmachine van wereldklasse met Google & META Ads.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://leadexpertise.nl',
    languages: {
      'nl-NL': 'https://leadexpertise.nl',
    },
  },
  category: 'Marketing',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3CW6VKX');`}
        </Script>
        
        {/* Critical font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Third-party preconnects for faster loading */}
        <link rel="preconnect" href="https://api.leadconnectorhq.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://stcdn.leadconnectorhq.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for less critical resources */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical above-the-fold font weights */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3CW6VKX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0KEPPH1M84"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0KEPPH1M84');
          `}
        </Script>
      </body>
    </html>
  )
}
