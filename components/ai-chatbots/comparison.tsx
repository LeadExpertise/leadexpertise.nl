import { XCircle, CheckCircle } from "lucide-react"

export function ChatbotsComparison() {
  const oldWay = [
    { title: "Trage reactietijd", description: "Je belt vaak uren (of dagen) te laat terug." },
    { title: "Voicemail Tag", description: "Jij belt, zij nemen niet op. Zij bellen, jij neemt niet op." },
    { title: "Chaos", description: "Post-its, vergeten terugbelnotities en stress." }
  ]

  const newWay = [
    { title: "Direct contact", description: "Klanten lezen WhatsApp binnen 3 minuten." },
    { title: "Hogere Conversie", description: "Tot 300% meer kans op een sale door snelheid." },
    { title: "Rust in je hoofd", description: "Geen leads die meer tussen wal en schip vallen." }
  ]

  return (
    <section className="bg-[#FAFAFA] pt-24 pb-24 border-b border-slate-200">
      <div className="container max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            Ouderwets bellen vs. Het Nieuwe Opvolgen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
          
          {/* THE OLD WAY */}
          <div className="bg-white p-8 md:p-10 rounded-2xl md:rounded-r-none md:rounded-l-2xl border border-slate-200 shadow-md">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-400 mb-2">Handmatige Opvolging</h3>
              <p className="text-sm text-slate-500">De frustrerende realiteit</p>
            </div>
            <ul className="space-y-6">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start gap-4 opacity-70">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                  <div>
                    <span className="block font-semibold text-slate-700">{item.title}</span>
                    <span className="text-sm text-slate-500">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* THE NEW WAY */}
          <div className="bg-[#111111] p-8 md:p-10 rounded-2xl border border-slate-900 shadow-2xl relative md:-ml-4 md:scale-[1.03] z-10 flex flex-col justify-center">
            
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-[#25D366] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-lg">
              WhatsApp Power
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Automatische Opvolging</h3>
              <p className="text-sm text-gray-400">Via LeadExpertise</p>
            </div>
            <ul className="space-y-6">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-[#25D366] rounded-full p-0.5 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">{item.title}</span>
                    <span className="text-sm text-gray-400">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
