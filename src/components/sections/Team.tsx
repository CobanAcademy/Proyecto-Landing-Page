// landing-app/src/components/sections/Team.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface TeamMemberDetail {
  id: number;
  attributes: {
    value: string;
  };
}

interface TeamMember {
  id: number;
  attributes: {
    name: string;
    role: string;
    image: {
      data: {
        attributes: {
          url: string;
          formats?: {
            medium?: { url: string };
            small?: { url: string };
          };
        };
      };
    };
    team_member_details: {
      data: TeamMemberDetail[];
    };
  };
}

const API_BASE_URL = 'https://api.cobanacademy.com';

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/team-members?populate=*`);
        const data = await response.json();
        setTeamMembers(data.data || []);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const getImageUrl = (member: TeamMember) => {
    const imageData = member.attributes.image.data?.attributes;
    if (!imageData) return '';
    
    // Usar medium si existe, sino small, sino la original
    const url = imageData.formats?.medium?.url || imageData.formats?.small?.url || imageData.url;
    return `${API_BASE_URL}${url}`;
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-[#2E2257]">
        <div className="container-custom">
          <div className="text-center text-white">Cargando equipo...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-[#2E2257]">
      <div className="mx-auto px-4 max-w-3/4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-white mb-3">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium">
            Expertos en el área de créditos, desarrollo de negocios y software
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={getImageUrl(member)}
                  alt={member.attributes.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-[#6B54D6] mb-1">
                  {member.attributes.name}
                </h3>

                {/* Role */}
                <p className="text-sm md:text-base text-[#6B54D6] font-medium mb-4">
                  {member.attributes.role}
                </p>

                {/* Details */}
                <div className="space-y-2 text-left">
                  {member.attributes.team_member_details.data.map((detail) => (
                    <p
                      key={detail.id}
                      className="text-sm md:text-base text-center text-[#6B54D6] font-regular leading-relaxed"
                    >
                      {detail.attributes.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
