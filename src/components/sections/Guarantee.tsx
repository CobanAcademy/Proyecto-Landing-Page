// landing-app/src/components/sections/Guarantee.tsx
'use client';

import React from 'react';
import { useAppDownload } from '@/utils/deviceDetection';

const GuaranteeSection = () => {
  const { handleDownload } = useAppDownload();
  
  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative">
              <div className="bg-card border-2 border-border rounded-2xl overflow-hidden aspect-video">
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground">Reproducir video</p>
                    <p className="text-sm text-muted-foreground mt-1">Ver testimonio de éxito</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                ¡NUEVO!
              </div>
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