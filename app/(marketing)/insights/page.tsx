/* Page: Insights
  Objective: To showcase deep destination knowledge and "unfiltered" content.
  Tone: Educational, Atmospheric, Exclusive.
*/

const insights = [
  {
    category: "Logistics",
    title: "Navigating the Equator",
    excerpt: "Why the Jimny is the only way to see the Roças of the North.",
  },
  {
    category: "Culture",
    title: "The Tchiloli Ritual",
    excerpt:
      "A 16th-century Renaissance play performed in the middle of the rainforest.",
  },
  {
    category: "Nature",
    title: "Beyond the Peak",
    excerpt: "Tracking the endemic Giant Sunbird in the Obô National Park.",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-[#1A3C34] min-h-screen pt-32 pb-20 px-8 text-[#F4F1EA]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-50 mb-4">
            Destination Intelligence
          </h2>
          <h1 className="text-5xl font-serif italic">
            Unfiltered Perspectives.
          </h1>
        </header>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((article, index) => (
            <div
              key={index}
              className="border border-[#F4F1EA]/10 p-8 hover:bg-[#F4F1EA] hover:text-[#1A3C34] transition-all group cursor-pointer"
            >
              <p className="text-[9px] tracking-widest uppercase mb-6 opacity-60 group-hover:opacity-100">
                {article.category}
              </p>
              <h3 className="text-2xl font-serif mb-4 italic">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-90 mb-8">
                {article.excerpt}
              </p>
              <span className="text-[10px] tracking-tighter uppercase font-bold border-b border-current pb-1">
                Read Insight
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
