import SolvencyPageClient from "@/components/features/SolvencyPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Mexican Residency Solvency Requirements | Updated Jan 2025",
  description: "New income and savings requirements for Mexican Temporary and Permanent residency. Don't get denied using 2024 numbers.",
  openGraph: {
    images: [{ url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=1200" }],
  },
};

export default function SolvencyPage() {
  return <SolvencyPageClient />;
}
