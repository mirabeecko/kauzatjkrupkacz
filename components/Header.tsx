'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  return (
    <header className="bg-slate-900 text-white border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Hamburger Menu */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Button - zobrazí levý panel */}
            <button
              onClick={handleMenuClick}
              className="lg:hidden p-2 hover:bg-slate-800 rounded transition"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="text-lg md:text-xl font-bold hover:text-blue-400 transition">
              Kauza TJ Krupka
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link href="/temata" className="hover:text-blue-400 transition text-sm lg:text-base">
              Témata
            </Link>
            <Link href="/udalosti" className="hover:text-blue-400 transition text-sm lg:text-base">
              Události
            </Link>
            <Link href="/akteri" className="hover:text-blue-400 transition text-sm lg:text-base">
              Aktéři
            </Link>
            <Link href="/otazky" className="hover:text-blue-400 transition text-sm lg:text-base">
              Otázky
            </Link>
            <Link href="/pointy" className="hover:text-blue-400 transition text-sm lg:text-base">
              Pointy
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="/cisla"
              className="px-2 md:px-3 py-1.5 text-xs md:text-sm bg-blue-600 hover:bg-blue-700 rounded transition font-medium"
            >
              💰 Čísla
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-slate-800 rounded transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/temata"
                className="px-3 py-2 hover:bg-slate-800 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📚 Témata
              </Link>
              <Link
                href="/udalosti"
                className="px-3 py-2 hover:bg-slate-800 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📅 Události
              </Link>
              <Link
                href="/akteri"
                className="px-3 py-2 hover:bg-slate-800 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                👥 Aktéři
              </Link>
              <Link
                href="/otazky"
                className="px-3 py-2 hover:bg-slate-800 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                ❓ Otázky
              </Link>
              <Link
                href="/pointy"
                className="px-3 py-2 hover:bg-slate-800 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                💡 Pointy
              </Link>
              <Link
                href="/prehled"
                className="px-3 py-2 hover:bg-slate-800 rounded transition text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                → Rychlý přehled
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
