'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const REGISTER_URL = 'https://4yaarwin.tech/#/register?invitationCode=64747166955';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' }, // Descriptive label
  { href: '/contact', label: 'Contact Us' },
  { href: '/responsible-gaming', label: 'Responsible Gaming' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true }); // Performance fix
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border shadow-glow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section - SEO & LCP Fix */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="4YaarWin Home">
              <Image
                src="/logo.webp"
                alt="4YaarWin Official Logo"
                width={140}
                height={40}
                priority // LCP performance boost
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-brand-green transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-green font-medium text-sm transition-colors">
                Login
              </a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green-light text-brand-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-glow-sm hover:scale-105">
                Register
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button - ACCESSIBILITY 100 FIX */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brand-green focus:outline-none"
            aria-label={menuOpen ? "Close main menu" : "Open main menu"} // Essential for Accessibility
            aria-expanded={menuOpen}
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-brand-green transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-brand-green transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-brand-green transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Optimized Tap Targets */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-brand-dark/98 border-t border-brand-border px-6 py-8 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-xl text-white/90 hover:text-brand-green transition-colors font-display"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="w-full py-4 border border-brand-green/30 text-brand-green rounded-xl text-center font-bold text-lg active:scale-95 transition-transform">
              Login
            </a>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="w-full py-4 bg-brand-green text-brand-dark rounded-xl text-center font-bold text-lg shadow-glow active:scale-95 transition-transform">
              Register Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}