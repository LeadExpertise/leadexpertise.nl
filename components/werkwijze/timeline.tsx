"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "De Strategische Blauwdruk",
    description: "We beginnen niet zomaar. We analyseren je huidige positie, je concurrentie en je ideale klant. Waar liggen de kansen in jouw regio? Welke zoekwoorden zijn goud waard? We maken een waterdicht plan voordat we één euro uitgeven.",
    tags: ["Zoekwoordanalyse", "Concurrentiecheck", "Doelgroepbepaling"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Strategy meeting",
    position: "left",
  },
  {
    number: 2,
    title: "De Bouwfase & Setup",
    description: "Wij bouwen jouw complete marketingmachine. Dit betekent conversie-gerichte landingspagina's die bezoekers omzetten in klanten, en advertentiecampagnes op Google en Meta die precies de juiste mensen bereiken.",
    checkItems: [
      "High-converting landingspagina's",
      "Google & Social Ads setup",
      "Technische tracking inrichting",
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Building phase",
    position: "right",
  },
  {
    number: 3,
    title: "Go Live & Leadstroom",
    description: "De knop gaat om. De campagnes gaan live. Vaak zie je binnen 24 tot 48 uur de eerste aanvragen binnenkomen in je dashboard. Ons AI-systeem zorgt voor de eerste opvolging, zodat jij alleen met warme leads hoeft te praten.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Dashboard",
    position: "left",
  },
  {
    number: 4,
    title: "Optimalisatie & Schalen",
    description: "Data liegt niet. We analyseren wekelijks wat werkt en wat niet. We schroeven de winstgevende campagnes op en zetten de rest uit. Zo verlagen we je kosten per lead en verhogen we je volume.",
    showResults: true,
    position: "right",
  },
]

export function WerkwijzeTimeline() {
  return (
    <section className="bg-white border-b border-slate-200 py-24 px-6 relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>
      
      <div className="container max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className={`relative grid lg:grid-cols-2 gap-12 items-center ${index !== steps.length - 1 ? 'mb-20 lg:mb-32' : ''} group`}
          >
            {/* Center Dot */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#0071eb] items-center justify-center z-10 shadow-lg">
              <span className="text-[#0071eb] font-bold">{step.number}</span>
            </div>

            {/* Content Side */}
            <div className={`${step.position === 'left' ? 'order-2 lg:order-1 lg:text-right' : 'order-2'}`}>
              <div className="inline-block px-3 py-1 rounded bg-blue-50 text-[#0071eb] text-sm font-bold uppercase mb-4 lg:hidden">
                Stap {step.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4 group-hover:text-[#0071eb] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {step.description}
              </p>
              
              {step.tags && (
                <div className={`mt-6 flex flex-wrap gap-3 ${step.position === 'left' ? 'lg:justify-end' : ''}`}>
                  {step.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {step.checkItems && (
                <ul className="mt-6 space-y-3">
                  {step.checkItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {step.showResults && (
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center font-bold text-[#0071eb] hover:text-[#0060c9] border-b-2 border-[#0071eb]/20 hover:border-[#0071eb] pb-0.5 transition-all">
                    Bekijk onze resultaten
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Visual Side */}
            <div className={`${step.position === 'left' ? 'order-1 lg:order-2' : 'order-1'}`}>
              {step.showResults ? (
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500 relative bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0071eb]/40 to-purple-500/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                    <span className="text-5xl font-bold text-white mb-2">+240%</span>
                    <span className="text-white/80 font-medium">Gemiddelde ROI na 3 maanden</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500 relative">
                  <Image
                    src={step.image! || "/placeholder.svg"}
                    alt={step.imageAlt!}
                    fill
                    className="object-cover"
                  />
                  {step.number === 2 && (
                    <div className="absolute inset-0 bg-[#0071eb]/10 mix-blend-overlay"></div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
