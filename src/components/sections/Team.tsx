'use client';

import React, { useRef, useState } from 'react';

// Define los tipos para los miembros del equipo
interface TeamMember {
  name: string;
  role: string;
  photo: string;
  experience: string;
  achievement: string;
  social: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Herman Mercado',
      role: 'CEO & FOUNDER',
      photo: '/images/herman-photo.jpg',
      experience: 'Más de 27 años de experiencia en banca.',
      achievement: '5 Libros Publicados sobre temas crediticios.',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Uwil Cuellar',
      role: 'CTO & FOUNDER',
      photo: '/images/uwil-photo.jpg',
      experience: '5 años liderando proyectos de software.',
      achievement: '3 años de integración multiplataforma.',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Victor Rivera',
      role: 'COFOUNDER',
      photo: '/images/victor-photo.jpg',
      experience: '18 Años de experiencia en Banca.',
      achievement: '12 Años formador / Banca.',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Cimar Gonzales',
      role: 'COFOUNDER',
      photo: '/images/cimar-photo.jpg',
      experience: '32 Años como empresario.',
      achievement: '15 Años de introducción y posicionamiento de marcas.',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  // CORRECCIÓN 1: Agrega el tipo HTMLDivElement al useRef
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  // CORRECCIÓN 2: Agrega el tipo number al parámetro index
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#2B1B46]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          ¿Quiénes somos?
        </h2>
        <p className="text-base md:text-lg text-white/80 text-center mb-12">
          Expertos en el área de créditos, desarrollo de negocios y software
        </p>

        {/* MOBILE LAYOUT - Carrusel de cards tipo perfil */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-2 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Foto - placeholder con gradiente */}
                  <div className="w-full h-64 bg-gradient-to-br from-[#6C55D7] to-[#4A3699] flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">
                      {member.name.split(' ')[0][0]}
                    </div>
                  </div>
                  
                  {/* Información */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2B1B46] mb-1">{member.name}</h3>
                    <p className="text-[#6B54D6] font-semibold mb-4 text-sm">{member.role}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-700">{member.experience}</p>
                      <p className="text-sm text-gray-600">{member.achievement}</p>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <a href={member.social.facebook} className="w-8 h-8 rounded-full bg-[#6B54D6] flex items-center justify-center hover:bg-[#5943B8] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-[#6B54D6] flex items-center justify-center hover:bg-[#5943B8] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-[#6B54D6] flex items-center justify-center hover:bg-[#5943B8] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-[#EB5523] w-8' 
                    : 'bg-white/40'
                }`}
                aria-label={`Ver perfil ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT - Grid de 4 columnas */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#2D2659] rounded-xl p-6">
              <div className="w-16 h-16 bg-[#6C55D7] rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl">
                {member.name.split(' ')[0][0]}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#D455D7] font-semibold mb-3 text-sm">{member.role}</p>
              <p className="text-sm text-[#C5BFEB] mb-2">{member.experience}</p>
              <p className="text-sm text-[#867EA2]">{member.achievement}</p>
            </div>
          ))}
        </div>

        {/* Redes sociales generales - solo desktop */}
        <div className="hidden lg:flex justify-center space-x-4 mt-12">
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280] transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280] transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280] transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;