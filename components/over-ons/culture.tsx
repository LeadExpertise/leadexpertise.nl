import { Eye, TrendingUp, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Eye,
    title: "Radicale Transparantie",
    description: "Geen \"black box\" marketing. Jij ziet precies wat wij doen, waar je budget heen gaat en wat het oplevert. Wij verbergen ons niet achter vage cijfers."
  },
  {
    icon: TrendingUp,
    title: "Resultaat boven Ego",
    description: "Het maakt ons niet uit of een campagne een designprijs wint. Het enige dat telt is de ROI. Als het geen geld oplevert voor de klant, stoppen we ermee of passen we het aan."
  },
  {
    icon: BookOpen,
    title: "Eeuwige Studenten",
    description: "De digitale wereld verandert elke dag. Wat vandaag werkt, is morgen oud nieuws. Onze cultuur is gebouwd op het continu testen, leren en verbeteren (zoals Sam's verhaal begon)."
  }
]

export function CultureSection() {
  return (
    <section className="bg-white border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Title */}
          <div className="w-full md:w-1/3">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
              Cultuur & Waarden
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
              Waar wij voor staan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Wij zijn geen typisch marketingbureau met tafelvoetbaltafels en hippe termen. 
              Wij zijn nerds als het gaat om data en resultaat.
            </p>
            <Link 
              href="/werkwijze" 
              className="inline-flex items-center gap-2 text-[#0071eb] font-semibold hover:gap-3 transition-all"
            >
              Bekijk onze werkwijze
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Values Grid */}
          <div className="w-full md:w-2/3 grid gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0071eb] card-elevated">
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
