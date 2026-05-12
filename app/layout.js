import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SchemaOrg from '@/components/ui/SchemaOrg';

const SITE_URL = 'https://www.4yaarwin.tech';

export const metadata = {
  // 1. MetadataBase fix: Isse relative URLs (OG images, icons) sahi kaam karenge
  metadataBase: new URL(SITE_URL),
  
  verification: {
    google: "uK9xirD2drTt9K0qqT6AbZFBhh4BwIBReReq4G2bD88",
  },

  // 2. Optimized Title: Target keywords ko front mein rakha hai ranking ke liye
  title: {
    default: '4YaarWin Official – Login, Register & Play Online',
    template: '%s | 4YaarWin Official',
  },

  description:
    'Join 4YaarWin official platform. Register now, login instantly, and play Wingo, Aviator & more. Fast withdrawals and 24/7 support on Yaar Win.',

  // 3. Expanded Keywords: Zyada variations add kiye hain
  keywords: [
    '4yaarwin',
    '4yaarwin login',
    '4yaarwin register',
    'yaar win login',
    'year win',
    'yaarwin gift code',
    '4yaarwin app download',
    'official yaar win',
  ],

  authors: [{ name: '4YaarWin' }],
  creator: '4YaarWin',
  publisher: '4YaarWin',

  // 4. Canonical Fix: Duplication issue hatane ke liye
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: '4YaarWin Official',
    title: '4YaarWin Official – Play & Win Online',
    description: 'Join India\'s trusted gaming platform 4YaarWin. Register today for instant rewards.',
    images: [
      {
        url: '/logo.webp', // metadataBase ki wajah se ye automatic absolute URL ban jayega
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
    images: ['/logo.webp'],
  },

  // 5. Apple Touch Icon Fix: SEO 100 ke liye mandatory hai
  icons: {
    icon: '/favicon.webp',
    shortcut: '/favicon.webp',
    apple: '/apple-touch-icon.png', // Ek 180x180 px ki image 'public' folder mein daal dena
  },
};

export default function RootLayout({ children }) {
  return (
    // 6. Language Locale Fix: India target karne ke liye
    <html lang="en-IN">
      <head>
        <SchemaOrg />
      </head>
      <body className="antialiased">
        <Header />
        {/* 7. CLS Fix: Content jump rokne ke liye padding */}
        <main className="pt-16 md:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}