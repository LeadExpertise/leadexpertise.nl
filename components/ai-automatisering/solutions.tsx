"use client"

import { MessageSquareCode, GitBranch, UserCircle, CheckCircle, TrendingUp, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIAutomatiseringSolutions() {
  const solutions = [
    {
      icon: MessageSquareCode,
      title: "Slimme Klantenservice Chatbots",
      description: "Een AI die 24/7 vragen beantwoordt, afspraken inplant en leads kwalificeert op je website en WhatsApp. Klinkt en reageert als jouw beste medewerker.",
      features: ["Direct antwoord, ook 's nachts", "Koppeling met je agenda"],
      bgColor: "bg-blue-100",
    },
    {
      icon: GitBranch,
      title: "Workflow Automatisering",
      description: "Koppel je systemen aan elkaar. Nieuwe lead in Facebook? Automatisch in je CRM, een welkomstmail eruit en een taak voor sales. Zonder dat jij iets doet.",
      features: ["Geen copy-paste werk meer", "Foutloze dataverwerking"],
      bgColor: "bg-purple-100",
    },
    {
      icon: UserCircle,
      title: "AI Medewerkers",
      description: "Specialistische AI agenten getraind op jouw bedrijfsdata. Een \"Marketing AI\" die blogs schrijft in jouw toon, of een \"HR AI\" die contracten voorbereidt.",
      features: ["Kent je hele bedrijfskennis", "Schaalbaar zonder inwerktijd"],
      bgColor: "bg-emerald-100",
    },
  ]

  return (
    <section id="aanbod" className="bg-white border-slate-200 border-b py-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">Onze Oplossingen</span>
          <h2 className="text-4xl md:text-5xl leading-tight font-bold text-[#111111] tracking-tight mb-4">Praktische AI toepassingen</h2>
          <p className="leading-relaxed text-lg font-medium text-slate-600 mb-10">
            Geen vage science-fiction, maar concrete tools die vandaag nog impact maken op jouw bedrijf.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#0071eb]/30 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${solution.bgColor} rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity`} />

              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0071eb] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Central Action & Features Box */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-5xl mx-auto bg-[#111111] rounded-3xl border border-slate-800 p-8 md:p-12 shadow-xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071eb] rounded-full filter blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Klaar om de concurrentie in te halen?</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Terwijl anderen nog handmatig offertes typen, laat jij AI het werk doen. Start met een vrijblijvende scan van jouw processen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#0071eb] hover:bg-[#0060c9] text-white rounded-full font-bold px-8 py-3.5 shadow-lg shadow-blue-900/50 hover:-translate-y-0.5 transition-all"
                    asChild
                  >
                    <a href="#contact">Vraag gratis analyse aan</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border border-white/20 text-white rounded-full font-bold px-8 py-3.5 hover:bg-white/10 transition-all"
                    asChild
                  >
                    <a href="#">Bekijk voorbeelden</a>
                  </Button>
                </div>
              </div>

              {/* Visual Stats */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[280px]">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                  <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">40+ Uur</div>
                    <div className="text-xs text-slate-400">Besparing per week</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">-30%</div>
                    <div className="text-xs text-slate-400">Operationele kosten</div>
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
