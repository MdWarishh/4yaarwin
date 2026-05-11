import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaButton from '@/components/ui/CtaButton';

export const metadata = {
  title: 'About 4YaarWin – India\'s Trusted Online Gaming Platform',
  description:
    'Learn about 4YaarWin – who we are, our mission, values, and why we are India\'s most trusted online gaming platform with 5 lakh+ players.',
  alternates: { canonical: 'https://www.4yaarwin.tech/about/' },
};

const values = [
  { icon: '🎯', title: 'Fair Play', desc: 'All games use certified RNG technology ensuring 100% fair and unbiased results.' },
  { icon: '🤝', title: 'Trust First', desc: 'Transparent operations, honest payouts, and a platform built on player trust.' },
  { icon: '🛡️', title: 'Player Safety', desc: 'Advanced encryption and responsible gaming tools protect every player.' },
  { icon: '💡', title: 'Innovation', desc: 'We continuously improve our platform to deliver the best gaming experience.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            About <span className="text-brand-green text-glow">4YaarWin</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-3xl mx-auto leading-relaxed">
            4YaarWin is India's premier online gaming platform, built with a singular mission:
            to deliver a safe, fair, and exhilarating gaming experience to every player.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-brand-border shadow-card mb-12">
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            Our <span className="text-brand-green">Story</span>
          </h2>
          <div className="space-y-4 text-white/60 font-body text-base leading-relaxed">
            <p>
              4YaarWin was founded with a vision to transform the online gaming landscape in India.
              We recognized that players deserved more – more transparency, more security, more
              exciting games, and faster payouts. So we built a platform that delivers on all fronts.
            </p>
            <p>
              The name "4YaarWin" embodies our philosophy: gaming is better with friends (yaars),
              and we want every player to win. We created a community-first platform where players
              can compete, connect, and celebrate their wins together.
            </p>
            <p>
              Since our launch, 4YaarWin has grown to become one of the most trusted gaming
              destinations in India, with over 5 lakh registered players and ₹10 crore+ in
              winnings paid out to our community.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-10">
            Our <span className="text-brand-green">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6 border border-brand-border text-center hover:border-brand-green/30 transition-all">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="glass-card rounded-3xl p-8 border border-brand-green/20 shadow-glow-sm mb-12">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">
            4YaarWin by <span className="text-brand-green">the Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '5L+', label: 'Players' },
              { val: '₹10Cr+', label: 'Winnings Paid' },
              { val: '100+', label: 'Games' },
              { val: '99.9%', label: 'Uptime' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-brand-green text-glow mb-2">{s.val}</div>
                <div className="text-white/50 font-body text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Ready to Join the <span className="text-brand-green">4YaarWin Family?</span>
          </h2>
          <p className="text-white/50 font-body mb-8 max-w-xl mx-auto">
            Experience India's most trusted gaming platform. Register now and start your winning journey.
          </p>
          <CtaButton label="Register Now – Free" size="lg" />
        </div>
      </div>
    </div>
  );
}
