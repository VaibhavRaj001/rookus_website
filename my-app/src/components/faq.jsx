import React, { useState } from "react";

const FAQ_QUESTIONS = [
  {
    q: "What exactly is Rookus, and how does it speed up my campaigns?",
    a: "Rookus is the AI-powered platform that transforms end-to-end campaign management. It accelerates your workflow by operating as a multi-agent team (Linda, Mike, Emelie), automating the creative and execution pipeline from concept to launch. This process cuts the manual effort that causes bottlenecks, resulting in up to 50% faster campaign production.",
  },
  {
    q: "How is Rookus better than just using Canva/Figma for design and ChatGPT for copy?",
    a: "Traditional tools require you to manually connect separate outputs. Rookus is a unified, enterprise-grade solution that combines analytics, automation, and workforce efficiency in one platform. Unlike the competition, Rookus offers Full-Funnel Analytics with integrated promotion tracking and SEO analytics, plus Zero-Shot Optimization through our Customer Feedback Reasoning Model (CFRM) that automatically adapts creatives based on live metrics.",
  },
  {
    q: "What kind of measurable ROI can I expect from Rookus?",
    a: "The financial impact is significant. On average, clients see a $5.44 return for every $1 invested. This ROI is achieved by reducing operational costs by 25-35% and cutting the workforce time required for campaigns by 40% to 60%.",
  },
  {
    q: "How does the AI guarantee my creative stays on-brand and high-quality?",
    a: "The platform uses an in-house agentic layer that is custom-trained on your multi-modal data and brand guidelines. The Emelie Agent is designed to handle on-brand visuals and palettes, and our system includes ethical checks for copyright and safety, especially in high-risk verticals.",
  },
  {
    q: "How does Rookus use data to improve targeting?",
    a: "We go beyond basic demographics. We use powerful technologies like ClickHouse for structured data storage and Pinecone for semantic understanding of patterns and behavior. This enables our AI to run OLAP-powered campaign intelligence to instantly scrape insights and detect personas to create hyper-targeted campaigns.",
  },
  {
    q: "What tools does Rookus integrate with?",
    a: "Rookus is built for seamless workflow integration. You can run sales campaigns directly using HubSpot integration and use plugins for creative tools like Figma, Canva, and PowerPoint. Our modular architecture and open APIs also allow for deep enterprise integration across your value chain.",
  },
];

const PlusIcon = ({ open }) => (
  <span className={
    `inline-block mr-4 transition-transform duration-200 ${open ? "rotate-45" : ""}`
  } aria-hidden>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="9" y1="3" x2="9" y2="15" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="3" y1="9" x2="15" y2="9" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  </span>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-4 relative flex flex-col md:flex-row gap-12 justify-center items-stretch">
      {/* Left Side: Heading */}
      <div className="flex-1 flex flex-col md:items-start items-center md:mb-0 mb-8">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white text-left md:ml-50">
          Frequently asked<br />questions
        </h2>
      </div>
      {/* Right Side: FAQ List */}
      <div className="flex-1 min-w-[290px] max-w-xl w-full">
        <ul className="space-y-2 w-full">
          {FAQ_QUESTIONS.map((item, i) => (
            <li key={item.q} className="w-full border-b border-white/10">
              <button
                className="flex items-center w-full py-5 px-1 text-left focus:outline-none"
                onClick={() => handleToggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
              >
                <PlusIcon open={openIndex === i} />
                <span className="text-lg md:text-xl font-medium text-white">
                  {item.q}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`transition-all overflow-hidden duration-700 ease-in-out text-sm text-gray-300 px-8 pb-3 ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                {openIndex === i && (
                  <span>{item.a}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
