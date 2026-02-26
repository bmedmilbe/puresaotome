"use client";
import { Trees, Waves, Star, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PotentialitiesSection() {
  const features = [
    {
      icon: <Trees />,
      title: "The Obô Jungle",
      desc: "Pristine trekking through secondary and virgin rainforests.",
    },
    {
      icon: <Waves />,
      title: "Príncipe Waters",
      desc: "Crystal clear diving among volcanic rock formations.",
    },
    {
      icon: <Star />,
      title: "Turtle Nesting",
      desc: "Seasonal conservation experiences at Praia Inhame.",
    },
    {
      icon: <Compass />,
      title: "Endemic Species",
      desc: "Home to the Giant Sunbird and rare orchids.",
    },
  ];

  return (
    <section className="bg-[#1A3C34] py-32 px-8 text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
              Unlocking The Archipelago
            </span>
            <h2 className="font-serif text-5xl mt-4 italic">
              Africa’s Galapagos.
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-[10px] uppercase tracking-widest font-bold text-[#D4B996] flex items-center gap-2 border-b border-[#D4B996] pb-2"
          >
            Explore Nature Insights <ArrowRight size={14} />
          </Link>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="space-y-4">
              <div className="text-[#D4B996]">{f.icon}</div>
              <h4 className="font-serif text-xl italic">{f.title}</h4>
              <p className="text-[11px] opacity-60 uppercase tracking-widest leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
