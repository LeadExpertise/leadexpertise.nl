"use client"

import { useState } from "react"
import { Check, Play, ArrowRight, X } from "lucide-react"

export function HormoziHero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-black w-full max-w-4xl aspect-video rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mb-4 text-[#0071eb] mx-auto" />
                <p>Video wordt geladen...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="md:pt-28 md:pb-28 overflow-hidden bg-white pt-20 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0071eb] opacity-5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container z-10 text-center max-w-5xl mx-auto px-6 relative">
          <h1 className="md:text-6xl leading-[1.15] text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Krijg nieuwe via Google Ads <br className="hidden md:block" /> we garanderen resultaat of we werken gratis door
          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Wij bouwen een automatisch leadsysteem voor praktijkhouders. Stop met marketing die voelt als ruis en krijg eindelijk grip op je omzet.
          </p>

          {/* Video Thumbnail */}
          <div
            className="mt-16 max-w-3xl mx-auto relative group cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="aspect-video bg-slate-50 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-200 ring-1 ring-slate-100 transform transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="LeadExpertise Praktijk Groei Systeem - Uitlegvideo over geautomatiseerde leadgeneratie voor praktijkhouders"
                className="w-full h-full object-cover transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-[#0071eb]/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-[0_0_40px_rgba(0,113,235,0.6)] group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/20">
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                <span className="bg-black/60 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide border border-white/10">
                  90 sec - Bekijk hoe wij je agenda vullen
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Laat ons gratis berekenen hoeveel clienten er in jouw regio maandelijks zoeken naar jouw diensten. Ontvang een concreet groeiplan zonder verplichtingen.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-8 md:text-base text-sm font-normal text-slate-600 mt-12 mb-10 items-center justify-center">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0071eb]" />
              <span>Binnen 14 dagen live</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0071eb]" />
              <span>Geen extra werk voor je receptie</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0071eb]" />
              <span>Exclusiviteit per regio</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center">
            <a
              href="#scan"
              className="w-full sm:w-auto bg-[#0071eb] hover:bg-[#0060c9] text-white text-base font-semibold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(0,113,235,0.15)] hover:scale-105 flex items-center justify-center gap-2"
            >
              Gratis Potentie-Scan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
