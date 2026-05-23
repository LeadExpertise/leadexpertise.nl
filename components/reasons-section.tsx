"use client"

import { Target, Lightbulb, Trophy, Unlock, Handshake, Rocket, Settings, Shield, Gift } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Helder 90-Dagen Plan",
    description: "Krijg een concreet strategieplan om jouw markt te domineren en stap voor stap voorspelbaar te groeien.",
  },
  {
    icon: Lightbulb,
    title: "Proactieve Groei & Kansen",
    description: "Ons team van ervaren marketeers komt naar jou toe met nieuwe ideeën en kansen, in plaats van andersom.",
  },
  {
    icon: Trophy,
    title: "Ervaren Business Builders",
    description: "Je werkt niet met stagiairs. Krijg toegang tot een team van senior specialisten die meebouwen aan jouw succes.",
  },
  {
    icon: Unlock,
    title: "Geen Wurgcontracten",
    description: "Zijn we gek? Nee. Wij bewijzen ons elke maand opnieuw. Je zit nergens aan vast en blijft omdat het werkt.",
  },
  {
    icon: Handshake,
    title: "Volledige Transparantie",
    description: "Onze data-gedreven aanpak laat precies zien wat elke euro oplevert. Geen geheimen, wel heldere taal.",
  },
  {
    icon: Rocket,
    title: "Resultaatverantwoordelijkheid",
    description: "De resultaten zijn onze verantwoordelijkheid. Wij rusten niet totdat de campagnes maximaal presteren.",
  },
  {
    icon: Settings,
    title: "Een Bewezen Systeem",
    description: "Je hebt geen losse advertenties nodig, maar een systeem. Wij bouwen een machine voor gekwalificeerde leads.",
  },
  {
    icon: Shield,
    title: "Bouw je Voorsprong",
    description: "Creëer een onoverbrugbare kloof met je concurrentie door onze unieke strategieën en marktinzichten.",
  },
  {
    icon: Gift,
    title: "Bonus: Kennis & Training",
    description: "Krijg direct toegang tot onze exclusieve interne trainingen en cursussen om zelf ook slimmer te ondernemen.",
  },
]

export function ReasonsSection() {
  return (
    <section className="bg-[#FAFAFA] pt-24 pb-24 border-b border-slate-200">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            9 Redenen waarom bedrijven met ons groeien
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ontdek waarom ambitieuze ondernemers kiezen voor het LeadExpertise systeem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 card-floating hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0071eb] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#0071eb] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-3">{reason.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
