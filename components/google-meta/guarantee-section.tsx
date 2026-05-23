import { ShieldCheck, TrendingUp, Wallet, ArrowRight } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="overflow-hidden bg-[#0071eb] pt-24 px-6 pb-24 relative">
      {/* Decorational Blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20 backdrop-blur-sm shadow-lg">
          De "Stupid to say No" Garantie
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight">
          Waarom nee zeggen je geld kost.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Risicovrij</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Je betaalt niet door als het niet werkt. Wij nemen het risico, zodat jij dat niet hoeft te doen.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Volledig Systeem</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Je krijgt niet alleen advertenties, maar een compleet omzetsysteem dat blijft draaien.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300">
            <Wallet className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">ROI Focus</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Elke euro die je investeert moet rendement opleveren. Dat is onze enige focus.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[16px] font-bold text-[#0071eb] transition-all duration-200 bg-white rounded-full hover:bg-blue-50 card-dramatic hover:-translate-y-1"
          >
            Start nu met groeien
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
