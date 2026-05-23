import { Star } from "lucide-react"

export function ReviewsHero() {
  return (
    <header className="bg-slate-50 border-b border-slate-200 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <span className="uppercase text-sm font-semibold text-[#0071eb] tracking-widest mb-4 block">
          Succesverhalen
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#111111] tracking-tight mb-6 text-balance">
          Resultaten zeggen meer dan <br className="hidden md:block" /> duizend woorden
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Ontdek hoe wij lokale ondernemers helpen groeien. Geen loze beloftes, maar harde cijfers en tevreden klanten die hun ervaring delen.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white px-4 py-2 rounded-full border border-slate-200 flex items-center gap-3 shadow-sm">
            <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex text-[#F4B400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-slate-900 text-sm">4.9/5 op Google</span>
          </div>
        </div>
      </div>
    </header>
  )
}
