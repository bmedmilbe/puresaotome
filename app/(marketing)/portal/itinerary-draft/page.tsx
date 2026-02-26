"use client";

import { useState } from "react";

export default function ItineraryDraftPage() {
  // 1. ESTADOS (Para saber o que o cliente clicou)
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [passengers] = useState(2); // Este valor viria da base de dados/URL
  const [nights] = useState(7); // Este valor viria das datas do Step 01
  return (
    <div className="max-w-4xl space-y-16">
      {/* 1. SELECÇÃO DO GUIA (Baseado no que carregaste para ele) */}
      <section>
        <h3 className="font-serif text-2xl mb-6 italic">
          1. Your Dedicated Curator
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#1A3C34] p-6 bg-white/40">
            <p className="text-[10px] font-bold uppercase text-[#D4B996] mb-2">
              My Recommendation
            </p>
            <h4 className="font-serif text-2xl mb-4 italic">Jair</h4>
            <p className="text-xs font-light mb-6 leading-relaxed">
              Based on your interest in history and Roças, Jair is the perfect
              match to guide your journey.
            </p>
            <button className="w-full py-3 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-widest font-bold">
              Confirm Jair as my Guide
            </button>
          </div>
        </div>
      </section>

      {/* 2. SELECÇÃO DE ALOJAMENTO (Tu dás as opções, ele escolhe) */}
      {/* 2. YOUR SANCTUARIES (Alojamento com Preços Claros) */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-serif text-2xl italic text-[#1A3C34]">
            2. Your Sanctuaries
          </h3>
          <span className="text-[10px] uppercase tracking-widest opacity-60">
            Verified Availability for your dates
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opção A: Roça São João */}
          <div className="group border border-[#1A3C34]/10 p-6 bg-white/40 hover:border-[#D4B996] transition-all relative">
            <div className="aspect-video mb-6 overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-serif text-2xl italic">Roça São João</h4>
                <p className="text-[9px] uppercase tracking-widest text-[#D4B996] font-bold">
                  South Island • Cultural Heritage
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif text-xl">£105</p>
                <p className="text-[8px] uppercase opacity-50">Per Night</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Full
                Breakfast Included
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Ecological Tax: £3/night (Included)
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Non-Refundable within 7 days of arrival
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-4 border-t border-[#1A3C34]/5">
              <input
                type="radio"
                name="hotel_choice"
                className="accent-[#1A3C34] w-4 h-4"
              />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                Select this Sanctuary
              </span>
            </label>
          </div>

          {/* Opção B: Mucumbli */}
          <div className="group border border-[#1A3C34]/10 p-6 bg-white/40 hover:border-[#D4B996] transition-all relative">
            <div className="aspect-video mb-6 overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-serif text-2xl italic">
                  Mucumbli Eco-Lodge
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-[#D4B996] font-bold">
                  West Coast • Ocean View
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif text-xl">£120</p>
                <p className="text-[8px] uppercase opacity-50">Per Night</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Organic
                Breakfast Included
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" /> Private
                Sea View Terrace
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-70">
                <span className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                Cancellation: 15 days notice required
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-4 border-t border-[#1A3C34]/5">
              <input
                type="radio"
                name="hotel_choice"
                className="accent-[#1A3C34] w-4 h-4"
              />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                Select this Sanctuary
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* 3. RESUMO DO ITINERÁRIO (Locais que vai visitar) */}
      {/* 2. YOUR SANCTUARIES */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h3 className="font-serif text-2xl italic text-[#1A3C34]">
            2. Your Sanctuaries
          </h3>
          <p className="text-[9px] uppercase tracking-widest opacity-60">
            Adjusted for {passengers}{" "}
            {passengers > 1 ? "Travelers" : "Traveler"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Exemplo: Roça São João */}
          <div className="group border border-[#1A3C34]/10 p-6 bg-white/40 hover:border-[#D4B996] transition-all relative">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-serif text-2xl italic">Roça São João</h4>
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#D4B996] font-bold">
                  Master Suite • South Island
                </p>
              </div>
              <div className="text-right">
                {/* O preço aqui já deve ser o resultado da tua lógica: ex: £80 (base) + £25 (extra person) */}
                <p className="font-serif text-2xl">£105</p>
                <p className="text-[8px] uppercase opacity-50 tracking-widest">
                  Total per night
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-[#1A3C34]/5 pb-2 text-[10px] uppercase tracking-tighter">
                <span className="opacity-60">Occupancy</span>
                <span className="font-bold">{passengers} Guests</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1A3C34]/5 pb-2 text-[10px] uppercase tracking-tighter">
                <span className="opacity-60">Board Basis</span>
                <span className="font-bold">
                  Half-Board (Breakfast & Dinner)
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1A3C34]/5 pb-2 text-[10px] uppercase tracking-tighter">
                <span className="opacity-60">Room Type</span>
                <span className="font-bold">Historical Suite</span>
              </div>
            </div>

            <div className="bg-[#1A3C34]/5 p-4 mb-6">
              <p className="text-[9px] uppercase font-bold mb-2 tracking-widest">
                Pricing Conditions:
              </p>
              <ul className="text-[9px] space-y-1 opacity-70 leading-relaxed uppercase">
                <li>
                  • Rates are based on {passengers} travelers as per Step 01.
                </li>
                <li>• Includes all local hospitality taxes.</li>
                <li>
                  • Extra beds or changes in party size may alter this rate.
                </li>
              </ul>
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-4 border-t border-[#1A3C34]/10">
              <input
                type="radio"
                name="hotel_choice"
                className="accent-[#1A3C34] w-4 h-4"
              />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                Confirm this Stay
              </span>
            </label>
          </div>

          {/* Outras opções seguiriam o mesmo padrão... */}
        </div>
      </section>

      {/* BOTÃO FINAL PARA IR PARA PAGAMENTO DOS SERVIÇOS */}
      <div className="text-center pt-8">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-6 opacity-60">
          Once you confirm these elements, I will prepare your final invoice for
          the services.
        </p>
        <button className="px-20 py-6 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4B996] transition-all">
          Confirm Selections
        </button>
      </div>
    </div>
  );
}
