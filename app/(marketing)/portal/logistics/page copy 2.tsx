"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DashboardPage() {
  const [passengers, setPassengers] = useState(1);

  // PREÇOS FIXOS
  const prices = {
    consultancy: 95,
    jimny: 65,
    chauffeurSTP: 90,
    chauffeurLisbon: 75,
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#1A3C34]/10 p-8 hidden md:block">
        <h2 className="font-serif text-2xl italic mb-12">The Vault</h2>
        <nav className="space-y-6 text-[10px] uppercase tracking-widest font-bold">
          <div className="text-[#D4B996]">01. Logistics</div>
          <div className="opacity-40">02. Curators</div>
          <div className="opacity-40">03. Documents</div>
        </nav>
      </aside>

      <main className="flex-1 p-8 md:p-16">
        <header className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            Personal Consultancy Portal
          </span>
          <h1 className="font-serif text-4xl mt-2 italic">
            Refining Your Itinerary
          </h1>
        </header>

        <div className="max-w-4xl space-y-12">
          {/* SECÇÃO OBRIGATÓRIA: FLIGHTS & PARTY */}
          <section className="bg-white/50 p-8 border border-[#1A3C34]/10">
            <h3 className="font-serif text-xl mb-8 italic">
              Mandatory Logistics Details
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Passageiros */}
              <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
                <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                  Total Passengers
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                    className="text-xl"
                  >
                    -
                  </button>
                  <span className="font-serif text-2xl">{passengers}</span>
                  <button
                    onClick={() => setPassengers(passengers + 1)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Chegada */}
              <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
                <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                  Arrival Flight (Number & Time)
                </p>
                <input
                  required
                  type="text"
                  placeholder="E.G. TP1527 - 14:30"
                  className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-30"
                />
              </div>

              {/* Partida */}
              <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
                <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                  Departure Flight (Number & Time)
                </p>
                <input
                  required
                  type="text"
                  placeholder="E.G. TP1528 - 09:15"
                  className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-30"
                />
              </div>
            </div>

            <div className="mt-6 bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
              <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                Travel Dates (Start to End)
              </p>
              <input
                required
                type="text"
                placeholder="E.G. 12TH MARCH TO 22ND MARCH"
                className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-30"
              />
            </div>
          </section>

          {/* LISBON CONNECTION */}
          <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-serif text-xl">Lisbon Connection</h3>
              <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">
                Fixed Rate: £{prices.chauffeurLisbon}
              </span>
            </div>
            <div className="relative group overflow-hidden border border-[#1A3C34]/10">
              <div className="aspect-[21/9] bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1200')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 to-transparent flex flex-col justify-end p-8 text-[#F4F1EA]">
                <h4 className="font-serif text-2xl italic">
                  Seamless Airport Transfers
                </h4>
                <p className="text-xs font-light opacity-80 mt-2 max-w-lg leading-relaxed">
                  We use your flight details to coordinate your private
                  chauffeur for the Airport ↔ Hotel ↔ Airport cycle in Lisbon.
                </p>
              </div>
            </div>
          </section>

          {/* TRANSPORTATION STP */}
          <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
            <h3 className="font-serif text-xl mb-6 italic">
              Island Mobility (São Tomé)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group border border-[#1A3C34]/10 p-4 hover:border-[#D4B996] transition-all relative cursor-pointer">
                <div className="aspect-video mb-4 overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800')] bg-cover bg-center" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">
                      Self-Drive Explorer
                    </p>
                    <p className="text-[14px] font-serif italic text-[#D4B996]">
                      £{prices.jimny} / day
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="transport"
                    className="accent-[#1A3C34]"
                    defaultChecked
                  />
                </div>
              </div>

              <div className="group border border-[#1A3C34]/10 p-4 hover:border-[#D4B996] transition-all relative cursor-pointer">
                <div className="aspect-video mb-4 overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1449960232330-3c7004fdd58a?q=80&w=800')] bg-cover bg-center" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">
                      Private Driver & Guide
                    </p>
                    <p className="text-[14px] font-serif italic text-[#D4B996]">
                      £{prices.chauffeurSTP} / day
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="transport"
                    className="accent-[#1A3C34]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PAYMENT & PHILOSOPHY */}
          <section className="bg-[#1A3C34] text-[#F4F1EA] p-10 border-l-4 border-[#D4B996] shadow-2xl">
            <h3 className="font-serif text-2xl italic mb-10">
              Consultancy Commitment
            </h3>
            <div className="grid md:grid-cols-2 gap-12 text-[11px] uppercase tracking-widest leading-loose mb-12">
              <div className="space-y-4">
                <p className="text-[#D4B996] font-bold text-xs italic">
                  Step 01: The Consultation (£150)
                </p>

                <p className="opacity-80">
                  By paying this fee, I will use your flight details to lock in
                  your drivers, connect you with professional guides (guias),
                  and curate your path. This covers my specialized work as your
                  island bridge.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[#D4B996] font-bold text-xs italic">
                  Step 02: Logistics Payment
                </p>
                <p className="opacity-80">
                  The local service costs (drivers/stays) are paid after I
                  confirm every detail of your custom itinerary.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  Due today to initiate logistics:
                </p>
                <p className="font-serif text-5xl text-[#D4B996] mt-2">
                  £150.00
                </p>
              </div>
              <button className="w-full md:w-auto px-16 py-6 bg-[#F4F1EA] text-[#1A3C34] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4B996] transition-all duration-500 shadow-xl">
                Secure My Consultation
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
