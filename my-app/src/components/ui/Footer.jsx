"use client";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* MOBILE TOP BAR: social icons left, logo right (only on mobile) */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <div className="flex items-center space-x-4 text-gray-400">
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>

          <img src="/rookus-logo.png" alt="Rookus" className="w-28 h-auto object-contain" />
        </div>

        {/* MAIN: logo+social (desktop) on left, links on right. On mobile the desktop logo block is hidden and links sit below the top bar */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* DESKTOP: logo + social (hidden on mobile) */}
          <div className="hidden md:flex flex-col justify-between h-auto md:h-60 w-full md:w-auto items-start">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/rookus-logo.png" alt="Rookus" className="w-28 h-auto object-contain" />
            </div>

            <div className="flex items-center space-x-4 text-gray-400 mt-2 md:mt-0">
              <a href="#" aria-label="Twitter" className="hover:text-white transition">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* LINKS (visible on all sizes) */}
          <div className="w-full md:w-auto">
            <div
              className="
                grid grid-cols-2 gap-x-6 gap-y-6
                md:flex md:flex-row md:items-start md:gap-x-16 md:gap-y-10 md:justify-end
                text-left
              "
            >
              {/* Product */}
              <div className="min-w-[140px]">
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Integration</a></li>
                  <li><a href="#" className="hover:text-white">Updates</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="min-w-[140px]">
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Manifesto</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="min-w-[140px]">
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Examples</a></li>
                  <li><a href="#" className="hover:text-white">Community</a></li>
                  <li><a href="#" className="hover:text-white">Guides</a></li>
                  <li><a href="#" className="hover:text-white">Docs</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div className="min-w-[120px]">
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                  <li><a href="#" className="hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
