"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Hoe lang duurt de setup?",
    answer: "Gemiddeld duurt het 5 tot 10 werkdagen vanaf de kick-off meeting tot het moment dat we live gaan. In deze tijd bouwen we de pagina's, richten we de accounts in en schrijven we de advertentieteksten.",
  },
  {
    question: "Wat hebben jullie van mij nodig?",
    answer: "We proberen je zoveel mogelijk te ontlasten. We hebben toegang nodig tot je eventuele bestaande accounts, logo bestanden, en goede foto's/video's van je werk. Verder hebben we in de kick-off een uurtje nodig om je doelgroep scherp te krijgen.",
  },
  {
    question: "Blijft de landingspagina mijn eigendom?",
    answer: "Ja. Alles wat we bouwen in jouw accounts is van jou. De landingspagina's hosten wij voor optimale snelheid, maar de content en data zijn van jou.",
  },
]

export function WerkwijzeFaq() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6 tracking-tight">
            Vragen over de werkwijze
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border border-slate-200 shadow-md"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
