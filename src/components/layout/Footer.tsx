import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2D2659] border-t border-[#3A3270]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-[#6C55D7] rounded-lg flex items-center justify-center">
                <span className="font-bold text-2xl">C</span>
              </div>
              <span className="text-2xl font-bold">CobanAcademy</span>
            </div>
            <p className="text-[#C5BFEB]">
              Aprende a gestionar tus créditos como un experto
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#C5BFEB] hover:text-white">Inicio</Link></li>
              <li><Link href="/cursos" className="text-[#C5BFEB] hover:text-white">Cursos</Link></li>
              <li><Link href="/quienes-somos" className="text-[#C5BFEB] hover:text-white">Quiénes Somos</Link></li>
              <li><Link href="/contacto" className="text-[#C5BFEB] hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><Link href="/terminos" className="text-[#C5BFEB] hover:text-white">Términos y condiciones</Link></li>
              <li><Link href="/privacidad" className="text-[#C5BFEB] hover:text-white">Políticas de privacidad</Link></li>
              <li><Link href="/faq" className="text-[#C5BFEB] hover:text-white">Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Descargas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Descarga la app</h3>
            <div className="space-y-4">
              <p className="text-[#C5BFEB] mb-2">DISPONIBLE EN</p>
              <div className="space-y-3">
                <button className="flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-lg w-full">
                  <span className="text-xl">▶</span>
                  <span>Google Play</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-lg w-full">
                  <span className="text-xl">⬇</span>
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A3270] mt-8 pt-8 text-center text-[#867EA2]">
          <p>© {new Date().getFullYear()} CobanAcademy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;