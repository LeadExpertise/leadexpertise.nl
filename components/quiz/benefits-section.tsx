import { BarChart3, Users, Wallet, MessageCircle, ArrowRight } from "lucide-react"

export function QuizBenefitsSection() {
  return (
    <section className="bg-[#FAFAFA] border-b border-slate-200 py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs md:text-sm mb-4 block">
            Jouw voordelen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Wat je kunt verwachten in de eerste 30 dagen
          </h2>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Analysis */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_12px_40px_rgba(0,113,235,0.08)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#0071eb] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-4">Diepgaande Analyse</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              We starten met een uitgebreide audit van je huidige data, concurrentie en marktpositie om een waterdichte
              strategie te smeden.
            </p>
          </div>

          {/* Card 2: Personal Contact */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_12px_40px_rgba(0,113,235,0.08)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-orange-50 text-[#F59E0B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-4">Persoonlijk Contact</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Directe lijnen met je vaste specialist. Geen ticket-systemen, maar snel contact via WhatsApp en heldere
              strategische updates.
            </p>
          </div>

          {/* Card 3: No Cure No Pay */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_12px_40px_rgba(0,113,235,0.08)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wallet className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] mb-4">Alleen bij resultaat</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Wij geloven in onze kwaliteit. Daarom werken wij met prestatiegaranties: geen resultaat betekent dat wij
              gratis doorwerken.
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Chat Icon Bubble */}
          <div className="w-14 h-14 bg-[#0071eb] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 animate-pulse">
            <MessageCircle className="w-7 h-7" />
          </div>

          <span className="text-[#0071eb] font-semibold text-sm mb-3">Jouw kans om te sparren met experts</span>

          <h3 className="text-2xl md:text-4xl font-extrabold text-[#111111] mb-6 tracking-tight">
            Ontgrendel het volledige potentieel van je marketing
          </h3>

          <p className="text-slate-500 text-[16px] md:text-lg mb-8 leading-relaxed max-w-2xl">
            Plan een vrijblijvend adviesgesprek in met een van onze strategen. We analyseren je huidige aanpak,
            identificeren groeikansen en geven je een concreet plan van aanpak.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071eb] text-white rounded-full font-bold text-[16px] hover:bg-[#0060c9] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 card-elevated"
          >
            Claim gratis strategiesessie
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
