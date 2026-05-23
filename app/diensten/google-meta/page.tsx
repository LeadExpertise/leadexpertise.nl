import { Metadata } from "next"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingCtaSection } from "@/components/booking-cta-section"
import { OfferHero } from "@/components/google-meta/offer-hero"
import { AdsFunnelsSection } from "@/components/google-meta/ads-funnels-section"
import { FollowUpSection } from "@/components/google-meta/follow-up-section"
import { InsightsSection } from "@/components/google-meta/insights-section"
import { ScalingSection } from "@/components/google-meta/scaling-section"
import { TrustPartnershipSection } from "@/components/google-meta/trust-partnership-section"
import { GuaranteeSection } from "@/components/google-meta/guarantee-section"
import { OfferFormSection } from "@/components/google-meta/offer-form-section"

export const metadata: Metadata = {
  title: "Ons Aanbod | Het Complete Systeem voor Voorspelbare Groei",
  description: "Van de eerste klik tot de getekende offerte. Ontdek precies wat wij leveren: Google & META Ads, CRM, WhatsApp automatisering, en meer. Resultaatgarantie.",
  keywords: ["Google Ads pakket", "META Ads diensten", "leadgeneratie systeem", "marketing automatisering", "CRM integratie"],
  openGraph: {
    title: "Ons Aanbod | Het Complete Systeem voor Voorspelbare Groei",
    description: "Van de eerste klik tot de getekende offerte. Ontdek precies wat wij leveren.",
    url: "https://leadexpertise.nl/diensten/google-meta",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/diensten/google-meta",
    languages: {
      "nl-NL": "https://leadexpertise.nl/diensten/google-meta",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadexpertise.nl/diensten/google-meta#service",
      name: "Google & META Ads Pakket",
      description: "Het complete systeem voor voorspelbare groei: advertenties, funnels, CRM, automatisering en meer",
      provider: { "@type": "Organization", name: "LeadExpertise", "@id": "https://leadexpertise.nl/#organization" },
      serviceType: "Digital Marketing",
      areaServed: { "@type": "Country", name: "Nederland" },
      offers: {
        "@type": "Offer",
        description: "Maandelijks opzegbaar, resultaatgarantie",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://leadexpertise.nl/diensten/google-meta" },
        { "@type": "ListItem", position: 3, name: "Google & META Ads", item: "https://leadexpertise.nl/diensten/google-meta" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/diensten/google-meta",
      url: "https://leadexpertise.nl/diensten/google-meta",
      name: "Ons Aanbod | Het Complete Systeem voor Voorspelbare Groei",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
  ],
}

export default function GoogleMetaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="antialiased text-slate-900 bg-white">
        <AnnouncementBar />
        <Navigation />
        <OfferHero />
        <AdsFunnelsSection />
        <FollowUpSection />
        <InsightsSection />
        <ScalingSection />
        <TrustPartnershipSection />
        <GuaranteeSection />
        <OfferFormSection />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
