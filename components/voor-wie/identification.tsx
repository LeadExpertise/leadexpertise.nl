"use client"

import { TrendingDown, Frown, Wallet } from "lucide-react"

const painPoints = [
  {
    icon: TrendingDown,
    title: "De 'Achtbaan' Agenda",
    description: "De ene maand heb je het te druk, de andere maand zit je duimen te draaien. Je hebt geen grip op wanneer de volgende klant komt, wat zorgt voor stress en onzekerheid over de toekomst.",
  },
  {
    icon: Frown,
    title: "Geen tijd voor marketing",
    description: "Je bent steengoed in je vak, maar marketing is een hoofdpijn dossier. Je probeert het er 'even bij' te doen in de avonduren, maar het levert nauwelijks iets op behalve frustratie.",
  },
  {
    icon: Wallet,
    title: "Bureaus zonder resultaat",
    description: "Je hebt al eens een bureau ingehuurd. Ze beloofden gouden bergen, maar stuurden alleen maandelijkse facturen en vage rapportjes over \"impressies\". Je voelde je een nummertje.",
  },
]

export function VoorWieIdentification() {
  return (
    <section id="identification" className="bg-white border-b border-slate-100 py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 tracking-tight">
            Herken jij jezelf hierin?
          </h2>
          <p className="text-lg text-slate-500">
            Veel ondernemers die bij ons aankloppen, worstelen met dezelfde uitdagingen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:border-[#0071eb]/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-500 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <point.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
