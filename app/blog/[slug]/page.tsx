import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: blog } = await supabase
    .from("blogs")
    .select("title, meta_description, keywords, published_at")
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (!blog) {
    return {
      title: "Blog niet gevonden",
    }
  }

  return {
    title: blog.title,
    description: blog.meta_description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.meta_description,
      type: "article",
      url: `https://leadexpertise.nl/blog/${slug}`,
      publishedTime: blog.published_at,
      authors: ["LeadExpertise"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.meta_description,
    },
    alternates: {
      canonical: `https://leadexpertise.nl/blog/${slug}`,
      languages: {
        "nl-NL": `https://leadexpertise.nl/blog/${slug}`,
      },
    },
  }
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

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (error || !blog) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://leadexpertise.nl/blog/${slug}#article`,
        headline: blog.title,
        description: blog.meta_description,
        datePublished: blog.published_at,
        dateModified: blog.updated_at || blog.published_at,
        author: {
          "@type": "Organization",
          name: "LeadExpertise",
          url: "https://leadexpertise.nl",
        },
        publisher: {
          "@type": "Organization",
          name: "LeadExpertise",
          url: "https://leadexpertise.nl",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://leadexpertise.nl/blog/${slug}`,
        },
        keywords: blog.keywords?.join(", "),
        inLanguage: "nl-NL",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://leadexpertise.nl" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://leadexpertise.nl/blog" },
          { "@type": "ListItem", position: 3, name: blog.title, item: `https://leadexpertise.nl/blog/${slug}` },
        ],
      },
    ],
  }

  // Get related blogs
  const { data: relatedBlogs } = await supabase
    .from("blogs")
    .select("id, title, slug, excerpt")
    .eq("status", "published")
    .neq("id", blog.id)
    .limit(3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-slate-900 pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>
            
            {/* Keywords */}
            {blog.keywords && blog.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.keywords.slice(0, 4).map((keyword: string) => (
                  <span
                    key={keyword}
                    className="text-xs font-medium text-[#0071eb] bg-blue-500/10 px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              {blog.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              {blog.published_at && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {formatDate(blog.published_at)}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {estimateReadTime(blog.content)} min leestijd
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-[#0071eb] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </article>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <p className="text-slate-600">
                  Vond je dit artikel nuttig? Deel het met anderen!
                </p>
                <button
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0071eb] transition-colors"
                  onClick={() => {
                    if (typeof navigator !== "undefined" && navigator.share) {
                      navigator.share({
                        title: blog.title,
                        url: `https://leadexpertise.nl/blog/${slug}`,
                      })
                    }
                  }}
                >
                  <Share2 className="w-5 h-5" />
                  Delen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="bg-slate-50 py-16 px-6">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Gerelateerde artikelen
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#0071eb] transition-colors mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Hulp nodig met je marketing?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Boek een gratis strategiesessie en ontdek hoe wij jouw bedrijf kunnen helpen groeien met Google & META Ads.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 bg-[#0071eb] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0062cc] transition-colors"
            >
              Plan een gesprek
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
