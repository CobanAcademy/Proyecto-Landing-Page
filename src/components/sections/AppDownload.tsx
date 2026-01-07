// landing-app/src/components/sections/AppDownload.tsx
import React from 'react';

const AppDownloadSection = () => {
  const stats = [
    { icon: "/icons/download.svg", value: '59,865', label: 'Descargas' },
    { icon: "/icons/like.svg", value: '29,852', label: 'Likes' },
    { icon: "/icons/star.svg", value: '4.9/5', label: 'Rating' }
  ];

  return (
    <section className="bg-[#6C55D7] pt-16 md:pt-24 pb-0 overflow-hidden">
      <div className="container-custom pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch lg:min-h-[600px]">
          {/* Content */}
          <div className="self-center">
            <h2 className="text-3xl md:text-4xl font-archivo-black mb-6 text-white">
              Descarga la App
            </h2>

            <p className="text-xl mb-8 font-regular text-white">
              Aprende, consulta y sigue tu progreso en cualquier momento y lugar. La herramienta definitiva para tomar decisiones financieras inteligentes.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-archivo-black text-white">{stat.value}</div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex gap-2">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:opacity-80 cursor-pointer"
              >
                <img src="/icons/ios.svg" alt="Descargar en el App Store" />
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:opacity-80 cursor-pointer"
              >
                <img src="/icons/android.svg" alt="Disponible en Google Play" />
              </a>
            </div>
          </div>

          {/* Imagen pegada abajo */}
          <div className="relative flex items-end justify-center lg:justify-end h-full">
            <img
              src="/images/herman.cel.png"
              alt="Persona con dinero"
              className="block w-auto lg:max-h-[640px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
