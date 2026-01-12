// landing-app/src/components/sections/Guarantee.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useAppDownload } from '@/utils/deviceDetection';

const VIDEO_CONFIG = {
  url: 'https://stream.mux.com/qis00y3S3bXGA7C36mFdgdGS4xuvW9NqORrT00Hc00u9wM.m3u8',
  title: 'Ver testimonio de éxito',
  showNewBadge: true,
  poster: 'https://image.mux.com/qis00y3S3bXGA7C36mFdgdGS4xuvW9NqORrT00Hc00u9wM/thumbnail.jpg',
};

const GuaranteeSection = () => {
  const { handleDownload } = useAppDownload();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Verificar si el navegador soporta HLS nativamente (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_CONFIG.url;
    } 
    // Para otros navegadores, usar hls.js
    else if (typeof window !== 'undefined' && 'Hls' in window) {
      const Hls = (window as any).Hls;
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        
        hls.loadSource(VIDEO_CONFIG.url);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('Video listo para reproducir');
        });

        hls.on(Hls.Events.ERROR, (event: any, data: any) => {
          if (data.fatal) {
            console.error('Error fatal en HLS:', data);
          }
        });

        return () => {
          hls.destroy();
        };
      }
    }
  }, []);
  
  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <div className="bg-card border-2 border-[#E6E0FF] rounded-2xl overflow-hidden aspect-video shadow-lg">
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster={
                    VIDEO_CONFIG.poster || 
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%236C55D7'/%3E%3C/svg%3E"
                  }
                >
                  <source src={VIDEO_CONFIG.url} type="application/x-mpegURL" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              
              {VIDEO_CONFIG.showNewBadge && (
                <div className="absolute -top-4 -right-4 bg-[#D455D7] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                  ¡NUEVO!
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="text-center flex justify-center">
              <button 
                onClick={handleDownload}
                className="btn-primary px-8 py-4 text-lg"
              >
                Descarga la app
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;