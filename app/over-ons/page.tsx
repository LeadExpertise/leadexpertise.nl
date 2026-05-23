import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { OverOnsHero } from "@/components/over-ons/hero"
import { FounderStory } from "@/components/over-ons/founder-story"
import { TeamSection } from "@/components/over-ons/team"
import { CultureSection } from "@/components/over-ons/culture"
import { OverOnsForm } from "@/components/over-ons/form"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Over Ons | Het Verhaal Achter LeadExpertise",
  description: "Ontdek hoe een zoektocht naar resultaat leidde tot het systeem dat LeadExpertise vandaag is. Maak kennis met ons team en onze missie om lokale ondernemers te helpen groeien.",
  keywords: ["over LeadExpertise", "marketing bureau team", "Sam de Vries", "leadgeneratie specialist"],
  openGraph: {
    title: "Over Ons | Het Verhaal Achter LeadExpertise",
    description: "Ontdek hoe een zoektocht naar resultaat leidde tot het systeem dat LeadExpertise vandaag is.",
    url: "https://leadexpertise.nl/over-ons",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/over-ons",
    languages: {
      "nl-NL": "https://leadexpertise.nl/over-ons",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://leadexpertise.nl/over-ons",
      name: "Over LeadExpertise",
      description: "Het verhaal achter LeadExpertise en ons team",
      url: "https://leadexpertise.nl/over-ons",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Over Ons", item: "https://leadexpertise.nl/over-ons" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://leadexpertise.nl/#organization",
      name: "LeadExpertise",
      url: "https://leadexpertise.nl",
      founder: {
        "@type": "Person",
        name: "Sam de Vries",
        jobTitle: "Oprichter",
        sameAs: "https://www.linkedin.com/in/samdevries1/",
      },
    },
  ],
}

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <OverOnsHero />
        <FounderStory />
        <TeamSection />
        <CultureSection />
        <OverOnsForm />
        <BookingCtaSection />
        <Footer />
      </div>
    </>
  )
}
