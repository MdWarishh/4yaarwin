import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: '4YaarWin Privacy Policy – How We Protect Your Data',
  description: 'Read the 4YaarWin Privacy Policy to understand how we collect, use, and protect your personal information on our gaming platform.',
  alternates: { canonical: 'https://www.4yaarwin.com/privacy-policy/' },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you register on 4YaarWin, we collect certain personal information necessary to provide our services. This includes your name, phone number, email address, and date of birth for age verification purposes. We also collect device information, IP addresses, and gameplay data to improve your experience and ensure platform security. Financial information such as payment method details may be collected when you make deposits or withdrawals, though sensitive card data is handled by our secure payment partners.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Your information is used to create and manage your 4YaarWin account, process transactions, verify your identity, provide customer support, send important account notifications, and improve our services. We may also use anonymized data for analytics purposes to enhance the platform's performance and user experience. We do not sell your personal information to third parties for marketing purposes.`,
  },
  {
    title: '3. Data Security',
    content: `4YaarWin employs industry-standard security measures to protect your personal data. We use SSL/TLS encryption for all data transmission, secure servers with regular security audits, two-factor authentication options, and strict access controls for our staff. While we take all reasonable precautions, no system is completely infallible, and we encourage users to maintain strong, unique passwords.`,
  },
  {
    title: '4. Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to maintain your session, remember your preferences, analyze platform usage, and provide personalized content. You may configure your browser to refuse cookies, but this may affect the functionality of our platform. We use both session cookies (deleted when you close your browser) and persistent cookies (remain until deleted or expired).`,
  },
  {
    title: '5. Sharing of Information',
    content: `We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, and providing customer support. These partners are contractually obligated to maintain the confidentiality of your information. We may also disclose information when required by law or to protect the rights and safety of our users.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain your personal data for as long as your account is active and as required by applicable laws and regulations. If you close your account, we will retain certain data for fraud prevention and legal compliance purposes for a period of up to 7 years, after which it will be securely deleted.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access, correct, or delete your personal data held by 4YaarWin. You may also request a copy of your data or object to certain processing activities. To exercise these rights, please contact our support team. We will respond to all requests within 30 days.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or prominent notice on our platform. Continued use of 4YaarWin after such changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ href: '/', label: 'Home' }, { href: '/privacy-policy', label: 'Privacy Policy' }]} />

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
          Privacy <span className="text-brand-green">Policy</span>
        </h1>
        <p className="text-white/40 font-body text-sm mb-10">Last updated: January 2025</p>

        <div className="glass-card rounded-3xl p-8 border border-brand-border shadow-card mb-8">
          <p className="text-white/60 font-body leading-relaxed">
            At 4YaarWin, your privacy is our priority. This Privacy Policy explains how we collect,
            use, store, and protect your personal information when you use our platform. By using
            4YaarWin, you agree to the practices described in this policy.
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

        <div className="glass-card rounded-2xl p-6 border border-brand-green/20 mt-8 shadow-glow-sm">
          <h2 className="font-display font-bold text-lg text-white mb-2">Contact About Privacy</h2>
          <p className="text-white/50 font-body text-sm">
            For any privacy-related questions or concerns, contact us at{' '}
            <span className="text-brand-green">support@4yaarwin.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
