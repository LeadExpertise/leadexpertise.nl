"use client"

import { ChevronDown, Check, ArrowRight, Star } from "lucide-react"
import { LazyBookingIframe } from "./lazy-booking-iframe"

const faqs = [
  {
    question: "Werkt dit voor mijn specifieke branche?",
    answer:
      "Wij zijn gespecialiseerd in lokale dienstverleners en servicebedrijven (zoals bouw, installatie, medisch, consultancy, makelaardij). Als jouw klanten een hoge waarde hebben en lokaal/regionaal zoeken, werkt ons systeem gegarandeerd.",
  },
  {
    question: "Wat als ik geen resultaat behaal?",
    answer:
      "Wij werken met een resultaatgarantie. Halen we de afgesproken doelstellingen niet binnen de afgesproken tijd? Dan werken wij kosteloos door tot het resultaat er wel is. Zo loop jij geen financieel risico.",
  },
  {
    question: "Hoeveel tijd kost dit mij?",
    answer:
      "Minimaal. Wij nemen de volledige technische inrichting, het beheer en de optimalisatie uit handen. Jij hoeft alleen de leads op te bellen die wij aanleveren (of je laat ons AI systeem de afspraak inplannen). Reken op 1 uur per maand voor een strategie-update.",
  },
  {
    question: "Wat zijn de kosten voor het advertentiebudget?",
    answer:
      "Het advertentiebudget betaal je rechtstreeks aan Google of Meta. Wij adviseren te starten met minimaal €500 per maand om genoeg data te verzamelen en resultaat te boeken. Dit budget is volledig flexibel en op elk moment aan te passen.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "Na onze intake kunnen we vaak binnen 5 tot 10 werkdagen live zijn. We hebben tijd nodig om jouw accounts in te richten, de landingspagina te bouwen en de tracking correct in te stellen. Vanaf dat moment kunnen de eerste leads binnen 24 uur binnenkomen.",
  },
  {
    question: "Zit ik vast aan een langetermijncontract?",
    answer:
      "Nee, wij geloven in onze resultaten. Daarom werken we met een maandelijks opzegbare samenwerking na de eerste opstartperiode van 3 maanden. We willen dat je klant blijft omdat je groeit, niet omdat je vastzit aan een contract.",
  },
  {
    question: "Krijg ik exclusiviteit in mijn regio?",
    answer:
      "Ja, om belangenverstrengeling te voorkomen werken wij vaak met exclusiviteit per regio voor specifieke niches. Als we al een dakdekker in Utrecht helpen, nemen we geen tweede aan in exact hetzelfde werkgebied. Vol = vol.",
  },
  {
    question: "Wat heb ik nodig om te starten?",
    answer:
      "In principe weinig. Wij regelen de techniek. Het enige wat we nodig hebben is toegang tot je bestaande accounts (als je die hebt), beeldmateriaal van je werk (foto's/video's) en jouw expertise om de ideale klant te definiëren.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-white border-slate-200 border-b pt-24 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6 tracking-tight">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-slate-600">
            Heb je nog vragen? Hier vind je de antwoorden op alles wat je moet weten.
          </p>
        </div>

        <div className="space-y-4 mb-20">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 card-elevated"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200/50">
                  <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-slate-500 group-open:text-[#0071eb]" />
                </div>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* CTA Section with Booking */}
        <div className="md:p-10 overflow-hidden card-dramatic isolate group bg-[#111111] rounded-3xl p-6 relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#0071eb] rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-emerald-500 rounded-full blur-[80px] opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-700" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Beperkte plekken per regio
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Plan je gratis strategiegesprek
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Geen verkooppraatje, maar een eerlijk advies over jouw groeikansen. Wij nemen het risico, jij plukt de vruchten.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "Maandelijks opzegbaar", icon: "calendar" },
                { label: "Exclusiviteit per regio", icon: "shield" },
                { label: "Resultaatgarantie", icon: "check" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90"
                >
                  <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* GoHighLevel Booking Embed - Lazy Loaded */}
            <LazyBookingIframe
              src="https://api.leadconnectorhq.com/widget/booking/7NKbqlRsivpkRPIIG2Ad"
              id="faq-booking-iframe"
              title="Boek een strategiesessie"
              height="750px"
            />

            {/* Bottom Trust Text */}
            <p className="text-center text-sm text-slate-500 mt-6">
              100% vrijblijvend. Binnen 24 uur reactie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
