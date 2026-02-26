"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex justify-between items-center px-8 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-[#F4F1EA]/80 backdrop-blur-md py-4 border-b border-[#1A3C34]/5"
          : "mix-blend-difference"
      }`}
    >
      <h2
        className={`font-serif text-2xl italic tracking-tighter transition-colors ${
          scrolled ? "text-[#1A3C34]" : "text-[#F4F1EA]"
        }`}
      >
        Pure São Tomé
      </h2>

      <div
        className={`flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold ${
          scrolled ? "text-[#1A3C34]" : "text-[#F4F1EA]"
        }`}
      >
        <Link
          href="/concept"
          className="hover:text-[#D4B996] transition-colors hidden md:block"
        >
          The Concept
        </Link>
        <Link
          href="/blog"
          className="hover:text-[#D4B996] transition-colors hidden md:block"
        >
          Insights
        </Link>
        <Link
          href="/portal/logistics"
          className="bg-[#D4B996] text-[#1A3C34] px-6 py-3 hover:bg-[#1A3C34] hover:text-[#F4F1EA] transition-all shadow-sm"
        >
          Client Portal
        </Link>
      </div>
    </nav>
  );
}
