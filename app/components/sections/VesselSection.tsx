"use client";
import React from "react";

const VesselSection = () => {
  return (
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
          artisans, then refitted with Italian linen and high-performance silent
          engines.
        </p>
        <button className="bg-brand-green text-brand-cream px-8 py-4 uppercase text-xs tracking-widest">
          Explore the Fleet
        </button>
      </div>
      <div className="rounded-sm overflow-hidden shadow-2xl">
        <img src="/boat-complete.png" alt="Bespoke Vessel" />
      </div>
    </section>
  );
};

export default VesselSection;
