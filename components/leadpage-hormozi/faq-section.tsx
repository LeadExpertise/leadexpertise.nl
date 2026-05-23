import { X } from "lucide-react"

export function HormoziFaqSection() {
  const faqs = [
    {
      question: "Kost het opvolgen van leads mij niet te veel tijd?",
      answers: [
        "Nee, dat is precies wat we voorkomen. Het systeem filtert automatisch de 'shoppers' eruit.",
        "U of uw assistente spreekt alleen mensen die serieus zijn en een afspraak willen plannen.",
        "Bovendien automatiseren we de eerste contactmomenten via WhatsApp en SMS. Hierdoor is uw agenda gevuld met consulten, niet met telefoontjes.",
      ],
    },
    {
      question: "Werkt dit ook in een kleine regio of dorp?",
      answers: [
        "Ja, vaak zelfs beter dan in de grote stad.",
        "In lokale markten is de concurrentie op advertentiegebied vaak lager, waardoor u voor een lager bedrag de dominante speler wordt.",
        "We doen vooraf altijd de Potentie-Scan om zeker te weten dat er genoeg zoekvolume is in uw specifieke postcodegebied.",
      ],
    },
    {
      question: "Zit ik vast aan een langdurig contract?",
      answers: [
        "Absoluut niet.",
        "Wij werken met een maandelijks opzegbaar model. Wij zijn ervan overtuigd dat u klant blijft vanwege de resultaten, niet vanwege een wurgcontract.",
        "Transparantie is voor ons de basis van een langdurige samenwerking.",
      ],
    },
  ]

  return (
    <section className="bg-white pb-24" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 id="faq-heading" className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight text-center mb-12">
          Veelgestelde vragen
        </h2>

        <div itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <article key={index} className="mb-12" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="bg-[#1e212b] text-white py-5 px-6 rounded-lg flex items-center justify-center relative cursor-pointer hover:bg-[#282c3a] transition-colors shadow-lg">
                <h3 className="text-base md:text-lg font-semibold text-center pr-8 pl-8 tracking-tight" itemProp="name">
                  {faq.question}
                </h3>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70">
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg space-y-4 px-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  {faq.answers.map((answer, i) => (
                    <p key={i}>{answer}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
