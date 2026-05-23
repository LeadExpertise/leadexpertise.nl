"use client"

const techStack = [
  { name: "Google Ads", icon: "G" },
  { name: "Meta", icon: "M" },
  { name: "Analytics", icon: "A" },
  { name: "AI Integration", icon: "AI" },
  { name: "Zapier", icon: "Z" },
]

export function WerkwijzeTechStack() {
  return (
    <section className="bg-white py-16 px-6 border-b border-slate-200">
      <div className="container max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Wij werken met de beste technologie
        </p>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 hover:opacity-100 transition-all duration-500">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 font-bold text-sm">
                {tech.icon}
              </div>
              <span className="font-bold text-slate-700 text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
