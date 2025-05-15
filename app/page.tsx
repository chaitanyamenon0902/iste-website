"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InterestGroupCard from "@/components/interest-group-card"
import SocialGroupCard from "@/components/social-group-card"
import SponsorCarousel from "@/components/SponsorCarousel" // Import the new component

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/bg1.jpeg",
    "/bg2.jpeg"
  ]
  const nextImage = () => setCurrentImage((currentImage + 1) % images.length)
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length)

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000) // 5 seconds
    return () => clearInterval(interval)
  }, [currentImage])

  const interestGroups = [
    {
      name: "Catalyst",
      description: "Catalyst is a special interest group of ISTE-NITK dedicated to engineering applications in the field of Chemical Engineering...",
      imagePath: "catalyst",
    },
    {
      name: "Charge",
      description: "Charge, one of the biggest SIGs on campus, is a haven for budding electronics and electrical engineers...",
      imagePath: "charge",
    },
    {
      name: "Chronicle",
      description: "The Chronicles of ISTE are regaled across the campus, and generally, they revolve around the quirky members of the Chronicle SIG...",
      imagePath: "chronicle",
    },
    {
      name: "Clutch",
      description: "Clutch as a SIG is a very interesting one. We don't do all the fun projects alone!...",
      imagePath: "clutch",
    },
    {
      name: "Concrete",
      description: "Being one of the only two Special Interest Groups on the campus focusing on the field of civil engineering...",
      imagePath: "concrete",
    },
    {
      name: "Create",
      description: "This is Create. We Create. Create what though? Media. Be it projects, events, KEPs on things like photography...",
      imagePath: "create",
    },
    {
      name: "Credit",
      description: "Surrounded by a cohort of technical enthusiasts, if you're the one who's fascinated by the business side of the products...",
      imagePath: "credit",
    },
    {
      name: "Crypt",
      description: "To deCrypt our comp SIG is not an unchallenging task! Crypt is home to all things Computer Science...",
      imagePath: "crypt",
    },
  ]

  const socialGroups = [
    {
      name: "Community Outreach",
      description: "Engaging with local communities through technology education initiatives",
      icon: "Users",
    },
    {
      name: "Tech for Good",
      description: "Using technology to address social and environmental challenges",
      icon: "Heart",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] py-10 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Background ${index}`}
                layout="fill"
                objectFit="cover"
                className={`brightness-50 transition-opacity duration-700 ease-in-out absolute inset-0 ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6 min-h-[70vh]">
            <h1 className="text-4xl text-blue-50 font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Indian Society for Technical Education, NITK
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl">
              Fostering innovation, creativity, and technical excellence among students
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/projects">Our Projects</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
            <button onClick={prevImage} className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
              <ChevronLeft />
            </button>
            <button onClick={nextImage} className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
              <ChevronRight />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">About Us</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We are a student-run organization dedicated to promoting technical knowledge and innovation at NITK...
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-blue-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Learn</h3>
                  <p className="text-gray-600">Gain knowledge and skills through workshops, seminars, and hands-on training sessions.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <circle cx="12" cy="12" r="3" /><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="8" x2="8" y1="12" y2="12"/>
                      <line x1="12" x2="12" y1="8" y2="8"/><line x1="12" x2="12" y1="16" y2="16"/><line x1="16" x2="16" y1="12" y2="12"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Build</h3>
                  <p className="text-gray-600">Create innovative projects and solutions by applying technical knowledge to real-world problems.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-50 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-1.7 0-3 1.3-3 3v0c0 .8.3 1.5.8 2H8c-1.7 0-3 1.3-3 3s1.3 3 3 3h8c1.7 0 3-1.3 3-3s-1.3-3-3-3h-.8c.5-.5.8-1.2.8-2v0c0-1.7-1.3-3-3-3h-.8c.5-.5.8-1.2.8-2Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Connect</h3>
                  <p className="text-gray-600">Network with like-minded individuals, industry professionals, and alumni to expand opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Interest Groups */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">Special Interest Groups</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our specialized groups focused on different areas of technology and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interestGroups.map((group, index) => (
                <InterestGroupCard key={index} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* Social Initiatives */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">Social Initiatives</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our social groups are dedicated to making a positive impact through technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {socialGroups.map((group, index) => (
                <SocialGroupCard key={index} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Carousel */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">Our Sponsors</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We are proud to be supported by these amazing organizations.
              </p>
            </div>
            <SponsorCarousel />
          </div>
        </section>

        {/* SHE Preview Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-pink-200 to-pink-100 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-pink-700">
                  Society for Her Empowerment
                </h2>
                <p className="text-base sm:text-lg text-pink-800 max-w-md mx-auto md:mx-0">
                  SHE is our initiative dedicated to promoting gender diversity in technology and empowering women to pursue careers in STEM fields.
                </p>
                <div className="pt-2">
                  <Button asChild className="bg-pink-600 hover:bg-pink-700">
                    <Link href="/she">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
                  <Image
                    src="/SHELogoV20.png"
                    alt="Society for Her Empowerment"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}