// Blog topics for automatic generation
// These are relevant keywords/topics for LeadExpertise's target audience

export const BLOG_TOPICS = [
  // Google Ads topics
  "Google Ads tips voor kleine ondernemers",
  "Google Ads kosten verlagen met slimme biedstrategieën",
  "Lokale Google Ads campagnes optimaliseren",
  "Google Ads Quality Score verbeteren",
  "Google Ads conversies verhogen zonder meer budget",
  "Zoekwoordenonderzoek voor Google Ads",
  "Google Ads remarketing effectief inzetten",
  "Google Ads voor dienstverleners",
  "Google Ads A/B testen beste practices",
  "Google Ads negatieve zoekwoorden gebruiken",
  
  // META Ads topics
  "Facebook Ads voor lokale bedrijven",
  "Instagram advertenties die converteren",
  "META Ads targeting voor dienstverleners",
  "Facebook Lead Ads optimaliseren",
  "META Ads budget verdelen tussen platforms",
  "Retargeting met META Ads",
  "META Ads creative best practices",
  "Facebook Ads funnels bouwen",
  "Instagram Stories advertenties tips",
  "META Ads lookalike audiences maken",
  
  // Leadgeneratie topics
  "Leadgeneratie strategieën voor MKB",
  "Meer leads genereren zonder cold calling",
  "Lead nurturing automatiseren",
  "Conversie optimalisatie voor landingspaginas",
  "Lead kwalificatie verbeteren",
  "CRM systeem kiezen voor leadgeneratie",
  "Email marketing voor leadgeneratie",
  "Webinars als leadgeneratie tool",
  "Case studies schrijven die leads opleveren",
  "Lead magnets die werken",
  
  // Branche specifiek
  "Online marketing voor fysiotherapeuten",
  "Meer klanten voor aannemers via online ads",
  "Tandartspraktijk groeien met Google Ads",
  "Advocatenkantoor marketing strategieën",
  "Accountants klanten werven online",
  "Makelaars leads genereren",
  "Personal trainers online marketing",
  "Schoonheidssalon adverteren op social media",
  "Installatiebedrijf meer opdrachten krijgen",
  "Autobedrijf online marketing tips",
  
  // Algemene marketing topics
  "ROI berekenen van online marketing",
  "Marketing budget bepalen voor MKB",
  "Online zichtbaarheid vergroten",
  "Klantenreviews verzamelen en gebruiken",
  "Concurrentieanalyse voor online marketing",
  "Seizoensgebonden marketing campagnes",
  "Marketing automatisering voor kleine bedrijven",
  "Klantreis optimaliseren",
  "Lokale SEO combineren met betaalde ads",
  "Marketing trends voor het komende jaar",
]

export function getRandomTopic(): string {
  return BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)]
}

export function getUnusedTopic(usedTopics: string[]): string {
  const availableTopics = BLOG_TOPICS.filter(t => !usedTopics.includes(t))
  if (availableTopics.length === 0) {
    // All topics used, start over with random
    return getRandomTopic()
  }
  return availableTopics[Math.floor(Math.random() * availableTopics.length)]
}
