"use client"

import { XCircle } from "lucide-react"

const antiPersonas = [
  "Je een starter bent zonder budget of omzet.",
  "Je zoekt naar een \"slapend rijk\" methode.",
  "Je wilt micromanagen op elke advertentietekst.",
  "Je product of dienst van lage kwaliteit is.",
]

export function VoorWieAntiPersona() {
  return (
    <section className="bg-[#111111] py-24 px-6 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0071eb] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30">
              <XCircle className="h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Voor wie is dit NIET?</h2>
          </div>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Wij zijn selectief. Dat klinkt misschien arrogant, maar wij willen 100% focus kunnen geven aan klanten waar we gegarandeerd resultaat voor kunnen halen.{" "}
            <span className="text-white font-medium">Bespaar je de moeite als:</span>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {antiPersonas.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
