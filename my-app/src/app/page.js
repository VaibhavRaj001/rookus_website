"use client";

import { useState } from "react";
import { ChevronDown, Search, Settings, User } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
} from "../components/ui/Navbar";
import Sponsors from "../components/ui/Sponsors";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <main className="relative min-h-screen flex flex-col items-center text-white overflow-hidden bg-black pt-32">
      {/* Radial Purple Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[80%] h-[120%] bg-[radial-gradient(ellipse_at_center,_#C04DEA_0%,_transparent_90%)] blur-3xl"></div>
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar>
          <NavBody visible={true}>
            <NavbarLogo />
            <NavItems
              items={[
                { name: "Features", link: "/" },
                { name: "Research", link: "/about" },
                { name: "Pricing", link: "/" },
                { name: "Blog", link: "/" },
                { name: "Use Cases", link: "/" },
                // Add more items as needed
              ]}
            />
            <NavbarButton href="/">Join Waitlist</NavbarButton>
          </NavBody>
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

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Empower Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Campaigns
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Enhance your campaigns with AI, where intelligent agents meet secure,
          compliant execution.
        </p>
        <p className="text-lg text-gray-300 max-w-2xl">
          Boost your ROI with intelligent automation
        </p>
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
          Book a Demo
        </button>
      </section>

      {/* Bottom Card */}
      <div className="relative z-10 w-11/12 mx-auto mt-16">
        {/* Gradient Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6D28D9] via-[#A855F7] to-[#6D28D9] blur-xl opacity-80 -z-10"></div>

        <div className="min-h-screen bg-black text-white">
          {/* Top Navigation */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="text-white font-medium">Linda Agent</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg text-sm w-64 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-black border-r border-gray-800 min-h-screen p-4">
              <div className="space-y-3">
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Campaign Brief
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Copy Generation(Linda)
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Data Layer
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Campaign Score(Mike)
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Script Direction(Emelie)
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  Campaign CTA(Joshua)
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer ml-6">
                  Generation Layer
                </div>
                <div className="text-gray-300 py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">
                  The HIVE MIND(Rookius)
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Header with date */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>Jun 24 → Today</span>
                </div>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex space-x-6">
                {/* Left Column */}
                <div className="flex-1">
                  {/* Blinkit Card */}
                  <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-lg font-semibold">+ Blinkit</span>
                    </div>

                    {/* Top Taglines */}
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
                          <span className="text-green-400 text-sm">+5.2%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200">
                            Smudged, 10mins is all you need
                          </span>
                          <span className="text-red-400 text-sm">-2%</span>
                        </div>
                      </div>
                    </div>

                    {/* Traffic Section */}
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

                      {/* Chart */}
                      <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg relative overflow-hidden">
                        <svg
                          viewBox="0 0 400 100"
                          className="absolute inset-0 w-full h-full"
                        >
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#8B5CF6"
                                stopOpacity="0.8"
                              />
                              <stop
                                offset="100%"
                                stopColor="#8B5CF6"
                                stopOpacity="0.1"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,70 L50,45 L100,55 L150,35 L200,50 L250,40 L300,65 L350,45 L400,55 L400,100 L0,100 Z"
                            fill="url(#gradient)"
                          />
                          <path
                            d="M0,70 L50,45 L100,55 L150,35 L200,50 L250,40 L300,65 L350,45 L400,55"
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth="2"
                          />
                        </svg>
                        {/* Y-axis labels */}
                        <div className="absolute left-2 top-2 text-xs text-gray-400">
                          60K
                        </div>
                        <div className="absolute left-2 top-1/2 text-xs text-gray-400">
                          40K
                        </div>
                        <div className="absolute left-2 bottom-2 text-xs text-gray-400">
                          20K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-80">
                  {/* Expandable Card */}
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-75"></div>

                    <div className="relative bg-gray-900 rounded-xl border border-gray-700 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">
                          Get Mascara Delivered in 10 minutes
                        </h3>
                        <button
                          onClick={() => setExpanded(!expanded)}
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
                        <div className="space-y-4 text-sm text-gray-300">
                          <div>
                            <p className="font-semibold text-white mb-2">
                              • Top-Selling Mascara SKUs
                            </p>
                            <div className="space-y-1 ml-4">
                              <p>
                                1. Maybelline Lash Sensational - 1,120 orders
                              </p>
                              <p>2. Lakme Eyeconic Curling - 945 orders</p>
                              <p>
                                3. L'Oréal Voluminous Lash Paradise - 832 orders
                              </p>
                            </div>
                          </div>
                          <div className="text-xs">
                            <span className="font-medium">Ad Impressions:</span>{" "}
                            1.2M • <span className="font-medium">Clicks:</span>{" "}
                            95K •{" "}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sponsors />
    </main>
  );
}
