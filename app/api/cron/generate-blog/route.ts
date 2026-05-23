import { generateText, Output } from "ai"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"
import { getUnusedTopic } from "@/lib/blog-topics"

// Vercel Cron Job - runs daily at 8:00 AM UTC
export const maxDuration = 60

const BlogSchema = z.object({
  title: z.string().describe("SEO-optimized blog title in Dutch, max 60 characters"),
  slug: z.string().describe("URL-friendly slug derived from title, lowercase with hyphens"),
  excerpt: z.string().describe("Compelling excerpt in Dutch, 150-160 characters for meta description"),
  meta_description: z.string().describe("SEO meta description in Dutch, 150-160 characters"),
  keywords: z.array(z.string()).describe("5-8 relevant SEO keywords in Dutch"),
  content: z.string().describe("Full blog article in Dutch, 800-1200 words, formatted in Markdown with headings, paragraphs, and bullet points where appropriate"),
})

export async function GET(request: Request) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 })
  }

  try {
    const supabase = await createClient()

    // Get recently used topics to avoid repetition
    const { data: recentBlogs } = await supabase
      .from("blogs")
      .select("title")
      .order("created_at", { ascending: false })
      .limit(20)

    const usedTopics = recentBlogs?.map(b => b.title) || []
    const topic = getUnusedTopic(usedTopics)

    // Generate blog content using AI
    const { experimental_output: blog } = await generateText({
      model: "openai/gpt-4o-mini",
      output: Output.object({ schema: BlogSchema }),
      prompt: `Je bent een expert content writer voor LeadExpertise, een Nederlands marketing bureau gespecialiseerd in Google Ads en META Ads voor lokale dienstverleners (fysiotherapeuten, tandartsen, aannemers, etc.).

Schrijf een uitgebreide, waardevolle blog over het volgende onderwerp: "${topic}"

Belangrijke richtlijnen:
- Schrijf in het Nederlands, professioneel maar toegankelijk
- Focus op praktische, actionable tips
- Gebruik voorbeelden relevant voor lokale dienstverleners in Nederland
- Vermijd jargon, leg technische termen uit
- Eindig met een subtiele call-to-action richting LeadExpertise (zonder te pushy te zijn)
- Structureer met duidelijke kopjes (H2, H3) en korte paragrafen
- Voeg waar relevant statistieken of cijfers toe
- De content moet SEO-geoptimaliseerd zijn voor het Nederlandse publiek

Het artikel moet informatief en waardevol zijn, zodat lezers er echt iets aan hebben.`,
    })

    if (!blog) {
      throw new Error("Failed to generate blog content")
    }

    // Check if slug already exists
    const { data: existingBlog } = await supabase
      .from("blogs")
      .select("slug")
      .eq("slug", blog.slug)
      .single()

    // If slug exists, append timestamp
    const finalSlug = existingBlog 
      ? `${blog.slug}-${Date.now()}`
      : blog.slug

    // Insert blog into database as published
    const { data: insertedBlog, error } = await supabase
      .from("blogs")
      .insert({
        title: blog.title,
        slug: finalSlug,
        content: blog.content,
        excerpt: blog.excerpt,
        meta_description: blog.meta_description,
        keywords: blog.keywords,
        status: "published",
        published_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      throw new Error(`Failed to save blog: ${error.message}`)
    }

    return Response.json({
      success: true,
      message: "Blog generated and published successfully",
      blog: {
        id: insertedBlog.id,
        title: insertedBlog.title,
        slug: insertedBlog.slug,
      },
    })
  } catch (error) {
    console.error("Blog generation error:", error)
    return Response.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
