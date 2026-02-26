"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WelcomePortal({
  profileSlug,
  profileTitle,
}: {
  profileSlug: string;
  profileTitle: string;
}) {
  const router = useRouter();
  const suggestedExpeditions = [
    {
      id: 1,
      title: "The Colonial Echoes of Roça Agostinho Neto",
      duration: "1 Day", // Realismo: Visita ao Norte e cidade
      focus: "Heritage & Architecture",
    },
    {
      id: 2,
      title: "Ancestral Cacao & The Curator's Table",
      duration: "2 Days", // Realismo: Inclui pernoite numa Roça histórica
      focus: "Gastronomy & Culture",
    },
    {
      id: 3,
      title: "Emerald Lagoons & Sacred Waters",
      duration: "1 Day", // Realismo: Expedição ao Sul (Lagoa Azul ou Jogo Jogo)
      focus: "Primal Nature",
    },
  ];

  // O resto do código permanece igual, usando o map acima
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34]">
      {/* Hero Section Imersiva */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          // 1. Set the background image here instead of in className
          style={{ backgroundImage: "url('/images_0.png')" }}
          // 2. Keep positioning and sizing classes in Tailwind
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[#1A3C34]/40" />
        </motion.div>

        <div className="relative text-center text-[#F4F1EA] px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium"
          >
            Access Granted
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-serif text-6xl md:text-8xl mt-4 italic leading-tight"
          >
            Welcome, <br /> {profileTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2 }}
            className="max-w-md mx-auto mt-8 text-sm font-light leading-relaxed tracking-wide"
          >
            Your essence has been distilled. A bespoke selection of the
            archipelago’s most guarded secrets awaits your exploration.
          </motion.p>
        </div>
      </section>

      {/* Conteúdo Curado: Primeiras Recomendações */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#D4B996] text-[10px] uppercase tracking-[0.3em] font-bold">
              First Distillations
            </span>
            <h2 className="font-serif text-4xl mt-2 italic">
              Curated for your profile
            </h2>
          </div>
          <Link
            href="/portal/expeditions"
            className="text-[10px] uppercase tracking-widest border-b border-[#1A3C34]/20 pb-1 hover:border-[#1A3C34] transition-all"
          >
            View All Expeditions
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {suggestedExpeditions.map((expedicao) => (
            <motion.div
              key={expedicao.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-6 relative">
                {/* Camada de sobreposição elegante */}
                <div className="absolute inset-0 bg-[#1A3C34]/15 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Renderização da Imagem */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('/images_${expedicao.id}.png')`,
                  }}
                  role="img"
                  aria-label={expedicao.title}
                />
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4B996] font-bold">
                Expedition 0{expedicao.id}
              </span>

              <h3 className="font-serif text-xl mt-2 group-hover:italic transition-all">
                {expedicao.title}
              </h3>

              <p className="text-xs text-gray-500 mt-2 font-light tracking-wide">
                {expedicao.duration} · Private Curator · {expedicao.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action: The Concierge */}
      <section className="bg-[#1A3C34] text-[#F4F1EA] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl italic mb-6">
            Need a more personal distillation?
          </h2>
          <p className="text-sm font-light opacity-70 mb-10 leading-relaxed uppercase tracking-widest">
            Our curators are ready to refine your journey to the finest detail.
            Select your preferences in the private dashboard.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Primary Action: Directs to the self-service dashboard to avoid direct chat */}
            <button
              onClick={() => router.push("/portal/logistics")}
              className="px-12 py-5 bg-[#F4F1EA] text-[#1A3C34] border border-[#F4F1EA] hover:bg-transparent hover:text-[#F4F1EA] transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-bold w-full md:w-auto"
            >
              Enter Private Dashboard
            </button>

            {/* Secondary Action: Asynchronous support via email (gives you time to translate/reply) */}
            <button className="px-12 py-5 border border-[#F4F1EA]/30 hover:bg-[#F4F1EA] hover:text-[#1A3C34] transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-bold w-full md:w-auto">
              Request Assistance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
