import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-black text-white py-20 flex flex-col items-center z-25">
      <h2 className="text-5xl font-bold text-center mb-6">Our Testimonials</h2>
      <p className="text-xl text-center text-gray-200 mb-16">
        Here is what Industry experts think about<br />Rookus
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl border-t border-b border-gray-700 py-12">
        {/* Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            src="/aroop_zutsi.png"
            alt="Aroop Zutshi"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </div>
        {/* Testimonial Text */}
        <div className="max-w-xl">
          <p className="text-2xl md:text-3xl font-medium mb-8 leading-snug">
            Rookus automation stack has potential to automate thought leadership and ethos.
          </p>
          <div>
            <div className="font-semibold text-lg">Aroop Zutshi</div>
            <div className="text-gray-400 text-base">
              Global Leader@ Frost and Sullivan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;