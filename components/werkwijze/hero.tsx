"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WerkwijzeHero() {
  return (
    <header className="md:pt-24 md:pb-24 bg-[#EFEEEB] pt-12 px-6 pb-12 overflow-hidden">
      <div className="container text-center max-w-4xl mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071eb] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071eb]"></span>
          </span>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Transparant & Resultaatgericht</span>
        </div>

        {/* Heading */}
        <h1 className="text-[36px] md:text-[60px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-6 md:mb-8">
          Van kennismaking tot constante <span className="text-[#0071eb]">stroom aan klanten</span>
        </h1>

        {/* Subheading */}
        <p className="text-[18px] md:text-[20px] leading-relaxed font-normal text-slate-600 tracking-normal max-w-2xl mx-auto mb-10 md:mb-12">
          Geen vage marketingtermen of uren schrijven. Wij werken volgens een vast 4-stappenplan dat zich keer op keer bewijst voor lokale dienstverleners.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#0071eb] hover:bg-[#0060c9] text-white rounded-full px-8 py-4 text-[17px] font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span>Plan vrijblijvend adviesgesprek</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </header>
  )
}
