import { ArrowRight } from "lucide-react"

const cards = [
  {
    number: "1",
    title: "Jouw Groeiplan op Maat",
    description: "Je ontvangt een <span class=\"font-medium text-slate-900\">op maat gemaakt groeiplan</span> om direct meer leads, sales en winst te genereren uit je huidige website en advertenties. Ons team van experts staat klaar om je te helpen.",
  },
  {
    number: "2",
    title: "Ontdek de Geheimen van Schalen",
    description: "Ontdek een beproefde en bewezen <span class=\"font-medium text-slate-900\">marketing strategie</span> die je helpt om consistent nieuwe klanten aan te trekken via Google en Social Media, zonder budget te verspillen.",
  },
  {
    number: "3",
    title: "Antwoord op al je vragen",
    description: "Vraag onze <span class=\"font-medium text-slate-900\">wereldklasse marketeers</span> alles over je huidige campagnes, uitdagingen of tech-stack en krijg direct toepasbaar advies om je conversies te verhogen.",
  },
  {
    number: "4",
    title: "De BESTE Strategie Voor Jou",
    description: "Leer precies welke kanalen en funnels het <span class=\"font-medium text-slate-900\">beste werken voor jouw specifieke niche</span> en prijsklasse, zodat je stopt met gokken en start met groeien.",
  },
  {
    number: "5",
    title: "Versla Je Concurrentie",
    description: "Krijg een diepgaande analyse en uitleg waarom je concurrenten mogelijk beter presteren en hoe jij die marktpositie kunt overnemen met <span class=\"font-medium text-slate-900\">slimmere advertenties</span>.",
  },
  {
    number: "6",
    title: "10X Je Resultaat",
    description: "<span class=\"font-medium text-slate-900\">100% GRATIS, geen verplichtingen.</span> Krijg direct toegang tot inzichten waar anderen duizenden euro's voor betalen. Boek je sessie hieronder!",
  },
]

export function StrategySessionSection() {
  return (
    <section className="overflow-hidden bg-white border-slate-200 border-b pt-24 pb-24 relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="container z-10 max-w-6xl mx-auto px-6 relative">
        {/* Headline */}
        <h2 className="md:text-5xl leading-tight text-3xl font-semibold text-slate-900 tracking-tight text-center max-w-4xl mx-auto mb-16">
          Ontdek wat deze <span className="text-[#0071eb]">Gratis Groei-Strategie Sessie</span> voor jouw bedrijf betekent
        </h2>

        {/* Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl card-floating hover:card-dramatic transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group h-full"
            >
              <h3 className="text-lg font-semibold text-[#0071eb] mb-4 group-hover:scale-105 transition-transform">
                {card.number}: {card.title}
              </h3>
              <p
                className="text-slate-600 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>

        {/* Big CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="w-full sm:w-auto px-10 py-5 bg-[#0071eb] text-white rounded-lg font-semibold text-lg md:text-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-[#0060c9] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-3 group"
          >
            <span>Boek JOUW Gratis Strategie Sessie</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
