import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SHEPage() {
  const events = [
    {
      title: "Women in Tech Workshop",
      date: "June 15, 2023",
      description: "A hands-on workshop focused on web development and design for women in technology.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Leadership Summit",
      date: "August 22, 2023",
      description: "A summit featuring successful women leaders in the tech industry sharing their experiences.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Coding Bootcamp",
      date: "October 10, 2023",
      description: "An intensive coding bootcamp designed to help women build technical skills in programming.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "Associate Professor, Computer Science",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Ananya Desai",
      role: "Senior Software Engineer, Google",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Meera Patel",
      role: "Founder & CEO, TechWomen",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Riya Kapoor",
      role: "Product Manager, Microsoft",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-pink-300 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight break-words">
                  Society for Her Empowerment
                </h1>
                <p className="text-lg sm:text-xl text-pink-100 max-w-xl mx-auto lg:mx-0">
                  Empowering women in technology through education, mentorship, and community
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
                  <Button asChild size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
                    <Link href="#join">Join SHE</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
                    <Link href="#events">Our Events</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/SHELogoV20.png"
                  alt="Society for Her Empowerment"
                  width={300}
                  height={300}
                  className="rounded-lg object-contain max-w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700">About SHE</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                The Society for Her Empowerment (SHE) is an initiative dedicated to promoting gender diversity in
                technology and empowering women to pursue careers in STEM fields.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-pink-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">Education</h3>
                  <p className="text-gray-600">
                    Providing workshops, seminars, and resources to help women develop technical skills.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-pink-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M17 14c.889-.889 2.111-2.111 3-3" />
                      <path d="M14 17c-.889.889-2.111 2.111-3 3" />
                      <path d="M6.3 6.3a1.9 1.9 0 0 0 2.7 2.7L12 6l-3-3-2.7 3.3z" />
                      <path d="m14 10 3 3 2.7-3.3a1.9 1.9 0 0 0-2.7-2.7L14 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">Mentorship</h3>
                  <p className="text-gray-600">
                    Connecting students with experienced professionals for guidance and support.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-pink-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">Community</h3>
                  <p className="text-gray-600">
                    Building a supportive network of women in technology to share experiences and opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 bg-pink-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700">SHE Events</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Join us for our upcoming events designed to inspire and empower women in technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden border-pink-100 hover:shadow-md transition-shadow">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-pink-600 mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold text-pink-700 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button asChild variant="outline" className="text-pink-700 border-pink-200 hover:bg-pink-50">
                      <Link href={`/she/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href="/she/events">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-700">Our Mentors</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the inspiring women who guide and support our community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, index) => (
                <Card key={index} className="border-pink-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto rounded-full overflow-hidden w-24 h-24">
                      <Image
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-pink-700">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
