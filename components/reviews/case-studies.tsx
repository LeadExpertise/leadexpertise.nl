import Image from "next/image"

const caseStudies = [
  {
    tags: ["Google Ads", "Dakdekker"],
    title: "Dakbeheer Nederland: Van lege agenda naar wachtlijst",
    challenge: "Dakbeheer Nederland was volledig afhankelijk van dure leadplatformen zoals Werkspot. De marges waren dun door de hoge concurrentie en de kwaliteit van de leads was wisselend.",
    solution: "We lanceerden een gerichte lokale Google Ads campagne gecombineerd met een conversiegerichte landingspagina. Door slimme uitsluitingen in zoekwoorden filterden we de \"gelukszoekers\" eruit.",
    result: "Binnen 3 maanden daalden de kosten per lead met 40% terwijl de kwaliteit steeg. De agenda zit nu 8 weken vooruit volgepland.",
    quote: "Het verschil is dag en nacht. Ik hoef niet meer te vechten voor elke klus, klanten bellen mij nu.",
    author: "Johan, Eigenaar",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Omzetstijging", value: "+ €45.000", suffix: "/mnd", color: "text-emerald-600" },
      { label: "Leads", value: "85+", color: "text-[#111111]" },
    ],
    gradientFrom: "from-blue-100",
    gradientTo: "to-purple-50",
    imageFirst: true,
  },
  {
    tags: ["Meta Ads", "Makelaar"],
    title: "Makelaardij 't Gooi: Exclusieve listings via Facebook",
    challenge: "In een krappe huizenmarkt is het vinden van nieuwe verkoopopdrachten lastig. Traditionele folders en krantenadvertenties leverden te weinig op.",
    solution: "We ontwikkelden een \"Woningwaarde Quiz\" funnel op Facebook en Instagram. Woningbezitters konden laagdrempelig de waarde van hun huis checken, waarna de makelaar contact opnam voor een gratis waardebepaling.",
    result: "Een constante stroom van verkopers die serieus overwegen te verkopen. 12 nieuwe verkoopopdrachten in de eerste maand.",
    quote: "De leads die hieruit komen zijn vaak nog niet eens op Funda aan het kijken. We zitten als eerste aan tafel.",
    author: "Marieke, Makelaar",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "ROI", value: "12.4x", color: "text-[#0071eb]" },
      { label: "Cost per Lead", value: "€ 42,00", color: "text-[#111111]" },
    ],
    gradientFrom: "from-emerald-100",
    gradientTo: "to-blue-50",
    imageFirst: false,
  },
  {
    tags: ["Multi-channel", "Zonnepanelen"],
    title: "SolarTech: Opschalen zonder sales-team",
    challenge: "SolarTech had capaciteit om te installeren, maar het sales proces was traag. Leads werden te laat nagebeld en haakten af.",
    solution: "We implementeerden niet alleen Google Ads, maar ook een volledig geautomatiseerde WhatsApp opvolging. Leads kregen direct een berichtje om een schouw in te plannen.",
    result: "De conversie van lead naar afspraak steeg van 15% naar 45%. Het installatieteam kan nu maximaal draaien zonder dat er extra verkopers nodig waren.",
    quote: "Automatisering was de sleutel. Wij doen waar we goed in zijn (installeren), het systeem regelt de nieuwe klanten.",
    author: "Koen, Directeur",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Groei", value: "3x Omzet", color: "text-emerald-600" },
      { label: "Installaties", value: "40 /mnd", color: "text-[#111111]" },
    ],
    gradientFrom: "from-yellow-100",
    gradientTo: "to-orange-50",
    imageFirst: true,
  },
]

export function CaseStudies() {
  return (
    <section className="bg-[#fafafa] py-24 border-b border-slate-200">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight mb-6">
            Hoe wij bedrijven transformeren
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bekijk de strategieën en resultaten van onze klanten in detail.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {caseStudies.map((study, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`relative group ${study.imageFirst ? 'order-2 lg:order-1' : 'order-2'}`}>
                <div className={`absolute -inset-4 bg-gradient-to-r ${study.gradientFrom} ${study.gradientTo} rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500`} />
                <div className="relative rounded-2xl overflow-hidden card-dramatic border border-slate-200 aspect-[4/3]">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 card-floating">
                    <div className="flex justify-between items-center">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="flex items-center">
                          {i > 0 && <div className="h-8 w-px bg-slate-200 mx-4" />}
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</p>
                            <p className={`text-2xl font-bold ${stat.color}`}>
                              {stat.value}
                              {stat.suffix && <span className="text-sm text-slate-400 font-normal">{stat.suffix}</span>}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={study.imageFirst ? 'order-1 lg:order-2' : 'order-1'}>
                <div className="flex gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                        i === 0 ? 'bg-blue-50 text-[#0071eb]' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-[#111111] mb-6">{study.title}</h3>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">De uitdaging:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong className="text-slate-900">De oplossing:</strong> {study.solution}
                  </p>
                  <p>
                    <strong className="text-slate-900">Het resultaat:</strong> {study.result}
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <blockquote className="italic text-slate-700 font-medium">
                    {`"${study.quote}"`}
                    <footer className="text-sm text-slate-500 mt-2 not-italic font-normal">
                      - {study.author}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
