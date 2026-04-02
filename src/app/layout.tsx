// landing-app/src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = 'https://cobanacademy.com/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cobanacademy',
  description: 'Si necesitas aprender cómo solicitar un crédito o cómo solucionar un problema con tus créditos, llegaste al lugar correcto.',
  keywords: 'créditos, finanzas, educación financiera, bancos, préstamos',
  openGraph: {
    title: 'Cobanacademy',
    description: 'Aprende a gestionar tus créditos.',
    url: '/',
    siteName: 'Cobanacademy',
    images: [
      {
        url: '/coban_logo.png',
        width: 1200,
        height: 630,
        alt: 'Cobanacademy',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobanacademy',
    description: 'Aprende a gestionar tus créditos.',
    images: ['/coban_logo.png'],
  },
  icons: {
    icon: '/coban_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* HLS.js para reproducir videos HLS en navegadores que no lo soportan nativamente */}
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest" async></script>
      </head>
      <body className={`${inter.className}`}>
        
        <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  );
}