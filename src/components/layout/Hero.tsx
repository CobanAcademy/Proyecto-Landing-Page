// landing-app/src/components/sections/Hero.tsx
import React from 'react';
import StatCard from '../ui/StatCard';

const HeroSection = () => {
  const stats = [
    { value: '+80%', label: 'De incremento en probabilidades de crédito' },
    { value: '+10.000 Bs.', label: 'Ahorro promedio en intereses' },
    { value: '100%', label: 'Efectividad en recuperación de seguros' },
    { value: '+2M Bs.', label: 'Ahorrados en intereses por nuestros estudiantes' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Aprende a
            <span className="block text-accent">gestionar tus créditos</span>
            como un experto
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Si necesitas aprender como solicitar un crédito o como solucionar un problema con tus créditos o como ganarle al banco, llegaste al lugar correcto
          </p>

          <button className="btn-primary px-8 py-4 text-lg mb-16">
            Descarga la app
          </button>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;