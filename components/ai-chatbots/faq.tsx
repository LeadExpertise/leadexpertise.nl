import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ChatbotsFAQ() {
  const faqs = [
    {
      question: "Klinkt het systeem niet als een robot?",
      answer: "Nee. We trainen het systeem om exact te praten zoals jij dat doet. Het gebruikt natuurlijke taal, emoticons (indien gewenst) en reageert op de context van de klant. In 95% van de gevallen heeft de klant niet door dat ze met een systeem spreken."
    },
    {
      question: "Kan ik het gesprek zelf overnemen?",
      answer: "Absoluut. Je kunt op elk moment inbreken in het gesprek via onze app of je eigen WhatsApp. Zodra jij typt, stopt de automaat direct met reageren om verwarring te voorkomen."
    },
    {
      question: "Werkt dit met mijn huidige software?",
      answer: "We koppelen met vrijwel alle bekende tools zoals HubSpot, Salesforce, Pipedrive, ActiveCampaign, Google Calendar en Outlook. Als er een specifieke tool is, kijken we graag met je mee."
    }
  ]

  return (
    <section className="bg-white border-slate-200 border-b pt-24 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mb-6 tracking-tight">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-slate-600">
            Alles wat je moet weten over automatische opvolging.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-slate-50 rounded-2xl px-6 border border-slate-100 shadow-md"
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
