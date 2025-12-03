"use client";

export default function Sponsors() {
  const sponsors = [
    { src: "/serri.png", alt: "Serri" },
    { src: "/sponsor2.png", alt: "Sponsor 2" },
    { src: "/idfc.png", alt: "IDFC FIRST Bank" },
    { src: "/image.png", alt: "Sponsor 4" },
  ];

  return (
    <section className="w-screen bg-black py-4 md:py-8 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm sm:text-base text-gray-400 mb-6 text-center">
          Supported by the best mentors and leaders from
        </p>

        {/* Responsive grid: 2 cols on small screens, 4 on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 items-center">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-3 rounded-lg bg-gray-900/40 hover:scale-105 transform-gpu transition duration-200"
              aria-label={`Sponsor: ${s.alt}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
