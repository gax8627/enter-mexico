import { cities } from "@/lib/data";
import { notFound } from "next/navigation";
import CityPageClient from "@/components/features/CityPageClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.slug);
  if (!city) return { title: "City Not Found" };

  return {
    title: `Moving to ${city.name} | The 2025 Expat Guide`,
    description: `Discover ${city.name}, Mexico. ${city.description} Learn about safety, cost of living, and internet speeds for remote workers.`,
    openGraph: {
      images: [{ url: city.image }],
    },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cities.find((c) => c.slug === params.slug);

  if (!city) {
    notFound();
  }

  return <CityPageClient city={city} />;
}
