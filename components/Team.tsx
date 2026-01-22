
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#080E1A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#E8DCC4] mb-4">Liderazgo</h2>
          <h3 className="serif text-4xl md:text-5xl font-bold mb-6">Nuestro Equipo Editorial</h3>
          <div className="h-0.5 w-16 bg-[#E8DCC4] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden mb-6 bg-slate-800">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-[450px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent opacity-60"></div>
              </div>
              <h4 className="serif text-2xl font-bold mb-1 tracking-wide">{member.name}</h4>
              <p className="text-[#E8DCC4] uppercase text-xs tracking-[0.2em] font-medium mb-4">{member.role}</p>
              <p className="text-[#E8DCC4]/70 text-sm leading-relaxed max-w-xs">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
