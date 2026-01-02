// landing-app/src/components/sections/TargetAudience.tsx
import React from 'react';

const TargetAudienceSection = () => {
  const audienceTypes = [
    {
      title: 'Asalariados o dependientes',
      icon: '👨‍💼',
      services: [
        'Créditos de vivienda',
        'Créditos vehicular',
        'Créditos de consumo',
        'Tarjetas de crédito'
      ]
    },
    {
      title: 'Negocio o empresa',
      icon: '🏢',
      services: [
        'Capital de operación',
        'Capital de inversión',
        'Créditos de consumo',
        'Créditos de vivienda'
      ]
    },
    {
      title: 'Profesionales independientes',
      icon: '👩‍⚕️',
      services: [
        'Créditos de consumo',
        'Créditos de inversión',
        'Créditos vehicular',
        'Tarjetas de crédito'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2D2659]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Para quienes son nuestros cursos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audienceTypes.map((audience, index) => (
            <div 
              key={index} 
              className="bg-[#3A3270] rounded-xl p-6 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {audience.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex} 
                    className="flex items-center text-[#C5BFEB] text-sm"
                  >
                    <span className="text-[#6C55D7] mr-3">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#6C55D7] hover:bg-[#5C45C7] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Descarga la app
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;