import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaButton from '@/components/ui/CtaButton';
import Link from 'next/link';

const REGISTER_URL = 'https://4yaarwin.tech/#/register?invitationCode=64747166955';

export const metadata = {
  title: '4YaarWin Register – Create Your Free Gaming Account',
  description:
    'Register on 4YaarWin and start playing instantly. Create your free account today and claim your welcome bonus. Quick signup with phone or email.',
  alternates: { canonical: 'https://www.4yaarwin.tech/register/' },
};

const perks = [
  { icon: '🎁', title: 'Welcome Bonus', desc: 'Get exclusive bonus rewards on your first deposit.' },
  { icon: '🏆', title: 'Tournament Access', desc: 'Unlock access to daily and weekly tournaments.' },
  { icon: '💰', title: 'Real Winnings', desc: 'Win real money and withdraw instantly.' },
  { icon: '🔐', title: '100% Secure', desc: 'Your account is protected with top security.' },
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/register', label: 'Register' }]} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Register Card */}
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-card border border-brand-border order-2 md:order-1">
            {/* Header styled like YaarWin UI */}
            <div className="bg-brand-green rounded-2xl -mx-4 -mt-4 px-6 py-6 mb-8">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-brand-dark text-2xl">4YaarWin✦</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm">🌐</span>
                  <span className="text-brand-dark text-xs font-body">EN</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-brand-dark text-xl mt-2">Register</h2>
              <p className="text-brand-dark/70 font-body text-sm">
                Please register by phone number or email
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📱</span>
              </div>
              <p className="text-brand-green font-display font-semibold">Register your phone</p>
            </div>

            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4 rounded-xl text-base text-center block mb-4 shadow-glow-md"
            >
              📱 Register with Phone Number
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full py-4 rounded-xl text-base text-center block mb-6"
            >
              ✉️ Register with Email
            </a>

            <div className="section-divider mb-6" />

            <p className="text-white/40 text-sm font-body text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-brand-green hover:underline font-500">
                Login Here
              </Link>
            </p>

            <p className="text-white/25 text-xs font-body text-center mt-4">
              By registering, you confirm you are 18+ and agree to our{' '}
              <Link href="/terms" className="text-brand-green/50 hover:text-brand-green">Terms</Link>{' '}and{' '}
              <Link href="/privacy-policy" className="text-brand-green/50 hover:text-brand-green">Privacy Policy</Link>.
            </p>
          </div>

          {/* Right: Info */}
          <div className="order-1 md:order-2">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Register on <span className="text-brand-green">4YaarWin</span>
            </h1>
            <p className="text-white/60 font-body text-base leading-relaxed mb-6">
              Join over 5 lakh players who have already discovered the excitement of 4YaarWin.
              Registration is completely free and takes less than 2 minutes. All you need is
              your phone number or email address to get started.
            </p>
            <p className="text-white/60 font-body text-base leading-relaxed mb-8">
              Once registered, unlock access to 100+ premium games, daily bonuses, massive
              tournament prizes, and instant withdrawal facilities – all on one secure platform.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {perks.map((perk) => (
                <div key={perk.title} className="glass-card rounded-2xl p-4 border border-brand-border">
                  <span className="text-2xl mb-2 block">{perk.icon}</span>
                  <h3 className="font-display font-bold text-white text-sm mb-1">{perk.title}</h3>
                  <p className="text-white/40 font-body text-xs leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to register steps */}
        <div className="mt-20">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">
            How to <span className="text-brand-green">Register</span> on 4YaarWin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Click Register', desc: 'Hit the Register button above to open the 4YaarWin registration page.' },
              { step: '2', title: 'Fill Your Details', desc: 'Enter your phone number or email, set a strong password.' },
              { step: '3', title: 'Start Playing', desc: 'Verify your account and start playing your favorite games!' },
            ].map((s) => (
              <div key={s.step} className="glass-card rounded-2xl p-6 border border-brand-border text-center">
                <div className="w-12 h-12 bg-btn-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow-sm">
                  <span className="font-display font-bold text-brand-dark text-lg">{s.step}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
