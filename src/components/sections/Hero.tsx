'use client';

import React from 'react';
import StatCard from '../ui/StatCard';
import { useAppDownload } from '@/utils/deviceDetection';

const HeroSection = () => {
  const { handleDownload } = useAppDownload();
  
  const topStats = [
    { value: '+80%', label: 'Di incremento en las probabilidades de obtener un crédito de acuerdo a su perfil crediticio' },
    { value: '+10K Bs.', label: 'Es el ahorro promedio por cada uno de nuestros estudiantes en el pago de los intereses de sus créditos' },
    { value: '100%', label: 'Es la efectividad en la recuperación de los seguros de vida' },
  ];

  const bottomStats = [
    { value: '+2M Bs.', label: 'Más de 2 Millones de Bolivianos ahorrados en el pago de intereses de personas que han aprendido con CobanAcademy y han tomado acción.' },
    { value: '+0 Bs.', label: 'Más de 0 Millones de Bolivianos en carteras desembolsadas.' },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6C55D7] via-[#5943B8] to-[#4A3699] min-h-screen lg:min-h-[700px] pt-18">
        <div className="container mx-auto px-4 pt-20 h-full relative z-10">
          
          {/* MOBILE LAYOUT - Imagen arriba, contenido abajo */}
          <div className="lg:hidden">
            {/* Imagen */}
            <div className="relative w-full h-[400px] -mx-4 mb-8">
              <img 
                src="/icons/3.png" 
                alt="Persona con dinero" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Contenido */}
            <div className="text-left px-4 pb-12">
              <h1 className="text-4xl font-archivo-black text-white mb-6 leading-tight">
                Aprende a gestionar tus créditos como un experto
              </h1>
              
              <p className="text-base text-white/90 mb-8 font-regular leading-relaxed">
                Si necesitas aprender cómo solicitar un crédito o cómo solucionar un problema con tus créditos o cómo ganarle al banco, llegaste al lugar correcto
              </p>
              
              <div className='flex flex-col gap-3'>
                <button 
                  onClick={handleDownload}
                  className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-6 py-3.5 rounded-lg text-base font-semibold transition-colors w-full"
                >
                  Descarga la app
                </button>   
                <a 
                  href="https://wa.me/59177889320?text=Hola%20Quiero%20mas%20informacion%20acerca%20de%20la%20App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-black px-6 py-3.5 rounded-lg text-base font-semibold transition-colors w-full inline-block text-center"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Grid de 2 columnas */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-full">
            <div className="text-left px-23 py-16 md:py-24 flex flex-col justify-center">
              <h1 className="text-6xl md:text-6xl font-archivo-black text-white mb-6 leading-tight">
                Aprende a gestionar tus créditos como un experto
              </h1>
              
              <p className="text-xl text-[#C5BFEB] mb-8 font-regular">
                Si necesitas aprender como solicitar un crédito o como solucionar un problema con tus créditos o como ganarle al banco, llegaste al lugar correcto
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4'>
                <button 
                  onClick={handleDownload}
                  className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Descarga la app
                </button>   
                <a 
                  href="https://wa.me/59177889320?text=Hola%20Quiero%20mas%20informacion%20acerca%20de%20la%20App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
                >
                  Contáctanos
                </a>
              </div>
            </div>

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

      {/* Sección de Estadísticas */}
      <section className="bg-[#2B1B46] py-12 md:py-16">
        <div className="container mx-auto px-4">
          
          {/* MOBILE LAYOUT - Apilado vertical */}
          <div className="lg:hidden space-y-6">
            {/* Primeras 3 estadísticas - sin fondo */}
            {topStats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-5xl font-archivo-black text-white mb-3">
                  {stat.value}
                </div>
                <p className="text-base text-white/90 leading-relaxed font-regular">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Últimas 2 estadísticas - con fondo morado */}
            {bottomStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#6C55D7] rounded-2xl p-6 mx-2"
              >
                <div className="text-5xl font-archivo-black text-white mb-4 text-center">
                  {stat.value}
                </div>
                <p className="text-base text-white text-center leading-relaxed font-regular">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Botón de descarga */}
            <div className="flex justify-center pt-4 px-4">
              <button 
                onClick={handleDownload}
                className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors w-full"
              >
                Descarga la app
              </button>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Original */}
          <div className="hidden lg:block space-y-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {topStats.map((stat, index) => (
                <div key={index} className="text-center px-4 pb-10">
                  <div className="text-6xl md:text-5xl font-archivo-black text-white mb-3">
                    {stat.value}
                  </div>
                  <p className="text-xl md:text-base text-white leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
              {bottomStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-[#6C55D7] hover:bg-[#5C45C7] rounded-2xl p-2 py-8 transition-colors"
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

            <div className="flex justify-center pt-4">
              <button 
                onClick={handleDownload}
                className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
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