"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSide = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-[#1A3C34]/10 p-8 hidden md:block h-screen sticky top-0 bg-[#F4F1EA]">
      <nav className="space-y-6 text-[10px] uppercase tracking-widest font-bold mt-12">
        <Link href="/portal/logistics" className="block">
          <div
            className={`${pathname === "/portal/logistics" ? "text-[#D4B996]" : "opacity-40"} hover:opacity-100 transition-opacity cursor-pointer`}
          >
            01. Logistics
          </div>
        </Link>

        <Link href="/portal/curators" className="block">
          <div
            className={`${pathname === "/portal/curators" ? "text-[#D4B996]" : "opacity-40"} hover:opacity-100 transition-opacity cursor-pointer`}
          >
            02. Curators
          </div>
        </Link>

        <Link href="/portal/itinerary-draft" className="block">
          <div
            className={`${pathname === "/portal/itinerary-draft" ? "text-[#D4B996]" : "opacity-40"} hover:opacity-100 transition-opacity cursor-pointer`}
          >
            03. Selection
          </div>
        </Link>

        <Link href="/portal/settlement" className="block">
          <div
            className={`${pathname === "/portal/settlement" ? "text-[#D4B996]" : "opacity-40"} hover:opacity-100 transition-opacity cursor-pointer`}
          >
            04. Net Cost Ledger
          </div>
        </Link>
        <Link href="/portal/documents" className="block">
          <div
            className={`${pathname === "/portal/documents" ? "text-[#D4B996]" : "opacity-40"} hover:opacity-100 transition-opacity cursor-pointer`}
          >
            04. Documents
          </div>
        </Link>
      </nav>

      {/* Fiscal Bridge Status Section */}
      <div className="mt-32 pt-8 border-t border-[#1A3C34]/5">
        <p className="text-[8px] uppercase tracking-widest opacity-30 mb-4">
          Fiscal Bridge Status
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] font-serif italic text-[#1A3C34]">
              Buy-Back Active
            </p>
          </div>
          <p className="text-[7px] uppercase tracking-tighter opacity-40 leading-tight">
            Leftover Dobras will be credited to your UK account at the official
            net rate.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSide;
