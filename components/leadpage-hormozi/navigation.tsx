"use client"

import { useState } from "react"
import { ArrowRight, Menu, Star } from "lucide-react"

export function HormoziNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-white/5">
      <div className="container max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg viewBox="0 0 215 24" className="fill-white w-[180px] h-[24px]" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H6L12 10L18 22H22L12 2Z" fill="white" />
            <path d="M22 22L15 8L22 22H28L34 22L22 22Z" fill="white" fillOpacity="0.7" />
            <text
              x="40"
              y="18"
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.02em"
              fill="white"
            >
              LeadExpertise
            </text>
          </svg>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#werkwijze" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Werkwijze
          </a>
          <a href="#resultaten" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Resultaten
          </a>

          {/* Compact Social Proof in Nav */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
            <div className="flex text-[#F59E0B]">
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-xs text-slate-300 font-medium">4.9/5 - 50+ praktijken</span>
          </div>

          <a
            href="#scan"
            className="flex items-center gap-2 text-xs font-bold text-white bg-[#0071eb] hover:bg-[#0060c9] hover:shadow-[0_0_20px_rgba(0,113,235,0.15)] transition-all rounded-full px-5 py-2.5 shadow-md"
          >
            Gratis Potentie-Scan
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white flex items-center cursor-pointer p-2"
          >
            <Menu className="w-7 h-7" />
          </button>

          {mobileMenuOpen && (
            <div className="absolute top-full right-6 mt-2 w-64 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 z-50">
              <a href="#werkwijze" className="text-white py-2 px-4 hover:bg-white/5 rounded-lg">
                Werkwijze
              </a>
              <a href="#resultaten" className="text-white py-2 px-4 hover:bg-white/5 rounded-lg">
                Resultaten
              </a>
              <a href="#scan" className="bg-[#0071eb] text-white text-center py-3 rounded-lg font-bold">
                Gratis Potentie-Scan
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
