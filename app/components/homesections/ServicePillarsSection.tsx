"use client";
import { Globe, Anchor, ShieldCheck } from "lucide-react";

export default function ServicePillarsSection() {
  const pillars = [
    {
      icon: <Globe />,
      title: "The Fiscal Bridge",
      desc: "Secure GBP settlements for local providers. We bypass STP's banking hurdles at net cost.",
      price: "Included in Retainer",
    },
    {
      icon: <Anchor />,
      title: "Island Mobility",
      desc: "Audited 4x4 Jimny rentals for independent exploration. Settled directly at local rates.",
      price: "Net Rate: From £65 / Day",
    },
    {
      icon: <ShieldCheck />,
      title: "Audited Curators",
      desc: "Personally vetted experts with verified public liability and local licensing.",
      price: "Net Rate: £50 / Day",
    },
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      {pillars.map((p, i) => (
        <div
          key={i}
          className="p-12 border border-[#1A3C34]/10 bg-white shadow-sm flex flex-col justify-between hover:border-[#D4B996] transition-all"
        >
          <div className="text-[#D4B996] mb-8">{p.icon}</div>
          <div>
            <h4 className="font-serif text-2xl italic mb-4 text-[#1A3C34]">
              {p.title}
            </h4>
            <p className="text-xs opacity-70 leading-relaxed mb-6 text-[#1A3C34]">
              {p.desc}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4B996] border-t border-[#D4B996]/20 pt-4">
              {p.price}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
