import { Hero } from "@/components/layout/Hero";
import { CityGrid } from "@/components/features/CityGrid";
import { TrustSection } from "@/components/layout/TrustSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CityGrid />
      <TrustSection />
      {/* 
        Future Sections:
        - Value Proposition (Why Enter Mexico?)
        - The "Hub & Spoke" Map
        - Testimonials
      */}
    </div>
  );
}
