"use client"

import { X } from "lucide-react"

const painPoints = [
  {
    title: "Heb je geen energie, zin of tijd om het zelf te doen?",
    description: "Het voelt als een molensteen om je nek terwijl je liever met je vak bezig bent en klanten helpt.",
  },
  {
    title: "Bang dat uitbesteden geld kost zonder resultaat?",
    description: "Je zoekt geen gokkast, maar een investering waarbij 1 euro erin minimaal 3 euro oplevert.",
  },
  {
    title: "Heb je geen tijd om leads op te volgen?",
    description: "Je wilt geen lijst met e-mailadressen, maar serieuze gesprekken met mensen die jouw waarde begrijpen.",
  },
]

export function PainPointsSection() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Image */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden card-dramatic border border-slate-200 group">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
            alt="Ondernemer worstelt met marketing uitdagingen - LeadExpertise helpt met leadgeneratie"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1200}
            height={800}
            decoding="async"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0071eb]/20 to-[#6200EA]/20 mix-blend-overlay" />
          <div
            className="bg-center bg-cover absolute inset-0"
            style={{
              backgroundImage: "url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cb4057f-ccb4-49be-8fbe-3b0a2b31b60e_1600w.png)",
            }}
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          <span className="uppercase md:text-sm block text-xs font-semibold text-[#0071eb] tracking-widest mb-4">
            Herken je dit?
          </span>
          <h2 className="text-[32px] md:text-[48px] leading-tight font-extrabold text-[#111111] tracking-tight mb-6">
            Krijg je grijze haren van marketing?
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-slate-500 max-w-xl mb-10">
            Heb je geen tijd, zin of kennis om je marketing te doen? Waarschijnlijk wil jij liever met je bedrijf bezig zijn. In plaats van bezig te zijn met marketing.
          </p>

          {/* Bullet Points */}
          <ul className="mb-10 space-y-6">
            {painPoints.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center mt-1 card-elevated">
                  <X className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-1.5">{point.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#proven-system"
              className="inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 bg-[#0071eb] border border-transparent rounded-full hover:bg-[#0060c9] card-floating hover:shadow-md hover:-translate-y-0.5"
            >
              Ontdek aanbod
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-semibold text-[#111111] transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 card-elevated hover:shadow-md hover:-translate-y-0.5"
            >
              Bekijk case studies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
