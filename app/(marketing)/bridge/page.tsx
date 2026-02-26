"use client";

import { motion } from "framer-motion";

/**
 * TheBridge Component
 * * Purpose: Explains the "Financial Concierge" and "Fiscal Bridge".
 * * Highlights: Pre-settlement, Cash Handover, and the Buy-Back Policy.
 */

export default function TheBridge() {
  const steps = [
    {
      title: "Secure Settlement",
      desc: "Pay your core costs (Lodging & Transport) in GBP via our London office. We ensure the funds reach the island providers at net cost.",
      icon: "STP-UK",
    },
    {
      title: "The Cash Handover",
      desc: "Avoid carrying large amounts of Euros. Settle your daily budget with us, and receive local liquidity from your curator upon arrival.",
      icon: "CASH",
    },
    {
      title: "No-Waste Buy-Back",
      desc: "If you have unspent Dobras at the end of your trip, we buy them back at the fair rate, crediting your UK account instantly.",
      icon: "REFUND",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#F4F1EA]">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            The Financial Concierge
          </span>
          <h2 className="font-serif text-5xl mt-4 italic text-[#1A3C34]">
            The Fiscal Bridge
          </h2>
          <p className="mt-6 text-sm font-light text-[#1A3C34] max-w-xl opacity-70 leading-relaxed">
            São Tomé & Príncipe’s banking system can be a barrier. We act as
            your logistical bridge, ensuring your money reaches the right hands
            without hidden fees or security risks.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="border-l border-[#1A3C34]/20 pl-8 py-4"
            >
              <h3 className="font-serif text-xl mb-4 text-[#1A3C34]">
                {step.title}
              </h3>
              <p className="text-[11px] leading-relaxed uppercase tracking-wider text-[#1A3C34]/80">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-[#1A3C34] text-[#F4F1EA] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-serif italic max-w-md">
            "We operate as a verified Collection Agent. Every penny intended for
            local providers is tracked, audited, and delivered at Net Cost."
          </p>
          <div className="px-6 py-2 border border-[#D4B996] text-[#D4B996] text-[9px] uppercase tracking-widest font-bold">
            UK Registered • 0% Markup on FX
          </div>
        </div>
      </div>
    </section>
  );
}
