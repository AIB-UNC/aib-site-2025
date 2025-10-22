import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, TrendingUp, Award, Heart } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AboutPage() {
  const supabase = await createClient()

  const { data: leadership } = await supabase
    .from("leadership")
    .select("*")
    .order("order_position", { ascending: true })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Athletes in Business</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We are a student-led organization at the University of North Carolina at Chapel Hill dedicated to
              empowering student-athletes to excel in business and beyond.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <img
              src="/gallery/AIB_group_photo.jpeg"
              alt="Athletes in Business at Carolina — group photo"
              className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl border border-[#E3E8EF] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px]">
              <Image
                src="/student-athletes-collaborating-on-business-project.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Athletes in Business at Carolina exists to bridge the gap between athletics and business by providing
                student-athletes with the resources, connections, and support they need to succeed in their
                post-athletic careers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that the skills developed through athletics—discipline, teamwork, resilience, and
                leadership—are invaluable in the business world. Our mission is to help student-athletes recognize and
                leverage these skills as they transition into successful business careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Five Pillars</h2>
            <p className="text-lg text-muted-foreground text-pretty">The foundation of everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Networking</CardTitle>
                <CardDescription className="text-base">
                  Building meaningful connections with alumni, industry professionals, and peers to create lasting
                  professional relationships.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Career Development</CardTitle>
                <CardDescription className="text-base">
                  Providing resources, workshops, and guidance to help student-athletes navigate their career paths and
                  achieve their professional goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Leadership</CardTitle>
                <CardDescription className="text-base">
                  Developing leadership skills that translate from the field to the boardroom, empowering athletes to
                  lead with confidence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Entrepreneurship</CardTitle>
                <CardDescription className="text-base">
                  Fostering an entrepreneurial mindset and providing support for student-athletes interested in starting
                  their own ventures.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Community</CardTitle>
                <CardDescription className="text-base">
                  Creating a supportive community where student-athletes can share experiences, challenges, and
                  successes in their business journeys.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Mentorship</CardTitle>
                <CardDescription className="text-base">
                  Connecting current student-athletes with successful alumni mentors who understand the unique
                  challenges of balancing athletics and career preparation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {leadership && leadership.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Meet the dedicated student-athletes leading our organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((leader) => (
                <Card key={leader.id}>
                  <CardHeader>
                    <div className="flex gap-6">
                      <div className="relative h-32 w-32 flex-shrink-0">
                        <Image
                          src={leader.image_url || "/placeholder.svg?height=128&width=128&query=professional headshot"}
                          alt={leader.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{leader.name}</CardTitle>
                        <CardDescription className="text-primary font-medium mb-3">{leader.position}</CardDescription>
                        <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline mt-2 inline-block"
                          >
                            Connect on LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="opacity-90">Striving for the highest standards in everything we do</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="opacity-90">Acting with honesty and strong moral principles</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="opacity-90">Working together to achieve common goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
