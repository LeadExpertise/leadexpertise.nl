import { Metadata } from "next"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AISeoHero } from "@/components/ai-seo/hero"
import { AISeoReviews } from "@/components/ai-seo/reviews"
import { AISeoCase } from "@/components/ai-seo/case-studies"
import { AISeoServices } from "@/components/ai-seo/services"
import { AISeoCta } from "@/components/ai-seo/cta"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "AI SEO & LLM Ranking | Slimme Zoekmachine Optimalisatie",
  description: "Laat je SEO slimmer werken met AI. Optimaliseer voor Google en AI-zoekmachines zoals ChatGPT. Meer organisch verkeer, betere rankings, hogere ROI.",
  keywords: ["AI SEO", "LLM ranking", "zoekmachine optimalisatie", "ChatGPT SEO", "organisch verkeer", "SEO bureau"],
  openGraph: {
    title: "AI SEO & LLM Ranking | Slimme Zoekmachine Optimalisatie",
    description: "Laat je SEO slimmer werken met AI. Optimaliseer voor Google en AI-zoekmachines.",
    url: "https://leadexpertise.nl/diensten/ai-seo",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/diensten/ai-seo",
    languages: {
      "nl-NL": "https://leadexpertise.nl/diensten/ai-seo",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadexpertise.nl/diensten/ai-seo#service",
      name: "AI SEO & LLM Ranking",
      description: "Slimme zoekmachine optimalisatie met AI voor Google en LLM zoekmachines",
      provider: { "@type": "Organization", name: "LeadExpertise", "@id": "https://leadexpertise.nl/#organization" },
      serviceType: "SEO Service",
      areaServed: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://leadexpertise.nl/diensten/google-meta" },
        { "@type": "ListItem", position: 3, name: "AI SEO", item: "https://leadexpertise.nl/diensten/ai-seo" },
      ],
    },
  ],
}

export default function AISeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="text-slate-900 bg-white">
        <AnnouncementBar />
        <Navigation />
        <AISeoHero />
        <AISeoReviews />
        <AISeoCase />
        <AISeoServices />
        <AISeoCta />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
