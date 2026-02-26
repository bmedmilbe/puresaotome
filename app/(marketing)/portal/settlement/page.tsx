"use client";

export default function SettlementPage() {
  // Valores exemplo baseados nas escolhas anteriores
  const totalServices = 845.0;

  return (
    <>
      <header className="mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold font-sans">
          Final Stage
        </span>
        <h1 className="font-serif text-4xl mt-2 italic">Secure Your Journey</h1>
      </header>

      <div className="max-w-2xl bg-white p-12 border border-[#1A3C34]/10 shadow-sm">
        <h3 className="font-serif text-2xl mb-8 italic">Itinerary Invoice</h3>

        <div className="space-y-6 mb-12">
          <div className="flex justify-between border-b border-[#F4F1EA] pb-4">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              Lisbon Chauffeur (Round-trip)
            </span>
            <span className="font-serif">£75.00</span>
          </div>
          <div className="flex justify-between border-b border-[#F4F1EA] pb-4">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              Island Transport (7 Days - Jimny)
            </span>
            <span className="font-serif">£455.00</span>
          </div>
          <div className="flex justify-between border-b border-[#F4F1EA] pb-4">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              Accommodation (Roça São João)
            </span>
            <span className="font-serif">£315.00</span>
          </div>

          <div className="flex justify-between pt-6">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold">
              Total Balance
            </span>
            <span className="text-3xl font-serif text-[#D4B996]">
              £{totalServices}.00
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full py-6 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#D4B996] transition-all">
            Pay & Finalize Booking
          </button>
          <p className="text-[8px] uppercase tracking-widest text-center opacity-40 leading-relaxed">
            Upon payment, all vouchers and curator contacts will be immediately
            released in your "Documents" vault.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-2xl text-center">
        <p className="text-[10px] uppercase tracking-widest opacity-60">
          Need to change something before paying?{" "}
          <span className="underline cursor-pointer">Contact your bridge.</span>
        </p>
      </div>
    </>
  );
}
