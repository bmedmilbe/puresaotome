import React from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] selection:bg-[#D4B996] selection:text-[#1A3C34] font-sans">
      <Navigation />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
