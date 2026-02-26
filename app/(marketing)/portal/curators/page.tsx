"use client";

import { motion } from "framer-motion";

/**
 * CuratorsPage Component
 * * Updated to reflect:
 * 1. The Audit Process (Insurance & Licenses verified via Partner Dashboard)
 * 2. The Net Cost Model (Client pays the provider directly at local rates)
 * 3. The Professional Advocacy Role (£150 fee justification)
 */

const curators = [
  {
    name: "Jair",
    specialty: "Historical Roças & Architecture",
    bio: "A deep-rooted islander with an encyclopedic knowledge of the colonial cocoa era. Jair doesn't just show you places; he narrates the soul of the islands.",
    languages: "English, Portuguese, French",
    status: "Verified Advocate Partner",
    insurance: "Public Liability Insured",
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
        <h1 className="font-serif text-4xl mt-2 italic text-[#1A3C34]">
          Your Island Curators
        </h1>
        <p className="text-[10px] uppercase tracking-widest mt-4 opacity-70 max-w-md leading-relaxed text-[#1A3C34]">
          We provide a professional audit of every partner. Beyond expertise, we
          verify insurance, local licenses, and safety standards to ensure your
          peace of mind.
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
            {/* Image Container with Desaturated Finish */}
            <div className="relative aspect-[3/4] overflow-hidden border border-[#1A3C34]/10 mb-6">
              <div
                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${guide.image})` }}
              />
              {/* Status Badge Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="text-[7px] uppercase tracking-widest bg-[#1A3C34] text-[#F4F1EA] px-2 py-1">
                  {guide.status}
                </span>
                <span className="text-[7px] uppercase tracking-widest bg-[#D4B996] text-[#1A3C34] px-2 py-1 font-bold">
                  {guide.insurance}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-[#1A3C34]">
              <div className="flex justify-between items-end">
                <h3 className="font-serif text-3xl italic">{guide.name}</h3>
                <span className="text-[8px] uppercase tracking-widest opacity-60 border-b border-[#1A3C34]/30 pb-1">
                  Net Cost Service
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996]">
                {guide.specialty}
              </p>

              <p className="text-xs font-light leading-relaxed opacity-80 italic">
                "{guide.bio}"
              </p>

              <div className="pt-4 border-t border-[#1A3C34]/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1 font-bold text-[#1A3C34]">
                    Fluency
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.1em]">
                    {guide.languages}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1 font-bold text-[#1A3C34]">
                    Booking Model
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.1em]">
                    Direct Settlement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust & Transparency Footer */}
      <section className="mt-24 p-12 bg-[#1A3C34] text-[#F4F1EA] text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-serif text-xl italic mb-6">
            "Your £150 advocacy fee covers our auditing process, safety
            verification, and logistical bridge. You pay our partners their
            local net rates directly."
          </p>
          <div className="h-[1px] w-12 bg-[#D4B996] mx-auto mb-6" />
          <p className="text-[8px] uppercase tracking-[0.4em] opacity-60 leading-loose">
            Impartial Advice. <br />
            Verified Local Experts. <br />
            No Commission.
          </p>
        </div>
      </section>
    </main>
  );
}
