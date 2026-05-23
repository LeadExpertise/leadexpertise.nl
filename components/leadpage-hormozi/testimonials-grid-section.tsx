"use client"

import { useState } from "react"
import { Play, X, Star, ArrowRight } from "lucide-react"

export function TestimonialsGridSection() {
  const [showModal, setShowModal] = useState(false)

  const testimonials = [
    {
      name: "Thomas Verhoeven",
      role: "Tandarts & Eigenaar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
      quote:
        "Binnen 2 maanden zat onze agenda voor implantologie helemaal vol. Het systeem werkt echt autonoom, ik hoef er niet naar om te kijken.",
      hasVideo: true,
      videoThumbnail:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
      type: "youtube",
    },
    {
      name: "Eva de Jong",
      role: "Huidkliniek Zuid",
      initial: "E",
      quote:
        "Eindelijk een partij die snapt dat we geen tijd hebben om leads na te bellen die niet opnemen. De kwaliteit is super en de dashboard app is heel overzichtelijk. Wij zijn enorm gegroeid.",
      hasVideo: false,
      type: "google",
    },
    {
      name: "Sophie van Dam",
      role: "Fysiotherapie Centrum",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&h=100&q=80",
      quote:
        "Ik dacht altijd dat online marketing niets voor fysio was, maar LeadExpertise heeft het tegendeel bewezen. We hebben nu een wachtlijst.",
      hasVideo: true,
      videoThumbnail:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      type: "youtube",
    },
    {
      name: "Peter Jansen",
      role: "Ortho Praktijk",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&h=100&q=80",
      quote:
        "Het contact is persoonlijk en snel. Ze denken echt mee over de bedrijfsvoering, niet alleen over ads. Een verademing in deze markt.",
      hasVideo: true,
      videoThumbnail:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      type: "linkedin",
    },
    {
      name: "Kliniek Veldhoven",
      role: "Cosmetisch Arts",
      initial: "K",
      quote:
        "Wat ik vooral fijn vind is de exclusiviteit. Ik weet zeker dat de leads die ik krijg niet ook bij mijn concurrent liggen. Dat geeft een veilige basis voor groei.",
      hasVideo: false,
      type: "google",
    },
    {
      name: "Dr. A. El Amrani",
      role: "Huisartsenpost",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80",
      quote:
        "Efficientie was ons doel. LeadExpertise heeft onze administratieve lasten verlaagd door slimme automatisering.",
      hasVideo: true,
      videoThumbnail:
        "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
      type: "youtube",
    },
  ]

  return (
    <>
      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-black w-full max-w-4xl aspect-video rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mb-4 text-[#0071eb] mx-auto" />
                <p>Video wordt geladen...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#fafafa] border-slate-200 border-t pt-24 pb-24">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="md:text-5xl text-3xl font-bold text-slate-900 tracking-tight mb-6">
              De favoriete groeipartner van praktijkhouders
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Vertrouwd door ambitieuze praktijken. Onze partners waarderen LeadExpertise om de transparantie, resultaten
              en de rust die het geeft. Zie wat ze zeggen.
            </p>
          </div>

          {/* Masonry Grid Wrapper with Progressive Reveal */}
          <div className="relative max-h-[640px] overflow-hidden group transition-all duration-500">
            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="break-inside-avoid bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-50"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0071eb] flex items-center justify-center font-semibold text-sm ring-2 ring-slate-50">
                          {testimonial.initial}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                    {testimonial.type === "google" ? (
                      <div className="flex text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    ) : (
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-slate-700 text-sm mb-4 leading-relaxed">{`"${testimonial.quote}"`}</p>
                  {testimonial.hasVideo && testimonial.videoThumbnail && (
                    <div
                      className="relative rounded-xl overflow-hidden aspect-video group cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      <img
                        src={testimonial.videoThumbnail || "/placeholder.svg"}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0071eb] shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      </div>
                    </div>
                  )}
                  {!testimonial.hasVideo && testimonial.type === "google" && (
                    <div className="mt-4 flex items-center gap-1.5 opacity-60">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                        Google Review
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Gradient Overlay & CTA */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/90 to-transparent flex items-end justify-center pb-8">
              <a
                href="/reviews"
                className="group flex items-center gap-2.5 bg-white text-slate-900 px-6 py-3 rounded-full border border-slate-200 shadow-xl hover:shadow-2xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="font-semibold text-sm">Bekijk meer succesverhalen</span>
                <ArrowRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0071eb] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
