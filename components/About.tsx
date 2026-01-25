
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0332] relative overflow-hidden border-b border-[#E8DCC4]/5">
      {/* Fondo sutil con la letra L más pequeña y discreta */}
      <div className="absolute -left-10 -top-10 text-[#E8DCC4]/5 serif text-[20rem] font-bold select-none pointer-events-none">
        L
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal active">
          {/* Tagline Minimalista */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-8 bg-[#E8DCC4]/30"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#E8DCC4] opacity-60 font-black">Manifiesto Institucional</span>
            <div className="h-px w-8 bg-[#E8DCC4]/30"></div>
          </div>

          {/* Título Centrado y Elegante */}
          <h3 className="serif text-4xl md:text-6xl font-bold text-[#E8DCC4] leading-tight mb-10">
            Hacia una nueva <span className="italic opacity-80">visión legal</span>
          </h3>
          
          {/* Contenido de Texto Compacto */}
          <div className="space-y-8 text-[#E8DCC4]/80 text-lg md:text-xl font-light leading-relaxed">
            <p>
              Lex Corporativa es un ecosistema de pensamiento crítico diseñado para los desafíos del mañana, transformando la investigación jurídica en una herramienta de impacto real.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-6">
              <div className="group cursor-default border-b border-[#E8DCC4]/10 pb-2">
                <p className="serif text-2xl font-bold text-[#E8DCC4]">Innovación</p>
              </div>
              <div className="group cursor-default border-b border-[#E8DCC4]/10 pb-2">
                <p className="serif text-2xl font-bold text-[#E8DCC4]">Prestigio</p>
              </div>
              <div className="group cursor-default border-b border-[#E8DCC4]/10 pb-2">
                <p className="serif text-2xl font-bold text-[#E8DCC4]">Excelencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
