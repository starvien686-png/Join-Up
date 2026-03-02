import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ darkMode, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Features", "How It Works", "Team"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-orange-100 dark:border-orange-900/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-lg">J</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Join<span className="text-orange-500">up</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-orange-50 dark:bg-gray-800 text-orange-500 dark:text-yellow-400 hover:scale-110 transition-transform"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#cta"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm shadow-md hover:shadow-orange-300 dark:hover:shadow-orange-900 hover:scale-105 transition-all"
          >
            Join Waitlist
          </a>
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-orange-100 dark:border-orange-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-700 dark:text-gray-200 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex justify-center px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
