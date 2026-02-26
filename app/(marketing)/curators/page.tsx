"use client";

import { motion } from "framer-motion";

/**
 * Curators Component
 * * Purpose: Showcase vetted local experts.
 * * UX: Features "Audited" badges to justify the £150 fee.
 */

const curators = [
  {
    name: "Jair",
    specialty: "History & Roças",
    bio: "The island's memory. Jair specializes in the complex heritage of the cocoa era and the preservation of Santomean identity.",
    status: "Vetted Advocate",
    insurance: "Public Liability Verified",
  },
  {
    name: "Edmilson",
    specialty: "Botany & Jungle",
    bio: "The guardian of the Obô. A master tracker and botanical expert for deep rainforest expeditions.",
    status: "Vetted Advocate",
    insurance: "Public Liability Verified",
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
              {/* Image Placeholder with Security Badges */}
              <div className="relative aspect-[4/5] bg-[#F4F1EA] mb-8 overflow-hidden">
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                  <span className="bg-[#1A3C34] text-[#F4F1EA] text-[7px] uppercase tracking-widest px-3 py-1">
                    {guide.status}
                  </span>
                  <span className="bg-[#D4B996] text-[#1A3C34] text-[7px] uppercase tracking-widest px-3 py-1 font-bold">
                    {guide.insurance}
                  </span>
                </div>
                {/* Image would go here */}
                <div className="w-full h-full bg-[#1A3C34]/5 group-hover:bg-[#1A3C34]/10 transition-colors duration-700" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-3xl italic text-[#1A3C34]">
                    {guide.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest opacity-40">
                    Specialist
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996]">
                  {guide.specialty}
                </p>
                <p className="text-xs font-light leading-relaxed text-[#1A3C34]/70 italic">
                  "{guide.bio}"
                </p>
                <div className="pt-6 border-t border-[#1A3C34]/10 flex justify-between items-center">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#1A3C34]">
                    Direct Settlement Enabled
                  </span>
                  <div
                    className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
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
