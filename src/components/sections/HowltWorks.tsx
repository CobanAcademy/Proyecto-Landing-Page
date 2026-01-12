import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon:"/icons/search.svg",
      title: 'IDENTIFICA',
      description: 'A través de nuestra tecnología identificamos tu perfil crediticio.'
    },
    {
       icon:"/icons/screen.svg",
      title: 'CONTENIDO',
      description: 'En base a tu perfil crediticio ponemos a tu disposición los cursos en video pregrabados y lives y eventos en vivo, adecuados para vos.'
    },
    {
       icon:"/icons/headset.svg",
      title: 'ACOMPAÑAMIENTO',
      description: 'Ponemos a tu disposición nuestro soporte técnico 24/7 para consultas gratuitas, eventos en vivo, asesorías de pago y el acceso a proveedores de acuerdo a tu perfil crediticio.'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#6B54D6] font-archivo-black">
            ¿Cómo funciona Cobanacademy?
          </h2>
          <p className="text-xl  max-w-3xl mx-auto text-[#6B54D6]">
          Te explicamos en tres pasos:
          </p>
        </div>

        {/* Cards PRINCIPALES - Altura fija en desktop, flexible en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="
                bg-[#6B54D6] border border-border rounded-xl 
                p-6 md:p-8 
                hover:border-primary/50 transition-all duration-300
                hover:shadow-lg
                flex flex-col
                /* En móvil: altura auto (se expande) */
                h-auto
                /* En desktop: altura mínima fija para uniformidad */
                md:min-h-[320px]
                w-full
                text-white  
              "
            >
              {/* NÚMERO GRANDE - Como en tu diseño actual */}
              <div className="mb-4 md:mb-6 flex items-center justify-center ">
                <img src={step.icon} alt="Logo" className='' />
              </div>
              
              {/* TÍTULO GRANDE - Manteniendo tu estilo */}
              <h3 className="
                text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6
                leading-tight
                text-center
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
                 
                  text-lg md:text-lg
                  leading-relaxed
                  text-center
                  font-regular
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
        <div className="my-10 md:my-10">
          <div className="flex items-center justify-center">

          </div>
        </div>

        {/* Card de GARANTÍA - Diseño especial */}
        <div className="max-w-4xl mx-auto">
          <div className="
            bg-[#2B1B46]
            border-2 border-primary/30 rounded-2xl 
            p-8 md:p-10
            /* En móvil: altura auto */
            h-auto
            /* En desktop: altura controlada */
            
          ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Contenido izquierdo */}
              <div className="">
               <img src="icons/garantizar.svg" alt="Logo" className='' />
              </div>
            {/* Contenido izquierdo */}
              <div className="flex-1">
                {/* Título */}
                <h3 className="
                  text-xl md:text-2xl font-bold text-foreground mb-4
                  leading-tight
                  font-archivo-black
                  md:line-clamp-2
                  md:max-h-[3em]
                ">
                  RESULTADOS GARANTIZADOS
                </h3>
                
                {/* Descripción */}
                <p className="
                  text-lg  mb-6
                  leading-relaxed
                  font-regular
                text-white
                  
                ">
                  ¿No quedaste satisfecho?1 te reembolsamos tu suscripción. 
                  El único requisito es haber completado al menos un curso y compartirnos el motivo para ayudarnos a mejorar.
                </p>
                
              </div>
              
              {/* Lado derecho - CTA */}
             
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