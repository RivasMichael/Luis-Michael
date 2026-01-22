
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0B1221] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1221]"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Legal Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="mb-8 transform transition-transform duration-1000 hover:scale-105">
           <div className="w-48 h-48 border-[6px] border-[#E8DCC4] flex flex-col items-center justify-center relative bg-[#0B1221]">
               <span className="serif text-[100px] leading-none text-[#E8DCC4] -mt-4">L<span className="inline-block -ml-4">c</span></span>
           </div>
        </div>
        
        <h1 className="serif text-5xl md:text-7xl lg:text-8xl mb-4 font-bold tracking-tight text-[#E8DCC4]">
          LEX CORPORATIVA
        </h1>
        <div className="h-1 w-24 bg-[#E8DCC4] mb-6"></div>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl font-light uppercase tracking-[0.2em] opacity-90 mb-10">
          Revista Jurídica de Excelencia
        </p>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a 
            href="#publications" 
            className="px-10 py-4 bg-[#E8DCC4] text-[#0B1221] font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300"
          >
            Ver Publicaciones
          </a>
          <a 
            href="#about" 
            className="px-10 py-4 border border-[#E8DCC4] text-[#E8DCC4] font-bold tracking-widest uppercase text-sm hover:bg-[#E8DCC4] hover:text-[#0B1221] transition-all duration-300"
          >
            Sobre Nosotros
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#E8DCC4]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
