import React, { useState } from "react";

const FAQ_QUESTIONS = [
  {
    q: "What is the purpose of this website?",
    a: "This website provides information and services to help users find the best products and manage their orders with ease.",
  },
  {
    q: "How do I contact support?",
    a: "You can contact our support team via the contact form on the Support page or by emailing support@example.com.",
  },
  {
    q: "How do I find the best products?",
    a: "Browse the Products section, use the filters, and check reviews to find products that suit your needs.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, you can return products within 30 days of delivery. Please refer to our Return Policy for more details.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship to many countries worldwide. Shipping fees and times may vary by location.",
  },
  {
    q: "How can I track my order?",
    a: "After your order is shipped, you will receive a tracking number via email along with a link to track your package.",
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
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white text-left">
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
                className={`transition-max-h overflow-hidden duration-300 ease-in-out text-base text-gray-300 px-8 pb-3 ${openIndex === i ? "max-h-48" : "max-h-0"}`}
                style={{ maxHeight: openIndex === i ? '400px' : '0' }}
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
