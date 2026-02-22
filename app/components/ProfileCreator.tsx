"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MetaData } from "@/lib/services/metadata-service";

const PROFILE_WEIGHTS: Record<string, number> = {
  "the-rare-explorer": 1.2,
  "the-heritage-collector": 1.1,
  "the-tropical-minimalist": 1.0,
};

export default function ProfileCreator({
  initialMetadata,
}: {
  initialMetadata: MetaData;
}) {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const toggleTag = (id: number) => {
    setSelectedTags((prev) =>
      prev.includes(id)
        ? prev.filter((t) => t !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev,
    );
  };

  const finalProfile = useMemo(() => {
    if (selectedTags.length < 3) return null;

    const scored = initialMetadata.profile_types.map((profile: any) => {
      const matchCount = profile.profile_tags.filter((pt: any) =>
        selectedTags.includes(pt.bespoke_tag.id),
      ).length;

      return {
        ...profile,
        score: matchCount * (PROFILE_WEIGHTS[profile.slug] || 1.0),
      };
    });

    return scored.sort((a: any, b: any) => b.score - a.score)[0];
  }, [selectedTags, initialMetadata.profile_types]);

  const handleSave = async () => {
    setIsSaving(true);
    // Add your actual [Next.js Server Action](https://nextjs.org) or API call here
    await new Promise((res) => setTimeout(res, 2000));
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] selection:bg-[#D4B996]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4B996] uppercase tracking-[0.4em] text-[10px] font-bold">
              Bespoke Profiling
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-tight italic">
              Define your <br /> unfiltered essence.
            </h1>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-8">
              Select 3 archetypal elements
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {initialMetadata.bespoke_tags.map((tag: any) => {
                const isActive = selectedTags.includes(tag.id);
                return (
                  <motion.button
                    key={tag.id}
                    onClick={() => toggleTag(tag.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`h-32 p-6 flex flex-col justify-end border transition-all duration-500 text-left
                      ${
                        isActive
                          ? "bg-[#1A3C34] border-[#1A3C34] text-[#F4F1EA]"
                          : "bg-white border-gray-100 hover:border-[#D4B996] text-[#1A3C34]"
                      }`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium leading-none">
                      {tag.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <aside className="relative">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                {selectedTags.length < 3 ? (
                  <motion.div
                    key="waiting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-t border-[#1A3C34]/10 pt-8"
                  >
                    <div className="text-4xl font-serif italic text-gray-300">
                      0{selectedTags.length}
                      <span className="text-sm opacity-50">/03</span>
                    </div>
                    <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 italic">
                      Choose three elements to distill your profile.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="detected"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white p-10 shadow-xl border border-gray-50"
                  >
                    <span className="text-[#D4B996] uppercase tracking-widest text-[9px] font-bold">
                      Archetype Detected
                    </span>
                    <h2 className="font-serif text-3xl mt-4 mb-8 leading-tight">
                      {finalProfile?.title}
                    </h2>
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="w-full py-5 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all disabled:opacity-50"
                    >
                      {isSaving ? "Synchronizing..." : "Confirm Selection"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
