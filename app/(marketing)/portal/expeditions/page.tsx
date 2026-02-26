"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allExpeditions = [
  {
    id: 1,
    category: "Heritage",
    title: "The Colonial Echoes of Roça Agostinho Neto",
    duration: "1 Day",
    description:
      "Explore the architectural grandeur and the complex history of one of the largest roças in the archipelago.",
    image: "/images_1.png",
  },
  {
    id: 2,
    category: "Culture",
    title: "Ancestral Cacao & The Curator's Table",
    duration: "2 Days",
    description:
      "A sensory journey through the chocolate cycle, from the volcanic soil to the master's fermentation house.",
    image: "/images_2.png",
  },
  {
    id: 3,
    category: "Nature",
    title: "Emerald Lagoons & Sacred Waters",
    duration: "1 Day",
    description:
      "Navigate the crystalline lagoons of the south, where the rainforest meets the Atlantic in total silence.",
    image: "/images_3.png",
  },
];

export default function ExpeditionsGallery() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34]">
      {/* Navigation Simples */}
      <nav className="p-8 flex justify-between items-center bg-white/30 backdrop-blur-md sticky top-0 z-50">
        <Link href="/portal" className="font-serif text-xl">
          Pure São Tomé
        </Link>
        <Link
          href="/portal/logistics"
          className="text-[10px] uppercase tracking-widest font-bold border border-[#1A3C34] px-6 py-2 hover:bg-[#1A3C34] hover:text-[#F4F1EA] transition-all"
        >
          My Dashboard
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-20">
          <span className="text-[#D4B996] text-[10px] uppercase tracking-[0.4em] font-bold">
            The Complete Catalog
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 italic">
            The Archipelago's <br /> Guarded Secrets
          </h1>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allExpeditions.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full border-b border-[#1A3C34]/10 pb-8"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-200 mb-6 relative group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                />
                <div className="absolute top-4 right-4 bg-[#F4F1EA] px-3 py-1 text-[8px] uppercase tracking-widest">
                  {exp.category}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="font-serif text-2xl mb-2">{exp.title}</h3>
                <p className="text-xs text-[#1A3C34]/60 font-light mb-4 leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest italic">
                  {exp.duration}
                </span>
              </div>

              {/* Botão para Dashboard sem conversa direta */}
              <button
                className="mt-8 w-full py-4 border border-[#1A3C34]/20 text-[9px] uppercase tracking-[0.2em] hover:bg-[#1A3C34] hover:text-[#F4F1EA] transition-all font-bold"
                onClick={() =>
                  alert(
                    `Redirecting to Dashboard to select your Guide for: ${exp.title}`,
                  )
                }
              >
                Incorporate into Itinerary
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
