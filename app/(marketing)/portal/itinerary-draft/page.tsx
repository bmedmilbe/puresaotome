"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Moon, CheckCircle2, Info } from "lucide-react";

export default function ItineraryDraftPage() {
  const [selectedHotel, setSelectedHotel] = useState("sao-joao");
  const [passengers] = useState(2);
  const [nights] = useState(7);

  return (
    <div className="max-w-5xl mx-auto space-y-24 p-8 md:p-16 bg-[#F4F1EA]">
      {/* HEADER: The Curation Status */}
      <header className="border-b border-[#1A3C34]/10 pb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          Step 03 — Selection
        </span>
        <h1 className="font-serif text-5xl mt-2 italic text-[#1A3C34]">
          The Itinerary Draft
        </h1>
        <p className="mt-6 text-[11px] uppercase tracking-widest opacity-60 leading-loose max-w-xl">
          Based on your distillation, I have secured provisional availability
          with our audited partners. Select your preferred sanctuary to finalize
          the bridge.
        </p>
      </header>

      {/* 1. THE CURATOR: Personal Match */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#D4B996]" />
          <h3 className="font-serif text-2xl italic text-[#1A3C34]">
            1. Your Dedicated Curator
          </h3>
        </div>

        <div className="bg-white border border-[#1A3C34]/10 p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 rounded-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400')] bg-cover bg-center border-2 border-[#D4B996]" />
          <div className="flex-1">
            <p className="text-[9px] font-bold uppercase text-[#D4B996] tracking-[0.2em] mb-2">
              Advocate's Recommendation
            </p>
            <h4 className="font-serif text-3xl mb-4 italic text-[#1A3C34]">
              Jair
            </h4>
            <p className="text-xs font-light leading-relaxed opacity-80 italic max-w-lg">
              "Because you expressed a fascination with colonial architecture
              and the 'Golden Cocoa' era, Jair is the only choice. He holds the
              keys to several private Roças not open to the public."
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#1A3C34] text-[#F4F1EA] px-6 py-4 text-[10px] uppercase tracking-widest font-bold">
            <CheckCircle2 size={14} className="text-[#D4B996]" /> Match
            Confirmed
          </div>
        </div>
      </section>

      {/* 2. ACCOMMODATION: The Sanctuaries */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#D4B996]" />
            <h3 className="font-serif text-2xl italic text-[#1A3C34]">
              2. Your Sanctuaries
            </h3>
          </div>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-bold opacity-40">
            <span className="flex items-center gap-2">
              <Users size={12} /> {passengers} Guests
            </span>
            <span className="flex items-center gap-2">
              <Moon size={12} /> {nights} Nights
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Option A: Roça São João */}
          <div
            onClick={() => setSelectedHotel("sao-joao")}
            className={`group border p-8 transition-all cursor-pointer relative ${selectedHotel === "sao-joao" ? "border-[#1A3C34] bg-white shadow-xl" : "border-[#1A3C34]/10 bg-white/40 opacity-70"}`}
          >
            <div className="aspect-video mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-serif text-2xl italic">Roça São João</h4>
                <p className="text-[9px] uppercase tracking-widest text-[#D4B996] font-bold mt-1 flex items-center gap-1">
                  <MapPin size={10} /> South Island • Cultural Hub
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif text-2xl text-[#1A3C34]">£105</p>
                <p className="text-[8px] uppercase opacity-50 tracking-widest">
                  Net Rate / Night
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-[10px] uppercase tracking-tight opacity-70">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Historical Master Suite
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Half-Board Included
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Direct
                Settlement to Roça
              </li>
            </ul>

            <div
              className={`w-full py-4 text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${selectedHotel === "sao-joao" ? "bg-[#1A3C34] text-white" : "border border-[#1A3C34]/20"}`}
            >
              {selectedHotel === "sao-joao"
                ? "Selected Sanctuary"
                : "Select This Path"}
            </div>
          </div>

          {/* Option B: Mucumbli */}
          <div
            onClick={() => setSelectedHotel("mucumbli")}
            className={`group border p-8 transition-all cursor-pointer relative ${selectedHotel === "mucumbli" ? "border-[#1A3C34] bg-white shadow-xl" : "border-[#1A3C34]/10 bg-white/40 opacity-70"}`}
          >
            <div className="aspect-video mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-serif text-2xl italic">
                  Mucumbli Eco-Lodge
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-[#D4B996] font-bold mt-1 flex items-center gap-1">
                  <MapPin size={10} /> West Coast • Ocean View
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif text-2xl text-[#1A3C34]">£120</p>
                <p className="text-[8px] uppercase opacity-50 tracking-widest">
                  Net Rate / Night
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-[10px] uppercase tracking-tight opacity-70">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Oceanfront Chalet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Organic
                Breakfast
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Private
                Terrace
              </li>
            </ul>

            <div
              className={`w-full py-4 text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${selectedHotel === "mucumbli" ? "bg-[#1A3C34] text-white" : "border border-[#1A3C34]/20"}`}
            >
              {selectedHotel === "mucumbli"
                ? "Selected Sanctuary"
                : "Select This Path"}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICAL SUMMARY (The "Bridge" verification) */}
      <section className="bg-white p-12 border border-[#1A3C34]/5 shadow-sm">
        <h3 className="font-serif text-2xl italic mb-8 flex items-center gap-3">
          <Info size={20} className="text-[#D4B996]" /> Logistical Audit
        </h3>
        <div className="grid md:grid-cols-3 gap-10 text-[10px] uppercase tracking-widest leading-loose">
          <div>
            <p className="font-bold mb-2">Transportation</p>
            <p className="opacity-60 italic text-black">
              Suzuki Jimny 4x4 <br /> Secured via Local Partner #04
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Lisbon Logistics</p>
            <p className="opacity-60 italic text-black">
              Private Chauffeur <br /> Flight TP1527 Monitored
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Fiscal Bridge</p>
            <p className="opacity-60 italic text-black underline decoration-[#D4B996]">
              Direct Settlement Model <br /> No Commission Applied
            </p>
          </div>
        </div>
      </section>

      {/* FINAL ACTION */}
      <div className="text-center pb-24">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-40">
          Confirm selection to generate the Net Cost Ledger
        </p>
        <button className="px-24 py-8 bg-[#1A3C34] text-[#F4F1EA] text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4B996] transition-all shadow-2xl">
          Finalize My Itinerary
        </button>
      </div>
    </div>
  );
}
