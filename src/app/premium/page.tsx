"use client";

import { Check, Shield, Zap, DollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumAuditPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Sales Copy */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 text-terracotta text-[10px] font-black uppercase tracking-widest italic">
            <Shield className="w-4 h-4" />
            2025 Residency Compliance Verified
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-tight italic">
            Get the <span className="text-turquoise">Full</span> <br /> Residency Audit
          </h1>
          
          <p className="text-xl text-slate-400 font-medium italic leading-relaxed">
            Stop guessing about solvency. Get a professional deep-dive audit of your specific financial situation vs. 2025 SRE/SAT requirements.
          </p>

          <ul className="space-y-6">
            {[
              "Exact Solvency Calculation (Income vs. Savings)",
              "Optimized Consular Strategy (Avoid Rejections)",
              "Custom Document Checklist (2025 Compliant)",
              "Priority Partner Introduction (Top 3 Agencies)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white font-bold italic">
                <div className="w-6 h-6 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise">
                  <Check className="w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="mexican-card p-12 md:p-16 border-t-8 border-terracotta shadow-2xl space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Zap className="w-40 h-40 text-white" />
            </div>

            <div className="text-center space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">The Ultimate Relocation Kickstart</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-black text-slate-500 line-through">$147</span>
                    <span className="text-7xl font-serif font-black text-white italic">$47</span>
                </div>
                <p className="text-turquoise font-black uppercase tracking-widest text-[10px]">Limited Time 2025 Launch Price</p>
            </div>

            <div className="space-y-6">
                <button 
                  onClick={() => alert("Redirecting to Mock Checkout...")}
                  className="btn-mexican btn-mexican-primary w-full py-6 text-xl flex items-center justify-center gap-4 group"
                >
                    Get Your Audit Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-4 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                    <Zap className="w-4 h-4 text-sun-yellow" />
                    Instant Access • PDf + Video Course
                </div>
            </div>

            <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-8 text-center">
                <div className="space-y-2">
                    <p className="text-xl font-black text-white italic">100%</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Secure</p>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-black text-white italic">24h</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">TAT</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
