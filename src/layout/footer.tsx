function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-[#1e2a44]">
      <div className="w-full px-4 lg:px-5 py-3 flex items-center justify-between text-xs text-slate-400">
        {/* Left */}
        <span>© 2026 Your Company</span>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
