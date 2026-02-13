import SafetyPageClient from "@/components/features/SafetyPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Reality Check Mexico 2025 | Data-Driven Expat Guide",
  description: "Real homicide rates, petty theft data, and safe neighborhood analysis for Baja California and beyond. Mexico vs US city crime statistics.",
  openGraph: {
    images: [{ url: "https://images.unsplash.com/photo-1594895646153-659f63566f12?auto=format&fit=crop&q=80&w=1200" }],
  },
};

export default function SafetyPage() {
  return <SafetyPageClient />;
}
