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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Main heading - matching your hero style */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get more from your marketing
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              {" "}
              with Rookus
            </span>
          </h2>

          {/* Subtitle - matching your existing text style */}
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Smarter optimization. Real results. Your campaigns, accelerated by
            AI.
          </p>

          {/* CTA form - matching your hero button style */}
          <form
            onSubmit={handleJoinWaitlist}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 w-full sm:w-80 text-base"
              required
            />

            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto text-base"
            >
              Join Waitlist
            </button>
          </form>

          {/* Trust indicators - simple and clean */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-16">
            <span>✓ Free to join</span>
            <span className="hidden sm:block">•</span>
            <span>✓ 7-day free trial</span>
            <span className="hidden sm:block">•</span>
            <span>✓ No credit card required</span>
          </div>

          {/* Stats section - matching your card design pattern */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10k+
              </div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                95%
              </div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                3x
              </div>
              <div className="text-gray-400 text-sm">ROI Increase</div>
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
