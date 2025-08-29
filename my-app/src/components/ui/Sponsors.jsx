"use client";

export default function Sponsors() {
  return (
    <section className="w-screen flex flex-col items-center z-10 bg-black py-8">
      <p className="text-s text-gray-400 mb-6">
        Supported by the Best mentors and Leaders from
      </p>
      <div className="flex justify-center space-x-20">
        <div className="h-24 flex items-center justify-center">
          <img src="/serri.png" alt="Sponsor 1" className="max-h-full object-contain" />
        </div>
        <div className="h-24 flex items-center justify-center">
          <img src="/sponsor2.png" alt="Sponsor 2" className="max-h-full object-contain" />
        </div>
        <div className="h-24 flex items-center justify-center">
          <img src="/idfc.png" alt="Sponsor 3" className="max-h-full object-contain" />
        </div>
        <div className="h-24 flex items-center justify-center">
          <img src="/image.png" alt="Sponsor 4" className="max-h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
