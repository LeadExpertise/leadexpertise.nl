import type { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Marketing Tips & Strategieën",
  description: "Praktische marketing tips, Google Ads strategieën en leadgeneratie inzichten voor lokale dienstverleners in Nederland.",
  openGraph: {
    title: "Blog | LeadExpertise Marketing Tips",
    description: "Praktische marketing tips, Google Ads strategieën en leadgeneratie inzichten voor lokale dienstverleners.",
    type: "website",
    url: "https://leadexpertise.nl/blog",
  },
  alternates: {
    canonical: "https://leadexpertise.nl/blog",
    languages: {
      "nl-NL": "https://leadexpertise.nl/blog",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://leadexpertise.nl/blog",
      name: "Blog | Marketing Tips & Strategieën",
      description: "Praktische marketing tips en strategieën voor lokale dienstverleners",
      url: "https://leadexpertise.nl/blog",
      isPartOf: { "@id": "https://leadexpertise.nl/#website" },
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://leadexpertise.nl/blog" },
      ],
    },
  ],
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, slug, excerpt, published_at, content, keywords")
    .eq("status", "published")
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching blogs:", error)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-900 pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Marketing Tips & Strategieën
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Praktische inzichten over Google Ads, META Ads en leadgeneratie voor lokale dienstverleners.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            {!blogs || blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">
                  Er zijn nog geen blogs gepubliceerd. Kom binnenkort terug!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/blog/${blog.slug}`} className="block">
                      <div className="p-6">
                        {/* Keywords/Tags */}
                        {blog.keywords && blog.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.keywords.slice(0, 2).map((keyword: string) => (
                              <span
                                key={keyword}
                                className="text-xs font-medium text-[#0071eb] bg-blue-50 px-2 py-1 rounded-full"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0071eb] transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {blog.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                          {blog.published_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(blog.published_at)}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {estimateReadTime(blog.content)} min
                          </span>
                        </div>
                        
                        {/* Read More */}
                        <span className="inline-flex items-center gap-2 text-[#0071eb] font-medium text-sm group-hover:gap-3 transition-all">
                          Lees meer
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Klaar om je marketing te verbeteren?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Boek een gratis strategiesessie en ontdek hoe wij jouw bedrijf kunnen helpen groeien met Google & META Ads.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 bg-[#0071eb] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0062cc] transition-colors"
            >
              Plan een gesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
