import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white font-bold">
                TMRG
              </div>
              <span className="text-lg font-bold text-brand-navy">TMRG</span>
            </Link>
            <p className="text-sm leading-relaxed">
              TMRG positions itself at the heart of myeloma research in Tanzania
              with the creation of national clinical trials, database and
              correlative research platforms.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-navy">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Muhimbili National Hospital
                  <br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+255 123 456 789</span>
              </li>
              <li className="flex gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@tmrg.tz" className="hover:text-brand-teal">
                  info@tmrg.tz
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-navy">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-brand-teal hover:text-white transition"
                >
                  <span className="sr-only">Social Link</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-navy">
              TMRG Quarterly
            </h3>
            <p className="mb-4 text-sm">
              We understand that staying informed is a crucial part of your
              journey. Sign up to keep updated on the latest progress.
            </p>
            <button className="w-full rounded border border-brand-navy bg-transparent px-4 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white">
              SIGN UP TODAY!
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Tanzanian Myeloma Research Group. All
            rights reserved. Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
