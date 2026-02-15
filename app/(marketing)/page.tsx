// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <>
      {/* Hero Section */}
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

      {/* The Vessel Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-sand uppercase tracking-widest text-sm">
            The Bespoke Launch
          </span>
          <h2 className="font-serif text-4xl mt-4 mb-6">
            Traditional soul, modern comfort.
          </h2>
          <p className="leading-relaxed font-light mb-8">
            Our converted "Explorer" launches are hand-carved by Santomean
            artisans, then refitted with Italian linen and high-performance
            silent engines.
          </p>
          <button className="bg-brand-green text-brand-cream px-8 py-4 uppercase text-xs tracking-widest">
            Explore the Fleet
          </button>
        </div>
        <div className="rounded-sm overflow-hidden shadow-2xl">
          <img src="/boat-complete.png" alt="Bespoke Vessel" />
        </div>
      </section>
    </>
  );
}
