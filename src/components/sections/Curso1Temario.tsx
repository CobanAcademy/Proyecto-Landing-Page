const learnings = [
  {
    emoji: '💰',
    title: 'Amortizaciones inteligentes',
    desc: 'Estrategias para pagar menos intereses y reducir el costo total de tu crédito sin que el banco te lo cuente.',
  },
  {
    emoji: '⚖️',
    title: 'Defiende tus derechos',
    desc: 'Aprende a identificar cláusulas abusivas en tu contrato y cómo actuar legalmente ante ellas.',
  },
  {
    emoji: '🔄',
    title: 'Recupera tu dinero',
    desc: 'Reclama el dinero que ya pagaste por seguros innecesarios — el banco sabe cómo cobrártelos, tú sabrás cómo recuperarlos.',
  },
  {
    emoji: '✅',
    title: 'Liquidación sin sorpresas',
    desc: 'Cancela tu crédito correctamente, sin costos ocultos, penalizaciones ni trámites interminables.',
  },
];

const includes = [
  '3 sesiones en vivo por Zoom de 2 horas cada una',
  'Clase BONUS: La Clínica del Crédito (nivel experto)',
  'Clases 100% grabadas — repásalas cuando quieras',
  '2 asesorías personalizadas a tu crédito específico',
  'Basado en Leyes y Normativas Vigentes en Bolivia',
];

