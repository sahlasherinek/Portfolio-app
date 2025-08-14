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
    <nav
      className="shadow-lg"
      style={{ backgroundColor: "#2C3E50" }} // Primary color
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: "#E67E22" }}>
          My Portfolio
        </h1>
        <ul className="flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color:
                    location.pathname === link.path ? "#E67E22" : "#FAF9F6",
                  fontWeight:
                    location.pathname === link.path ? "600" : "normal",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#27AE60")} // Accent color on hover
                onMouseOut={(e) =>
                  (e.target.style.color =
                    location.pathname === link.path ? "#E67E22" : "#FAF9F6")
                }
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
