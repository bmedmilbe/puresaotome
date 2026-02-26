"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DashboardPage() {
  const [passengers, setPassengers] = useState(1);

  // PREÇOS FIXOS (Transparent Pricing)
  const prices = {
    consultancy: 95,
    jimny: 65,
    chauffeurSTP: 90,
    chauffeurLisbon: 75, // Airport -> Hotel -> Airport
    accommodation: 120,
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] flex">
      {/* Sidebar de Gestão */}
      <aside className="w-64 border-r border-[#1A3C34]/10 p-8 hidden md:block text-[#1A3C34]">
        <h2 className="font-serif text-2xl italic mb-12">The Vault</h2>
        <nav className="space-y-6 text-[10px] uppercase tracking-widest font-bold">
          <div className="text-[#D4B996]">01. Logistics & Connection</div>
          <div className="opacity-40">02. Curators (Guides)</div>
          <div className="opacity-40">03. Documents</div>
        </nav>
      </aside>

      <main className="flex-1 p-8 md:p-16">
        <header className="mb-12 border-b border-[#1A3C34]/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            Personal Consultancy Portal
          </span>
          <h1 className="font-serif text-4xl mt-2 italic text-[#1A3C34]">
            Your Journey, Tailored.
          </h1>
          <p className="text-[10px] uppercase tracking-widest mt-4 opacity-60">
            No Hidden Fees • Fixed Local Rates • Professional Guidance
          </p>
        </header>

        <div className="max-w-4xl space-y-12">
          {/* SECTION: LISBON CONNECTION */}
          <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-serif text-xl">Lisbon Stopover</h3>
              <span className="bg-[#1A3C34] text-[#F4F1EA] px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                Fixed Rate: £{prices.chauffeurLisbon}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <p className="text-xs font-light leading-relaxed">
                Includes a private professional driver for your complete
                connection:
                <strong>
                  {" "}
                  Airport pick-up → Hotel drop-off → Airport return.
                </strong>
                Seamless transition so you can focus on the city.
              </p>
              <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1558236714-d118753a89fe?q=80&w=800')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </section>

          {/* SECTION: TRANSPORTATION STP */}
          <section className="bg-white/50 p-8 border border-[#1A3C34]/5">
            <h3 className="font-serif text-xl mb-6">
              Island Mobility (São Tomé)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group border border-[#1A3C34]/10 p-6 hover:border-[#D4B996] transition-all relative cursor-pointer bg-white/30">
                <p className="text-[10px] uppercase font-bold tracking-widest">
                  Self-Drive Explorer
                </p>
                <p className="text-2xl font-serif mt-2 italic">
                  £{prices.jimny}{" "}
                  <span className="text-[10px] uppercase not-italic opacity-60">
                    / day
                  </span>
                </p>
                <p className="text-[9px] mt-4 opacity-70 leading-relaxed uppercase tracking-tighter">
                  Suzuki Jimny 4x4 • Delivered to your location
                </p>
                <input
                  type="radio"
                  name="transport"
                  className="absolute top-6 right-6 accent-[#1A3C34]"
                  defaultChecked
                />
              </div>

              <div className="group border border-[#1A3C34]/10 p-6 hover:border-[#D4B996] transition-all relative cursor-pointer bg-white/30">
                <p className="text-[10px] uppercase font-bold tracking-widest">
                  Private Chauffeur & Guide
                </p>
                <p className="text-2xl font-serif mt-2 italic">
                  £{prices.chauffeurSTP}{" "}
                  <span className="text-[10px] uppercase not-italic opacity-60">
                    / day
                  </span>
                </p>
                <p className="text-[9px] mt-4 opacity-70 leading-relaxed uppercase tracking-tighter">
                  Certified Local Expert • Full Daily Availability
                </p>
                <input
                  type="radio"
                  name="transport"
                  className="absolute top-6 right-6 accent-[#1A3C34]"
                />
              </div>
            </div>
          </section>

          {/* THE CORE: CONSULTATION EXPLANATION */}
          <section className="bg-[#1A3C34] text-[#F4F1EA] p-10 border-l-4 border-[#D4B996] shadow-2xl">
            <div className="mb-8">
              <h3 className="font-serif text-2xl italic">
                The Consultation Service
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4B996] font-bold mt-2">
                Expertise • Coordination • Access
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-10 text-xs font-light leading-relaxed opacity-90">
              <p>
                My service is strictly for{" "}
                <span className="italic font-serif text-[#D4B996]">
                  Personalized Consultation
                </span>
                . I do not sell generic packages. The <strong>£95 fee</strong>{" "}
                is what you pay for my time and knowledge to:
              </p>
              <ul className="space-y-3 text-[10px] uppercase tracking-widest">
                <li>• Design your optimal route (The Itinerary)</li>
                <li>
                  • Curate and connect you with the best local Guides (Guias)
                </li>
                <li>• Secure your Lisbon and São Tomé private drivers</li>
                <li>• Provide 24/7 support as your local bridge</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 border border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold">
                  Consultancy & Connection Fee:
                </p>
                <p className="font-serif text-4xl text-[#D4B996] mt-1">
                  £95.00
                </p>
              </div>
              <button className="px-10 py-5 bg-[#F4F1EA] text-[#1A3C34] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4B996] transition-all">
                Book Consultation
              </button>
            </div>
            <p className="text-[8px] mt-6 opacity-40 uppercase tracking-[0.1em]">
              Note: Service costs (Drivers, Roças) are paid via our secure
              portal once the route is confirmed.
            </p>
          </section>

          {/* FINAL NOTES */}
          <div className="pt-8">
            <h3 className="font-serif text-xl mb-4 text-[#1A3C34]">
              Itinerary Details
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/50 p-4 border border-[#1A3C34]/10">
                <p className="text-[9px] uppercase font-bold opacity-60 mb-2">
                  Travelers
                </p>
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  className="bg-transparent font-serif text-xl outline-none w-full"
                />
              </div>
              <div className="md:col-span-3">
                <textarea
                  placeholder="SHARE YOUR TRAVEL DATES AND ANY SPECIFIC INTERESTS (NATURE, HISTORY, GASTRONOMY)..."
                  className="w-full h-full min-h-[100px] bg-white/50 border border-[#1A3C34]/10 p-4 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-[#D4B996]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
