import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-[#FAF9F6] py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Sahla Sherin E K — All Rights Reserved
        </p>
        <p className="text-sm mt-1">
          Built with{" "}
          <span className="text-[#E67E22] font-semibold">React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
