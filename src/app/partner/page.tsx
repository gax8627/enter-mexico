"use client";

import { Handshake, Globe, Users, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnerRecruitmentPage() {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-tight italic">
             Partner <span className="text-turquoise">Nexus</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium italic max-w-2xl mx-auto">
             Mexico's most sophisticated lead acquisition engine for relocation professionals. Join the elite network.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { icon: <TrendingUp className="w-6 h-6" />, title: "Pre-Qualified Leads", desc: "Our 2025 AI scoring engine filters leads by income, home equity, and move timeline." },
                { icon: <Globe className="w-6 h-6" />, title: "National Reach", desc: "We provide high-intent traffic from California, Texas, and New York for all major Mexican hubs." },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Compliance First", desc: "All leads are audited against current Residency Solvency requirements before they reach you." },
                { icon: <Handshake className="w-6 h-6" />, title: "Strategic Exclusivity", desc: "We only partner with the top 3 agencies per city to ensure lead quality and conversion." }
            ].map((benefit, i) => (
                <div key={i} className="mexican-card p-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-turquoise/10 flex items-center justify-center text-turquoise">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-black text-white italic">{benefit.title}</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed italic">{benefit.desc}</p>
                </div>
            ))}
        </div>

        {/* Application Form */}
        <div className="mexican-card p-12 border-t-8 border-turquoise shadow-2xl">
            <h2 className="text-3xl font-serif font-black text-white italic mb-10 text-center">Join the Network</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Agency Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-turquoise transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Main City Speciality</label>
                        <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-turquoise transition-all appearance-none cursor-pointer">
                            <option className="bg-mex-black">Mexicali</option>
                            <option className="bg-mex-black">San Miguel de Allende</option>
                            <option className="bg-mex-black">Puerto Vallarta</option>
                            <option className="bg-mex-black">Ajijic</option>
                            <option className="bg-mex-black">CDMX (Elite)</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Professional Credentials / Website</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold outline-none focus:border-turquoise transition-all" />
                </div>
                <button 
                  type="button"
                  onClick={() => alert("Application Sent. Our Nexus team will review within 48h.")}
                  className="btn-mexican btn-mexican-primary w-full py-6 flex items-center justify-center gap-4 text-xs tracking-[0.2em]"
                >
                    Submit Agency Application
                    <ArrowRight className="w-4 h-4" />
                </button>
            </form>
        </div>

      </div>
    </div>
  );
}
