/* Page: The Concept
  Objective: To explain the "Fixed Fee" and "Direct Settlement" model.
  Tone: Sophisticated, Transparent, Grounded.
*/

export default function ConceptPage() {
  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-8 italic">
            A Bridge Built on Trust.
          </h1>
          <p className="text-lg md:text-xl text-[#1A3C34] leading-relaxed font-light opacity-80">
            Pure São Tomé was born from a simple realization: the most authentic
            travel experiences are often hidden behind high agency markups and
            impenetrable logistics. We removed the middleman to become your
            advocate.
          </p>
        </section>

        {/* The Pillars */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#1A3C34]/10 pt-16">
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4B996] mb-4">
              01. The Fixed Fee
            </h3>
            <p className="text-sm leading-relaxed text-[#1A3C34]">
              We charge a single professional retainer of £150. This decouples
              our profit from your travel spend, ensuring our advice is always
              impartial.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4B996] mb-4">
              02. Net Cost Access
            </h3>
            <p className="text-sm leading-relaxed text-[#1A3C34]">
              You pay what locals pay. By settling directly with providers, you
              bypass the 20% industry standard commission.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4B996] mb-4">
              03. Local Vetting
            </h3>
            <p className="text-sm leading-relaxed text-[#1A3C34]">
              Every partner on our platform is personally audited for safety,
              insurance, and cultural alignment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
