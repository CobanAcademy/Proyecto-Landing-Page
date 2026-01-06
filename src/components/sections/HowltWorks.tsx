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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo funciona Cobanacademy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Te explicamos cómo transformamos tu vida financiera
          </p>
        </div>

        {/* Cards PRINCIPALES - Altura fija en desktop, flexible en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="
                bg-card border border-border rounded-xl 
                p-6 md:p-8 
                hover:border-primary/50 transition-all duration-300
                hover:shadow-lg
                flex flex-col
                /* En móvil: altura auto (se expande) */
                h-auto
                /* En desktop: altura mínima fija para uniformidad */
                md:min-h-[320px]
                w-full
              "
            >
              {/* NÚMERO GRANDE - Como en tu diseño actual */}
              <div className="mb-4 md:mb-6">
                <div className="
                  text-4xl md:text-5xl font-bold text-primary
                  leading-none
                ">
                  0{index + 1}
                </div>
              </div>
              
              {/* TÍTULO GRANDE - Manteniendo tu estilo */}
              <h3 className="
                text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6
                leading-tight
                break-words
                /* En móvil: se expande normalmente */
                /* En desktop: altura controlada */
                md:line-clamp-2
                md:max-h-[3.5em]
                md:overflow-hidden
              ">
                {step.title}
              </h3>
              
              {/* TEXTO DE ACOMPAÑAMIENTO */}
              <div className="flex-1">
                <p className="
                  text-muted-foreground 
                  text-lg md:text-xl
                  leading-relaxed
                  break-words
                  hyphens-auto
                  /* En móvil: altura auto */
                  /* En desktop: máximo 4 líneas para uniformidad */
                  md:line-clamp-4
                  md:max-h-[6em]
                  md:overflow-hidden
                ">
                  {step.description}
                </p>
              </div>
              
              {/* Separador decorativo (solo desktop) */}
              <div className="hidden md:block mt-6 pt-4 border-t border-border/30">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ESPACIO ENTRE SECCIONES */}
        <div className="my-20 md:my-24">
          <div className="flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-4 text-primary font-bold">✦</div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Card de GARANTÍA - Diseño especial */}
        <div className="max-w-4xl mx-auto">
          <div className="
            bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10
            border-2 border-primary/30 rounded-2xl 
            p-8 md:p-10
            /* En móvil: altura auto */
            h-auto
            /* En desktop: altura controlada */
            md:min-h-[280px]
          ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Contenido izquierdo */}
              <div className="flex-1">
                {/* Badge de garantía */}
                <div className="inline-flex items-center mb-6">
                  <div className="
                    w-10 h-10 bg-accent rounded-full 
                    flex items-center justify-center mr-3
                  ">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <span className="
                    text-accent font-bold text-lg md:text-xl
                    uppercase tracking-wider
                  ">
                    Garantía
                  </span>
                </div>
                
                {/* Título */}
                <h3 className="
                  text-3xl md:text-4xl font-bold text-foreground mb-4
                  leading-tight
                  break-words
                  md:line-clamp-2
                  md:max-h-[3em]
                ">
                  RESULTADOS GARANTIZADOS
                </h3>
                
                {/* Descripción */}
                <p className="
                  text-xl text-muted-foreground mb-6
                  leading-relaxed
                  md:line-clamp-2
                  md:max-h-[3em]
                ">
                  Si no quedas satisfecho, te reembolsamos tu suscripción.
                </p>
                
                {/* Detalles (solo en desktop) */}
                <div className="hidden md:grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary text-sm">1</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">Requisito único</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Completar un curso</p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-accent text-sm">2</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">Compromiso</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Compartir tu experiencia</p>
                  </div>
                </div>
              </div>
              
              {/* Lado derecho - CTA */}
              <div className="
                md:w-64 flex-shrink-0
                w-full md:w-auto
              ">
                <div className="
                  bg-gradient-to-br from-primary/20 to-accent/20 
                  rounded-xl p-6
                  text-center
                  border border-primary/20
                ">
                  <button className="
                    w-full bg-accent hover:bg-accent/90 text-white 
                    py-4 px-6
                    rounded-lg text-lg font-bold 
                    transition-all duration-300
                    hover:shadow-xl
                    active:scale-95
                  ">
                    Conocer garantía
                  </button>
                  <p className="text-xs text-muted-foreground mt-3">
                    Única academia con garantía de resultados
                  </p>
                </div>
              </div>
            </div>
            
            {/* Nota final (solo móvil) */}
            <div className="mt-8 pt-6 border-t border-primary/20 md:hidden">
              <p className="text-center text-muted-foreground text-sm">
                "La única academia con garantía de resultados en educación financiera"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;  