// landing-app/src/components/sections/Testimonials.tsx
'use client';

import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  results: string[];
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Gabriela Méndez',
      role: 'Asesor de ventas',
      avatar: '👩‍💼',
      quote: 'Tras 2 años de rechazos bancarios, aprendí a gestionar mi perfil con ellos. ¡En solo 3 meses logré la aprobación de mi casa!',
      results: ['✅ Crédito aprobado después de 2 años de rechazos', '✅ Ahorro de 50,000 Bs. en intereses', '✅ Ahora asesora a otros']
    },
    {
      name: 'Jorge Sanchez',
      role: 'Arquitecta',
      avatar: '👨‍🔧',
      quote: 'Vivía estresado por las deudas. Gracias a su método, ordené mis finanzas y por fin duermo tranquilo.',
      results: ['✅ Deudas reducidas en 70%', '✅ Plan de pago estructurado', '✅ Mejor calificación crediticia']
    },
    {
      name: 'Maria Paz',
      role: 'Comerciante',
      avatar: '👩‍🍳',
      quote: 'Como independiente nadie me prestaba. Aquí aprendí a validar mis ingresos ante el banco y conseguí el capital para crecer.',
      results: ['✅ Primer crédito empresarial aprobado', '✅ Negocio expandido en 6 meses', '✅ Acceso a líneas de crédito']
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros estudiantes hablan por nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde estudiantes que obtuvieron un crédito después de haber sido rechazada su solicitud, otros que detectaron errores en sus créditos, hasta quienes ahorraron más de 100K Bs. en intereses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`card transition-all duration-300 ${activeIndex === index ? 'border-accent shadow-xl' : 'border-border'}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="mb-6 italic text-foreground/90">
                "{testimonial.quote}"
              </blockquote>

              <div className="space-y-2">
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-accent' : 'bg-border'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '9.4/10', label: 'Satisfacción general' },
            { value: '98%', label: 'Recomendarían' },
            { value: '3.2M Bs.', label: 'Ahorro promedio' },
            { value: '1500+', label: 'Créditos aprobados' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;