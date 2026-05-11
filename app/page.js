import Link from 'next/link';
import CtaButton from '@/components/ui/CtaButton';

const REGISTER_URL = 'https://4yaarwin.com/#/register?invitationCode=64747166955';

export const metadata = {
  title: '4YaarWin Official – Play & Win Online | Register & Login',
  description:
    'Welcome to 4YaarWin official platform. Register now and start winning. Fast login, secure gameplay, and massive rewards await you.',
  alternates: { canonical: 'https://www.4yaarwin.com/' },
};

const benefits = [
  {
    icon: '🔒',
    title: 'Safe & Secure',
    desc: 'Your data and funds are protected with industry-grade encryption and secure payment gateways.',
  },
  {
    icon: '⚡',
    title: 'Instant Withdrawals',
    desc: 'Cash out your winnings instantly. No delays, no hassles – just fast and smooth transactions.',
  },
  {
    icon: '🎮',
    title: '100+ Games',
    desc: "Choose from a massive library of games. From classics to modern titles, there's something for everyone.",
  },
  {
    icon: '🎁',
    title: 'Daily Bonuses',
    desc: 'Log in every day to claim exciting bonuses, free spins, and exclusive rewards.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    desc: 'Play seamlessly on any device – smartphone, tablet, or desktop. Optimized for all screen sizes.',
  },
  {
    icon: '🏆',
    title: 'Big Tournaments',
    desc: 'Compete in weekly and monthly tournaments with massive prize pools up for grabs.',
  },
];

const steps = [
  { step: '01', title: 'Create Account', desc: 'Register in under 2 minutes with your phone number or email.' },
  { step: '02', title: 'Deposit Funds', desc: 'Add money using UPI, Net Banking, or your preferred method.' },
  { step: '03', title: 'Pick Your Game', desc: 'Browse 100+ games and choose your favorite to play.' },
  { step: '04', title: 'Win & Withdraw', desc: 'Win big and withdraw your earnings instantly to your account.' },
];

const stats = [
  { value: '5L+', label: 'Registered Players' },
  { value: '₹10Cr+', label: 'Total Winnings Paid' },
  { value: '100+', label: 'Games Available' },
  { value: '24/7', label: 'Customer Support' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-20">
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-8 fade-in-up">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green text-sm font-body font-500 tracking-wide">Official Platform – Trusted by 5 Lakh+ Players</span>
          </div>

          {/* H1 */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 fade-in-up fade-in-up-delay-1">
            Play, Compete &{' '}
            <span className="text-brand-green text-glow block">Win Big Daily</span>
          </h1>

          <p className="text-white/60 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up fade-in-up-delay-2">
            4YaarWin is India's most trusted online gaming platform. Register in seconds, choose from
            100+ games, and start earning real rewards today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up fade-in-up-delay-3">
            <CtaButton label="🎮 Play Now" size="lg" variant="primary" />
            <CtaButton label="Register Free" size="lg" variant="outline" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto fade-in-up fade-in-up-delay-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 shadow-card">
                <div className="font-display font-bold text-2xl md:text-3xl text-brand-green text-glow">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
      </section>

      {/* ─── ABOUT PLATFORM ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                What is <span className="text-brand-green">4YaarWin?</span>
              </h2>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                4YaarWin is India's premier online gaming destination, designed to give every player
                a fair, fun, and rewarding experience. Our platform combines cutting-edge technology
                with a user-first approach to deliver the ultimate gaming journey.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                Whether you're a seasoned gamer or just starting out, 4YaarWin offers an unmatched
                variety of games, transparent gameplay, and lightning-fast payouts that make us the
                #1 choice for online gaming in India.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-8">
                With over 5 lakh registered players and ₹10 crore+ in winnings paid out, 4YaarWin
                has established itself as the most trusted name in online gaming.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton label="Register Now" size="md" />
                <Link href="/about" className="btn-outline px-7 py-3 rounded-xl text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {['Trusted & Verified', 'RNG Certified', 'SSL Secured', 'Instant KYC'].map((feat, i) => (
                <div
                  key={feat}
                  className="glass-card rounded-2xl p-6 shadow-card border border-brand-border hover:border-brand-green/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-green/20 transition-all">
                    <span className="text-brand-green text-xl">
                      {['✅', '🎲', '🔐', '⚡'][i]}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{feat}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── BENEFITS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Why Choose <span className="text-brand-green">4YaarWin?</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto">
              Discover the features that make 4YaarWin the best online gaming platform in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="glass-card rounded-2xl p-6 shadow-card border border-brand-border hover:border-brand-green/30 hover:shadow-glow-sm transition-all group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-brand-green transition-colors">
                  {b.title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              How to <span className="text-brand-green">Get Started</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto">
              Start playing on 4YaarWin in just 4 simple steps. It takes less than 2 minutes!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-brand-green/40 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-btn-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-sm animate-pulse-glow">
                    <span className="font-display font-bold text-brand-dark text-xl">{s.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CtaButton label="Start Playing Now" size="lg" />
          </div>
        </div>
      </section>

      {/* ─── BIG CTA SECTION ─── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center shadow-glow-md border border-brand-green/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-green-glow pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Join 4YaarWin Today –<br />
                <span className="text-brand-green text-glow">Your First Win Awaits!</span>
              </h2>
              <p className="text-white/60 font-body text-lg mb-8 max-w-xl mx-auto">
                Don't miss out on daily bonuses, mega tournaments, and instant payouts.
                Register now on the official 4YaarWin platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CtaButton label="🚀 Register Now – Free" size="lg" />
                <CtaButton label="Login to Account" size="lg" variant="outline" />
              </div>
              <p className="text-white/30 text-xs font-body mt-6">
                By registering, you agree to our{' '}
                <Link href="/terms" className="text-brand-green/60 hover:text-brand-green transition-colors">Terms & Conditions</Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-brand-green/60 hover:text-brand-green transition-colors">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
