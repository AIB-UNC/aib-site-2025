"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Award, Briefcase, Mail, Linkedin, MapPin, Building2, Search } from "lucide-react"

type Member = {
  id: string
  name: string
  sport: string | null
  class_year: string | null
  major: string | null
  interests: string[] | null
  profile_photo_url: string | null
  email: string | null
}

type Alumni = {
  id: string
  name: string
  sport: string | null
  graduation_year: string | null
  job_title: string | null
  company: string | null
  location: string | null
  industry: string | null
  profile_photo_url: string | null
  email: string | null
  linkedin_url: string | null
}

type Partner = {
  id: string
  company_name: string
  partnership_type: string | null
  industry: string | null
  description: string | null
  logo_url: string | null
  website_url: string | null
}

type CommunityTabsProps = {
  members: Member[]
  alumni: Alumni[]
  partners: Partner[]
}

export function CommunityTabs({ members, alumni, partners }: CommunityTabsProps) {
  const [activeTab, setActiveTab] = useState<"members" | "alumni" | "partners">("members")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredAlumni = alumni.filter((alum) => alum.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredPartners = partners.filter((partner) =>
    partner.company_name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getSearchPlaceholder = () => {
    switch (activeTab) {
      case "members":
        return "Search members..."
      case "alumni":
        return "Search alumni..."
      case "partners":
        return "Search partners..."
    }
  }

  return (
    <div className="space-y-8">
      {/* Tab Navigation and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeTab === "members" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("members")
              setSearchQuery("")
            }}
            className={`rounded-full ${
              activeTab === "members"
                ? "bg-[#7BAFD4] hover:bg-[#6AAFC4] text-white"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Members ({members.length})
          </Button>
          <Button
            variant={activeTab === "alumni" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("alumni")
              setSearchQuery("")
            }}
            className={`rounded-full ${
              activeTab === "alumni"
                ? "bg-[#7BAFD4] hover:bg-[#6AAFC4] text-white"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Award className="h-4 w-4 mr-2" />
            Alumni ({alumni.length})
          </Button>
          <Button
            variant={activeTab === "partners" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("partners")
              setSearchQuery("")
            }}
            className={`rounded-full ${
              activeTab === "partners"
                ? "bg-[#7BAFD4] hover:bg-[#6AAFC4] text-white"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Partners ({partners.length})
          </Button>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder={getSearchPlaceholder()}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full border-gray-200 focus:border-[#7BAFD4] focus:ring-[#7BAFD4]"
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card
                key={member.id}
                className="group border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto h-24 w-24 rounded-full overflow-hidden ring-4 ring-[#7BAFD4]/20 group-hover:ring-[#7BAFD4] transition-all">
                    <img
                      src={member.profile_photo_url || "/placeholder.svg?height=96&width=96"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-[#13294B]">{member.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {member.sport} • {member.class_year}
                    </CardDescription>
                    {member.major && (
                      <Badge className="mt-2 bg-[#13294B]/10 text-[#13294B] border-[#13294B]/20 text-xs">
                        {member.major}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {member.interests && Array.isArray(member.interests) && member.interests.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Interests:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.interests.map((interest, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/30 text-xs"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button
                    className="w-full bg-[#7BAFD4] hover:bg-[#6AAFC4] text-white rounded-full"
                    onClick={() => member.email && (window.location.href = `mailto:${member.email}`)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Alumni Tab */}
        {activeTab === "alumni" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAlumni.map((alum) => (
              <Card
                key={alum.id}
                className="group border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex gap-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden ring-4 ring-[#7BAFD4]/20 group-hover:ring-[#7BAFD4] transition-all flex-shrink-0">
                      <img
                        src={alum.profile_photo_url || "/placeholder.svg?height=80&width=80"}
                        alt={alum.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg text-[#13294B] mb-1">{alum.name}</CardTitle>
                      <CardDescription className="text-sm mb-2">
                        {alum.sport} • {alum.graduation_year}
                      </CardDescription>
                      {alum.job_title && <p className="text-sm font-semibold text-[#7BAFD4] mb-1">{alum.job_title}</p>}
                      {alum.company && <p className="text-sm text-gray-600">{alum.company}</p>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    {alum.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{alum.location}</span>
                      </div>
                    )}
                    {alum.industry && (
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{alum.industry}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {alum.linkedin_url && (
                      <Button
                        className="flex-1 bg-[#7BAFD4] hover:bg-[#6AAFC4] text-white rounded-full"
                        onClick={() => window.open(alum.linkedin_url!, "_blank")}
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    )}
                    {alum.email && (
                      <Button
                        variant="outline"
                        className="flex-1 border-[#7BAFD4] text-[#7BAFD4] hover:bg-[#7BAFD4]/10 rounded-full bg-transparent"
                        onClick={() => (window.location.href = `mailto:${alum.email}`)}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPartners.map((partner) => (
              <Card
                key={partner.id}
                className="group border-2 border-gray-100 hover:border-[#7BAFD4] hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {partner.logo_url ? (
                        <img
                          src={partner.logo_url || "/placeholder.svg"}
                          alt={`${partner.company_name} logo`}
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <Briefcase className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl text-[#13294B] mb-2">{partner.company_name}</CardTitle>
                      {partner.partnership_type && (
                        <Badge className="bg-[#7BAFD4]/10 text-[#7BAFD4] border-[#7BAFD4]/20 text-xs mb-2">
                          {partner.partnership_type}
                        </Badge>
                      )}
                      {partner.industry && <p className="text-sm text-gray-600">{partner.industry}</p>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {partner.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
                  )}
                  {partner.website_url && (
                    <Button
                      className="w-full bg-[#13294B] hover:bg-[#13294B]/90 text-white rounded-full"
                      onClick={() => window.open(partner.website_url!, "_blank")}
                    >
                      Learn More About Partnership
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
