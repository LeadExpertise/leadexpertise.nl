import { Metadata } from "next"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { ProvenSystemSection } from "@/components/proven-system-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { TrustSection } from "@/components/trust-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ReasonsSection } from "@/components/reasons-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "LeadExpertise | Google & META Ads Bureau voor Lokale Dienstverleners",
  description: "Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door. Exclusiviteit per regio, maandelijks opzegbaar.",
  keywords: [
    "Google Ads bureau",
    "META Ads bureau",
    "leadgeneratie",
    "marketing voor dienstverleners",
    "lokale marketing",
    "online marketing bureau",
    "leads genereren",
    "Google Ads beheer",
    "Facebook Ads",
    "Instagram Ads",
  ],
  authors: [{ name: "LeadExpertise", url: "https://leadexpertise.nl" }],
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
    url: "https://leadexpertise.nl",
    siteName: "LeadExpertise",
    title: "LeadExpertise | Google & META Ads Bureau voor Lokale Dienstverleners",
    description: "Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LeadExpertise - Google & META Ads Bureau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadExpertise | Google & META Ads Bureau",
    description: "Krijg een marketingmachine van wereldklasse met Google & META Ads. We garanderen resultaat of we werken gratis door.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://leadexpertise.nl",
    languages: {
      "nl-NL": "https://leadexpertise.nl",
      "x-default": "https://leadexpertise.nl",
    },
  },
  category: "Marketing",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://leadexpertise.nl/#website",
      url: "https://leadexpertise.nl",
      name: "LeadExpertise",
      description: "Google & META Ads Bureau voor Lokale Dienstverleners",
      publisher: { "@id": "https://leadexpertise.nl/#organization" },
      inLanguage: "nl-NL",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://leadexpertise.nl/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://leadexpertise.nl/#organization",
      name: "LeadExpertise",
      url: "https://leadexpertise.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://leadexpertise.nl/logo.png",
        width: 200,
        height: 60,
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
      "@type": "LocalBusiness",
      "@id": "https://leadexpertise.nl/#localbusiness",
      name: "LeadExpertise",
      description: "Marketing bureau gespecialiseerd in Google Ads en META Ads voor lokale dienstverleners in Nederland",
      url: "https://leadexpertise.nl",
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Nederland",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Service",
      name: "Google & META Ads Management",
      description: "Volledig beheerde Google Ads en META Ads campagnes met resultaatgarantie voor lokale dienstverleners",
      provider: { "@id": "https://leadexpertise.nl/#organization" },
      areaServed: { "@type": "Country", name: "Nederland" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing Diensten",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Beheer" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "META Ads Beheer" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leadgeneratie" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Automatisering" } },
        ],
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="antialiased text-slate-900 bg-white">
        <AnnouncementBar />
        <Navigation />
        <HeroSection />
        <section className="bg-[#fafafa] border-slate-200 border-b pt-20 px-6 pb-20">
          <VideoSection />
          <PainPointsSection />
        </section>
        <ProvenSystemSection />
        <BenefitsSection />
        <ContactFormSection />
        <TrustSection />
        <ComparisonSection />
        <CaseStudiesSection />
        <ReasonsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
