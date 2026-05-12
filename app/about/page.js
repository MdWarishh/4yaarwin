import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaButton from '@/components/ui/CtaButton';
import Link from 'next/link';

export const metadata = {
  title: 'About 4YaarWin – Yaar Win Game | India\'s Trusted Online Gaming Platform',
  description:
    'About 4YaarWin Game (YaarWin, Yaar Win, YearWin Game) – India\'s most trusted online gaming platform. Learn about our mission, Yaar Win login guides, APK download, Wingo, K3, 5D & more.',
  keywords:
    '4yaarwin game, yearwin game, yaar win, yarrwin, yearwin games, yaar win gift code, year win gift code, yaar win cricket, year win login, yaarwin giftcode, about yaarwin, yaarwin platform',
  alternates: { canonical: 'https://www.4yaarwin.tech/about/' },
  openGraph: {
    title: 'About 4YaarWin Game – Yaar Win Login, APK & Gaming Guide',
    description: 'Learn about the 4YaarWin Game platform – registration, Yaar Win login, APK download, Wingo, K3, 5D, Slots & Aviator guides for Indian players.',
    url: 'https://www.4yaarwin.tech/about/',
    siteName: '4YaarWin',
    type: 'website',
  },
};

const values = [
  { icon: '🎯', title: 'Fair Play Always', desc: 'All games on YaarWin use certified RNG technology ensuring 100% fair and unbiased results for every player.' },
  { icon: '🤝', title: 'Trust First', desc: 'Transparent operations, honest payouts, and a 4YaarWin platform built on player trust and community.' },
  { icon: '🛡️', title: 'Player Safety', desc: 'Advanced SSL encryption and responsible gaming tools protect every YaarWin Game account and transaction.' },
  { icon: '💡', title: 'Continuous Innovation', desc: 'We continuously improve 4YaarWin to deliver the best Yaar Win gaming experience to all users.' },
  { icon: '⚡', title: 'Instant Payouts', desc: 'Fast and reliable withdrawals via UPI and Bank Account so your YaarWin winnings reach you without delay.' },
  { icon: '🎮', title: '100+ Games', desc: 'From Wingo and K3 to Aviator and Slots – YaarWin Game offers a massive library for every type of player.' },
];

const whatWeProvide = [
  { icon: '🔑', title: 'Yaar Win Login & Registration Guides', desc: 'Step-by-step Year Win login and registration guides to help you access your 4YaarWin account instantly and without confusion.' },
  { icon: '📲', title: 'YaarWin APK Download & Install', desc: 'Complete YaarWin Game APK download and installation process for Android devices, including how to enable unknown sources.' },
  { icon: '🎮', title: 'Game Guides – Wingo, K3, 5D & More', desc: 'Detailed information about popular games on YaarWin Game like Wingo colour prediction, K3, 5D, Slots, Plinko, and Aviator.' },
  { icon: '💰', title: 'Deposit & Withdrawal Guides', desc: 'Clear guides on how to add funds and withdraw money from your YaarWin Game wallet via UPI, Net Banking, and QR Code.' },
  { icon: '🎁', title: 'Yaar Win Gift Code & Referral Info', desc: 'Updated information on YaarWin giftcode redemption, Yaar Win gift code offers, and the YaarWin Refer & Earn program.' },
  { icon: '📋', title: 'Account Setup & KYC Guide', desc: 'Step-by-step guides on adding bank accounts, completing KYC, and managing your 4YaarWin profile securely.' },
];

const stats = [
  { val: '5L+', label: 'Registered Players' },
  { val: '₹10Cr+', label: 'Winnings Paid Out' },
  { val: '100+', label: 'Games Available' },
  { val: '99.9%', label: 'Platform Uptime' },
];

const safetyTips = [
  'We do not ask for any personal or financial details – always keep your YaarWin login credentials private.',
  'We do not provide direct gaming services – we are an informational guide for the 4YaarWin platform.',
  'Always verify information from the official 4YaarWin website before taking any financial action.',
  'Play responsibly and set deposit/withdrawal limits on your YaarWin Game account.',
  'YaarWin Game is strictly for users aged 18 years and above.',
  'Use the platform for entertainment purposes only and never chase losses.',
];

