"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DistillationLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [textIndex, setTextIndex] = useState(0);

  // Phrases that evoke a mystical and artisanal process
  const phrases = [
    "Distilling your essence...",
    "Analyzing archetypal patterns...",
    "Curating your private collection...",
    "Unlocking the archipelago's secrets...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    // Simulate total loading time (e.g., 8 seconds) before redirecting to the portal
    const totalTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(totalTimer);
    };
  }, [onComplete, phrases.length]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#F4F1EA] flex flex-col items-center justify-center overflow-hidden">
      {/* Central Visual Element: A minimalist "drop" or circle that pulses */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.8, 1.5 + i * 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute border border-[#1A3C34] rounded-full w-64 h-64"
          />
        ))}

        {/* Central Point (The Essence) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-[#1A3C34] rounded-full z-10"
        />
      </div>

      {/* Dynamic Text */}
      <div className="mt-24 text-center h-8">
        <motion.p
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#1A3C34] font-light"
        >
          {phrases[textIndex]}
        </motion.p>
      </div>

      {/* Near-invisible Progress Bar (Luxury is in the subtlety) */}
      <div className="absolute bottom-20 w-32 h-[1px] bg-gray-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-[#D4B996]"
        />
      </div>

      {/* Grain Effect Overlay for a paper/premium texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
