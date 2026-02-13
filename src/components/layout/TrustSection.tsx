"use client";

import { ShieldCheck, Stethoscope, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function TrustSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="glass-panel p-10 md:p-20 rounded-[40px] text-center space-y-16 relative overflow-hidden">
        
        {/* Absolute Texture Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/5 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/5 rounded-full blur-[80px] -z-10" />

        {/* Headline */}
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-terracotta font-black uppercase tracking-[0.3em] text-xs"
          >
            {dict.trust.badge}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white">
            {dict.trust.title}
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {dict.trust.description}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {dict.trust.points.map((point, i) => (
            <div key={i} className="mexican-card p-8 space-y-6">
              <div className={`p-4 w-fit rounded-2xl ${
                i === 0 ? "bg-terracotta/20 text-terracotta" :
                i === 1 ? "bg-turquoise/20 text-turquoise" :
                "bg-sun-yellow/20 text-sun-yellow"
              }`}>
                {i === 0 ? <ShieldCheck className="w-8 h-8" /> : 
                 i === 1 ? <Stethoscope className="w-8 h-8" /> : 
                 <HeartHandshake className="w-8 h-8" />}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white">{point.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Badges / Logos */}
        <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
           <span className="text-slate-500 font-black uppercase tracking-widest text-xs">As Seen In</span>
           <div className="text-xl font-serif font-bold text-white">Business Insider</div>
           <div className="text-xl font-serif font-bold text-white">Intl Living</div>
           <div className="text-xl font-serif font-bold text-white">Nomad Capitalist</div>
        </div>

      </div>
    </section>
  );
}
