"use client"

import { Home, Hammer, Sun, PaintBucket, Zap, Stethoscope, Scale, Sparkles } from "lucide-react"

const sectors = [
  { icon: Home, name: "Makelaars" },
  { icon: Hammer, name: "Dakdekkers" },
  { icon: Sun, name: "Zonnepanelen" },
  { icon: PaintBucket, name: "Schilders" },
  { icon: Zap, name: "Installateurs" },
  { icon: Stethoscope, name: "Privé Klinieken" },
  { icon: Scale, name: "Advocatuur" },
  { icon: Sparkles, name: "Coaching" },
]

export function VoorWieSectors() {
  return (
    <section className="bg-white border-b border-slate-200 py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            Waar wij het verschil maken
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ons systeem werkt het beste voor lokale dienstverleners met een hoge klantwaarde.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-[#0071eb] hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <sector.icon className="h-8 w-8 text-slate-400 group-hover:text-[#0071eb] transition-colors mb-3" />
              <span className="font-semibold text-slate-700 group-hover:text-[#111111]">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
