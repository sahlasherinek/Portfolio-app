import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Recipe Sharing Platform",
      description: "A MERN stack app where users can add, delete, and search for food recipes.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "#",
      github: "#",
    },
    {
      title: "GECStay Hostel Finder App",
      description: "A Flutter mobile app for finding, booking, and reviewing hostels with ML-based predictions.",
      tech: ["Flutter", "Firebase", "Flask"],
      link: "#",
      github: "#",
    },
    {
      title: "GECW Hostel Finder Web App",
      description: "A React + Firebase web app to view hostel details and locations.",
      tech: ["React.js", "Firebase"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#4B4B4B] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-8 border-b-4 border-[#E67E22] inline-block">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-[#2C3E50] mb-2">
                {project.title}
              </h2>
              <p className="text-[#4B4B4B] mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#E67E22]/20 text-[#E67E22] text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#E67E22] text-white rounded-lg shadow hover:bg-[#cf6d1c] transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#E67E22] text-[#E67E22] rounded-lg shadow hover:bg-[#E67E22]/10 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
