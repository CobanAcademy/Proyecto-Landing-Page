// landing-app/src/components/sections/TestimonialsSection.tsx (con auto-play)
'use client';

import React, { useRef, useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Gabriela Méndez',
      role: 'Asesor de ventas',
      quote: 'Tras 2 años de rechazos bancarios, aprendí a gestionar mi perfil con ellos. ¡En solo 3 meses logré la aprobación de mi casa!',
      avatar: '👩‍💼'
    },
    {
      name: 'Jorge Sanchez',
      role: 'Arquitecta',
      quote: 'Vivía estresado por las deudas. Gracias a su método, ordené mis finanzas y por fin duermo tranquilo.',
      avatar: '👨‍🎨'
    },
    {
      name: 'Maria Paz',
      role: 'Comerciante',
      quote: 'Como independiente nadie me prestaba. Aquí aprendí a validar mis ingresos ante el banco y conseguí el capital para crecer.',
      avatar: '👩‍🍳'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Ingeniero',
      quote: 'Ahorré más de 50,000 Bs. en intereses después de aplicar lo aprendido en los cursos.',
      avatar: '👨‍🔧'
    },
    {
      name: 'Ana López',
      role: 'Médico',
      quote: 'Recuperé 3,000 Bs. en seguros de vida que no sabía que me correspondían.',
      avatar: '👩‍⚕️'
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play cada 5 segundos
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reactivar auto-play después de 10 segundos
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidad del drag
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Para touch en móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setAutoPlay(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 16;
        const scrollPosition = index * (cardWidth + gap);
        
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Actualizar índice cuando se hace scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    const scrollPos = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
    const gap = 16;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#2D2659]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros estudiantes hablan por nosotros
        </h2>
        <p className="text-center text-[#C5BFEB] mb-12 max-w-3xl mx-auto">
          Desde estudiantes que obtuvieron un crédito después de haber sido rechazada su solicitud, 
          otros que detectaron errores gravísimos en sus créditos, hasta quienes ahorraron más de 100K Bs. en intereses.
        </p>

        {/* Carrusel Container */}
        <div className="relative group">
          {/* Flechas de navegación (aparecen al hover en desktop) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-[#6C55D7] hover:bg-[#5C45C7] w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 md:group-hover:opacity-100 transition-opacity"
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-[#6C55D7] hover:bg-[#5C45C7] w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 md:group-hover:opacity-100 transition-opacity"
            aria-label="Siguiente testimonio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carrusel con drag & drop */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-2 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[calc(100vw-4rem)] sm:w-[400px] md:w-[450px] snap-center"
              >
                <div className="bg-[#2D2659] rounded-xl p-6 h-full border border-[#3A3270] hover:border-[#6C55D7] transition-all duration-300 hover:shadow-xl">
                  {/* Avatar y nombre */}
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-[#D455D7] text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Testimonio */}
                  <p className="text-[#C5BFEB] italic leading-relaxed">"{testimonial.quote}"</p>
                  
                  {/* Rating y acción */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <button 
                      className="text-[#6C55D7] hover:text-[#5C45C7] text-sm font-medium"
                      onClick={() => console.log('Ver testimonio completo:', testimonial.name)}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles inferiores */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          {/* Indicadores de puntos */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToIndex(index);
                  setAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#6C55D7] w-8' 
                    : 'bg-[#3A3270] hover:bg-[#6C55D7]'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Controles de reproducción */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#3A3270] hover:bg-[#6C55D7] transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="p-2 rounded-full bg-[#3A3270] hover:bg-[#6C55D7] transition-colors"
              aria-label={autoPlay ? "Pausar carrusel" : "Reproducir carrusel"}
            >
              {autoPlay ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-[#3A3270] hover:bg-[#6C55D7] transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contador */}
        <div className="text-center mt-4 text-[#C5BFEB] text-sm">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>

      <style jsx global>{`
        /* Estilos globales para scrollbar personalizada */
        .testimonial-carousel::-webkit-scrollbar {
          height: 6px;
        }
        
        .testimonial-carousel::-webkit-scrollbar-track {
          background: #2D2659;
          border-radius: 3px;
        }
        
        .testimonial-carousel::-webkit-scrollbar-thumb {
          background: #6C55D7;
          border-radius: 3px;
        }
        
        .testimonial-carousel::-webkit-scrollbar-thumb:hover {
          background: #5C45C7;
        }
        
        /* Smooth scrolling para móviles */
        .testimonial-carousel {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;