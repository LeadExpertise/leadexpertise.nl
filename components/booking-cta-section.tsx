"use client"

import { Check } from "lucide-react"
import { LazyBookingIframe } from "./lazy-booking-iframe"

export function BookingCtaSection() {
  return (
    <section className="bg-white pt-16 pb-24 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* CTA Section with Booking */}
        <div className="md:p-10 overflow-hidden card-dramatic isolate group bg-[#111111] rounded-3xl p-6 relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#0071eb] rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-emerald-500 rounded-full blur-[80px] opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-700" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Beperkte plekken per regio
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Plan je gratis strategiegesprek
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Geen verkooppraatje, maar een eerlijk advies over jouw groeikansen. Wij nemen het risico, jij plukt de vruchten.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "Maandelijks opzegbaar" },
                { label: "Exclusiviteit per regio" },
                { label: "Resultaatgarantie" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90"
                >
                  <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* GoHighLevel Booking Embed - Lazy Loaded */}
            <LazyBookingIframe
              src="https://api.leadconnectorhq.com/widget/booking/7NKbqlRsivpkRPIIG2Ad"
              id="booking-cta-iframe"
              title="Boek een strategiesessie"
              height="750px"
            />

            {/* Bottom Trust Text */}
            <p className="text-center text-sm text-slate-500 mt-6">
              100% vrijblijvend. Binnen 24 uur reactie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
