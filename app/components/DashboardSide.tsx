"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DashboardSide = () => {
  return (
    // ... dentro do seu componente DashboardPage ...

    <aside className="w-64 border-r border-[#1A3C34]/10 p-8 hidden md:block">
      <nav className="space-y-6 text-[10px] uppercase tracking-widest font-bold mt-12">
        {/* 01. LOGISTICS - Onde o cliente está agora */}
        <Link href="/portal/logistics" className="block">
          <div className="text-[#D4B996] hover:opacity-80 transition-opacity cursor-pointer">
            01. Logistics
          </div>
        </Link>

        {/* 02. CURATORS - Desbloqueado após o pagamento das £150 */}
        <Link href="/portal/curators" className="block">
          <div className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            02. Curators
          </div>
        </Link>

        {/* 02.5 SELECTION - O rascunho do itinerário (Itinerary Draft) */}
        <Link href="/portal/itinerary-draft" className="block">
          <div className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            03. Selection
          </div>
        </Link>

        {/* 03. SETTLEMENT - O pagamento final dos serviços */}
        <Link href="/portal/settlement" className="block">
          <div className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            04. Cost Transparency
          </div>
        </Link>

        {/* 04. DOCUMENTS - Onde ficam os vouchers e PDFs finais */}
        <Link href="/portal/documents" className="block">
          <div className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            05. Documents
          </div>
        </Link>
      </nav>

      {/* Pequeno detalhe de suporte no fim da sidebar */}
      <div className="mt-32 pt-8 border-t border-[#1A3C34]/5">
        <p className="text-[8px] uppercase tracking-widest opacity-30">
          Support
        </p>
        <p className="text-[9px] mt-2 font-serif italic">
          The Bridge is Active
        </p>
      </div>
    </aside>
  );
};

export default DashboardSide;
