"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "Sinds we samenwerken met LeadExpertise staat de telefoon roodgloeiend. We staan nu bovenaan in de regio voor 'dakdekker' en krijgen dagelijks nieuwe aanvragen binnen via de website zonder dat we daar dure advertenties voor hoeven in te zetten.",
    initials: "MdV",
    name: "Mark de Vries",
    role: "Eigenaar – Dakbeheer Rijnmond",
  },
  {
    quote:
      "Onze agenda zit structureel vol dankzij de lokale SEO-campagne. Patiënten in de buurt vinden ons nu direct als ze zoeken naar een tandarts of mondhygiënist. Dit is precies de stabiele groei die we zochten voor onze praktijk.",
    initials: "SJ",
    name: "Sarah Jansen",
    role: "Praktijkmanager – Tandzorg Centrum",
  },
  {
    quote:
      "Ik was sceptisch over SEO, maar de resultaten spreken voor zich. We hebben onze lead-inkoop via platforms als Werkspot volledig kunnen stoppen omdat we nu meer dan genoeg eigen, kwalitatieve leads genereren via onze eigen site.",
    initials: "RD",
    name: "Robbert van Dijk",
    role: "Eigenaar – Van Dijk Installatietechniek",
  },
  {
    quote:
      "Als makelaar is lokale zichtbaarheid alles. LeadExpertise heeft ervoor gezorgd dat we bij elke lokale zoekopdracht zichtbaar zijn, zelfs boven de grote landelijke partijen. Het aantal aanvragen voor bezichtigingen is verdubbeld.",
    initials: "PB",
    name: "Peter Bakker",
    role: "Makelaar – Bakker & Co Wonen",
  },
]

export function AISeoReviews() {
  return (
    <section className="bg-[#FAFAFA] border-y border-slate-200 py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#0071eb] font-semibold tracking-wide uppercase text-xs mb-3 block">
            Wat klanten zeggen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">
            Vertrouwd door lokale ondernemers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="bg-white p-8 rounded-2xl border border-slate-100 card-floating hover:border-[#0071eb]/30 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#F59E0B] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[18px] h-[18px] fill-current" />
                  ))}
                </div>
                <p className="text-[16px] leading-relaxed text-slate-600 italic mb-6">"{review.quote}"</p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
