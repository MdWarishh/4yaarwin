import Link from 'next/link';
import CtaButton from '@/components/ui/CtaButton';

const REGISTER_URL = 'https://4yaarwin.com/#/register?invitationCode=64747166955';
const SITE_URL = 'https://www.4yaarwin.tech';

// ─── PAGE METADATA (SEO 100 ke liye) ───
export const metadata = {
  title: '4YaarWin Game – Yaar Win Login, Register & Play | Official Platform',
  description:
    "Welcome to 4YaarWin Game – India's trusted online gaming platform. Play Wingo, K3, 5D, Slots & Aviator. Fast Yaar Win login, instant withdrawals & daily bonuses. Register free now!",
  keywords:
    '4yaarwin game, yearwin game, yaar win, yarrwin, yearwin games, yaar win gift code, year win gift code, yaar win cricket, year win login, yaarwin giftcode, yaarwin login, 4yaarwin, yaarwin register, wingo game, colour prediction',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: '4YaarWin Game – Play & Win Real Rewards | Official Platform',
    description:
      "India's most trusted online gaming platform. Play Wingo, K3, 5D, Aviator & more. Register free on 4YaarWin and start winning today!",
    url: SITE_URL,
    siteName: '4YaarWin',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: '4YaarWin Game – Play & Win Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4YaarWin Game – Play & Win Real Rewards',
    description: "India's most trusted online gaming platform. Register free!",
    images: [`${SITE_URL}/logo.webp`],
  },
};

// ─── DATA ───
const benefits = [
  {
    icon: '🔒',
    title: 'Safe & Secure Platform',
    desc: 'Your data and funds are protected with industry-grade SSL encryption and secure payment gateways on 4YaarWin Game.',
  },
  {
    icon: '⚡',
    title: 'Instant Withdrawals',
    desc: 'Cash out your YaarWin winnings instantly via UPI or Bank Account. No delays, no hassles – fast and smooth transactions.',
  },
  {
    icon: '🎮',
    title: '100+ Games Available',
    desc: 'Play Wingo, K3, 5D, Poker, Slots, Aviator, Plinko, Limbo & more on the YaarWin Game platform. New games added regularly.',
  },
  {
    icon: '🎁',
    title: 'Daily Bonuses & Rewards',
    desc: 'Log in every day to claim exciting bonuses, free spins, and exclusive rewards on your 4YaarWin account.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly APK',
    desc: 'Download YaarWin Game APK and play on any Android device. Optimized for all screen sizes – smartphone or tablet.',
  },
  {
    icon: '🏆',
    title: 'Big Tournaments & Events',
    desc: 'Compete in YaarWin weekly and monthly tournaments with massive prize pools including cash, gold & luxury prizes.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Register on YaarWin',
    desc: 'Complete Yaar Win registration in under 2 minutes with your phone number. Use invite code for bonus.',
  },
  {
    step: '02',
    title: 'Deposit Funds',
    desc: 'Add money using UPI, Net Banking, QR Code or digital wallet to your YaarWin Game account.',
  },
  {
    step: '03',
    title: 'Pick Your Game',
    desc: 'Browse 100+ games on 4YaarWin – Wingo, K3, 5D, Slots, Aviator and more. Choose your favorite.',
  },
  {
    step: '04',
    title: 'Win & Withdraw',
    desc: 'Win big on YaarWin and withdraw your earnings instantly to your bank account or UPI ID.',
  },
];

const stats = [
  { value: '5L+', label: 'Registered Players' },
  { value: '₹10Cr+', label: 'Total Winnings Paid' },
  { value: '100+', label: 'Games Available' },
  { value: '24/7', label: 'Customer Support' },
];

