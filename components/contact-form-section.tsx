"use client"

import React from "react"

import { useState } from "react"
import { Check, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react"

export function ContactFormSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    revenue: "",
    maxCost: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePrevStep = () => {
    setStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-[#0071eb] pt-20 px-6 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Copy */}
          <div className="flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wide border border-white/20 w-fit mb-6 card-elevated">
              Start vandaag
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Klaar voor de volgende stap?
            </h2>
            <p className="leading-relaxed text-lg text-white/90 mb-10 max-w-xl">
              Vul het formulier in en ontdek of we een goede match zijn. We nemen binnen 24 uur contact met je op voor een vrijblijvend adviesgesprek.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Direct inzicht in je groeipotentieel",
                "Een concrete strategie voor meer leads",
                "Eerlijk advies over je budget",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex bg-emerald-400/10 w-6 h-6 border-emerald-400/20 border rounded-full mt-0.5 items-center justify-center card-elevated">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                  </div>
                  <span className="text-white font-medium text-[16px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>


          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 card-dramatic relative overflow-hidden">
            {/* Step Indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step >= 1 ? "bg-[#0071eb] text-white" : "bg-slate-100 text-slate-400"}`}>
                1
              </div>
              <div className={`flex-1 h-1 rounded-full ${step >= 2 ? "bg-[#0071eb]" : "bg-slate-100"}`} />
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step >= 2 ? "bg-[#0071eb] text-white" : "bg-slate-100 text-slate-400"}`}>
                2
              </div>
            </div>

            {/* Step 1: Business Questions */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="flex flex-col gap-5 relative z-10">
                <p className="text-sm text-slate-500 mb-2">Stap 1 van 2: Vertel ons over je bedrijf</p>

                {/* Revenue Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="revenue" className="text-sm font-semibold text-slate-900">
                    Hoeveel omzet levert een nieuwe klant je gemiddeld op?
                  </label>
                  <div className="relative">
                    <select
                      id="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all cursor-pointer appearance-none card-elevated"
                    >
                      <option value="" disabled>Maak een keuze...</option>
                      <option value="0-1000">€ 0 - € 1.000</option>
                      <option value="1000-5000">€ 1.000 - € 5.000</option>
                      <option value="5000-10000">€ 5.000 - € 10.000</option>
                      <option value="10000+">Meer dan € 10.000</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Max Cost Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="maxCost" className="text-sm font-semibold text-slate-900">
                    Wat mag één nieuwe klant jou maximaal kosten in advertenties?
                  </label>
                  <input
                    type="text"
                    id="maxCost"
                    value={formData.maxCost}
                    onChange={handleInputChange}
                    placeholder="Bijv. € 50"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>

                {/* Budget Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-slate-900">
                    Wat is je maandelijks budget voor advertenties?
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] text-slate-900 outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all cursor-pointer appearance-none card-elevated"
                    >
                      <option value="" disabled>Maak een keuze...</option>
                      <option value="0-500">€ 0 - € 500</option>
                      <option value="500-1000">€ 500 - € 1.000</option>
                      <option value="1000-3000">€ 1.000 - € 3.000</option>
                      <option value="3000-5000">€ 3.000 - € 5.000</option>
                      <option value="5000+">Meer dan € 5.000</option>
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
                  <span>Volgende stap</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <p className="text-sm text-slate-500 mb-2">Stap 2 van 2: Je contactgegevens</p>

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-900">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Je naam"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-900">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="naam@bedrijf.nl"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-900">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="06 12345678"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className="text-sm font-semibold text-slate-900">
                    Wat is de URL van je website?
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="www.jouwbedrijf.nl"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400 card-elevated"
                  />
                </div>

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex gap-2 text-[16px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg py-4 px-6 items-center justify-center transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Terug</span>
                  </button>
                  <button
                    type="submit"
                    className="hover:bg-[#0060c9] card-floating hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex gap-2 text-[16px] font-bold text-white bg-[#0071eb] flex-1 rounded-lg py-4 items-center justify-center"
                  >
                    <span>Neem contact op</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-center text-xs text-slate-400 mt-2">100% vrijblijvend. Geen creditcard nodig.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
