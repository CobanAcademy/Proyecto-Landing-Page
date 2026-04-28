const learnings = [
  {
    emoji: '🏦',
    title: 'Elegí la mejor entidad financiera',
    desc: 'Identificá cuál banco o cooperativa realmente te conviene, más allá de la publicidad y las tasas de pizarra.',
  },
  {
    emoji: '📊',
    title: 'Tasa de pizarra vs. TEAC',
    desc: 'Conocé el costo verdadero de tu préstamo: la diferencia entre lo que anuncian y lo que realmente pagás.',
  },
  {
    emoji: '⚖️',
    title: 'Cuota fija o variable',
    desc: '¿Interés fijo o variable? ¿A corto o largo plazo? Aprendé a elegir la modalidad que te ahorra más.',
  },
  {
    emoji: '🧮',
    title: 'Calculá tu capacidad de endeudamiento',
    desc: 'Determiná el monto máximo que podés pedir según tus ingresos, antes de ir al banco y sin sorpresas.',
  },
  {
    emoji: '🤝',
    title: 'Preparate para la entrevista',
    desc: 'Técnicas para hablar con el oficial de crédito y aumentar tus probabilidades de aprobación.',
  },
  {
    emoji: '🏠',
    title: 'Tipos de crédito',
    desc: 'Distinguí entre crédito de vivienda, construcción, inversión o consumo para no pagar tasas incorrectas.',
  },
  {
    emoji: '🔄',
    title: 'Revertí un "NO" del banco',
    desc: 'La estrategia exacta para que tu próxima solicitud sea aprobada si cumplís los requisitos.',
  },
];

