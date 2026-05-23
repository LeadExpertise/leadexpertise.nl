"use client"

import { Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/10 safe-pb">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="block mb-6">
              <svg viewBox="0 0 215 24" className="fill-white h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H6L12 10L18 22H22L12 2Z" fill="white" />
                <path d="M22 22L15 8L22 22H28L34 22L22 22Z" fill="white" fillOpacity="0.7" />
                <text x="40" y="18" fontFamily="Poppins" fontWeight="800" fontSize="16" letterSpacing="-0.02em" fill="white">
                  LeadExpertise
                </text>
              </svg>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Wij helpen lokale dienstverleners domineren in hun regio met meetbare marketingcampagnes die zichzelf terugverdienen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">Diensten</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Facebook & Instagram Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Conversie Optimalisatie
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">Bedrijf</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Casestudies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0071eb] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Footer */}
          <div>
            <h4 className="font-bold text-white mb-6">Klaar voor groei?</h4>
            <p className="text-sm text-gray-400 mb-4">Ontdek hoeveel leads jij misloopt.</p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white transition-all duration-200 bg-[#0071eb] border border-transparent rounded-lg hover:bg-[#0060c9] card-elevated"
            >
              Gratis Groei Scan
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 LeadExpertise B.V. Alle rechten voorbehouden.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Algemene Voorwaarden
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookieverklaring
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
