"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Info, Car, UserCheck, Plane } from "lucide-react";

export default function DashboardPage() {
  const [passengers, setPassengers] = useState(1);

  // FIXED RATE TABLE (Absolute Transparency Model)
  const prices = {
    advocacy: 150, // Fixed fee for your expert consultancy
    chauffeurLisbon: 75, // Airport-Hotel-Airport cycle in Lisbon
    jimny: 65, // Per day (Independent exploration)
    chauffeurSTP: 90, // Per day (Professional driver)
    islandCurator: 50, // Per day (Vetted specialist guide)
  };

  return (
    <main className="flex-1 p-8 md:p-16 bg-[#F4F1EA]">
      <header className="mb-12 border-b border-[#1A3C34]/10 pb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold font-sans">
          Step 01 — Logistics & Security
        </span>
        <h1 className="font-serif text-5xl mt-2 italic text-[#1A3C34]">
          Refining Your Itinerary
        </h1>
        <div className="flex items-center gap-6 mt-6">
          <p className="text-[10px] uppercase tracking-widest opacity-60 flex items-center gap-2">
            <ShieldCheck size={12} className="text-[#D4B996]" /> Expert Advocacy
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-60 flex items-center gap-2">
            <ShieldCheck size={12} className="text-[#D4B996]" /> Net Cost Rates
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-60 flex items-center gap-2">
            <ShieldCheck size={12} className="text-[#D4B996]" /> UK Registered
            Bridge
          </p>
        </div>
      </header>

      <div className="max-w-4xl space-y-12 pb-24">
        {/* MANDATORY SECTION: FLIGHTS & PARTY DETAILS */}
        <section className="bg-white p-10 border border-[#1A3C34]/5 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-serif text-2xl italic flex items-center gap-3">
              <Plane size={20} className="opacity-30" /> Core Logistics
            </h3>
            <span className="text-[8px] uppercase tracking-widest bg-[#1A3C34] text-white px-3 py-1 font-bold">
              Required Details
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passengers Selector */}
            <div className="space-y-3">
              <p className="text-[9px] uppercase font-bold opacity-40 tracking-[0.2em]">
                Total Travelers
              </p>
              <div className="flex items-center justify-between border-b border-[#1A3C34]/20 pb-2">
                <button
                  onClick={() => setPassengers(Math.max(1, passengers - 1))}
                  className="text-xl hover:text-[#D4B996] transition-colors"
                >
                  -
                </button>
                <span className="font-serif text-2xl">{passengers}</span>
                <button
                  onClick={() => setPassengers(passengers + 1)}
                  className="text-xl hover:text-[#D4B996] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Arrival Flight Details */}
            <div className="space-y-3">
              <p className="text-[9px] uppercase font-bold text-[#D4B996] tracking-[0.2em]">
                Arrival Flight
              </p>
              <input
                required
                type="text"
                placeholder="E.G. TP1527 - 14:30"
                className="bg-transparent w-full font-serif text-lg outline-none border-b border-[#1A3C34]/20 pb-2 placeholder:opacity-20 focus:border-[#D4B996] transition-all text-[#1A3C34]"
              />
            </div>

            {/* Departure Flight Details */}
            <div className="space-y-3">
              <p className="text-[9px] uppercase font-bold text-[#D4B996] tracking-[0.2em]">
                Departure Flight
              </p>
              <input
                required
                type="text"
                placeholder="E.G. TP1528 - 09:15"
                className="bg-transparent w-full font-serif text-lg outline-none border-b border-[#1A3C34]/20 pb-2 placeholder:opacity-20 focus:border-[#D4B996] transition-all text-[#1A3C34]"
              />
            </div>
          </div>
        </section>

        {/* LISBON STOPOVER LOGISTICS */}
        <section className="bg-white p-10 border border-[#1A3C34]/5 shadow-sm">
          <div className="flex justify-between items-end mb-8">
            <h3 className="font-serif text-2xl italic text-[#1A3C34]">
              Lisbon Connection
            </h3>
            <span className="text-[9px] uppercase tracking-widest font-bold border border-[#1A3C34]/20 px-3 py-1 opacity-60">
              Fixed Net Rate: £{prices.chauffeurLisbon}
            </span>
          </div>
          <div className="relative group overflow-hidden border border-[#1A3C34]/10">
            <div className="aspect-[21/9] bg-gray-200">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1200')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[2000ms]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/95 via-[#1A3C34]/40 to-transparent flex flex-col justify-end p-8 text-[#F4F1EA]">
              <h4 className="font-serif text-2xl italic">Private Chauffeur</h4>
              <p className="text-xs font-light opacity-80 mt-2 max-w-lg leading-relaxed">
                Comprehensive airport logistics. We monitor your flights to
                ensure seamless transfers between arrivals, hotel, and your
                final island departure.
              </p>
            </div>
          </div>
        </section>

        {/* ISLAND MOBILITY: TRANSPORT SELECTION */}
        <section className="bg-white p-10 border border-[#1A3C34]/5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h3 className="font-serif text-2xl italic text-[#1A3C34]">
                Island Mobility
              </h3>
              <p className="text-[9px] uppercase tracking-widest opacity-40 mt-1 font-bold italic">
                Audited Provider Network
              </p>
            </div>
            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] font-bold text-[#D4B996] border border-[#D4B996]/30 px-4 py-2 bg-[#D4B996]/5">
              <Info size={12} /> Direct Settlement at Net Cost
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Option 1: Self-Drive (The Independent Path) */}
            <div className="group border border-[#1A3C34]/10 p-5 hover:border-[#D4B996] transition-all relative cursor-pointer bg-[#F4F1EA]/30">
              <div className="aspect-video mb-6 overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    Self-Drive Jimny 4x4
                  </p>
                  <p className="text-[16px] font-serif italic text-[#D4B996] mt-1">
                    £{prices.jimny} / day
                  </p>
                  <p className="text-[8px] uppercase mt-3 opacity-50 tracking-tighter leading-tight max-w-[150px]">
                    Maximum independence for explorers.
                  </p>
                </div>
                <input
                  type="radio"
                  name="transport"
                  className="accent-[#1A3C34] h-4 w-4"
                  defaultChecked
                />
              </div>
            </div>

            {/* Option 2: Chauffeur (The Luxury Path) */}
            <div className="group border border-[#1A3C34]/10 p-5 hover:border-[#D4B996] transition-all relative cursor-pointer bg-[#F4F1EA]/30">
              <div className="aspect-video mb-6 overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1449960232330-3c7004fdd58a?q=80&w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    Private Island Driver
                  </p>
                  <p className="text-[16px] font-serif italic text-[#D4B996] mt-1">
                    £{prices.chauffeurSTP} / day
                  </p>
                  <p className="text-[8px] uppercase mt-3 opacity-50 tracking-tighter leading-tight max-w-[150px]">
                    Stress-free navigation by a local pro.
                  </p>
                </div>
                <input
                  type="radio"
                  name="transport"
                  className="accent-[#1A3C34] h-4 w-4"
                />
              </div>
            </div>
          </div>

          {/* CURATOR SECTION (Mandatory Expert Bridge) */}
          <div className="mt-12 pt-10 border-t border-[#1A3C34]/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#1A3C34] flex items-center justify-center">
                <UserCheck size={20} className="text-[#D4B996]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A3C34]">
                  Private Island Curator (Guide)
                </p>
                <p className="text-[12px] opacity-60 italic font-serif">
                  Fixed Advocacy Rate: £{prices.islandCurator} / day
                </p>
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest opacity-40 max-w-[220px] text-right italic font-medium leading-relaxed">
              *Mandatory local expert bridge included in all curated
              itineraries.
            </p>
          </div>
        </section>

        {/* FINAL COMMITMENT & FISCAL BRIDGE EXPLANATION */}
        <section className="bg-[#1A3C34] text-[#F4F1EA] p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Decorative Background Text */}
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none">
            <h2 className="text-[14rem] font-serif italic -rotate-12 translate-x-20 translate-y-10 uppercase">
              Pure
            </h2>
          </div>

          <div className="relative z-10">
            <h3 className="font-serif text-3xl italic mb-12 text-[#D4B996]">
              Advocacy Commitment
            </h3>

            <div className="grid md:grid-cols-2 gap-16 mb-16 border-b border-white/10 pb-16 text-[10px] uppercase tracking-[0.2em] leading-relaxed">
              <div className="space-y-6">
                <p className="text-[#D4B996] font-bold text-xs underline decoration-[#D4B996]/30 underline-offset-8 italic">
                  01. Advocacy Activation (£150)
                </p>
                <p className="opacity-70">
                  This non-refundable fee initiates my professional advocacy. I
                  work to secure your routes, verify audited providers, and
                  manage the "Fiscal Bridge" for all local settlements.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-[#D4B996] font-bold text-xs underline decoration-[#D4B996]/30 underline-offset-8 italic">
                  02. Direct Settlement Model
                </p>
                <p className="opacity-70">
                  Once your path is finalized, you pay the providers through our
                  secure portal at{" "}
                  <span className="text-white font-bold">Net Local Cost</span>.
                  No agency markups, ever.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-2">
                  Total Due to start curation:
                </p>
                <p className="font-serif text-7xl text-[#D4B996] leading-none">
                  £150
                  <span className="text-xl opacity-40 font-sans ml-2">.00</span>
                </p>
              </div>
              <button className="group relative w-full md:w-auto px-20 py-8 bg-[#F4F1EA] text-[#1A3C34] text-[11px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all duration-700 hover:bg-[#D4B996]">
                <span className="relative z-10">Secure Private Advocacy</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
