import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Handshake,
  Linkedin,
  Users,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Network,
  Sparkles,
  ArrowRight,
  Mail,
  Instagram,
} from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { generateBio } from "@/lib/generate-bio"

export default async function HomePage() {
  const supabase = await createClient()
  const { data: leadershipData } = await supabase
    .from("leadership")
    .select("*")
    .eq("is_active", true)
    .order("pillar", { ascending: true })
    .order("order_index", { ascending: true })
    .order("name", { ascending: true })

  const leadershipTeam =
    leadershipData?.map((member) => ({
      name: member.name || "Unknown",
      title: member.position_title || "Leader",
      pillar: member.pillar || "Leadership",
      sport:
        `${member.grad_year || ""} · ${member.major || ""} · ${member.sport || ""}`
          .trim()
          .replace(/^·\s*|\s*·$/g, "")
          .replace(/\s*·\s*·\s*/g, " · ") || "Student-Athlete",
      bio: generateBio(member),
      photo: member.headshot_url || "/placeholder.svg",
      linkedin: member.linkedin_url || "#",
      objectPosition: member.object_position || "50% 42%",
    })) || []

  const stats = [
    { label: "Active Members", value: "58", icon: Users },
    { label: "Events Annually", value: "10+", icon: Calendar },
    { label: "Alumni Connections", value: "50+", icon: Network },
    { label: "Leadership Pillars", value: "5", icon: Award },
  ]

  const valueProp = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Built around athletic calendars—meetings and events that work with your practice and travel schedule.",
    },
    {
      icon: Network,
      title: "Alumni Network",
      description: "Connect with former Tar Heel athletes thriving in business, finance, and entrepreneurship.",
    },
    {
      icon: TrendingUp,
      title: "Career Development",
      description: "Workshops, panels, mentorship, and hands-on experience to accelerate your professional growth.",
    },
    {
      icon: Sparkles,
      title: "Exclusive Community",
      description: "Fellow student-athletes who understand your journey and share your ambition.",
    },
  ]

  const offerings = [
    {
      icon: Users,
      title: "Networking Events",
      description: "6 major events per year connecting you with alumni, recruiters, and business leaders.",
      badge: "6 Events/Year",
    },
    {
      icon: BookOpen,
      title: "Skill Workshops",
      description: "Resume building, LinkedIn optimization, interview prep, and professional communication.",
      badge: "Hands-On",
    },
    {
      icon: Handshake,
      title: "Mentorship Program",
      description: "1-on-1 guidance from alumni who've successfully transitioned from athletics to business.",
      badge: "1:1 Matching",
    },
    {
      icon: Award,
      title: "Leadership Roles",
      description: "Real responsibility in our 5-pillar structure—build your resume while building AIB.",
      badge: "5 Pillars",
    },
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      description: "Exclusive access to internships and job opportunities from our partner companies.",
      badge: "Exclusive",
    },
    {
      icon: Target,
      title: "Resource Library",
      description: "Resume templates, industry guides, alumni directory, and career development materials.",
      badge: "Always Available",
    },
  ]

  const upcomingEvents = [
    {
      date: "Nov 15",
      time: "6:00 PM",
      title: "Finance Night",
      description: "Panel discussion with alumni working in investment banking, private equity, and venture capital.",
      type: "Panel",
    },
    {
      date: "Nov 22",
      time: "5:30 PM",
      title: "Resume Workshop",
      description: "Hands-on session to build and refine your resume with feedback from career coaches.",
      type: "Workshop",
    },
    {
      date: "Dec 3",
      time: "7:00 PM",
      title: "Networking Reception",
      description: "Connect with 20+ alumni mentors and business leaders in an informal setting.",
      type: "Networking",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Stadium background image */}
        <div className="absolute inset-0 z-0">
          <img src="/kenan-stadium.webp" alt="Kenan Stadium aerial view" className="w-full h-full object-cover" />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#13294B]/85 via-[#2A5D8F]/80 to-[#7BAFD4]/75" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 z-[1]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container relative z-10 text-center py-24 md:py-32 px-4 md:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-top-4 duration-700 font-serif">
            <Sparkles className="h-4 w-4 text-[#7BAFD4]" />
            <span className="text-white/90 font-medium font-serif text-base">Athletes in Business at Carolina</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto tracking-tight text-balance animate-in fade-in slide-in-from-top-6 duration-700 delay-150 font-serif">
            Building Tomorrow&#39;s Athlete-Executives
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-top-8 duration-700 delay-300 font-serif">
            Building careers in business, finance, and entrepreneurship through networking, mentorship, and professional
            development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-top-10 duration-700 delay-500">
            <Button
              size="lg"
              className="bg-white text-[#13294B] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-serif"
              asChild
            >
              <Link href="/get-involved">
                Join AIB
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white/10 bg-transparent rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-all duration-300 font-serif"
              asChild
            >
              <Link href="/calendar">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 hover:bg-[#7BAFD4]/20 font-serif font-bold text-base">
              Why Choose AIB
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#13294B] mb-4 text-balance font-serif">
              Built for Student-Athletes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty font-serif">
              We understand your unique challenges and opportunities. AIB is designed specifically for athletes
              transitioning to business careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProp.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="group border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 rounded-none"
                >
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#7BAFD4] to-[#5A9FC4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#13294B] font-serif">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed px-0 py-0 font-serif">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 hover:bg-[#7BAFD4]/20 font-serif text-base">
              What You'll Gain
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#13294B] mb-4 text-balance font-serif">
              Comprehensive Career Support
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-pretty font-serif text-xl">
              From networking to mentorship to hands-on leadership experience—everything you need to launch your
              business career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7BAFD4]/10 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7BAFD4] to-[#5A9FC4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 text-xs">
                        {offering.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#13294B]">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#7BAFD4] text-[#7BAFD4] hover:bg-[#7BAFD4] hover:text-white rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/resources">
                Explore All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 hover:bg-[#7BAFD4]/20">
              What's Next
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#13294B] mb-4 text-balance">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Join us for networking, workshops, and professional development opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#7BAFD4] to-[#5A9FC4] flex items-center justify-center shadow-md">
                      <Calendar className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#13294B]">{event.date}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <Badge className="w-fit mb-2 bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 text-xs">
                    {event.type}
                  </Badge>
                  <CardTitle className="text-xl text-[#13294B]">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  <Button
                    variant="ghost"
                    className="text-[#7BAFD4] hover:text-[#5A9FC4] hover:bg-[#7BAFD4]/10 p-0 h-auto font-semibold group-hover:gap-2 transition-all"
                    asChild
                  >
                    <Link href="/calendar">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#7BAFD4] hover:bg-[#5A9FC4] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/calendar">
                View Full Calendar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5-PILLAR LEADERSHIP PREVIEW */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 hover:bg-[#7BAFD4]/20">
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#13294B] mb-4 text-balance">Our 5-Pillar Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              A student-led model that grows real-world skills through responsibility and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
            {leadershipTeam.map((officer, index) => (
              <Card
                key={index}
                className="group h-full flex flex-col items-center text-center border-2 border-gray-100 hover:border-[#7BAFD4] bg-white shadow-md hover:shadow-2xl rounded-2xl transition-all duration-300 hover:-translate-y-2 p-6 md:p-7 space-y-3"
              >
                {officer.linkedin && officer.linkedin !== "#" ? (
                  <a
                    href={officer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${officer.name}'s LinkedIn profile`}
                    className="h-44 w-44 rounded-full overflow-hidden ring-4 ring-[#7BAFD4] shadow-sm group-hover:ring-[#5A9FC4] hover:scale-105 transition-all duration-300 block"
                  >
                    <img
                      src={officer.photo || "/placeholder.svg"}
                      alt={`Headshot of ${officer.name}, ${officer.title} — ${officer.pillar} pillar`}
                      className="h-full w-full object-cover hover:opacity-90 transition-opacity"
                      style={{ objectPosition: officer.objectPosition }}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="h-44 w-44 rounded-full overflow-hidden ring-4 ring-[#7BAFD4] shadow-sm group-hover:ring-[#5A9FC4] group-hover:scale-105 transition-all duration-300">
                    <img
                      src={officer.photo || "/placeholder.svg"}
                      alt={`Headshot of ${officer.name}, ${officer.title} — ${officer.pillar} pillar`}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: officer.objectPosition }}
                      loading="lazy"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold text-[#13294B] mt-4">{officer.name}</h3>
                <p className="text-sm font-medium text-[#7BAFD4] uppercase tracking-wide">{officer.title}</p>
                <Badge className="bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 text-xs">{officer.pillar}</Badge>
                <p className="text-sm text-gray-500">{officer.sport}</p>
                <p className="text-sm text-gray-600 flex-grow leading-relaxed line-clamp-4">{officer.bio}</p>

                {officer.linkedin && officer.linkedin !== "#" && (
                  <a
                    href={officer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile for ${officer.name}`}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#7BAFD4]/10 hover:bg-[#0A66C2] hover:scale-110 transition-all duration-200 group/link mt-2 shadow-sm"
                  >
                    <Linkedin className="h-5 w-5 text-[#7BAFD4] group-hover/link:text-white transition-colors" />
                  </a>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#7BAFD4] text-[#7BAFD4] hover:bg-[#7BAFD4] hover:text-white rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/about">
                Meet the Full Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#13294B] via-[#2A5D8F] to-[#7BAFD4] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Growing Every Semester</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto text-pretty">
              Join a thriving community of student-athletes building their business futures.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                  <div className="relative">
                    <div className="inline-flex h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#7BAFD4] via-[#6AAFC4] to-[#5A9FC4] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Take the First Step Toward Your Business Career
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              Join Athletes in Business at Carolina and connect with a community that understands your journey and
              shares your ambition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-[#7BAFD4] hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/get-involved">
                  Complete Interest Form
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#7BAFD4] bg-transparent rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Questions? Contact Us</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-white/90">
              <a
                href="mailto:aib-unc@outlook.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="leading-none">aib-unc@outlook.com</span>
              </a>
              <span className="hidden sm:block h-5 w-px bg-white/50"></span>
              <a
                href="https://instagram.com/aib_unc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="leading-none">@aib_unc</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
