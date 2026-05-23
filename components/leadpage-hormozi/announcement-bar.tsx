import { ArrowRight } from "lucide-react"

export function HormoziAnnouncementBar() {
  return (
    <div className="hidden md:block text-white bg-[#0071eb] px-4 py-2.5 relative z-50">
      <div className="container flex text-center mx-auto items-center justify-center">
        <a
          href="#scan"
          className="group flex flex-row items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity leading-normal"
        >
          <span className="uppercase text-[10px] font-bold text-[#0071eb] tracking-wide bg-white rounded-full px-2 py-0.5">
            Check
          </span>
          <span>Ontdek de groeikansen voor jouw regio</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}
