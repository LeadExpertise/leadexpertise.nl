import { User, CalendarCheck, ArrowDown, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatbotsHowItWorks() {
  return (
    <section className="bg-white pt-24 pb-24 border-b border-slate-200">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Flow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#0071eb]/5 rounded-full blur-3xl transform -translate-x-10" />
            <div className="relative space-y-4">
              {/* Step 1 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 opacity-50">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <User className="w-6 h-6 text-slate-500" />
                </div>
                <div className="text-sm font-medium text-slate-500">Lead vult formulier in op website</div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center text-slate-300">
                <ArrowDown className="w-6 h-6" />
              </div>

              {/* Step 2 (Active) */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#0071eb]/20 flex items-center gap-4 relative z-10 scale-105">
                <div className="bg-[#25D366] p-3 rounded-full text-white shadow-lg shadow-green-500/30">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Direct WhatsApp Bericht</div>
                  <div className="text-sm text-slate-600">Binnen 60 seconden antwoord</div>
                </div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#0071eb] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  AUTOMATISCH
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-slate-300">
                <ArrowDown className="w-6 h-6" />
              </div>

              {/* Step 3 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 opacity-80">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0071eb]">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-slate-700">Afspraak staat in jouw agenda</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">Hoe werkt het?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Wij koppelen ons systeem aan jouw bestaande lead-bronnen (website, Facebook, Google). Zodra er een aanvraag binnenkomt, neemt onze assistent het over.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0071eb] font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-900">{"Setup & Koppeling"}</h4>
                  <p className="text-sm text-slate-500 mt-1">Wij richten alles in. Jij hoeft alleen je agenda te koppelen.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0071eb] font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-900">Personaliseren</h4>
                  <p className="text-sm text-slate-500 mt-1">We trainen het systeem op jouw toon en veelgestelde vragen.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0071eb] font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">Livegang</h4>
                  <p className="text-sm text-slate-500 mt-1">Leun achterover en zie de afspraken binnenstromen.</p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Button 
                variant="outline"
                className="bg-blue-50 border-[#0071eb]/20 text-[#0071eb] hover:bg-blue-100 rounded-full px-6 py-3 font-bold"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Bekijk een live voorbeeld
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
