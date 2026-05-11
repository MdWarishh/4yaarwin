import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaButton from '@/components/ui/CtaButton';
import Link from 'next/link';

const REGISTER_URL = 'https://4yaarwin.tech/#/register?invitationCode=64747166955';

export const metadata = {
  title: '4YaarWin Login – Access Your Gaming Account',
  description:
    'Login to your 4YaarWin account and start playing instantly. Fast, secure, and easy access to all your favorite games and winnings.',
  alternates: { canonical: 'https://www.4yaarwin.tech/login/' },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/login', label: 'Login' }]} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Login to <span className="text-brand-green">4YaarWin</span>
            </h1>
            <p className="text-white/60 font-body text-base leading-relaxed mb-6">
              Welcome back! Access your 4YaarWin account to continue your gaming journey,
              check your winnings, and claim your daily bonuses. Our login process is fast,
              secure, and designed for your convenience.
            </p>
            <p className="text-white/60 font-body text-base leading-relaxed mb-8">
              New to 4YaarWin? <Link href="/register" className="text-brand-green hover:underline">Register for free</Link> and
              get started in under 2 minutes. No complicated forms, no waiting – just instant access.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: '🔒', text: 'Bank-grade SSL encryption for every login' },
                { icon: '⚡', text: 'Instant account access – no delays' },
                { icon: '📱', text: 'Login from any device, anytime' },
                { icon: '🎁', text: 'Daily login bonuses waiting for you' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/70 font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Login Card */}
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-card border border-brand-border">
            {/* YaarWin style header like in image */}
            <div className="bg-brand-green rounded-2xl -mx-4 -mt-4 px-6 py-6 mb-8 text-center">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8" />
                <span className="font-display font-bold text-brand-dark text-2xl">4YaarWin✦</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm">🌐</span>
                  <span className="text-brand-dark text-xs font-body">EN</span>
                </div>
              </div>
              <p className="text-brand-dark/80 font-body text-sm mt-2">
                Login to your account securely
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-white text-center mb-2">
              Welcome Back!
            </h2>
            <p className="text-white/50 font-body text-sm text-center mb-8">
              Click below to access your 4YaarWin account
            </p>

            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 rounded-xl text-base text-center block mb-4 shadow-glow-md"
            >
              📱 Login with Phone Number
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full py-4 rounded-xl text-base text-center block mb-6"
            >
              ✉️ Login with Email
            </a>

            <div className="section-divider mb-6" />

            <p className="text-white/40 text-sm font-body text-center">
              Don't have an account?{' '}
              <Link href="/register" className="text-brand-green hover:underline font-500">
                Register Now – It's Free!
              </Link>
            </p>
          </div>
        </div>

        {/* SEO content */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-brand-border">
            <h2 className="font-display font-bold text-xl text-white mb-3">How to Login</h2>
            <ol className="space-y-2 text-white/50 font-body text-sm list-decimal list-inside">
              <li>Click the Login button above</li>
              <li>Enter your registered phone or email</li>
              <li>Enter your password or OTP</li>
              <li>Access your account dashboard</li>
            </ol>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-brand-border">
            <h2 className="font-display font-bold text-xl text-white mb-3">Forgot Password?</h2>
            <p className="text-white/50 font-body text-sm leading-relaxed">
              If you forgot your 4YaarWin password, click on the login link above and use the
              "Forgot Password" option to reset it via your registered phone number or email.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-brand-border">
            <h2 className="font-display font-bold text-xl text-white mb-3">New Here?</h2>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
              Create your 4YaarWin account in under 2 minutes and start winning today.
            </p>
            <CtaButton label="Register Free" size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
