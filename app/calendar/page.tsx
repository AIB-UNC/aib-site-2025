"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ExternalLink, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Skeleton } from "@/components/ui/skeleton"

interface Event {
  id: string
  title: string
  date: string
  time: string
  description?: string
  location?: string
  event_type?: string
  image_url?: string
  registration_link?: string
}

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true)
        setError(null)

        const supabase = createClient()

        const { data, error: fetchError } = await supabase
          .from("events")
          .select("*")
          .gte("date", new Date().toISOString().split("T")[0])
          .order("date", { ascending: true })
          .order("time", { ascending: true })

        if (fetchError) {
          console.error("[v0] Error fetching events:", fetchError)
          setError("Unable to load events. Please try again later.")
          return
        }

        setEvents(data || [])
      } catch (err) {
        console.error("[v0] Unexpected error:", err)
        setError("An unexpected error occurred.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const getEventTypeColor = (type?: string) => {
    if (!type) return "bg-gray-500"

    const colors: Record<string, string> = {
      workshop: "bg-blue-500",
      networking: "bg-green-500",
      speaker: "bg-purple-500",
      social: "bg-orange-500",
      other: "bg-gray-500",
    }
    return colors[type.toLowerCase()] || colors.other
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Events Calendar</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Join us for workshops, networking events, speaker series, and more. All events are designed to help you
              succeed in your business journey.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="container">
          {loading ? (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <Skeleton className="h-64 md:h-full w-full" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-20 w-full" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-10 w-32" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unable to Load Events</h3>
              <p className="text-muted-foreground">{error}</p>
            </div>
          ) : events.length > 0 ? (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={event.image_url || "/placeholder.svg?height=300&width=300&query=business event"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          {event.event_type && (
                            <Badge className={`${getEventTypeColor(event.event_type)} mb-3`}>
                              {event.event_type.charAt(0).toUpperCase() + event.event_type.slice(1)}
                            </Badge>
                          )}
                          <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        </div>
                      </div>

                      {event.description && (
                        <CardDescription className="text-base mb-6">{event.description}</CardDescription>
                      )}

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{formatTime(event.time)}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>

                      {event.registration_link && (
                        <Button asChild>
                          <a href={event.registration_link} target="_blank" rel="noopener noreferrer">
                            Register Now <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
              <p className="text-muted-foreground">Check back soon for new events and opportunities!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
