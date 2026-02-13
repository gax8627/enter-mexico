import { Check, Handshake, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "Partner with Enter Mexico | Real Estate Referral Network",
  description: "Join the Enter Mexico network. We send verified US buyers to you. You pay a 25% referral fee only upon closing.",
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Handshake className="w-4 h-4" />
          <span>For Real Estate Professionals</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          We find the buyers. <br />
          <span className="text-gradient-gold">You close the deals.</span>
        </h1>
        <p className="text-xl text-slate-300">
          Stop chasing "tire kickers" on Facebook. We pre-qualify US buyers for budget, timeline, and residency status before they ever reach your inbox.
        </p>
      </div>

      {/* Stats / Value Prop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Users, title: "Verified Leads", desc: "We filter by budget & timeline. No more 'Just dreaming' clients." },
          { icon: TrendingUp, title: "Zero Upfront Cost", desc: "You pay nothing to join. We only earn when you close." },
          { icon: Check, title: "Standard 25% Fee", desc: "Industry standard referral fee. Simple agreement." }
        ].map((item, i) => (
          <div key={i} className="glass-panel p-8 rounded-3xl text-center">
            <div className="inline-flex p-4 rounded-full bg-white/5 mb-6 text-sand-400">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <div className="max-w-2xl mx-auto glass-panel p-10 rounded-3xl">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
          Apply for Your City
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Agency / Brokerage Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">City You Serve</label>
            <select className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white">
              <option>Select a city...</option>
              <option>Rosarito</option>
              <option>Ensenada</option>
              <option>San Miguel de Allende</option>
              <option>Cabo San Lucas</option>
              <option>Other</option>
            </select>
          </div>
          <button className="w-full py-4 bg-white text-ocean-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
