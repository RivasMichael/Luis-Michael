
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0b0332]">
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0332] via-[#0b0332]/85 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Academia"
          className="w-full h-full object-cover opacity-15 grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl">
          <div className="reveal active flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.8em] mb-8 block text-[#E8DCC4] opacity-70 font-bold border-l-2 border-[#E8DCC4]/30 pl-4">
              Excelencia • Rigor • Investigación
            </span>
            
            <h1 className="serif text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter text-[#E8DCC4] mb-10">
              REPOSITORIO<br />
              <span className="opacity-80 italic font-normal">DIGITAL</span>
            </h1>
            
            <div className="max-w-2xl space-y-6 mb-14">
              <p className="text-lg md:text-2xl text-[#E8DCC4]/90 font-light leading-relaxed">
                Revistas especializadas y documentos académicos diseñados para la <span className="font-bold">vanguardia jurídica corporativa</span>.
              </p>
              <p className="text-sm md:text-base text-[#E8DCC4]/60 tracking-wide uppercase font-medium">
                Un espacio de consulta para estudiantes, investigadores y profesionales del derecho.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <a 
                href="#readings" 
                className="group relative px-12 py-5 overflow-hidden bg-[#E8DCC4] text-[#0b0332] font-black tracking-[0.3em] uppercase text-[10px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(232,220,196,0.2)]"
              >
                <span className="relative z-10">Acceder al Archivo</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <a 
                href="#team" 
                className="px-10 py-5 border border-[#E8DCC4]/30 text-[#E8DCC4] font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-[#E8DCC4]/5 transition-all duration-300"
              >
                Conocer al Consejo
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll visual */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center opacity-30">
        <span className="text-[8px] uppercase tracking-[0.4em] mb-4">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-[#E8DCC4] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
