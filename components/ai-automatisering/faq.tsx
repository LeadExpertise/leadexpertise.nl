"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AIAutomatiseringFAQ() {
  const faqs = [
    {
      question: "Is AI implementeren niet heel duur en ingewikkeld?",
      answer: "Nee. Wij bouwen \"low-code\" oplossingen die koppelen met de software die je al gebruikt (zoals je CRM, e-mail of Excel). Hierdoor zijn de opstartkosten laag en is de implementatie vaak al binnen 2 weken klaar.",
    },
    {
      question: "Is mijn data wel veilig?",
      answer: "Absoluut. Wij werken volgens de AVG-richtlijnen en gebruiken afgeschermde omgevingen. Jouw bedrijfsdata wordt niet gebruikt om publieke AI-modellen (zoals ChatGPT) te trainen. Het blijft strikt van jou.",
    },
    {
      question: "Vervangt dit mijn personeel?",
      answer: "Het vervangt *taken*, geen mensen. AI neemt het saaie, repeterende werk over (zoals data invoeren), waardoor jouw team meer tijd krijgt voor creatief werk, strategie en persoonlijk klantcontact. Ze worden productiever en gelukkiger.",
    },
  ]

  return (
    <section className="bg-white border-slate-200 border-b py-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6 tracking-tight">Veelgestelde vragen over AI</h2>
          <p className="text-lg text-slate-600">Twijfel je nog? Hier zijn de antwoorden.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-50 rounded-2xl px-6 border border-slate-100 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-lg text-slate-900 hover:no-underline py-6">
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
