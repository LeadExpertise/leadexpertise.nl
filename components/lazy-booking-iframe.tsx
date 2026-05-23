"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, Loader2 } from "lucide-react"

interface LazyBookingIframeProps {
  src: string
  title: string
  id?: string
  height?: string
}

export function LazyBookingIframe({ 
  src, 
  title, 
  id,
  height = "750px" 
}: LazyBookingIframeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
      style={{ minHeight: height }}
    >
      {!isVisible ? (
        <div 
          className="flex flex-col items-center justify-center gap-4 p-8 cursor-pointer hover:bg-slate-50 transition-colors"
          style={{ height }}
          onClick={() => setIsVisible(true)}
          onKeyDown={(e) => e.key === 'Enter' && setIsVisible(true)}
          tabIndex={0}
          role="button"
          aria-label="Laad booking kalender"
        >
          <div className="w-20 h-20 bg-[#0071eb]/10 rounded-full flex items-center justify-center">
            <Calendar className="w-10 h-10 text-[#0071eb]" />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-slate-900 mb-1">Klik om de agenda te laden</p>
            <p className="text-sm text-slate-500">Of scroll verder om automatisch te laden</p>
          </div>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white"
              style={{ height }}
            >
              <Loader2 className="w-10 h-10 text-[#0071eb] animate-spin" />
              <p className="text-sm text-slate-500">Agenda wordt geladen...</p>
            </div>
          )}
          <iframe
            src={src}
            style={{ 
              width: "100%", 
              height, 
              border: "none",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out"
            }}
            id={id}
            title={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  )
}
