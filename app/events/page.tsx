import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Hackathon 2023",
      date: "June 15-16, 2023",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium, NITK",
      description: "A 24-hour coding competition where teams build innovative solutions to real-world problems.",
      image: "/placeholder.svg?height=200&width=300",
      category: "hackathon",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "July 5, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Lecture Hall 3, NITK",
      description: "Learn the fundamentals of modern web development with React and Next.js.",
      image: "/placeholder.svg?height=200&width=300",
      category: "workshop",
    },
    {
      id: 3,
      title: "Tech Talk: AI in Healthcare",
      date: "July 12, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Seminar Hall, NITK",
      description: "Industry experts discuss the applications of artificial intelligence in healthcare.",
      image: "/placeholder.svg?height=200&width=300",
      category: "talk",
    },
    {
      id: 4,
      title: "SHE: Women in Tech Panel",
      date: "July 20, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Room, NITK",
      description: "A panel discussion featuring successful women in the tech industry sharing their experiences.",
      image: "/placeholder.svg?height=200&width=300",
      category: "talk",
      isSHE: true,
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Machine Learning Bootcamp",
      date: "May 10-12, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Science Department, NITK",
      description: "An intensive three-day bootcamp covering the fundamentals of machine learning.",
      image: "/placeholder.svg?height=200&width=300",
      category: "workshop",
    },
    {
      id: 6,
      title: "Open Source Contribution Day",
      date: "April 22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "IT Department, NITK",
      description:
        "A day dedicated to contributing to open source projects and learning about the open source ecosystem.",
      image: "/placeholder.svg?height=200&width=300",
      category: "workshop",
    },
    {
      id: 7,
      title: "SHE: Coding Challenge",
      date: "April 15, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Main Auditorium, NITK",
      description: "A coding competition exclusively for women to showcase their programming skills.",
      image: "/placeholder.svg?height=200&width=300",
      category: "hackathon",
      isSHE: true,
    },
    {
      id: 8,
      title: "Industry Connect: Startup Ecosystem",
      date: "March 30, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Seminar Hall, NITK",
      description: "A session connecting students with startup founders and venture capitalists.",
      image: "/placeholder.svg?height=200&width=300",
      category: "talk",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Events & Activities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover workshops, hackathons, tech talks, and more organized by NITK Technical Club.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card
                      key={event.id}
                      className={`overflow-hidden hover:shadow-md transition-shadow ${
                        event.isSHE ? "border-pink-200" : "border-blue-100"
                      }`}
                    >
                      <div className="relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        {event.isSHE && (
                          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                            SHE Initiative
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className={`text-sm ${event.isSHE ? "text-pink-600" : "text-blue-600"} mb-2`}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </div>
                        <h3 className={`text-xl font-bold ${event.isSHE ? "text-pink-700" : "text-blue-700"} mb-2`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className={`${
                            event.isSHE
                              ? "text-pink-700 border-pink-200 hover:bg-pink-50"
                              : "text-blue-700 border-blue-200 hover:bg-blue-50"
                          }`}
                        >
                          <Link href={`/events/${event.id}`}>Register Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <Card
                      key={event.id}
                      className={`overflow-hidden hover:shadow-md transition-shadow ${
                        event.isSHE ? "border-pink-200" : "border-blue-100"
                      }`}
                    >
                      <div className="relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        {event.isSHE && (
                          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                            SHE Initiative
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className={`text-sm ${event.isSHE ? "text-pink-600" : "text-blue-600"} mb-2`}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </div>
                        <h3 className={`text-xl font-bold ${event.isSHE ? "text-pink-700" : "text-blue-700"} mb-2`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className={`${
                            event.isSHE
                              ? "text-pink-700 border-pink-200 hover:bg-pink-50"
                              : "text-blue-700 border-blue-200 hover:bg-blue-50"
                          }`}
                        >
                          <Link href={`/events/${event.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700 mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              If you have an idea for a workshop, hackathon, or any other tech event, we'd love to help you organize it!
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
