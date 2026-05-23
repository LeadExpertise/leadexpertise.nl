"use client"

import { XCircle, CheckCircle } from "lucide-react"

export function AIAutomatiseringComparison() {
  const oldWay = [
    {
      title: "Meer personeel nodig",
      description: "Voor elke groei moet je iemand aannemen en inwerken.",
    },
    {
      title: "Menselijke fouten",
      description: "Vergeten terugbelverzoeken, typefouten in facturen.",
    },
    {
      title: "Beperkte bereikbaarheid",
      description: "Na 17:00 en in het weekend ligt je bedrijf stil.",
    },
  ]

  const newWay = [
    {
      title: "Schaalbaar zonder grenzen",
      description: "AI handelt 10 of 10.000 klanten tegelijk af.",
    },
    {
      title: "Foutloze executie",
      description: "Systemen worden nooit moe en vergeten niets.",
    },
    {
      title: "24/7 Operationeel",
      description: "Je bedrijf draait door terwijl jij slaapt.",
    },
  ]

  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">De nieuwe standaard voor het MKB</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Het verschil tussen bedrijven die worstelen en bedrijven die schalen is automatisering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* THE OLD WAY */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md opacity-80 hover:opacity-100 transition-opacity">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-lg text-red-500">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">De Traditionele Manier</h3>
            </div>
            <ul className="space-y-6">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-slate-700">{item.title}</span>
                    <span className="text-sm text-slate-500">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* THE NEW WAY (LeadExpertise AI) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#0071eb] shadow-xl relative md:scale-[1.03] z-10 flex flex-col justify-center">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-[#0071eb] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Future Proof
            </div>

            <div className="mb-8 flex items-center gap-3">
              <div className="bg-emerald-50 p-2 rounded-lg text-emerald-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">De AI-Gedreven Manier</h3>
            </div>
            <ul className="space-y-6">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">{item.title}</span>
                    <span className="text-sm text-slate-600">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
