import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-6 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-500 inline-block">
          About Me
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Hi! I'm <span className="font-semibold text-indigo-600">Sahla Sherin E K</span>,
          a passionate Computer Science Engineer from Kerala, India. I specialize in 
          <strong> Full Stack Development</strong>, <strong>Mobile App Development</strong>,
          and <strong>AI-powered projects</strong>.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          My goal is to create scalable, user-friendly applications with clean UI and strong 
          backend architecture. I’m continuously learning and exploring new technologies to 
          stay ahead in the tech world.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Outside of coding, I enjoy reading, exploring design trends, and experimenting with 
          fitness and healthy living.
        </p>
      </div>
    </section>
  );
}
