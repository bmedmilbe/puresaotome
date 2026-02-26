"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-8 bg-[#F4F1EA] border-t border-[#1A3C34]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="text-left">
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1A3C34]">
              © 2026 Pure São Tomé
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase opacity-40 mt-2 italic font-serif">
              The Private Bridge • London & Príncipe
            </p>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end gap-x-10 gap-y-4 text-[9px] tracking-[0.3em] uppercase font-bold text-[#1A3C34]">
            <Link
              href="/privacy"
              className="hover:text-[#D4B996] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D4B996] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="https://instagram.com/puresaotome"
              target="_blank"
              className="hover:text-[#D4B996] transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* UK Compliance & Advocacy Model Note */}
        <div className="mt-12 pt-8 border-t border-[#1A3C34]/5">
          <p className="text-[10px] leading-relaxed text-[#1A3C34]/50 max-w-3xl font-light italic">
            Pure São Tomé is a Travel Management Consultancy registered in the
            United Kingdom. We operate as a Professional Collection Agent for
            vetted local partners. Our £150 Advocacy Fee ensures absolute
            financial transparency, with all third-party logistics settled at
            net local cost.
          </p>
        </div>
      </div>
    </footer>
  );
}
