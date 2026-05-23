"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

const pillars = [
  {
    title: "Marktonderzoek",
    description: "We analyseren je concurrenten, onderzoeken je markt en bevragen je klanten om precies te ontdekken waarom mensen kopen.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7de6b837-dd97-4c13-9523-0f2bed5bed65_800w.webp",
  },
  {
    title: "Groeistrategie",
    description: "We vertalen je bedrijfsdoelen terug naar een helder 90-dagen actieplan om zeker te zijn van voorspelbare groei.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb7f7ba7-14c4-4612-8b0f-25b0ab13c294_800w.webp",
  },
  {
    title: "Landingspagina's",
    description: "Ons team creëert 'digitale verkopers' die bezoekers effectief omzetten in hoogwaardige leads en directe verkopen.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9dfeeb8-cf0a-467c-b626-1f47b80236f5_800w.webp",
  },
  {
    title: "E-mail & SMS Automatisering",
    description: "Versnel verkoopcycli, verhoog opkomstpercentages en sluit meer deals met geavanceerde geautomatiseerde opvolging.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06e3b496-36e9-4ac1-adcd-2a620da85863_800w.webp",
  },
  {
    title: "Advertenties & Creatives",
    description: "We testen duizenden advertenties, teksten en berichten om precies die winnende campagne te vinden die opschaalbaar is.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c679284f-fff0-4b9c-9c9e-f6f3ff9a696f_800w.webp",
  },
  {
    title: "Conversie Optimalisatie (CRO)",
    description: "Maandelijkse A/B-tests die leads, omzet en ROI verhogen zonder ook maar een cent extra uit te geven aan advertenties.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85026b66-920e-4dd1-834a-cf600dad2a39_800w.webp",
  },
]

const featuresColumn1 = [
  "Google Advertenties (volledig ingericht en beheerd)",
  "META Advertenties (Facebook & Instagram)",
  "Conversie-gerichte Landingspagina",
  "Geavanceerde Quizfunnel",
  "Psychologisch geoptimaliseerde advertenties",
  "Eigen CRM systeem",
  "Automatische opvolgflows",
  "WhatsApp automatisering nieuwe leads",
  "Lead intake & filtering (incl. quiz/filters)",
  "Afsprakenflow + sms reminders",
  "Afspraakplanner integratie",
  "Dashboard met huidige resultaten",
  "Wekelijkse update",
]

const featuresColumn2 = [
  "Bi-weekly strategiecall (30 min)",
  "Segmentatie van je leads",
  "Automatische reviewverzoeken",
  "Always-on leadstroom + reactivatie flows",
  "Alles draait in jouw accounts",
  "Geen doorverkoop of gedeelde leads",
  "Vaste specialisten op het account",
  "Volledig maatwerk per business en doelgroep",
  "Concurrentie- & pijnpuntenanalyse",
  "Jaarlijkse strategie-update",
  "Whatsapp support + strategiesessies",
  "Maandelijks opzegbaar",
]

export function ProvenSystemSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="proven-system" className="bg-[#fafafa] border-slate-200 border-b pt-20 pb-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl leading-tight font-bold text-[#111111] tracking-tight mb-4">
            Een <span className="text-[#0071eb]">bewezen</span> systeem voor structurele groei in klanten
          </h2>
          <p className="leading-relaxed text-lg font-medium text-slate-600 mb-10">
            Marketing mag geen gok zijn. Wij bieden een meetbaar systeem voor lokale dienstverleners.
          </p>
          <div className="w-full h-px bg-slate-200 max-w-2xl mx-auto" />
        </div>

        {/* Visual Pillars - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group flex flex-col bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="h-52 bg-[#1e293b] w-full relative overflow-hidden flex items-center justify-center p-8">
                <img
                  src={pillar.image || "/placeholder.svg"}
                  alt={`${pillar.title} - LeadExpertise marketing strategie onderdeel`}
                  className="group-hover:scale-105 transition-transform duration-500 opacity-90 w-full h-full object-cover bg-center rounded-lg shadow-lg"
                  loading="lazy"
                  width={400}
                  height={208}
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">{pillar.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Action & Features Box */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-5xl mx-auto bg-slate-50/50 rounded-3xl border border-slate-200 p-8 md:p-12 card-dramatic backdrop-blur-sm relative">
            <h3 className="text-2xl font-semibold text-center text-[#111111] tracking-tight mb-8">
              Alles wat je nodig hebt voor groei
            </h3>

            {/* Expandable Content */}
            <div className={`relative ${expanded ? "h-auto overflow-visible" : "h-[180px] overflow-hidden"} transition-all duration-700 ease-in-out`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12 items-start">
                {/* Column 1 */}
                <div className="space-y-2">
                  {featuresColumn1.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-[#01B902] flex items-center justify-center mt-0.5 card-elevated">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-normal text-sm md:text-[15px] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                  {featuresColumn2.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-[#01B902] flex items-center justify-center mt-0.5 card-elevated">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-normal text-sm md:text-[15px] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fade Overlay */}
              {!expanded && (
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/90 to-transparent pointer-events-none flex items-end justify-center z-10" />
              )}
            </div>

            {/* Show More Button */}
            {!expanded && (
              <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-20">
                <button
                  onClick={() => setExpanded(true)}
                  className="pointer-events-auto flex text-[16px] hover:bg-[#0060c9] transition-all card-floating hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer font-bold text-white bg-[#0071eb] rounded-full py-4 px-8 gap-3 items-center justify-center ring-4 ring-blue-500/10 active:scale-95 duration-300"
                >
                  <span className="tracking-wide">Bekijk alle 20+ extra&apos;s</span>
                  <div className="bg-white/20 rounded-full p-0.5">
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            )}

            {/* Action Buttons (Visible after expand) */}
            {expanded && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200/50 mt-6">
                <a
                  href="#"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0071eb] text-white rounded-full font-semibold text-[15px] hover:bg-[#0060c9] transition-all card-floating hover:-translate-y-0.5 text-center"
                >
                  Boek vrijblijvend strategisch gesprek
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-[15px] hover:bg-slate-50 hover:border-slate-300 transition-all card-elevated hover:-translate-y-0.5 text-center"
                >
                  Bekijk het volledige aanbod
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
