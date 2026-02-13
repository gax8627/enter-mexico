"use client";

import { useState } from "react";
import { usCities, USCity } from "@/lib/us-data";
import { City } from "@/lib/data";
import { ArrowLeftRight, TrendingDown, Wallet, Building2 } from "lucide-react";

export function ArbitrageComparison({ mxCity }: { mxCity: City }) {
  const [selectedUS, setSelectedUS] = useState<USCity>(usCities[0]);

  const mxTotal = parseInt(mxCity.costBreakdown.total.replace(/[^0-9]/g, ""));
  const savings = selectedUS.total - mxTotal;
  const savingsPercent = Math.round((savings / selectedUS.total) * 100);

  return (
    <div className="mexican-card p-10 md:p-14 border-t-8 border-turquoise relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <ArrowLeftRight className="w-40 h-40 text-white" />
      </div>

      <div className="relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-xs font-black text-turquoise uppercase tracking-[0.4em]">The Arbitrage Engine</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-white italic">Move & Save</h3>
          </div>
          
          <div className="space-y-3">
             <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Current US City</label>
             <select 
               value={selectedUS.slug}
               onChange={(e) => setSelectedUS(usCities.find(c => c.slug === e.target.value) || usCities[0])}
               className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-turquoise transition-all cursor-pointer appearance-none"
             >
               {usCities.map(c => <option key={c.slug} value={c.slug} className="bg-mex-black">{c.name}</option>)}
             </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* US Comparison */}
          <div className="space-y-6 p-8 rounded-[32px] bg-white/5 border border-white/5">
             <div className="flex items-center gap-3 text-slate-500">
               <Building2 className="w-5 h-5" />
               <span className="text-[10px] font-black uppercase tracking-widest">{selectedUS.name} Cost</span>
             </div>
             <p className="text-4xl font-serif font-black text-white/50">${selectedUS.total.toLocaleString()}</p>
             <div className="space-y-2 opacity-40">
                <div className="flex justify-between text-[10px] font-bold uppercase"><span>Rent</span> <span>${selectedUS.rent}</span></div>
                <div className="flex justify-between text-[10px] font-bold uppercase"><span>Dining</span> <span>${selectedUS.dining}</span></div>
             </div>
          </div>

          {/* Results Center */}
          <div className="mexican-card bg-turquoise/10 border-turquoise/20 flex flex-col items-center justify-center text-center p-8 space-y-4">
             <div className="p-4 rounded-full bg-turquoise/20 text-turquoise">
               <TrendingDown className="w-10 h-10" />
             </div>
             <div className="space-y-1">
               <p className="text-6xl font-serif font-black text-turquoise italic">{savingsPercent}%</p>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Monthly Savings</p>
             </div>
             <p className="text-sm font-bold text-slate-300 italic">
               Saved: ${savings.toLocaleString()} / mo
             </p>
          </div>

          {/* Mexico Cost */}
          <div className="space-y-6 p-8 rounded-[32px] bg-white/5 border border-turquoise/30 relative">
             <div className="absolute top-4 right-4 text-turquoise">
               <div className="w-2 h-2 rounded-full bg-turquoise animate-ping" />
             </div>
             <div className="flex items-center gap-3 text-turquoise">
               <Wallet className="w-5 h-5" />
               <span className="text-[10px] font-black uppercase tracking-widest">{mxCity.name} Cost</span>
             </div>
             <p className="text-4xl font-serif font-black text-white">${mxTotal.toLocaleString()}</p>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400"><span>Target Rent</span> <span className="text-white">{mxCity.costBreakdown.rent}</span></div>
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400"><span>Elite Dining</span> <span className="text-white">{mxCity.costBreakdown.dining}</span></div>
             </div>
          </div>
        </div>

        <div className="pt-8 text-center">
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mb-8">
             *Calculated using Numbeo & Interior Ministry verified rates Jan 2025
           </p>
           <button className="btn-mexican btn-mexican-primary px-12 py-5 text-sm uppercase tracking-widest font-black">
              Claim Your {mxCity.name} Arbitrage PDF
           </button>
        </div>
      </div>
    </div>
  );
}
