"use client";

import { Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-8 text-[#1A3C34]">
      <header className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          Professional Framework
        </span>
        <h1 className="font-serif text-6xl italic mt-4">Terms of Advocacy</h1>
      </header>

      <div className="space-y-16 border-t border-[#1A3C34]/10 pt-16">
        <section className="bg-[#1A3C34] p-10 text-[#F4F1EA]">
          <h3 className="font-serif text-2xl italic mb-4 text-[#D4B996]">
            The Advocate Model
          </h3>
          <p className="text-[10px] leading-relaxed uppercase tracking-widest opacity-80">
            Pure São Tomé is a Travel Management Consultancy. We are not a
            traditional tour operator. Your £150 fee is for professional
            curation, logistical auditing, and the provision of the "Private
            Bridge" portal.
          </p>
        </section>

        <div className="space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="font-serif text-xl italic">Direct Settlement</div>
            <div className="md:col-span-2 text-[10px] leading-relaxed opacity-60 uppercase tracking-widest">
              Contracts for accommodation, transport, and guiding are formed
              directly between the Client and the Provider. Pure São Tomé
              facilitates this "Bridge" at Net Cost and accepts no liability for
              third-party service delivery.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="font-serif text-xl italic">The Retainer</div>
            <div className="md:col-span-2 text-[10px] leading-relaxed opacity-60 uppercase tracking-widest">
              The £150 Professional Retainer is non-refundable once the "Net
              Cost Ledger" has been generated, as this represents the completion
              of our audit and curation work.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
