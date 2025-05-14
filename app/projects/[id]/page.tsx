import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) return <div className="text-white text-center mt-20">🚫 Invalid project ID</div>;

  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) return <div className="text-white text-center mt-20">🚫 Project not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-6 backdrop-blur border border-white/10 bg-[#1a1a2e]/70 p-6 rounded-xl shadow-lg">
        <Image
          src={project.image_url || "/isteappdefualt.jpg"}
          alt={project.name}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h1 className="text-4xl font-bold text-blue-300">{project.name}</h1>
        <div className="text-sm text-blue-400">
          {project.sig} • {project.year}
        </div>

        {/* Keywords */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-purple-300">Keywords</h2>
          <div className="flex flex-wrap gap-2 mt-1">
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

        {/* Team */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
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

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">What was tackled?</h2>
          <p className="text-gray-200">{project.tackled}</p>

          <h2 className="text-xl font-semibold text-purple-300 mt-6 mb-2">How was it done?</h2>
          <p className="text-gray-200">{project.approach}</p>
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
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

        {/* Contact */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-blue-400">Contact</h2>
          <p className="text-gray-300">
            {project.mentors.join(", ")}, {project.mentees.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
