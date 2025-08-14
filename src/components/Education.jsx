import React from "react";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Government Engineering College, Wayanad",
      year: "2021 - 2025",
      details:
        "Graduated with strong foundations in software engineering, algorithms, and emerging technologies like AI and mobile development.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "PMSA PTHSS Kakkov, Malappuram",
      year: "2018 - 2020",
      details:
        "Specialized in science, building analytical and problem-solving skills.",
    },
  ];

  return (
    <section className="bg-[#FAF9F6] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-8 border-b-4 border-[#E67E22] inline-block">
          Education
        </h1>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-l-4 border-[#27AE60]"
            >
              <h2 className="text-2xl font-semibold text-[#2C3E50]">
                {edu.degree}
              </h2>
              <p className="text-[#E67E22] font-medium">{edu.institution}</p>
              <p className="text-gray-500 italic">{edu.year}</p>
              <p className="mt-2 text-[#4B4B4B]">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
