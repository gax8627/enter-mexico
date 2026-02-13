"use client";

import { ShieldCheck, Stethoscope, HeartHandshake, CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="glass-panel p-10 md:p-16 rounded-3xl text-center space-y-12">
        
        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            Relocate with <span className="text-sand-400">Certainty</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We don't just list cities. We vet them for the things that matter most to Americans.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 w-fit rounded-full bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">The Safety Pledge</h3>
            <p className="text-slate-400 text-sm">
              We only partner with gated communities that have 24/7 security and verified low-crime statistics.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 w-fit rounded-full bg-blue-500/20 text-blue-400">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Medical Access</h3>
            <p className="text-slate-400 text-sm">
              Every city hub is within 15 minutes of a US-accredited hospital or major medical center.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 w-fit rounded-full bg-sand-500/20 text-sand-400">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Vetted Partners</h3>
            <p className="text-slate-400 text-sm">
              No "friend of a friend." Our real estate partners are licensed, English-speaking professionals.
            </p>
          </div>
        </div>

        {/* Badges / Logos Placeholder */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 opacity-70">
           <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">As Seen In</span>
           {/* Placeholders for logos */}
           <div className="h-8 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-slate-500">Business Insider</div>
           <div className="h-8 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-slate-500">Intl Living</div>
           <div className="h-8 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-slate-500">Nomad Capitalist</div>
        </div>

      </div>
    </section>
  );
}
