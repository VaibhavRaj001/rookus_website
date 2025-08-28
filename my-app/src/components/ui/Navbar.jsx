"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-black text-gray-300">
      {/* Left Logo */}
      <div className="text-lg font-bold text-white">Rookus</div>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6 items-center">
        <button className="flex items-center space-x-1 hover:text-white">
          <span>Features</span>
          <ChevronDown size={16} />
        </button>
        <a href="#" className="hover:text-white">Research</a>
        <button className="flex items-center space-x-1 hover:text-white">
          <span>Pricing</span>
          <ChevronDown size={16} />
        </button>
        <a href="#" className="hover:text-white">Blog</a>
        <a href="#" className="hover:text-white">Use Cases</a>
      </div>

      {/* Right CTA Button */}
      <div>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-500 hover:to-indigo-500 transition">
          Join waitlist
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 right-4 bg-gray-900 rounded-lg shadow-lg p-4 space-y-3 md:hidden">
          <a href="#" className="block hover:text-white">Features</a>
          <a href="#" className="block hover:text-white">Research</a>
          <a href="#" className="block hover:text-white">Pricing</a>
          <a href="#" className="block hover:text-white">Blog</a>
          <a href="#" className="block hover:text-white">Use Cases</a>
          <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-500 hover:to-indigo-500 transition">
            Join waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
