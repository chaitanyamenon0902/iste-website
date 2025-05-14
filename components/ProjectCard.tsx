import Link from "next/link";

export function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
        <img src={project.image_url} alt={project.name} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2">{project.name}</h2>
        <p className="text-sm text-gray-600">{project.description?.slice(0, 80)}...</p>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{project.sig}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
