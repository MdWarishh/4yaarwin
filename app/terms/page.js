import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: '4YaarWin Terms & Conditions – Rules of Use',
  description: 'Read the 4YaarWin Terms & Conditions. Understand the rules, responsibilities, and guidelines for using our online gaming platform.',
  alternates: { canonical: 'https://www.4yaarwin.tech/terms/' },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the 4YaarWin platform, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you must not use our platform. We reserve the right to modify these terms at any time, and continued use of the platform constitutes acceptance of any changes.`,
  },
  {
    title: '2. Eligibility',
    content: `You must be at least 18 years of age to use 4YaarWin. By registering, you confirm that you are of legal age in your jurisdiction to participate in online gaming activities. 4YaarWin reserves the right to request proof of age and to suspend accounts that cannot be verified. The platform is not available in jurisdictions where online gaming is prohibited by law.`,
  },
  {
    title: '3. Account Registration',
    content: `Each user may create only one account on 4YaarWin. Creating multiple accounts is strictly prohibited and may result in permanent suspension. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.`,
  },
  {
    title: '4. Deposits and Withdrawals',
    content: `All financial transactions on 4YaarWin are processed through secure payment gateways. Minimum deposit and withdrawal amounts may apply. Withdrawals will only be processed to verified payment methods associated with your account. 4YaarWin reserves the right to conduct additional verification checks before processing withdrawals.`,
  },
  {
    title: '5. Bonuses and Promotions',
    content: `Bonuses and promotions are subject to specific wagering requirements and terms. Abusing promotional offers or attempting to manipulate bonus systems is strictly prohibited. 4YaarWin reserves the right to withdraw bonuses and void winnings if promotional abuse is detected. Each promotion has its own specific terms that apply in addition to these general terms.`,
  },
  {
    title: '6. Responsible Gaming',
    content: `4YaarWin is committed to responsible gaming. We provide tools including deposit limits, loss limits, session time limits, and self-exclusion options. If you feel you have a gambling problem, please use our self-exclusion tools or contact our support team. We also recommend seeking professional help from responsible gaming organizations.`,
  },
  {
    title: '7. Prohibited Activities',
    content: `Users are prohibited from: using bots or automated software, colluding with other players, exploiting software bugs, engaging in fraudulent activities, using stolen payment methods, creating accounts for others, or engaging in any form of cheating. Violation of these rules will result in immediate account suspension and forfeiture of funds.`,
  },
  {
    title: '8. Intellectual Property',
    content: `All content on the 4YaarWin platform, including games, graphics, logos, and text, is the property of 4YaarWin or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute any content from our platform without explicit written permission.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `4YaarWin shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the amount deposited in your account in the preceding 12 months. We are not responsible for technical issues caused by factors beyond our control, including internet outages.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions are governed by applicable laws. Any disputes shall be resolved through arbitration before resorting to legal action. By using 4YaarWin, you agree to the jurisdiction specified in our platform's legal documentation.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/terms', label: 'Terms & Conditions' }]} />

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
          Terms & <span className="text-brand-green">Conditions</span>
        </h1>
        <p className="text-white/40 font-body text-sm mb-10">Last updated: January 2025</p>

        <div className="glass-card rounded-3xl p-8 border border-brand-border shadow-card mb-8">
          <p className="text-white/60 font-body leading-relaxed">
            Please read these Terms and Conditions carefully before using the 4YaarWin platform.
            These terms govern your use of our services and form a legally binding agreement between
            you and 4YaarWin. Your use of the platform indicates your acceptance of these terms.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="glass-card rounded-2xl p-6 border border-brand-border">
              <h2 className="font-display font-bold text-xl text-white mb-3">{section.title}</h2>
              <p className="text-white/55 font-body text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
