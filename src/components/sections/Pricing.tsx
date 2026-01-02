// landing-app/src/components/sections/Pricing.tsx
'use client';

import React, { useState } from 'react';

interface Plan {
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular: boolean;
  color: 'basic' | 'premium' | 'gold';
}

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: Plan[] = [
    {
      name: 'Básico',
      description: 'Ideal para comenzar',
      price: isAnnual ? 100 : 120,
      duration: isAnnual ? '90 días' : '30 días',
      features: [
        'Acceso por 90 días',
        '100+ Cursos en video',
        'Consultas ilimitadas',
        'Eventos en vivo',
        'Acceso a comunidad'
      ],
      popular: false,
      color: 'basic'
    },
    {
      name: 'Premium',
      description: 'Más popular - Mejor valor',
      price: isAnnual ? 120 : 150,
      duration: isAnnual ? '180 días' : '90 días',
      features: [
        'Acceso por 180 días',
        '120+ Cursos en video',
        'Consultas ilimitadas',
        'Eventos en vivo exclusivos',
        'Acceso a proveedores',
        'Soporte prioritario 24/7'
      ],
      popular: true,
      color: 'premium'
    },
    {
      name: 'Gold / Anual',
      description: 'Máximo ahorro y beneficios',
      price: isAnnual ? 150 : 180,
      duration: isAnnual ? '365 días' : '180 días',
      features: [
        'Acceso por 1 año (365 días)',
        '150+ Cursos en video',
        'Consultas ilimitadas VIP',
        'Eventos en vivo premium',
        'Acceso a proveedores premium',
        'Soporte VIP 24/7',
        'Mentorías personalizadas',
        'Certificación oficial'
      ],
      popular: false,
      color: 'gold'
    }
  ];

  const getColorClass = (color: Plan['color']) => {
    switch (color) {
      case 'basic': return 'border-primary/30';
      case 'premium': return 'border-accent';
      case 'gold': return 'border-yellow-500';
      default: return 'border-border';
    }
  };

  const getPriceColor = (color: Plan['color']) => {
    switch (color) {
      case 'basic': return 'text-primary';
      case 'premium': return 'text-accent';
      case 'gold': return 'text-yellow-500';
      default: return 'text-foreground';
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Suscríbete!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Elige el plan que más te conviene y accede a todos nuestros beneficios
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-background p-1 rounded-lg mb-8">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${!isAnnual ? 'bg-primary text-white' : 'text-muted-foreground'}`}
              onClick={() => setIsAnnual(false)}
            >
              Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${isAnnual ? 'bg-primary text-white' : 'text-muted-foreground'}`}
              onClick={() => setIsAnnual(true)}
            >
              Anual
              <span className="ml-2 text-xs bg-accent text-white px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card border-2 ${getColorClass(plan.color)} ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full font-bold text-sm">
                  MAS POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
                
                <div className="my-6">
                  <div className="flex items-center justify-center">
                    <span className={`text-5xl font-bold ${getPriceColor(plan.color)}`}>
                      {plan.price}
                    </span>
                    <div className="text-left ml-2">
                      <div className="text-sm text-muted-foreground">Bs.</div>
                      <div className="text-sm">/ {isAnnual ? 'año' : 'mes'}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Acceso por {plan.duration}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                plan.popular 
                  ? 'bg-accent hover:bg-accent/90 text-white' 
                  : 'bg-primary hover:bg-primary/90 text-white'
              }`}>
                Suscríbete
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos los planes incluyen garantía de satisfacción de 30 días
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            *Precios en Bolivianos (Bs.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;