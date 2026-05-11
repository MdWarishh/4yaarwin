import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: '4YaarWin Disclaimer – Important Notice for Players',
  description: 'Read the 4YaarWin Disclaimer. Important information about risk, responsible gaming, and the nature of online gaming on our platform.',
  alternates: { canonical: 'https://www.4yaarwin.com/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/disclaimer', label: 'Disclaimer' }]} />

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
          <span className="text-brand-green">Disclaimer</span>
        </h1>
        <p className="text-white/40 font-body text-sm mb-10">Last updated: January 2025</p>

        {/* Important notice */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h2 className="font-display font-bold text-amber-400 text-lg mb-2">Important Notice</h2>
              <p className="text-amber-200/70 font-body text-sm leading-relaxed">
                Online gaming involves financial risk. Please read this disclaimer carefully before
                participating. 4YaarWin is strictly for adults aged 18 and above.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              title: 'General Disclaimer',
              content: `The information provided on the 4YaarWin website is for general informational purposes only. While we strive to keep all information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the platform or the information contained therein.`,
            },
            {
              title: 'Financial Risk Warning',
              content: `Online gaming involves real money and carries inherent financial risk. You may lose some or all of the money you deposit. Never gamble with money you cannot afford to lose. Past winnings do not guarantee future results. The outcomes of games on 4YaarWin are determined by certified random number generators and are not influenced by previous results.`,
            },
            {
              title: 'Age Restriction',
              content: `4YaarWin is strictly for users who are 18 years of age or older. If you are under 18, you are not permitted to use this platform under any circumstances. We implement strict age verification measures. If you suspect a minor is using our platform, please report it to our support team immediately.`,
            },
            {
              title: 'Responsible Gaming',
              content: `4YaarWin strongly promotes responsible gaming. Gaming should be a form of entertainment, not a means of income. If you find yourself spending more than you can afford, chasing losses, or gaming interfering with your daily life, please seek help. We provide self-exclusion and deposit limit tools. You can also contact responsible gaming organizations for professional support.`,
            },
            {
              title: 'Jurisdictional Disclaimer',
              content: `Online gaming may be illegal or restricted in your jurisdiction. It is your sole responsibility to determine whether you are permitted to use online gaming services based on the laws applicable in your location. 4YaarWin accepts no liability for any use of the platform in jurisdictions where online gaming is prohibited or restricted.`,
            },
            {
              title: 'Third-Party Links',
              content: `Our platform may contain links to third-party websites. These links are provided for convenience only. 4YaarWin has no control over the content, privacy policies, or practices of any third-party sites and accepts no responsibility for their content or services.`,
            },
            {
              title: 'Technical Issues',
              content: `4YaarWin is not liable for any losses incurred due to technical issues, server downtime, software errors, or internet connectivity problems beyond our reasonable control. In the event of a technical failure during a game, we will investigate and resolve the situation fairly based on available data.`,
            },
            {
              title: 'No Guarantee of Winnings',
              content: `4YaarWin makes no guarantees of any specific winnings, profits, or outcomes from using our platform. All games are games of chance with variable outcomes. Testimonials and win screenshots shown in promotional materials represent exceptional cases and are not indicative of typical results.`,
            },
          ].map((section) => (
            <div key={section.title} className="glass-card rounded-2xl p-6 border border-brand-border">
              <h2 className="font-display font-bold text-xl text-white mb-3">{section.title}</h2>
              <p className="text-white/55 font-body text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 border border-brand-green/20 mt-8 shadow-glow-sm">
          <h2 className="font-display font-bold text-lg text-white mb-2">Need Help?</h2>
          <p className="text-white/50 font-body text-sm">
            If you have concerns about your gaming habits, contact our responsible gaming team at{' '}
            <span className="text-brand-green">support@4yaarwin.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
