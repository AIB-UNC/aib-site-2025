import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { CommunityTabs } from "@/components/community-tabs"

export default async function CommunityPage() {
  const supabase = await createClient()

  // Fetch all community data in parallel
  const [{ data: members }, { data: alumni }, { data: partners }] = await Promise.all([
    supabase.from("members").select("*").eq("is_active", true).order("name"),
    supabase.from("alumni").select("*").order("name"),
    supabase.from("partners").select("*").eq("is_active", true).order("company_name"),
  ])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#13294B] mb-4 text-balance">Our Community</h1>
            <p className="text-lg md:text-xl text-gray-600 text-pretty">
              Connect with current members, alumni mentors, and partner companies in the AIB network
            </p>
          </div>
        </div>
      </section>

      {/* Community Tabs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <Suspense fallback={<div className="text-center py-12">Loading community data...</div>}>
            <CommunityTabs members={members || []} alumni={alumni || []} partners={partners || []} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
