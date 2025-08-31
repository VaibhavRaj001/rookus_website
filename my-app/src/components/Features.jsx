import React from "react";
import {
  LayoutDashboard,
  Pencil,
  Wand2,
  FileText,
  Layers,
  Bell,
  BarChart2,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const dashboardFeatures = [
  {
    img: "/dashboard-1.png",
    title: "Create Campaign Taglines,Scripts and track how well they perform",
    desc: "This project creates and tests campaign taglines and scripts for ads, emails, and landing pages. Variants are tracked with UTM parameters and A/B testing across platforms like Google Analytics or Meta Ads, measuring CTR, CVR, CPA, and engagement to identify top performers and optimize ROI.",
  },
  {
    img: "/dashboard-2.png",
    title: "Review and edit",
    desc: "Performs complex editing tasks with SOTA human in the loop. Edit and review your content with advanced AI tools and human-in-the-loop workflows for maximum quality and compliance.",
  },
  {
    img: "/dashboard-3.png",
    title: "Smart CTA automation",
    desc: "Creates custom action items for you to manage your tasks. Automate your call-to-actions and task management with intelligent recommendations tailored to your campaign goals.",
  },
];

const featureList = [
  {
    icon: <LayoutDashboard size={18} className="mr-2" />,
    title: "User-friendly dashboard",
    desc: "Track Campaign Analytics and Performance With Mike.",
  },
  {
    icon: <FileText size={18} className="mr-2" />,
    title: "Content evaluation",
    desc: "Simple corrections for immediate improvements.",
  },
  {
    icon: <Layers size={18} className="mr-2" />,
    title: "On premise Integration",
    desc: "Integrate your User Docs,Sheets,One drive and pdf with secure integration.",
  },
  {
    icon: <BarChart2 size={18} className="mr-2" />,
    title: "Generation Layer",
    desc: "Generate emails, push notifications,visual content,lead messages with Emelie.",
  },
  {
    icon: <Pencil size={18} className="mr-2" />,
    title: "Review and edit",
    desc: "Performs complex editing tasks with SOTA human in the loop.",
  },
  {
    icon: <Wand2 size={18} className="mr-2" />,
    title: "Smart CTA automation",
    desc: "Creates custom action items for you to manage your tasks.",
  },
  {
    icon: <Bell size={18} className="mr-2" />,
    title: "Automated alerts",
    desc: "Automatic notifications about your Campaign health, including quick fixes.",
  },
  {
    icon: <Users size={18} className="mr-2" />,
    title: "Competitor reports",
    desc: "Provides deep research and analysis on competitor insights.",
  },
];

const Features = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#1a0822] via-[#1a0822] to-[#1a0822] py-24 px-4 flex flex-col items-center relative">
      {/* Dashboard Images with Text */}
      <div className="flex flex-col gap-24 items-center w-full mb-24">
        {dashboardFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl"
          >
            {/* Image */}
            <div
              className="relative rounded-xl overflow-hidden shadow-[0_0_40px_0_rgba(192,77,234,0.3)]"
              style={{
                background: "#181824",
                width: 600,
                maxWidth: "100%",
                height: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover rounded-xl"
                style={{ boxShadow: "0 0 40px 0 rgba(192,77,234,0.3)" }}
              />
            </div>
            {/* Text */}
            <div className="md:w-[340px] w-full flex flex-col items-start">
              <div className="text-2xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "inherit", lineHeight: "1.1" }}>
                {feature.title}
              </div>
              <div className="text-base text-gray-300 leading-relaxed">
                {feature.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-white text-2xl font-semibold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl w-full mb-20">
          <div className="flex flex-col gap-8">
            {featureList.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center mb-1 text-white font-semibold text-base">
                  {feature.icon}
                  {feature.title}
                </div>
                <div className="text-sm text-gray-300">{feature.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {featureList.slice(4).map((feature, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center mb-1 text-white font-semibold text-base">
                  {feature.icon}
                  {feature.title}
                </div>
                <div className="text-sm text-gray-300">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Section */}
        <div className="flex flex-col items-center mt-10 mb-4">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheck size={48} className="text-white" />
            <div className="flex ml-4 gap-2">
              {[...Array(8)].map((_, i) => (
                <Sparkles key={i} size={24} className="text-purple-400" />
              ))}
            </div>
          </div>
          <div className="text-white text-lg font-bold text-center leading-tight">
            Global Level Compliance Security<br />
            GDPR ,HISAA and ISO/IEC 270001
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;