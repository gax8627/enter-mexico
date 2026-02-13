"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-400/10 rounded-full blur-[120px] -z-10" />

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto z-10 space-y-8"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sand-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sand-500"></span>
          </span>
          The 2025 Gateway is Open
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
          Don't just move to Mexico. <br />
          <span className="text-gradient-gold">Enter Strategic.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The only relocation platform that filters cities by your <span className="text-white font-semibold">Budget</span>, your <span className="text-white font-semibold">Lifestyle</span>, and your <span className="text-white font-semibold">Safety Standards</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/quiz/start" className="group relative px-8 py-4 bg-sand-500 hover:bg-sand-400 text-ocean-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center gap-2">
            Take the City Match Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="/guides/solvency-2025" className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sand-400" />
            Check My Solvency
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 flex items-center justify-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Mexicali HQ</span>
          </div>
          <div className="w-1 h-1 bg-slate-600 rounded-full" />
          <div>Vetted Partner Network</div>
          <div className="w-1 h-1 bg-slate-600 rounded-full" />
          <div>Since 2024</div>
        </div>

      </motion.div>
    </section>
  );
}
