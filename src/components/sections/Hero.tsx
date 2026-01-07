// landing-app/src/components/sections/Hero.tsx
import React from 'react';
import StatCard from '../ui/StatCard';

const HeroSection = () => {
  // Estadísticas superiores (3 tarjetas pequeñas)
  const topStats = [
    { value: '+80%', label: 'De incremento en las probabilidades de obtener un crédito de acuerdo a su perfil crediticio' },
    { value: '+10.000 Bs.', label: 'Es el ahorro promedio por cada uno de nuestros estudiantes en el pago de los intereses de sus créditos' },
    { value: '100%', label: 'Es la efectividad en la recuperación de los seguros de vida' },
  ];

  // Estadísticas inferiores (2 tarjetas grandes)
  const bottomStats = [
    { value: '+2MA Bs.', label: 'Más de 2 Millones de Bolivianos ahorrados en el pago de intereses de personas que han aprendido con CobanAcademy y han tomado acción.' },
    { value: '+0 Bs.', label: 'Más de 0 Millones de Bolivianos en carteras desembolsadas.' },
  ];

  return (
    <>
      <section className="relative overflow-hidden min-h-screen lg:min-h-[700px] pt-3">
         {/* Gradiente radial de fondo - extendido */}
         <div 
           className="absolute -inset-4" 
           style={{
             background: 'radial-gradient(circle at 70% 15%, #6B54D6 0%, #2C2353 100%)'
           }}
         ></div>
         
         <div className="container mx-auto px-4 pt-20 h-full relative z-10">
          {/* Grid de 2 columnas: Texto e Imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-full">
            {/* Columna izquierda: Texto y botones */}
            <div className="text-left px-23 py-16 md:py-24 flex flex-col justify-center">
              <h1 className="text-6xl md:text-6xl font-archivo-black  mb-6 leading-tight">
                Aprende a gestionar tus créditos como un experto
              </h1>
              
              <p className="text-xl text-[#C5BFEB] mb-8 font-regular">
                Si necesitas aprender como solicitar un crédito o como solucionar un problema con tus créditos o como ganarle al banco, llegaste al lugar correcto
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Descarga la app
                </button>   
                <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Contáctanos
                </button>
              </div>
            </div>

            {/* Columna derecha: Imagen más grande */}
            <div className="relative h-full min-h-[500px] lg:min-h-full -mr-4 lg:-mr-12">
              <img 
                src="/icons/3.png" 
                alt="Persona con dinero" 
                className="w-[120%] h-full object-cover object-center scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas con fondo completo */}
      <section className="bg-[#2B1B46] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Primera fila: 3 estadísticas sin fondo (solo texto) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {topStats.map((stat, index) => (
                <div key={index} className="text-center px-4 pb-10">
                  <div className="text-6xl md:text-5xl font-archivo-black  mb-3">
                    {stat.value}
                  </div>
                  <p className="text-xl md:text-base  leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Segunda fila: 2 tarjetas grandes con fondo púrpura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
              {bottomStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-[#6C55D7] hover:bg-[#5C45C7] rounded-2xl p-2 py-8  transition-colors"
                >
                  <div className="text-6xl md:text-6xl font-archivo-black text-white mb-4 text-center">
                    {stat.value}
                  </div>
                  <p className="text-xl md:text-lg text-white text-center leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Botón de descarga */}
            <div className="flex justify-center pt-4">
              <button className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors">
                Descarga la app
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;