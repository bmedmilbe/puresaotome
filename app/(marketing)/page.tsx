import { Suspense } from "react";
import HeroSection from "../components/homesections/HeroSection";
import PromiseSection from "../components/homesections/PromiseSection";
import PotentialitiesSection from "../components/homesections/PotentialitiesSection";
import ServicePillarsSection from "../components/homesections/ServicePillarsSection";
import ProfileCreatorLoader from "../components/loaders/ProfileCreatorLoader";
import FinalCTA from "../components/homesections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <PromiseSection />

      <PotentialitiesSection />

      <ServicePillarsSection />

      {/* This handles the Tag Selector logic we built */}
      <Suspense
        fallback={
          <div className="py-32 text-center uppercase tracking-widest text-[10px]">
            Loading the Vault...
          </div>
        }
      >
        <ProfileCreatorLoader />
      </Suspense>

      <FinalCTA />
    </>
  );
}
