// landing-app/src/components/sections/AppDownload.tsx
import React from 'react';

const AppDownloadSection = () => {
  const stats = [
    { value: '59,865', label: 'Descargas' },
    { value: '29,852', label: 'Likes' },
    { value: '4.9/5', label: 'Rating' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Aprende, consulta y sigue tu progreso en cualquier momento y lugar
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              La herramienta definitiva para tomar decisiones financieras inteligentes.
              Accede a todos los cursos, haz consultas y sigue tu progreso desde tu móvil.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-xl transition-colors">
                <div className="text-2xl mr-3">▶</div>
                <div className="text-left">
                  <div className="text-xs">Descárgalo en</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-xl transition-colors">
                <div className="text-2xl mr-3">⬇</div>
                <div className="text-left">
                  <div className="text-xs">Descárgalo en</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[500px] bg-card border-4 border-border rounded-[40px] p-4">
                <div className="w-full h-full bg-gradient-to-b from-primary/20 to-accent/20 rounded-[32px] overflow-hidden">
                  {/* Screen Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm font-bold">CobanAcademy</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="text-xs">Online</div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">Tu progreso</h3>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-background/50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-primary">85%</div>
                          <div className="text-xs text-muted-foreground">Completado</div>
                        </div>
                        <div className="bg-background/50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-accent">12</div>
                          <div className="text-xs text-muted-foreground">Cursos</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Curso actual</span>
                          <span className="text-primary font-bold">Créditos Hipotecarios</span>
                        </div>
                        <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4"></div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="space-y-3">
                        <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                          Continuar aprendizaje
                        </button>
                        <button className="w-full border border-border py-3 rounded-lg font-medium">
                          Hacer consulta
                        </button>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-around pt-4 border-t border-border">
                      {['🏠', '📚', '💬', '👤'].map((icon, index) => (
                        <button key={index} className="text-xl p-2">
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold text-sm">
                ¡NUEVO!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">
                Actualizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;