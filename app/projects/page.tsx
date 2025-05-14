import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

const prisma = new PrismaClient();

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white px-6 py-12 font-sans space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500">
          Our Projects
        </h1>
        <p className="text-lg sm:text-xl text-blue-300">Built by ISTE NITK — For the Future</p>
      </header>

      {/* Filters Placeholder */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <select className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg">
          <option>Filter by SIG</option>
          <option>CRYPT</option>
        </select>
        <select className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg">
          <option>Filter by Year</option>
        </select>
        <input
          className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-64"
          placeholder="Search Projects..."
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="backdrop-blur border border-white/10 bg-[#1a1a2e]/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-4 rounded-xl cursor-pointer">
              <div className="h-48 overflow-hidden rounded-md mb-3">
                <Image
                  src={project.image_url || "/isteappdefualt.jpg"}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-bold text-blue-300">{project.name}</h2>
              <p className="text-gray-300 mt-2 text-sm line-clamp-2">{project.description}</p>
              <div className="flex justify-between items-center text-xs text-blue-400 mt-3">
                <span className="bg-blue-900 px-2 py-1 rounded-full">{project.sig}</span>
                <span className="bg-purple-900 px-2 py-1 rounded-full">{project.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
