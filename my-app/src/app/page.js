/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Target,
  ShieldCheck,
  Cpu,
  Zap,
  BarChart3,
  ArrowRight,
  ChevronDown,
  Search,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react";
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
import { BentoCards } from "@/components/BentoCards";
import Features from "@/components/features-3";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/ui/Footer";
import Waitlist from "@/components/waitlist";
import Integrations from "@/components/Integrations";
import FAQ from "../components/faq";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
    setMobileOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const updateBreakpoint = () => {
      if (typeof window === "undefined") return;
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const navItems = [
    { name: "Sponsors", link: "sponsors" },
    { name: "Research", link: "research" },
    { name: "Features", link: "features" },
    { name: "Pricing", link: "pricing" },
  ];

  const menuItems = [
    "Campaign Brief",
    "Copy Generation (Linda)",
    "Data Layer",
    "Campaign Score (Mike)",
    "Script Direction (Emelie)",
    "Campaign CTA (Joshua)",
    "Generation Layer",
    "The HIVE MIND (Rookus)",
  ];

  const metrics = [
    {
      label: "Data Sources and COnncetors",
      value: "20+",
      helper: "and growing",
      detail: "Seamless integrations with your existing tools",
    },
    {
      label: "Automation Pipelines",
      value: "100+",
      helper: "pre-built",
      detail: "Ready-to-deploy workflows for common marketing tasks",
    },
    {
      label: "Average Lift",
      value: "18%",
      helper: "multi-channel",
      detail: "Attribution-ready insights on every run",
    },
    {
      label: "Hours Saved Weekly",
      value: "42",
      helper: "team wide",
      detail: "Automation reduces approvals and rework",
    },
  ];

  const assistantModules = [
    {
      title: "Linda",
      tag: "Copy Intelligence",
      description:
        "Drafts conversion-ready headlines, assets and multi-lingual copy aligned to your brand voice.",
      icon: Sparkles,
      cta: "Preview messaging",
    },
    {
      title: "Mike",
      tag: "Performance Analyst",
      description:
        "Surfaces actionable trends from signals, sentiment and spend to tune every campaign iteration.",
      icon: Target,
      cta: "View diagnostics",
    },
    {
      title: "Emelie",
      tag: "Design Orchestrator",
      description:
        "Auto-adapts visuals to channel specs with instant exports to Figma and your on-brand palette.",
      icon: Cpu,
      cta: "Open design kit",
    },
  ];

  const filteredAssistantModules = isDesktop
    ? assistantModules
    : assistantModules.filter((module) => module.title !== "Linda");

  const workflowSteps = [
    {
      step: "01",
      title: "Connect your brief",
      description:
        "Import GTM docs, media libraries and goals securely from Drive, HubSpot or Slack threads.",
      meta: "~2 min",
    },
    {
      step: "02",
      title: "Train brand intelligence",
      description:
        "Rookus learns tone, guardrails and compliance automatically so every output stays on-message.",
      meta: "auto",
    },
    {
      step: "03",
      title: "Launch adaptive campaigns",
      description:
        "Approve mobile-ready journeys, sync to ad managers, email and CRM in one tap.",
      meta: "<10 min",
    },
  ];

  const highlightCards = [
    {
      title: "Enterprise grade compliance",
      description:
        "SOC2-ready infrastructure, granular permissions and full audit history baked in.",
      icon: ShieldCheck,
    },
    {
      title: "Unified campaign telemetry",
      description:
        "See performance, sentiment and spend in a single mobile dashboard refreshed hourly.",
      icon: BarChart3,
    },
    {
      title: "Adaptive automation",
      description:
        "Agents collaborate in real time and re-route workflows as priorities shift across teams.",
      icon: Zap,
    },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="fixed inset-x-0 top-0 z-50">
          <Navbar className="px-4">
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <NavbarButton 
                onClick={handleJoinWaitlist}
                className="cursor-pointer"
                >
                Join Waitlist
              </NavbarButton>
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
                <div className="flex w-full flex-col px-2 pb-4">
                  {navItems.map((item, idx) => (
                    <ScrollLink
                      key={idx}
                      to={item.link}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className="rounded px-4 py-2 text-gray-300 transition hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                  <NavbarButton
                    onClick={handleJoinWaitlist}
                    className="mt-4 w-full"
                  >
                    Join Waitlist
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>

        {/* Mobile experience */}
        <div className="lg:hidden">
          <div className="relative min-h-screen overflow-hidden pt-24 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 left-1/2 h-[320px] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(192,77,234,0.55)_0%,_transparent_65%)] blur-3xl" />
              <div className="absolute bottom-[-40%] left-1/2 h-[420px] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.35)_0%,_transparent_70%)] blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(148,71,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,71,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            <div className="absolute inset-0 opacity-20">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 1024"
                preserveAspectRatio="xMidYMid slice"
              >
                <circle
                  cx="720"
                  cy="520"
                  r="420"
                  stroke="white"
                  strokeOpacity="0.08"
                  fill="none"
                />
                <circle
                  cx="720"
                  cy="520"
                  r="620"
                  stroke="white"
                  strokeOpacity="0.05"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative z-10 w-full">
              <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-12 px-5">
                <section className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-[0_0_40px_rgba(99,102,241,0.15)] backdrop-blur">
                  <h2 className="mt-4 text-4xl font-semibold leading-tight">
                    Run every launch directly from your phone.
                  </h2>
                  <p className="mt-4 text-base text-gray-300">
                    Rookus compresses creative ops, analytics and approvals into a responsive workspace built for busy GTM teams.
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Keep your brand voice, guardrails and compliance intact while you scale outcomes.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={handleJoinWaitlist}
                      className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                    >
                      Book a mobile demo
                    </button>
                    <ScrollLink
                      to="features"
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
                      onClick={() => setMobileOpen(false)}
                    >
                      Explore capabilities
                      <ArrowRight className="h-4 w-4" />
                    </ScrollLink>
                  </div>
                  <p className="mt-4 text-xs text-gray-400">
                    Powered by the same secure platform trusted by enterprise teams.
                  </p>
                </section>

                <section className="grid grid-cols-1 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/50 px-5 py-6 shadow-[0_18px_40px_rgba(14,14,30,0.45)]"
                    >
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-purple-300">
                        {metric.label}
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-3xl font-semibold text-white">
                          {metric.value}
                        </span>
                        <span className="text-xs text-green-400">
                          {metric.helper}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-400">{metric.detail}</p>
                    </div>
                  ))}
                </section>

                <section className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">
                      AI teammates on standby
                    </h2>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple-300">
                      Always on
                    </span>
                  </div>
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
                    {filteredAssistantModules.map((module) => {
                      const Icon = module.icon;
                      return (
                        <div
                          key={module.title}
                          className="min-w-[240px] snap-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 shadow-[0_12px_30px_rgba(17,17,30,0.45)]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-500/20 p-2 text-purple-300">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400">
                                {module.tag}
                              </p>
                              <h3 className="mt-1 text-base font-semibold text-white">
                                {module.title}
                              </h3>
                            </div>
                          </div>
                          <p className="mt-4 text-sm text-gray-300">
                            {module.description}
                          </p>
                          <div className="mt-5 flex items-center gap-2 text-xs font-medium text-purple-300">
                            <span>{module.cta}</span>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-3xl border border-white/10 bg-white/[0.02] px-5 py-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">
                      Zero-friction mobile workflow
                    </h2>
                    <span className="text-xs text-gray-400">~8 minutes</span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {workflowSteps.map((step, index) => (
                      <div
                        key={step.step}
                        className="flex items-stretch gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <span className="font-mono text-sm text-purple-300">
                            {step.step}
                          </span>
                          {index < workflowSteps.length - 1 && (
                            <div className="mt-2 h-full w-px flex-1 bg-white/10" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-white">
                              {step.title}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {step.meta}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Built for marketing leadership
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      Every capability ships secure and proven for scale.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {highlightCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={card.title}
                          className="rounded-2xl border border-white/10 bg-black/40 px-5 py-5 shadow-[0_12px_30px_rgba(14,14,30,0.45)]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-500/20 p-2 text-purple-300">
                              <Icon className="h-4 w-4" />
                            </div>
                            <h3 className="text-base font-semibold text-white">
                              {card.title}
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-transparent px-6 py-8 text-center shadow-[0_20px_60px_rgba(79,70,229,0.25)]">
                  <h2 className="text-2xl font-semibold text-white">
                    Ready to launch from mobile?
                  </h2>
                  <p className="mt-3 text-sm text-gray-300">
                    Start with a guided strategy session tailored to your pipeline.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={handleJoinWaitlist}
                      className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                    >
                      Book a mobile demo
                    </button>
                    <ScrollLink
                      to="features"
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
                      onClick={() => setMobileOpen(false)}
                    >
                      Explore platform capabilities
                      <ArrowRight className="h-4 w-4" />
                    </ScrollLink>
                  </div>
                  <p className="mt-4 text-xs text-gray-400">
                    No installs. SOC2, GDPR and HIPAA compliant.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop experience */}
        <div className="hidden lg:block">
          <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-black pt-28">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[98%] h-[140%] bg-[radial-gradient(ellipse_at_center,_#C04DEA_0%,_transparent_90%)] blur-3xl opacity-80"></div>
            </div>

            <div className="absolute inset-0 bg-black/10 z-0"></div>
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

            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                AI That Supercharges <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Your Marketing
                </span>
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 max-w-2xl">
                Rookus optimizes and scales your existing campaigns with AI —
                reducing guesswork, improving performance, and driving measurable
                growth.
              </p>
              <p className="mt-2 text-base md:text-lg text-gray-300 max-w-2xl">
                Boost your ROI with intelligent automation
              </p>
              <button
                onClick={handleJoinWaitlist}
                className="mt-6 bg-white text-black px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition cursor-pointer"
              >
                Book a Demo
              </button>
            </section>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-10">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#6D28D9] via-[#A855F7] to-[#6D28D9] blur-xl opacity-60 -z-10" />

              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 10%, black 100%)",
                }}
              />

              <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSidebarOpen((s) => !s)}
                      className="p-2 rounded-md bg-gray-900/20 hidden xl:inline-flex"
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
                        className="bg-gray-800 text-white pl-10 pr-3 py-2 rounded-lg text-sm w-56 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <aside className="w-64 bg-black border-r border-gray-800 p-4">
                    <div className="space-y-3">
                      {menuItems.map((m, i) => (
                        <div
                          key={i}
                          className="text-gray-300 py-2 px-3 hover:bg-gray-800/80 rounded cursor-pointer"
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  </aside>

                  <main className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-gray-400 text-sm">Jun 24 → Today</div>
                      <Settings className="w-5 h-5 text-gray-400" />
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-1">
                        <div className="bg-gray-900/70 rounded-xl border border-gray-800/60 p-6 mb-4">
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

                            <div className="h-40 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg relative overflow-hidden">
                              <svg
                                viewBox="0 0 400 120"
                                className="absolute inset-0 w-full h-full"
                              >
                                <defs>
                                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
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
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                40K
                              </div>
                              <div className="absolute left-3 bottom-3 text-xs text-gray-400">
                                20K
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-80">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-70" />

                          <div className="relative bg-gray-900 rounded-xl border border-gray-700 p-6">
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
                                    <p>1. Maybelline Lash Sensational - 1,120 orders</p>
                                    <p>2. Lakme Eyeconic Curling - 945 orders</p>
                                    <p>3. L'Oréal Voluminous Lash Paradise - 832 orders</p>
                                  </div>
                                </div>
                                <div className="text-xs">
                                  <span className="font-medium">
                                    Ad Impressions:
                                  </span>{" "}
                                  1.2M •{" "}
                                  <span className="font-medium">Clicks:</span> 95K •{" "}
                                  <span className="font-medium">Checkouts:</span> 6,200 •{" "}
                                  <span className="font-medium">Delivered:</span> 5,840
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop experience */}
        <section id="sponsors" className="bg-black">
          <Sponsors />
        </section>

        <section id="research" className="bg-black">
          <Integrations />
        </section>

        <section id="features" className="bg-black">
          <BentoCards />
          <Features />
        </section>

        <section id="pricing" className="bg-black">
          <Pricing />
        </section>
        <FAQ />

        <CTA />
        <Footer />

        <Waitlist
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </main>
    </>
  );
}
