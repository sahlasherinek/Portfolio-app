import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-indigo-600 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-indigo-600 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-indigo-600 transition duration-300">
              <Link to="/education">Education</Link>
            </li>
            <li className="hover:text-indigo-600 transition duration-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-indigo-600 transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Hi, I'm <span className="text-indigo-600">Sahla Sherin E K</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fadeIn delay-200">
          A passionate Computer Science Engineer from Kerala, specializing in
          Full Stack Development, Mobile App Development, and AI-powered
          projects.
        </p>
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
