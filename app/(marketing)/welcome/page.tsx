"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShieldCheck, Compass, ArrowRight, Loader2 } from "lucide-react";

export default function WelcomePortal({
  profileTitle,
}: {
  profileTitle: string;
}) {
  const router = useRouter();
  const [syncProgress, setSyncProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // 1. Sync Logic & Auto-Redirect
  useEffect(() => {
    const timer = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          // Optional: Auto-redirect after a short delay once "Ready"
          // setTimeout(() => router.push("/portal/logistics"), 1500);
          return 100;
        }
        return prev + 1;
      });
    }, 60); // Roughly 6 seconds to fill
    return () => clearInterval(timer);
  }, [router]);

  const suggestedExpeditions = [
    {
      id: "01",
      title: "The Colonial Echoes",
      location: "Roça Agostinho Neto",
      focus: "Heritage",
      img: "/images_1.png",
    },
    {
      id: "02",
      title: "Ancestral Cacao",
      location: "The Curator's Table",
      focus: "Gastronomy",
      img: "/images_2.png",
    },
    {
      id: "03",
      title: "Emerald Lagoons",
      location: "Sacred Waters",
      focus: "Primal Nature",
      img: "/images_3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ backgroundImage: "url('/images_0.png')" }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[#1A3C34]/40" />
        </motion.div>

        <div className="relative text-center text-[#F4F1EA] px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <ShieldCheck size={14} className="text-[#D4B996]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
              Pure São Tomé • Access Granted
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl italic leading-tight"
          >
            Welcome, <br /> {profileTitle}
          </motion.h1>

          {/* BACKGROUND SYNC INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 max-w-xs mx-auto"
          >
            <div className="flex justify-between text-[9px] uppercase tracking-widest mb-3 opacity-80">
              <span className="flex items-center gap-2">
                {!isReady && (
                  <Loader2 size={10} className="animate-spin text-[#D4B996]" />
                )}
                {isReady ? "Curation Optimized" : "Curators Working"}
              </span>
              <span>{syncProgress}%</span>
            </div>
            <div className="h-[1px] w-full bg-white/20">
              <motion.div
                className="h-full bg-[#D4B996]"
                initial={{ width: 0 }}
                animate={{ width: `${syncProgress}%` }}
              />
            </div>
            <p className="mt-4 text-[8px] uppercase tracking-[0.3em] opacity-40">
              {isReady
                ? "Identity confirmed. Portal open."
                : "Calibrating your African Galapagos experience..."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ADVOCACY BAR */}
      <section className="py-12 bg-white border-y border-[#1A3C34]/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996]">
            The Pure Advocate Model
          </p>
          <p className="italic font-serif opacity-60 text-sm">
            "We are curating your logistics bridge in the background."
          </p>
          <span className="text-[9px] uppercase tracking-widest border border-[#1A3C34]/20 px-4 py-2 opacity-40">
            Member ID: {profileTitle?.substring(0, 3).toUpperCase()}-2026
          </span>
        </div>
      </section>

      {/* PRELIMINARY CURATION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-16">
          <span className="text-[#D4B996] text-[10px] uppercase tracking-[0.4em] font-bold">
            Preliminary Selection
          </span>
          <h2 className="font-serif text-4xl mt-2 italic">
            Refined for your profile
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {suggestedExpeditions.map((exp) => (
            <motion.div key={exp.id} whileHover={{ y: -10 }} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-6 relative">
                <img
                  src={exp.img}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  alt={exp.title}
                />
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4B996] font-bold">
                Expedition {exp.id}
              </span>
              <h3 className="font-serif text-2xl mt-1">{exp.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL NOTIFICATION & ACTION */}
      <section className="bg-[#1A3C34] text-[#F4F1EA] py-32 px-6">
        <div className="max-w-3xl mx-auto text-center border border-[#D4B996]/20 p-16 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A3C34] px-6">
            <Compass
              size={28}
              className={`text-[#D4B996] ${!isReady ? "animate-pulse" : ""}`}
            />
          </div>

          <h2 className="font-serif text-4xl italic mb-6">
            {isReady ? "Curation Complete." : "Refining the Details."}
          </h2>
          <p className="text-xs font-light opacity-60 mb-12 leading-relaxed uppercase tracking-[0.3em] max-w-md mx-auto">
            Our curators are synchronizing your dashboard in the background.
            Your logistics bridge is ready for activation.
          </p>

          <button
            disabled={!isReady}
            onClick={() => router.push("/portal/logistics")}
            className={`group flex items-center justify-center gap-4 mx-auto px-16 py-6 transition-all duration-500 text-[10px] uppercase tracking-[0.5em] font-bold ${
              isReady
                ? "bg-[#D4B996] text-[#1A3C34] hover:bg-[#F4F1EA] cursor-pointer"
                : "bg-[#1A3C34] text-[#F4F1EA]/30 border border-white/10 cursor-wait"
            }`}
          >
            {isReady ? "Enter The Portal" : "Synchronizing..."}
            {isReady && (
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform"
              />
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
