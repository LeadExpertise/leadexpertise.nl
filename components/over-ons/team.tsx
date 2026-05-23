const teamMembers = [
  {
    initials: "SD",
    name: "Sam",
    role: "Strategie & Ads",
    skills: ["Google Ads", "Funnelbouw"],
    bgColor: "bg-blue-50",
    textColor: "text-[#0071eb]"
  },
  {
    initials: "LK",
    name: "Lisa",
    role: "Conversie & Copy",
    skills: ["Psychologie", "Copywriting"],
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    initials: "MJ",
    name: "Mark",
    role: "Data & Tracking",
    skills: ["GTM", "Analytics"],
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    initials: "JR",
    name: "Julia",
    role: "Klantensucces",
    skills: ["Automatisering", "CRM"],
    bgColor: "bg-amber-50",
    textColor: "text-amber-600"
  }
]

export function TeamSection() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
            De mensen achter de schermen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 tracking-tight">
            Ontmoet de specialisten
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wij geloven in specialisme, niet in generalisten. Ieder teamlid focust op één onderdeel van jouw funnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.initials}
              className="bg-white p-8 rounded-2xl border border-slate-200 card-floating text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${member.bgColor} rounded-full flex items-center justify-center text-xl font-bold ${member.textColor} mx-auto mb-6 card-elevated group-hover:scale-110 transition-transform`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
