import { Check, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "2025 Mexico Residency Solvency Requirements | Official Guide",
  description: "Download the updated 2025 financial requirements for Temporary and Permanent Residency in Mexico. Don't get denied.",
};

export default function SolvencyGuidePage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
            <ShieldAlert className="w-4 h-4" />
            <span>Updated Jan 1, 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Did you know the <br />
            <span className="text-gradient-gold">income requirement</span> just went up?
          </h1>
          
          <p className="text-xl text-slate-300">
            The UMA (Minimum Wage) increase in 2025 changed the math for Temporary and Permanent Residency. 
            <strong> Thousands of applicants will be denied this year</strong> because they are using 2024 numbers.
          </p>

          <ul className="space-y-4">
            {[
              "Exact Monthly Income for Temporary Residency",
              "Exact Savings Balance for Permanent Residency",
              "The 'Loophole' for owning a home in Mexico",
              "Which Consulates are 'Friendly' vs 'Strict'"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white">
                <div className="p-1 rounded-full bg-sand-500 text-ocean-900">
                  <Check className="w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Opt-in Form */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Get the PDF Guide</h3>
            <p className="text-slate-400">Sent instantly to your inbox.</p>
          </div>

          <form className="space-y-4" action="/api/mock-subscribe">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white focus:border-sand-500 outline-none transition-colors"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Income (Estim.)</label>
              <select className="w-full px-4 py-3 rounded-xl bg-ocean-900 border border-white/10 text-white focus:border-sand-500 outline-none transition-colors appearance-none">
                <option value="" disabled selected>Select your range...</option>
                <option value="under-1500">Under $1,500</option>
                <option value="1500-2500">$1,500 - $2,500</option>
                <option value="2500-4000">$2,500 - $4,000</option>
                <option value="4000+">$4,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-ocean-800 border border-white/10 text-white focus:border-sand-500 outline-none transition-colors"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Do you own a home in the US?</label>
              <select className="w-full px-4 py-3 rounded-xl bg-ocean-900 border border-white/10 text-white focus:border-sand-500 outline-none transition-colors appearance-none">
                <option value="no">No, I rent</option>
                <option value="yes-keep">Yes, keeping it</option>
                <option value="yes-sell">Yes, planning to SELL</option>
              </select>
            </div>
            <button className="w-full py-4 bg-sand-500 hover:bg-sand-400 text-ocean-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              Send Me The 2025 Numbers
            </button>
            <p className="text-xs text-center text-slate-500">
              We respect your inbox. No spam, just logistics.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
