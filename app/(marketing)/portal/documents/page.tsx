"use client";

import { FileText, Download, ShieldCheck, Map, Phone } from "lucide-react";

const documents = [
  {
    title: "The Purity Guide: São Tomé",
    type: "Digital Dossier",
    desc: "Your advocate's insider briefing on etiquette, hidden beaches, and roça dining.",
    size: "4.2 MB",
    status: "Ready",
  },
  {
    title: "Logistics & Transport Vouchers",
    type: "Service Vouchers",
    desc: "Direct Settlement confirmation for Jair (Curator) and your 4x4 Jimny rental.",
    size: "1.1 MB",
    status: "Ready",
  },
  {
    title: "Provider Audit Certificates",
    type: "Compliance",
    desc: "Verified Public Liability Insurance copies for all selected island partners.",
    size: "2.8 MB",
    status: "Ready",
  },
];

export default function DocumentsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 md:p-16 animate-in fade-in duration-1000">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={18} className="text-[#D4B996]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            Step 05 — Handover
          </span>
        </div>
        <h1 className="font-serif text-5xl italic text-[#1A3C34]">
          The Purity Dossier
        </h1>
        <p className="mt-6 text-[11px] uppercase tracking-widest opacity-60 leading-loose max-w-xl">
          Your bridge is fully constructed. Below are your audited travel
          documents and your bespoke island briefing.
        </p>
      </header>

      <div className="grid gap-6">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="group bg-white border border-[#1A3C34]/10 p-8 flex flex-col md:flex-row justify-between items-center hover:border-[#D4B996] transition-all"
          >
            <div className="flex gap-6 items-center mb-6 md:mb-0">
              <div className="w-12 h-12 bg-[#F4F1EA] flex items-center justify-center text-[#1A3C34] group-hover:bg-[#1A3C34] group-hover:text-[#F4F1EA] transition-colors">
                <FileText size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#D4B996] font-bold mb-1">
                  {doc.type}
                </p>
                <h3 className="font-serif text-xl italic text-[#1A3C34]">
                  {doc.title}
                </h3>
                <p className="text-[10px] opacity-50 mt-1 max-w-sm leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <span className="text-[9px] opacity-30 font-bold uppercase">
                {doc.size}
              </span>
              <button className="flex items-center gap-2 bg-[#1A3C34] text-[#F4F1EA] px-6 py-3 text-[9px] uppercase tracking-widest font-bold hover:bg-[#D4B996] transition-all">
                <Download size={14} /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency & Support Bridge */}
      <section className="mt-20 border-t border-[#1A3C34]/10 pt-12">
        <h4 className="font-serif text-2xl italic mb-8 text-[#1A3C34]">
          On-Island Advocacy
        </h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A3C34] p-8 text-[#F4F1EA]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4B996] font-bold mb-4">
              The Concierge Line
            </p>
            <div className="flex items-center gap-4 mb-2">
              <Phone size={16} className="opacity-60" />
              <p className="font-serif text-lg">+44 (0) 20 7946 0123</p>
            </div>
            <p className="text-[9px] opacity-40 uppercase tracking-widest">
              London Dispatch • 24/7 Priority Support
            </p>
          </div>

          <div className="border border-[#1A3C34]/10 p-8 bg-white/50">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A3C34] font-bold mb-4 flex items-center gap-2">
              <Map size={14} /> Digital Maps
            </p>
            <p className="text-[10px] leading-relaxed opacity-60 uppercase tracking-widest">
              Offline Google Maps markers for every Roça and beach in your
              itinerary are ready for sync.
            </p>
            <button className="mt-4 text-[10px] font-bold border-b border-[#1A3C34] pb-1 uppercase tracking-widest">
              Sync to Device
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
