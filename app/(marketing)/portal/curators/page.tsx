"use client";

import { motion } from "framer-motion";

const curators = [
  {
    name: "Jair",
    specialty: "Historical Roças & Architecture",
    bio: "A deep-rooted islander with an encyclopedic knowledge of the colonial cocoa era. Jair doesn't just show you places; he narrates the soul of the islands.",
    languages: "English, Portuguese, French",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    name: "Edmilson",
    specialty: "Botany & Endemic Wildlife",
    bio: "Our lead explorer for the Obô Natural Park. Edmilson is the bridge between the traveler and the silent secrets of the jungle.",
    languages: "English, Portuguese",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

export default function CuratorsPage() {
  return (
    <main className="flex-1 p-8 md:p-16">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          The Inner Circle
        </span>
        <h1 className="font-serif text-4xl mt-2 italic">
          Your Island Curators
        </h1>
        <p className="text-[10px] uppercase tracking-widest mt-4 opacity-60 max-w-md leading-relaxed">
          I have hand-selected these experts. They are not mere guides; they are
          the guardians of the São Tomé experience.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        {curators.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#1A3C34]/10 mb-6">
              <div
                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${guide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="font-serif text-3xl italic">{guide.name}</h3>
                <span className="text-[8px] uppercase tracking-widest border border-[#1A3C34]/20 px-2 py-1">
                  Verified Expert
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996]">
                {guide.specialty}
              </p>

              <p className="text-xs font-light leading-relaxed opacity-80 italic">
                "{guide.bio}"
              </p>

              <div className="pt-4 border-t border-[#1A3C34]/10">
                <p className="text-[9px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                  Linguistic Fluency
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em]">
                  {guide.languages}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mensagem de Consultoria */}
      <section className="mt-24 p-12 bg-[#1A3C34] text-[#F4F1EA] text-center border-t-4 border-[#D4B996]">
        <p className="font-serif text-xl italic mb-4">
          "I will personally match you with the curator that best aligns with
          your travel style."
        </p>
        <p className="text-[9px] uppercase tracking-[0.4em] opacity-60">
          Based on your flight and interest details provided in Step 01.
        </p>
      </section>
    </main>
  );
}
