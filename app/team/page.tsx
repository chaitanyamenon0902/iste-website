import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Rahul Sharma",
      role: "President",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Computer Science student with a passion for AI and machine learning.",
      email: "rahul.sharma@nitk.edu.in",
      linkedin: "https://linkedin.com/in/rahulsharma",
      github: "https://github.com/rahulsharma",
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Electronics student specializing in embedded systems and IoT.",
      email: "priya.patel@nitk.edu.in",
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel",
    },
    {
      name: "Arjun Kumar",
      role: "Secretary",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Mechanical Engineering student with interest in robotics and automation.",
      email: "arjun.kumar@nitk.edu.in",
      linkedin: "https://linkedin.com/in/arjunkumar",
      github: "https://github.com/arjunkumar",
    },
    {
      name: "Sneha Reddy",
      role: "Treasurer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Information Technology student focused on web development and UI/UX design.",
      email: "sneha.reddy@nitk.edu.in",
      linkedin: "https://linkedin.com/in/snehareddy",
      github: "https://github.com/snehareddy",
    },
  ]

  const sigLeads = [
    {
      name: "Vikram Singh",
      role: "Web Development Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Computer Science student with expertise in full-stack development.",
      email: "vikram.singh@nitk.edu.in",
      linkedin: "https://linkedin.com/in/vikramsingh",
      github: "https://github.com/vikramsingh",
    },
    {
      name: "Ananya Desai",
      role: "Machine Learning Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Computer Science student specializing in deep learning and computer vision.",
      email: "ananya.desai@nitk.edu.in",
      linkedin: "https://linkedin.com/in/ananyaDesai",
      github: "https://github.com/ananyaDesai",
    },
    {
      name: "Rohan Mehta",
      role: "Robotics Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Mechanical Engineering student with a focus on robotics and control systems.",
      email: "rohan.mehta@nitk.edu.in",
      linkedin: "https://linkedin.com/in/rohanmehta",
      github: "https://github.com/rohanmehta",
    },
    {
      name: "Neha Gupta",
      role: "Cybersecurity Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Information Technology student with expertise in network security and ethical hacking.",
      email: "neha.gupta@nitk.edu.in",
      linkedin: "https://linkedin.com/in/nehagupta",
      github: "https://github.com/nehagupta",
    },
    {
      name: "Karthik Rao",
      role: "IoT Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Electronics and Communication student focused on IoT and embedded systems.",
      email: "karthik.rao@nitk.edu.in",
      linkedin: "https://linkedin.com/in/karthikrao",
      github: "https://github.com/karthikrao",
    },
    {
      name: "Aditya Nair",
      role: "Game Development Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Second year Computer Science student with a passion for game design and development.",
      email: "aditya.nair@nitk.edu.in",
      linkedin: "https://linkedin.com/in/adityanair",
      github: "https://github.com/adityanair",
    },
    {
      name: "Rishi Verma",
      role: "Blockchain Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Computer Science student specializing in blockchain technology and smart contracts.",
      email: "rishi.verma@nitk.edu.in",
      linkedin: "https://linkedin.com/in/rishiverma",
      github: "https://github.com/rishiverma",
    },
    {
      name: "Divya Menon",
      role: "AR/VR Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Information Technology student with expertise in augmented and virtual reality development.",
      email: "divya.menon@nitk.edu.in",
      linkedin: "https://linkedin.com/in/divyamenon",
      github: "https://github.com/divyamenon",
    },
  ]

  const socialLeads = [
    {
      name: "Sanjay Joshi",
      role: "Community Outreach Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Civil Engineering student passionate about technology education and community service.",
      email: "sanjay.joshi@nitk.edu.in",
      linkedin: "https://linkedin.com/in/sanjayjoshi",
      github: "https://github.com/sanjayjoshi",
    },
    {
      name: "Meera Patel",
      role: "Tech for Good Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Environmental Engineering student focused on using technology for sustainable development.",
      email: "meera.patel@nitk.edu.in",
      linkedin: "https://linkedin.com/in/meerapatel",
      github: "https://github.com/meerapatel",
    },
  ]

  const sheTeam = [
    {
      name: "Anjali Sharma",
      role: "SHE Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Final year Computer Science student advocating for women in technology and STEM fields.",
      email: "anjali.sharma@nitk.edu.in",
      linkedin: "https://linkedin.com/in/anjalisharma",
      github: "https://github.com/anjalisharma",
    },
    {
      name: "Kavya Nair",
      role: "SHE Events Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Third year Electronics student organizing workshops and events for women in technology.",
      email: "kavya.nair@nitk.edu.in",
      linkedin: "https://linkedin.com/in/kavyanair",
      github: "https://github.com/kavyanair",
    },
    {
      name: "Tanvi Desai",
      role: "SHE Outreach Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Second year Information Technology student focused on community building and mentorship.",
      email: "tanvi.desai@nitk.edu.in",
      linkedin: "https://linkedin.com/in/tanvidesai",
      github: "https://github.com/tanvidesai",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The dedicated individuals who make NITK Technical Club a hub of innovation and learning.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="core" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList>
                  <TabsTrigger value="core">Core Team</TabsTrigger>
                  <TabsTrigger value="sig">SIG Leads</TabsTrigger>
                  <TabsTrigger value="social">Social Initiatives</TabsTrigger>
                  <TabsTrigger
                    value="she"
                    className="bg-pink-50 text-pink-700 data-[state=active]:bg-pink-200 data-[state=active]:text-pink-800"
                  >
                    SHE Team
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="core">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreTeam.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <Link
                            href={`mailto:${member.email}`}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.linkedin}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.github}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s GitHub profile`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sig">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sigLeads.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <Link
                            href={`mailto:${member.email}`}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.linkedin}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.github}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s GitHub profile`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="social">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {socialLeads.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <Link
                            href={`mailto:${member.email}`}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.linkedin}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.github}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label={`${member.name}'s GitHub profile`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="she">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {sheTeam.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-pink-200 hover:shadow-md transition-shadow">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-pink-700 mb-1">{member.name}</h3>
                        <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <Link
                            href={`mailto:${member.email}`}
                            className="text-gray-500 hover:text-pink-600 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.linkedin}
                            className="text-gray-500 hover:text-pink-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.github}
                            className="text-gray-500 hover:text-pink-600 transition-colors"
                            aria-label={`${member.name}'s GitHub profile`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
