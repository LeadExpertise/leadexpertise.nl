"use client"

import { Check, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Direct inzicht in je groeipotentieel",
  "Een concrete strategie voor meer leads",
  "Eerlijk advies over je budget",
]

export function ReviewsForm() {
  return (
    <section className="bg-[#0071eb] py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Copy */}
          <div className="flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wide border border-white/20 w-fit mb-6 card-elevated">
              Start vandaag
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ben jij ons volgende succesverhaal?
            </h2>
            <p className="leading-relaxed text-lg text-white/90 mb-10 max-w-xl">
              Vul het formulier in en ontdek of we een goede match zijn. We nemen binnen 24 uur contact met je op voor een vrijblijvend adviesgesprek.
            </p>

            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex bg-emerald-400/10 w-6 h-6 border-emerald-400/20 border rounded-full mt-0.5 items-center justify-center card-elevated">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                  </div>
                  <span className="text-white font-medium text-[16px] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button className="inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-semibold text-[#0071eb] transition-all duration-200 bg-white border border-transparent rounded-full hover:bg-blue-50 hover:-translate-y-0.5 card-floating group h-auto">
                <span>Doe advertentie winstgevendheid quiz</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 card-dramatic relative overflow-hidden">
            <form className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-900">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Je naam"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-900">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="naam@bedrijf.nl"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-900">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="06 12345678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className="text-sm font-semibold text-slate-900">
                    Wat is de URL van je website?
                  </label>
                  <input
                    type="url"
                    id="website"
                    placeholder="www.jouwbedrijf.nl"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-semibold text-slate-900">
                  Wat is je maandelijks budget voor advertenties?
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all cursor-pointer appearance-none card-elevated"
                  >
                    <option value="" disabled>Maak een keuze...</option>
                    <option value="0-500">€ 0 - € 500</option>
                    <option value="500-1000">€ 500 - € 1000</option>
                    <option value="1000-3000">€ 1000 - € 3000</option>
                    <option value="3000-5000">€ 3000 - € 5000</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="hover:bg-[#0060c9] card-floating hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex gap-2 text-[16px] font-bold text-white bg-[#0071eb] w-full rounded-lg mt-2 py-4 items-center justify-center"
              >
                <span>Boek vrijblijvend strategiegesprek</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-slate-400 mt-2">
                100% vrijblijvend. Geen creditcard nodig.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