const sessions = [
  { label: 'Sesión 1', day: 'Lunes', date: '18 de Mayo', time: '20:00 – 22:00', bonus: false },
  { label: 'Sesión 2', day: 'Miércoles', date: '20 de Mayo', time: '20:00 – 22:00', bonus: false },
  { label: 'Sesión 3', day: 'Viernes', date: '22 de Mayo', time: '20:00 – 22:00', bonus: false },
  { label: '🎁 BONUS', day: 'Clínica del', date: 'Crédito', time: 'Clase extra', bonus: true },
];

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function Curso1Temario() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden lg:bg-linear-to-br lg:from-[#6C55D7] lg:via-[#5943B8] lg:to-[#4A3699] lg:min-h-175 lg:pt-16 bg-linear-to-b from-[#6C55D7] via-[#5943B8] to-[#2B1B46]">

        {/* MOBILE — imagen de fondo, texto al final */}
        <div className="lg:hidden relative min-h-screen flex items-end">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/icons/1-1.png"
              alt="Persona con dinero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2B1B46] via-[#2B1B46]/50 to-transparent" />
          </div>
          <div className="relative z-10 px-6 py-10 w-full">
            <div className="inline-flex items-center gap-2 bg-[#EB5523]/20 border border-[#EB5523]/40 text-[#EB5523] px-4 py-1.5 rounded-full text-sm font-bold mb-5 tracking-wide">
              🎦 CURSO INTENSIVO VIRTUAL POR ZOOM
            </div>
            <h1 className="text-3xl font-archivo-black text-white leading-tight mb-4 drop-shadow-lg">
              Gánale al banco y <span className="text-[#EB5523]">ahorra miles de Bs.</span>
            </h1>
            <p className="text-sm text-white/90 mb-5 leading-relaxed drop-shadow-md">
              Si ya tenés un crédito activo, este curso te enseña a pagar menos intereses y recuperar seguros cobrados de más.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold">📅 18, 20 y 22 de Mayo</span>
              <span className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold">🕗 20:00 – 22:00</span>
              <span className="bg-[#EB5523]/20 border border-[#EB5523]/50 rounded-xl px-3 py-2 text-[#EB5523] text-xs font-bold">💰 Bs 350</span>
            </div>
            <a href="#inscripcion" className="bg-[#EB5523] hover:bg-[#d44a1f] text-white px-6 py-4 rounded-xl text-base font-bold transition-colors w-full shadow-xl text-center block">
              Inscribirme ahora →
            </a>
          </div>
        </div>

        {/* DESKTOP — grid 2 columnas: texto | imagen */}
        <div className="hidden lg:block lg:container lg:mx-auto lg:px-4 lg:pt-20 lg:h-full lg:relative lg:z-10">
          <div className="grid grid-cols-2 gap-0 items-stretch h-full">
            <div className="text-left px-12 xl:px-20 py-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#EB5523]/20 border border-[#EB5523]/40 text-[#EB5523] px-4 py-1.5 rounded-full text-sm font-bold mb-8 tracking-wide">
                🎦 CURSO INTENSIVO VIRTUAL POR ZOOM
              </div>
              <h1 className="text-5xl xl:text-6xl font-archivo-black text-white leading-tight mb-7">
                Gánale al banco y <br />
                <span className="text-[#EB5523]">ahorra miles de Bs.</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                Si ya tenés un crédito activo, este curso te enseña a pagar menos intereses, recuperar seguros cobrados de más y liquidar tu deuda sin costos sorpresa — todo basado en normativa boliviana vigente.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-semibold">
                  📅 18, 20 y 22 de Mayo
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm font-semibold">
                  🕗 20:00 – 22:00
                </span>
                <span className="flex items-center gap-2 bg-[#EB5523]/20 border border-[#EB5523]/50 rounded-xl px-4 py-2.5 text-[#EB5523] text-sm font-bold">
                  💰 Bs 350 · Precio especial
                </span>
              </div>
              <a
                href="#inscripcion"
                className="inline-block bg-[#EB5523] hover:bg-[#d44a1f] text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl hover:shadow-[#EB5523]/30 hover:-translate-y-0.5 self-start"
              >
                Inscribirme ahora →
              </a>
            </div>
            <div className="relative h-full min-h-125 lg:min-h-full -mr-4 lg:-mr-12">
              <img
                src="/icons/1.png"
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
            <p className="text-white/60 text-lg">Si te identificás con alguna de estas situaciones, la respuesta es sí.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Tenés un crédito activo y no sabés si estás pagando de más en intereses.',
              'Sentís que los seguros de tu crédito son muy caros y no sabés cómo reclamar.',
              'Querés liquidar tu crédito pero no conocés el procedimiento correcto.',
              'El banco te cobró algo que no entendiste y querés saber si fue legal.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#2D2659] border border-[#3A3270] hover:border-[#6C55D7]/60 rounded-xl p-5 transition-colors">
                <span className="w-6 h-6 bg-[#EB5523] rounded-full flex items-center justify-center shrink-0 mt-0.5">
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
            <p className="text-white/60 text-lg">4 habilidades clave para tomar el control total de tu crédito</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {learnings.map((item, i) => (
              <div
                key={i}
                className="group bg-[#2D2659] border border-[#3A3270] hover:border-[#6C55D7] rounded-2xl p-8 transition-all hover:-translate-y-0.5"
              >
                <div className="w-14 h-14 bg-[#6C55D7]/20 group-hover:bg-[#6C55D7]/30 rounded-xl flex items-center justify-center text-3xl mb-5 transition-colors">
                  {item.emoji}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
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
            <p className="text-white/60 text-lg">Una sola inversión, múltiples beneficios</p>
          </div>

          <div className="bg-linear-to-br from-[#2D2659] to-[#3A3270] border border-[#6C55D7]/40 rounded-2xl p-10 space-y-6">
            {includes.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 bg-[#EB5523] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
                  <CheckIcon />
                </span>
                <p className="text-white text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORARIO ── */}
      <section className="py-20 md:py-28 px-4 bg-[#2B1B46]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-4">
              Horario de sesiones
            </h2>
            <p className="text-white/60 text-lg">3 sesiones + 1 clase bonus de nivel experto</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-center border transition-all ${
                  s.bonus
                    ? 'bg-[#EB5523]/10 border-[#EB5523]/40 shadow-[0_0_30px_rgba(235,85,35,0.1)]'
                    : 'bg-[#2D2659] border-[#3A3270]'
                }`}
              >
                <div className={`text-xs font-bold mb-3 tracking-wider ${s.bonus ? 'text-[#EB5523]' : 'text-[#6C55D7]'}`}>
                  {s.label}
                </div>
                <div className="text-xl font-archivo-black text-white mb-1">{s.day}</div>
                <div className="text-white/70 text-sm mb-4">{s.date}</div>
                <div
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full inline-block ${
                    s.bonus ? 'bg-[#EB5523]/20 text-[#EB5523]' : 'bg-[#6C55D7]/20 text-[#C5BFEB]'
                  }`}
                >
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
          <div className="inline-block bg-[#EB5523]/20 border border-[#EB5523]/40 text-[#EB5523] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            🔥 PRECIO DE INSCRIPCIÓN TEMPRANA
          </div>
          <h2 className="text-4xl md:text-5xl font-archivo-black text-white mb-2">
            Bs. 350
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Incluye las 3 sesiones + clase bonus + clases grabadas + 2 asesorías personalizadas
          </p>
          <a
            href="#inscripcion"
            className="inline-block bg-[#EB5523] hover:bg-[#d44a1f] text-white px-12 py-4 rounded-xl text-xl font-bold transition-all shadow-2xl hover:shadow-[#EB5523]/40 hover:-translate-y-0.5"
          >
            Reservar mi lugar →
          </a>
          <p className="text-white/50 text-sm mt-4">Los cupos son limitados. No esperes al último momento.</p>
        </div>
      </section>
    </div>
  );
}
