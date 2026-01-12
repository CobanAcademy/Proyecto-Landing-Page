// landing-app/src/components/sections/FAQ.tsx
'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Cobanacademy es un banco o me prestará dinero directamente?',
      answer: 'No, CobanAcademy es una plataforma educativa. No somos un banco ni prestamos dinero directamente. Te enseñamos las estrategias para que puedas acceder a créditos bancarios en mejores condiciones.'
    },
    {
      question: 'Soy trabajador independiente/freelancer y mis ingresos varían. ¿Esto me sirve?',
      answer: '¡Absolutamente! Especializamos en casos como el tuyo. Te enseñamos cómo documentar y presentar tus ingresos variables ante los bancos para aumentar tus probabilidades de aprobación.'
    },
    {
      question: '¿Qué diferencia hay entre los cursos grabados y las consultas en vivo?',
      answer: 'Los cursos grabados son el contenido base que puedes ver a tu ritmo. Las consultas en vivo son sesiones interactivas donde resolvemos dudas específicas y casos particulares en tiempo real.'
    },
    {
      question: '¿Cuánto tiempo tarda en verse resultados?',
      answer: 'La mayoría de nuestros estudiantes ven mejoras en su perfil crediticio en 3-6 meses. Los resultados dependen de la consistencia en aplicar lo aprendido.'
    },
    {
      question: '¿Ofrecen garantía de aprobación de créditos?',
      answer: 'Ofrecemos garantía de satisfacción con el contenido. Si completas al menos un curso y no estás satisfecho, te reembolsamos. La aprobación de créditos depende de cada caso y institución financiera.'
    },
    {
      question: '¿Los cursos están actualizados a las leyes actuales?',
      answer: 'Sí, actualizamos nuestro contenido constantemente según los cambios en regulaciones financieras y políticas bancarias en Bolivia.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="ayuda" className="py-16 md:py-24 bg-[#F6F4FD]">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-[#4F3FB6] leading-tight">
            ¿Tienes dudas?
            <br />
            ¡Te las aclaramos!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto   ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`px-5 md:px-6 py-5 md:py-6 ${index !== faqs.length - 1 ? 'border-b border-[#E6E0FF]' : ''}`}
              >
                <button
                  className="flex items-start justify-between w-full text-left gap-3"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[#6B54D6] font-bold text-lg md:text-xl leading-none pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-regular text-[#1F1D2B]">
                        {faq.question}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                          {faq.answer}
                        </p>
                  </div>
                </div>
              </div>
                  <span
                    className="text-[#6B54D6] text-2xl font-bold leading-none pt-1"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;