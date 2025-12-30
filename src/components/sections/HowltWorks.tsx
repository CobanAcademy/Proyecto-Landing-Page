import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: 'ID',
      title: 'IDENTIFICA',
      description: 'A través de nuestra tecnología identificamos tu perfil crediticio.'
    },
    {
      icon: '🎬',
      title: 'CONTENIDO',
      description: 'En base a tu perfil ponemos a tu disposición cursos en video y eventos en vivo.'
    },
    {
      icon: '💬',
      title: 'ACOMPAÑAMIENTO',
      description: 'Soporte técnico 24/7, consultas gratuitas y acceso a proveedores.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2D2659]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Cómo funciona Cobanacademy?
          <span className="block text-lg text-[#C5BFEB] mt-2">Te explicamos en tres pasos:</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#3A3270] w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[#C5BFEB]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;