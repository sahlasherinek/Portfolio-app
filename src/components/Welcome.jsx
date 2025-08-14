import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, GraduationCap, FolderOpen, Mail, Github, Linkedin, Download } from 'lucide-react';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Navigation items
  const navItems = [
    { href: '/about', label: 'About', icon: User },
    { href: '/education', label: 'Education', icon: GraduationCap },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
    { href: '/contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (href) => {
    console.log(`Navigate to: ${href}`);
    // Navigation will be handled by React Router Link components
  };

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log('Downloading CV...');
    // Example: window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-indigo-100 rounded-full opacity-35 animate-pulse delay-2000"></div>
      </div>

      {/* Static Navbar with Enhanced Styling */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <ul className="flex space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`group relative flex items-center space-x-3 px-6 py-3 rounded-xl text-slate-700 hover:text-blue-600 transition-all duration-300 cursor-pointer ${
                        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Subtle Hover Background */}
                      <div className="absolute inset-0 bg-blue-50 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                      
                      {/* Icon and Text */}
                      <Icon size={20} className="relative z-10 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10 font-medium text-lg">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image with Elegant Animation */}
          <div className={`mb-12 transform transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
          }`}>
            <div className="relative w-36 h-36 mx-auto group">
              {/* Simple Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300"></div>
              {/* Profile Container */}
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center shadow-lg">
                {/* Replace with your actual image */}
                <User size={50} className="text-slate-500 group-hover:text-blue-600 transition-colors duration-300" />
                {/* Uncomment and use your actual image:
                <img 
                  src="/path-to-your-profile-image.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover" 
                />
                */}
              </div>
            </div>
          </div>

          {/* Hero Text with Staggered Animation */}
          <div className={`space-y-6 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-slate-800">Hello, I'm </span>
              <span className="text-blue-600">
                Your Name
              </span>
            </h1>
            
            <div className={`transform transition-all duration-800 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-2xl text-slate-600 font-light mb-6">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>
            
            <div className={`transform transition-all duration-800 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about clean code and innovative design solutions.
              </p>
            </div>
          </div>

          {/* Simple Download CV Button */}
          <div className={`mb-16 transform transition-all duration-800 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <button 
              onClick={handleDownloadCV}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download size={22} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Clean Social Links */}
          <div className={`flex justify-center space-x-6 transform transition-all duration-800 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github size={28} className="text-slate-600 hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={28} className="text-slate-600 hover:text-blue-600 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;