"use client";

import { motion } from "framer-motion";

/**
 * Curators Component
 * Purpose: Showcase vetted local experts with high-end editorial imagery.
 */

const curators = [
  {
    name: "Jair",
    specialty: "History & Roças",
    bio: "The island's memory. Jair specializes in the complex heritage of the cocoa era and the preservation of Santomean identity.",
    status: "Vetted Advocate",
    insurance: "Public Liability Verified",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    name: "Edmilson",
    specialty: "Botany & Jungle",
    bio: "The guardian of the Obô. A master tracker and botanical expert for deep rainforest expeditions.",
    status: "Vetted Advocate",
    insurance: "Public Liability Verified",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

export default function Curators() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            The Inner Circle
          </span>
          <h2 className="font-serif text-5xl mt-4 italic text-[#1A3C34]">
            Vetted Local Experts
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-20">
          {curators.map((guide, i) => (
            <div key={i} className="group">
              {/* Image Container with Security Badges */}
              <div className="relative aspect-[4/5] bg-[#F4F1EA] mb-8 overflow-hidden shadow-2xl">
                {/* Status Badges Overlay */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-[#1A3C34] text-[#F4F1EA] text-[7px] uppercase tracking-widest px-3 py-1"
                  >
                    {guide.status}
                  </motion.span>
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#D4B996] text-[#1A3C34] text-[7px] uppercase tracking-widest px-3 py-1 font-bold"
                  >
                    {guide.insurance}
                  </motion.span>
                </div>

                {/* Curator Image */}
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />

                {/* Subtle dark overlay for legibility of top badges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-[#1A3C34]/5 pb-2">
                  <h3 className="font-serif text-3xl italic text-[#1A3C34]">
                    {guide.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold">
                    Specialist
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996]">
                  {guide.specialty}
                </p>
                <p className="text-xs font-light leading-relaxed text-[#1A3C34]/70 italic min-h-[40px]">
                  "{guide.bio}"
                </p>

                <div className="pt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#1A3C34]">
                      Direct Settlement Enabled
                    </span>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    title="Active Partner"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
