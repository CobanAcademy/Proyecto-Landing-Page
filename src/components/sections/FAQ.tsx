// landing-app/src/components/sections/FAQ.tsx
"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Cobanacademy es una entidad financiera?",
      answer:
        "No, Cobanacademy es una plataforma educativa dedicada a crear y difundir contenido especializado en todo lo relacionado al área crediticia, a través de cursos en video, shorts y podcasts.",
    },
    {
      question: "¿El contenido está basado en la normativa vigente en Bolivia?",
      answer:
        "Todo el contenido está basado en la normativa vigente en Bolivia, específicamente, en la Ley N° 393, Ley N° 453, Ley N° 14379, el Reglamento de Protección del Consumidor de Servicios Financieros, el Reglamento de Contratos y las circulares ASFI.",
    },
    {
      question: "¿Cobanacademy otorga créditos?",
      answer: "No, Cobanacademy no otorga ningún tipo de crédito.",
    },
    {
      question: "¿Se debe pagar para acceder a los cursos de Cobanacademy?",
      answer:
        "Sí, para acceder a los cursos completos de la plataforma, es necesario suscribirse a cualquiera de los planes que están vigentes.",
    },
    {
      question: "¿Qué otros servicios ofrece Cobanacademy?",
      answer:
        "Cobanacademy, además de los cursos en video, ofrece el servicio de asesorías especializadas en temas crediticios.",
    },
    {
      question: "¿Cómo se accede a las asesorías?",
      answer:
        "Para acceder a las asesorías, se las debe solicitar mediante el botón “Solicitar asesoría” que está ubicado en la parte final de cada curso.",
    },
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
                className={`px-5 md:px-6 py-5 md:py-6 ${index !== faqs.length - 1 ? "border-b border-[#E6E0FF]" : ""}`}>
                <button
                  className="flex items-start justify-between w-full text-left gap-3"
                  onClick={() => toggleFAQ(index)}>
                  <div className="flex items-start gap-4">
                    <span className="text-[#6B54D6] font-bold text-lg md:text-xl leading-none pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-regular text-[#1F1D2B]">
                        {faq.question}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isOpen
                            ? "max-h-40 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}>
                        <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-[#6B54D6] text-2xl font-bold leading-none pt-1"
                    aria-hidden="true">
                    {isOpen ? "−" : "+"}
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
