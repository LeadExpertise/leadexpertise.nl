import { Users, MessageCircle, CalendarPlus } from "lucide-react"

export function FollowUpSection() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden card-dramatic border border-slate-200 bg-white aspect-square relative group">
              <div className="absolute inset-0 bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
                {/* Abstract Background Pattern */}
                <div
                  className="opacity-30 absolute inset-0"
                  style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                />
                
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                {/* Main Interface Card */}
                <div className="relative w-[85%] max-w-[380px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-200 flex flex-col overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]">
                  {/* Header */}
                  <div className="px-5 h-12 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-black/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-black/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-black/10" />
                      </div>
                      <div className="h-4 w-px bg-slate-200" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100/50 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-600">Live</span>
                    </div>
                  </div>

                  {/* Live Feed Content */}
                  <div className="flex flex-col bg-white">
                    {/* Item 1: Active Lead */}
                    <div className="flex items-center gap-3 px-5 py-3.5 bg-blue-50/40 border-l-[3px] border-[#0071eb]">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0071eb] flex items-center justify-center shrink-0 shadow-sm">
                        <Users className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] font-bold text-slate-800 truncate">Sophie de Vries</span>
                          <span className="text-[10px] font-medium text-slate-400">Zojuist</span>
                        </div>
                        <span className="text-[11px] text-slate-500 truncate font-medium">
                          Nieuwe aanvraag via Website
                        </span>
                      </div>
                    </div>

                    {/* Item 2: WhatsApp */}
                    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-50 hover:bg-slate-50 transition-colors group/item cursor-pointer">
                      <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                        <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] font-bold text-slate-800 truncate">Thomas Jansen</span>
                          <span className="text-[10px] font-medium text-slate-400">14:02</span>
                        </div>
                        <span className="text-[11px] text-slate-500 truncate">"Kan ik morgen langskomen?"</span>
                      </div>
                    </div>

                    {/* Item 3: Calendar */}
                    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                        <CalendarPlus className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-[13px] font-bold text-slate-800 truncate">Intakegesprek</span>
                          <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 rounded-full">
                            Bevestigd
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 truncate">Morgen, 10:00 - 11:00</span>
                      </div>
                    </div>

                    {/* Item 4: Deal */}
                    <div className="flex items-center gap-3 px-5 py-3.5 opacity-60 hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[13px] font-medium text-slate-600 truncate">Offerte #2024-089</span>
                        <span className="text-[11px] text-slate-400 truncate">Getekend • € 4.500</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Bubble 1 (Left) */}
                <div className="absolute left-4 md:left-8 top-1/3 -translate-y-1/2 z-20">
                  <div className="flex items-center gap-2.5 bg-white p-2.5 pr-4 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] border border-slate-100 transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105 cursor-default">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64"
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                        alt="Lisa"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">Lisa (Lead)</span>
                      <span className="text-[9px] font-medium text-slate-500 leading-tight">Hebben jullie tijd?</span>
                    </div>
                  </div>
                </div>

                {/* Floating Bubble 2 (Right) */}
                <div className="absolute right-4 md:right-8 bottom-1/4 z-20">
                  <div className="flex items-center gap-2.5 bg-white p-2.5 pr-4 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] border border-slate-100 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 cursor-default">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">+ € 1.250</span>
                      <span className="text-[9px] font-bold text-emerald-600 leading-tight">Nieuwe deal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-sm mb-3 block">
              Opvolging & Automatisering
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              Geen lead gaat meer verloren
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center card-floating">
                  <Users className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Je eigen CRM</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Alles overzichtelijk op één plek. Beheer leads, afspraken en communicatie vanuit één centraal
                    dashboard.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center card-floating">
                  <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Directe WhatsApp Opvolging</h3>
                  <p className="text-[15px] leading-relaxed text-slate-500">
                    Snelheid is alles. Leads krijgen binnen minuten automatisch antwoord via WhatsApp en SMS, zelfs als
                    jij bezig bent.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center card-floating">
                  <CalendarPlus className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Afspraakplanner & Reminders</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Minder heen-en-weer gemail. Leads plannen zichzelf in, en automatische reminders zorgen dat ze ook
                    daadwerkelijk opdagen.
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
