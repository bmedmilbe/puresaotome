"use client";

import { Shield, EyeOff, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-8 text-[#1A3C34]">
      <header className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
          Data Sovereignty
        </span>
        <h1 className="font-serif text-6xl italic mt-4">Privacy Policy</h1>
        <p className="mt-8 text-sm opacity-60 leading-relaxed max-w-xl uppercase tracking-widest">
          At Pure São Tomé, we treat your travel profile with the same
          discretion as a private bank.
        </p>
      </header>

      <div className="space-y-16 border-t border-[#1A3C34]/10 pt-16">
        <section className="grid md:grid-cols-3 gap-8">
          <div className="font-serif text-2xl italic">01. Curation Data</div>
          <div className="md:col-span-2 text-xs leading-relaxed opacity-70 space-y-4 uppercase tracking-widest">
            <p>
              We collect your "Distillation" preferences only to match you with
              audited local partners. We do not sell, trade, or leak your travel
              habits to third-party advertisers.
            </p>
            <p>
              Information shared with local curators (Jair, Edmilson) is limited
              to logistical necessity and safety requirements.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="font-serif text-2xl italic">
            02. Financial Privacy
          </div>
          <div className="md:col-span-2 text-xs leading-relaxed opacity-70 uppercase tracking-widest">
            <p>
              Your £150 Advocacy Fee is processed via Stripe UK. We do not store
              full credit card details on our local servers. Direct Settlement
              data remains between you and the local provider; we merely act as
              the bridge.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="font-serif text-2xl italic">03. Right to Erasure</div>
          <div className="md:col-span-2 text-xs leading-relaxed opacity-70 uppercase tracking-widest">
            <p>
              Post-journey, you may request the full deletion of your profile.
              We believe your memories should be yours alone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
