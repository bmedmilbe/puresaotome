import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
          <Link
            href="/"
            className="text-2xl font-serif tracking-widest uppercase hover:opacity-80 transition"
          >
            Pure São Tomé
          </Link>

          <div className="hidden md:flex gap-10 font-light tracking-[0.2em] text-[10px] uppercase">
            <Link
              href="/expeditions"
              className="hover:text-brand-sand transition"
            >
              Expeditions
            </Link>
            <Link href="/vessels" className="hover:text-brand-sand transition">
              The Vessels
            </Link>
            <Link href="/purity" className="hover:text-brand-sand transition">
              Our Purity
            </Link>
            <Link
              href="/portal/login"
              className="border border-white px-5 py-2 hover:bg-white hover:text-black transition duration-500"
            >
              Client Portal
            </Link>
          </div>
        </nav>
      </header>
      <main className="bg-brand-cream font-sans selection:bg-brand-sand">
        {children}
      </main>
      <footer className="bg-brand-cream border-t border-gray-100 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green opacity-60">
            &copy; 2026 Pure São Tomé. London & STP.
          </p>

          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-brand-green">
            <Link href="/privacy" className="hover:text-brand-sand transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-sand transition">
              Terms
            </Link>
            <Link
              href="https://instagram.com/puresaotome"
              className="hover:text-brand-sand transition"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
