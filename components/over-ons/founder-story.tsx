export function FounderStory() {
  return (
    <section className="bg-white border-slate-200 border-b pt-20 px-6 pb-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="prose prose-lg prose-slate leading-relaxed text-slate-600">
            <p className="font-medium text-slate-900 text-xl mb-6 tracking-tight">
              "Waarom werkt het de ene keer wel, en de andere keer niet?"
            </p>
            
            <p className="mb-6">
              Toen ik net begon als junior Google Ads-marketeer, was dat de vraag die me &apos;s nachts wakker hield. 
              Ik behaalde wisselende resultaten voor mijn klanten, en eerlijk gezegd begreep ik niet waarom.
            </p>

            <p className="mb-6">
              Sommige campagnes liepen als een trein. Andere waren &quot;wel oké&quot;. En bij sommige gebeurde er... 
              helemaal niets. Nul.
            </p>

            <p className="mb-6">
              Geen idee waar het aan lag. En geloof me: dat is echt mega frustrerend. Niet alleen voor mij, 
              maar vooral voor de klant. Die ondernemer aan de andere kant van de tafel die zijn geld zag 
              verdampen zonder dat er nieuwe klanten tegenover stonden. Na twee maanden was de maat vaak vol 
              en vertrok de klant.
            </p>

            <div className="border-l-4 border-[#0071eb] pl-6 py-2 my-10 bg-blue-50/50 italic text-slate-800 font-medium">
              &quot;Ik wilde geen gokkast zijn voor mijn klanten, maar een investering.&quot;
            </div>

            <p className="mb-6">
              Uit pure frustratie besloot ik mij volledig vast te bijten in de materie. Ik wilde de code kraken. 
              Ik volgde elke cursus die ik kon vinden, keek honderden uren video&apos;s en luisterde naar elke 
              &quot;guru&quot; die beweerde het antwoord te hebben.
            </p>

            <p className="mb-6">
              Ik studeerde tot diep in de nacht en testte alles direct de volgende ochtend in de praktijk. 
              Wat werkte wel? Wat was onzin?
            </p>

            <p className="mb-6">
              Ik realiseerde me dat Google Ads op zichzelf niet het probleem was. Het probleem was dat ik 
              (en de meeste bureaus) ons blindstaarden op één klein stukje van de puzzel: de advertentie.
            </p>

            <p className="mb-6">
              Maar een advertentie werkt alleen als álle schakels in het proces kloppen. Als de landingspagina 
              niet overtuigt, converteert de bezoeker niet. Als de techniek hapert, meet je niks. Als de 
              opvolging traag is, koelt de lead af.
            </p>

            <p className="mb-6">
              Dat inzicht vormde de basis voor LeadExpertise. Wij doen geen &quot;losse campagnes&quot; meer. 
              Wij bouwen complete systemen waarbij marketing, techniek en sales naadloos op elkaar aansluiten. 
              Zodat resultaat geen toeval meer is, maar een logisch gevolg.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl text-slate-800 font-semibold" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                  Sam de Vries
                </span>
                <span className="text-sm font-medium text-slate-500 mt-1">Oprichter LeadExpertise</span>
              </div>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32 order-first lg:order-last lg:mb-0 mb-10 relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-slate-100 rounded-[24px] blur opacity-50 transition duration-1000 group-hover:duration-200" />
              <div 
                className="relative w-full aspect-[4/5] rounded-2xl bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('/images/whatsapp-20image-202025-07-18-20at-2017.jpeg')" 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