const gameCategories = [
  {
    icon: '🎯',
    title: 'Colour Prediction & Lottery Games',
    desc: 'Explore fast-result prediction and lottery-style games on 4YaarWin designed for users who enjoy quick rounds, simple choices, and instant gameplay.',
    keywords: 'Wingo, K3, 5D, TRX Win',
  },
  {
    icon: '⚡',
    title: 'Instant Play Entertainment Games',
    desc: 'Enjoy quick-play games on YaarWin that are perfect for short sessions, offering easy navigation, fast loading, and smooth performance on all devices.',
    keywords: 'Fast Games, Quick Play',
  },
  {
    icon: '🎰',
    title: 'Slots & Casino Style Games',
    desc: 'Discover interactive slot and casino-style games on YaarWin Game with engaging layouts, smooth controls, and an enjoyable experience for all users.',
    keywords: 'Slots, Jili, Casino',
  },
  {
    icon: '🏆',
    title: 'Popular & Trending Games',
    desc: 'Access the most played and trending games on 4YaarWin Game, ideal for users looking for quick entertainment and easy game selection.',
    keywords: 'Aviator, Limbo, Plinko',
  },
  {
    icon: '🃏',
    title: 'Card & Arcade Gaming Options',
    desc: 'Play a variety of card-based and arcade-style games on YaarWin designed for casual users who prefer simple and entertaining gameplay.',
    keywords: 'Poker, Rummy, Arcade',
  },
];

const wingoSteps = [
  'Log in to your YaarWin account using your registered mobile number',
  'Open the Wingo section from the main dashboard',
  'Select a round duration: 30 seconds, 1 minute, 3 minutes, or 5 minutes',
  'Choose your prediction – Colour (Red, Green, Violet) or Number (0–9)',
  'Enter your preferred amount and confirm your prediction before the timer ends',
  'If your prediction is correct, winnings are added instantly to your YaarWin wallet',
];

const depositSteps = [
  'Open the Yaar Win app or website and log in using your registered mobile number',
  'Go to the Wallet or Recharge section from the main dashboard',
  'Tap on the Deposit or Add Balance option',
  'Enter the amount you want to add to your wallet',
  'Select a preferred payment method such as UPI, QR Code, or digital wallet',
  'Confirm the payment – your wallet balance will be updated instantly',
];

const withdrawSteps = [
  {
    title: 'Log in to Your Account',
    desc: 'Open the official YaarWin Game app or website and sign in using your registered mobile number and password.',
  },
  {
    title: 'Go to Wallet Section',
    desc: 'Navigate to the Wallet or Withdraw section from your YaarWin dashboard.',
  },
  {
    title: 'Select Withdrawal Method',
    desc: 'Choose your preferred withdrawal option: Bank Account or UPI ID.',
  },
  {
    title: 'Enter Withdrawal Amount',
    desc: 'Enter the amount you want to withdraw based on the platform limits.',
  },
  {
    title: 'Submit Your Request',
    desc: 'Review all details carefully and click on the Withdraw button to complete your request.',
  },
];

const eventPrizes = [
  { rank: '🎆 Grand Prize', prize: 'Mercedes-Benz A-Class Limousine', value: '₹55 Lakh' },
  { rank: '🔝 1st Prize', prize: 'Diamond Jewelry (2 Items)', value: '₹15 Lakh' },
  { rank: '🔝 2nd Prize', prize: 'Gold + Diamond Jewelry', value: '₹5 Lakh' },
  { rank: '🔝 3rd Prize', prize: 'Gold Bar 999.9', value: '₹2 Lakh' },
  { rank: '🔝 4th Prize', prize: 'Gold Necklace 999.9', value: '₹1 Lakh' },
  { rank: '🔝 5th Prize', prize: 'Gold Bracelet 999.9', value: '₹50,000' },
  { rank: '🔝 6th Prize', prize: 'Nothing Phone (256GB)', value: '₹30,000' },
  { rank: '🔝 7th Prize', prize: 'Gold Ring 999.9', value: '₹20,000' },
];

const faqs = [
  {
    q: 'What is YaarWin / 4YaarWin Game?',
    a: 'YaarWin (also known as 4YaarWin, Yaar Win, or Yearwin Game) is a secure online gaming platform where users can play prediction-based and skill games like Wingo, K3, 5D, Slots, and Aviator to earn real rewards.',
  },
  {
    q: 'Is YaarWin available on Google Play Store?',
    a: 'The YaarWin Game app is usually not available on the Google Play Store. Users need to download the APK file directly from the official 4YaarWin website or trusted sources.',
  },
  {
    q: 'How to withdraw money from YaarWin Game?',
    a: 'Go to your YaarWin wallet, select Withdraw, choose Bank Account or UPI ID, enter the amount, and submit. Withdrawals are usually processed within a few hours.',
  },
  {
    q: 'What is the minimum withdrawal amount on YaarWin?',
    a: 'The minimum withdrawal on YaarWin Game starts from around ₹100 (may vary based on platform rules and your account level).',
  },
  {
    q: 'Is YaarWin Game safe to use?',
    a: 'Yes, 4YaarWin Game is SSL secured, RNG certified, and uses industry-grade encryption to protect your data and funds.',
  },
  {
    q: 'What payment methods are available on YaarWin?',
    a: 'YaarWin Game supports UPI, Net Banking, QR Code, E-Wallet, Paytm QR, PhonePe, and USDT-TRC20 for deposits and withdrawals.',
  },
  {
    q: 'What is the Yaar Win Gift Code / YaarWin GiftCode?',
    a: 'A YaarWin gift code is a promo code that unlocks bonus rewards. To redeem, log in to your YaarWin account, go to Gift Code section, enter the code, and click Redeem.',
  },
  {
    q: 'Can I use multiple accounts on YaarWin?',
    a: "No, each user is allowed only one account on YaarWin Game. Using multiple accounts may result in suspension as per the platform's terms and conditions.",
  },
];

