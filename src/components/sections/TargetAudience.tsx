// landing-app/src/components/sections/TargetAudience.tsx
'use client';

import React from 'react';
import { useAppDownload } from '@/utils/deviceDetection';

const TargetAudienceSection = () => {
  const { handleDownload } = useAppDownload();
  
  const audienceTypes = [
    {
      title: 'Asalariados o dependientes',
      icon: "/icons/salario.svg",
      services: [
        'Créditos de vivienda',
        'Créditos vehicular',
        'Créditos de consumo',
        'Tarjetas de crédito'
      ]
    },
    {
      title: 'Negocio o empresa',
      icon: "/icons/oficina.svg",
      services: [
        'Capital de operación',
        'Capital de inversión',
        'Créditos de consumo',
        'Créditos de vivienda'
      ]
    },
    {
      title: 'Profesionales independientes',
      icon: "/icons/independiente.svg",
      services: [
        'Créditos de consumo',
        'Créditos de inversión',
        'Créditos vehicular',
        'Tarjetas de crédito'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2B1B46]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Para quienes son nuestros cursos?
        </h2>

        {/* DESKTOP - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audienceTypes.map((audience, index) => (
            <div 
              key={index} 
              className=" rounded-xl p-6 border-[#6B54D6] border-2 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-start text-left mb-6">
                <div className="text-4xl mb-4">
                <img src={audience.icon} alt="Logo" className='' />
                </div>
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

        {/* MOBILE - Slider con swipe */}
        <div className="md:hidden -mx-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4">
            {audienceTypes.map((audience, index) => (
              <div 
                key={index} 
                className="w-[calc(100%-2rem)] shrink-0 snap-center first:ml-0"
              >
                <div className="rounded-xl p-6 border-[#6B54D6] border-2 h-full">
                  <div className="flex flex-col items-start text-left mb-6">
                    <div className="text-4xl mb-4">
                      <img src={audience.icon} alt="Logo" className='' />
                    </div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={handleDownload}
            className="bg-[#EB5523] hover:bg-[#5C45C7] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Descarga la app
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;