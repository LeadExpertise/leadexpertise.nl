"use client"

import { Heart } from "lucide-react"

export function TrustSection() {
  return (
    <section className="bg-white border-slate-100 border-b pt-24 pb-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
              Het verhaal achter LeadExpertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              Meer dan alleen een marketingbureau.
            </h2>

            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
              <p className="text-lg">
                Hoi, mijn naam is <span className="font-semibold text-slate-900">Sam de Vries</span>, oprichter van LeadExpertise.
              </p>
              <p>
                Jarenlang zag ik hardwerkende ondernemers worstelen. Ze waren steengoed in hun vak, maar hun agenda bleef leeg of vulde zich met klanten die ze eigenlijk liever niet wilden. Ze gaven duizenden euro&apos;s uit aan marketingbureaus die gouden bergen beloofden, maar alleen vage rapportages leverden.
              </p>
              <p>
                Dat frustreerde me mateloos. Marketing hoort geen &quot;black box&quot; te zijn. Het moet een simpele som zijn: 1 euro erin, 3 euro (of meer) eruit.
              </p>
              <p>
                Daarom heb ik LeadExpertise opgericht. Geen ingewikkelde termen, geen uurtje-factuurtje zonder resultaat, maar een compleet systeem dat nieuwe klanten oplevert. Zodat jij je weer kunt focussen op wat je het allerliefste doet: je vak uitoefenen.
              </p>
            </div>

            <div className="flex mt-10 gap-x-6 items-center">
              <div className="flex flex-col">
                <span className="text-3xl text-slate-800" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                  Sam de Vries
                </span>
                <span className="text-sm font-medium text-slate-500 mt-1">Oprichter LeadExpertise</span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <a href="https://www.linkedin.com/in/samdevries1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071eb] transition-colors">LinkedIn</a>
                <span>•</span>
                <a href="/over-ons" className="hover:text-[#0071eb] transition-colors">Over ons</a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden card-dramatic aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1bba3c5-b8dd-4ab8-9700-109bd033872a_1600w.jpg"
                alt="Sam de Vries, oprichter van LeadExpertise - Google Ads en META Ads specialist"
                className="w-full h-full object-cover bg-center"
                loading="lazy"
                width={600}
                height={750}
                decoding="async"
                fetchPriority="low"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white/40 card-floating">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-[#0071eb] p-3 rounded-full shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Gedreven door resultaat</p>
                    <p className="text-xs text-slate-500 mt-0.5">Wij groeien pas als jij groeit.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0" />
          </div>
        </div>


      </div>
    </section>
  )
}
