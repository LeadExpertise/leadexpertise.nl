"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatbotsHero() {
  return (
    <header className="md:pt-24 md:pb-24 bg-[#FAFAFA] pt-12 px-6 pb-12 overflow-hidden relative">
      {/* Abstract Background Shape */}
      <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#0071eb]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container items-center grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Hero Text */}
        <div className="text-left relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#0071eb] text-xs font-bold uppercase tracking-wide mb-6 border border-blue-200">
            24/7 Bereikbaar
          </span>
          <h1 className="text-[36px] md:text-[54px] leading-[1.1] font-extrabold text-[#111111] tracking-tight mb-6">
            Elke gemiste oproep is een <span className="text-[#0071eb]">gemiste kans</span>.
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed font-normal text-slate-600 mb-8 md:mb-10 max-w-lg">
            Laat leads niet wachten. Onze slimme WhatsApp-assistent volgt leads direct op, kwalificeert ze en plant afspraken in jouw agenda. Zelfs als jij op de ladder staat of in gesprek bent.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-[#0071eb] hover:bg-[#0060c9] text-white font-extrabold uppercase tracking-wide rounded-full px-8 py-6 text-[16px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Bekijk demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#111111] font-extrabold uppercase tracking-wide rounded-full px-8 py-6 text-[16px] border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Bereken je winst
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Reageert binnen 60 sec
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Koppeling met CRM
            </div>
          </div>
        </div>

        {/* Visual: Phone Mockup with Chat */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] md:w-[340px] bg-[#111111] rounded-[40px] border-[8px] border-[#111111] shadow-2xl overflow-hidden aspect-[9/19] transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Screen Header */}
            <div className="bg-[#075E54] p-4 pt-8 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold">Jouw Assistent</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="bg-[#E5DDD5] h-full p-4 flex flex-col gap-4">
              {/* Incoming Lead Message */}
              <div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-xs text-slate-800">
                <p>Hoi, ik wil graag een offerte voor zonnepanelen.</p>
                <span className="text-[10px] text-slate-500 block text-right mt-1">14:02</span>
              </div>

              {/* Bot Response 1 */}
              <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-slate-800">
                <p>{"Bedankt voor je bericht! 👋 Ik help je graag verder. Om welke regio gaat het?"}</p>
                <span className="text-[10px] text-slate-500 block text-right mt-1">14:02</span>
              </div>

              {/* Lead Response 2 */}
              <div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-xs text-slate-800">
                <p>Regio Utrecht. Het gaat om een schuin dak.</p>
                <span className="text-[10px] text-slate-500 block text-right mt-1">14:03</span>
              </div>

              {/* Bot Response 2 (Appointment) */}
              <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-slate-800">
                <p>Duidelijk. Ik kan dinsdag om 10:00 een adviseur laten langskomen. Schikt dat?</p>
                <span className="text-[10px] text-slate-500 block text-right mt-1">14:03</span>
              </div>
              
              {/* Typing Indicator */}
              <div className="self-end bg-[#DCF8C6] px-3 py-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-xs text-slate-800 flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:100ms]" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:200ms]" />
              </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Resultaat</p>
                <p className="text-sm font-bold text-slate-900">Afspraak Ingepland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
