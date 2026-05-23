import { Metadata } from "next"
import { HormoziHero } from "@/components/leadpage-hormozi/hero"
import { SocialProofSection } from "@/components/leadpage-hormozi/social-proof-section"
import { HowItWorksSection } from "@/components/leadpage-hormozi/how-it-works-section"
import { ScanSection } from "@/components/leadpage-hormozi/scan-section"
import { TestimonialsGridSection } from "@/components/leadpage-hormozi/testimonials-grid-section"
import { HormoziFaqSection } from "@/components/leadpage-hormozi/faq-section"
import { HormoziFooter } from "@/components/leadpage-hormozi/footer"

export const metadata: Metadata = {
  title: "Praktijk Groei Systeem | Meer Cliënten via Google Ads - LeadExpertise",
  description:
    "Krijg nieuwe cliënten via Google Ads met resultaatgarantie. Wij bouwen een volledig geautomatiseerd leadsysteem voor praktijkhouders in Nederland. Binnen 14 dagen live, exclusiviteit per regio.",
  keywords: [
    "Google Ads praktijk",
    "leadsysteem praktijkhouders",
    "meer cliënten tandarts",
    "marketing fysiotherapie",
    "online marketing zorg",
    "leads genereren praktijk",
    "Google Ads zorg",
    "patiënten werven",
    "praktijk marketing",
    "leadgeneratie gezondheidszorg",
  ],
  authors: [{ name: "LeadExpertise" }],
  creator: "LeadExpertise",
  publisher: "LeadExpertise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
    siteName: "LeadExpertise",
    title: "Praktijk Groei Systeem | Meer Cliënten via Google Ads",
    description:
      "Krijg nieuwe cliënten via Google Ads met resultaatgarantie. Volledig geautomatiseerd leadsysteem voor praktijkhouders. Binnen 14 dagen live.",
    images: [
      {
        url: "/og-praktijk-groei.jpg",
        width: 1200,
        height: 630,
        alt: "LeadExpertise Praktijk Groei Systeem - Meer cliënten via Google Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praktijk Groei Systeem | Meer Cliënten via Google Ads",
    description:
      "Krijg nieuwe cliënten via Google Ads met resultaatgarantie. Volledig geautomatiseerd leadsysteem voor praktijkhouders.",
    images: ["/og-praktijk-groei.jpg"],
    creator: "@leadexpertise",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
    languages: {
      "nl-NL": "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
    },
  },
  category: "Marketing",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
      url: "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
      name: "Praktijk Groei Systeem | Meer Cliënten via Google Ads - LeadExpertise",
      description:
        "Krijg nieuwe cliënten via Google Ads met resultaatgarantie. Wij bouwen een volledig geautomatiseerd leadsysteem voor praktijkhouders in Nederland.",
      isPartOf: {
        "@id": "https://leadexpertise.nl/#website",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://leadexpertise.nl/og-praktijk-groei.jpg",
      },
      inLanguage: "nl-NL",
    },
    {
      "@type": "Organization",
      "@id": "https://leadexpertise.nl/#organization",
      name: "LeadExpertise",
      url: "https://leadexpertise.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://leadexpertise.nl/logo.png",
      },
      sameAs: [
        "https://www.linkedin.com/in/samdevries1/",
        "https://www.facebook.com/leadexpertise",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["Dutch"],
      },
    },
    {
      "@type": "Service",
      "@id": "https://leadexpertise.nl/voor-wie/leadpage-hormozi#service",
      name: "Praktijk Groei Systeem",
      description:
        "Volledig geautomatiseerd Google Ads leadsysteem voor praktijkhouders met resultaatgarantie. Inclusief advertenties, landingspagina, CRM-integratie en automatische opvolging.",
      provider: {
        "@id": "https://leadexpertise.nl/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Nederland",
      },
      serviceType: "Digital Marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Praktijk Marketing Diensten",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads Management",
              description: "Professioneel beheer van Google Ads campagnes gericht op praktijkhouders",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Leadgeneratie Systeem",
              description: "Geautomatiseerd systeem voor het genereren en opvolgen van leads",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketing Automatisering",
              description: "WhatsApp en SMS automatisering voor lead opvolging",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://leadexpertise.nl/voor-wie/leadpage-hormozi#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kost het opvolgen van leads mij niet te veel tijd?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee, dat is precies wat we voorkomen. Het systeem filtert automatisch de shoppers eruit. U of uw assistente spreekt alleen mensen die serieus zijn en een afspraak willen plannen. Bovendien automatiseren we de eerste contactmomenten via WhatsApp en SMS. Hierdoor is uw agenda gevuld met consulten, niet met telefoontjes.",
          },
        },
        {
          "@type": "Question",
          name: "Werkt dit ook in een kleine regio of dorp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vaak zelfs beter dan in de grote stad. In lokale markten is de concurrentie op advertentiegebied vaak lager, waardoor u voor een lager bedrag de dominante speler wordt. We doen vooraf altijd de Potentie-Scan om zeker te weten dat er genoeg zoekvolume is in uw specifieke postcodegebied.",
          },
        },
        {
          "@type": "Question",
          name: "Zit ik vast aan een langdurig contract?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absoluut niet. Wij werken met een maandelijks opzegbaar model. Wij zijn ervan overtuigd dat u klant blijft vanwege de resultaten, niet vanwege een wurgcontract. Transparantie is voor ons de basis van een langdurige samenwerking.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://leadexpertise.nl/voor-wie/leadpage-hormozi#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://leadexpertise.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Voor Wie",
          item: "https://leadexpertise.nl/voor-wie",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Praktijk Groei Systeem",
          item: "https://leadexpertise.nl/voor-wie/leadpage-hormozi",
        },
      ],
    },
    {
      "@type": "AggregateRating",
      "@id": "https://leadexpertise.nl/#aggregaterating",
      ratingValue: "5",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
      itemReviewed: {
        "@id": "https://leadexpertise.nl/#organization",
      },
    },
  ],
}

export default function LeadpageHormoziPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="antialiased text-slate-900 bg-white">
        <HormoziHero />
        <SocialProofSection />
        <HowItWorksSection />
        <ScanSection />
        <TestimonialsGridSection />
        <section className="bg-white pt-24 pb-24 border-t border-slate-100"></section>
        <HormoziFaqSection />
        <HormoziFooter />
      </main>
    </>
  )
}
