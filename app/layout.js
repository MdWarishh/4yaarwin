import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SchemaOrg from '@/components/ui/SchemaOrg';

const SITE_URL = 'https://www.4yaarwin.tech';

export const metadata = {
  metadataBase: new URL(SITE_URL),
    verification: {
    google: "uK9xirD2drTt9K0qqT6AbZFBhh4BwIBReReq4G2bD88",
  },
  title: {
    default: '4YaarWin Official – Login & Register | Play & Win Online',
    template: '%s | 4YaarWin Official',
  },
  description:
    'Join 4YaarWin official platform. Register now, login instantly, and explore the best online gaming experience with fast access and secure gameplay.',
  keywords: [
    '4yaarwin',
    '4yaarwin login',
    '4yaarwin register',
    '4yaarwin official',
    'play online win game',
    '4yaarwin app',
    '4yaarwin platform',
  ],
  authors: [{ name: '4YaarWin' }],
  creator: '4YaarWin',
  publisher: '4YaarWin',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: '4YaarWin Official',
    title: '4YaarWin Official – Login & Register | Play & Win Online',
    description:
      'Join 4YaarWin official platform. Register now, login instantly, and explore the best online gaming experience.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '4YaarWin Official Gaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4YaarWin Official – Play & Win Online',
    description: 'Join 4YaarWin official platform. Register now and win big!',
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
