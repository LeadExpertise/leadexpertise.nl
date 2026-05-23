import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { AIAutomatiseringHero } from "@/components/ai-automatisering/hero"
import { AIAutomatiseringProblem } from "@/components/ai-automatisering/problem"
import { AIAutomatiseringSolutions } from "@/components/ai-automatisering/solutions"
import { AIAutomatiseringComparison } from "@/components/ai-automatisering/comparison"
import { AIAutomatiseringForm } from "@/components/ai-automatisering/form"
import { AIAutomatiseringFAQ } from "@/components/ai-automatisering/faq"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "AI Automatisering & Oplossingen | Maatwerk AI voor je Bedrijf",
  description: "Maak je bedrijf slimmer, sneller en schaalbaar met maatwerk AI-oplossingen. Automatiseer repeterend werk, elimineer fouten en bespaar tijd.",
  keywords: ["AI automatisering", "bedrijfsautomatisering", "AI oplossingen", "workflow automatisering", "AI integratie"],
  openGraph: {
    title: "AI Automatisering & Oplossingen | Maatwerk AI voor je Bedrijf",
    description: "Maak je bedrijf slimmer, sneller en schaalbaar met maatwerk AI-oplossingen.",
    url: "https://leadexpertise.nl/diensten/ai-automatisering",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/diensten/ai-automatisering",
    languages: {
      "nl-NL": "https://leadexpertise.nl/diensten/ai-automatisering",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadexpertise.nl/diensten/ai-automatisering#service",
      name: "AI Automatisering",
      description: "Maatwerk AI-oplossingen die repeterend werk overnemen en fouten elimineren",
      provider: { "@type": "Organization", name: "LeadExpertise", "@id": "https://leadexpertise.nl/#organization" },
      serviceType: "AI Automation",
      areaServed: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://leadexpertise.nl/diensten/google-meta" },
        { "@type": "ListItem", position: 3, name: "AI Automatisering", item: "https://leadexpertise.nl/diensten/ai-automatisering" },
      ],
    },
  ],
}

export default function AIAutomatiseringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <main>
          <AIAutomatiseringHero />
          <AIAutomatiseringProblem />
          <AIAutomatiseringSolutions />
          <AIAutomatiseringComparison />
          <AIAutomatiseringForm />
          <AIAutomatiseringFAQ />
          <BookingCtaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
