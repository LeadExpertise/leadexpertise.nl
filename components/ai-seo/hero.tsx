"use client"

import { ArrowRight } from "lucide-react"

export function AISeoHero() {
  return (
    <header className="relative bg-white pt-16 pb-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold mb-8 hover:bg-white hover:shadow-sm transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071eb] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071eb]" />
            </span>
            Next-Gen AI Ranking Technology
          </div>

          {/* Headline */}
          <h1 className="text-[40px] md:text-[68px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-8 text-balance">
            Laat je SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071eb] to-[#6366f1]">slimmer werken</span>,<br className="hidden md:block" /> niet harder met AI.
          </h1>

          {/* Subheading */}
          <p className="text-[18px] md:text-[22px] leading-relaxed font-medium text-slate-500 tracking-normal max-w-3xl mx-auto mb-10">
            LeadExpertise geeft je alles wat je nodig hebt om meer verkeer te genereren, je ROI te verhogen, je zichtbaarheid binnen LLM&apos;s (AI modellen) te vergroten en je SEO-kosten te verlagen — volledig aangedreven door slimme, schaalbare AI.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-[16px] hover:bg-[#0060c9] hover:-translate-y-1 transition-all duration-300 font-bold text-white tracking-wide bg-[#0071eb] rounded-full py-4 px-8 card-floating shadow-lg shadow-blue-500/20"
            >
              <span>Start vandaag</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-[16px] hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 font-bold text-[#111111] tracking-wide bg-white border-slate-200 border rounded-full py-4 px-8 card-elevated"
            >
              <span>Bekijk demo</span>
            </a>
          </div>

          {/* Dashboard Visual */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden card-dramatic border border-slate-200 bg-slate-900 aspect-[16/9] md:aspect-[21/9] group">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
              alt="AI SEO Dashboard"
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />

            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
              <span className="text-white text-sm font-mono">System Active: LLM Optimization</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </header>
  )
}
