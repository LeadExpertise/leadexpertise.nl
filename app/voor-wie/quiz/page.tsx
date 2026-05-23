import { Metadata } from "next"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuizHero } from "@/components/quiz/hero"
import { QuizBenefitsSection } from "@/components/quiz/benefits-section"
import { QuizCaseStudiesSection } from "@/components/quiz/case-studies-section"
import { QuizSuccessStorySection } from "@/components/quiz/success-story-section"
import { QuizExpertiseSection } from "@/components/quiz/expertise-section"
import { QuizNextStepsSection } from "@/components/quiz/next-steps-section"
import { QuizFaqSection } from "@/components/quiz/faq-section"
import { BookingCtaSection } from "@/components/booking-cta-section"

export const metadata: Metadata = {
  title: "Advertentie Quiz | Ontdek je Groeipotentieel",
  description: "Adverteer je al voor je bedrijf? Ontdek wat LeadExpertise voor jouw bedrijf kan betekenen. Krijg meer leads of we werken gratis door.",
  keywords: ["marketing quiz", "advertentie potentieel", "leadgeneratie quiz", "Google Ads assessment"],
  openGraph: {
    title: "Advertentie Quiz | Ontdek je Groeipotentieel",
    description: "Ontdek wat LeadExpertise voor jouw bedrijf kan betekenen.",
    url: "https://leadexpertise.nl/voor-wie/quiz",
    siteName: "LeadExpertise",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/voor-wie/quiz",
    languages: {
      "nl-NL": "https://leadexpertise.nl/voor-wie/quiz",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://leadexpertise.nl/voor-wie/quiz",
      name: "Advertentie Quiz",
      description: "Ontdek je groeipotentieel met online advertenties",
      url: "https://leadexpertise.nl/voor-wie/quiz",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Voor Wie", item: "https://leadexpertise.nl/voor-wie" },
        { "@type": "ListItem", position: 3, name: "Quiz", item: "https://leadexpertise.nl/voor-wie/quiz" },
      ],
    },
  ],
}

export default function QuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="antialiased text-slate-900 bg-white">
        <AnnouncementBar />
        <Navigation />
        <QuizHero />
        <QuizBenefitsSection />
        <QuizCaseStudiesSection />
        <QuizSuccessStorySection />
        <QuizExpertiseSection />
        <QuizNextStepsSection />
        <QuizFaqSection />
        <BookingCtaSection />
        <Footer />
      </main>
    </>
  )
}
