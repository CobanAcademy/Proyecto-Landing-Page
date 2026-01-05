
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'IDENTIFICA',
      description: 'A través de nuestra tecnología identificamos tu perfil crediticio.'
    },
    {
      title: 'CONTENIDO',
      description: 'En base a tu perfil ponemos a tu disposición cursos en video y eventos en vivo.'
    },
    {
      title: 'ACOMPAÑAMIENTO',
      description: 'Soporte técnico 24/7, consultas gratuitas y acceso a proveedores.'
    }
  ];

  return (
    <>
      {/* SECCIÓN 1: Las 3 cards principales */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Cómo funciona Cobanacademy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestra metodología en 3 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: La garantía aparte */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border-2 border-accent rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">⭐</span>
                    </div>
                    <span className="text-accent font-bold text-lg">NUESTRA GARANTÍA</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    RESULTADOS GARANTIZADOS
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xl text-muted-foreground mb-4">
                        Si no quedas satisfecho, te reembolsamos tu suscripción.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center bg-primary/5 p-4 rounded-lg">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <span className="text-foreground">Completar al menos un curso</span>
                        </div>
                        
                        <div className="flex items-center bg-accent/5 p-4 rounded-lg">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-white font-bold">2</span>
                          </div>
                          <span className="text-foreground">Compartir motivo para ayudarnos a mejorar</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground italic">
                      "La única academia que te garantiza resultados en educación financiera"
                    </p>
                  </div>
                </div>
                
                <div className="md:w-48 flex-shrink-0">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white py-4 px-6 rounded-xl text-lg font-bold transition-colors shadow-lg">
                    Conocer garantía
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;