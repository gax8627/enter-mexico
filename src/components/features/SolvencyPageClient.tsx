"use client";

import { Check, ShieldAlert, Download, FileText, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function SolvencyPageClient() {
  const { dict } = useLanguage();
  const solvency = dict.solvency || {};

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] opacity-10 -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column: Authoritative Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/20 text-xs font-black uppercase tracking-[0.2em] shadow-xl">
            <ShieldAlert className="w-4 h-4" />
            <span>{solvency.badge}</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[1.05] tracking-tighter">
              {solvency.title_line_1} <br />
              <span className="text-gradient-mexican italic">{solvency.title_highlight}</span> <br />
              {solvency.title_line_2}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium max-w-xl">
              {solvency.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solvency.points?.map((item: string, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 p-1 rounded-lg bg-turquoise/10 text-turquoise border border-turquoise/20 group-hover:bg-turquoise group-hover:text-mex-black transition-colors">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-slate-200 font-bold text-lg leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 flex items-center gap-8">
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-mex-black bg-slate-800 flex items-center justify-center text-[10px] font-black">{i}k</div>
               ))}
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">
              Joined by <span className="text-white">4,200+ expats</span> this month
            </p>
          </div>
        </motion.div>

        {/* Right Column: High-Conversion Opt-in */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Decorative Talavera Pattern Background for the form */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-terracotta/20 to-turquoise/20 rounded-[50px] blur-2xl -z-10" />
          
          <div className="glass-panel p-10 md:p-16 rounded-[48px] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <FileText className="w-40 h-40 text-white" />
            </div>

            <div className="text-center mb-12 space-y-4">
              <h3 className="text-4xl font-serif font-black text-white">{solvency.form_title}</h3>
              <p className="text-turquoise font-black uppercase tracking-[0.3em] text-[10px]">{solvency.form_subtitle}</p>
            </div>

            <form 
              className="space-y-8" 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  // Standard Subscription
                  await fetch('/api/subscribe', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                  });

                  // Background Referral Scoring & Routing
                  fetch('/api/refer', {
                    method: 'POST',
                    body: JSON.stringify({ ...data, timeline: 'just-researching' }), // Default timeline if not captured
                    headers: { 'Content-Type': 'application/json' }
                  });

                  alert((solvency as { form_success?: string }).form_success || "Success! Check your inbox.");
                } catch {
                  alert("Error. Please try again.");
                }
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                  <input 
                    name="firstName"
                    type="text" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-terracotta outline-none transition-all placeholder:text-white/10"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-terracotta outline-none transition-all placeholder:text-white/10"
                    placeholder="jane@expats.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">What is your current US Monthly Income?</label>
                <div className="grid grid-cols-2 gap-4">
                   {['<$2,500', '$2,500-$4k', '$4k-$6k', '$6k+'].map(range => (
                     <button key={range} type="button" className="py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-turquoise hover:bg-turquoise/5 transition-all text-sm font-bold">
                        {range}
                     </button>
                   ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">California Homeowner Status?</label>
                <select name="status" className="w-full px-6 py-5 rounded-2xl bg-mex-black border border-white/10 text-white focus:border-terracotta outline-none transition-all appearance-none cursor-pointer text-sm font-medium">
                  <option value="no">No, I am currently renting</option>
                  <option value="yes-keep">Yes, I plan to keep & rent it out</option>
                  <option value="yes-sell">Yes, I plan to SELL (Cashing out)</option>
                </select>
              </div>
              
              <div className="pt-6 space-y-4">
                <button className="btn-mexican btn-mexican-primary w-full py-6 text-xl flex items-center justify-center gap-3 group" type="submit">
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                  {solvency.form_button}
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                  <Lock className="w-3 h-3" />
                  {solvency.form_footer}
                </div>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
