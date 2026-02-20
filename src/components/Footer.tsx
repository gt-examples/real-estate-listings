import { T } from "gt-next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <T>
              <h3 className="text-sm font-semibold text-zinc-300 mb-3">
                Navigation
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                  Listings
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                  Contact
                </Link>
              </div>
            </T>
          </div>
          <div>
            <T>
              <h3 className="text-sm font-semibold text-zinc-300 mb-3">
                Property Types
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-zinc-500">Houses</span>
                <span className="text-sm text-zinc-500">Apartments</span>
                <span className="text-sm text-zinc-500">Condos</span>
              </div>
            </T>
          </div>
          <div>
            <T>
              <h3 className="text-sm font-semibold text-zinc-300 mb-3">
                Resources
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://generaltranslation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                  General Translation
                </a>
                <a
                  href="https://github.com/gt-examples/real-estate-listings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition"
                >
                  GitHub
                </a>
              </div>
            </T>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <T>Built with General Translation</T>
        </div>
      </div>
    </footer>
  );
}
