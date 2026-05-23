"use client"

import { Star, ExternalLink } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Mark de Jong",
    time: "2 weken geleden",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    text: "Sam en zijn team hebben ons dakdekkersbedrijf echt op de kaart gezet. Waar we eerst afhankelijk waren van dure leads via werkspot, krijgen we nu directe aanvragen via onze eigen site. Top service!",
    tags: ["Kwaliteit", "Responsiviteit"],
  },
  {
    name: "Sarah Visser",
    time: "1 maand geleden",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100",
    text: "Eindelijk een marketingpartij die doet wat ze beloven. Geen vage termen, maar gewoon leads. De dashboard omgeving is heel fijn, ik zie precies wat elke euro oplevert.",
    tags: ["Professionaliteit", "Waarde"],
  },
  {
    name: "Peter Bakker",
    time: "2 maanden geleden",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
    text: "Prettige samenwerking. Ze denken echt mee met je bedrijf. Onze agenda stroomt nu structureel vol, we hebben zelfs extra personeel moeten aannemen om de aanvragen aan te kunnen.",
    tags: ["Communicatie"],
  },
  {
    name: "Jan van der Meer",
    time: "3 maanden geleden",
    initial: "J",
    initialBg: "bg-blue-100 text-blue-600",
    text: "Zeer tevreden over de resultaten. Na slechte ervaringen met andere bureaus was ik sceptisch, maar LeadExpertise heeft het tegendeel bewezen. Transparant en eerlijk.",
    tags: ["Transparantie"],
  },
  {
    name: "Lisa Verhoeven",
    time: "4 maanden geleden",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100",
    text: "Top bedrijf! De communicatie verloopt vlekkeloos via WhatsApp en de maandelijkse updates zijn helder. Een echte aanrader voor MKB'ers.",
    tags: ["Service"],
  },
  {
    name: "Dennis K.",
    time: "5 maanden geleden",
    initial: "D",
    initialBg: "bg-purple-100 text-purple-600",
    text: "Investering meer dan waard. ROI is boven verwachting. Sam en team bedankt!",
    tags: ["Resultaat"],
  },
]

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export function GoogleReviews() {
  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#111111] tracking-tight mb-2">Wat klanten zeggen</h2>
            <p className="text-slate-500">Recente reviews geverifieerd via Google</p>
          </div>
          <a 
            href="https://share.google/RL60GGTwXjtXiWtvy" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#111111] transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 card-floating hover:-translate-y-0.5"
          >
            <GoogleIcon />
            <span className="ml-2">Bekijk alle reviews op Google</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 card-elevated h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`w-10 h-10 rounded-full ${review.initialBg} flex items-center justify-center font-bold text-sm`}>
                      {review.initial}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-slate-900 text-[15px]">{review.name}</div>
                    <div className="text-xs text-slate-500">{review.time}</div>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="flex text-[#F4B400] mb-3 text-[14px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-4 flex-grow">
                {`"${review.text}"`}
              </p>
              <div className="flex gap-2 mt-auto flex-wrap">
                {review.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {tag}
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
