import React, { useState } from "react";
import Waitlist from "./waitlist";

const CTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <section className="relative w-full py-20 md:py-32 flex flex-col justify-center items-center bg-black overflow-hidden">
        {/* Pink radial glow */}
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-b-full bg-pink-500 blur-[150px] pointer-events-none"></div>

        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"></div>

        {/* Content container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
            <div className="text-center lg:text-left">
              {/* Main heading */}
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Get more from your marketing
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  with Rookus
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mx-auto mt-4 text-base text-gray-300 md:mt-6 md:text-lg lg:mx-0 lg:max-w-md">
                Smarter optimization. Real results. Your campaigns, accelerated by AI.
              </p>

              {/* CTA form */}
              <form
                onSubmit={handleJoinWaitlist}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-base text-white placeholder-gray-400 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 sm:w-80"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-200 shadow-md hover:bg-gray-100 hover:shadow-lg sm:w-auto"
                >
                  Join Waitlist
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-400 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
                <span>✓ Free to join</span>
                <span className="hidden sm:inline">•</span>
                <span>✓ 7-day free trial</span>
                <span className="hidden sm:inline">•</span>
                <span>✓ No credit card required</span>
              </div>
            </div>

            {/* Stats row - horizontal scroll on mobile, aligned top on desktop */}
            <div className="flex w-full items-stretch gap-6 overflow-x-auto pb-2 md:justify-center md:overflow-visible lg:justify-end lg:pb-0">
              <div className="min-w-[200px] flex-1 rounded-xl border border-gray-800/50 bg-gray-900/40 p-6 text-left backdrop-blur-sm lg:max-w-[220px]">
                <div className="text-3xl font-bold text-white md:text-4xl">10k+</div>
                <p className="mt-2 text-sm text-gray-400">Active Users</p>
              </div>
              <div className="min-w-[200px] flex-1 rounded-xl border border-gray-800/50 bg-gray-900/40 p-6 text-left backdrop-blur-sm lg:max-w-[220px]">
                <div className="text-3xl font-bold text-white md:text-4xl">95%</div>
                <p className="mt-2 text-sm text-gray-400">Success Rate</p>
              </div>
              <div className="min-w-[200px] flex-1 rounded-xl border border-gray-800/50 bg-gray-900/40 p-6 text-left backdrop-blur-sm lg:max-w-[220px]">
                <div className="text-3xl font-bold text-white md:text-4xl">3x</div>
                <p className="mt-2 text-sm text-gray-400">ROI Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Waitlist
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
};

export default CTA;
