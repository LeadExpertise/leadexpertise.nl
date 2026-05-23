"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown, ArrowRight, ArrowLeft, Star } from "lucide-react"

export function OndernemersHero() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    revenue: "",
    maxCost: "",
    budget: "",
    impact: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    console.log("Form submitted:", formData)
  }

  return (
    <header className="md:pt-24 md:pb-24 overflow-hidden bg-[#EFEEEB] pt-12 px-6 pb-12 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-200/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container flex flex-col z-10 text-center max-w-4xl mx-auto relative items-center">
        {/* Heading */}
        <h1 className="text-[36px] md:text-[60px] leading-[1.1] font-bold text-[#111111] tracking-tight mb-6">
          WIL JE NIEUWE KLANTEN UIT GOOGLE OF META ADS?
        </h1>

        {/* Subheading */}
        <p className="text-[18px] md:text-[24px] leading-relaxed font-normal text-slate-600 tracking-normal max-w-2xl mb-10 md:mb-12">
          Krijg een marketingmachine van wereldklasse. We garanderen resultaat. Anders werken we gratis door.
        </p>

        {/* Multi-step Form Card */}
        <div className="w-full max-w-[580px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden text-left card-dramatic relative">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-100 flex">
            <div className={`h-full bg-[#0071eb] transition-all duration-500 ${step === 1 ? "w-1/2" : "w-full"}`} />
          </div>

          {/* STEP 1: Qualification Questions */}
          {step === 1 && (
            <div className="md:p-10 p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-medium text-slate-900 tracking-tight">Start je aanvraag</h3>
                  <p className="text-sm text-slate-500 mt-1">Vertel ons kort over je doelen.</p>
                </div>
                <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">Stap 1 / 2</span>
              </div>

              <form onSubmit={handleNextStep} className="flex flex-col gap-6">
                {/* Question 1: Customer Value */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Hoeveel omzet levert een nieuwe klant je gemiddeld op?*</label>
                  <div className="relative w-full group">
                    <select
                      id="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none bg-white border border-slate-300 rounded-lg pl-4 pr-10 py-3 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium cursor-pointer hover:border-slate-400 group-hover:border-slate-400"
                    >
                      <option value="" disabled>Maak een keuze...</option>
                      <option value="0-250">€ 0 - € 250</option>
                      <option value="250-500">€ 250 - € 500</option>
                      <option value="500-1000">€ 500 - € 1.000</option>
                      <option value="1000-5000">€ 1.000 - € 5.000</option>
                      <option value="5000-10000">€ 5.000 - € 10.000</option>
                      <option value="10000+">Meer dan € 10.000</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Question 2: Max Cost Per Acquisition */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Wat mag één nieuwe klant jou maximaal kosten in advertenties?*</label>
                  <div className="relative w-full group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-medium">€</div>
                    <input
                      type="number"
                      id="maxCost"
                      value={formData.maxCost}
                      onChange={handleInputChange}
                      placeholder="Bijv. 50"
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-3 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium hover:border-slate-400 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Question 3: Budget */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Wat is je maandelijks budget voor advertenties?*</label>
                  <div className="relative w-full group">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none bg-white border border-slate-300 rounded-lg pl-4 pr-10 py-3 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium cursor-pointer hover:border-slate-400 group-hover:border-slate-400"
                    >
                      <option value="" disabled>Maak een keuze...</option>
                      <option value="0-500">€ 0 - € 500</option>
                      <option value="500-1000">€ 500 - € 1.000</option>
                      <option value="1000-3000">€ 1.000 - € 3.000</option>
                      <option value="3000-5000">€ 3.000 - € 5.000</option>
                      <option value="5000+">Meer dan € 5.000</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Question 4: Impact */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-900">Hoe zou je bedrijf of leven veranderen als je dagelijks een stroom met nieuwe klanten zou aantrekken?*</label>
                  <textarea
                    id="impact"
                    value={formData.impact}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Beschrijf je ideale situatie..."
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium hover:border-slate-400 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Step 1 Actions */}
                <div className="mt-4 pt-6 border-t border-slate-100 flex items-center justify-end">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#0071eb] hover:bg-[#0060c9] text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto select-none ring-4 ring-transparent hover:ring-blue-100"
                  >
                    <span>Volgende stap</span>
                    <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: Contact Details */}
          {step === 2 && (
            <div className="md:p-10 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium text-[#111111] tracking-tight">Jouw gegevens</h3>
                  <p className="text-sm text-slate-500 mt-1">We nemen binnen 24u contact op.</p>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">Stap 2 van 2</span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-[#111111]">
                    Naam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Je naam"
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-[#111111]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="naam@bedrijf.nl"
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400"
                  />
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                    Gebruik bij voorkeur je zakelijke e-mail
                  </p>
                </div>

                {/* Phone Field */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#111111]">
                    Op welk nummer kunnen we je bereiken? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-slate-200 pr-3 mr-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="NL" className="w-5 h-auto rounded-[2px] shadow-sm" />
                      <span className="text-slate-600 text-sm font-medium">+31</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="6 12345678"
                      required
                      className="w-full bg-white border border-slate-300 rounded-lg pl-[90px] pr-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Website Field */}
                <div className="space-y-1.5">
                  <label htmlFor="website" className="block text-sm font-medium text-[#111111]">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="www.jouwbedrijf.nl"
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Step 2 Actions */}
                <div className="mt-3 flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="cursor-pointer text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 select-none order-2 sm:order-1 self-center sm:self-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Terug
                  </button>
                  <button
                    type="submit"
                    className="order-1 sm:order-2 w-full sm:w-auto bg-[#0071eb] hover:bg-[#0060c9] text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>AANVRAAG VERSTUREN</span>
                    <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* ADDED TEXT */}
        <p className="text-[15px] leading-relaxed font-medium text-slate-500 max-w-xl mt-8 mx-auto">
          Wij geloven in meetbare resultaten en transparante samenwerkingen voor duurzame groei. Al meer dan 100 ambitieuze bedrijven gingen je voor in het opschalen van hun online omzet. Ontdek vandaag nog wat onze bewezen strategie voor jouw specifieke situatie kan betekenen.
        </p>

        {/* Social Proof below form */}
        <div className="mt-5 flex items-center justify-center gap-6 transition-all duration-500">
          <div className="flex items-center gap-2">
            <div className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-600">4.9/5 Excellent</span>
          </div>
        </div>
      </div>
    </header>
  )
}
