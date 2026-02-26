"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DashboardPage() {
  const [passengers, setPassengers] = useState(1);

  // TABELA DE PREÇOS FIXOS (Sem custos ocultos)
  const prices = {
    consultancy: 95,
    chauffeurLisbon: 75, // Ciclo Aeroporto-Hotel-Aeroporto
    jimny: 65, // Por dia (Independência)
    chauffeurSTP: 90, // Por dia (Comodidade)
    islandGuia: 50, // Por dia (O Curador especializado)
  };

  return (
    <main className="flex-1 p-8 md:p-16">
      <header className="mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold font-sans">
          Personal Consultancy Portal
        </span>
        <h1 className="font-serif text-4xl mt-2 italic">
          Refining Your Itinerary
        </h1>
        <p className="text-[10px] uppercase tracking-widest mt-4 opacity-60">
          Expert Guidance • Fixed Rates • Absolute Transparency
        </p>
      </header>

      <div className="max-w-4xl space-y-12">
        {/* SECÇÃO OBRIGATÓRIA: FLIGHTS & PARTY */}
        <section className="bg-white/50 p-8 border border-[#1A3C34]/10 shadow-sm">
          <h3 className="font-serif text-xl mb-8 italic">
            Mandatory Logistics Details
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Passageiros */}
            <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
              <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                Total Travelers
              </p>
              <div className="flex items-center gap-4">
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

            {/* Voo Chegada */}
            <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
              <p className="text-[9px] uppercase font-bold opacity-60 mb-2 text-[#D4B996]">
                Arrival Flight (No. & Time)
              </p>
              <input
                required
                type="text"
                placeholder="E.G. TP1527 - 14:30"
                className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-20"
              />
            </div>

            {/* Voo Partida */}
            <div className="bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
              <p className="text-[9px] uppercase font-bold opacity-60 mb-2 text-[#D4B996]">
                Departure Flight (No. & Time)
              </p>
              <input
                required
                type="text"
                placeholder="E.G. TP1528 - 09:15"
                className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-20"
              />
            </div>
          </div>

          <div className="mt-6 bg-[#F4F1EA]/50 p-4 border border-[#1A3C34]/10">
            <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
              Planned Dates
            </p>
            <input
              required
              type="text"
              placeholder="E.G. 12TH MARCH TO 22ND MARCH"
              className="bg-transparent w-full font-serif text-lg outline-none placeholder:opacity-20"
            />
          </div>
        </section>

        {/* LISBON CONNECTION */}
        <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-serif text-xl italic">Lisbon Connection</h3>
            <span className="text-[9px] uppercase tracking-widest font-bold border border-[#1A3C34]/20 px-2 py-1 opacity-60">
              Fixed Rate: £{prices.chauffeurLisbon}
            </span>
          </div>
          <div className="relative group overflow-hidden border border-[#1A3C34]/10">
            <div className="aspect-[21/9] bg-gray-200">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1200')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 to-transparent flex flex-col justify-end p-8 text-[#F4F1EA]">
              <h4 className="font-serif text-2xl italic italic">
                Private Chauffeur
              </h4>
              <p className="text-xs font-light opacity-80 mt-2 max-w-lg leading-relaxed font-sans">
                Comprehensive airport logistics. We monitor your flights to
                ensure seamless transfers between arrivals, hotel, and your
                final island departure.
              </p>
            </div>
          </div>
        </section>

        {/* ISLAND SERVICES: TRANSPORT CHOICE */}
        <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
          <h3 className="font-serif text-xl mb-8 italic text-[#1A3C34]">
            Island Mobility (Selection Required)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1: Self-Drive */}
            <div className="group border border-[#1A3C34]/10 p-4 hover:border-[#D4B996] transition-all relative cursor-pointer bg-white/40">
              <div className="aspect-video mb-4 overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    Self-Drive Jimny 4x4
                  </p>
                  <p className="text-[14px] font-serif italic text-[#D4B996]">
                    £{prices.jimny} / day
                  </p>
                  <p className="text-[8px] uppercase mt-2 opacity-50 tracking-tighter">
                    For independent explorers.
                  </p>
                </div>
                <input
                  type="radio"
                  name="island_transport"
                  className="accent-[#1A3C34]"
                  defaultChecked
                />
              </div>
            </div>

            {/* Option 2: Private Driver */}
            <div className="group border border-[#1A3C34]/10 p-4 hover:border-[#D4B996] transition-all relative cursor-pointer bg-white/40">
              <div className="aspect-video mb-4 overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1449960232330-3c7004fdd58a?q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    Private Island Driver
                  </p>
                  <p className="text-[14px] font-serif italic text-[#D4B996]">
                    £{prices.chauffeurSTP} / day
                  </p>
                  <p className="text-[8px] uppercase mt-2 opacity-50 tracking-tighter">
                    Stress-free navigation by a local professional.
                  </p>
                </div>
                <input
                  type="radio"
                  name="island_transport"
                  className="accent-[#1A3C34]"
                />
              </div>
            </div>
          </div>

          {/* FIXED CURATOR SERVICE */}
          <div className="mt-8 pt-8 border-t border-[#1A3C34]/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4B996]/10 flex items-center justify-center font-serif italic text-[#D4B996]">
                C
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">
                  Private Island Curator (Guia)
                </p>
                <p className="text-[11px] opacity-60 italic font-serif">
                  Fixed Rate: £{prices.islandGuia} / day
                </p>
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest opacity-40 max-w-[200px] text-right">
              Mandatory expert guidance for all Vault experiences.
            </p>
          </div>
        </section>

        {/* PAYMENT & PHILOSOPHY */}
        <section className="bg-[#1A3C34] text-[#F4F1EA] p-10 border-l-4 border-[#D4B996] shadow-2xl">
          <h3 className="font-serif text-2xl italic mb-10 text-[#D4B996]">
            Consultancy Commitment
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-[11px] uppercase tracking-widest leading-loose mb-12">
            <div className="space-y-4">
              <p className="text-[#D4B996] font-bold text-xs italic">
                Step 01: The Consultation (£150)
              </p>
              <p className="opacity-80">
                Paid today to initiate my work. I will use your flight details
                to lock in your drivers, match you with our best guides, and
                curate your path. This is the fee for my expertise as your
                island bridge.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[#D4B996] font-bold text-xs italic">
                Step 02: Logistics Settlement
              </p>
              <p className="opacity-80">
                The local service costs (drivers, stays, guides) are paid
                through this portal only after I personally confirm every detail
                of your final route.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 font-sans">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                Due today to start curation:
              </p>
              <p className="font-serif text-5xl text-[#D4B996] mt-2">£150.00</p>
            </div>
            <button className="w-full md:w-auto px-16 py-6 bg-[#F4F1EA] text-[#1A3C34] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4B996] transition-all duration-500 shadow-xl">
              Secure My Consultation
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
