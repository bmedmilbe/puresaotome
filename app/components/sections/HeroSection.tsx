"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-laguna.png"
          className="w-full h-full object-cover brightness-75"
          alt="Lagoa Azul São Tomé"
        />
      </motion.div>

      <div className="relative z-10 text-center text-brand-cream">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-6xl md:text-8xl mb-4"
        >
          Unfiltered.
        </motion.h1>
        <p className="tracking-[0.3em] uppercase text-sm">
          At the center of the world
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
