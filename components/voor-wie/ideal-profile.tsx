"use client"

import { CheckCircle, TrendingUp, CheckCheck } from "lucide-react"

const profiles = [
  {
    title: "Een bewezen dienst hebt",
    description: "Je weet dat je klanten blij zijn met wat je levert. Je product/dienst staat als een huis.",
  },
  {
    title: "Capaciteit hebt om te groeien",
    description: "Als wij volgende week 10 nieuwe leads aanleveren, kun jij (of je team) die aan.",
  },
  {
    title: "Wilt investeren in groei",
    description: "Je begrijpt dat je eerst moet zaaien om te oogsten. Je hebt minimaal €500 budget p/m.",
  },
  {
    title: "Snel schakelt",
    description: "Leads wachten niet. Jij pakt kansen direct op en belt leads na (of laat ons dat doen).",
  },
]

export function VoorWieIdealProfile() {
  return (
    <section className="overflow-hidden bg-[#FAFAFA] border-b border-slate-200 py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs mb-3 block">
              Het ideale profiel
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight leading-tight">
              Wij zijn de beste match als jij...
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Om onze resultaatgarantie waar te kunnen maken, werken wij niet met iedereen. Wij zoeken partnerschappen, geen snelle klusjes.
            </p>

            <ul className="space-y-4">
              {profiles.map((profile, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className="shrink-0 text-emerald-500 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-[16px]">{profile.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{profile.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative lg:h-full min-h-[500px]">
            {/* Background Shape */}
            <div className="absolute top-10 right-10 -bottom-10 -left-10 bg-slate-200 rounded-3xl transform rotate-3 z-0" />

            {/* Image Card */}
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-xl z-10 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Successful Entrepreneur"
                className="w-full h-full object-cover"
              />

              {/* Overlay Quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-500 rounded-full p-1">
                    <CheckCheck className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">Succesverhaal</span>
                </div>
                <p className="text-xl font-medium leading-relaxed">
                  "Eindelijk een partner die meedenkt als ondernemer, niet als factuurfabriek."
                </p>
              </div>
            </div>

            {/* Floater Badge */}
            <div className="absolute -right-6 top-12 bg-white p-4 rounded-xl shadow-md z-20 max-w-[200px] border border-slate-100 hidden md:block">
              <div className="text-xs text-slate-400 font-semibold uppercase mb-1">Gemiddelde ROI</div>
              <div className="text-3xl font-extrabold text-[#0071eb]">8.4x</div>
              <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                Stijgende lijn
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
