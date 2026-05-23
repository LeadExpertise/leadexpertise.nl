"use client"

import { Clock, Users, MessageSquare, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIAutomatiseringProblem() {
  const painPoints = [
    {
      icon: Clock,
      title: "Teveel handmatig werk",
      description: "Gegevens kopieren van e-mail naar CRM, facturen maken, afspraken inplannen. Het vreet energie.",
    },
    {
      icon: Users,
      title: "Personeelstekort remt groei",
      description: "Je wilt groeien, maar goed personeel is niet te vinden of onbetaalbaar voor simpele taken.",
    },
    {
      icon: MessageSquare,
      title: "Trage reactietijd naar klanten",
      description: "Leads wachten te lang op antwoord en gaan naar de concurrent. Je bent na 17:00 onbereikbaar.",
    },
  ]

  return (
    <section className="bg-[#fafafa] border-slate-200 border-b py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col order-2 lg:order-1">
            <span className="uppercase md:text-sm block text-xs font-semibold text-[#0071eb] tracking-widest mb-4">
              Het probleem
            </span>
            <h2 className="text-[32px] md:text-[48px] leading-tight font-extrabold text-[#111111] tracking-tight mb-6">
              Wordt jouw groei geremd door &apos;druk&apos; zijn?
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-slate-500 max-w-xl mb-10">
              Veel ondernemers besteden 40% van hun tijd aan taken die geen geld opleveren. Administratie, klantenservice, data overtypen. Dit remt je groei en kost klauwen met geld.
            </p>

            {/* Pain Points */}
            <ul className="mb-10 space-y-6">
              {painPoints.map((point, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mt-1 shadow-sm border border-red-100 text-red-500">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#111111] mb-1.5">{point.title}</h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#0071eb] hover:bg-[#0060c9] text-white rounded-full px-6 py-3.5 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a href="#contact">Stop met tijdverspilling</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative w-full h-full min-h-[400px] order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-6 relative h-full flex flex-col justify-center items-center">
              {/* Abstract Representation of Chaos vs Order */}
              <div className="relative z-10 w-full max-w-sm">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4 opacity-50 blur-[1px]">
                  <div className="h-2 w-1/3 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-full bg-slate-200 rounded" />
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4 opacity-70">
                  <div className="h-2 w-1/2 bg-slate-200 rounded mb-2" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded" />
                </div>

                {/* The "AI Solution" Card popping out */}
                <div className="bg-white rounded-xl p-6 border border-[#0071eb]/20 shadow-xl scale-110 relative">
                  <div className="absolute -top-3 -right-3 bg-[#0071eb] text-white p-2 rounded-full">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Taak Geautomatiseerd</div>
                      <div className="text-xs text-slate-500">Zojuist - Besparing: 15 min</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Dataverwerking</span>
                      <span className="font-bold text-emerald-600">100%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
