"use client";

import { useState } from "react";
import { ChevronDown, Search, Settings, User, Menu, X } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNavMenu,
  MobileNav,
  MobileNavToggle,
  MobileNavHeader,
} from "../components/ui/Navbar";
import Sponsors from "../components/ui/Sponsors";
import Footer from "../components/ui/Footer";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // top site nav (already used)
  const [sidebarOpen, setSidebarOpen] = useState(false); // dashboard sidebar on mobile

  const navItems = [
    { name: "Features", link: "/" },
    { name: "Research", link: "/about" },
    { name: "Pricing", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Use Cases", link: "/" },
  ];

  const menuItems = [
    "Campaign Brief",
    "Copy Generation(Linda)",
    "Data Layer",
    "Campaign Score(Mike)",
    "Script Direction(Emelie)",
    "Campaign CTA(Joshua)",
    "Generation Layer",
    "The HIVE MIND(Rookius)",
  ];

  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center text-white overflow-hidden bg-black pt-28">
        {/* Radial Purple Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[98%] md:w-[90%] h-[140%] md:h-[120%] bg-[radial-gradient(ellipse_at_center,_#C04DEA_0%,_transparent_90%)] blur-3xl opacity-40 md:opacity-100"></div>
        </div>

        {/* Site Navbar (fixed) */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <NavbarButton href="/">Join Waitlist</NavbarButton>
            </NavBody>

            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={mobileOpen}
                  onClick={() => setMobileOpen((prev) => !prev)}
                />
              </MobileNavHeader>

              <MobileNavMenu isOpen={mobileOpen}>
                <div className="flex flex-col w-full px-2 pb-4">
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className="px-4 py-2 text-gray-300 hover:text-white rounded"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <NavbarButton href="/" className="mt-4 w-full">
                    Join Waitlist
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>

        <div className="absolute inset-0 bg-black/10 z-0"></div>
        {/* Orbit Lines (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 1024"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="720"
            cy="600"
            r="400"
            stroke="white"
            strokeOpacity="0.1"
            fill="none"
          />
          <circle
            cx="720"
            cy="600"
            r="600"
            stroke="white"
            strokeOpacity="0.05"
            fill="none"
          />
          <circle
            cx="720"
            cy="600"
            r="800"
            stroke="white"
            strokeOpacity="0.03"
            fill="none"
          />
        </svg>

        {/* Hero */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Campaigns
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 max-w-2xl">
            Enhance your campaigns with AI, where intelligent agents meet
            secure, compliant execution.
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-300 max-w-2xl">
            Boost your ROI with intelligent automation
          </p>
          <button className="mt-6 bg-white text-black px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
            Book a Demo
          </button>
        </section>

        {/* Bottom Card / Dashboard wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-10">
          {/* Outer gradient glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6D28D9] via-[#A855F7] to-[#6D28D9] blur-xl opacity-60 -z-10" />

          <div
            className="absolute inset-0 rounded-2xl md:hidden pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 10%, black 100%)",
            }}
          />

          <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
            {/* Inner top navigation for the dashboard */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                {/* Sidebar toggle (mobile only) */}
                <button
                  onClick={() => setSidebarOpen((s) => !s)}
                  className="md:hidden p-2 rounded-md bg-gray-900/20"
                  aria-label="Toggle sidebar"
                >
                  {sidebarOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>

                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-200" />
                  <span className="text-white font-medium">Linda Agent</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-800 text-white pl-10 pr-3 py-2 rounded-lg text-sm w-40 md:w-64 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center hidden sm:flex">
                  <Settings className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Desktop sidebar */}
              <aside className="hidden md:block w-64 bg-black border-r border-gray-800 p-4">
                <div className="space-y-3">
                  {menuItems.map((m, i) => (
                    <div
                      key={i}
                      className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Mobile overlay sidebar */}
              {sidebarOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                  <div
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-72 bg-black border-r border-gray-800 p-4 overflow-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">Menu</div>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-2 rounded-md"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <nav className="space-y-2">
                      {menuItems.map((m, i) => (
                        <div
                          key={i}
                          className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer"
                        >
                          {m}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              )}

              {/* Main area */}
              <main className="flex-1 p-4 md:p-6 min-h-[60vh]">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-gray-400 text-sm">Jun 24 → Today</div>
                  <Settings className="w-5 h-5 text-gray-400" />
                </div>
                {/* Responsive columns: stacked on small, side-by-side on md+ */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left column */}
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-xl border border-gray-700 p-5 md:p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-semibold">+ Blinkit</div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-gray-400 text-sm font-medium mb-3">
                          Top Taglines
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200">
                              Get Mascara Delivered in 10 minutes
                            </span>
                            <span className="text-green-400 text-sm">+10%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200">
                              Your mascara in under 10mins
                            </span>
                            <span className="text-green-400 text-sm">
                              +5.2%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200">
                              Smudged, 10mins is all you need
                            </span>
                            <span className="text-red-400 text-sm">-2%</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-gray-400 text-sm font-medium mb-2">
                          Traffic
                        </h4>
                        <div className="flex items-baseline space-x-2 mb-4">
                          <span className="text-3xl font-bold text-white">
                            59.8K
                          </span>
                          <span className="text-green-400 text-sm">+10.7%</span>
                        </div>

                        {/* Chart area - responsive height */}
                        <div className="h-40 sm:h-44 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg relative overflow-hidden">
                          <svg
                            viewBox="0 0 400 120"
                            className="absolute inset-0 w-full h-full"
                          >
                            <defs>
                              <linearGradient
                                id="g"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#8B5CF6"
                                  stopOpacity="0.8"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#8B5CF6"
                                  stopOpacity="0.05"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,80 L50,50 L100,60 L150,40 L200,60 L250,50 L300,80 L350,55 L400,65 L400,120 L0,120 Z"
                              fill="url(#g)"
                            />
                            <path
                              d="M0,80 L50,50 L100,60 L150,40 L200,60 L250,50 L300,80 L350,55 L400,65"
                              fill="none"
                              stroke="#8B5CF6"
                              strokeWidth="2"
                            />
                          </svg>

                          <div className="absolute left-3 top-3 text-xs text-gray-400">
                            60K
                          </div>
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                            40K
                          </div>
                          <div className="absolute left-3 bottom-3 text-xs text-gray-400">
                            20K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column (responsive width) */}
                  <div className="w-full md:w-80">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-70" />

                      <div className="relative bg-gray-900 rounded-xl border border-gray-700 p-5 md:p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold text-white">
                            Get Mascara Delivered in 10 minutes
                          </h3>
                          <button
                            onClick={() => setExpanded((s) => !s)}
                            className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg text-sm transition-colors"
                          >
                            <span>Expand</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                expanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {expanded && (
                          <div className="space-y-3 text-sm text-gray-300">
                            <div>
                              <p className="font-semibold text-white mb-1">
                                • Top-Selling Mascara SKUs
                              </p>
                              <div className="space-y-1 ml-3">
                                <p>
                                  1. Maybelline Lash Sensational - 1,120 orders
                                </p>
                                <p>2. Lakme Eyeconic Curling - 945 orders</p>
                                <p>
                                  3. L'Oréal Voluminous Lash Paradise - 832
                                  orders
                                </p>
                              </div>
                            </div>
                            <div className="text-xs">
                              <span className="font-medium">
                                Ad Impressions:
                              </span>{" "}
                              1.2M •{" "}
                              <span className="font-medium">Clicks:</span> 95K •{" "}
                              <span className="font-medium">Checkouts:</span>{" "}
                              6,200 •{" "}
                              <span className="font-medium">Delivered:</span>{" "}
                              5,840
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end responsive columns */}
              </main>
            </div>
          </div>
        </div>

        <Sponsors />
      </main>

      <Footer />
    </>
  );
}
