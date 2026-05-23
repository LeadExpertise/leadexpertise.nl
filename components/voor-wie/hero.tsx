"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VoorWieHero() {
  return (
    <header className="bg-[#EFEEEB] border-b border-slate-200 pt-16 px-6 pb-20">
      <div className="container text-center max-w-4xl mx-auto">
        <div className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-[#0071eb] text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
          Klantprofiel & Fit
        </div>

        <h1 className="text-[32px] md:text-[56px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-6">
          Heb je geen tijd, zin of kennis in marketing?
        </h1>

        <p className="text-[17px] md:text-[20px] leading-relaxed font-normal text-slate-600 max-w-2xl mx-auto mb-10">
          LeadExpertise is er exclusief voor ondernemers die hun vak verstaan, maar worstelen met een voorspelbare instroom van de juiste klanten.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0071eb] hover:bg-[#0060c9] text-white font-bold rounded-full px-8 py-6 text-[16px] shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            Plan vrijblijvende kennismaking
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#111111] font-bold rounded-full px-8 py-6 text-[16px] border-slate-200 shadow-sm"
            onClick={() => document.getElementById("identification")?.scrollIntoView({ behavior: "smooth" })}
          >
            Doe de check
          </Button>
        </div>
      </div>
    </header>
  )
}
