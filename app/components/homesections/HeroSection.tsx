"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A3C34]">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#1A3C34]/40 z-10" />
        <img
          src="/hero-laguna.png"
          alt="Lagoa Azul"
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </motion.div>

      <div className="relative z-20 text-center text-[#F4F1EA] px-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.6em] mb-4 block text-[#D4B996] font-bold"
        >
          London & Príncipe • Professional Advocacy
        </motion.span>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-serif text-7xl md:text-9xl italic leading-tight"
        >
          Unfiltered.
        </motion.h1>
        <motion.p
          className="text-[10px] uppercase tracking-[0.3em] mt-4 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          São Tomé through the lens of total transparency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              document
                .getElementById("selector")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block border border-[#F4F1EA] px-16 py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#F4F1EA] hover:text-[#1A3C34] transition-all duration-700"
          >
            Start Your Distillation
          </button>
        </motion.div>
      </div>
    </header>
  );
}
