import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white font-bold text-xl">
            TMRG
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-lg font-bold leading-none text-brand-navy">
              TMRG
            </span>
            <span className="text-xs text-gray-500">
              Tanzanian Myeloma Research Group
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            About Us
          </Link>
          <Link
            href="/patients"
            className="text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            For Myeloma Patients
          </Link>
          <Link
            href="/research"
            className="text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            Research
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            News & Events
          </Link>
          <Link
            href="/portal"
            className="text-sm font-medium text-gray-700 hover:text-brand-teal"
          >
            Research Portal
          </Link>
          <button className="text-gray-500 hover:text-brand-navy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile menu button placeholder */}
        <button className="md:hidden p-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
