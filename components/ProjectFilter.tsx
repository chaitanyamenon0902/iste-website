// components/ProjectFilter.tsx
"use client";

import { useState, useEffect } from "react";

export default function ProjectFilter({ allProjects }) {
  const [sigFilter, setSigFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    const filtered = allProjects.filter((project) => {
      const matchesSig = sigFilter ? project.sig === sigFilter : true;
      const matchesYear = yearFilter ? project.year === parseInt(yearFilter) : true;
      const matchesSearch = searchText
        ? project.name.toLowerCase().includes(searchText.toLowerCase()) ||
          project.description.toLowerCase().includes(searchText.toLowerCase())
        : true;

      return matchesSig && matchesYear && matchesSearch;
    });

    setFilteredProjects(filtered);
  }, [sigFilter, yearFilter, searchText, allProjects]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <select
          onChange={(e) => setSigFilter(e.target.value)}
          className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Filter by SIG</option>
          <option value="CRYPT">CRYPT</option>
          <option value="CREDIT">CREDIT</option>
          <option value="CREATE">CREATE</option>
          <option value="CONCRETE">CONCRETE</option>
          <option value="CLUTCH">CLUTCH</option>
          <option value="CATALYST">CATALYST</option>
          <option value="CHRONICLE">CHRONICLE</option>
          <option value="CHARGE">CHARGE</option>
        </select>
        <select
          onChange={(e) => setYearFilter(e.target.value)}
          className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <option value="">Filter by Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Projects..."
          className="bg-[#1a1a2e] border border-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-64"
        />
      </div>

      {/* Filtered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a key={project.id} href={`/projects/${project.id}`}>
            <div className="backdrop-blur border border-white/10 bg-[#1a1a2e]/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-4 rounded-xl cursor-pointer">
              <div className="h-48 overflow-hidden rounded-md mb-3">
                <img
                  src={project.image_url || "/isteappdefualt.jpg"}
                  alt={project.name}
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
          </a>
        ))}
      </div>
    </div>
  );
}
