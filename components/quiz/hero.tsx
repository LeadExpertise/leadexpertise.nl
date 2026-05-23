"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function QuizHero() {
  return (
    <header className="md:pt-16 md:pb-16 min-h-[90vh] flex flex-col bg-[#EFEEEB] border-slate-200 border-b pt-12 px-6 pb-12 justify-center">
      <div className="container z-10 text-center max-w-4xl mx-auto relative">
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs md:text-sm bg-[#0071eb]/10 px-4 py-1.5 rounded-full border border-[#0071eb]/20">
            LeadExpertise Groeimethode
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[52px] leading-[1.1] text-balance font-bold text-[#111111] tracking-tight text-center max-w-3xl mx-auto mb-6">
          Krijg meer nieuwe leads of we werken gratis door
        </h1>

        {/* Question */}
        <p className="text-[18px] md:text-[22px] leading-normal font-medium text-[#141628] tracking-normal mb-8 max-w-2xl mx-auto">
          Adverteer je momenteel al voor jouw bedrijf?
        </p>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px] mx-auto mb-16">
          {/* Option 1: Yes */}
          <a
            href="/#contact"
            className="group flex flex-col h-80 rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#0071eb]/20 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200"
          >
            <div className="h-[75%] overflow-hidden relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Analytics Dashboard"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="h-[25%] bg-[#0071eb] group-hover:bg-[#0060c9] transition-colors flex items-center justify-center px-6 text-center">
              <span className="text-white font-semibold text-xl tracking-tight">Ja, dat doe ik</span>
            </div>
          </a>

          {/* Option 2: No */}
          <a
            href="/#contact"
            className="group flex flex-col h-80 rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#0071eb]/20 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200"
          >
            <div className="h-[75%] overflow-hidden relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Planning Strategy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="h-[25%] bg-[#0071eb] group-hover:bg-[#0060c9] transition-colors flex items-center justify-center px-6 text-center">
              <span className="text-white font-semibold text-xl tracking-tight">Nee, nog niet</span>
            </div>
          </a>
        </div>

        {/* Trust Section */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Deze bedrijven vertrouwen ons:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image src="/logos/meta.svg" alt="Meta" width={60} height={22} className="grayscale" />
            <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={22} className="grayscale" />
            <Image src="/logos/shopify.svg" alt="Shopify" width={80} height={22} className="grayscale" />
            <Image src="/logos/stripe.svg" alt="Stripe" width={60} height={22} className="grayscale" />
          </div>
        </div>

        {/* Down Arrow */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="animate-bounce text-[#0071eb]">
            <ChevronDown className="w-8 h-8" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  )
}
