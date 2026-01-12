  'use client';

  import React, { useState, useEffect } from 'react';
  import StatCard from '../ui/StatCard';
  import { useAppDownload, useAppLogs } from '@/utils/deviceDetection';
  import { ActivityCodes } from '@/utils/activityLogger';

  const HeroSection = () => {
    const { handleDownload } = useAppDownload();
    const { handleLog } = useAppLogs();
    
    // Imágenes aleatorias solo en el cliente para evitar hydration mismatch
    const [randomImageDesktop, setRandomImageDesktop] = useState('/icons/1.png'); // Default desktop
    const [randomImageMobile, setRandomImageMobile] = useState('/icons/1-1.png'); // Default mobile
    
    useEffect(() => {
      const imagesDesktop = ['/icons/1.png', '/icons/2.png', '/icons/3.png'];
      const imagesMobile = ['/icons/1-1.png', '/icons/2-2.png', '/icons/3-3.png'];
      const randomIndex = Math.floor(Math.random() * imagesDesktop.length);
      
      setRandomImageDesktop(imagesDesktop[randomIndex]);
      setRandomImageMobile(imagesMobile[randomIndex]);
    }, []); // Solo se ejecuta una vez en el cliente
    
    // Función para contactar por WhatsApp (envía log + abre WhatsApp)
    const handleWhatsAppContact = () => {
      handleLog(ActivityCodes.CONTACT_WHATSAPP);
      const whatsappUrl = 'https://wa.me/59177889320?text=Hola%20Quiero%20mas%20informacion%20acerca%20de%20la%20App';
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }; 
    
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
        <section className="relative overflow-hidden lg:bg-gradient-to-br lg:from-[#6C55D7] lg:via-[#5943B8] lg:to-[#4A3699]  lg:min-h-[700px] lg:pt-16 pt-16 bg-gradient-to-b from-[#6C55D7] via-[#5943B8] to-[#2B1B46] ">
          
          {/* MOBILE LAYOUT - Imagen con texto encima (sin container para full width) */}
          <div className="lg:hidden relative min-h-screen flex items-end ">
            {/* Imagen de fondo */}
            <div className="absolute  inset-0 w-full h-full">
              <img 
                src={randomImageMobile}
                alt="Persona con dinero" 
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay oscuro para mejor legibilidad del texto */}
            </div>

            {/* Contenido encima de la imagen */}
            <div className="relative z-10 text-left px-6 py-8 w-full">
              <h1 className="text-3xl md:text-4xl font-archivo-black text-white mb-4 leading-tight drop-shadow-lg">
                Aprende a gestionar tus créditos como un experto
              </h1>
              
              <p className="text-sm md:text-base text-white mb-6 font-regular leading-relaxed drop-shadow-md">
                Si necesitas aprender cómo solicitar un crédito o cómo solucionar un problema con tus créditos o cómo ganarle al banco, llegaste al lugar correcto
              </p>
              
              <div className='flex flex-col gap-3'>
                <button 
                  onClick={handleDownload}
                  className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-6 py-4 rounded-xl text-base font-bold transition-colors w-full shadow-xl"
                >
                  Descarga la app
                </button>   
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-white hover:bg-gray-100 text-[#1F1F1F] px-6 py-4 rounded-xl text-base font-bold transition-colors w-full shadow-xl"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Grid de 2 columnas */}
          <div className="lg:container lg:mx-auto lg:px-4 lg:pt-20 lg:h-full lg:relative lg:z-10">

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
                  <button 
                    onClick={handleWhatsAppContact}
                    className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Contáctanos
                  </button>
                </div>
              </div>

              <div className="relative h-full min-h-[500px] lg:min-h-full -mr-4 lg:-mr-12">
                <img 
                  src={randomImageDesktop}
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