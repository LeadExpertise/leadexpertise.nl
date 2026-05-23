import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { ChatbotsHero } from "@/components/ai-chatbots/hero"
import { ChatbotsPainPoints } from "@/components/ai-chatbots/pain-points"
import { ChatbotsBenefits } from "@/components/ai-chatbots/benefits"
import { ChatbotsHowItWorks } from "@/components/ai-chatbots/how-it-works"
import { ChatbotsComparison } from "@/components/ai-chatbots/comparison"
import { ChatbotsForm } from "@/components/ai-chatbots/form"
import { ChatbotsFAQ } from "@/components/ai-chatbots/faq"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "AI Chatbots | Automatische Lead Opvolging via WhatsApp",
  description: "Laat leads niet wachten. Onze slimme WhatsApp-assistent volgt leads direct op, kwalificeert ze en plant afspraken in jouw agenda. 24/7 beschikbaar.",
  keywords: ["AI chatbot", "WhatsApp automatisering", "lead opvolging", "chatbot voor bedrijven", "geautomatiseerde afspraken"],
  openGraph: {
    title: "AI Chatbots | Automatische Lead Opvolging via WhatsApp",
    description: "Onze slimme WhatsApp-assistent volgt leads direct op, kwalificeert ze en plant afspraken.",
    url: "https://leadexpertise.nl/diensten/ai-chatbots",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/diensten/ai-chatbots",
    languages: {
      "nl-NL": "https://leadexpertise.nl/diensten/ai-chatbots",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadexpertise.nl/diensten/ai-chatbots#service",
      name: "AI Chatbots voor Lead Opvolging",
      description: "Slimme WhatsApp-assistent die leads direct opvolgt, kwalificeert en afspraken plant",
      provider: { "@type": "Organization", name: "LeadExpertise", "@id": "https://leadexpertise.nl/#organization" },
      serviceType: "Chatbot Service",
      areaServed: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://leadexpertise.nl/diensten/google-meta" },
        { "@type": "ListItem", position: 3, name: "AI Chatbots", item: "https://leadexpertise.nl/diensten/ai-chatbots" },
      ],
    },
  ],
}

export default function AIChatbotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navigation />
        <ChatbotsHero />
        <ChatbotsPainPoints />
        <ChatbotsBenefits />
        <ChatbotsHowItWorks />
        <ChatbotsComparison />
        <ChatbotsForm />
        <ChatbotsFAQ />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
