"use client";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import FAQ from "../faq";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-4 md:px-8 py-8 md:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        {/* LOGO AND SOCIAL - HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8 border-b border-gray-800">
          <img
            src="/rookus-logo.png"
            alt="Rookus"
            className="w-32 h-auto object-contain"
          />
          <div className="flex items-center space-x-4 text-gray-400">
            <a
              href="https://twitter.com/rookus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white hover:scale-110 transition p-2.5 border border-gray-700 rounded-full"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/rookus-in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition p-2.5 border border-gray-700 rounded-full"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/rookus.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition p-2.5 border border-gray-700 rounded-full"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* LINKS - CENTERED */}
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-sm flex-wrap">
            <a href="#home" className="text-gray-400 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition">
              About
            </a>
            <a
              href="#sponsors"
              className="text-gray-400 hover:text-white transition"
            >
              Sponsors
            </a>
            <a href="#research" className="text-gray-400 hover:text-white transition">
              Research
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition">
              Features
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition">
              Pricing
            </a>
            <a href="#FAQ" className="text-gray-400 hover:text-white transition">
              FAQ
            </a>
            <a href="mailto:campaigns@rookus.co.in" className="text-gray-400 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* COPYRIGHT - CENTERED */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-gray-500">
            &copy; 2025 Rookus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
