'use client';
import React, { useState } from 'react';

const initialState = {
  nombre: '',
  ci: '',
  telefono: '',
  correo: '',
  imagen: null as File | null,
};

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function Curso2Form() {
  const [form, setForm] = useState(initialState);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'imagen' && files) {
      setForm({ ...form, imagen: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isValid = form.nombre && form.ci && form.telefono && form.correo;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess(false);
    try {
      const url = `https://wa.me/59177889320?text=${encodeURIComponent(
        `*Inscripción CURSO - TODO LO QUE NECESITÁS SABER ANTES DE SOLICITAR UN CRÉDITO*\n\nNombre: ${form.nombre}\nCI: ${form.ci}\nTeléfono: ${form.telefono}\nCorreo: ${form.correo}`
      )}`;
      window.open(url, '_blank');
      setSuccess(true);
      setForm(initialState);
    } catch {
      setError('Hubo un error al enviar el formulario.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="inscripcion" className="py-20 md:py-28 px-4 bg-[#292150]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-3">
            Asegurá tu pre-inscripción
          </h2>
          <p className="text-white/60 text-lg">
            Completá el formulario y te contactamos por WhatsApp para confirmar y enviarte los datos de pago.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Caja de precio */}
          <div className="lg:col-span-2">
            <div className="bg-linear-to-br from-[#2D2659] to-[#3A3270] border border-[#6C55D7]/50 rounded-2xl p-7 sticky top-24">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#D455D7]/20 border border-[#D455D7]/40 text-[#D455D7] px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide">
                  🎁 PRECIO PRE-INSCRIPCIÓN
                </div>
                <div className="text-6xl font-archivo-black text-white">300</div>
                <div className="text-white/70 text-xl font-semibold">Bolivianos</div>
                <div className="text-white/40 text-sm mt-1 line-through">Precio normal: Bs 350</div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  '3 sesiones en vivo por Zoom',
                  'Instructor: Herman Mercado',
                  'Normativa ASFI actualizada',
                  'Ejemplos reales del sistema financiero boliviano',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#6C55D7] rounded-full flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-center">
                <p className="text-yellow-300 text-xs font-semibold">
                  ℹ️ Este curso no incluye asesorías personalizadas
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 mt-5 space-y-2 text-center">
                <p className="text-white/50 text-xs">📅 25, 28 y 29 de Mayo</p>
                <p className="text-white/50 text-xs">🕗 20:00 – 22:00 (por Zoom)</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-[#2D2659] border border-[#3A3270] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Ej: María García"
                    className="w-full px-4 py-3 rounded-xl border border-[#3A3270] bg-[#292150] text-white placeholder-white/30 focus:outline-none focus:border-[#6C55D7] transition-colors"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-1.5">Carnet de identidad</label>
                  <input
                    type="text"
                    name="ci"
                    placeholder="Ej: 7654321"
                    className="w-full px-4 py-3 rounded-xl border border-[#3A3270] bg-[#292150] text-white placeholder-white/30 focus:outline-none focus:border-[#6C55D7] transition-colors"
                    value={form.ci}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-1.5">Número de WhatsApp</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Ej: 70123456"
                    className="w-full px-4 py-3 rounded-xl border border-[#3A3270] bg-[#292150] text-white placeholder-white/30 focus:outline-none focus:border-[#6C55D7] transition-colors"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-1.5">Correo electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    placeholder="Ej: maria@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#3A3270] bg-[#292150] text-white placeholder-white/30 focus:outline-none focus:border-[#6C55D7] transition-colors"
                    value={form.correo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-1.5">
                    Comprobante de pago <span className="text-white/40 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="file"
                    name="imagen"
                    accept="image/*"
                    className="w-full px-4 py-3 rounded-xl border border-[#3A3270] bg-[#292150] text-white/60 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6C55D7] file:text-white hover:file:bg-[#5943B8] cursor-pointer"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || sending}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isValid && !sending
                      ? 'bg-[#D455D7] hover:bg-[#bf44c2] text-white shadow-lg hover:shadow-[#D455D7]/30 hover:-translate-y-0.5'
                      : 'bg-[#3A3270] text-white/30 cursor-not-allowed'
                  }`}
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Abriendo WhatsApp...
                    </span>
                  ) : (
                    '💬 Pre-inscribirme por WhatsApp'
                  )}
                </button>

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                {success && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                    <p className="text-green-400 font-semibold">¡Listo! Te redirigimos a WhatsApp para confirmar.</p>
                  </div>
                )}

                <p className="text-white/40 text-xs text-center">
                  Al inscribirte aceptás recibir información del curso por WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
