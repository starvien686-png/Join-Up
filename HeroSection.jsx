import { ArrowRight, Users, MapPin, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-orange-300/30 dark:bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-yellow-300/30 dark:bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/20 dark:bg-orange-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 mb-6">
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Your activity partner is waiting</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Do More,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Joinup connects you with like-minded people nearby — find a gym buddy, study partner, carpool companion, housemate, or just someone to hang out with.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold shadow-xl shadow-orange-200 dark:shadow-orange-900/50 hover:scale-105 transition-all"
            >
              Get Early Access <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-orange-200 dark:border-orange-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-orange-400 transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-3">
              {["bg-orange-400", "bg-yellow-400", "bg-orange-300", "bg-yellow-500"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-white dark:border-gray-950 flex items-center justify-center text-white text-xs font-bold`}>
                  {["A","B","C","D"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-800 dark:text-white">500+</span> people already joined the waitlist
            </p>
          </div>
        </div>

        {/* Visual card stack */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-96">
            {/* Back card */}
            <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-gradient-to-br from-yellow-300 to-orange-300 dark:from-yellow-600/40 dark:to-orange-600/40 rotate-6 shadow-xl" />
            {/* Middle card */}
            <div className="absolute top-3 left-3 w-full h-full rounded-3xl bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-orange-700/50 dark:to-yellow-700/50 rotate-3 shadow-xl" />
            {/* Front card */}
            <div className="relative w-full h-full rounded-3xl bg-white dark:bg-gray-800 shadow-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                  <Users size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Find Partners</p>
                  <p className="text-xs text-gray-400">Near you, right now</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "🏋️ Gym Partner", color: "bg-orange-50 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
                  { label: "📚 Study Buddy", color: "bg-yellow-50 dark:bg-yellow-900/30", text: "text-yellow-600 dark:text-yellow-400" },
                  { label: "🚗 Carpool", color: "bg-orange-50 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
                  { label: "🏠 Housemate", color: "bg-yellow-50 dark:bg-yellow-900/30", text: "text-yellow-600 dark:text-yellow-400" },
                ].map((item) => (
                  <div key={item.label} className={`px-4 py-2.5 rounded-xl ${item.color} flex items-center justify-between`}>
                    <span className={`text-sm font-semibold ${item.text}`}>{item.label}</span>
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs text-gray-400">
                <MapPin size={12} />
                <span>Matching in your area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
