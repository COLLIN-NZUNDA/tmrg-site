import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy font-bold text-xl shadow-md">
            TMRG
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-lg font-bold leading-none text-white drop-shadow-md">
              TMRG
            </span>
            <span className="text-xs text-white/90 drop-shadow-md">
              Tanzanian Myeloma Research Group
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-bold text-white hover:text-brand-teal drop-shadow-md uppercase tracking-wide"
          >
            About Us
          </Link>
          <Link
            href="/patients"
            className="text-sm font-bold text-white hover:text-brand-teal drop-shadow-md uppercase tracking-wide"
          >
            For Myeloma Patients
          </Link>
          <Link
            href="/research"
            className="text-sm font-bold text-white hover:text-brand-teal drop-shadow-md uppercase tracking-wide"
          >
            Research
          </Link>
          <Link
            href="/news"
            className="text-sm font-bold text-white hover:text-brand-teal drop-shadow-md uppercase tracking-wide"
          >
            News & Events
          </Link>
          <Link
            href="/portal"
            className="text-sm font-bold text-white hover:text-brand-teal drop-shadow-md uppercase tracking-wide"
          >
            Research Portal
          </Link>
          <button className="text-white hover:text-brand-teal drop-shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
