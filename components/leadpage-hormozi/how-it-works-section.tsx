import { ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Alleen Kwalitatieve Clienten",
      description:
        "Wij targeten mensen die nu zoeken. Geen twijfelaars, maar clienten die kwaliteit waarderen.",
      image: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=600&q=80",
      imageAlt: "Stap 1: Kwalitatieve cliënten werven via gerichte Google Ads campagnes voor praktijkhouders",
    },
    {
      number: 2,
      title: "Volledig Geautomatiseerd",
      description:
        "Wij zetten alles op, van advertentie tot eerste contact. Geen extra werk voor je receptie.",
      image: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=600&q=80",
      imageAlt: "Stap 2: Geautomatiseerd leadsysteem met WhatsApp en CRM integratie",
    },
    {
      number: 3,
      title: "Inzicht & Voorspelbaarheid",
      description:
        "Helder dashboard. Weet precies wat elke euro oplevert. Stuur op cijfers, niet op gevoel.",
      image: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=600&q=80",
      imageAlt: "Stap 3: Overzichtelijk marketing dashboard met ROI inzichten voor praktijken",
    },
  ]

  return (
    <section className="bg-[#fafafa] pt-20 pb-20" id="werkwijze">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Zo zorgen wij voor een zorgeloze clientenstroom
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Geen complexe trajecten. Wij hanteren een helder 3-staps proces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[86px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center group">
              <div className="w-[257px] h-[172px] bg-white rounded-2xl border border-slate-100 shadow-md mb-6 relative z-10 p-1">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#0071eb] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-20">
                  {step.number}
                </span>
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={step.imageAlt}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#scan"
            className="inline-flex items-center gap-2 bg-[#0071eb] hover:bg-[#0060c9] text-white text-base font-bold px-10 py-4 rounded-full transition-all shadow-md hover:-translate-y-1"
          >
            Gratis Potentie-Scan
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
