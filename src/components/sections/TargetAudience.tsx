// landing-app/src/components/sections/TargetAudience.tsx
import React from 'react';

interface AudienceGroup {
  title: string;
  icon: string;
  description: string;
  services: string[];
}

const TargetAudienceSection = () => {
  const audienceGroups: AudienceGroup[] = [
    {
      title: 'Asalariados o dependientes',
      icon: '👨‍💼',
      description: 'Estabilidad laboral con ingresos fijos mensuales',
      services: [
        '✓ Créditos de vivienda',
        '✓ Créditos vehicular',
        '✓ Créditos de consumo',
        '✓ Tarjetas de crédito'
      ]
    },
    {
      title: 'Negocio o empresa',
      icon: '🏢',
      description: 'Emprendedores y dueños de negocios',
      services: [
        '✓ Capital de operación',
        '✓ Capital de inversión',
        '✓ Créditos de consumo',
        '✓ Créditos de vivienda'
      ]
    },
    {
      title: 'Profesionales independientes',
      icon: '👨‍⚕️',
      description: 'Freelancers y profesionales con ingresos variables',
      services: [
        '✓ Créditos de consumo',
        '✓ Créditos de inversión',
        '✓ Créditos vehicular',
        '✓ Tarjetas de crédito'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Para quienes son nuestros cursos?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Diseñados específicamente para cada perfil financiero
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => (
            <div key={index} className="card hover:border-primary/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{group.icon}</div>
                <h3 className="text-xl font-bold mb-2">{group.title}</h3>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </div>

              <div className="space-y-3">
                {group.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-primary font-bold mr-3">✓</span>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full py-3 bg-background hover:bg-background/80 rounded-lg font-medium transition-colors">
                Ver cursos específicos
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Más del 80% de nuestros estudiantes logran sus objetivos financieros en los primeros 6 meses
          </p>
          <button className="btn-primary px-8 py-4 text-lg">
            Descarga la app
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;