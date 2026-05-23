export function HormoziFooter() {
  return (
    <footer className="bg-white">
      <div className="border-slate-100 border-t pt-10 px-6 pb-12">
        <p className="text-[11px] leading-relaxed text-slate-400 text-center max-w-3xl mx-auto mb-8 font-medium">
          Deze site maakt geen deel uit van de Facebook-website of Facebook Inc. Bovendien wordt deze site op geen
          enkele manier onderschreven door Facebook. FACEBOOK is een handelsmerk van FACEBOOK, Inc.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 max-w-5xl mx-auto">
          <div className="text-center lg:text-left leading-relaxed">
            <span className="font-semibold text-slate-700">LeadExpertise B.V.</span> · Keizersgracht 123, 1015 CJ
            Amsterdam
            <br />
            KVK: 12345678 · E-mail: info@leadexpertise.nl · Tel: +31 20 123 4567
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-medium text-[#0071eb]">
            <a href="#" className="hover:text-[#0060c9] hover:underline transition-colors">
              Privacybeleid
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#0060c9] hover:underline transition-colors">
              Algemene Voorwaarden
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#0060c9] hover:underline transition-colors">
              Disclaimer
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#0060c9] hover:underline transition-colors">
              Restitutiebeleid
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
