import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        
        {/* Name Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Hi, I'm <span className="text-indigo-600">Sahla Sherin E K</span>
        </h2>
        
        {/* Short Bio */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fadeIn delay-200">
          A passionate Computer Science Engineer from Kerala, specializing in
          Full Stack Development, Mobile App Development, and AI-powered
          projects.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8 animate-fadeIn delay-300">
          <a
            href="https://linkedin.com/in/sahla-sherin-e-k-4b5010248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/sahlasherinek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-110"
          >
            <FaGithub size={35} />
          </a>
        </div>

        {/* Call to Action Button */}
        <Link
          to="/projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300 animate-fadeIn delay-400"
        >
          View My Work
        </Link>
      </section>
    </div>
  );
}
