"use client";

import { Instagram, ArrowUpRight } from "lucide-react";

export default function InstagramPage() {
  const feeds = [
    {
      label: "The Obô Jungle",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=400",
    },
    {
      label: "Colonial Architecture",
      img: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=400",
    },
    {
      label: "Pure Logistics",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A3C34] text-[#F4F1EA] flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-12">
        <header>
          <div className="w-20 h-20 bg-[#D4B996] rounded-full mx-auto mb-6 flex items-center justify-center text-[#1A3C34]">
            <Instagram size={32} />
          </div>
          <h1 className="font-serif text-4xl italic">@puresaotome</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-60 mt-4">
            London & Príncipe • The Private Bridge
          </p>
        </header>

        <div className="space-y-4">
          <button className="w-full border border-[#D4B996]/30 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4B996] hover:text-[#1A3C34] transition-all flex justify-between px-8 items-center">
            Start Your Distillation <ArrowUpRight size={14} />
          </button>
          <button className="w-full border border-[#D4B996]/30 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#D4B996] hover:text-[#1A3C34] transition-all flex justify-between px-8 items-center">
            The Net Cost Model <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {feeds.map((f, i) => (
            <div
              key={i}
              className="aspect-square bg-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <img
                src={f.img}
                alt={f.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <footer className="pt-12">
          <p className="text-[8px] uppercase tracking-[0.5em] opacity-40 italic">
            Uncover the Equator.
          </p>
        </footer>
      </div>
    </div>
  );
}
