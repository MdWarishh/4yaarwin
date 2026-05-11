'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const REGISTER_URL = 'https://4yaarwin.tech/#/register?invitationCode=64747166955';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-btn-gradient flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all">
                <span className="font-display font-bold text-brand-dark text-lg leading-none">4Y</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-white text-xl tracking-wide">
                4Yaar<span className="text-brand-green">Win</span>
              </span>
              <span className="text-[10px] text-brand-green/60 tracking-widest uppercase font-body">Official Platform</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-body font-500 text-white/70 hover:text-brand-green transition-colors rounded-lg hover:bg-brand-green/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="btn-outline px-5 py-2 rounded-xl text-sm">
              Login
            </a>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-5 py-2 rounded-xl text-sm shadow-glow-sm">
              Register Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-brand-green transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-green transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-green transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-brand-dark/98 border-t border-brand-border px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-brand-green hover:bg-brand-green/5 rounded-lg transition-colors font-body"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="btn-outline px-5 py-3 rounded-xl text-center">
              Login
            </a>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-5 py-3 rounded-xl text-center shadow-glow-sm">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
