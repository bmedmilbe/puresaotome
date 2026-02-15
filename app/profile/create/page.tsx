"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import metadata from "@/app/data/metadata";

// Tipagem baseada na sua API
interface Tag {
  id: number;
  title: string;
  slug: string;
}

// Pesos para desempate (The Tie-Breaker Logic)
const PROFILE_WEIGHTS: Record<string, number> = {
  "the-rare-explorer": 1.2, // Prioridade máxima (logística de aventura)
  "the-heritage-collector": 1.1, // Prioridade média (cultura/logística urbana)
  "the-tropical-minimalist": 1.0, // Base (relaxamento/logística padrão)
};

export default function ProfileCreator({ data }: { data: any }) {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // 1. Lógica de Seleção (Máximo 3)
  const toggleTag = (id: number) => {
    setSelectedTags((prev) => {
      if (prev.includes(id)) return prev.filter((t) => t !== id);
      if (prev.length < 3) return [...prev, id];
      return prev;
    });
  };

  // 2. Lógica de Cálculo de Perfil com Pesos
  const finalProfile = useMemo(() => {
    if (selectedTags.length === 0) return null;

    const scoredProfiles = metadata.profile_types.map((profile: any) => {
      const matchCount = profile.profile_tags.filter((pt: any) =>
        selectedTags.includes(pt.bespoke_tag.id),
      ).length;

      // Cálculo: Quantidade de Tags selecionadas * Peso do Perfil
      return {
        ...profile,
        finalScore: matchCount * (PROFILE_WEIGHTS[profile.slug] || 1.0),
      };
    });

    // Ordena pelo score final e pega o maior
    return scoredProfiles.sort(
      (a: any, b: any) => b.finalScore - a.finalScore,
    )[0];
  }, [selectedTags, metadata.profile_types]);

  const saveProfile = async () => {
    setIsSaving(true);
    // Simulação de chamada para sua API Django Multi-tenant
    // await fetch(`/api/tenants/${tenantId}/profile/`, { method: 'POST', body: ... })
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] font-sans text-[#1A3C34] selection:bg-[#D4B996]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Minimalista */}
        <header className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4B996] uppercase tracking-[0.4em] text-[10px] font-bold">
              Bespoke Profiling
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-tight italic">
              Define your <br />
              unfiltered essence.
            </h1>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Coluna de Seleção de Tags (2/3 da largura) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-8">
              Select 3 archetypal elements
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {metadata.bespoke_tags.map((tag: any) => {
                const active = selectedTags.includes(tag.id);
                return (
                  <motion.button
                    key={tag.id}
                    onClick={() => toggleTag(tag.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`h-32 p-6 flex flex-col justify-end border transition-all duration-700 text-left
                      ${
                        active
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

          {/* Coluna de Resultado e Feedback (1/3 da largura) */}
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
                    <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">
                      Our intelligence system requires three distinct choices to
                      distill your personal expedition profile.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="detected"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
                  >
                    <span className="text-[#D4B996] uppercase tracking-widest text-[9px] font-bold">
                      Profile Detected
                    </span>
                    <h2 className="font-serif text-3xl mt-4 mb-8 leading-tight">
                      {finalProfile?.title}
                    </h2>

                    <button
                      onClick={saveProfile}
                      disabled={isSaving}
                      className="w-full py-5 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all duration-500 relative overflow-hidden"
                    >
                      {isSaving ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Synchronizing...
                        </motion.span>
                      ) : (
                        "Confirm Selection"
                      )}
                    </button>

                    <p className="mt-6 text-[10px] text-gray-400 font-light leading-relaxed">
                      By confirming, your digital concierge will adapt all
                      upcoming itineraries to match this archetype.
                    </p>
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
