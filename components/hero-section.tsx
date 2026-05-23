"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <header className="md:pt-24 md:pb-24 bg-[#EFEEEB] pt-12 px-6 pb-12">
      <div className="container text-center max-w-6xl mx-auto">
        <h1 className="text-[36px] md:text-[66px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-6 md:mb-8 text-balance">
          WIL JE NIEUWE KLANTEN UIT GOOGLE OF META ADS?
        </h1>

        <p className="text-[18px] md:text-[28px] leading-normal font-normal text-[#141628] tracking-normal max-w-3xl mx-auto mb-8 md:mb-12 text-pretty">
          Krijg een marketingmachine van wereldklasse. We garanderen resultaat. Anders werken we gratis door.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proven-system"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-[17px] uppercase hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 font-extrabold text-[#111111] tracking-wide bg-white border-slate-200 border rounded-full py-5 px-10 card-floating hover-card-dramatic"
          >
            Bekijk aanbod
          </a>
          <a
            href="#"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-[17px] uppercase hover:bg-[#5000C2] hover:-translate-y-1 transition-all duration-300 font-extrabold text-white tracking-wide bg-[#0071eb] rounded-full py-5 px-10 card-floating hover-card-dramatic"
          >
            Winstgevendheids quiz
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  )
}
