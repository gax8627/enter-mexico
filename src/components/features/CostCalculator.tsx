"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Wallet } from "lucide-react";

interface CostCalculatorProps {
  cityName: string;
  rentAverage: number; // e.g., 800 for Mexicali
}

export function CostCalculator({ cityName, rentAverage }: CostCalculatorProps) {
  const [usRent, setUsRent] = useState(2500);
  const [eatingOut, setEatingOut] = useState(400);
  
  // Simple multipliers for demo logic
  const savingsPerMonth = (usRent - rentAverage) + (eatingOut * 0.5); 
  const annualSavings = savingsPerMonth * 12;

  return (
    <div className="glass-panel p-8 rounded-3xl border border-sand-500/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-sand-500/20 text-sand-400">
          <Wallet className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-white">The Arbitrage Calculator</h3>
          <p className="text-slate-400 text-sm">See how much you save moving to {cityName}.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-4">
              <span>Your Current US Rent</span>
              <span className="text-white font-bold">${usRent}</span>
            </label>
            <input 
              type="range" 
              min="1000" 
              max="5000" 
              step="100"
              value={usRent}
              onChange={(e) => setUsRent(parseInt(e.target.value))}
              className="w-full h-2 bg-ocean-900 rounded-lg appearance-none cursor-pointer accent-sand-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>$1k</span>
              <span>$5k+</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm font-medium text-slate-300 mb-4">
              <span>Monthly Dining Out</span>
              <span className="text-white font-bold">${eatingOut}</span>
            </label>
            <input 
              type="range" 
              min="100" 
              max="2000" 
              step="50"
              value={eatingOut}
              onChange={(e) => setEatingOut(parseInt(e.target.value))}
              className="w-full h-2 bg-ocean-900 rounded-lg appearance-none cursor-pointer accent-sand-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center items-center bg-ocean-900/50 rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 mb-2">You could save</p>
            <motion.div 
              key={annualSavings}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-emerald-400 mb-2"
            >
              ${annualSavings.toLocaleString()}
            </motion.div>
            <p className="text-slate-400 mb-6">per year</p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
              <TrendingDown className="w-3 h-3" />
              <span>{Math.round((savingsPerMonth / (usRent + eatingOut)) * 100)}% Reduction in overhead</span>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}
