import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { WerkwijzeHero } from "@/components/werkwijze/hero"
import { WerkwijzeTimeline } from "@/components/werkwijze/timeline"
import { WerkwijzeDeliverables } from "@/components/werkwijze/deliverables"
import { WerkwijzeTechStack } from "@/components/werkwijze/tech-stack"
import { WerkwijzeFaq } from "@/components/werkwijze/faq"
import { WerkwijzeForm } from "@/components/werkwijze/form"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Onze Werkwijze | Van Kennismaking tot Klantenstroom",
  description: "Van kennismaking tot constante stroom aan klanten. Ontdek ons bewezen 4-stappenplan voor lokale dienstverleners. Binnen 14 dagen live.",
  keywords: ["werkwijze LeadExpertise", "onboarding proces", "marketing stappenplan", "leadgeneratie proces"],
  openGraph: {
    title: "Onze Werkwijze | Van Kennismaking tot Klantenstroom",
    description: "Ontdek ons bewezen 4-stappenplan voor lokale dienstverleners.",
    url: "https://leadexpertise.nl/werkwijze",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/werkwijze",
    languages: {
      "nl-NL": "https://leadexpertise.nl/werkwijze",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": "https://leadexpertise.nl/werkwijze#howto",
      name: "Hoe werkt samenwerken met LeadExpertise",
      description: "Van kennismaking tot constante stroom aan klanten in 4 stappen",
      totalTime: "P14D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Strategiesessie", text: "Gratis kennismaking en analyse van je groeipotentieel" },
        { "@type": "HowToStep", position: 2, name: "Opzet", text: "Wij bouwen je complete marketing systeem binnen 14 dagen" },
        { "@type": "HowToStep", position: 3, name: "Lancering", text: "Je campagnes gaan live en de eerste leads komen binnen" },
        { "@type": "HowToStep", position: 4, name: "Optimalisatie", text: "Continue verbetering voor maximale ROI" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Werkwijze", item: "https://leadexpertise.nl/werkwijze" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/werkwijze",
      url: "https://leadexpertise.nl/werkwijze",
      name: "Onze Werkwijze | Van Kennismaking tot Klantenstroom",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
  ],
}

export default function WerkwijzePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <WerkwijzeHero />
        <WerkwijzeTimeline />
        <WerkwijzeDeliverables />
        <WerkwijzeTechStack />
        <WerkwijzeFaq />
        <WerkwijzeForm />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
