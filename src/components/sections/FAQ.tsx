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
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes dudas? ¡Te las aclaramos!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las preguntas más frecuentes sobre nuestros cursos y metodología
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'mt-4' : 'max-h-0'}`}>
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">¿No encontraste tu respuesta?</h3>
              <p className="text-muted-foreground mb-6">
                Contáctanos directamente y nuestro equipo te ayudará personalmente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-3">
                  Contactar por WhatsApp
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors">
                  Enviar correo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;