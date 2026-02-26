"use client";
import Link from "next/link";

const FinalCTA = () => {
  const scrollToSelector = () => {
    const element = document.getElementById("selector");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 px-8 text-center bg-[#1A3C34] text-[#F4F1EA]">
      <div className="max-w-3xl mx-auto border border-[#D4B996]/30 p-12 md:p-20 relative">
        {/* Floating Label */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A3C34] px-6 font-serif italic text-2xl text-[#D4B996] whitespace-nowrap">
          Pure São Tomé
        </div>

        <h2 className="font-serif text-4xl md:text-5xl mb-8 italic">
          Uncover the Equator.
        </h2>

        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-12 opacity-60 leading-loose max-w-xl mx-auto">
          Your bridge from London to the Gulf of Guinea is open.{" "}
          <br className="hidden md:block" />
          Experience the archipelago through a model of total transparency.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToSelector}
            className="w-full md:w-auto bg-[#D4B996] text-[#1A3C34] px-12 py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#F4F1EA] transition-all"
          >
            Start Your Distillation
          </button>

          <Link
            href="/portal/logistics"
            className="w-full md:w-auto border border-[#D4B996]/50 text-[#D4B996] px-12 py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4B996] hover:text-[#1A3C34] transition-all"
          >
            Open The Portal
          </Link>
        </div>

        <p className="mt-12 text-[9px] uppercase tracking-[0.2em] opacity-40 italic">
          Private Access for Registered Explorers Only
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
