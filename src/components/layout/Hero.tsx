"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
};

const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  },
};

export function Hero() {
  const headline = "Enter Strategic.";

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-400/10 rounded-full blur-[120px] -z-10" />

      {/* Content Container */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto z-10 space-y-8"
      >
        {/* Badge */}
        <motion.div 
          variants={item}
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
          <motion.span variants={item} className="block mb-2">Don't just move to Mexico.</motion.span>
          <motion.div 
            variants={letterContainer}
            className="text-gradient-gold inline-flex flex-wrap justify-center gap-[0.2em]"
          >
            {Array.from(headline).map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Subheadline */}
        <motion.p variants={item} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The only relocation platform that filters cities by your <span className="text-white font-semibold">Budget</span>, your <span className="text-white font-semibold">Lifestyle</span>, and your <span className="text-white font-semibold">Safety Standards</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/quiz/start" className="group relative px-8 py-4 bg-sand-500 hover:bg-sand-400 text-ocean-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center gap-2">
            Take the City Match Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="/guides/solvency-2025" className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sand-400" />
            Check My Solvency
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={item} className="pt-12 flex items-center justify-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Mexicali HQ</span>
          </div>
          <div className="w-1 h-1 bg-slate-600 rounded-full" />
          <div>Vetted Partner Network</div>
          <div className="w-1 h-1 bg-slate-600 rounded-full" />
          <div>Since 2024</div>
        </motion.div>

      </motion.div>
    </section>
  );
}
