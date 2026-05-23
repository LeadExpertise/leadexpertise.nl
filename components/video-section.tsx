"use client"

import { useState } from "react"
import { ChevronDown, Play } from "lucide-react"

const videos = [
  {
    youtubeId: "yr3FMvvS7jw",
    alt: "Video review van MAX over LeadExpertise Google Ads resultaten",
    name: "max",
    thumbnail: "https://img.youtube.com/vi/yr3FMvvS7jw/maxresdefault.jpg",
  },
  {
    youtubeId: "1t0A9vF-3_w",
    alt: "Video review van Job over leadgeneratie resultaten met LeadExpertise",
    name: "job",
    thumbnail: "https://img.youtube.com/vi/1t0A9vF-3_w/maxresdefault.jpg",
  },
  {
    youtubeId: "YMSpJOv6plg",
    alt: "Klant testimonial video over marketing automatisering door LeadExpertise",
    name: "other",
    thumbnail: "https://img.youtube.com/vi/YMSpJOv6plg/maxresdefault.jpg",
  },
]

export function VideoSection() {
  const [showMore, setShowMore] = useState(false)
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({})

  const handlePlay = (videoId: string) => {
    setPlayingVideos(prev => ({ ...prev, [videoId]: true }))
  }

  return (
    <div className="container mx-auto max-w-6xl mb-24 lg:mb-32 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Wat mensen zeggen
        </h1>
      </div>
      
      {/* Desktop: show all 3 videos with lazy loading */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            onClick={() => handlePlay(video.youtubeId)}
            onKeyDown={(e) => e.key === 'Enter' && handlePlay(video.youtubeId)}
            tabIndex={0}
            role="button"
            aria-label={`Speel video af: ${video.alt}`}
          >
            {playingVideos[video.youtubeId] ? (
              <div className="absolute inset-0 -top-14 -bottom-14">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?modestbranding=1&rel=0&showinfo=0&autoplay=1`}
                  title={video.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full scale-[1.15]"
                />
              </div>
            ) : (
              <>
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.alt}
                  loading="lazy"
                  width={360}
                  height={640}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#0071eb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: show only Job video with expand button */}
      <div className="md:hidden">
        {/* Job video (always visible on mobile) */}
        <div 
          className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group cursor-pointer"
          onClick={() => handlePlay("1t0A9vF-3_w")}
          onKeyDown={(e) => e.key === 'Enter' && handlePlay("1t0A9vF-3_w")}
          tabIndex={0}
          role="button"
          aria-label="Speel video review van Job af"
        >
          {playingVideos["1t0A9vF-3_w"] ? (
            <div className="absolute inset-0 -top-14 -bottom-14">
              <iframe
                src="https://www.youtube.com/embed/1t0A9vF-3_w?modestbranding=1&rel=0&showinfo=0&autoplay=1"
                title="Video review van Job over leadgeneratie resultaten met LeadExpertise"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full scale-[1.15]"
              />
            </div>
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/1t0A9vF-3_w/maxresdefault.jpg"
                alt="Video review van Job over leadgeneratie resultaten met LeadExpertise"
                loading="lazy"
                width={360}
                height={640}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-[#0071eb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* More testimonials button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 bg-white border border-slate-200 rounded-xl text-[15px] font-semibold text-slate-700 hover:bg-slate-50 transition-all"
        >
          <span>{showMore ? "Minder testimonials" : "Meer testimonials"}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </button>

        {/* Hidden videos that expand */}
        {showMore && (
          <div className="grid gap-4 mt-4">
            {videos.filter(v => v.name !== "job").map((video, i) => (
              <div
                key={i}
                className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group cursor-pointer"
                onClick={() => handlePlay(video.youtubeId)}
                onKeyDown={(e) => e.key === 'Enter' && handlePlay(video.youtubeId)}
                tabIndex={0}
                role="button"
                aria-label={`Speel video af: ${video.alt}`}
              >
                {playingVideos[video.youtubeId] ? (
                  <div className="absolute inset-0 -top-14 -bottom-14">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?modestbranding=1&rel=0&showinfo=0&autoplay=1`}
                      title={video.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full scale-[1.15]"
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.alt}
                      loading="lazy"
                      width={360}
                      height={640}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#0071eb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
