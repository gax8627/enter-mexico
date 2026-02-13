"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { lang, dict, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLanguage(lang === "en" ? "es" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 talavera-border">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-sun-yellow/50">
            EM
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-terracotta transition-colors">
            Enter <span className="text-turquoise">Mexico</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/quiz/start" className="text-sm font-medium hover:text-terracotta transition-colors">
            {dict.navigation.quiz}
          </Link>
          <Link href="/partner" className="text-sm font-medium hover:text-turquoise transition-colors">
            {dict.navigation.partner}
          </Link>
          <Link href="/guides/safety-reality-check" className="text-sm font-medium hover:text-sun-yellow transition-colors">
            {dict.navigation.safety}
          </Link>
          <Link href="/advisor" className="text-sm font-black text-turquoise hover:text-terracotta transition-colors uppercase tracking-widest">
            AI Advisor
          </Link>
          
          <div className="h-6 w-px bg-white/10" />

          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold"
          >
            <Globe className="w-4 h-4 text-turquoise" />
            <span className={lang === "en" ? "text-white" : "text-white/40"}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === "es" ? "text-white" : "text-white/40"}>ES</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full glass-panel border-b border-white/10 p-6 flex flex-col gap-6"
          >
            <Link href="/quiz/start" onClick={() => setIsOpen(false)} className="text-lg font-bold">
              {dict.navigation.quiz}
            </Link>
            <Link href="/partner" onClick={() => setIsOpen(false)} className="text-lg font-bold">
              {dict.navigation.partner}
            </Link>
            <Link href="/guides/safety-reality-check" onClick={() => setIsOpen(false)} className="text-lg font-bold">
              {dict.navigation.safety}
            </Link>
            <Link href="/advisor" onClick={() => setIsOpen(false)} className="text-lg font-black text-turquoise">
              AI Advisor
            </Link>
            <button 
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="flex items-center gap-2 text-lg font-bold text-turquoise"
            >
              <Globe className="w-5 h-5" />
              {lang === "en" ? "Español" : "English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
