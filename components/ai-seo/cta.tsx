"use client"

import { ArrowRight } from "lucide-react"

export function AISeoCta() {
  return (
    <section className="relative bg-[#111111] py-24 overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#0071eb] opacity-10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 text-balance">
          Start vandaag met LeadExpertise
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
          Laat AI het zware SEO-werk doen terwijl jij focust op groei en omzet.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071eb] hover:bg-[#0060c9] text-white font-bold rounded-full text-lg transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1"
          >
            Ontdek LeadExpertise
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold rounded-full text-lg transition-all backdrop-blur-sm"
          >
            Bekijk alle functies
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold rounded-full text-lg transition-all"
          >
            Plan een demo
          </a>
        </div>
      </div>
    </section>
  )
}
