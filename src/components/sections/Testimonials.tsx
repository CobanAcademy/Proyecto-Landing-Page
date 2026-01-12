'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  handle?: string;     // @usuario
  avatar?: string;     // emoji fallback
  avatarSrc?: string;  // si luego quieres usar foto real
};

const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7.5 2.5h9A5 5 0 0 1 21.5 7.5v9a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M17.6 6.7h.01"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  return (
    <div className="rounded-2xl bg-[#2D2659]/95 border border-white/10 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] px-6 py-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
          {t.avatarSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={t.avatarSrc} alt={t.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-xl">{t.avatar ?? '👤'}</span>
          )}
        </div>

        <div className="leading-tight">
          <div className="text-white font-semibold text-sm md:text-base">
            {t.name}
          </div>
          <div className="text-white/70 text-xs md:text-sm">
            {t.role}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-white/85 text-sm md:text-[15px] leading-relaxed">
        {t.quote}
      </p>

      {/* Handle */}
      <div className="mt-5 flex items-center gap-2 text-white/60 text-xs">
        <InstagramIcon className="h-4 w-4" />
        <span>{t.handle ?? '@cobanacademy'}</span>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Gabriela Méndez',
      role: 'Arquitecta',
      quote:
        'Tras 2 años de rechazos bancarios, aprendí a gestionar mi perfil con ellos. ¡En solo 3 meses logré la aprobación de mi casa!',
      avatar: '👩‍💼',
      handle: '@gaby.mendez',
    },
    {
      name: 'Jorge Sanchez',
      role: 'Comerciante',
      quote:
        'Vivía estresado por las deudas. Gracias a su método, ordené mis finanzas y por fin duermo tranquilo.',
      avatar: '👨‍💼',
      handle: '@jorge.sanchez',
    },
    {
      name: 'Maria Paz',
      role: 'Asesor de ventas',
      quote:
        'Como independiente nadie me prestaba. Aquí aprendí a validar mis ingresos ante el banco y conseguí el capital para crecer.',
      avatar: '👩‍💻',
      handle: '@maria.paz',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Ingeniero',
      quote:
        'Ahorré más de 50,000 Bs. en intereses después de aplicar lo aprendido en los cursos.',
      avatar: '👨‍🔧',
      handle: '@carlos.rodriguez',
    },
    {
      name: 'Ana López',
      role: 'Médico',
      quote:
        'Recuperé 3,000 Bs. en seguros de vida que no sabía que me correspondían.',
      avatar: '👩‍⚕️',
      handle: '@ana.lopez',
    },
  ];

  // ----- Desktop: 3 cards visibles + 3 dots (para 5 items => 3 "ventanas")
  const desktopWindows = useMemo(() => {
    return Math.max(1, testimonials.length - 2); // n=5 => 3 dots
  }, [testimonials.length]);

  const [desktopIndex, setDesktopIndex] = useState(0);
  const [desktopAnimate, setDesktopAnimate] = useState(true);

  const desktopVisible = useMemo(() => {
    const i = Math.min(desktopIndex, testimonials.length - 3);
    return [testimonials[i], testimonials[i + 1], testimonials[i + 2]];
  }, [desktopIndex, testimonials]);

  // Autoplay suave (opcional)
  useEffect(() => {
    const id = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopWindows);
    }, 3500);
    return () => clearInterval(id);
  }, [desktopWindows]);

  // Animación de entrada (slide suave desde la derecha) cuando cambia el grupo en desktop
  useEffect(() => {
    setDesktopAnimate(false);
    const raf = requestAnimationFrame(() => {
      setDesktopAnimate(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [desktopIndex]);

  // ----- Mobile: carrusel scroll-snap + dots
  const mobileRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const onMobileScroll = () => {
    if (!mobileRef.current) return;
    const el = mobileRef.current;
    const card = el.querySelector<HTMLElement>('[data-card="true"]');
    if (!card) return;

    const gap = 16;
    const w = card.offsetWidth + gap;
    const idx = Math.round(el.scrollLeft / w);
    if (idx !== mobileIndex) setMobileIndex(idx);
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileRef.current) return;
    const el = mobileRef.current;
    const card = el.querySelector<HTMLElement>('[data-card="true"]');
    if (!card) return;

    const gap = 16;
    const w = card.offsetWidth + gap;
    el.scrollTo({ left: index * w, behavior: 'smooth' });
    setMobileIndex(index);
  };

  return (
    <section className="bg-[#6C55D7] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <h2 className="text-center text-white font-archivo-black text-3xl md:text-5xl leading-tight">
          Nuestros estudiantes hablan <br className="hidden sm:block" /> por nosotros
        </h2>

        <p className="mt-4 text-center text-white/80 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Desde estudiantes que obtuvieron un crédito después de haber sido rechazada su solicitud,
          otros que detectaron errores en sus créditos, hasta quienes ahorraron más de 100K Bs. en intereses
          y recuperaron +3,000 Bs. en seguros de vida.
        </p>

        {/* MOBILE */}
        <div className="mt-10 lg:hidden">
          <div
            ref={mobileRef}
            onScroll={onMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                data-card="true"
                className="snap-center flex-none w-[86%] sm:w-[420px]"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Dots mobile */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollMobileTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === mobileIndex ? 'bg-[#FF7A00]' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block mt-12">
          <div
            className="grid grid-cols-3 gap-8"
            style={{
              transform: desktopAnimate ? 'translateX(0)' : 'translateX(80px)',
              opacity: desktopAnimate ? 1 : 0,
              transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms ease',
            }}
          >
            {desktopVisible.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>

          {/* Dots desktop (como Figma: 3 puntitos) */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: desktopWindows }).map((_, i) => (
              <button
                key={i}
                onClick={() => setDesktopIndex(i)}
                aria-label={`Ir al grupo ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === desktopIndex ? 'bg-[#FF7A00]' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
