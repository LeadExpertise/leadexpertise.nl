"use client"

import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VoorWieCTA() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-[#0071eb] rounded-3xl p-8 md:p-16 text-center text-white shadow-xl relative overflow-hidden group">
          {/* Background Circles */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full border border-white/10 opacity-50 group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/10 opacity-50 group-hover:scale-125 transition-transform duration-1000" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ben jij de match die wij zoeken?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Laten we ontdekken of we jouw bedrijf naar het volgende niveau kunnen tillen. Vrijblijvend en eerlijk advies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-50 text-[#0071eb] font-bold rounded-full px-8 py-6 text-[16px] shadow-lg hover:scale-105 transition-all"
              >
                Plan strategiegesprek
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 hover:bg-white/10 text-white font-bold rounded-full px-8 py-6 text-[16px]"
              >
                Bekijk onze werkwijze
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4" />
              <span>Duurt 1 minuut - Geen verplichtingen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
