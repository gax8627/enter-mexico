"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Animation Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
};

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden">
      
      {/* High-Impact Background Image */}
      <div className="absolute inset-0 z-[-2]">
        <img 
          src="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Mexican Architecture"
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mex-black via-mex-black/80 to-mex-black" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-terracotta/20 rounded-full blur-[100px] z-[-1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-turquoise/10 rounded-full blur-[100px] z-[-1]" />

      {/* Content Container */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto z-10 space-y-10"
      >
        {/* Badge */}
        <motion.div 
          variants={item}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel border border-terracotta/30 text-terracotta text-sm font-bold uppercase tracking-widest shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sun-yellow"></span>
          </span>
          {dict.hero.badge}
        </motion.div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tight text-white leading-[1.1]">
          <motion.span variants={item} className="block">{dict.hero.title_line_1}</motion.span>
          <motion.span variants={item} className="text-gradient-mexican block italic">
            {dict.hero.title_highlight}
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p variants={item} className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
          {dict.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
        >
          <Link href="/quiz/start" className="btn-mexican btn-mexican-primary group">
            <span className="relative z-10 flex items-center gap-3">
              {dict.hero.cta_main}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link href="/guides/solvency-2025" className="btn-mexican btn-mexican-outline text-xl px-10 py-5">
            <ShieldCheck className="w-6 h-6" />
            {dict.hero.cta_secondary}
          </Link>

          <Link href="/premium" className="text-white/60 hover:text-turquoise transition-colors font-black uppercase tracking-widest text-xs border-b border-white/10 pb-1">
             Residency Audit 2025 →
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={item} className="pt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10">
          <div className="space-y-1">
            <div className="text-2xl font-black text-white">60%</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500 font-bold">Cost Reduction</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-white">2h</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500 font-bold">To San Diego</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-white">2025</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500 font-bold">Policy Updated</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
