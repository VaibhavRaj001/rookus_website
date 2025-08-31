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
        {/* Layout: column on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* LEFT: logo on top, social icons pinned to bottom on md */}
          <div className="flex flex-col justify-between h-auto md:h-60 w-full md:w-auto mb-8 md:mb-0">
            {/* Logo (top-left) */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600" />
              <span className="text-white font-medium">Rookus</span>
            </div>

            {/* Social icons (bottom-left on md, just below logo on mobile) */}
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
          </div>

          {/* RIGHT: responsive columns:
              - mobile (default): grid with 2 columns (grid-cols-2)
              - md+: switch to flex row with columns pushed to the right
          */}
          <div className="w-full md:w-auto md:ml-auto">
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
