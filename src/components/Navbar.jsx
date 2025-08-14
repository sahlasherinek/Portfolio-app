import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/education", label: "Education" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-indigo-600 transition duration-300 ${
                  location.pathname === link.path ? "text-indigo-600 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
