
import React from 'react';
import { TEAM } from '../constants.tsx';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#0b0332]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#E8DCC4] mb-4 opacity-70">Liderazgo</h2>
          <h3 className="serif text-4xl md:text-5xl font-bold mb-6 text-[#E8DCC4]">Equipo Editorial</h3>
          <div className="h-0.5 w-16 bg-[#E8DCC4] mx-auto opacity-30"></div>
        </div>
        
        {/* Ajustado a grid-cols-4 en pantallas grandes para que todos estén en una fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#141C2D] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-[#E8DCC4]/10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#0b0332]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#E8DCC4] font-bold mb-2 opacity-60">
                {member.role}
              </span>

              <h4 className="serif text-xl font-bold mb-3 tracking-wide text-[#E8DCC4] leading-tight px-2">
                {member.name}
              </h4>

              <p className="text-[#E8DCC4]/70 text-[11px] leading-relaxed mb-6 max-w-xs italic line-clamp-3">
                "{member.bio}"
              </p>

              <a 
                href={member.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto flex items-center space-x-2 text-[#E8DCC4] opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-[9px] uppercase tracking-widest font-bold">Ver Perfil</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
