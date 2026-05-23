"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function WerkwijzeForm() {
  return (
    <section className="bg-[#0071eb] pt-20 px-6 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Copy */}
          <div className="flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wide border border-white/20 w-fit mb-6 shadow-lg">
              Start vandaag
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Klaar voor de volgende stap?
            </h2>
            <p className="leading-relaxed text-lg text-white/90 mb-10 max-w-xl">
              Vul het formulier in en ontdek of we een goede match zijn. We nemen binnen 24 uur contact met je op voor een vrijblijvend adviesgesprek.
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex bg-emerald-400/10 w-6 h-6 border-emerald-400/20 border rounded-full mt-0.5 items-center justify-center shadow-lg">
                  <CheckCircle className="text-emerald-400 w-4 h-4" />
                </div>
                <span className="text-white font-medium text-[16px] leading-relaxed">Direct inzicht in je groeipotentieel</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/10 flex items-center justify-center border border-emerald-400/20 mt-0.5 shadow-lg">
                  <CheckCircle className="text-emerald-400 w-4 h-4" />
                </div>
                <span className="text-white font-medium text-[16px] leading-relaxed">Een concrete strategie voor meer leads</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <form className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-900">Naam</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Je naam" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 shadow-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-900">E-mail</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="naam@bedrijf.nl" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-900">Telefoonnummer</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    placeholder="06 12345678" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 shadow-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="website" className="text-sm font-semibold text-slate-900">Website URL</Label>
                  <Input 
                    type="url" 
                    id="website" 
                    placeholder="www.jouwbedrijf.nl" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 shadow-md"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#0071eb] hover:bg-[#0060c9] text-white rounded-lg mt-2 py-4 text-[16px] font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Boek vrijblijvend strategiegesprek</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
