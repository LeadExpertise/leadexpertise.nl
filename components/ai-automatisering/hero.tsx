"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIAutomatiseringHero() {
  return (
    <header className="md:pt-24 md:pb-24 bg-[#EFEEEB] pt-12 px-6 pb-12 relative overflow-hidden">
      {/* Abstract AI Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="container text-center max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071eb] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071eb]" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-600">AI voor het MKB</span>
        </div>

        {/* Heading */}
        <h1 className="text-[36px] md:text-[66px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-6 md:mb-8">
          MAAK JE BEDRIJF SLIMMER,<br />SNELLER EN SCHAALBAAR
        </h1>

        {/* Subheading */}
        <p className="text-[18px] md:text-[24px] leading-relaxed font-normal text-[#141628] tracking-normal max-w-3xl mx-auto mb-10 md:mb-12">
          Wij bouwen maatwerk AI-oplossingen die repeterend werk overnemen en fouten elimineren. Bespaar uren per dag en focus weer op groei.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-[17px] uppercase font-extrabold tracking-wide bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-[#111111] rounded-full px-10 py-7 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href="#aanbod">Bekijk oplossingen</a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto text-[17px] uppercase font-extrabold tracking-wide bg-[#0071eb] hover:bg-[#5000C2] text-white rounded-full px-10 py-7 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Gratis AI Potentie Scan
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
