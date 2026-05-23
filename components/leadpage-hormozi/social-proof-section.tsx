"use client"

import { useState } from "react"
import { Play, X, Heart, Share2, Star } from "lucide-react"

const YOUTUBE_VIDEO_ID = "e_7S5gGppUg"

export function SocialProofSection() {
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

      <section className="bg-white border-slate-100 border-t pt-20 pb-20" id="resultaten">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="md:text-5xl text-4xl font-bold text-slate-900 tracking-tight text-center mb-12">
            Wat mensen zeggen
          </h2>

          <div className="flex flex-col z-10 relative items-center">
            {/* Central Vertical Video */}
            <div
              className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl mb-8 z-20 group cursor-pointer bg-slate-900 ring-1 ring-black/5"
              onClick={() => setShowModal(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                alt="Video testimonial van tevreden klant over LeadExpertise Google Ads resultaten"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
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
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transform md:-rotate-1 hover:z-30 transition-transform duration-300 hover:scale-105 flex flex-col gap-3 h-fit md:translate-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C2185B] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      S
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Sanne de Vries</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{"7 reviews • 5 foto's"}</p>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    className="w-5 h-5 opacity-60 grayscale"
                    alt="Google"
                  />
                </div>
                <div className="flex text-[#F59E0B] text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-slate-400 ml-2 text-[10px] font-medium mt-0.5">4 maanden geleden</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <span className="bg-[#fef08a] px-1 py-0.5 rounded">Vrijwel direct rendement vanaf de start.</span> Ik
                  vind het geweldig hoe ze onze praktijk ontzorgen, maar ook persoonlijk betrokken blijven! Het team kent
                  ons echt...
                </p>
                <div className="h-24 w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
                    alt="Praktijk kantoor met moderne inrichting - klantresultaat LeadExpertise"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-1">
                  <button className="text-slate-400 hover:text-[#C2185B] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">6</span>
                  <button className="text-slate-400 hover:text-slate-600 ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transform md:-rotate-2 md:translate-y-12 z-20 hover:z-30 transition-transform duration-300 hover:scale-105 flex flex-col gap-3 h-fit">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
                      alt="Mark"
                      className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Mark van den Berg</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-slate-500 font-medium">{"9 reviews • 2 foto's"}</p>
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                          NIEUW
                        </span>
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-slate-400 ml-2 text-[10px] font-medium mt-0.5">2 weken geleden</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Sinds we live zijn gegaan,{" "}
                  <span className="bg-[#fef08a] px-1 py-0.5 rounded">
                    heb ik eindelijk een helder inzicht in de groeicijfers van mijn tandartspraktijk.
                  </span>{" "}
                  Het hele team is fantastisch en denkt proactief mee...
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                      alt="Team vergadering bij tandartspraktijk - groeiresultaten met LeadExpertise"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-20 bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80"
                      alt="Professioneel marketing dashboard voor praktijkhouders"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-1">
                  <button className="text-slate-400 hover:text-[#C2185B] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">2</span>
                  <button className="text-slate-400 hover:text-slate-600 ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transform md:rotate-1 hover:z-30 transition-transform duration-300 hover:scale-105 flex flex-col gap-3 h-fit md:translate-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E64A19] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      L
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Lisa Janssen</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-slate-500 font-medium">{"3 reviews • 2 foto's"}</p>
                        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                          NIEUW
                        </span>
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-slate-400 ml-2 text-[10px] font-medium mt-0.5">3 weken geleden</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Het team van LeadExpertise is wereldklasse.{" "}
                  <span className="bg-[#fef08a] px-1 py-0.5 rounded">
                    Mijn partners en ik waren het erover eens: dit is minstens 10x waardevoller
                  </span>{" "}
                  dan we vooraf dachten, en onze verwachtingen waren al hoog...
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-1">
                  <button className="text-slate-400 hover:text-[#C2185B] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">12</span>
                  <button className="text-slate-400 hover:text-slate-600 ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
