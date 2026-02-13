"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

type Dictionary = typeof en;
type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  dict: Dictionary;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  
  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      setLang(saved);
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const dict = lang === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ lang, dict, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
