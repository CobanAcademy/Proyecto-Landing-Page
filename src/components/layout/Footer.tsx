import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#13121A] border-t border-[#3A3270]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img src="/letters/CobanWhite.svg" alt="Logo"  />
            </div>
            <p className="text-white font-regular">
              Aprende a gestionar tus créditos como un experto
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 font-regular">
              <li><Link href="/" className="text-white hover:text-white">Inicio</Link></li>
              <li><Link href="/cursos" className="text-white hover:text-white">Cursos</Link></li>
              <li><Link href="/quienes-somos" className="text-white hover:text-white">Quiénes Somos</Link></li>
              <li><Link href="/contacto" className="text-white hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2 font-regular">
              <li><Link href="/terminos" className="text-white hover:text-white">Términos y condiciones</Link></li>
              <li><Link href="/privacidad" className="text-white hover:text-white">Políticas de privacidad</Link></li>
              <li><Link href="/faq" className="text-white hover:text-white">Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Descargas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Descarga la app</h3>
            <div className="space-y-4">
              {/* Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.cobanacademy.cobanacademy&hl=es_BO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-all duration-300  hover:opacity-80 cursor-pointer"
              >
                <img src="/icons/android.svg" alt="Disponible en Google Play"  />
              </a>

              {/* App Store */}
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-all duration-300  hover:opacity-80 cursor-pointer"
              >
                <img src="/icons/ios.svg" alt="Descargar en el App Store"  />
              </a>
            </div>
          </div>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center items-center gap-4 mt-12 mb-8">
          <a 
            href="https://www.facebook.com/cobanacademy" 
            target="_blank" 
            rel="noopener noreferrer"
           
          >
            <img src="/socials/facebook.svg" alt="Facebook" className="" />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
           
          >
            <img src="/socials/Subtract.svg" alt="Twitter" className="" />
          </a>
          
          <a 
            href="https://www.linkedin.com/company/cobanacademy" 
            target="_blank" 
            rel="noopener noreferrer"
           
          >
            <img src="/socials/linkedin.svg" alt="LinkedIn" className="" />
          </a>
          
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            <img src="/socials/youtube.svg" alt="YouTube" className="" />
          </a>
          
          <a 
            href="https://www.instagram.com/cobanacademy" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            <img src="/socials/instagram.svg" alt="Instagram" className="" />
          </a>
        </div>

        <div className="border-t border-[#3A3270] mt-8 pt-8 text-center text-[#F6F4FD] font-regular ">
          <p className=''>© {new Date().getFullYear()} Coban Academy</p>
          <p className="">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;