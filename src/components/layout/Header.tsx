// landing-app/src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo y marca */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">Cc</span>
            </div>
            <span className="text-xl font-bold text-foreground">cobanacademy</span>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="/cursos" className="text-foreground/80 hover:text-foreground transition-colors">
              Cursos
            </Link>
            <Link href="/quienes-somos" className="text-foreground/80 hover:text-foreground transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/suscripcion" className="text-foreground/80 hover:text-foreground transition-colors">
              Suscripción
            </Link>
            <Link href="/ayuda" className="text-foreground/80 hover:text-foreground transition-colors">
              Ayuda
            </Link>
          </div>

          {/* Botón CTA */}
          <button className="btn-primary">
            Descarga la app
          </button>

          {/* Menú móvil */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;