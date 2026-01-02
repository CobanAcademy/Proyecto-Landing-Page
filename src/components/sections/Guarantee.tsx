// landing-app/src/components/sections/Guarantee.tsx
import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              RESULTADOS GARANTIZADOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿No quedaste satisfecho? Te reembolsamos tu suscripción.
              <span className="block mt-2 text-primary font-medium">
                El único requisito es haber completado al menos un curso y compartirnos el motivo para ayudarnos a mejorar.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative">
              <div className="bg-card border-2 border-border rounded-2xl overflow-hidden aspect-video">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground">Reproducir video</p>
                    <p className="text-sm text-muted-foreground mt-1">Ver testimonio de éxito</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                ¡NUEVO!
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">
                Transforma tu vida financiera con nuestra metodología probada
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Metodología 100% práctica y aplicable',
                  'Soporte personalizado 24/7',
                  'Comunidad de más de 10,000 estudiantes',
                  'Actualizaciones constantes del contenido'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary px-8 py-4 text-lg w-full lg:w-auto">
                Descarga la app
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;