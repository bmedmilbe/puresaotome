"use client";

import { CheckCircle2, Info, ShieldCheck } from "lucide-react";

export default function NetCostLedger() {
  const lineItems = [
    {
      label: "Advocacy Fee (Pure São Tomé)",
      amount: 150.0,
      status: "Paid",
      method: "Stripe/UK",
      type: "Fee",
    },
    {
      label: "Roça Sundy Accommodation (4 Nights)",
      amount: 1240.0,
      status: "Reserved",
      method: "Direct/Net",
      type: "Cost",
    },
    {
      label: "Private Curator: Jair (3 Days)",
      amount: 150.0,
      status: "Confirmed",
      method: "Cash/Local",
      type: "Cost",
    },
    {
      label: "4x4 Jimny Rental (7 Days)",
      amount: 455.0,
      status: "Confirmed",
      method: "Direct/Net",
      type: "Cost",
    },
  ];

  const totalNet = lineItems
    .filter((i) => i.type === "Cost")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 p-8 md:p-16 duration-1000">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={18} className="text-[#D4B996]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            Step 04 — Financials
          </span>
        </div>
        <h2 className="font-serif text-5xl italic text-[#1A3C34]">
          Net Cost Ledger
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mt-4 leading-loose max-w-md">
          Audited local rates settled directly with providers. Zero commission
          architecture.
        </p>
      </header>

      <div className="bg-white border border-[#1A3C34]/10 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1A3C34]/5 bg-[#F4F1EA]/30">
              <th className="p-6 text-[9px] uppercase tracking-widest font-bold opacity-50">
                Service Item
              </th>
              <th className="p-6 text-[9px] uppercase tracking-widest font-bold opacity-50 text-right">
                Amount (EUR/GBP)
              </th>
              <th className="p-6 text-[9px] uppercase tracking-widest font-bold opacity-50">
                Settlement Model
              </th>
            </tr>
          </thead>
          <tbody className="text-[11px] uppercase tracking-wider">
            {lineItems.map((item, idx) => (
              <tr
                key={idx}
                className={`border-b border-[#1A3C34]/5 transition-colors ${
                  item.type === "Fee"
                    ? "bg-[#1A3C34]/5 italic"
                    : "hover:bg-[#F4F1EA]/20"
                }`}
              >
                <td className="p-6 font-medium">
                  {item.label}
                  {item.type === "Fee" && (
                    <span className="block text-[8px] mt-1 opacity-50 not-italic">
                      Professional Retainer
                    </span>
                  )}
                </td>
                <td className="p-6 text-right font-serif italic text-xl text-[#1A3C34]">
                  €{item.amount.toFixed(2)}
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.status === "Paid"
                          ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                          : "bg-[#D4B996]"
                      }`}
                    />
                    <span className="opacity-60 text-[9px] font-bold">
                      {item.method}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* BOTTOM TOTAL PANEL */}
        <div className="p-10 bg-[#1A3C34] text-[#F4F1EA] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold mb-1">
              Direct Settlement Total
            </p>
            <p className="text-[10px] italic opacity-40 font-serif">
              Total pass-through cost to island partners
            </p>
          </div>
          <div className="text-right">
            <p className="font-serif text-5xl italic text-[#D4B996]">
              €{totalNet.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* THE VALUE PROPOSITION BOX */}
      <div className="mt-12 p-8 bg-white border-l-4 border-[#D4B996] shadow-sm flex gap-6 items-start">
        <div className="bg-[#D4B996]/10 p-3 rounded-full">
          <CheckCircle2 size={20} className="text-[#D4B996]" />
        </div>
        <div>
          <p className="text-[11px] leading-relaxed text-[#1A3C34] uppercase tracking-widest font-bold mb-2">
            The Advantage of Impartiality
          </p>
          <p className="text-[10px] leading-relaxed text-[#1A3C34]/60 uppercase tracking-widest">
            By utilizing our{" "}
            <span className="text-[#1A3C34] font-bold">
              Direct Settlement Architecture
            </span>
            , you have bypassed traditional UK agency markups. Estimated
            logistical saving:{" "}
            <span className="text-[#1A3C34] font-bold underline decoration-[#D4B996] underline-offset-4">
              €420.00
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
