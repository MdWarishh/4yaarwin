import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaButton from '@/components/ui/CtaButton';
import Link from 'next/link';

export const metadata = {
  title: 'Responsible Gaming on 4YaarWin – Yaar Win Safe Play Guidelines',
  description:
    'Responsible gaming guidelines for 4YaarWin Game (YaarWin, Yaar Win, YearWin Game). Learn how to play safely, set limits, manage budget, and use the Yaar Win platform responsibly. 18+ only.',
  keywords:
    'responsible gaming yaarwin, 4yaarwin safe play, yaar win game guidelines, yearwin game responsible, yaarwin game 18+, safe gaming yaarwin, yaar win limits, yaarwin game disclaimer',
  alternates: { canonical: 'https://www.4yaarwin.tech/responsible-gaming/' },
  openGraph: {
    title: 'Responsible Gaming – 4YaarWin Game | Yaar Win Safe Play Guide',
    description: 'Play safely on 4YaarWin Game. Read responsible gaming guidelines, safe gaming tips, signs to take a break, and important disclaimers for YaarWin users.',
    url: 'https://www.4yaarwin.tech/responsible-gaming/',
    siteName: '4YaarWin',
    type: 'website',
  },
};

const guidelines = [
  {
    num: '01',
    icon: '💰',
    title: 'Set a Budget Before Playing',
    desc: 'Always decide your spending limit before you start playing on <strong>YaarWin Game</strong>. Do not exceed your budget under any condition. Use the deposit limits available on your <strong>4YaarWin</strong> account to stay within your planned amount.',
    tip: 'Decide your daily or weekly limit before opening the YaarWin app.',
  },
  {
    num: '02',
    icon: '⏰',
    title: 'Manage Your Playing Time',
    desc: 'Avoid spending long hours continuously on <strong>YaarWin</strong> Game. Take regular breaks and keep gaming balanced with your daily routine. Do not let <strong>4YaarWin</strong> gameplay interfere with your work, studies, or personal life.',
    tip: 'Set a timer when you start playing on Yaar Win to track your session duration.',
  },
  {
    num: '03',
    icon: '🎯',
    title: 'Play for Entertainment Only',
    desc: 'Use <strong>YaarWin Game</strong> for fun and entertainment. Do not treat it as a fixed income source or guaranteed earning method. Games like Wingo, K3, 5D, and Aviator on <strong>4YaarWin</strong> involve an element of chance.',
    tip: 'Think of every session on Yaar Win as entertainment, not income.',
  },
  {
    num: '04',
    icon: '🚫',
    title: 'Do Not Chase Losses',
    desc: 'Never increase your playing amount just to recover previous losses on <strong>YaarWin</strong>. Chasing losses can significantly increase your financial risk. Accept results calmly and stick to your pre-decided budget on <strong>4YaarWin Game</strong>.',
    tip: 'If you hit your loss limit on YaarWin, stop for the day — no exceptions.',
  },
  {
    num: '05',
    icon: '🧠',
    title: 'Stay Emotionally Balanced',
    desc: 'Avoid playing on <strong>YaarWin Game</strong> when you are angry, stressed, tired, or emotionally disturbed. A calm mindset helps you make better decisions. If you feel frustrated during a <strong>Yaar Win</strong> session, log out immediately.',
    tip: 'Never play Wingo or K3 on YaarWin when you are emotionally upset.',
  },
  {
    num: '06',
    icon: '🔐',
    title: 'Keep Your YaarWin Account Secure',
    desc: 'Do not share your mobile number, password, OTP, or account details with anyone. Always keep your <strong>Yaar Win login</strong> information private. If you suspect unauthorized access, change your <strong>YaarWin Game</strong> password immediately.',
    tip: 'Use a strong, unique password for your 4YaarWin login and never share it.',
  },
  {
    num: '07',
    icon: '🔞',
    title: 'Follow Age Restrictions',
    desc: '<strong>YaarWin Game</strong> is strictly intended for users aged 18 years or above. Underage users should not register, participate, or place bets on <strong>4YaarWin</strong>. Parents and guardians are advised to monitor online gaming activity.',
    tip: '4YaarWin Game is for adults only — 18+ strictly enforced.',
  },
];

const breakSigns = [
  'You are spending more than your planned budget on YaarWin Game',
  'You are playing Wingo, K3, or other 4YaarWin games for too many hours',
  'You feel stress, pressure, or frustration during your Yaar Win session',
  'You are trying to recover losses quickly by increasing your bets on YaarWin',
  'Gaming on 4YaarWin is affecting your studies, work, or personal relationships',
  'You feel anxious or restless when not playing on the YaarWin platform',
  'You are borrowing money to fund your YaarWin Game account',
];

