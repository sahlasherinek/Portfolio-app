import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-6 flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg" // Replace with your profile image path
            alt="Sahla Sherin E K"
            className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-indigo-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-500 inline-block pb-2 hover:border-pink-500 transition-colors duration-300">
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
      </div>
    </section>
  );
}
