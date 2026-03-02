import { Linkedin, Twitter, Crown } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Passionate about building communities. Previously built social products used by 1M+ users.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    isFounder: true,
    color: "from-orange-400 to-yellow-400",
  },
  {
    name: "Sara Kim",
    role: "Co-founder & CTO",
    bio: "Full-stack engineer with a love for scalable systems and beautiful UX.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    isFounder: false,
    color: "from-yellow-400 to-orange-300",
  },
  {
    name: "Marcus Lee",
    role: "Head of Product",
    bio: "User research obsessed. Makes sure every feature solves a real problem.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    isFounder: false,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Priya Nair",
    role: "Lead Designer",
    bio: "Crafts experiences that feel effortless. Design should make your life easier.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    isFounder: false,
    color: "from-yellow-500 to-orange-400",
  },
  {
    name: "Jake Rivera",
    role: "Growth & Marketing",
    bio: "Grew two startups from 0 to 100k users. Loves community-driven growth.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    isFounder: false,
    color: "from-orange-400 to-yellow-300",
  },
  {
    name: "Yuna Park",
    role: "Backend Engineer",
    bio: "Makes sure everything runs fast, reliably, and at scale.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
    isFounder: false,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function TeamSection() {
  const founder = team.find((m) => m.isFounder);
  const others = team.filter((m) => !m.isFounder);

  return (
    <section id="team" className="py-24 bg-orange-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Built by people who{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              love connecting
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            6 passionate humans building the future of social connection.
          </p>
        </div>

        {/* Founder spotlight */}
        <div className="mb-10 flex justify-center">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-orange-200 dark:border-orange-700 shadow-2xl shadow-orange-100/50 dark:shadow-orange-900/30 max-w-md w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg">
              <Crown size={13} className="text-white" />
              <span className="text-white text-xs font-bold">Founder</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className={`p-1 rounded-full bg-gradient-to-br ${founder.color} mb-4`}>
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">{founder.name}</h3>
              <span className="text-sm font-semibold text-orange-500 dark:text-orange-400 mt-1 mb-3">{founder.role}</span>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{founder.bio}</p>
              <div className="flex items-center gap-3 mt-4">
                <a href="#" className="p-2 rounded-full bg-orange-50 dark:bg-gray-700 text-orange-500 hover:scale-110 transition-transform">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-orange-50 dark:bg-gray-700 text-orange-500 hover:scale-110 transition-transform">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {others.map((member) => (
            <div
              key={member.name}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-5 border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all text-center"
            >
              <div className={`p-0.5 rounded-full bg-gradient-to-br ${member.color} mb-3 w-16 h-16 mx-auto`}>
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-800"
                />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">{member.name}</h3>
              <p className="text-xs text-orange-500 dark:text-orange-400 font-medium mt-0.5 mb-2">{member.role}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
