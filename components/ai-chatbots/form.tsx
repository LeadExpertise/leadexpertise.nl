"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ChatbotsForm() {
  return (
    <section className="bg-[#0071eb] pt-20 px-6 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Copy */}
          <div className="flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wide border border-white/20 w-fit mb-6 shadow-md">
              Demo aanvragen
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Zet je opvolging op automatische piloot
            </h2>
            <p className="leading-relaxed text-lg text-white/90 mb-10 max-w-xl">
              Vul het formulier in en we laten je precies zien hoe dit voor jouw bedrijf werkt. Geen verplichtingen, wel direct inzicht.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 flex bg-emerald-400/10 w-6 h-6 border-emerald-400/20 border rounded-full mt-0.5 items-center justify-center shadow-md">
                  <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                </div>
                <span className="text-white font-medium text-[16px] leading-relaxed">Gratis demo van het systeem</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/10 flex items-center justify-center border border-emerald-400/20 mt-0.5 shadow-md">
                  <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                </div>
                <span className="text-white font-medium text-[16px] leading-relaxed">Berekening van je ROI</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <form className="flex flex-col gap-5 relative z-10">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-900">Naam</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Je naam" 
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-900">E-mail</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="naam@bedrijf.nl" 
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Leads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-900">Telefoonnummer</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    placeholder="06 12345678" 
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="leads" className="text-sm font-semibold text-slate-900">Aantal leads per maand?</Label>
                  <Input 
                    type="text" 
                    id="leads" 
                    placeholder="Bijv. 20" 
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb]"
                  />
                </div>
              </div>

              {/* CRM Dropdown */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="crm" className="text-sm font-semibold text-slate-900">Welk CRM systeem gebruik je?</Label>
                <Select>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] h-auto">
                    <SelectValue placeholder="Maak een keuze..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hubspot">Hubspot</SelectItem>
                    <SelectItem value="salesforce">Salesforce</SelectItem>
                    <SelectItem value="activecampaign">ActiveCampaign</SelectItem>
                    <SelectItem value="other">Anders / Geen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="bg-[#0071eb] hover:bg-[#0060c9] text-white font-bold text-[16px] w-full rounded-lg mt-2 py-4 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Vraag demo aan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-xs text-slate-400 mt-2">We bellen je binnen 1 werkdag terug.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
