import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative bg-gradient-to-br from-orange-500 to-yellow-400 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl shadow-orange-200 dark:shadow-orange-900/40">
          {/* decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <span className="text-5xl mb-4 block">🚀</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to stop doing things alone?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join the Joinup waitlist today. Be first to know when we launch and get exclusive early access.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-white font-bold text-lg">
                <CheckCircle2 size={24} />
                You're on the list! We'll be in touch 🎉
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-orange-500 font-bold hover:bg-orange-50 transition-colors shadow-lg"
                >
                  Join Waitlist <ArrowRight size={18} />
                </button>
              </form>
            )}

            <p className="text-white/60 text-sm mt-5">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
