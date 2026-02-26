"use client";

export default function PromiseSection() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          The Pure Advocate
        </span>
        <h2 className="font-serif text-5xl mt-6 italic leading-snug text-[#1A3C34]">
          I am not an agency. <br /> I am your Fiscal Bridge.
        </h2>
        <p className="mt-8 text-sm font-light leading-relaxed opacity-80 italic font-serif max-w-lg text-[#1A3C34]">
          "My service is built on absolute price transparency. We secure net
          local rates, manage complex banking logistics, and provide a verified
          bridge to the islands."
        </p>
        <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#1A3C34]/10 mt-12">
          <div>
            <p className="font-serif text-3xl italic text-[#1A3C34]">£150</p>
            <p className="text-[9px] uppercase tracking-widest opacity-60 mt-1 font-bold">
              Fixed Advocacy Retainer
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl italic text-[#1A3C34]">0%</p>
            <p className="text-[9px] uppercase tracking-widest opacity-60 mt-1 font-bold text-[#D4B996]">
              Hidden Markups
            </p>
          </div>
        </div>
        <p className="mt-6 text-[8px] uppercase tracking-widest opacity-40">
          Verified UK Client Account for Secure Local Settlements.
        </p>
      </div>
      <div className="order-1 md:order-2 rounded-sm overflow-hidden shadow-2xl bg-[#F4F1EA]">
        <img
          src="/authentic.png"
          alt="Authentic São Tomé"
          className="w-full h-full object-cover grayscale-[30%]"
        />
      </div>
    </section>
  );
}
