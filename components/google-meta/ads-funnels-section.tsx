import { Rocket, Laptop, Filter } from "lucide-react"

export function AdsFunnelsSection() {
  return (
    <section className="bg-white border-b border-slate-200 py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-sm mb-3 block">
              Advertenties & Funnels
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              De motor van jouw groei
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-[#0071eb] flex items-center justify-center card-floating">
                  <Rocket className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Ads & META Ads</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Volledig ingericht en beheerd. Wij bouwen campagnes die zorgen voor een stabiele instroom van
                    kwalitatieve leads.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-[#0071eb] flex items-center justify-center card-floating">
                  <Laptop className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">High-converting Landingspagina</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Geen standaard website, maar een pagina geoptimaliseerd voor één doel: conversie. Dit zorgt direct
                    voor een hogere conversie per klik.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-[#0071eb] flex items-center justify-center card-floating">
                  <Filter className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Quizfunnel & Psychologische Ads</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Door slimme filtering en psychologische overtuigingstechnieken trekken we de juiste doelgroep aan en
                    filteren we gelukzoekers eruit.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden card-dramatic border border-slate-100 bg-slate-50 aspect-square relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5" />
              <img
                src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern SaaS Dashboard Illustration"
                className="transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply w-full h-full object-cover"
              />

              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-white/50 card-floating">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Conversie</span>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
                    +12.4%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-[#0071eb] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
