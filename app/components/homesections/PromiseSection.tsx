"use client";

export default function PromiseSection() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          The Pure Advocate
        </span>
        <h2 className="font-serif text-5xl mt-6 italic leading-snug">
          I am not an agency. <br /> I am your bridge.
        </h2>
        <p className="mt-8 text-sm font-light leading-relaxed opacity-80 italic font-serif max-w-lg">
          "My service is built on three pillars: absolute price transparency,
          deep local trust, and a seamless logistics bridge."
        </p>
        <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#1A3C34]/10 mt-12">
          <div>
            <p className="font-serif text-3xl italic">£95</p>
            <p className="text-[9px] uppercase tracking-widest opacity-60 mt-1 font-bold">
              Professional Retainer
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl italic">0%</p>
            <p className="text-[9px] uppercase tracking-widest opacity-60 mt-1 font-bold">
              Hidden Markups
            </p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 rounded-sm overflow-hidden shadow-2xl">
        <img
          src="/authentic.png"
          alt="Authentic São Tomé"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
