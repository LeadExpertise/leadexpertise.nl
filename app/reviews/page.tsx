import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { ReviewsHero } from "@/components/reviews/hero"
import { GoogleReviews } from "@/components/reviews/google-reviews"
import { CaseStudies } from "@/components/reviews/case-studies"
import { ReviewsForm } from "@/components/reviews/form"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Reviews & Case Studies | Klantresultaten van LeadExpertise",
  description: "Bekijk echte resultaten en 5-sterren Google reviews van onze klanten. Ontdek hoe wij lokale ondernemers helpen groeien met Google & META Ads.",
  keywords: ["LeadExpertise reviews", "case studies", "klantresultaten", "Google Ads resultaten", "testimonials"],
  openGraph: {
    title: "Reviews & Case Studies | Klantresultaten van LeadExpertise",
    description: "Bekijk echte resultaten en 5-sterren Google reviews van onze klanten.",
    url: "https://leadexpertise.nl/reviews",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/reviews",
    languages: {
      "nl-NL": "https://leadexpertise.nl/reviews",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://leadexpertise.nl/reviews",
      name: "Reviews & Case Studies",
      description: "Klantreviews en case studies van LeadExpertise",
      url: "https://leadexpertise.nl/reviews",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Reviews & Case Studies", item: "https://leadexpertise.nl/reviews" },
      ],
    },
    {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
      itemReviewed: {
        "@type": "Organization",
        name: "LeadExpertise",
        url: "https://leadexpertise.nl",
      },
    },
  ],
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <ReviewsHero />
        <GoogleReviews />
        <CaseStudies />
        <ReviewsForm />
        <BookingCtaSection />
        <Footer />
      </div>
    </>
  )
}
