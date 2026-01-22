
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1221]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#E8DCC4]/20 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Library" 
              className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#E8DCC4] mb-4">Nuestra Identidad</h2>
              <h3 className="serif text-4xl md:text-5xl font-bold mb-6">Excelencia en el Pensamiento Jurídico</h3>
              <div className="h-0.5 w-16 bg-[#E8DCC4]"></div>
            </div>
            
            <p className="text-lg leading-relaxed text-[#E8DCC4]/80">
              Lex Corporativa es un espacio dedicado a la difusión de la cultura jurídica. 
              Nuestra misión es tender puentes entre la academia y la práctica profesional, 
              proporcionando análisis profundos, entrevistas con referentes del sector y 
              publicaciones periódicas que marcan el pulso del derecho contemporáneo.
            </p>
            
            <p className="text-lg leading-relaxed text-[#E8DCC4]/80">
              A través de nuestra revista y plataformas digitales, buscamos fomentar un debate 
              jurídico riguroso y accesible, garantizando que el conocimiento legal llegue 
              a quienes lo necesitan para transformar su entorno corporativo y social.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E8DCC4]/10">
              <div>
                <h4 className="serif text-3xl font-bold mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Ediciones Publicadas</p>
              </div>
              <div>
                <h4 className="serif text-3xl font-bold mb-2">50+</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Expertos Invitados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
