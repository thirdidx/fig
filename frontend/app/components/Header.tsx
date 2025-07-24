"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute z-50 w-full mix-blend-exclusion text-white">
        <div className="p-4 h-full">
          <div className="flex md:grid md:grid-cols-3 items-center justify-between h-full">
            {/* Logo */}
            <div className="md:justify-self-start">
              <Link className="w-[32px] md:w-[90px] block" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 89.73 71.87"
                >
                  <path
                    d="M18.92 0c-4.86 0-8.49 1.23-10.9 3.69-2.4 2.46-3.6 5.62-3.6 9.47v3.35H0v7.96h4.42v31.05h11.9V24.47h8.21v-7.96h-8.21v-2.6c0-1.79.35-3.06 1.05-3.81.7-.75 1.86-1.13 3.48-1.13 1.51 0 2.96.08 4.36.25V.34C24.2.29 23.17.21 22.11.13 21.05.05 19.99 0 18.92 0ZM26.72.54h11.9v9.81h-11.9zM68.46 12.19v5.78h-.17c-1.45-2.51-3.26-4.3-5.41-5.36-2.15-1.06-4.65-1.59-7.5-1.59-3.02 0-5.69.59-8 1.76-2.32 1.17-4.26 2.75-5.83 4.74-1.2 1.52-2.17 3.22-2.93 5.1V12.2h-11.9v43.34h11.9V43.36c.65 1.66 1.49 3.17 2.51 4.51 1.51 1.98 3.44 3.55 5.78 4.69 2.35 1.15 5.14 1.72 8.38 1.72 2.63 0 5.13-.54 7.5-1.63 2.37-1.09 4.2-2.78 5.49-5.07h.17v5.7c.05 3.07-.69 5.62-2.22 7.63-1.54 2.01-3.98 3.02-7.33 3.02-2.12 0-4-.43-5.62-1.3-1.62-.87-2.71-2.42-3.27-4.65H38.19c.17 2.46.85 4.57 2.05 6.33 1.2 1.76 2.71 3.2 4.53 4.32 1.82 1.12 3.83 1.94 6.03 2.47 2.21.53 4.37.8 6.5.8 4.97 0 8.94-.67 11.9-2.01 2.96-1.34 5.22-2.98 6.79-4.9 1.56-1.93 2.58-4.01 3.06-6.24.47-2.24.71-4.22.71-5.95V12.19H68.44Zm-.63 25.61c-.42 1.43-1.05 2.7-1.89 3.81a9.244 9.244 0 0 1-3.19 2.68c-1.29.67-2.77 1.01-4.44 1.01-1.84 0-3.38-.39-4.61-1.17a9.344 9.344 0 0 1-2.98-3.02 12.49 12.49 0 0 1-1.59-4.15c-.31-1.54-.46-3.09-.46-4.65s.18-3.17.55-4.65c.36-1.48.95-2.79 1.76-3.94A9.137 9.137 0 0 1 54 21c1.2-.67 2.64-1.01 4.32-1.01 1.96 0 3.58.36 4.86 1.09 1.29.73 2.32 1.71 3.1 2.93.78 1.23 1.34 2.64 1.68 4.23.34 1.59.5 3.28.5 5.07 0 1.56-.21 3.06-.63 4.48ZM81.79 12.03H85v.36h-1.4v4.06h-.42v-4.06h-1.4v-.36ZM85.58 16.44v-4.41h.64l1.45 3.89h.01l1.42-3.89h.63v4.41h-.42V12.5h-.01l-1.45 3.94h-.39l-1.45-3.94H86v3.94h-.42Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:block md:justify-self-center">
              <ul className="flex items-center gap-6 text-sm md:text-base font-normal font-accent uppercase">
                <li>
                  <Link
                    href="/designers"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Designers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sponsors"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.eventbrite.com/e/figtm-vol-3-fashion-show-tickets-1419416516009"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:opacity-70 transition-opacity"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block md:justify-self-end">
              <Link
                href="https://www.eventbrite.com/e/figtm-vol-3-fashion-show-tickets-1419416516009"
                className="btn btn-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              >
                Buy Tickets
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed top-24 left-0 right-0 bg-dark text-white p-6">
            <nav>
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/designers"
                    className="block text-lg hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Designers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sponsors"
                    className="block text-lg hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.eventbrite.com/e/figtm-vol-3-fashion-show-tickets-1419416516009"
                    className="block text-lg hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-lg hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-4">
                  <Link
                    href="https://www.eventbrite.com/e/figtm-vol-3-fashion-show-tickets-1419416516009"
                    className="btn btn-primary block text-center py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Buy Tickets
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
