"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Languages } from "lucide-react";

const curators = [
  {
    name: "Jair",
    specialty: "Historical Roças & Architecture",
    bio: "A deep-rooted islander with an encyclopedic knowledge of the colonial cocoa era. Jair doesn't just show you places; he narrates the soul of the islands.",
    languages: "English, Portuguese, French",
    status: "Verified Advocate Partner",
    insurance: "Public Liability Insured",
    lastAudit: "JAN 2026",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  },
  {
    name: "Edmilson",
    specialty: "Botany & Endemic Wildlife",
    bio: "Our lead explorer for the Obô Natural Park. Edmilson is the bridge between the traveler and the silent secrets of the jungle.",
    languages: "English, Portuguese",
    status: "Verified Advocate Partner",
    insurance: "Public Liability Insured",
    lastAudit: "FEB 2026",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
];

export default function CuratorsPage() {
  return (
    <main className="flex-1 p-8 md:p-16 bg-[#F4F1EA]">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          The Audited Circle
        </span>
        <h1 className="font-serif text-5xl mt-2 italic text-[#1A3C34]">
          Vetted Curators
        </h1>
        <p className="text-[10px] uppercase tracking-widest mt-6 opacity-70 max-w-lg leading-loose text-[#1A3C34]">
          Our Circle is strictly invitation-only. Every curator undergoes a
          rigorous audit covering public liability insurance, local licensing,
          and emergency protocols. We ensure professional standards in an
          unpredictable landscape.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-20">
        {curators.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-[#1A3C34]/10 mb-8 bg-[#1A3C34]">
              <div
                className="w-full h-full bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${guide.image})` }}
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="text-[8px] uppercase tracking-widest bg-[#1A3C34] text-[#F4F1EA] px-3 py-1 border border-white/10">
                  {guide.status}
                </span>
                <span className="text-[8px] uppercase tracking-widest bg-[#D4B996] text-[#1A3C34] px-3 py-1 font-bold">
                  {guide.insurance}
                </span>
              </div>
            </div>

            <div className="space-y-5 text-[#1A3C34]">
              <div className="flex justify-between items-end border-b border-[#1A3C34]/10 pb-4">
                <h3 className="font-serif text-4xl italic">{guide.name}</h3>
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-1">
                    Last Audit
                  </p>
                  <p className="text-[10px] font-sans tracking-widest text-[#D4B996]">
                    {guide.lastAudit}
                  </p>
                </div>
              </div>

              <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#D4B996]">
                {guide.specialty}
              </p>

              <p className="text-sm font-light leading-relaxed opacity-80 italic font-serif">
                "{guide.bio}"
              </p>

              <div className="pt-6 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <Languages size={14} className="opacity-40" />
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                      Fluency
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.1em]">
                      {guide.languages}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={14} className="text-[#D4B996]" />
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1 font-bold">
                      Pricing Model
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.1em] font-bold">
                      Direct Settlement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 p-16 bg-[#1A3C34] text-[#F4F1EA] text-center border-l-4 border-[#D4B996]">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-2xl italic mb-8">
            "Your advocacy fee ensures total impartiality. By removing
            commission-based incentives, we focus solely on matching you with
            premium expertise at true net rates."
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-[#D4B996]/40" />
            <ShieldCheck className="text-[#D4B996]" size={20} />
            <div className="h-[1px] w-8 bg-[#D4B996]/40" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-40 leading-loose">
            Impartial Advice • Verified Local Assets • Zero Commission
          </p>
        </div>
      </section>
    </main>
  );
}
