"use client"

import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

const comparisonRows = [
  {
    category: "Expertise & Team",
    leadExpertise: "Plug & Play team van senior specialisten",
    traditional: "Vaak junior marketeers of stagiairs",
    inHouse: "Hoge loonkosten (€50k+ pj) & wervingstijd",
  },
  {
    category: "Contracten & Risico",
    leadExpertise: "Maandelijks opzegbaar (geen lock-in)",
    traditional: "Lange jaarcontracten (vastzitten)",
    inHouse: "Arbeidscontracten & ontslagrisico",
  },
  {
    category: "Strategie & Proactiviteit",
    leadExpertise: "Wij vinden proactief nieuwe groeikansen",
    traditional: "Jij moet ze achter de broek aan zitten",
    inHouse: "Afhankelijk van de kennis van 1 persoon",
  },
  {
    category: "Transparantie & Resultaat",
    leadExpertise: "Focus op ROI, winst & echte leads",
    traditional: "Verstoppen zich achter clicks & weergaven",
    inHouseIcon: "question",
    inHouse: "Vaak onduidelijk wat het oplevert",
  },
  {
    category: "Compleet Systeem",
    leadExpertise: "Ja, alles-in-één (Ads, CRM, Opvolging)",
    leadExpertiseBold: true,
    traditional: "Alleen de advertenties (rest zelf doen)",
    inHouse: "Geen systeem, losse flodders",
  },
]

const partnerLogos = [
  { icon: "Google", text: "Partner" },
  { icon: "Meta", text: "Business Partner" },
  { icon: "Analytics", text: "Analytics Certified" },
  { icon: "Microsoft", text: "Advertising Partner" },
]

export function ComparisonSection() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 pb-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            Hoe wij ons onderscheiden
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vergelijk LeadExpertise met de alternatieven en zie direct waarom ambitieuze ondernemers voor ons kiezen.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative overflow-x-auto mb-20 rounded-2xl border border-slate-200 shadow-sm bg-white">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-slate-200">
              <div className="p-6 flex items-end font-semibold text-slate-400 text-sm uppercase tracking-wider">
                Vergelijk op
              </div>
              <div className="p-6 bg-[#0071eb]/5 border-x border-[#0071eb]/10 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0071eb]" />
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-extrabold text-xl text-slate-900 tracking-tight">LeadExpertise</span>
                    <CheckCircle className="w-5 h-5 text-[#0071eb]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0071eb] bg-[#0071eb]/10 px-3 py-1 rounded-full">
                    Aanbevolen
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col items-center justify-end">
                <span className="font-bold text-lg text-slate-700 text-center">Traditioneel Bureau</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-end">
                <span className="font-bold text-lg text-slate-700 text-center">Zelf Doen / In-house</span>
              </div>
            </div>

            {/* Data Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] ${i < comparisonRows.length - 1 ? "border-b border-slate-100" : ""} hover:bg-slate-50/50 transition-colors`}
              >
                <div className="p-6 flex items-center font-semibold text-slate-900">
                  {row.category}
                </div>
                <div className="p-6 bg-[#0071eb]/5 border-x border-[#0071eb]/10 flex flex-col items-center text-center justify-center gap-3">
                  <CheckCircle className="w-7 h-7 text-[#0071eb]" />
                  <span className={`text-sm ${row.leadExpertiseBold ? "font-bold text-slate-900" : "font-medium text-slate-800"}`}>
                    {row.leadExpertise}
                  </span>
                </div>
                <div className="p-6 flex flex-col items-center text-center justify-center gap-3 opacity-70">
                  <XCircle className="w-7 h-7 text-slate-400" />
                  <span className="text-sm text-slate-600">{row.traditional}</span>
                </div>
                <div className="p-6 flex flex-col items-center text-center justify-center gap-3 opacity-70">
                  {row.inHouseIcon === "question" ? (
                    <HelpCircle className="w-7 h-7 text-slate-400" />
                  ) : (
                    <XCircle className="w-7 h-7 text-slate-400" />
                  )}
                  <span className="text-sm text-slate-600">{row.inHouse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logo Strip */}
        <div className="border-t border-slate-200/60 pt-10">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
            {/* Google Partner */}
            <div className="flex items-center gap-2.5 group select-none opacity-80 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-slate-600 font-semibold text-[15px]">Partner</span>
            </div>

            {/* Meta Business Partner */}
            <div className="flex items-center gap-2.5 group select-none opacity-80 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#0866FF" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="text-slate-600 font-semibold text-[15px]">Business Partner</span>
            </div>

            {/* Analytics Certified */}
            <div className="flex items-center gap-2.5 group select-none opacity-80 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#F9AB00" d="M19.5 21h-3a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 0116.5 3h3A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5z" />
                <path fill="#E37400" d="M12.75 21h-3a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5z" />
                <path fill="#F9AB00" d="M6 21H3a1.5 1.5 0 01-1.5-1.5V16A1.5 1.5 0 013 14.5h3A1.5 1.5 0 017.5 16v3.5A1.5 1.5 0 016 21z" />
              </svg>
              <span className="text-slate-600 font-semibold text-[15px]">Analytics Certified</span>
            </div>

            {/* Microsoft Advertising */}
            <div className="flex items-center gap-2.5 group select-none opacity-80 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z" />
                <path fill="#7FBA00" d="M13 1h10v10H13z" />
                <path fill="#00A4EF" d="M1 13h10v10H1z" />
                <path fill="#FFB900" d="M13 13h10v10H13z" />
              </svg>
              <span className="text-slate-600 font-semibold text-[15px]">Advertising Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
