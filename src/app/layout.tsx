import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/ui/MobileStickyBar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Analytics } from '@/components/Analytics';
import { SITE, getCumulatedExperience } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant',
});

const siteUrl = SITE.url;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#576b3b',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Paysagiste Angers - Art des Jardins | Devis Gratuit',
    template: '%s | Art des Jardins - Paysagiste Angers',
  },
  description:
    `Paysagiste professionnel à Angers et Maine-et-Loire. Aménagement de jardins, entretien, élagage, abattage. ${getCumulatedExperience()} ans d'expérience cumulée. Devis gratuit sous 48h.`,
  keywords: [
    'paysagiste angers',
    'jardinier angers',
    'entretien jardin angers',
    'élagage angers',
    'abattage arbre angers',
    'aménagement jardin angers',
    'paysagiste 49',
    'jardinier maine-et-loire',
  ],
  authors: [{ name: 'Art des Jardins' }],
  creator: 'Art des Jardins',
  publisher: 'Art des Jardins',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Art des Jardins',
    title: 'Art des Jardins - Paysagiste Angers',
    description:
      'Paysagiste professionnel à Angers. Aménagement, entretien, élagage, abattage. Devis gratuit.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Art des Jardins - Paysagiste Angers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art des Jardins - Paysagiste Angers',
    description: 'Paysagiste professionnel à Angers. Devis gratuit.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // google: 'votre-code-verification-google',
  },
  category: 'business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <head />
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-green-800 focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <Analytics />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}
