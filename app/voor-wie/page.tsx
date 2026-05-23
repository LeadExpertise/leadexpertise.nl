import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { VoorWieHero } from "@/components/voor-wie/hero"
import { VoorWieIdentification } from "@/components/voor-wie/identification"
import { VoorWieIdealProfile } from "@/components/voor-wie/ideal-profile"
import { VoorWieSectors } from "@/components/voor-wie/sectors"
import { VoorWieAntiPersona } from "@/components/voor-wie/anti-persona"
import { VoorWieCTA } from "@/components/voor-wie/cta"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Voor Wie? | Lokale Dienstverleners die Willen Groeien",
  description: "LeadExpertise is er exclusief voor ondernemers die hun vak verstaan, maar worstelen met een voorspelbare instroom van de juiste klanten. Ontdek of wij bij jou passen.",
  keywords: ["voor wie LeadExpertise", "doelgroep", "lokale dienstverleners", "praktijkhouders", "aannemers", "tandartsen"],
  openGraph: {
    title: "Voor Wie? | Lokale Dienstverleners die Willen Groeien",
    description: "LeadExpertise is er exclusief voor ondernemers die hun vak verstaan, maar worstelen met een voorspelbare instroom.",
    url: "https://leadexpertise.nl/voor-wie",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/voor-wie",
    languages: {
      "nl-NL": "https://leadexpertise.nl/voor-wie",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/voor-wie",
      name: "Voor Wie is LeadExpertise?",
      description: "Ontdek of LeadExpertise de juiste partner is voor jouw bedrijf",
      url: "https://leadexpertise.nl/voor-wie",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Voor Wie", item: "https://leadexpertise.nl/voor-wie" },
      ],
    },
    {
      "@type": "Service",
      name: "Leadgeneratie voor Lokale Dienstverleners",
      serviceType: "Digital Marketing",
      provider: { "@id": "https://leadexpertise.nl/#organization" },
      audience: {
        "@type": "Audience",
        audienceType: "Lokale dienstverleners, praktijkhouders, aannemers",
      },
    },
  ],
}

export default function VoorWiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <VoorWieHero />
        <VoorWieIdentification />
        <VoorWieIdealProfile />
        <VoorWieSectors />
        <VoorWieAntiPersona />
        <VoorWieCTA />
        <BookingCtaSection />
        <Footer />
      </div>
    </>
  )
}
