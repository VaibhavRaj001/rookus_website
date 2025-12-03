"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-8 md:py-16">
      <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] md:text-[clamp(1.25rem,2vw,2.5rem)] font-bold text-white mb-8 z-10 text-center sm:text-left">
        Integrated with the tools you already use
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        renderItem={(item, { isMoving }) => (
          <div className="p-6 bg-white/5 rounded-md text-white max-w-md">
            {/* always show image while debugging */}
            {item.image && (
              <img
                src={item.image}
                alt={item.name || "img1"}
                className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-white"
              />
            )}
            <p className="text-sm mb-3">{item.quote}</p>
            <div className="text-xs opacity-70">
              <strong>{item.name}</strong> — {item.title}
            </div>
          </div>
        )}
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/linkedin.png",
  },
  {
    image: "/shopify.png",
  },
  {
    image: "/hubspot.png",
  },
  {
    image: "/openai.png",
  },
  {
    image: "/meta.png",
  },
];
