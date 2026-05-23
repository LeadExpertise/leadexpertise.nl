import { ArrowRight, CheckCheck } from "lucide-react"

export function QuizNextStepsSection() {
  return (
    <section className="bg-[#FAFAFA] py-24 px-6 border-b border-slate-100">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs md:text-sm mb-3 block">
            Dit zijn de vervolgstappen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Klaar om te starten?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-xl bg-[#0071eb]/10 text-[#0071eb] flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-3">Plan je afspraak</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Begin je reis door een moment te boeken dat jou uitkomt. We bespreken je bedrijfsdoelen en kijken of er een
              klik is.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-xl bg-[#0071eb]/10 text-[#0071eb] flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-3">Analyse op maat</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Onze experts voeren een grondige analyse uit van je huidige situatie en identificeren direct waar de
              groeikansen liggen.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-3">Strategie & Uitvoering</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Op basis van de analyse ontwikkelen we een winstgevend marketingplan en gaan we aan de slag om resultaat te
              boeken.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071eb] text-white rounded-full font-bold text-[16px] hover:bg-[#0060c9] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 card-elevated"
          >
            Claim gratis strategiesessie
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