const appInfo = [
  { feature: 'App Name', detail: 'YaarWin Game (4YaarWin)' },
  { feature: 'Latest Version', detail: '1.5' },
  { feature: 'Platform Type', detail: 'Color Prediction, Jili, Limbo, and Aviator' },
  { feature: 'App Size', detail: '12MB' },
  { feature: 'Official Website', detail: '4yaarwin.tech' },
  { feature: 'YaarWin Invite Code', detail: '64747166955' },
  { feature: 'Welcome Bonus', detail: 'Up to ₹100' },
];

// ─── FAQ SCHEMA (Google rich results ke liye) ───
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

// ─── HOWTO SCHEMA (Wingo steps ke liye) ───
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Play Wingo on YaarWin Game',
  description: 'Step-by-step guide to play Wingo colour prediction game on 4YaarWin',
  step: wingoSteps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    text: step,
  })),
};

// ─── BREADCRUMB SCHEMA ───
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* ─── PAGE-LEVEL STRUCTURED DATA ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-20"
        aria-label="4YaarWin Game Hero Section"
      >
        {/*
          PERFORMANCE FIX: blur() wali divs TBT badhati hain kyunki
          ye GPU-heavy hain. Inhe CSS classes se replace karo jo
          will-change aur contain use karti hain.
        */}
       <div 
  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-20"
  style={{ 
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }}
  aria-hidden="true"
/>
       <div
  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full pointer-events-none"
  style={{ 
    filter: 'blur(120px)', 
    contain: 'strict', 
    transform: 'translateZ(0)', // Force GPU Acceleration
    backfaceVisibility: 'hidden',
    willChange: 'filter' 
  }}
  aria-hidden="true"