const sessions = [
  { label: 'Sesión 1', day: 'Domingo', date: '25 de Mayo', time: '20:00 – 22:00' },
  { label: 'Sesión 2', day: 'Miércoles', date: '28 de Mayo', time: '20:00 – 22:00' },
  { label: 'Sesión 3', day: 'Jueves', date: '29 de Mayo', time: '20:00 – 22:00' },
];

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function Curso2Temario() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden lg:bg-linear-to-br lg:from-[#6C55D7] lg:via-[#5943B8] lg:to-[#4A3699] lg:min-h-175 lg:pt-16 bg-linear-to-b from-[#6C55D7] via-[#5943B8] to-[#2B1B46]">

        {/* MOBILE — imagen de fondo, texto al final */}
        <div className="lg:hidden relative min-h-screen flex items-end">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/icons/2-2.png"
              alt="Persona con dinero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2B1B46] via-[#2B1B46]/50 to-transparent" />
          </div>
          <div className="relative z-10 px-6 py-10 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                👨‍🏫 Herman Mercado
              </div>
              <div className="inline-flex items-center bg-[#6C55D7]/30 border border-[#6C55D7]/50 text-[#C5BFEB] px-3 py-1.5 rounded-full text-xs font-bold">
                ASFI
              </div>
            </div>
            <h1 className="text-3xl font-archivo-black text-white leading-tight mb-4 drop-shadow-lg">
              Todo lo que necesitás saber{' '}
              <span className="text-[#D455D7]">antes de pedir un crédito</span>
            </h1>
            <p className="text-sm text-white/90 mb-5 leading-relaxed drop-shadow-md">
              El curso que nadie te dio en el colegio. Aprendé a comparar bancos, calcular tu capacidad real y que el banco trabaje para vos.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold">📅 25, 28 y 29 de Mayo</span>
              <span className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold">🕗 20:00 – 22:00</span>
              <span className="bg-[#D455D7]/20 border border-[#D455D7]/50 rounded-xl px-3 py-2 text-[#D455D7] text-xs font-bold">🎁 Bs 300</span>
            </div>
            <a href="#inscripcion" className="bg-[#D455D7] hover:bg-[#bf44c2] text-white px-6 py-4 rounded-xl text-base font-bold transition-colors w-full shadow-xl text-center block">
              Quiero pre-inscribirme →
            </a>
          </div>
        </div>

        {/* DESKTOP — grid 2 columnas: texto | imagen */}
        <div className="hidden lg:block lg:container lg:mx-auto lg:px-4 lg:pt-20 lg:h-full lg:relative lg:z-10">
          <div className="grid grid-cols-2 gap-0 items-stretch h-full">
            <div className="text-left px-12 xl:px-20 py-20 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  👨‍🏫 Instructor: <span className="font-bold">Herman Mercado</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#6C55D7]/30 border border-[#6C55D7]/50 text-[#C5BFEB] px-4 py-1.5 rounded-full text-sm font-bold">
                  ASFI · Normativa boliviana
                </div>
              </div>
              <h1 className="text-5xl xl:text-6xl font-archivo-black text-white leading-tight mb-7">
                Todo lo que necesitás saber{' '}
                <span className="text-[#D455D7]">antes de pedir un crédito</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                El curso que nadie te dio en el colegio. Antes de firmar, aprendé a comparar entidades, calcular tu capacidad real y asegurarte de que el banco trabaje para vos, no al revés.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-semibold">
                  📅 25, 28 y 29 de Mayo
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-semibold">
                  🕗 20:00 – 22:00
                </span>
                <span className="flex items-center gap-2 bg-[#D455D7]/20 border border-[#D455D7]/50 rounded-xl px-4 py-2.5 text-[#D455D7] text-sm font-bold">
                  🎁 Bs 300 · Pre-inscripción
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white/50 text-xs line-through">
                  Precio normal Bs 350
                </span>
              </div>
              <a
                href="#inscripcion"
                className="inline-block bg-[#D455D7] hover:bg-[#bf44c2] text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl hover:shadow-[#D455D7]/30 hover:-translate-y-0.5 self-start"
              >
                Quiero pre-inscribirme →
              </a>
            </div>
            <div className="relative h-full min-h-125 lg:min-h-full -mr-4 lg:-mr-12">
              <img
                src="/icons/2.png"
                alt="Persona con dinero"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section className="py-20 md:py-28 px-4 bg-[#292150]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-4">
              ¿Este curso es para vos?
            </h2>
            <p className="text-white/60 text-lg">Diseñado para quienes están a punto de dar el primer paso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Estás pensando en pedir un crédito y no sabés por dónde empezar.',
              'Querés comparar bancos pero todos te parecen iguales y no sabés cuál elegir.',
              'Te preocupa no saber si alcanzarás a pagar las cuotas.',
              'Ya te rechazaron una solicitud y no entendés por qué ni cómo mejorar tu perfil.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#2D2659] border border-[#3A3270] hover:border-[#6C55D7]/60 rounded-xl p-6 transition-colors">
                <span className="w-6 h-6 bg-[#6C55D7] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </span>
                <p className="text-white/90 text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LO QUE APRENDERÁS ── */}
      <section className="py-20 md:py-28 px-4 bg-[#2B1B46]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-4">
              Lo que aprenderás
            </h2>
            <p className="text-white/60 text-lg">7 módulos prácticos para dominar el sistema financiero boliviano</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {learnings.map((item, i) => (
              <div
                key={i}
                className="group bg-[#2D2659] border border-[#3A3270] hover:border-[#6C55D7] rounded-2xl p-7 transition-all hover:-translate-y-0.5 flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-[#6C55D7]/20 group-hover:bg-[#6C55D7]/30 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-colors">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="py-20 md:py-28 px-4 bg-[#292150]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-4">
              Todo lo que incluye
            </h2>
            <p className="text-white/60 text-lg">Una inversión enfocada en lo que realmente necesitás</p>
          </div>

          <div className="bg-linear-to-br from-[#2D2659] to-[#3A3270] border border-[#6C55D7]/40 rounded-2xl p-10 space-y-6">
            {[
              '3 sesiones en vivo por Zoom de 2 horas cada una',
              'Basado 100% en la normativa de la ASFI y la oferta real de entidades bolivianas',
              'Dirigido por el experto Herman Mercado',
              'Material práctico y ejemplos reales del sistema financiero de Bolivia',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#6C55D7] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
                  <CheckIcon />
                </span>
                <p className="text-white text-base leading-relaxed">{item}</p>
              </div>
            ))}

            {/* nota sin asesorías */}
            <div className="border-t border-white/10 pt-6 flex items-start gap-3">
              <span className="text-yellow-400 text-lg shrink-0">ℹ️</span>
              <p className="text-white/60 text-sm leading-relaxed">
                Este curso no incluye asesorías personalizadas. Si necesitás asesoría individual, consultá el Curso 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HORARIO ── */}
      <section className="py-20 md:py-28 px-4 bg-[#2B1B46]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-4">
              Horario de sesiones
            </h2>
            <p className="text-white/60 text-lg">3 sesiones intensivas de 2 horas cada una</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sessions.map((s, i) => (
              <div key={i} className="bg-[#2D2659] border border-[#3A3270] rounded-2xl p-8 text-center">
                <div className="text-xs font-bold text-[#6C55D7] mb-3 tracking-wider">{s.label}</div>
                <div className="text-xl font-archivo-black text-white mb-1">{s.day}</div>
                <div className="text-white/70 text-sm mb-5">{s.date}</div>
                <div className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block bg-[#6C55D7]/20 text-[#C5BFEB]">
                  {s.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PRECIO ── */}
      <section className="py-20 md:py-28 px-4 bg-linear-to-br from-[#6C55D7] via-[#5943B8] to-[#4A3699]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-[#D455D7]/20 border border-[#D455D7]/40 text-[#D455D7] px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            🎁 PRECIO DE PRE-INSCRIPCIÓN
          </div>
          <div className="text-5xl md:text-6xl font-archivo-black text-white mb-2">Bs. 300</div>
          <p className="text-white/50 text-sm mb-3 line-through">Precio normal: Bs. 350</p>
          <p className="text-white/70 mb-10 text-lg">
            Incluye las 3 sesiones en vivo + normativa ASFI actualizada + instructor experto
          </p>
          <a
            href="#inscripcion"
            className="inline-block bg-[#D455D7] hover:bg-[#bf44c2] text-white px-12 py-4 rounded-xl text-xl font-bold transition-all shadow-2xl hover:shadow-[#D455D7]/40 hover:-translate-y-0.5"
          >
            Pre-inscribirme ahora →
          </a>
          <p className="text-white/50 text-sm mt-5">El precio especial es por tiempo limitado.</p>
        </div>
      </section>
    </div>
  );
}
