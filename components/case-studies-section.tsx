"use client"

import { TrendingUp } from "lucide-react"

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Dakdekker Jansen",
    region: "Regio Utrecht",
    industry: "Dak & Renovatie",
    metric: "Omzetstijging",
    value: "+ €45.000",
    unit: "/mnd",
    costPerLead: "€ 24,50",
    roi: "8.5x",
    quote: '"Voorheen waren we afhankelijk van mond-tot-mond. Nu hebben we de kraan zelf in handen."',
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Makelaardij 't Gooi",
    region: "Regio Amsterdam",
    industry: "Woningverkoop",
    metric: "Nieuwe listings",
    value: "+ 12",
    unit: "/mnd",
    costPerLead: "€ 42,00",
    roi: "12.4x",
    quote: '"De leads die binnenkomen zijn van veel hogere kwaliteit dan via Funda of andere kanalen."',
  },
  {
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Schildersbedrijf P.",
    region: "Regio Rotterdam",
    industry: "Schilderwerk",
    metric: "Offerte aanvragen",
    value: "+ 35",
    unit: "/mnd",
    costPerLead: "€ 18,20",
    roi: "5.2x",
    quote: '"We hebben nu een wachtlijst van 3 maanden. Het enige \'probleem\' is personeel vinden."',
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-white border-slate-200 border-b pt-24 pb-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-medium tracking-wide uppercase text-xs mb-3 block">Resultaten</span>
          <h2 className="md:text-4xl text-3xl font-bold text-[#111111] tracking-tight mb-6">
            Geen mooie praatjes, maar cijfers
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Dit is wat er gebeurt als je het LeadExpertise systeem implementeert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-[#0071eb]/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0071eb]" />
              <div className="p-8 pb-6 flex-1">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md shrink-0 border border-slate-100 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={study.image || "/placeholder.svg"} 
                      alt={`Case study ${study.name} - ${study.industry} in ${study.region}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 leading-tight">{study.name}</h4>
                    <p className="text-xs font-medium text-slate-500 mt-1">{study.region}</p>
                    <span className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wide bg-[#0071eb]/5 text-[#0071eb] border border-[#0071eb]/10">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="mb-6 p-5 rounded-xl bg-[#0071eb]/5 border border-[#0071eb]/10">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#0071eb]/60 mb-2">{study.metric}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-semibold text-[#0071eb] tracking-tight">{study.value}</span>
                    <span className="text-sm text-[#0071eb]/60 font-medium">{study.unit}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">Kosten per lead</p>
                    <p className="text-lg font-semibold text-slate-900">{study.costPerLead}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">ROI</p>
                    <div className="flex items-center gap-1.5 text-[#0071eb]">
                      <span className="text-lg font-semibold">{study.roi}</span>
                      <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 px-8 py-5 border-t border-slate-100 mt-auto">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-[#0071eb]/40 shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                  <p className="text-sm text-slate-600 italic leading-relaxed">{study.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
