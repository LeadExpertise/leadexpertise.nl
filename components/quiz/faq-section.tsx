"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Star, ArrowRight } from "lucide-react"

const faqItems = [
  {
    question: "Welke diensten biedt LeadExpertise aan?",
    answer:
      "Wij zijn gespecialiseerd in Google Ads, Meta (Facebook & Instagram) Ads, en het bouwen van high-converting landingspagina's. Ons doel is simpel: meetbare groei realiseren voor dienstverleners.",
  },
  {
    question: "Hoe werkt de tevredenheidsgarantie?",
    answer:
      "Wij geloven in onze resultaten. Halen we de afgesproken doelen niet binnen de eerste 30 dagen? Dan werken wij kosteloos door totdat het resultaat er is. Geen kleine lettertjes, gewoon eerlijk zaken doen.",
  },
  {
    question: "Wat zijn de kosten om te starten?",
    answer:
      "Dit hangt af van je doelstellingen en budget. We hebben pakketten voor starters en voor bedrijven die willen opschalen. Tijdens de strategiesessie geven we je direct een helder kostenplaatje.",
  },
  {
    question: "Hoe lang duurt het voordat ik resultaat zie?",
    answer:
      "Met betaalde advertenties zie je vaak al binnen enkele dagen de eerste leads binnenkomen. Na de eerste maand optimaliseren we de campagnes voor maximale winstgevendheid.",
  },
]

export function QuizFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 px-6 border-b border-slate-100">
      <div className="container max-w-4xl mx-auto">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs md:text-sm mb-3 block">
            Hulp nodig?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Veelgestelde vragen
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4 mb-24">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-slate-100 rounded-xl bg-slate-50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-5 cursor-pointer hover:bg-slate-100 transition-colors text-left"
              >
                <span className="font-semibold text-[#111111] text-[16px]">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-500 text-[15px] leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="flex flex-col items-center text-center">
          {/* Social Proof Avatars */}
          <div className="flex items-center justify-center -space-x-2 mb-4">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow-sm object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow-sm object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
              alt="User"
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow-sm object-cover"
            />
          </div>

          {/* Stars */}
          <div className="flex gap-1 text-[#F59E0B] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-xs font-semibold text-slate-400 mb-8">4.8 uit 200+ reviews</p>

          {/* Headline */}
          <span className="text-[#0071eb] font-bold tracking-wide text-sm mb-4 block">30 Dagen Groeiprogramma</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-8 leading-[1.1] max-w-2xl">
            10+ kwalitatieve leads per week - of wij werken gratis!
          </h2>

          {/* Button */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071eb] text-white rounded-full font-bold text-[16px] hover:bg-[#0060c9] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-blue-500/20 mb-16"
          >
            Claim gratis strategiesessie
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Logos */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Deze bedrijven vertrouwen ons:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image src="/logos/meta.svg" alt="Meta" width={60} height={24} className="grayscale" />
              <Image src="/logos/google.svg" alt="Google" width={70} height={24} className="grayscale" />
              <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={24} className="grayscale" />
              <Image src="/logos/stripe.svg" alt="Stripe" width={60} height={24} className="grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
