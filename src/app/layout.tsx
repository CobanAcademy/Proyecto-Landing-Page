// landing-app/src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CobanAcademy',
  description: 'Si necesitas aprender cómo solicitar un crédito o cómo solucionar un problema con tus créditos, llegaste al lugar correcto.',
  keywords: 'créditos, finanzas, educación financiera, bancos, préstamos',
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