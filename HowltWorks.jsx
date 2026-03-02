const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Tell us what activities you love, your schedule, and where you are. It only takes 2 minutes.",
    emoji: "👤",
  },
  {
    num: "02",
    title: "Browse or Get Matched",
    desc: "Explore nearby people or let our smart algorithm find the perfect partner for your activity.",
    emoji: "🔍",
  },
  {
    num: "03",
    title: "Propose & Connect",
    desc: "Send an activity invite, chat in-app, agree on a time & place — then just show up!",
    emoji: "💬",
  },
  {
    num: "04",
    title: "Do It Together",
    desc: "Enjoy the activity, rate the experience, and grow your network of activity partners.",
    emoji: "🎉",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Joinup
            </span>{" "}
            works
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Four simple steps to stop doing things alone.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300 dark:from-orange-700 dark:via-yellow-700 dark:to-orange-700" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className={`relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center mb-4 shadow-lg
                  ${i % 2 === 0
                    ? "bg-gradient-to-br from-orange-400 to-yellow-400"
                    : "bg-gradient-to-br from-yellow-400 to-orange-500"
                  }`}>
                  <span className="text-3xl">{step.emoji}</span>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-gray-950 border-2 border-orange-300 dark:border-orange-600 flex items-center justify-center text-xs font-black text-orange-500">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
