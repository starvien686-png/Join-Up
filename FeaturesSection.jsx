import { Users, MapPin, Shield, Zap, Heart, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Activity Matching",
    desc: "Smart matching based on your interests, schedule, and location — whether it's sports, study, or social.",
    gradient: "from-orange-400 to-yellow-400",
  },
  {
    icon: MapPin,
    title: "Nearby First",
    desc: "Discover people doing the same things close to you. No long commutes for a simple hangout.",
    gradient: "from-yellow-400 to-orange-300",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    desc: "All users are verified for safety. You know exactly who you're meeting before you meet them.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Zap,
    title: "Instant Connect",
    desc: "No endless swiping. Find your match, propose an activity, and make plans in minutes.",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: Heart,
    title: "Housing Search",
    desc: "Find compatible housemates who share your lifestyle and values — not just a roommate.",
    gradient: "from-orange-400 to-yellow-300",
  },
  {
    icon: MessageCircle,
    title: "Group Activities",
    desc: "Organize group events — team sports, study groups, carpools. More people, more fun.",
    gradient: "from-yellow-400 to-orange-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-orange-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
            Why Joinup?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              connect & do more
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            From finding a jogging partner to splitting rent — Joinup covers every way you want to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl hover:shadow-orange-100/50 dark:hover:shadow-orange-900/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
