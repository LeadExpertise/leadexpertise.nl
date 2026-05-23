"use client"

import { ArrowRight } from "lucide-react"

const cases = [
  {
    stat: "97%",
    title: "Verbeterde rankings",
    description: "Dit chiropractiecentrum ging van onderaan naar bovenaan in 3 weken met LeadExpertise AI SEO.",
  },
  {
    stat: "390x",
    title: "Groei organisch verkeer",
    description: "Deze leverancier van horeca-apparatuur ging van onderaan naar bovenaan in 4 weken met LeadExpertise.",
  },
  {
    stat: "96%",
    title: "Meer keywords in de top",
    description: "Deze letselschade-advocaat domineerde lokale zoekresultaten in de zeer competitieve markt van Portland.",
  },
]

export function AISeoCase() {
  return (
    <section className="bg-white py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">Resultaten</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight mb-4">
            Echte resultaten. Supersnel.
          </h2>
          <p className="text-lg text-slate-500">
            Wie zegt dat SEO minimaal 3 maanden moet duren voordat je resultaat ziet?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem.stat}
              className="group bg-white rounded-2xl border border-slate-200 p-8 card-floating hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Case Study</div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-[#0071eb] tracking-tighter">{caseItem.stat}</span>
                <p className="text-lg font-bold text-slate-900 mt-2">{caseItem.title}</p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">{caseItem.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-bold text-[#0071eb] hover:underline group-hover:translate-x-1 transition-transform"
              >
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors card-elevated"
          >
            Bekijk alle case studies
          </a>
        </div>
      </div>
    </section>
  )
}
