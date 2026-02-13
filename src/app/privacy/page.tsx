import { Lock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Enter Mexico",
  description: "How we protect your data. We are 100% compliant with GDPR and CCPA. We never sell your data to timeshare lists.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
          <Lock className="w-4 h-4" />
          <span>Last Updated: Jan 1, 2025</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Your Secrets are <span className="text-gradient-gold">Safe</span>.
        </h1>
        <p className="text-xl text-slate-300">
          Moving involves sensitive financial and personal data. We treat yours with bank-level paranoia.
        </p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. The "No Timeshare" Promise</h2>
          <p>
            This is our most important rule: <strong>We do not sell, rent, or trade your data to "Vacation Clubs", Timeshare lists, or unaffiliated marketing agencies.</strong> Your data stays within the Enter Mexico ecosystem (Us and your assigned City Partner).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>**Solvency Data**: Self-reported income levels (used ONLY to qualify you for residency).</li>
            <li>**Contact Info**: Email and Phone (used ONLY to coordinate your move).</li>
            <li>**Analytics**: Anonymized browsing behavior to improve our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p>
            All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use enterprise-grade database solutions with strict access controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
          <p>
            You have the right to disappear. If you want us to delete 100% of your data, simply email <span className="text-sand-400">privacy@entermexico.com</span> and we will scrub your record within 48 hours. No questions asked.
          </p>
        </section>
      </div>
    </div>
  );
}
