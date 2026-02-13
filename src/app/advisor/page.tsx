import { AIAdvisor } from "@/components/features/AIAdvisor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic AI Advisor | Mexico Relocation Planning",
  description: "Get instant, expert advice on moving to Mexico. Safety data, residency requirements, and cost arbitrage answers in seconds.",
  openGraph: {
    images: [{ url: "https://images.unsplash.com/photo-1594895646153-659f63566f12?auto=format&fit=crop&q=80&w=1200" }],
  },
};

export default function AIAdvisorPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-turquoise/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-tight">
            The <span className="text-gradient-mexican italic">Strategic</span> <br /> AI Advisor
          </h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
            &quot;Your 24/7 Mexican relocation partner. Real data, zero fluff.&quot;
          </p>
        </div>

        <AIAdvisor />

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-white/10 text-center">
            <div className="space-y-2">
                <p className="text-2xl font-black text-white italic">2025</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Policy Ready</p>
            </div>
            <div className="space-y-2">
                <p className="text-2xl font-black text-white italic">1.2s</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Latancy</p>
            </div>
            <div className="space-y-2">
                <p className="text-2xl font-black text-white italic">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Bilingual</p>
            </div>
        </div>
      </div>
    </div>
  );
}
