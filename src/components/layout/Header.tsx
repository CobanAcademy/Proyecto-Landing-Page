// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para scroll y cerrar menú en resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-3 z-50 transition-all duration-300
      }`}>
        <div className="container mx-auto px-4 bg-white text-black rounded-xl" >
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* LOGO - IZQUIERDA */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/icons/CobanLogo.svg" alt="Logo" width={38} height={38} />
                <span className="text-xl font-bold text-black  hidden sm:inline">
                  CobanAcademy
                </span>
              </Link>
            </div>

            {/* NAVEGACIÓN DESKTOP - CENTRO */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <nav className="flex items-center space-x-1 lg:space-x-2 xl:space-x-8">
                <Link href="/" className="nav-link px-3 py-2">Inicio</Link>
                <Link href="/cursos" className="nav-link px-3 py-2">Cursos</Link>
                <Link href="/quienes-somos" className="nav-link px-3 py-2">Quiénes Somos</Link>
                <Link href="/suscripcion" className="nav-link px-3 py-2">Suscripción</Link>
                <Link href="/ayuda" className="nav-link px-3 py-2">Ayuda</Link>
              </nav>
            </div>

            {/* BOTONES + HAMBURGUESA - DERECHA */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* BOTONES CTA */}
              <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
                <button className="btn-primary px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base whitespace-nowrap">
                  Descarga la app
                </button>
                <button className="btn-secondary px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base whitespace-nowrap">
                  Contáctanos
                </button>
              </div>

              {/* BOTÓN HAMBURGUESA */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors ml-2"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENÚ MÓVIL DESPLEGABLE */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border">
              <div className="py-4">
                <nav className="flex flex-col space-y-2">
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="nav-link-mobile"
                  >
                    Inicio
                  </Link>
                  <Link 
                    href="/cursos" 
                    onClick={() => setIsMenuOpen(false)}
                    className="nav-link-mobile"
                  >
                    Cursos
                  </Link>
                  <Link 
                    href="/quienes-somos" 
                    onClick={() => setIsMenuOpen(false)}
                    className="nav-link-mobile"
                  >
                    Quiénes Somos
                  </Link>
                  <Link 
                    href="/suscripcion" 
                    onClick={() => setIsMenuOpen(false)}
                    className="nav-link-mobile"
                  >
                    Suscripción
                  </Link>
                  <Link 
                    href="/ayuda" 
                    onClick={() => setIsMenuOpen(false)}
                    className="nav-link-mobile"
                  >
                    Ayuda
                  </Link>
                  
                  {/* BOTONES EN MÓVIL */}
                  <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-border/50">
                    <button className="btn-primary w-full py-3">
                      Descarga la app
                    </button>
                    <button className="btn-secondary w-full py-3">
                      Nuevo Botón
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Overlay para fondo cuando menú está abierto */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;