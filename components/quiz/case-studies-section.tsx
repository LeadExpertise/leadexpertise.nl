import Image from "next/image"
import { Star, Building2, Home, Zap, TrendingUp, Play } from "lucide-react"

const caseStudies = [
  {
    name: "Mark de Jong",
    title: "Eigenaar, Dakbeheer Totaal",
    quote:
      "Implementeerde een Google Ads strategie die het aantal gekwalificeerde leads met 150% verhoogde binnen zes maanden, waardoor de orderportefeuille voor het hele jaar vol zit.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80",
    videoThumbnail:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    icon: Building2,
    iconBg: "bg-[#0071eb]",
  },
  {
    name: "Sarah Visser",
    title: "Makelaar, 't Gooi Wonen",
    quote:
      "Ontwikkelde een geautomatiseerde lead-opvolging die de conversie op bezichtigingen verdubbelde en onze merknaam lokaal onmisbaar maakte voor verkopers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    icon: Home,
    iconBg: "bg-[#0071eb]",
  },
  {
    name: "Peter van den Berg",
    title: "Eigenaar, Zonnepanelen Plus",
    quote:
      "Vernieuwde de landingspagina's voor ons bedrijf, resulterend in een 50% stijging van directe offerte-aanvragen en aanzienlijk hogere conversieratio's op advertenties.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    icon: Zap,
    iconBg: "bg-[#111111]",
  },
  {
    name: "Karim El Amrani",
    title: "Financieel Advies Rijnmond",
    quote:
      "Lanceerde een uitgebreide Meta campagne die een 300% rendement op investering opleverde en de doelgroep effectiever bereikte dan ooit tevoren.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    iconBg: "bg-[#F59E0B]",
  },
]

export function QuizCaseStudiesSection() {
  return (
    <section className="bg-white border-slate-100 border-b py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
            Klantcases & Resultaten
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight">
            Wij werken voor de meest ambitieuze dienstverleners
          </h2>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group"
            >
              {/* Profile with Overlapping Badge */}
              <div className="relative inline-block mb-4">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full border-[3px] border-white shadow-sm object-cover"
                />
                <div
                  className={`absolute -bottom-1 -right-1 ${study.iconBg} text-white rounded-full p-1.5 border-[3px] border-white flex items-center justify-center shadow-sm`}
                >
                  <study.icon className="w-3 h-3" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-[#F59E0B] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Name & Title */}
              <h3 className="text-lg font-bold text-[#111111] leading-tight">{study.name}</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 mb-4">{study.title}</p>

              {/* Quote */}
              <p className="text-[15px] leading-relaxed text-slate-600 mb-8 max-w-md">"{study.quote}"</p>

              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden group/video cursor-pointer shadow-sm border border-slate-200">
                <Image
                  src={study.videoThumbnail || "/placeholder.svg"}
                  alt="Case Study Video"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/video:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/video:scale-110">
                    <Play className="w-6 h-6 text-[#111111] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