/>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-8 fade-in-up">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-brand-green text-sm font-body font-500 tracking-wide">
              Official 4YaarWin Platform – Trusted by 5 Lakh+ Players
            </span>
          </div>

          {/* H1 – exact target keyword front mein */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 fade-in-up fade-in-up-delay-1">
            4YaarWin Game –{' '}
            <span className="text-brand-green text-glow block">Play &amp; Win Daily</span>
          </h1>

          <p className="text-white/60 font-body text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed fade-in-up fade-in-up-delay-2">
            <strong className="text-white/80">Yaar Win Game</strong> is India&apos;s most trusted
            online gaming platform. Register in seconds, play Wingo, K3, 5D, Slots &amp; Aviator,
            and start earning real rewards today on{' '}
            <strong className="text-brand-green">4YaarWin.tech</strong>.
          </p>

          <p className="text-white/50 font-body text-sm max-w-xl mx-auto mb-10 fade-in-up fade-in-up-delay-2">
            Also known as:{' '}
            <Link href="/" className="text-brand-green/70 hover:text-brand-green">
              YearWin Game
            </Link>{' '}
            •{' '}
            <Link href="/" className="text-brand-green/70 hover:text-brand-green">
              Yarrwin
            </Link>{' '}
            •{' '}
            <Link href="/" className="text-brand-green/70 hover:text-brand-green">
              Yearwin Games
            </Link>{' '}
            •{' '}
            <Link href="/login" className="text-brand-green/70 hover:text-brand-green">
              Yaar Win Login
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up fade-in-up-delay-3">
            <CtaButton label="🎮 Play Now on 4YaarWin" size="lg" variant="primary" />
            <CtaButton label="Register Free – Get ₹100 Bonus" size="lg" variant="outline" />
          </div>

          {/* Stats – numbers directly render karo, koi dynamic load nahi */}
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

        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* ─── APP INFO TABLE ─── */}
      <section className="py-16 px-4" aria-label="YaarWin Game App Information">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
              YaarWin Game <span className="text-brand-green">App Details</span>
            </h2>
            <p className="text-white/50 font-body text-sm">
              Everything you need to know about the 4YaarWin Game APK and platform
            </p>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden border border-brand-border shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-green/10 border-b border-brand-border">
                  <th className="text-left px-6 py-4 text-brand-green font-display font-semibold text-sm">
                    Feature
                  </th>
                  <th className="text-left px-6 py-4 text-brand-green font-display font-semibold text-sm">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {appInfo.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-brand-border/50 ${
                      i % 2 === 0 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <td className="px-6 py-3 text-white/70 font-body text-sm">{row.feature}</td>
                    <td className="px-6 py-3 text-white font-body text-sm font-medium">
                      {row.feature === 'App Name' ? (
                        <>
                          <Link href="/" className="text-brand-green hover:underline">
                            YaarWin Game
                          </Link>{' '}
                          (4YaarWin)
                        </>
                      ) : (
                        row.detail
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <CtaButton label="⬇️ Register & Download YaarWin APK" size="md" />
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── ABOUT PLATFORM ─── */}
      <section className="py-20 px-4" aria-label="What is YaarWin 4YaarWin Game">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                What is{' '}
                <span className="text-brand-green">
                  <Link href="/">4YaarWin</Link> Game?
                </span>
              </h2>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                <Link href="/">
                  <strong className="text-white/80">4YaarWin Game</strong>
                </Link>{' '}
                (also known as{' '}
                <strong className="text-white/80">Yaar Win Game</strong>,{' '}
                <strong className="text-white/80">YearWin Game</strong>, or{' '}
                <strong className="text-white/80">Yarrwin</strong>) is India&apos;s premier online
                gaming destination, designed to give every player a fair, fun, and rewarding
                experience. The platform combines cutting-edge technology with a user-first approach.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                Whether you&apos;re a seasoned gamer or just starting out,{' '}
                <Link href="/">
                  <strong className="text-white/80">YaarWin Game</strong>
                </Link>{' '}
                offers an unmatched variety of games including{' '}
                <strong className="text-white/80">
                  Wingo, K3, 5D, Poker, Slots, Plinko, Limbo, and Aviator
                </strong>
                , with transparent gameplay and lightning-fast payouts.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                With over{' '}
                <strong className="text-brand-green">5 lakh registered players</strong> and{' '}
                <strong className="text-brand-green">₹10 crore+ in winnings paid out</strong>,
                4YaarWin has established itself as the most trusted name in online gaming in India.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-8">
                Use <strong className="text-white/80">Yaar Win Login</strong> to access your account
                instantly, claim daily bonuses, and enjoy seamless{' '}
                <strong className="text-white/80">Year Win</strong> gameplay on any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton label="Register on YaarWin" size="md" />
                <Link href="/about" className="text-brand-green hover:underline font-medium">
  Learn More About 4YaarWin
</Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Trusted & Verified', icon: '✅' },
                { label: 'RNG Certified', icon: '🎲' },
                { label: 'SSL Secured', icon: '🔐' },
                { label: 'Instant KYC', icon: '⚡' },
              ].map((feat) => (
                <div
                  key={feat.label}
                  className="glass-card rounded-2xl p-6 shadow-card border border-brand-border hover:border-brand-green/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-green/20 transition-all">
                    <span className="text-brand-green text-xl" aria-hidden="true">
                      {feat.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{feat.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 px-4" aria-label="How Yaar Win Platform Works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              How <span className="text-brand-green">Yaar Win Platform</span> Works
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto">
              Getting started on <strong className="text-white/70">4YaarWin Game</strong> is simple
              and quick. Follow these steps to begin your YaarWin journey:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-brand-green/40 to-transparent z-0"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-btn-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-sm animate-pulse-glow">
                    <span className="font-display font-bold text-brand-dark text-xl" aria-hidden="true">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 border border-brand-border max-w-3xl mx-auto">
            <h3 className="font-display font-bold text-white text-xl mb-6 text-center">
              Complete <span className="text-brand-green">YaarWin Game</span> Platform Flow
            </h3>
            <ol className="space-y-3">
              {[
                'Create your account using your mobile number on 4YaarWin',
                'Complete verification through OTP confirmation',
                'Add funds to your YaarWin wallet securely via UPI or Net Banking',
                'Choose from popular games like Colour Prediction, WinGo, K3, 5D, Slots, or Aviator',
                'Place your entry before each round begins',
                'Game results are generated automatically by the system',
                'Your YaarWin winnings are credited instantly to your wallet',
                'Withdraw your earnings quickly after completing the required conditions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 font-body text-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── REGISTRATION + LOGIN ─── */}
      <section className="py-20 px-4" aria-label="How to Register on YaarWin">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                How to <span className="text-brand-green">Register on YaarWin</span>
              </h2>
              <p className="text-white/60 font-body text-base leading-relaxed mb-6">
                Getting started on <strong className="text-white/80">Yaar Win Club</strong> is
                simple, fast, and beginner-friendly. Follow these steps to create your{' '}
                <strong className="text-white/80">4YaarWin account</strong>:
              </p>
              <ol className="space-y-4">
                {[
                  'Visit the official Yaar Win registration page using your mobile or desktop browser',
                  'Enter your active mobile number to begin the YaarWin signup process',
                  'Create a strong and secure password for your account',
                  'Complete OTP verification sent to your registered mobile number',
                  'Enter a referral or invite code (optional) to unlock bonus benefits – use code 64747166955',
                  'Finish the registration and start exploring games on Yaar Win',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-btn-gradient rounded-xl flex items-center justify-center text-brand-dark font-bold text-sm shadow-glow-sm">
                      {i + 1}
                    </span>
                    <span className="text-white/70 font-body text-sm leading-relaxed pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <CtaButton label="🚀 Register on YaarWin Now" size="lg" />
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                <span className="text-brand-green">YaarWin Login</span> – Sign In
              </h2>
              <p className="text-white/60 font-body text-base leading-relaxed mb-6">
                <strong className="text-white/80">Year Win login</strong> is quick and
                hassle-free. If you already have an account, follow these simple steps to access
                your <strong className="text-white/80">YaarWin Game</strong> dashboard:
              </p>
              <ol className="space-y-4">
                {[
                  'Open the official YaarWin Game app or visit the trusted 4YaarWin website',
                  'Tap on the Login option available on the homepage',
                  'Enter your registered mobile number and password',
                  'Click on Sign In to access your YaarWin account instantly',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-green/20 border border-brand-green/40 rounded-xl flex items-center justify-center text-brand-green font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-white/70 font-body text-sm leading-relaxed pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-white/50 font-body text-sm mt-4 leading-relaxed">
                After <strong className="text-white/70">Yaar Win login</strong>, you can check
                your wallet balance, explore game categories, and manage your activity in one place.
              </p>
              <div className="mt-8">
                <CtaButton label="🔑 Login to YaarWin" size="md" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── APK DOWNLOAD ─── */}
      <section className="py-20 px-4" aria-label="YaarWin Game APK Download">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Download <span className="text-brand-green">YaarWin Game APK</span>
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto">
              The <strong className="text-white/70">YaarWin Game app</strong> is usually not
              available on the Google Play Store. Download the APK directly from the official{' '}
              <strong className="text-white/70">4YaarWin</strong> website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
              <h3 className="font-display font-bold text-white text-2xl mb-6">
                📲 How to Download <span className="text-brand-green">Yaar Game App</span>
              </h3>
              <ol className="space-y-3">
                {[
                  'Visit the official YaarWin Game website using your mobile browser',
                  'Click on the Download APK button',
                  'The APK file will start downloading automatically',
                  "Open the downloaded file from your device's Downloads folder",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-body text-sm">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
              <h3 className="font-display font-bold text-white text-2xl mb-6">
                ⚙️ How to Install <span className="text-brand-green">YaarWin APK</span>
              </h3>
              <ol className="space-y-3">
                {[
                  'Open the app and log in or register on 4YaarWin',
                  'Go to Settings → Security / Privacy',
                  'Enable Install from Unknown Sources',
                  'Tap on the APK file and click Install',
                  'Wait for the installation to complete and start playing',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-body text-sm">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="text-center mt-10">
            <CtaButton label="⬇️ Download YaarWin APK Now" size="lg" />
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── GAME CATEGORIES ─── */}
      <section className="py-20 px-4" aria-label="Game Categories on YaarWin Game">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Game Categories on <span className="text-brand-green">YaarWin Game</span>
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto">
              <strong className="text-white/70">YaarWin Game</strong> offers a wide range of game
              categories designed to suit every player&apos;s interest. Whether you prefer quick
              prediction-based games or simple entertainment options,{' '}
              <strong className="text-white/70">4YaarWin</strong> has it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((cat) => (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 shadow-card border border-brand-border hover:border-brand-green/30 hover:shadow-glow-sm transition-all group cursor-default"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-brand-green transition-colors">
                  {cat.title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed mb-3">{cat.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.keywords.split(', ').map((kw) => (
                    <span
                      key={kw}
                      className="text-xs bg-brand-green/10 text-brand-green/70 px-2 py-0.5 rounded-full font-body"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── BENEFITS ─── */}
      <section className="py-20 px-4" aria-label="Why Choose 4YaarWin">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Why Choose <span className="text-brand-green">4YaarWin Game?</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto">
              Discover the features that make{' '}
              <strong className="text-white/70">YaarWin</strong> the best online gaming platform
              in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass-card rounded-2xl p-6 shadow-card border border-brand-border hover:border-brand-green/30 hover:shadow-glow-sm transition-all group cursor-default"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {b.icon}
                </div>
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

      {/* ─── WINGO GAME SECTION ─── */}
      <section className="py-20 px-4" aria-label="How to Play Wingo on YaarWin">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              How to Play <span className="text-brand-green">Wingo on YaarWin Game</span>
            </h2>
            <p className="text-white/50 font-body text-sm max-w-xl mx-auto">
              <strong className="text-white/70">Wingo</strong> is one of the most popular colour
              prediction games on <strong className="text-white/70">4YaarWin</strong>. Here is
              how to play it step by step:
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
            <ol className="space-y-4">
              {wingoSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-btn-gradient rounded-xl flex items-center justify-center text-brand-dark font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-white/70 font-body text-sm leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="text-center mt-6">
            <CtaButton label="🎯 Play Wingo on YaarWin" size="md" />
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── DEPOSIT & WITHDRAW ─── */}
      <section
        className="py-20 px-4"
        aria-label="How to Deposit and Withdraw on YaarWin"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Deposit &amp; <span className="text-brand-green">Withdraw on YaarWin</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
              <h3 className="font-display font-bold text-white text-2xl mb-3">
                💰 How to Deposit Money in{' '}
                <span className="text-brand-green">YaarWin Game</span>
              </h3>
              <p className="text-white/60 font-body text-sm mb-6 leading-relaxed">
                Adding funds to your <strong className="text-white/80">YaarWin wallet</strong> is
                quick and convenient. The platform supports UPI, QR Code, E-Wallet, Paytm QR,
                PhonePe, and USDT-TRC20.
              </p>
              <ol className="space-y-3">
                {depositSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-body text-sm">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
              <h3 className="font-display font-bold text-white text-2xl mb-3">
                🏦 How to Withdraw Money from{' '}
                <span className="text-brand-green">YaarWin Game</span>
              </h3>
              <p className="text-white/60 font-body text-sm mb-6 leading-relaxed">
                Withdrawing your balance from{' '}
                <strong className="text-white/80">YaarWin Game</strong> is simple, fast, and
                secure via Bank Account or UPI ID.
              </p>
              <ol className="space-y-4">
                {withdrawSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-white font-body text-sm font-semibold">{step.title}</p>
                      <p className="text-white/50 font-body text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 p-4 bg-brand-green/5 border border-brand-green/20 rounded-xl">
                <p className="text-white/60 font-body text-xs leading-relaxed">
                  <strong className="text-brand-green">Withdrawal Details:</strong> Minimum ₹100
                  • Processing within a few hours • Bank Account &amp; UPI ID supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── REFER & EARN ─── */}
      <section className="py-20 px-4" aria-label="YaarWin Refer and Earn Program">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              YaarWin <span className="text-brand-green">Refer &amp; Earn Program</span>
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto">
              The <strong className="text-white/70">Refer &amp; Earn program</strong> on{' '}
              <strong className="text-white/70">YaarWin Game</strong> is a smart way to increase
              your rewards by inviting others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card">
              <h3 className="font-display font-bold text-white text-xl mb-6">
                How to Use <span className="text-brand-green">YaarWin Referral Program</span>
              </h3>
              <ol className="space-y-4">
                {[
                  'Open the Refer & Earn or Invite Friends section in your YaarWin Game account',
                  'Copy your personal referral link or unique invite code',
                  'Share it with friends, family, or online communities',
                  'Ask them to register using your YaarWin referral link',
                  'Once they join and start playing, your referrals will be tracked automatically',
                  'Earn bonuses and rewards based on their activity on YaarWin Game',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-btn-gradient rounded-xl flex items-center justify-center text-brand-dark font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-white/70 font-body text-sm leading-relaxed pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-brand-green/20 shadow-glow-sm">
              <h3 className="font-display font-bold text-white text-xl mb-2">
                🎆 <span className="text-brand-green">YaarWin Grand Referral Event 2026</span>
              </h3>
              <p className="text-white/50 font-body text-xs mb-6">
                March 1 – April 30, 2026 • Invite More, Win More
              </p>
              <div className="space-y-2">
                {eventPrizes.map((prize) => (
                  <div
                    key={prize.rank}
                    className="flex items-center justify-between p-3 bg-white/[0.03] rounded-xl border border-brand-border/50"
                  >
                    <div>
                      <p className="text-white font-body text-xs font-semibold">{prize.rank}</p>
                      <p className="text-white/50 font-body text-xs">{prize.prize}</p>
                    </div>
                    <span className="text-brand-green font-display font-bold text-sm">
                      {prize.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 font-body text-xs mt-4">
                Terms &amp; Conditions Apply • Permanent commission up to 85%
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── GIFT CODE ─── */}
      <section className="py-16 px-4" aria-label="YaarWin Gift Code Redemption">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-10 border border-brand-border shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  How to Use <span className="text-brand-green">YaarWin Gift Code</span>
                </h2>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                  A <strong className="text-white/80">Yaar Win gift code</strong> (also called{' '}
                  <strong className="text-white/80">YaarWin giftcode</strong> or{' '}
                  <strong className="text-white/80">Year Win gift code</strong>) is a promo code
                  that unlocks bonus rewards, special offers, and extra benefits on the platform.
                </p>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                  Gift codes are periodically shared on the official{' '}
                  <strong className="text-white/80">4YaarWin</strong> social media channels and
                  through special promotions. Keep an eye out for the latest{' '}
                  <strong className="text-white/80">YaarWin gift code 2025</strong> and{' '}
                  <strong className="text-white/80">Yaar Win gift code today</strong> updates.
                </p>
                <CtaButton label="🎁 Get YaarWin Gift Code" size="md" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-lg mb-4">
                  Steps to Redeem{' '}
                  <span className="text-brand-green">YaarWin Gift Code</span>
                </h3>
                <ol className="space-y-3">
                  {[
                    'Log in to your account using your registered mobile number',
                    'Go to the Gift Code or Promo Code section from your dashboard',
                    'Enter a valid YaarWin gift code carefully',
                    'Click on Redeem or Submit',
                    'The reward will be added to your YaarWin wallet instantly',
                  ].map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/70 font-body text-sm"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── RESPONSIBLE GAMING ─── */}
      <section className="py-16 px-4" aria-label="Responsible Gaming on YaarWin">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Responsible Gaming on{' '}
              <span className="text-brand-green">YaarWin Game</span>
            </h2>
            <p className="text-white/50 font-body text-sm max-w-xl mx-auto">
              Playing on <strong className="text-white/70">4YaarWin</strong> should always remain
              safe, controlled, and enjoyable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: '💰',
                title: 'Set a Spending Limit',
                desc: 'Decide a budget in advance and avoid exceeding it under any circumstances on YaarWin Game.',
              },
              {
                icon: '⏰',
                title: 'Control Your Playing Time',
                desc: 'Do not spend long continuous hours on the platform. Take regular breaks to stay balanced.',
              },
              {
                icon: '🎯',
                title: 'Focus on Entertainment',
                desc: 'Use YaarWin Game for fun and engagement rather than treating it as a guaranteed source of income.',
              },
              {
                icon: '🧠',
                title: 'Stay Mentally Aware',
                desc: 'If you feel pressure or stress while playing on 4YaarWin, it is best to stop immediately.',
              },
              {
                icon: '🔐',
                title: 'Protect Your Account',
                desc: 'Keep your YaarWin login credentials private and do not share them with anyone.',
              },
              {
                icon: '🔞',
                title: 'Age Restriction',
                desc: 'YaarWin Game is strictly intended for users who are 18 years or older.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-5 border border-brand-border flex items-start gap-4"
              >
                <span className="text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/responsible-gaming"
              className="text-brand-green/70 hover:text-brand-green font-body text-sm transition-colors"
            >
              Read Full Responsible Gaming Policy →
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ─── FAQ – with FAQPage schema already injected above ─── */}
      <section
        className="py-20 px-4"
        aria-label="Frequently Asked Questions about YaarWin"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Frequently Asked{' '}
              <span className="text-brand-green">Questions (FAQ)</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto">
              Common questions about <strong className="text-white/70">4YaarWin Game</strong>,{' '}
              <strong className="text-white/70">Yaar Win login</strong>, withdrawal, and gameplay.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 border border-brand-border shadow-card hover:border-brand-green/30 transition-all"
              >
                {/* h3 for FAQs – correct heading hierarchy */}
                <h3 className="font-display font-bold text-white text-base mb-2">{faq.q}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BIG CTA SECTION ─── */}
      <section className="py-20 px-4" aria-label="Join 4YaarWin Today">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center shadow-glow-md border border-brand-green/20 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-green-glow pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Join <span className="text-brand-green text-glow">4YaarWin Game</span> Today
                –
                <br />
                Your First Win Awaits!
              </h2>
              <p className="text-white/60 font-body text-lg mb-4 max-w-xl mx-auto">
                Don&apos;t miss out on daily bonuses, mega tournaments, and instant payouts on{' '}
                <strong className="text-white/80">YaarWin Game</strong>. Register now on the
                official <strong className="text-brand-green">4YaarWin</strong> platform.
              </p>
              <p className="text-white/50 font-body text-sm mb-8">
                Play{' '}
                <strong className="text-white/70">Wingo, K3, 5D, Slots, Aviator</strong> &amp;
                more on <strong className="text-white/70">Yaar Win Game</strong>. Trusted by 5
                Lakh+ players across India.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CtaButton label="🚀 Register on 4YaarWin – Free" size="lg" />
                <CtaButton label="Login to YaarWin Account" size="lg" variant="outline" />
              </div>
              <p className="text-white/30 text-xs font-body mt-6">
                By registering, you agree to our{' '}
                <Link
                  href="/terms"
                  className="text-brand-green/60 hover:text-brand-green transition-colors"
                >
                  Terms &amp; Conditions
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy-policy"
                  className="text-brand-green/60 hover:text-brand-green transition-colors"
                >
                  Privacy Policy
                </Link>
                . 18+ Only. Play Responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEO FOOTER TEXT ─── */}
      <section
        className="py-12 px-4 border-t border-brand-border/30"
        aria-label="About 4YaarWin Platform"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="font-display font-bold text-2xl text-white mb-4">
              About <span className="text-brand-green">4YaarWin Game Platform</span>
            </h2>
            <p className="text-white/40 font-body text-sm leading-relaxed mb-4">
              <strong className="text-white/60">4YaarWin Game</strong> (also known as{' '}
              <strong className="text-white/60">YaarWin</strong>,{' '}
              <strong className="text-white/60">Yaar Win</strong>,{' '}
              <strong className="text-white/60">YearWin Game</strong>,{' '}
              <strong className="text-white/60">Yarrwin</strong>, and{' '}
              <strong className="text-white/60">Yearwin Games</strong>) offers a smooth and
              user-friendly online gaming experience with a wide range of popular games including{' '}
              <strong className="text-white/60">
                Wingo, K3, 5D, Slots, Plinko, Limbo, and Aviator
              </strong>
              . From quick <strong className="text-white/60">Yaar Win registration</strong> and
              easy <strong className="text-white/60">Year Win login</strong> to fast deposits and
              secure withdrawals, the platform is designed to keep everything simple and efficient.
            </p>
            <p className="text-white/30 font-body text-xs leading-relaxed">
              Always remember to play responsibly, manage your budget wisely, and enjoy the{' '}
              <strong className="text-white/50">YaarWin Game</strong> platform for entertainment
              purposes. The <strong className="text-white/50">YaarWin giftcode</strong> and{' '}
              <strong className="text-white/50">Yaar Win gift code</strong> features let you
              unlock bonus rewards. Use our{' '}
              <strong className="text-white/50">Yaar Win cricket</strong> and other game sections
              for maximum fun. 18+ only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}