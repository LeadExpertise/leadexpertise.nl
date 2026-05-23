import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { OndernemersHero } from "@/components/ondernemers/hero"
import { StrategySessionSection } from "@/components/ondernemers/strategy-session-section"
import { ReviewsShowcaseSection } from "@/components/ondernemers/reviews-showcase-section"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Nieuwe Klanten via Google & META Ads | Voor Ondernemers",
  description: "Wil je nieuwe klanten uit Google of META Ads? Krijg een marketingmachine van wereldklasse met resultaatgarantie. Gratis strategiesessie beschikbaar.",
  keywords: ["klanten werven", "Google Ads ondernemers", "META Ads zakelijk", "leadgeneratie MKB", "marketing voor ondernemers"],
  openGraph: {
    title: "Nieuwe Klanten via Google & META Ads | Voor Ondernemers",
    description: "Krijg een marketingmachine van wereldklasse met resultaatgarantie.",
    url: "https://leadexpertise.nl/voor-wie/ondernemers",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/voor-wie/ondernemers",
    languages: {
      "nl-NL": "https://leadexpertise.nl/voor-wie/ondernemers",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/voor-wie/ondernemers",
      name: "Nieuwe Klanten voor Ondernemers",
      description: "Leadgeneratie via Google en META Ads voor ondernemers",
      url: "https://leadexpertise.nl/voor-wie/ondernemers",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Voor Wie", item: "https://leadexpertise.nl/voor-wie" },
        { "@type": "ListItem", position: 3, name: "Ondernemers", item: "https://leadexpertise.nl/voor-wie/ondernemers" },
      ],
    },
  ],
}

export default function OndernemersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="antialiased text-slate-900 bg-white">
        <AnnouncementBar />
        <Navigation />
        <OndernemersHero />
        <StrategySessionSection />
        <ReviewsShowcaseSection />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
