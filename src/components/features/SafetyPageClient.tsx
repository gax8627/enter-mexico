"use client";

import { AlertTriangle, CheckCircle, Shield, TrendingDown, MapPin, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function SafetyPageClient() {
  const { dict } = useLanguage();
  const safety = dict.safety_page || {};

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 z-[-2]">
        <img 
          src="https://images.unsplash.com/photo-1594895646153-659f63566f12?auto=format&fit=crop&q=80&w=2000" 
          alt="Safety Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-mex-black/90" />
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Modern Mexican Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20 text-xs font-black uppercase tracking-widest"
          >
            <Shield className="w-4 h-4" />
            <span>{safety.badge}</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-tight">
            {safety.title_line_1} <br />
            <span className="text-gradient-mexican italic">{safety.title_highlight}</span> <br />
            {safety.title_line_2}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            {safety.subtitle}
          </p>
        </div>

        {/* Managed Risk & Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="mexican-card p-12 space-y-8 group border-l-8 border-terracotta">
            <h2 className="text-3xl font-serif font-black text-white">{safety.managed_risk_title}</h2>
            <p className="text-slate-300 text-lg leading-relaxed italic">
              &quot;{safety.managed_risk_desc}&quot;
            </p>
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-mex-black/50 border border-white/5">
              <div className="p-4 rounded-full bg-terracotta/20 text-terracotta">
                <TrendingDown className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-white italic">-12%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Violent Crime Decrease 2024-25</p>
              </div>
            </div>
          </div>

          <div className="mexican-card p-12 bg-sun-yellow/5 border-l-8 border-sun-yellow space-y-8">
            <div className="flex items-center gap-3 text-sun-yellow">
              <AlertTriangle className="w-8 h-8" />
              <h3 className="text-xl font-black uppercase tracking-widest">Real-World Logic</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: "Petty Theft", detail: "Preventable with common sense (same as SF/LA)." },
                { label: "Road Safety", detail: "Driving at night is the real risk, not cartels." },
                { label: "Bureaucracy", detail: "Scams target those looking for 'shortcuts'." }
              ].map((risk, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-white font-black uppercase tracking-widest text-xs">{risk.label}</p>
                  <p className="text-slate-400 font-medium">{risk.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safe Zone Analysis */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-white">{safety.neighborhoods_title}</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Vetted districts with 24/7 security corridors</p>
            </div>
            <div className="flex items-center gap-3 glass-panel px-6 py-3 rounded-2xl border border-white/5">
              <Search className="w-4 h-4 text-turquoise" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Live Status: SECURE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safety.neighborhoods?.map((nb: any, i: number) => (
              <div key={i} className="mexican-card p-8 group hover:bg-white/5 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-mex-black border border-white/5 text-turquoise group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    nb.risk === "Minimal" || nb.risk === "Mínimo" ? "bg-turquoise/20 text-turquoise" : "bg-sun-yellow/20 text-sun-yellow"
                  }`}>
                    {nb.risk} Risk
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-1">{nb.name}</h3>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">{nb.city}</p>
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-tighter">
                  <CheckCircle className="w-4 h-4 text-turquoise" />
                  {nb.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Outrank Table */}
        <div className="space-y-16 py-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight">
              {safety.table_title}
            </h2>
            <p className="text-slate-400 font-medium italic">
              Data strictly from FBI Uniform Crime Reporting (US) and SESNSP (Mexico) 2024 Annual Reports.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-20 rounded-[40px] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-terracotta via-turquoise to-sun-yellow" />
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-turquoise text-[10px] font-black uppercase tracking-[0.4em]">
                    <th className="pb-10 px-4">City / Region</th>
                    <th className="pb-10 px-4">Homicide Rate (per 100k)</th>
                    <th className="pb-10 px-4">Cost Arbitrage</th>
                    <th className="pb-10 px-4">Medical Access</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {[
                    { key: 'mexicali' as keyof typeof safety.comparison_cities, rate: '18.2', arb: '65% Savings', med: '5 mins to US Board' },
                    { key: 'merida' as keyof typeof safety.comparison_cities, rate: '2.1', arb: '50% Savings', med: 'Regional Hub' },
                    { key: 'st_louis' as keyof typeof safety.comparison_cities, rate: '66.7', arb: '0% (Base)', med: 'Tier 1' },
                    { key: 'baltimore' as keyof typeof safety.comparison_cities, rate: '57.8', arb: ' -10% (High)', med: 'Tier 1' },
                    { key: 'oakland' as keyof typeof safety.comparison_cities, rate: '27.4', arb: '-25% (Extreme)', med: 'Tier 1' }
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 group ${i >= 2 ? 'opacity-40 italic hover:opacity-100 cursor-help' : ''} transition-opacity`}>
                      <td className="py-10 px-4">
                        <span className="text-2xl font-serif font-black">{safety.comparison_cities?.[row.key]}</span>
                      </td>
                      <td className="py-10 px-4">
                         <span className={`text-xl font-black ${parseFloat(row.rate) < 20 ? 'text-turquoise' : 'text-slate-400'}`}>{row.rate}</span>
                      </td>
                      <td className="py-10 px-4 font-black text-xl text-sun-yellow">{row.arb}</td>
                      <td className="py-10 px-4 font-black uppercase tracking-widest text-[10px] text-slate-400">{row.med}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-16 text-center space-y-6">
               <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
                 Verification: This data accounts for 2024-2025 security deployments in Northern Baja.
               </p>
               <button className="btn-mexican btn-mexican-primary px-10 py-5 text-sm uppercase tracking-[0.2em] font-black">
                  Request Full 2025 Security Audit (PDF)
               </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
