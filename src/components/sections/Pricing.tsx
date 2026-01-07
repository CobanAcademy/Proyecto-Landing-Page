// landing-app/src/components/sections/Pricing.tsx
'use client';

import React from 'react';

type PlanColor = 'basic' | 'premium' | 'gold';

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  color: PlanColor;
  features: string[];
}

const plans: Plan[] = [
  {
    name: 'Básico',
    subtitle: 'Acceso por 90 días',
    price: '100',
    color: 'basic',
    features: ['Cursos en video', 'Consultas ilimitadas', 'Eventos en vivo'],
  },
  {
    name: 'Premium',
    subtitle: 'Acceso por 180 días + ¡Mejor Valor!',
    price: '120',
    popular: true,
    color: 'premium',
    features: ['Cursos en video', 'Consultas ilimitadas', 'Eventos en vivo'],
  },
  {
    name: 'Gold / Anual',
    subtitle: 'Acceso por 1 año (365 días)',
    price: '150',
    color: 'gold',
    features: ['Cursos en video', 'Consultas ilimitadas', 'Eventos en vivo'],
  },
];

const priceColor = (color: PlanColor) => {
  if (color === 'premium') return 'text-white';
  if (color === 'gold') return 'text-[#7A52C4]';
  return 'text-[#7A52C4]';
};

const cardBg = (color: PlanColor) => {
  if (color === 'premium') return 'bg-[#2E2257] text-white';
  return 'bg-[#F4F1FF] text-[#2E2257]';
};

const buttonStyle = (color: PlanColor) => {
  if (color === 'premium') {
    return 'bg-[#EB5523] hover:bg-[#d94c1f] text-white';
  }
  return 'bg-[#6B54D6] hover:bg-[#5b48b7] text-white';
};

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-[#6C55D7] via-[#5C45C7] to-[#6C55D7]">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-3">
            ¡Suscríbete!
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-regular">
            Elige el plan que más te conviene y accede a todos nuestros beneficios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`
                relative rounded-3xl shadow-xl p-8 md:p-9
                border border-white/20
                ${cardBg(plan.color)}
                ${plan.popular ? 'scale-[1.02]' : ''}
              `}
              style={{ boxShadow: plan.popular ? '0 20px 50px rgba(0,0,0,0.25)' : '0 10px 30px rgba(0,0,0,0.12)' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4F7BFF] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                  MÁS POPULAR
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-2xl md:text-3xl font-archivo-black mb-1">{plan.name}</h3>
                <p className={`${plan.color === 'premium' ? 'text-white/80' : 'text-[#6B54D6]'} text-sm md:text-base font-semibold`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6 text-center">
                <div className="flex items-center justify-center">
                  <span className={`text-5xl md:text-6xl font-archivo-black ${priceColor(plan.color)}`}>
                    {plan.price}
                  </span>
                  <span className={`${plan.color === 'premium' ? 'text-white' : 'text-[#6B54D6]'} ml-2 text-2xl font-archivo-black`}>Bs.</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-base md:text-lg">
                    <span className="w-6 h-6 mr-3 flex items-center justify-center rounded-full bg-white/15 text-[#32C770]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className={plan.color === 'premium' ? 'text-white' : 'text-[#2E2257]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 md:py-3.5 rounded-lg font-bold
                  transition-transform duration-200 hover:scale-[1.01]
                  ${buttonStyle(plan.color)}
                `}
              >
                Suscríbete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;