import { Tag, Star, RefreshCw } from "lucide-react"

export function ScalingSection() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden card-dramatic border border-slate-200 bg-white aspect-square relative group">
              <div className="absolute inset-0 bg-[#F9FAFB] flex items-center justify-center overflow-hidden p-8">
                {/* Abstract Background Pattern */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                />

                {/* Main Interface Window */}
                <div className="relative w-full h-full max-h-[320px] bg-white rounded-xl border border-slate-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden z-10 transition-transform duration-700 hover:scale-[1.01]">
                  {/* Window Header */}
                  <div className="flex bg-white h-10 border-slate-50 border-b px-4 items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200" />
                    </div>
                    <div className="w-16 h-1.5 bg-slate-50 rounded-full" />
                  </div>

                  {/* Dashboard Body */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    {/* Top Section: Predictable Growth Graph */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                            Maandelijkse Groei
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-semibold text-slate-800 tracking-tight">€42.800</span>
                            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-0.5">
                              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m7 17 5-5 5 5" />
                                <path d="m7 12 5-5 5 5" />
                              </svg>
                              Stabiel
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Smooth Graph */}
                      <div className="relative h-16 w-full mt-1">
                        <svg viewBox="0 0 400 64" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0071eb" stopOpacity="0.1" />
                              <stop offset="100%" stopColor="#0071eb" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 64 L0 45 C40 45, 80 40, 120 38 C180 35, 240 25, 300 15 C340 8, 380 5, 400 2 L400 64 Z"
                            fill="url(#growthGradient)"
                          />
                          <path
                            d="M0 45 C40 45, 80 40, 120 38 C180 35, 240 25, 300 15 C340 8, 380 5, 400 2"
                            fill="none"
                            stroke="#0071eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                          <circle cx="300" cy="15" r="3" fill="white" stroke="#0071eb" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Section: Continuous Processes */}
                    <div className="flex flex-col gap-2.5 border-t border-slate-50 pt-4">
                      <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                        Continuïteit
                      </div>

                      {/* Row 1 */}
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50/50 border border-slate-100/80">
                        <div className="w-7 h-7 rounded bg-white border border-slate-100 flex items-center justify-center text-[#0071eb]">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1">
                          <div className="w-24 h-1.5 bg-slate-200 rounded-full" />
                          <div className="w-16 h-1.5 bg-slate-100 rounded-full" />
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Automation Badge */}
                <div className="absolute bottom-10 right-6 bg-white py-2.5 px-3.5 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3 z-20">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-700 leading-none">System Active</span>
                    <span className="text-[9px] text-slate-400 leading-none mt-1">Geoptimaliseerd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-sm mb-3 block">
              Opschaling & Continuïteit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              Voorspelbare groei zonder pieken en dalen
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center card-floating">
                  <Tag className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Segmentatie & Tags</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    We brengen structuur aan. Door slimme segmentatie krijgt de warmste lead direct prioriteit, zodat
                    jij je tijd efficiënt besteedt.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center card-floating">
                  <Star className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Automatische Review Verzoeken</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Meer reviews betekent meer vertrouwen. Ons systeem vraagt klanten automatisch om een review op het
                    juiste moment.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center card-floating">
                  <RefreshCw className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Always-on Leadstroom</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Voorkom het 'hollen of stilstaan' effect. Met continue campagnes en reactivatie flows zorgen we voor
                    stabiliteit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
