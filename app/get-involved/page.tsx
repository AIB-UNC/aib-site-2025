"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function GetInvolvedPage() {
  const [isLoadingJoin, setIsLoadingJoin] = useState(false)
  const [isLoadingContact, setIsLoadingContact] = useState(false)
  const [joinError, setJoinError] = useState<string | null>(null)
  const [contactError, setContactError] = useState<string | null>(null)
  const [joinSuccess, setJoinSuccess] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const router = useRouter()

  const [joinFormData, setJoinFormData] = useState({
    name: "",
    email: "",
    athleteStatus: "",
    graduationYear: "",
    interests: [] as string[],
    message: "",
  })

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const interestOptions = [
    "Networking Events",
    "Career Workshops",
    "Mentorship Program",
    "Leadership Opportunities",
    "Entrepreneurship",
    "Industry Insights",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    setJoinFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingJoin(true)
    setJoinError(null)

    try {
      const supabase = createClient()

      const { error: submitError } = await supabase.from("get_involved_submissions").insert({
        name: joinFormData.name,
        email: joinFormData.email,
        athlete_status: joinFormData.athleteStatus,
        graduation_year: joinFormData.graduationYear ? Number.parseInt(joinFormData.graduationYear) : null,
        interests: joinFormData.interests,
        message: joinFormData.message || null,
      })

      if (submitError) throw submitError

      setJoinSuccess(true)
      setJoinFormData({
        name: "",
        email: "",
        athleteStatus: "",
        graduationYear: "",
        interests: [],
        message: "",
      })
    } catch (err) {
      setJoinError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoadingJoin(false)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingContact(true)
    setContactError(null)

    try {
      const supabase = createClient()

      const { error: submitError } = await supabase.from("contact_submissions").insert({
        name: contactFormData.name,
        email: contactFormData.email,
        subject: contactFormData.subject,
        message: contactFormData.message,
      })

      if (submitError) throw submitError

      setContactSuccess(true)
      setContactFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setContactError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoadingContact(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Involved</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Join Athletes in Business at Carolina and start building your future today. Fill out the form below to
              express your interest or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {joinSuccess ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Thank You!</CardTitle>
                  <CardDescription className="text-center text-base">
                    We've received your submission and will be in touch soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button onClick={() => setJoinSuccess(false)}>Submit Another Response</Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Join Our Community</CardTitle>
                  <CardDescription className="text-base">
                    Tell us about yourself and how you'd like to get involved
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleJoinSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={joinFormData.name}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={joinFormData.email}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="athleteStatus">Athlete Status *</Label>
                      <Select
                        required
                        value={joinFormData.athleteStatus}
                        onValueChange={(value) => setJoinFormData((prev) => ({ ...prev, athleteStatus: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">Current Student-Athlete</SelectItem>
                          <SelectItem value="former">Former Student-Athlete</SelectItem>
                          <SelectItem value="non-athlete">Non-Athlete</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="graduationYear">Expected Graduation Year</Label>
                      <Input
                        id="graduationYear"
                        type="number"
                        min="2024"
                        max="2030"
                        value={joinFormData.graduationYear}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, graduationYear: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Areas of Interest *</Label>
                      <div className="space-y-3">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={joinFormData.interests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                            />
                            <Label htmlFor={interest} className="text-sm font-normal cursor-pointer">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us more about yourself and why you're interested in joining..."
                        value={joinFormData.message}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, message: e.target.value }))}
                      />
                    </div>

                    {joinError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-600">{joinError}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoadingJoin || joinFormData.interests.length === 0}
                    >
                      {isLoadingJoin ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              {contactSuccess ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Thank You!</CardTitle>
                    <CardDescription className="text-base">
                      We've received your message and will get back to you soon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={() => setContactSuccess(false)}>Send Another Message</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Name *</Label>
                        <Input
                          id="contact-name"
                          required
                          value={contactFormData.name}
                          onChange={(e) => setContactFormData((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          value={contactFormData.email}
                          onChange={(e) => setContactFormData((prev) => ({ ...prev, email: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          required
                          value={contactFormData.subject}
                          onChange={(e) => setContactFormData((prev) => ({ ...prev, subject: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea
                          id="contact-message"
                          rows={6}
                          required
                          value={contactFormData.message}
                          onChange={(e) => setContactFormData((prev) => ({ ...prev, message: e.target.value }))}
                        />
                      </div>

                      {contactError && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-sm text-red-600">{contactError}</p>
                        </div>
                      )}

                      <Button type="submit" className="w-full" disabled={isLoadingContact}>
                        {isLoadingContact ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:aib-unc@outlook.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        aib-unc@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        University of North Carolina
                        <br />
                        Chapel Hill, NC 27599
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/aib_unc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-6 w-6 text-primary" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <Linkedin className="h-6 w-6 text-primary" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter className="h-6 w-6 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
