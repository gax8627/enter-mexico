"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, dict } = useLanguage();

  return (
    <footer className="w-full py-12 px-4 border-t border-white/5 glass-panel mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Enter <span className="text-terracotta">Mexico</span>
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            {lang === "en" 
              ? "Strategic relocation services for the modern expatriate. Managing risk, maximizing ROI." 
              : "Servicios de reubicación estratégica para el expatriado moderno. Gestionando riesgos, maximizando el retorno de inversión."}
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-turquoise opacity-70">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/quiz/start" className="hover:text-terracotta transition-colors">{dict.navigation.quiz}</Link></li>
              <li><Link href="/partner" className="hover:text-terracotta transition-colors">{dict.navigation.partner}</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-turquoise opacity-70">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/privacy" className="hover:text-terracotta transition-colors">{dict.footer.privacy}</Link></li>
              <li><Link href="/guides/safety-reality-check" className="hover:text-terracotta transition-colors">{dict.navigation.safety}</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact/Newsletter */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-turquoise opacity-70">Newsletter</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-terracotta transition-colors w-full"
              placeholder="Email"
            />
            <button className="bg-terracotta text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-terracotta/20 hover:bg-[#ff866d] transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2025 Enter Mexico. {dict.footer.rights}</p>
        <div className="flex gap-6">
          <Link href="#">X (Twitter)</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
