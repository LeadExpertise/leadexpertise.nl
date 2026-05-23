import { XCircle, Phone, Mail } from "lucide-react"

export function ChatbotsPainPoints() {
  return (
    <section className="bg-white border-slate-200 border-b pt-20 px-6 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <span className="uppercase md:text-sm block text-xs font-semibold text-[#ef4444] tracking-widest mb-4">
              De valkuil
            </span>
            <h2 className="text-[32px] md:text-[48px] leading-tight font-extrabold text-[#111111] tracking-tight mb-6">
              Ben jij de bottleneck van je eigen groei?
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-slate-500 max-w-xl mb-10">
              Je bent druk aan het werk. De telefoon gaat. Je kunt niet opnemen. Tegen de tijd dat je terugbelt, heeft de klant al een ander gevonden.
            </p>

            {/* Bullet Points */}
            <ul className="mb-10 space-y-6">
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center mt-1 shadow-md">
                  <XCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-1.5">Leads wachten niet meer</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">
                    Als je niet binnen 5 minuten reageert, daalt je conversiekans met 80%. Klanten willen *nu* antwoord.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center mt-1 shadow-md">
                  <XCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-1.5">Avonden en weekenden gemist</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">
                    Meer dan 40% van de aanvragen komt binnen buiten kantoortijden. Wie vangt deze mensen op als jij vrij bent?
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center mt-1 shadow-md">
                  <XCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-1.5">{"Tijdverspilling aan 'shoppers'"}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-500">
                    Je besteedt uren aan bellen en mailen met mensen die uiteindelijk alleen de prijs wilden weten.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Visual Representation of Chaos */}
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-center items-center">
            
            {/* Missed Call Card */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-red-100 w-full max-w-sm mb-4 opacity-60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 text-red-500 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Gemiste Oproep</div>
                    <div className="text-xs text-red-500">{"09:14 • Potentiële klant"}</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400">2u geleden</span>
              </div>
            </div>

            {/* Missed Email Card */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 w-full max-w-sm mb-4 opacity-40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 text-slate-500 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Nieuwe E-mail</div>
                    <div className="text-xs text-slate-500">Offerte aanvraag...</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400">Gisteren</span>
              </div>
            </div>

            {/* Central Alert */}
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg font-bold text-center shadow-md relative z-10 scale-110">
              <div className="text-3xl font-extrabold mb-1">{"€ 2.500+"}</div>
              <div className="text-sm font-medium opacity-90">Gemiste omzet deze maand</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
