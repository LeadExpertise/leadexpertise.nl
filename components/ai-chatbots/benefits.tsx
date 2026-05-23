import { Zap, Filter, Calendar } from "lucide-react"

export function ChatbotsBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Directe Respons",
      description: "Terwijl jouw concurrent de voicemail laat inspreken, heeft jouw klant al een persoonlijk WhatsApp bericht terug. Je bent altijd de eerste, en de eerste wint vaak de klant."
    },
    {
      icon: Filter,
      title: "Filtert 'Kijkers'",
      description: "Het systeem stelt de juiste vragen om te zien of de lead serieus is en budget heeft. Je spreekt alleen nog met mensen die écht klaar zijn om te kopen."
    },
    {
      icon: Calendar,
      title: "Direct in je Agenda",
      description: "Geen heen-en-weer gemail voor een afspraak. Het systeem stelt data voor uit jouw agenda en schiet de afspraak direct in zodra de klant akkoord is."
    }
  ]

  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase block text-sm font-semibold text-[#0071eb] tracking-widest mb-3">
            De Oplossing
          </span>
          <h2 className="text-[36px] md:text-[48px] leading-tight font-bold text-[#111111] tracking-tight mb-4">
            Je agenda vol, zonder moeite
          </h2>
          <p className="text-[18px] leading-relaxed text-slate-500 max-w-xl mx-auto">
            Ons systeem neemt de eerste opvolging volledig van je over via WhatsApp. Persoonlijk, snel en effectief.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0071eb] mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
