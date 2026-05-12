import Link from 'next/link';

const REGISTER_URL = 'https://4yaarwin.tech/#/register?invitationCode=64747166955';

const footerLinks = {
  Platform: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ],
  Support: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/responsible-gaming', label: 'Responsible Gaming' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark-2 border-t border-brand-border mt-20">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-brand-dark-3 via-brand-card to-brand-dark-3 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">
              Ready to <span className="text-brand-green text-glow">Play & Win?</span>
            </h3>
            <p className="text-white/60 font-body text-sm">Join thousands of winners on 4YaarWin today.</p>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-xl shadow-glow-md whitespace-nowrap"
          >
            Register Now – It's Free
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-btn-gradient flex items-center justify-center">
                <span className="font-display font-bold text-brand-dark text-lg">4Y</span>
              </div>
              <span className="font-display font-bold text-white text-xl">
                4Yaar<span className="text-brand-green">Win</span>
              </span>
            </Link>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
              4YaarWin is your trusted online gaming platform. Experience thrilling gameplay,
              instant rewards, and a secure environment built for winners.
            </p>
            <div className="mt-6">
              <p className="text-white/30 text-xs font-body">
                ⚠️ Please play responsibly. This platform is for adults (18+) only.
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-brand-green uppercase tracking-wider text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-brand-green text-sm font-body transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} 4YaarWin Official. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/30 hover:text-brand-green text-xs transition-colors">Privacy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="text-white/30 hover:text-brand-green text-xs transition-colors">Terms</Link>
            <span className="text-white/20">|</span>
            <Link href="/disclaimer" className="text-white/30 hover:text-brand-green text-xs transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
