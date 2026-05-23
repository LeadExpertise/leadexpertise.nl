import { BarChart2, Bell, Presentation } from "lucide-react"

export function InsightsSection() {
  return (
    <section className="bg-white border-b border-slate-200 py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-sm mb-3 block">
              Inzicht & Sturing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              Stuur op winst, niet op gevoel
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center card-floating">
                  <BarChart2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Glashelder Dashboard</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Focus op echte resultaten. Volg de hele keten: van advertentie spend -{">"} leads -{">"} afspraken -{">"}
                    tot daadwerkelijke omzet.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center card-floating">
                  <Bell className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Wekelijkse Update</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Geen verrassingen. Je weet elke week precies waar je staat en wat de resultaten zijn.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center card-floating">
                  <Presentation className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Maandelijkse Strategie Call</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Elke maand een call van 30 minuten om bij te sturen op harde cijfers en omzet, niet op
                    onderbuikgevoel.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden card-dramatic border border-slate-100 bg-white aspect-square relative group p-6 flex items-center justify-center">
              {/* Abstract Chart Visual */}
              <div className="w-full h-full flex flex-col gap-4">
                <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-4 relative overflow-hidden group-hover:border-emerald-100 transition-colors">
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 h-40">
                    <div className="w-full bg-emerald-200 rounded-t-sm h-[40%]" />
                    <div className="w-full bg-emerald-300 rounded-t-sm h-[60%]" />
                    <div className="w-full bg-emerald-400 rounded-t-sm h-[50%]" />
                    <div className="w-full bg-emerald-500 rounded-t-sm h-[85%]" />
                    <div className="w-full bg-[#0071eb] rounded-t-sm h-[95%] shadow-lg shadow-blue-500/20" />
                  </div>
                </div>
                <div className="flex gap-4 h-24">
                  <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-3 flex flex-col justify-center">
                    <span className="text-xs text-slate-400">Leads</span>
                    <span className="text-xl font-bold text-slate-900">142</span>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-3 flex flex-col justify-center">
                    <span className="text-xs text-slate-400">ROI</span>
                    <span className="text-xl font-bold text-emerald-600">8.4x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
