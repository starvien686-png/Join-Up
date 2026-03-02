export default function Footer() {
  return (
    <footer className="border-t border-orange-100 dark:border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
            <span className="text-white font-black text-sm">J</span>
          </div>
          <span className="font-black text-gray-900 dark:text-white">
            Join<span className="text-orange-500">up</span>
          </span>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          © 2026 Joinup. Built with ❤️ by the Joinup team.
        </p>

        <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
          <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
