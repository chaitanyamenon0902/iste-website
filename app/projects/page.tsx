// app/projects/page.tsx
import { PrismaClient } from "@prisma/client";
import ProjectFilter from "@/components/ProjectFilter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prisma = new PrismaClient();

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white px-6 py-12 font-sans space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl text-blue-300">
            Built by ISTE NITK — For the Future
          </p>
        </header>

        <ProjectFilter allProjects={projects} />
      </div>
      <Footer />
    </>
  );
}
