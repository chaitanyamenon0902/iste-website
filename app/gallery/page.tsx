import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const eventImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Annual Hackathon 2022",
      caption: "Students collaborating during our Annual Hackathon",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Web Development Workshop",
      caption: "Participants at the Web Development Workshop",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Tech Talk Series",
      caption: "Industry experts sharing insights at our Tech Talk Series",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Coding Competition",
      caption: "Students participating in the coding competition",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "SHE Workshop",
      caption: "Women in Tech workshop organized by SHE",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Project Showcase",
      caption: "Students presenting their projects at the showcase",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Industry Visit",
      caption: "Club members during an industry visit",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Team Building Activity",
      caption: "Team building activities for club members",
    },
  ]

  const teamImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Core Team 2023",
      caption: "The Core Team of NITK Technical Club 2023",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Web Development Team",
      caption: "Members of the Web Development Special Interest Group",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Machine Learning Team",
      caption: "Machine Learning Special Interest Group members",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "SHE Team",
      caption: "The dedicated team behind Society for Her Empowerment",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Robotics Team",
      caption: "Robotics Special Interest Group working on a project",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Cybersecurity Team",
      caption: "Members of the Cybersecurity Special Interest Group",
    },
  ]

  const projectImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Smart Campus Project",
      caption: "IoT-based Smart Campus monitoring system",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "AR Navigation App",
      caption: "Augmented Reality campus navigation application",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Healthcare ML Project",
      caption: "Machine Learning project for healthcare diagnostics",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Blockchain Voting System",
      caption: "Secure voting system built on blockchain technology",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Educational Game",
      caption: "Educational game developed by the Game Development team",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Robotics Project",
      caption: "Autonomous robot developed by the Robotics team",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore photos from our events, team activities, and projects.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="events" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="events">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-600 text-sm">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="team">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-600 text-sm">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-gray-600 text-sm">{image.caption}</p>
                      </div>
                    </div>
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
