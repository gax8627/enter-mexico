"use client";

import { Users, Filter, BarChart3, Mail, Star, Bell } from "lucide-react";

const mockLeads = [
  { name: "John Smith", email: "john@example.com", score: 85, tier: "High-Value", city: "Mexicali", timeline: "3 months" },
  { name: "Sarah Connor", email: "sarah@skynet.com", score: 40, tier: "Nurture", city: "Mexicali", timeline: "6 months" },
  { name: "Rick Sanchez", email: "rick@c137.com", score: 95, tier: "High-Value", city: "Mexicali", timeline: "Immediately" },
];

export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen bg-mex-black p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-serif font-black text-white italic">Partner Portal</h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Almater Real Estate | Mexicali Hub</p>
            </div>
            
            <div className="flex items-center gap-4">
                <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-3 right-3 w-3 h-3 bg-terracotta rounded-full border-2 border-mex-black" />
                </button>
                <div className="h-10 w-px bg-white/10 mx-2" />
                <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-turquoise/10 border border-turquoise/20">
                    <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise font-black">A</div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Admin</span>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mexican-card p-10 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-turquoise/10 text-turquoise">
                    <Users className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-4xl font-black text-white italic">24</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">New Leads (Mo)</p>
                </div>
            </div>
            <div className="mexican-card p-10 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-terracotta/10 text-terracotta">
                    <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-4xl font-black text-white italic">12%</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Conv. Rate</p>
                </div>
            </div>
            <div className="mexican-card p-10 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-sun-yellow/10 text-sun-yellow">
                    <Star className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-4xl font-black text-white italic">$14k</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Est. Commission</p>
                </div>
            </div>
        </div>

        {/* Leads Table */}
        <div className="mexican-card overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Qualified Hot Leads</h3>
                <button className="flex items-center gap-2 text-turquoise text-[10px] font-black uppercase tracking-widest hover:opacity-70 transition-all">
                    <Filter className="w-4 h-4" />
                    Filter Results
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5">
                            <th className="px-8 py-6">Prospect</th>
                            <th className="px-8 py-6">Score</th>
                            <th className="px-8 py-6">Tier</th>
                            <th className="px-8 py-6">Timeline</th>
                            <th className="px-8 py-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockLeads.map((lead, i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="text-white font-black italic">{lead.name}</span>
                                        <span className="text-xs text-slate-500 font-bold">{lead.email}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`text-xl font-black italic ${lead.score >= 80 ? 'text-turquoise' : 'text-sun-yellow'}`}>
                                        {lead.score}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                                        lead.tier === 'High-Value' ? 'bg-turquoise/20 text-turquoise' : 'bg-white/10 text-slate-400'
                                    }`}>
                                        {lead.tier}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="text-xs text-slate-300 font-bold uppercase">{lead.timeline}</span>
                                </td>
                                <td className="px-8 py-6 text-right space-x-4">
                                    <button className="p-3 rounded-xl bg-white/5 text-white hover:bg-turquoise hover:text-mex-black transition-all">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
}
