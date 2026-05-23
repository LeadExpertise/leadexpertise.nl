import { ShieldCheck, UserSquare, Calendar } from "lucide-react"

export function TrustPartnershipSection() {
  return (
    <section className="bg-white border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="flex flex-col">
            <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-sm mb-3 block">
              Vertrouwen & Samenwerking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight leading-tight">
              Partnerschap zonder kleine lettertjes
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center card-floating">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Jij houdt eigendom & controle</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Alles draait in jouw eigen accounts. Geen geheimen, geen 'black box'. Jij bent en blijft eigenaar
                    van je data en campagnes.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center card-floating">
                  <UserSquare className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Exclusiviteit & Vaste Specialisten</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Wij verkopen leads niet door aan je concurrent. Je krijgt exclusiviteit en vaste specialisten die
                    jouw markt door en door kennen.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center card-floating">
                  <Calendar className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Maandelijkse vrijheid</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    Geen wurgcontracten. Na de pilot zijn we maandelijks opzegbaar. Wij binden je met resultaat, niet
                    met juridische documenten.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Visual */}
          <div className="relative order-first lg:order-last">
            <div className="rounded-3xl overflow-hidden card-dramatic border border-slate-200 bg-white aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Handshake and Trust"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="bg-gradient-to-t from-slate-900/20 to-transparent absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
