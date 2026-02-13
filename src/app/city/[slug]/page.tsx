import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/lib/data";
import { ArrowRight, DollarSign, Home, Shield, Wifi } from "lucide-react";
import Link from "next/link";
import { ParallaxHeroImage } from "@/components/ui/ParallaxHeroImage";
import { CostCalculator } from "@/components/features/CostCalculator";

// 1. Generate Static Params for SSG (SEO Agent Skill)
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// 2. Generate Metadata (SEO Agent Skill)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.slug);
  if (!city) return {};
  
  return {
    title: `Living in ${city.name} | Enter Mexico Relocation Guide`,
    description: `Everything you need to know about moving to ${city.name}. Costs, Safety, Visas, and Rentals. ${city.tagline}.`,
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cities.find((c) => c.slug === params.slug);
  if (!city) notFound();

  return (
    <div className="min-h-screen pb-20">
      {/* City Hero */}
      <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <ParallaxHeroImage src={city.image} alt={city.name} />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-sand-500 text-ocean-900 font-bold text-sm tracking-wide uppercase">
            {city.tagline}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            {city.name}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            {city.description}
          </p>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cost Card */}
          <div className="bg-ocean-800/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-sand-500/20 text-sand-400">
                <DollarSign className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Cost of Living</h3>
                <p className="text-slate-400 text-sm">Monthly Average</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{city.details.rent}</div>
            <p className="text-slate-400 text-sm">For a 2-bedroom home in a gated community.</p>
          </div>

          {/* Commute Card */}
          <div className="bg-ocean-800/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Proximity</h3>
                <p className="text-slate-400 text-sm">To US Border</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{city.details.commute}</div>
            <p className="text-slate-400 text-sm">Driving time to San Diego / Calexico border.</p>
          </div>

          {/* Connectivity Card */}
          <div className="bg-ocean-800/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400">
                <Wifi className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Connectivity</h3>
                <p className="text-slate-400 text-sm">Internet Speed</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">{city.stats.internet}</div>
            <p className="text-slate-400 text-sm">Verified speed test average.</p>
          </div>

          {/* Hospital Card */}
          <div className="bg-ocean-800/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Healthcare</h3>
                <p className="text-slate-400 text-sm">Top Hospital</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">{city.details.hospital}</div>
            <p className="text-slate-400 text-sm">US-accredited facility accepting major insurance.</p>
          </div>
        </div>
      </div>

      {/* Cost Calculator Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <CostCalculator cityName={city.name} rentAverage={1200} />
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">
          Ready to tour {city.name}?
        </h2>
        <p className="text-slate-400 mb-8">
          We have vetted 3 partner agencies in {city.name}. Book a specialized tour to see the best gated communities.
        </p>
        <Link 
          href="/partner" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-sand-500 hover:bg-sand-400 text-ocean-900 font-bold rounded-full transition-colors"
        >
          Contact Partner Agent
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
