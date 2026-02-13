import { AlertTriangle, CheckCircle, Shield, TrendingDown } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Mexicali Safe? 2025 Safety Reality Check | Enter Mexico",
  description: "Stop reading fear-mongering headlines. See the actual 2025 crime statistics for Mexicali vs. US cities. Data from OSAC and local authorities.",
};

export default function SafetyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
          <Shield className="w-4 h-4" />
          <span>Verified Data • Jan 2025</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          The <span className="text-gradient-gold">Safety Reality</span> Check
        </h1>
        <p className="text-xl text-slate-300">
          We don't sell "Paradise." We sell "Managed Risk." Here is the honest truth about safety in Baja California.
        </p>
      </div>

      {/* The Dashboard */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingDown className="w-24 h-24 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Violent Crime</h3>
          <p className="text-4xl font-bold text-emerald-400 mb-2">-12%</p>
          <p className="text-sm text-slate-400">Year-over-Year decrease in Mexicali (2024 vs 2025).</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl">
          <h3 className="text-lg font-bold text-white mb-4">The "Gated" Factor</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sand-400" />
              <span className="text-slate-300">24/7 Armed Security</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sand-400" />
              <span className="text-slate-300">Facial Recognition Entry</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sand-400" />
              <span className="text-slate-300">Perimeter Sensors</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border-l-4 border-yellow-500 bg-yellow-500/5">
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-lg font-bold">The Real Risk</h3>
          </div>
          <p className="text-slate-300 mb-4">
            It's not "Cartels targeting tourists." It's <strong>Petty Theft</strong>.
          </p>
          <p className="text-sm text-slate-400 italic">
            "Don't leave your laptop in your car in plain sight. Just like San Francisco."
          </p>
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Perspective: Mexicali vs. The US</h2>
        <div className="glass-panel p-8 rounded-3xl overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm uppercase">
                <th className="pb-4">City</th>
                <th className="pb-4">Homicide Rate (per 100k)</th>
                <th className="pb-4">Cost of Living</th>
                <th className="pb-4">Medical Access</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-white/5">
                <td className="py-4 font-bold text-sand-400">Mexicali, MX</td>
                <td className="py-4">18.2</td>
                <td className="py-4">$$</td>
                <td className="py-4 text-emerald-400">Immediate</td>
              </tr>
              <tr className="border-b border-white/5 opacity-70">
                <td className="py-4">St. Louis, MO</td>
                <td className="py-4">66.7</td>
                <td className="py-4">$$$</td>
                <td className="py-4">Variable</td>
              </tr>
              <tr className="opacity-70">
                <td className="py-4">Baltimore, MD</td>
                <td className="py-4">57.8</td>
                <td className="py-4">$$$</td>
                <td className="py-4">Variable</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-xs text-slate-500 text-center">
            *Sources: FBI UCR 2023, SESNSP Mexico 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
