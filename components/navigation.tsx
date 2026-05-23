"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, Star, ShieldCheck, ArrowRight } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky card-dramatic z-40 text-white bg-[#111111] border-white/5 border-b top-0">
      {/* Desktop Main Header */}
      <div className="hidden lg:flex container h-20 max-w-6xl mx-auto px-6 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo-icon.png"
            alt="LeadExpertise logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <span className="text-white font-extrabold text-[17px] tracking-tight">LeadExpertise</span>
        </a>

        {/* Desktop Menu */}
        <div className="flex gap-x-8 items-center">
          {/* Diensten Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-gray-300 transition-colors py-2 outline-none">
              Diensten
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-xl card-floating border border-slate-100 p-1.5 flex flex-col gap-0.5">
                <a href="/diensten/google-meta" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  Google & META
                </a>
                <a href="/diensten/ai-seo" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  AI SEO
                </a>
                <a href="/diensten/ai-chatbots" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  AI Chatbots
                </a>
                <a href="/diensten/ai-automatisering" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  AI Automatisering
                </a>
              </div>
            </div>
          </div>

          {/* Voor wie? Dropdown */}
          <div className="relative group">
            <a href="/voor-wie" className="flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-gray-300 transition-colors py-2 outline-none">
              Voor wie?
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
            </a>
            <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-xl card-floating border border-slate-100 p-1.5 flex flex-col gap-0.5">
                <a href="/voor-wie" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  Overzicht
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  Dakdekkers
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0071eb] hover:bg-slate-50 transition-colors">
                  Makelaars
                </a>
              </div>
            </div>
          </div>

          <a href="/werkwijze" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">
            Werkwijze
          </a>
          <a href="/reviews" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">
            Reviews & casestudies
          </a>
          <a href="/over-ons" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">
            Over ons
          </a>
          <a href="/blog" className="text-[15px] font-medium text-white hover:text-gray-300 transition-colors">
            Blog
          </a>

          <a
            href="/#contact"
            className="flex items-center gap-2 text-sm hover:bg-[#0060c9] transition-all hover:shadow-md hover:-translate-y-0.5 font-semibold text-white bg-[#0071eb] rounded-full px-4 py-2 shadow-sm"
          >
            Kom in contact
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile & Social Proof Bar */}
      <div className="z-10 bg-[#111111] border-white/10 lg:border-t relative">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between h-[60px] w-full">
            <a href="/" className="shrink-0 flex items-center justify-center">
              <img
                src="/logo-icon.png"
                alt="LeadExpertise logo"
                width={30}
                height={30}
                className="w-[30px] h-[30px] object-contain"
              />
            </a>

            <div className="flex items-center gap-3 text-[12px] font-medium text-white">
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                <span>4.6</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#01B902]" />
                <span className="text-[11px] sm:text-[12px]">Tevredenheidsgarantie</span>
              </div>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#111111] border-t border-white/10 p-4 card-dramatic flex flex-col gap-4 h-[calc(100vh-60px)] overflow-y-auto lg:hidden">
              <a href="/diensten/google-meta" className="text-[17px] font-medium text-white py-2 border-b border-white/5">Diensten</a>
              <a href="/voor-wie" className="text-[17px] font-medium text-white py-2 border-b border-white/5">Voor wie?</a>
              <a href="/reviews" className="text-[17px] font-medium text-white py-2 border-b border-white/5">Reviews & casestudies</a>
              <a href="/over-ons" className="text-[17px] font-medium text-white py-2 border-b border-white/5">Over ons</a>
              <a href="/blog" className="text-[17px] font-medium text-white py-2 border-b border-white/5">Blog</a>
              <a href="/#contact" className="mt-4 bg-[#0071eb] text-white text-center py-3 rounded-lg font-bold card-elevated">
                Kom in contact
              </a>
            </div>
          )}

          {/* Mobile Sticky CTA */}
          <div className="lg:hidden border-t border-white/10 pb-3 pt-3">
            <a
              href="/#contact"
              className="flex items-center justify-center w-full gap-2 text-[15px] font-bold text-white bg-[#0071eb] hover:bg-[#0060c9] py-3 rounded-lg card-elevated transition-all active:scale-[0.98]"
            >
              <span>Kom in contact</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Desktop Social Proof */}
          <div className="hidden lg:flex text-[13px] font-medium text-gray-400 py-2.5 gap-x-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Tevreden LeadExpertise klant" className="w-5 h-5 rounded-full ring-2 ring-[#111111] object-cover grayscale opacity-80 card-elevated" width={20} height={20} loading="lazy" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Tevreden LeadExpertise klant" className="w-5 h-5 rounded-full ring-2 ring-[#111111] object-cover grayscale opacity-80 card-elevated" width={20} height={20} loading="lazy" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Tevreden LeadExpertise klant" className="w-5 h-5 rounded-full ring-2 ring-[#111111] object-cover grayscale opacity-80 card-elevated" width={20} height={20} loading="lazy" />
              </div>
              <span>Vertrouwd door <span className="font-semibold text-white">100+ bedrijven</span></span>
            </div>

            <span className="text-white/10">|</span>

            <div className="flex items-center gap-1.5">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span><span className="font-semibold text-white">4.6/5</span> Klantbeoordeling</span>
            </div>

            <span className="text-white/10">|</span>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#01B902]" />
              <span className="font-semibold text-white">Met tevredenheidsgarantie</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
