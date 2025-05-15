import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Navbar from "@/components/navbar"; // Adjust the path if needed
import Footer from "@/components/footer";

const prisma = new PrismaClient();

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) return <div className="text-white text-center mt-20">🚫 Invalid project ID</div>;

  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) return <div className="text-white text-center mt-20">🚫 Project not found</div>;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white px-6 py-12 font-sans">
        <div className="max-w-5xl mx-auto backdrop-blur border border-white/10 bg-[#1a1a2e]/70 p-8 rounded-xl shadow-lg space-y-10">
          {/* Top section with image and meta info */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={project.image_url || "/isteappdefualt.jpg"}
                alt={project.name}
                width={800}
                height={400}
                className="rounded-xl object-cover w-full h-64 md:h-72"
              />
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold text-blue-300">{project.name}</h1>
              <p className="text-blue-400 text-sm">
                {project.sig} • {project.year}
              </p>

              {/* Keyword Chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-800 text-blue-100 border border-blue-400/30"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">What was tackled?</h2>
              <p className="text-gray-200">{project.tackled}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">How was it done?</h2>
              <p className="text-gray-200">{project.approach}</p>
            </div>
          </div>

          {/* Links Section */}
          {(project.github_link || project.simulation_link) && (
            <div className="flex flex-wrap gap-4">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  🔗 GitHub
                </a>
              )}
              {project.simulation_link && (
                <a
                  href={project.simulation_link}
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  🛰 Simulation
                </a>
              )}
            </div>
          )}

          {/* Mentors and Mentees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h2 className="text-lg font-semibold text-blue-400 mb-1">Mentors</h2>
              <ul className="list-disc list-inside">
                {project.mentors.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-blue-400 mb-1">Mentees</h2>
              <ul className="list-disc list-inside">
                {project.mentees.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-blue-400">Contact</h2>
            <p className="text-gray-300">
              {project.mentors.join(", ")}, {project.mentees.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
