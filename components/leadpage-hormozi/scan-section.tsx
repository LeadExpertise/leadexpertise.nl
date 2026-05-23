import { LazyBookingIframe } from "@/components/lazy-booking-iframe"

export function ScanSection() {
  return (
    <section className="bg-white pt-20 pb-20 relative" id="scan">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Centered Calendar Container - Lazy Loaded */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden">
            <LazyBookingIframe
              src="https://api.leadconnectorhq.com/widget/booking/7NKbqlRsivpkRPIIG2Ad"
              id="booking-frame-hormozi"
              title="Boek een strategiesessie"
              height="600px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
