"use client";

import { City } from "@/lib/data";
import { 
  Building2, 
  Car, 
  DollarSign, 
  MapPin, 
  ShieldCheck, 
  Stethoscope, 
  UtensilsCrossed, 
  Wifi, 
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";
import { ArbitrageComparison } from "./ArbitrageComparison";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function CityPageClient({ city }: { city: City }) {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={city.image} 
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mex-black via-mex-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors font-black uppercase tracking-[0.2em] text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              {dict.quiz?.back || "Back"}
            </Link>
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-6 uppercase tracking-tight italic">
                {city.name}
              </h1>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-2 rounded-full bg-terracotta text-white font-black uppercase tracking-widest text-xs shadow-lg">
                  {city.type}
                </span>
                <span className="px-6 py-2 rounded-full bg-turquoise text-mex-black font-black uppercase tracking-widest text-xs shadow-lg">
                  1:4 Price Ratio
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Stats Dashboard */}
          <div className="lg:col-span-2 space-y-10">
            <div className="mexican-card p-10 md:p-14">
              <h2 className="text-xs font-black text-turquoise uppercase tracking-[0.3em] mb-10">{dict.city_page?.dashboard_title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-terracotta mb-2">
                    <Wifi className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{dict.city_page?.connectivity}</span>
                  </div>
                  <p className="text-3xl font-black text-white italic">{city.stats.internet}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Fiber Verified</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sun-yellow mb-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{dict.city_page?.safety_score}</span>
                  </div>
                  <p className="text-3xl font-black text-white italic">{city.stats.safety}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">A+ Rating</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-turquoise mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{dict.city_page?.us_proximity}</span>
                  </div>
                  <p className="text-3xl font-black text-white italic">{city.stats.proximity}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Port of Entry</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-agave-green mb-2">
                    <Stethoscope className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{dict.city_page?.medical}</span>
                  </div>
                  <p className="text-3xl font-black text-white italic">Elite</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Hospitals/Dental</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl font-serif font-black text-white italic">Relocation DNA</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                {city.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {city.tags.map((tag: string) => (
                  <span key={tag} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* National Scaling: Dynamic Arbitrage Engine */}
            <section className="scroll-mt-32" id="arbitrage">
               <ArbitrageComparison mxCity={city} />
            </section>
          </div>

          {/* Cost Calculator Sidebar */}
          <div className="space-y-10">
            <div className="mexican-card p-10 border-t-8 border-terracotta relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5">
                 <DollarSign className="w-24 h-24 text-white" />
               </div>
              <h3 className="text-xs font-black text-terracotta uppercase tracking-[0.3em] mb-10">{dict.city_page?.cost_calculator}</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-terracotta/20 transition-colors">
                      <Building2 className="w-5 h-5 text-terracotta" />
                    </div>
                    <span className="text-slate-300 font-bold">Luxury Rent</span>
                  </div>
                  <span className="text-white font-black italic">{city.costBreakdown.rent}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-turquoise/20 transition-colors">
                      <UtensilsCrossed className="w-5 h-5 text-turquoise" />
                    </div>
                    <span className="text-slate-300 font-bold">Chef/Dining</span>
                  </div>
                  <span className="text-white font-black italic">{city.costBreakdown.dining}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-sun-yellow/20 transition-colors">
                      <Car className="w-5 h-5 text-sun-yellow" />
                    </div>
                    <span className="text-slate-300 font-bold">Private Transport</span>
                  </div>
                  <span className="text-white font-black italic">{city.costBreakdown.transport}</span>
                </div>
                <div className="pt-8 mt-8 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-turquoise font-black uppercase tracking-widest text-xs">{dict.city_page?.monthly_total}</span>
                    <span className="text-4xl font-serif font-black text-white italic">{city.costBreakdown.total}</span>
                  </div>
                  <button className="btn-mexican btn-mexican-primary w-full py-5 text-sm uppercase tracking-widest font-black">
                    {dict.city_page?.cta_match}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
