"use client";
import { Globe, Anchor, ShieldCheck } from "lucide-react";

export default function ServicePillarsSection() {
  const pillars = [
    {
      icon: <Globe />,
      title: "The Fiscal Bridge",
      desc: "We manage the complex banking logistics between London and STP, ensuring your deposits are secure.",
      // price: "£75 Service Fee",
    },
    {
      icon: <Anchor />,
      title: "Island Mobility",
      desc: "I secure your 4x4 Jimny for independent exploration.Access local rates with no agency markup.",
      price: "From £65 / Day",
    },
    {
      icon: <ShieldCheck />,
      title: "Local Curators",
      desc: "Expert guides who act as your cultural bridge.",
      price: "£50 / Day",
    },
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="p-12 border border-[#1A3C34]/10 bg-white shadow-sm flex flex-col justify-between"
        >
          <div className="text-[#D4B996] mb-8">{p.icon}</div>
          <div>
            <h4 className="font-serif text-2xl italic mb-4">{p.title}</h4>
            <p className="text-sm opacity-70 leading-relaxed mb-6">{p.desc}</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#D4B996]">
              {p.price}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
