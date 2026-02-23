// app/portal/[tenantId]/dashboard/page.tsx
import Link from "next/link";

export default function Dashboard({ params }) {
  const { tenantId } = params;

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar Privada */}
      <aside className="w-72 bg-white border-r border-gray-100 p-10 flex flex-col">
        <div className="mb-20">
          <h2 className="font-serif text-2xl">Pure.</h2>
          <p className="text-[10px] uppercase tracking-tighter text-gray-400">
            Concierge Digital
          </p>
        </div>

        <nav className="flex-1 flex flex-col gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500">
          <Link
            href={`/portal/${tenantId}/itinerary`}
            className="text-brand-green border-l-2 border-brand-green pl-4"
          >
            Itinerary
          </Link>
          <Link
            href={`/portal/${tenantId}/logistics`}
            className="hover:text-brand-green pl-4 transition"
          >
            Logistics
          </Link>
          <Link
            href={`/portal/${tenantId}/vessel`}
            className="hover:text-brand-green pl-4 transition"
          >
            The Vessel
          </Link>
          <Link
            href={`/portal/${tenantId}/documents`}
            className="hover:text-brand-green pl-4 transition"
          >
            Vault
          </Link>
        </nav>

        <Link
          href="/logout"
          className="text-[10px] uppercase text-red-400 hover:text-red-600 transition"
        >
          Terminate Session
        </Link>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-16">
        <header className="flex justify-between items-start mb-20">
          <div>
            <span className="text-brand-sand text-[10px] uppercase tracking-widest">
              Welcome back
            </span>
            <h1 className="font-serif text-4xl mt-2 text-brand-green">
              Mr. Harrison
            </h1>
          </div>
          <div className="bg-brand-green text-white p-6 rounded-sm text-center">
            <p className="text-[10px] uppercase tracking-widest mb-1 opacity-70">
              Departure in
            </p>
            <p className="font-serif text-2xl">14 Days</p>
          </div>
        </header>

        {/* Itinerary Preview Card */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-sm border border-gray-50 group hover:border-brand-sand transition duration-500">
            <h3 className="font-serif text-xl mb-4">
              Day 04: The Malanza Mangroves
            </h3>
            <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">
              Private exploration of the southern estuaries followed by a sunset
              dinner aboard your bespoke vessel.
            </p>
            <Link
              href={`/portal/${tenantId}/itinerary/day-4`}
              className="text-[10px] uppercase tracking-widest text-brand-sand font-bold underline decoration-1 underline-offset-4"
            >
              View Details
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
