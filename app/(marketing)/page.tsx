import { Suspense } from "react";
import ProfileCreateSection from "../components/sections/ProfileCreateSection";
import VesselSection from "../components/sections/VesselSection";
import HeroSection from "../components/sections/HeroSection";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <Suspense fallback={<div>loading tags...</div>}>
        <ProfileCreateSection />
      </Suspense>
      {/* The Vessel Section */}
      <VesselSection />
    </>
  );
}
