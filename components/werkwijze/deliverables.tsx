"use client"

import { Laptop, Search, ImageIcon, MessageSquare, PenSquare, BarChart3 } from "lucide-react"

const deliverables = [
  {
    icon: Laptop,
    title: "Landingspagina's",
    description: "Geen standaard website, maar specifieke pagina's geoptimaliseerd voor één doel: bezoekers omzetten in leads. Snel, mobielvriendelijk en overtuigend.",
  },
  {
    icon: Search,
    title: "Google Ads Systeem",
    description: "Complete inrichting van Search campagnes. We zorgen dat je bovenaan staat bij de zoektermen die koopintentie tonen (\"dakdekker utrecht spoed\").",
  },
  {
    icon: ImageIcon,
    title: "Meta Advertenties",
    description: "Visuele advertenties op Facebook en Instagram om je lokale bekendheid te vergroten en passieve zoekers te bereiken.",
  },
  {
    icon: MessageSquare,
    title: "Lead Opvolging (CRM)",
    description: "Een dashboard waarin al je leads binnenkomen. Inclusief automatische SMS en e-mail bevestigingen naar de klant en notificaties naar jou.",
  },
  {
    icon: PenSquare,
    title: "Copywriting & Creatives",
    description: "Wij schrijven de advertentieteksten en ontwerpen de beelden. Jij hoeft alleen maar foto's van je projecten aan te leveren.",
  },
  {
    icon: BarChart3,
    title: "Real-time Rapportage",
    description: "24/7 inzicht in je resultaten. Precies zien wat je uitgeeft, hoeveel leads er zijn en wat de kosten per lead zijn. Geen geheimen.",
  },
]

export function WerkwijzeDeliverables() {
  return (
    <section className="bg-[#FAFAFA] border-b border-slate-200 py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">Deliverables</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight mb-6">Wat wij voor je bouwen</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Je krijgt geen "uren", je krijgt assets. Tastbare onderdelen die eigendom worden van jouw bedrijf.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item) => (
            <div 
              key={item.title}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0071eb] mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
