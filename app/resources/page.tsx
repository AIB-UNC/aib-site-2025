import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, LinkIcon, ExternalLink } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function ResourcesPage() {
  const supabase = await createClient()

  const { data: resources } = await supabase.from("resources").select("*").order("created_at", { ascending: false })

  const getResourceIcon = (type: string) => {
    const icons: Record<string, React.ReactNode> = {
      article: <FileText className="h-5 w-5" />,
      video: <Video className="h-5 w-5" />,
      document: <BookOpen className="h-5 w-5" />,
      link: <LinkIcon className="h-5 w-5" />,
      tool: <LinkIcon className="h-5 w-5" />,
    }
    return icons[type] || icons.link
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      career: "bg-blue-500",
      academic: "bg-green-500",
      wellness: "bg-purple-500",
      financial: "bg-orange-500",
      networking: "bg-pink-500",
    }
    return colors[category] || "bg-gray-500"
  }

  const groupedResources = resources?.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = []
      }
      acc[resource.category].push(resource)
      return acc
    },
    {} as Record<string, typeof resources>,
  )

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Resources</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Curated resources to support your journey from athletics to business. Everything you need to succeed in
              one place.
            </p>
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="py-20">
        <div className="container">
          {groupedResources && Object.keys(groupedResources).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedResources).map(([category, categoryResources]) => (
                <div key={category}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 capitalize">{category} Resources</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryResources.map((resource) => (
                      <Card key={resource.id} className="flex flex-col">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {getResourceIcon(resource.resource_type)}
                            </div>
                            <Badge className={getCategoryColor(resource.category)}>{resource.resource_type}</Badge>
                          </div>
                          <CardTitle className="text-xl">{resource.title}</CardTitle>
                          <CardDescription className="text-base">{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                          {(resource.url || resource.file_url) && (
                            <Button variant="outline" className="w-full bg-transparent" asChild>
                              <a href={resource.url || resource.file_url} target="_blank" rel="noopener noreferrer">
                                Access Resource <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Resources Available</h3>
              <p className="text-muted-foreground">Check back soon for new resources!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
