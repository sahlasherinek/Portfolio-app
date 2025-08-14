import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] mb-4 animate-fadeIn">
          Hi, I'm <span className="text-[#E67E22]">Sahla Sherin E K</span>
        </h2>
        
        {/* About */}
        <p className="text-lg text-[#4B4B4B] mb-8 max-w-2xl animate-fadeIn delay-200">
          A Computer Science Engineer from Kerala, crafting beautiful and functional
          experiences with <span className="text-[#27AE60] font-semibold">Full Stack Development</span>,
          <span className="text-[#27AE60] font-semibold"> Mobile Apps</span> &  
          <span className="text-[#27AE60] font-semibold"> AI-powered Projects</span>.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-8 animate-fadeIn delay-300">
          <a
            href="https://linkedin.com/in/sahla-sherin-e-k-4b5010248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C3E50] hover:text-[#E67E22] transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/sahlasherinek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C3E50] hover:text-[#E67E22] transition-transform transform hover:scale-110"
          >
            <FaGithub size={35} />
          </a>
        </div>

        {/* Call to Action */}
        <Link
          to="/projects"
          className="btn-primary"
        >
          View My Work
        </Link>
      </section>
    </div>
  );
}
