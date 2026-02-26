import DashboardSide from "@/app/components/DashboardSide";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const LayoutPortal = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] flex font-sans">
      {/* Sidebar - Navegação de Progresso */}
      <DashboardSide />
      <main className="flex-1 p-8 md:p-16">{children}</main>
    </div>
  );
};

export default LayoutPortal;
