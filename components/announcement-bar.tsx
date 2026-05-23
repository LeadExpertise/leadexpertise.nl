"use client"

import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="hidden md:block text-white bg-[#0071eb] px-4 py-3 relative z-50">
      <div className="container flex text-center mx-auto items-center justify-center">
        <a
          href="#"
          className="group flex flex-col md:flex-row items-center gap-2 text-[17px] font-normal hover:opacity-90 transition-opacity leading-normal"
        >
          <div className="flex items-center gap-2">
            <span className="uppercase text-xs font-bold text-[#0071eb] tracking-wide bg-white rounded-full px-2.5 py-0.5 card-elevated">
              New
            </span>
            <span>Ontdek wat je kunt verdienen met advertenties.</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-white/100">
              Doe de quiz
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </a>
      </div>
    </div>
  )
}
