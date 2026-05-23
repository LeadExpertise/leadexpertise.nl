"use client"

import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Op maat gemaakte SEO-strategie",
    description:
      "Elke SEO-aanpak wordt afgestemd op jouw bedrijf, markt en doelen. We focussen op de tactieken die aantoonbaar de meeste impact hebben.",
  },
  {
    title: "Local SEO",
    description:
      "Onze specialisten zorgen ervoor dat je beter zichtbaar bent in Google Maps, lokale zoekresultaten en relevante lokale zoekopdrachten.",
  },
  {
    title: "Technische & on-page SEO",
    description:
      "We optimaliseren alle belangrijke onderdelen van je website, zoals titeltags, meta-descriptions, alt-tags, interne links en paginastructuur voor maximale vindbaarheid.",
  },
  {
    title: "Keyword research & marktanalyse",
    description:
      "We voeren diepgaand zoekwoordenonderzoek en marktanalyse uit om kansen, hiaten en groeimogelijkheden in jouw markt te identificeren.",
  },
  {
    title: "Professionele copywriting",
    description:
      "Van SEO-blogs tot webteksten: we creëren hoogwaardige content die je website actueel houdt, autoriteit opbouwt en terugkerend verkeer stimuleert.",
  },
  {
    title: "AI-gedreven SEO",
    description:
      "We zetten geavanceerde AI-tools in om trends te voorspellen en je zichtbaarheid te vergroten binnen large language models (LLM's) en AI-gestuurde zoekmachines.",
  },
  {
    title: "Strategische linkbuilding",
    description:
      "Onze specialisten bouwen kwalitatieve, relevante backlinks op sterke domeinen met hoge autoriteit. Daarnaast verzorgen we content-syndicatie.",
  },
  {
    title: "eCommerce SEO",
    description:
      "Voor webshops combineren we duurzame organische SEO-strategieën met optionele betaalde campagnes voor snelle zichtbaarheid en langdurige groei.",
  },
  {
    title: "Performance tracking & rapportage",
    description:
      "Via een overzichtelijk dashboard krijg je realtime inzicht in je SEO-prestaties, gebaseerd op data uit Google Analytics en andere trackingtools.",
  },
]

export function AISeoServices() {
  return (
    <section className="border-y bg-[#FAFAFA] border-slate-200 pt-24 pb-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">Ons Aanbod</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight mb-6">
            SEO-diensten die je kunt verwachten van LeadExpertise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Als full-service digital marketingpartner biedt LeadExpertise een compleet pakket aan professionele
            SEO-diensten om jouw bedrijf structureel beter zichtbaar te maken in zoekmachines. Wij werken uitsluitend
            met duurzame, white-hat SEO-technieken die klaar zijn voor de toekomst, waaronder:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 card-floating hover:border-[#0071eb]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-[#0071eb] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
