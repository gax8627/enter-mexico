"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Globe, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { lang, dict, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(lang === "en" ? "es" : "en");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "h-16 glass-panel py-2" : "h-20 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="/quiz/start" className="text-xs font-black uppercase tracking-widest hover:text-terracotta transition-colors">
              {dict.navigation.quiz}
            </Link>
            <Link href="/partner" className="text-xs font-black uppercase tracking-widest hover:text-turquoise transition-colors">
              {dict.navigation.partner}
            </Link>
            <Link href="/guides/safety-reality-check" className="text-xs font-black uppercase tracking-widest hover:text-sun-yellow transition-colors">
              {dict.navigation.safety}
            </Link>
            <Link href="/advisor" className="px-4 py-2 rounded-xl bg-agave-green/10 text-agave-green text-xs font-black uppercase tracking-widest hover:bg-agave-green hover:text-white transition-all">
              AI Advisor
            </Link>
          </div>
          
          <div className="h-6 w-px bg-current opacity-10" />

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-current hover:bg-opacity-5 transition-all text-current/60 hover:text-current"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-current bg-opacity-5 hover:bg-opacity-10 transition-all text-[10px] font-black tracking-widest"
            >
              <Globe className="w-4 h-4 text-turquoise" />
              <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
              <span className="opacity-20">/</span>
              <span className={lang === "es" ? "opacity-100" : "opacity-40"}>ES</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-current bg-opacity-5"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="p-2 text-current"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-screen w-80 glass-panel shadow-2xl p-8 flex flex-col gap-8 z-50 border-l border-white/5"
            >
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <button onClick={() => setIsOpen(false)} className="p-2 bg-current bg-opacity-5 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <Link href="/quiz/start" onClick={() => setIsOpen(false)} className="text-xl font-serif font-black hover:text-terracotta">
                  {dict.navigation.quiz}
                </Link>
                <Link href="/partner" onClick={() => setIsOpen(false)} className="text-xl font-serif font-black hover:text-turquoise">
                  {dict.navigation.partner}
                </Link>
                <Link href="/guides/safety-reality-check" onClick={() => setIsOpen(false)} className="text-xl font-serif font-black hover:text-sun-yellow">
                  {dict.navigation.safety}
                </Link>
                <Link href="/advisor" onClick={() => setIsOpen(false)} className="text-xl font-serif font-black text-agave-green">
                  AI Advisor
                </Link>
              </div>

              <div className="mt-auto pt-8 border-t border-current opacity-10">
                <button 
                  onClick={() => { toggleLang(); setIsOpen(false); }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-current bg-opacity-5 hover:bg-opacity-10 transition-all font-black uppercase text-xs tracking-widest"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-turquoise" />
                    <span>Language</span>
                  </div>
                  <span>{lang === "en" ? "Español" : "English"}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
