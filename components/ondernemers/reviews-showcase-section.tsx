"use client"

import { useState } from "react"
import { Star, Heart, Share2, Play, X } from "lucide-react"

const YOUTUBE_VIDEO_ID = "e_7S5gGppUg"

const reviews = [
  {
    name: "Sophie Visser",
    initials: "S",
    bgColor: "#C2185B",
    reviewCount: "7 reviews",
    photoCount: "5 foto's",
    timeAgo: "4 maanden geleden",
    text: "<span class=\"bg-[#fef08a] px-1 py-0.5 rounded box-decoration-clone\">Direct rendement op onze investering.</span> Ik vind het geweldig hoe ze niet alleen onze campagnes beheren, maar ook echt meedenken met de strategie. Het voelt als een verlengstuk van ons team...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    likes: 6,
    isNew: false,
    rotation: "md:-rotate-1",
    translateY: "md:translate-y-4",
  },
  {
    name: "Mark Jansen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    reviewCount: "9 reviews",
    photoCount: "2 foto's",
    timeAgo: "2 weken geleden",
    text: "Sinds we de overstap hebben gemaakt, zien we een enorm verschil. <span class=\"bg-[#fef08a] px-1 py-0.5 rounded box-decoration-clone\">We hebben nu eindelijk grip op onze leadstroom en weten precies wat een nieuwe klant kost.</span> Het hele team is fantastisch en zeer deskundig...",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
    ],
    likes: 2,
    isNew: true,
    rotation: "md:-rotate-2",
    translateY: "md:translate-y-12",
    zIndex: "z-20",
  },
  {
    name: "Thomas de Vries",
    initials: "T",
    bgColor: "#E64A19",
    reviewCount: "3 reviews",
    photoCount: "2 foto's",
    timeAgo: "3 weken geleden",
    text: "De expertise bij LeadExpertise is van wereldklasse. <span class=\"bg-[#fef08a] px-1 py-0.5 rounded box-decoration-clone\">Mijn partners en ik zagen binnen een maand al 10x meer resultaat</span> dan bij ons vorige bureau. We hadden hoge verwachtingen, maar die zijn overtroffen...",
    likes: 12,
    isNew: true,
    rotation: "md:rotate-1",
    translateY: "md:translate-y-4",
  },
]

export function ReviewsShowcaseSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-black w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&fs=0`}
              title="Klant testimonial video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <section className="bg-[#fafafa] border-slate-200 border-b pt-20 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col z-10 relative items-center">
            {/* Headline Section */}
            <div className="text-center mb-12 max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
                Resultaten die voor zich spreken
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                Hoor direct van ondernemers die hun groei hebben versneld met onze strategieën.
              </p>
            </div>

            {/* Central Vertical Video */}
            <div
              className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl mb-8 z-20 group cursor-pointer bg-slate-900 ring-1 ring-black/5"
              onClick={() => setShowModal(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                alt="Video testimonial van tevreden klant over LeadExpertise resultaten"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#0071eb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>

            {/* Scattered Reviews Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 -mt-10 md:-mt-24 md:px-6 w-full pt-10 px-2 relative">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className={`bg-white p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transform ${review.rotation} ${review.translateY} ${review.zIndex || ""} hover:z-30 transition-transform duration-300 hover:scale-105 flex flex-col gap-3 h-fit`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      {review.avatar ? (
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
                          alt={review.name}
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold text-sm shadow-sm"
                          style={{ backgroundColor: review.bgColor }}
                        >
                          {review.initials}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-[10px] text-slate-500 font-normal">
                            {review.reviewCount} • {review.photoCount}
                          </p>
                          {review.isNew && (
                            <span className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                              NIEUW
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      className="w-5 h-5 opacity-60 grayscale"
                      alt="Google"
                    />
                  </div>

                  <div className="flex text-[#F59E0B] text-xs gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-slate-400 ml-2 text-[10px] font-normal mt-0.5">{review.timeAgo}</span>
                  </div>

                  <p
                    className="text-xs text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: review.text }}
                  />

                  {review.image && (
                    <div className="h-24 w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                      <img
                        src={review.image || "/placeholder.svg"}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        alt="Review photo"
                      />
                    </div>
                  )}

                  {review.images && (
                    <div className="grid grid-cols-2 gap-2">
                      {review.images.map((img, j) => (
                        <div key={j} className="h-20 bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                          <img
                            src={img || "/placeholder.svg"}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            alt="Review photo"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-1">
                    <button className="text-slate-400 hover:text-[#C2185B] transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] text-slate-400 font-normal">{review.likes}</span>
                    <button className="text-slate-400 hover:text-slate-600 ml-auto">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
