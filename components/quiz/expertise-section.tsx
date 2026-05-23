import Image from "next/image"
import { SlidersHorizontal, BarChart2, Monitor } from "lucide-react"

const expertiseItems = [
  {
    icon: SlidersHorizontal,
    title: "Strategieën op maat",
    description:
      "Wij ontwikkelen marketingplannen die naadloos aansluiten bij jouw unieke bedrijfsdoelstellingen en meetbare resultaten opleveren.",
  },
  {
    icon: BarChart2,
    title: "Data-gedreven inzichten",
    description:
      "We gebruiken geavanceerde analytics om beslissingen te onderbouwen en campagnes continu te optimaliseren voor maximale impact.",
  },
  {
    icon: Monitor,
    title: "Conversie-gerichte Creatives",
    description:
      "Wij maken overtuigende content die resoneert met je doelgroep en de zichtbaarheid van je merk aanzienlijk vergroot.",
  },
]

export function QuizExpertiseSection() {
  return (
    <section className="bg-white py-24 px-6 border-b border-slate-100">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] mb-10 tracking-tight">Onze expertise</h2>
            <div className="flex flex-col gap-8">
              {expertiseItems.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0071eb]/10 flex items-center justify-center text-[#0071eb]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0071eb]/10 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
