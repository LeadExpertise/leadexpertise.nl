"use client"

import { CheckCircle, ChevronDown, Star } from "lucide-react"

const benefits = [
  {
    title: "Zichtbaar zijn bij je doelgroep",
    items: [
      "Wees zichtbaar op het moment dat mensen zoeken",
      "Je wordt gevonden op Google door de juiste doelgroep",
      "Je staat structureel bovenaan bij relevante zoekopdrachten",
    ],
  },
  {
    title: "Garantie dat marketing geld oplevert",
    items: [
      "Je ziet precies wat elke euro oplevert",
      "Marketing voelt als een logische investering",
      "Je hebt geen twijfel meer over \"werkt dit wel?\"",
    ],
  },
  {
    title: "Nieuwe klanten zonder extra tijd of gedoe",
    items: [
      "Je krijgt nieuwe aanvragen zonder zelf marketing te doen",
      "Geen avonden of weekenden meer bezig met Google Ads",
      "Geen technische rompslomp meer",
    ],
  },
  {
    title: "Een constante en voorspelbare instroom leads",
    items: [
      "Elke maand een stabiele flow van aanvragen",
      "Je ervaart geen pieken en dalen meer",
      "Je krijgt rust in je operatie en planning",
    ],
  },
  {
    title: "Hoge kwaliteit leads, minder rommel",
    items: [
      "Trek betere leads aan",
      "Je voert meer serieuze gesprekken",
      "Je conversie van aanvraag naar klant gaat omhoog",
    ],
  },
  {
    title: "Versterkt je lokale marktpositie",
    items: [
      "Je staat boven je concurrenten in Google",
      "Je houdt je marktaandeel vast of vergroot het",
      "Minder mentale belasting",
    ],
  },
  {
    title: "Je betaalt niet voor iets dat niet werkt",
    items: [
      "Het risico is eerlijk verdeeld",
      "Je durft stappen te zetten met vertrouwen",
      "Met vertrouwen opschalen",
    ],
  },
  {
    title: "Investeer in je marketing zonder angst",
    items: [
      "Plan groei in plaats van hopen",
      "Je durft vaste lasten te dragen",
      "Bouw een bedrijf in plaats van te overleven",
    ],
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-[#FAFAFA] border-slate-200 border-b pt-24 px-6 pb-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Content List */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="uppercase block text-sm font-semibold text-[#0071eb] tracking-widest mb-3">
                De Oplossing
              </span>
              <h2 className="text-[36px] md:text-[48px] leading-tight font-bold text-[#111111] tracking-tight mb-4">
                Een snel, simpel en stressvrij proces
              </h2>
              <p className="text-[18px] leading-relaxed text-slate-500 max-w-lg">
                Bekijk direct wat deze samenwerking voor jouw bedrijf betekent.
              </p>
            </div>

            <div className="flex flex-col">
              {benefits.map((benefit, i) => (
                <details key={i} className="group/item border-b border-slate-100 last:border-0">
                  <summary className="flex items-center justify-between gap-3 py-2 cursor-pointer select-none hover:bg-slate-50 transition-colors pr-2 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" style={{ color: "rgb(5, 150, 105)" }} />
                      <span className="text-[17px] group-hover/item:text-[#0071eb] transition-colors font-semibold text-[#111111]">
                        {benefit.title}
                      </span>
                    </div>
                    <ChevronDown className="w-4.5 h-4.5 text-slate-400 transform group-open/item:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="pl-[34px] pb-3 pt-1 text-slate-600 text-[15px] leading-relaxed">
                    <ul className="space-y-1">
                      {benefit.items.map((item, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/reviews"
                className="inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 bg-[#0071eb] border border-transparent rounded-full hover:bg-[#0060c9] card-floating hover:shadow-md hover:-translate-y-0.5"
              >
                Bekijk case studies
              </a>
              <a
                href="/reviews"
                className="inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-semibold text-[#111111] transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 card-elevated hover:shadow-md hover:-translate-y-0.5 gap-2"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Lees Google Reviews
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:sticky lg:top-8 order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden card-dramatic border border-slate-200 bg-white aspect-[4/5] relative group">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b259a00d-c7f5-4621-9fc0-8a293cfe6fbc_1600w.png"
                alt="LeadExpertise marketing dashboard - overzicht van campagneresultaten en leadgeneratie"
                className="bg-center w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={750}
                decoding="async"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* Testimonial Card */}
              <div className="bg-white/95 border-white/50 border rounded-xl p-6 absolute right-8 bottom-8 left-8 card-floating backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-[1.5px] border-white flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold text-slate-900 leading-tight">Johan van der Berg</div>
                    <div className="text-xs text-slate-500 font-medium mb-1.5">Eigenaar, VDB Groep</div>
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100/80 pt-3">
                  <p className="text-[14px] leading-relaxed text-slate-600 font-medium">
                    &quot;Sinds we gestart zijn stroomt de agenda vol. Eindelijk een systeem dat voorspelbaar nieuwe klanten oplevert zonder gedoe.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