const safeTips = [
  { icon: '🪙', tip: 'Start with a small amount on 4YaarWin and gradually increase only when comfortable.' },
  { icon: '📅', tip: 'Set daily or weekly deposit limits on your YaarWin Game account.' },
  { icon: '🚫', tip: 'Never borrow money to play on Yaar Win Game under any circumstances.' },
  { icon: '👤', tip: 'Do not share your YaarWin account, login, or OTP with any other person.' },
  { icon: '⏱️', tip: 'Avoid playing Wingo or Aviator on 4YaarWin continuously for long sessions.' },
  { icon: '🛑', tip: 'Stop immediately if gaming on YaarWin feels stressful or out of control.' },
  { icon: '💳', tip: 'Only deposit funds into your YaarWin wallet that you can afford to lose entirely.' },
  { icon: '📵', tip: 'Log out of the YaarWin app when not playing to avoid impulsive sessions.' },
];

const quickLinks = [
  { href: '/', label: '4YaarWin Home', desc: 'Play Wingo, K3, 5D, Slots & Aviator' },
  { href: '/about', label: 'About 4YaarWin', desc: 'Learn about the YaarWin platform' },
  { href: '/yaarwin-login', label: 'Yaar Win Login', desc: 'Access your YaarWin Game account' },
  { href: '/download', label: 'YaarWin APK Download', desc: 'Download the latest YaarWin app' },
  { href: '/terms', label: 'Terms & Conditions', desc: '4YaarWin platform terms of use' },
  { href: '/privacy-policy', label: 'Privacy Policy', desc: 'How YaarWin protects your data' },
];

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { href: '/', label: 'Home' },
            { href: '/responsible-gaming', label: 'Responsible Gaming' },
          ]}
        />

        {/* ─── HERO ─── */}
        <div className="text-center mb-16" aria-label="Responsible Gaming on 4YaarWin">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green text-sm font-body tracking-wide">4YaarWin – Play Safe, Play Smart</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Responsible Gaming on{' '}
            <span className="text-brand-green text-glow block">4YaarWin Game</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Playing on <strong className="text-white/80">YaarWin Game</strong> should always be safe, controlled, and enjoyable. Online gaming can be entertaining, but it is important to play with responsibility, manage your time, and never take unnecessary financial risks on <strong className="text-white/80">4YaarWin</strong>.
          </p>
          <p className="text-white/50 font-body text-sm max-w-2xl mx-auto">
            At <strong className="text-white/70">Yaar Win Game</strong>, users should treat gaming as a form of entertainment — not as a guaranteed source of income. This page provides complete <strong className="text-white/70">responsible gaming guidelines</strong> for all <strong className="text-white/70">YaarWin</strong> users.
          </p>
        </div>

        {/* ─── WHAT IS RESPONSIBLE GAMING ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="What is Responsible Gaming on YaarWin">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-6">
                What is <span className="text-brand-green">Responsible Gaming?</span>
              </h2>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                Responsible gaming means playing in a safe and balanced way on platforms like <strong className="text-white/80">YaarWin Game</strong>. It includes setting limits, understanding risk, avoiding emotional decisions, and knowing when to stop.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed mb-4">
                Every <strong className="text-white/80">4YaarWin</strong> user should play with a clear mind and only use money they can afford to lose. Games like <strong className="text-white/80">Wingo, K3, 5D, Slots, and Aviator</strong> on the <strong className="text-white/80">YaarWin</strong> platform involve an element of chance along with skill.
              </p>
              <p className="text-white/60 font-body text-base leading-relaxed">
                Responsible gaming is not just a rule on <strong className="text-white/80">4YaarWin</strong> — it is a mindset that keeps your gaming experience positive, stress-free, and truly enjoyable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🧠', label: 'Clear Mindset' },
                { icon: '💰', label: 'Budget Control' },
                { icon: '⏰', label: 'Time Management' },
                { icon: '🛑', label: 'Know When to Stop' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-5 border border-brand-border text-center hover:border-brand-green/30 transition-all">
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <span className="text-white font-body text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── GUIDELINES ─── */}
        <div className="mb-16" aria-label="Responsible Gaming Guidelines for YaarWin">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Responsible Gaming <span className="text-brand-green">Guidelines</span>
            </h2>
            <p className="text-white/50 font-body max-w-2xl mx-auto text-sm">
              Follow these <strong className="text-white/70">7 responsible gaming guidelines</strong> every time you play on <strong className="text-white/70">YaarWin Game</strong> to ensure a safe and enjoyable experience.
            </p>
          </div>

          <div className="space-y-6">
            {guidelines.map((g, i) => (
              <div
                key={g.num}
                className="glass-card rounded-2xl p-6 md:p-8 border border-brand-border hover:border-brand-green/30 transition-all shadow-card"
                aria-label={`Guideline ${g.num}: ${g.title}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-btn-gradient rounded-2xl flex items-center justify-center shadow-glow-sm">
                    <span className="font-display font-bold text-brand-dark text-base">{g.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{g.icon}</span>
                      <h3 className="font-display font-bold text-white text-xl">{g.title}</h3>
                    </div>
                    <p
                      className="text-white/60 font-body text-sm leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{ __html: g.desc }}
                    />
                    <div className="inline-flex items-center gap-2 bg-brand-green/8 border border-brand-green/20 rounded-full px-4 py-1.5">
                      <span className="text-brand-green text-xs">💡</span>
                      <span className="text-brand-green text-xs font-body">{g.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SIGNS TO TAKE A BREAK ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="Signs You Should Take a Break from YaarWin">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Signs You Should <span className="text-brand-green">Take a Break</span>
          </h2>
          <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
            You should stop playing on <strong className="text-white/80">4YaarWin</strong> or take a break if you notice any of the following signs. Recognizing these early can protect your finances and mental wellbeing.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {breakSigns.map((sign, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs font-bold mt-0.5">!</span>
                <p className="text-white/60 font-body text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-brand-green/5 border border-brand-green/20 rounded-2xl">
            <p className="text-white/60 font-body text-sm leading-relaxed">
              <strong className="text-brand-green">Remember:</strong> It is always okay to step away from <strong className="text-white/80">YaarWin Game</strong>. Your mental and financial health is more important than any game result. The <strong className="text-white/80">4YaarWin</strong> platform is here for entertainment — not stress.
            </p>
          </div>
        </div>

        {/* ─── SAFE GAMING TIPS ─── */}
        <div className="mb-16" aria-label="Safe Gaming Tips for YaarWin Users">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Safe Gaming Tips for <span className="text-brand-green">YaarWin Users</span>
            </h2>
            <p className="text-white/50 font-body max-w-xl mx-auto text-sm">
              Follow these practical tips to keep your <strong className="text-white/70">4YaarWin Game</strong> experience safe, fun, and in control.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {safeTips.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-brand-border hover:border-brand-green/30 transition-all group shadow-card text-center">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-white/60 font-body text-xs leading-relaxed group-hover:text-white/80 transition-colors">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── DISCLAIMER ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-green/20 shadow-glow-sm mb-12" aria-label="Important Disclaimer 4YaarWin Game">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            ⚠️ Important <span className="text-brand-green">Disclaimer</span>
          </h2>
          <div className="space-y-4 text-white/60 font-body text-sm leading-relaxed">
            <p>
              <strong className="text-white/80">YaarWin Game</strong> (also known as <strong className="text-white/80">4YaarWin</strong>, <strong className="text-white/80">Yaar Win</strong>, <strong className="text-white/80">YearWin Game</strong>, and <strong className="text-white/80">Yarrwin</strong>) involves an element of skill and chance. Participation carries financial risk. Users must be <strong className="text-brand-green">18 years or older</strong> to register and play on the <strong className="text-white/80">4YaarWin</strong> platform.
            </p>
            <p>
              Excessive gaming can be harmful to your financial and mental health. Always set your limits, play within your budget, and remember that no game on <strong className="text-white/80">YaarWin</strong> — including <strong className="text-white/80">Wingo, K3, 5D, Aviator, or Slots</strong> — guarantees a return on investment.
            </p>
            <p>
              This page serves as an informational responsible gaming guide. <strong className="text-white/80">4YaarWin</strong> strongly encourages all users to play responsibly, use available account tools to set limits, and seek help if gaming becomes a problem.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: '🔞', label: '18+ Only', desc: 'Strictly enforced on 4YaarWin' },
                { icon: '⚠️', label: 'Financial Risk', desc: 'Participation carries risk on YaarWin' },
                { icon: '🎭', label: 'Entertainment Only', desc: 'Not a guaranteed income source' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-white/[0.03] border border-brand-border/50 rounded-xl">
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="text-white font-display font-bold text-sm">{item.label}</p>
                  <p className="text-white/40 font-body text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── FINAL WORDS ─── */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12" aria-label="Final Words on Responsible Gaming YaarWin">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            Final <span className="text-brand-green">Words</span>
          </h2>
          <div className="space-y-4 text-white/60 font-body text-base leading-relaxed">
            <p>
              Responsible gaming is about staying in control. <strong className="text-white/80">YaarWin Game</strong> should be used for entertainment only, with proper limits and full awareness. Play smart, protect your <strong className="text-white/80">Yaar Win</strong> account, manage your budget, and always remember that your safety comes first.
            </p>
            <p>
              Whether you're playing <strong className="text-white/80">Wingo colour prediction</strong>, <strong className="text-white/80">K3</strong>, <strong className="text-white/80">5D</strong>, or <strong className="text-white/80">Aviator</strong> on <strong className="text-white/80">4YaarWin</strong>, the goal is to have fun — not to put your finances or wellbeing at risk. Every session should end with you feeling good, not stressed.
            </p>
            <p>
              If you ever feel that your <strong className="text-white/80">YaarWin Game</strong> usage is becoming uncontrolled, take a break, talk to someone you trust, and use the responsible gaming tools available in your <strong className="text-white/80">4YaarWin account</strong>. Your wellbeing matters more than any game result.
            </p>
          </div>
        </div>

        {/* ─── QUICK LINKS ─── */}
        <div className="glass-card rounded-2xl p-8 border border-brand-border shadow-card mb-12" aria-label="Quick Links to 4YaarWin Pages">
          <h2 className="font-display font-bold text-2xl text-white mb-6">
            Quick Links – <span className="text-brand-green">4YaarWin</span> Platform
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
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
              Play Responsibly on <span className="text-brand-green text-glow">4YaarWin Game</span>
            </h2>
            <p className="text-white/50 font-body mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Ready to enjoy <strong className="text-white/70">Wingo, K3, 5D, Slots & Aviator</strong> on <strong className="text-white/70">YaarWin</strong>? Register now and play responsibly with the guidelines above. Use invite code <strong className="text-brand-green">64747166955</strong> to get a welcome bonus of up to ₹100.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaButton label="🚀 Register on 4YaarWin – Free" size="lg" />
              <CtaButton label="🔑 Yaar Win Login" size="lg" variant="outline" />
            </div>
            <p className="text-white/25 text-xs font-body mt-6">
              18+ Only. Play Responsibly.{' '}
              <Link href="/terms" className="text-brand-green/50 hover:text-brand-green transition-colors">Terms & Conditions</Link>
              {' '}•{' '}
              <Link href="/privacy-policy" className="text-brand-green/50 hover:text-brand-green transition-colors">Privacy Policy</Link>
              {' '}•{' '}
              <Link href="/about" className="text-brand-green/50 hover:text-brand-green transition-colors">About 4YaarWin</Link>
            </p>
          </div>
        </div>

        {/* ─── SEO TEXT BLOCK ─── */}
        <div className="mt-12 p-6 rounded-2xl border border-brand-border/30" aria-label="Responsible Gaming SEO Content">
          <h2 className="font-display font-bold text-xl text-white mb-3">
            Responsible Gaming on <span className="text-brand-green">YaarWin</span> – Complete Guide
          </h2>
          <p className="text-white/30 font-body text-xs leading-relaxed">
            <strong className="text-white/45">4YaarWin Game</strong> (also known as <strong className="text-white/45">YaarWin</strong>, <strong className="text-white/45">Yaar Win</strong>, <strong className="text-white/45">YearWin Game</strong>, <strong className="text-white/45">Yarrwin</strong>, and <strong className="text-white/45">Yearwin Games</strong>) encourages all users to follow responsible gaming practices. This includes setting a budget before playing Wingo, K3, or 5D on <strong className="text-white/45">YaarWin</strong>, managing your playing time, not chasing losses, and keeping your <strong className="text-white/45">Yaar Win login</strong> credentials secure. The <strong className="text-white/45">YaarWin Game</strong> platform is strictly for users aged 18 and above. For <strong className="text-white/45">Year Win login</strong>, <strong className="text-white/45">YaarWin APK download</strong>, or <strong className="text-white/45">Yaar Win gift code</strong> redemption guides, visit our homepage at <strong className="text-white/45">4yaarwin.tech</strong>. Use invite code <strong className="text-white/45">64747166955</strong> when registering on the <strong className="text-white/45">4YaarWin</strong> platform for a welcome bonus.
          </p>
        </div>
      </div>
    </div>
  );
}