const internalLinks = [
  { href: '/', label: '4YaarWin Home – Play & Win', desc: 'Return to the main 4YaarWin Game homepage' },
  { href: '/yaarwin-login', label: 'Yaar Win Login Guide', desc: 'Step-by-step Year Win login and registration' },
  { href: '/download', label: 'YaarWin APK Download', desc: 'Download the latest YaarWin Game APK' },
  { href: '/responsible-gaming', label: 'Responsible Gaming on YaarWin', desc: 'Safe gaming guidelines for 4YaarWin users' },
  { href: '/privacy-policy', label: 'Privacy Policy', desc: 'How 4YaarWin protects your data' },
  { href: '/terms', label: 'Terms & Conditions', desc: 'YaarWin Game platform terms of use' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />

        {/* ─── HERO ─── */}
        <div className="text-center mb-16" aria-label="About 4YaarWin Game">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green text-sm font-body tracking-wide">Official 4YaarWin Information Page</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            About <span className="text-brand-green text-glow">4YaarWin Game</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Welcome to <strong className="text-white/80">4YaarWin Game</strong> – your trusted source for complete information about the <strong className="text-white/80">YaarWin</strong> online gaming platform. We provide clear, updated, and easy-to-understand guides on <strong className="text-white/80">Yaar Win login</strong>, registration, APK download, and gameplay.
          </p>
          <p className="text-white/40 font-body text-sm max-w-2xl mx-auto">
            Also known as:{' '}
            <Link href="/" className="text-brand-green/60 hover:text-brand-green transition-colors">YearWin Game</Link>{' • '}
            <Link href="/" className="text-brand-green/60 hover:text-brand-green transition-colors">Yarrwin</Link>{' • '}
            <Link href="/" className="text-brand-green/60 hover:text-brand-green transition-colors">Yearwin Games</Link>{' • '}
            <Link href="/" className="text-brand-green/60 hover:text-brand-green transition-colors">Yaar Win</Link>{' • '}
            <Link href="/" className="text-brand-green/60 hover:text-brand-green transition-colors">Year Win Login</Link>
          </p>
        </div>

        {/* ─── STORY ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="4YaarWin Our Story">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            Our <span className="text-brand-green">Story</span> – What is 4YaarWin?
          </h2>
          <div className="space-y-4 text-white/60 font-body text-base leading-relaxed">
            <p>
              <strong className="text-white/80">4YaarWin</strong> (also known as <strong className="text-white/80">YaarWin</strong>, <strong className="text-white/80">Yaar Win Game</strong>, <strong className="text-white/80">YearWin Game</strong>, and <strong className="text-white/80">Yarrwin</strong>) was created with a vision to transform the online gaming landscape in India. We recognized that players deserved more – more transparency, more security, more exciting games, and faster payouts.
            </p>
            <p>
              The name <strong className="text-white/80">"4YaarWin"</strong> embodies our philosophy: gaming is better with friends (yaars), and we want every player to win. Our platform is community-first – players can compete, connect, and celebrate wins together on the <strong className="text-white/80">YaarWin Game</strong> platform.
            </p>
            <p>
              Our goal is simple: to provide users with clear, easy-to-understand, and updated information related to <strong className="text-white/80">Yaar Win login</strong>, <Link href="/download" className="text-brand-green/70 hover:text-brand-green transition-colors">APK download</Link>, gameplay guides for Wingo, K3, 5D, Slots, and Aviator, and how to safely deposit and withdraw on the <strong className="text-white/80">4YaarWin</strong> platform.
            </p>
            <p>
              Since launch, <strong className="text-white/80">4YaarWin</strong> has grown to become one of the most trusted gaming destinations in India, with over <strong className="text-brand-green">5 lakh registered players</strong> and <strong className="text-brand-green">₹10 crore+ in winnings paid out</strong> to our community.
            </p>
          </div>
        </div>

        {/* ─── STATS ─── */}
        <div className="glass-card rounded-3xl p-8 border border-brand-green/20 shadow-glow-sm mb-12" aria-label="4YaarWin Platform Statistics">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">
            <span className="text-brand-green">4YaarWin Game</span> by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-brand-green text-glow mb-2">{s.val}</div>
                <div className="text-white/50 font-body text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── WHAT WE PROVIDE ─── */}
        <div className="mb-16" aria-label="What 4YaarWin Provides">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              What We <span className="text-brand-green">Provide</span>
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto text-sm">
              At <strong className="text-white/70">4YaarWin Game</strong>, we offer informational guides and resources to help you use the <strong className="text-white/70">YaarWin</strong> platform effectively and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeProvide.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 border border-brand-border hover:border-brand-green/30 transition-all group shadow-card">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── VALUES ─── */}
        <div className="mb-16" aria-label="4YaarWin Core Values">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Our <span className="text-brand-green">Core Values</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto text-sm">
              Everything we do at <strong className="text-white/70">YaarWin Game</strong> is guided by these core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6 border border-brand-border text-center hover:border-brand-green/30 transition-all group">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-brand-green transition-colors">{v.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── OUR PURPOSE ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="4YaarWin Our Purpose">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            Our <span className="text-brand-green">Purpose</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                We are an <strong className="text-white/80">informational website</strong> dedicated to the <strong className="text-white/80">4YaarWin Game</strong> platform. We do not operate or own any gaming platform. Our content is created to guide users and provide helpful knowledge so they can understand how to use <strong className="text-white/80">YaarWin</strong> safely and easily.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                Whether you're looking for a <strong className="text-white/80">Year Win login</strong> guide, information about the <strong className="text-white/80">YaarWin APK download</strong>, how to play <strong className="text-white/80">Wingo colour prediction</strong>, or how to redeem a <strong className="text-white/80">Yaar Win gift code</strong> – we've got you covered with accurate and updated guides.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed">
                Our content covers everything from <Link href="/" className="text-brand-green/70 hover:text-brand-green transition-colors">4YaarWin registration</Link>, deposit and withdrawal processes, bank account setup, <strong className="text-white/80">YaarWin giftcode</strong> redemption, referral programs, and responsible gaming guidelines.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-display font-bold text-white text-xl mb-4">⚠️ Important Note</h3>
              {[
                'We do not ask for any personal or financial details from users.',
                'We do not provide direct gaming services on 4YaarWin.',
                'Always verify information from the official YaarWin platform before acting.',
                'Use the Yaar Win platform only for entertainment purposes.',
                'YaarWin Game is strictly for users aged 18 years and above.',
              ].map((note, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-brand-green/5 border border-brand-green/20 rounded-xl">
                  <span className="text-brand-green text-sm mt-0.5">✓</span>
                  <p className="text-white/60 font-body text-sm leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── PLATFORM OVERVIEW ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="YaarWin Game Platform Overview">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            <span className="text-brand-green">YaarWin Game</span> Platform Overview
          </h2>
          <p className="text-white/60 font-body text-base leading-relaxed mb-6">
            <strong className="text-white/80">YaarWin</strong> (4YaarWin / Yaar Win / YearWin Game) is a modern and fast-growing online gaming platform offering a wide variety of prediction-based and interactive games. Here's a quick overview:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Games Available', value: 'Wingo, K3, 5D, Slots, Aviator, Plinko, Limbo, Poker, Rummy, TRX Win, Moto Racing' },
              { label: 'Registration Method', value: 'Mobile number or Email – complete Yaar Win registration in under 2 minutes' },
              { label: 'Year Win Login', value: 'Login via phone number or email on the official 4YaarWin app or website' },
              { label: 'APK Download', value: 'Download YaarWin Game APK directly from the official website (not on Google Play Store)' },
              { label: 'Payment Methods', value: 'UPI, Net Banking, QR Code, PhonePe, Paytm, E-Wallet, USDT-TRC20' },
              { label: 'Withdrawal', value: 'Instant withdrawal via Bank Account or UPI ID. Minimum ₹100' },
              { label: 'YaarWin Invite Code', value: '64747166955 – use during registration for welcome bonus up to ₹100' },
              { label: 'Yaar Win Gift Code', value: 'Redeem YaarWin giftcode from the Gift Code section in your dashboard' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-brand-border/50 rounded-xl">
                <span className="text-brand-green text-sm mt-0.5 font-bold">→</span>
                <div>
                  <p className="text-white font-body text-sm font-semibold">{item.label}</p>
                  <p className="text-white/50 font-body text-xs mt-0.5 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── STAY SAFE ─── */}
        <div className="mb-16" aria-label="Stay Safe on YaarWin Game">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Stay <span className="text-brand-green">Safe</span> on YaarWin Game
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto text-sm">
              We encourage all users to play responsibly on <strong className="text-white/70">4YaarWin</strong> and use the platform with full awareness.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyTips.map((tip, i) => (
              <div key={i} className="glass-card rounded-xl p-5 border border-brand-border flex items-start gap-4 hover:border-brand-green/30 transition-all">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-green/15 rounded-xl flex items-center justify-center text-brand-green font-bold text-sm">{i + 1}</span>
                <p className="text-white/60 font-body text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/responsible-gaming" className="text-brand-green/70 hover:text-brand-green font-body text-sm transition-colors">
              Read Full Responsible Gaming Guidelines on 4YaarWin →
            </Link>
          </div>
        </div>

        {/* ─── INTERNAL LINKS ─── */}
        <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card mb-12" aria-label="Quick Links to 4YaarWin Pages">
          <h2 className="font-display font-bold text-2xl text-white mb-6">
            Quick Links – <span className="text-brand-green">4YaarWin</span> Platform
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 p-4 bg-white/[0.02] border border-brand-border/50 rounded-xl hover:border-brand-green/40 hover:bg-brand-green/5 transition-all group"
              >
                <span className="text-brand-green text-lg mt-0.5">→</span>
                <div>
                  <p className="text-white font-body text-sm font-semibold group-hover:text-brand-green transition-colors">{link.label}</p>
                  <p className="text-white/40 font-body text-xs mt-0.5">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="glass-card rounded-3xl p-10 md:p-14 text-center border border-brand-green/20 shadow-glow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-green-glow pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Join the <span className="text-brand-green text-glow">4YaarWin Family?</span>
            </h2>
            <p className="text-white/50 font-body mb-3 max-w-xl mx-auto text-sm leading-relaxed">
              Experience India's most trusted <strong className="text-white/70">YaarWin Game</strong> platform. Complete <strong className="text-white/70">Yaar Win registration</strong> in seconds and start playing Wingo, K3, 5D, Slots & Aviator today.
            </p>
            <p className="text-white/40 font-body text-xs mb-8">
              Use invite code <strong className="text-brand-green">64747166955</strong> during registration to unlock your welcome bonus of up to ₹100.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaButton label="🚀 Register on 4YaarWin – Free" size="lg" />
              <CtaButton label="🔑 Yaar Win Login" size="lg" variant="outline" />
            </div>
            <p className="text-white/25 text-xs font-body mt-6">
              By registering, you agree to our{' '}
              <Link href="/terms" className="text-brand-green/50 hover:text-brand-green transition-colors">Terms & Conditions</Link>
              {' '}and{' '}
              <Link href="/privacy-policy" className="text-brand-green/50 hover:text-brand-green transition-colors">Privacy Policy</Link>.
              {' '}18+ Only. Play Responsibly on YaarWin Game.
            </p>
          </div>
        </div>

        {/* ─── SEO TEXT BLOCK ─── */}
        <div className="mt-12 p-6 rounded-2xl border border-brand-border/30" aria-label="About 4YaarWin SEO Content">
          <h2 className="font-display font-bold text-xl text-white mb-3">
            About <span className="text-brand-green">4YaarWin</span> – Complete Platform Guide
          </h2>
          <p className="text-white/35 font-body text-xs leading-relaxed">
            <strong className="text-white/50">4YaarWin Game</strong> (also known as <strong className="text-white/50">YaarWin</strong>, <strong className="text-white/50">Yaar Win</strong>, <strong className="text-white/50">YearWin Game</strong>, <strong className="text-white/50">Yarrwin</strong>, and <strong className="text-white/50">Yearwin Games</strong>) is India's premier online gaming platform offering Wingo, K3, 5D, Slots, Plinko, Limbo, and Aviator. Users can complete <strong className="text-white/50">Yaar Win registration</strong> and <strong className="text-white/50">Year Win login</strong> in minutes using their mobile number. The <strong className="text-white/50">YaarWin Game APK</strong> is available for download directly from the official website. Redeem your <strong className="text-white/50">Yaar Win gift code</strong> or <strong className="text-white/50">YaarWin giftcode</strong> from the dashboard to unlock bonus rewards. For more details on Yaar Win cricket and other game modes, visit our homepage. Use invite code <strong className="text-white/50">64747166955</strong> for a welcome bonus of up to ₹100.
          </p>
        </div>
      </div>
    </div>
  );
}