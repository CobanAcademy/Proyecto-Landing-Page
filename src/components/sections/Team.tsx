import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  achievement: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Herman Mercado',
      role: 'CEO & FOUNDER',
      experience: 'Más de 27 años de experiencia en banca.',
      achievement: '5 Libros Publicados sobre temas crediticios.'
    },
    {
      name: 'Uwil Cuellar',
      role: 'CTO & FOUNDER',
      experience: '5 años liderando proyectos de software.',
      achievement: '3 años de integración multiplataforma.'
    },
    {
      name: 'Victor Rivera',
      role: 'COFOUNDER',
      experience: '18 Años de experiencia en Banca.',
      achievement: '12 Años formador / Banca.'
    },
    {
      name: 'Cimar Gonzales',
      role: 'COFOUNDER',
      experience: '32 Años como empresario.',
      achievement: '15 Años de introducción y posicionamiento de marcas.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Quiénes somos?
          <span className="block text-lg text-[#C5BFEB] mt-2">
            Expertos en el área de créditos, desarrollo de negocios y software
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#2D2659] rounded-xl p-6">
              <div className="w-16 h-16 bg-[#6C55D7] rounded-full mb-4 flex items-center justify-center text-white font-bold">
                {member.name.split(' ')[0][0]}
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#D455D7] font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-[#C5BFEB] mb-2">{member.experience}</p>
              <p className="text-sm text-[#867EA2]">{member.achievement}</p>
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-4 mt-12">
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280]">
            <span className="text-xl">⚫</span>
          </button>
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280]">
            <span className="text-xl">📘</span>
          </button>
          <button className="bg-[#3A3270] p-3 rounded-lg hover:bg-[#4A4280]">
            <span className="text-xl">🐦</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;