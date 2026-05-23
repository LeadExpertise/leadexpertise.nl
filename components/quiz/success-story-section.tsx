import Image from "next/image"
import { Award } from "lucide-react"

export function QuizSuccessStorySection() {
  return (
    <section className="bg-white py-24 px-6 border-b border-slate-100">
      <div className="container max-w-5xl mx-auto">
        {/* Top Part: Success Story CTA */}
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-yellow-50 flex items-center justify-center mb-8 shadow-sm border border-yellow-100">
            <Award className="w-10 h-10 text-[#F59E0B]" />
          </div>

          {/* Headlines */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6">
            Word ons volgende succesverhaal
          </h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl">
            Door deel te nemen aan ons programma krijg je een gedetailleerde analyse van je huidige marketing en ontdek
            je direct waar je kansen liggen voor explosieve groei.
          </p>

          {/* Button */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071eb] text-white rounded-full font-bold text-[16px] hover:bg-[#0060c9] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-blue-500/20 mb-16"
          >
            Claim gratis strategiesessie
          </a>

          {/* Logos */}
          <div className="flex flex-col items-center w-full">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Deze bedrijven vertrouwen ons:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/logos/meta.svg" alt="Meta" width={60} height={24} />
              <Image src="/logos/google.svg" alt="Google" width={70} height={24} />
              <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={24} />
              <Image src="/logos/stripe.svg" alt="Stripe" width={60} height={24} />
              <Image src="/logos/monday.svg" alt="Monday" width={80} height={24} />
            </div>
          </div>
        </div>

        {/* Bottom Part: About / Authority */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#0071eb] font-bold tracking-wide uppercase text-xs md:text-sm mb-3">
            Over LeadExpertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight max-w-3xl">
            Wij zijn de #1 groeipartner voor dienstverleners in Nederland
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#0071eb]/10 mix-blend-multiply" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col text-left">
            <h3 className="text-2xl font-bold text-[#111111] mb-6">Gedreven door data, gericht op resultaat</h3>

            <div className="space-y-6 text-slate-600 text-[16px] leading-relaxed">
              <p>
                Bij LeadExpertise zijn we gespecialiseerd in het leveren van marketingstrategieën op maat, specifiek
                ontwikkeld voor dienstverleners die willen schalen in Nederland en België.
              </p>
              <p>
                Ons team van ervaren experts combineert diepgaande marktkennis met de nieuwste AI-technologieën om je
                online zichtbaarheid te vergroten, kwalitatieve leads te genereren en je merk te versterken.
              </p>
              <p>
                Wij geloven in transparantie en innovatie. Daarom werken we nauw met je samen als partner, niet als
                externe leverancier, om meetbare resultaten en duurzame groei te realiseren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
