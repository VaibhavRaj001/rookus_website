import React from "react";
import { Database } from "lucide-react";

export const BentoCards = () => {
  return (
    <section className="w-full bg-black text-white py-4 md:py-16 px-6 flex flex-col items-center relative z-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center max-w-2xl mx-auto mb-8">
        Power your campaigns with a state of the art SuperIntelligence automation stack
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-stretch justify-center">
        
        {/* Left Card */}
        <div className="bg-[#0c0c14] rounded-xl border border-[#ffffff26] p-8 flex flex-col items-center justify-center w-full md:w-1/3 h-[300px] md:h-[400px]">
          <div className="w-20 h-20 flex items-center justify-center bg-[#181824] rounded-xl mb-6">
            <Database size={60} color="#a78bfa" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-white text-center">
            Integrate on-prem data sources
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed text-center">
            On-prem DBs/files, Google Drive/Sheets, S3, BigQuery, Salesforce,
            HubSpot—into one customer profile & events layer.
          </p>
        </div>

        {/* Right Card */}
        <div className="relative rounded-xl overflow-hidden bg-[#0c0c14] border border-[#ffffff26] flex items-end w-full md:w-2/3 h-[300px] md:h-[400px]">
          <img
            src="/dash2.png"
            alt="Dashboard Preview"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.85 }}
          />
          <div className="relative z-10 p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-2 text-white">
              User-friendly dashboard
            </h3>
            <p className="text-sm text-gray-200 max-w-sm">
              Track your regional Campaign analytics on the go and analyse top
              performing sentiments
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none rounded-xl" />
        </div>
      </div>
    </section>
  );
};
