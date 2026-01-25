
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#080226] border-t border-[#E8DCC4]/5 relative overflow-hidden">
      {/* Círculo decorativo de fondo */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#E8DCC4]/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="serif text-3xl md:text-5xl font-bold text-[#E8DCC4] mb-8 leading-tight">
            ¿Deseas contribuir con tu investigación en nuestro repositorio?
          </h3>
          <p className="text-[#E8DCC4]/60 text-lg mb-12 max-w-2xl mx-auto font-light">
            Buscamos constantemente nuevas perspectivas legales y análisis corporativos de alto nivel. Únete a nuestra red de autores académicos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:lexcorporativa@gmail.com"
              className="px-12 py-5 bg-transparent border border-[#E8DCC4] text-[#E8DCC4] font-black tracking-[0.3em] uppercase text-[10px] hover:bg-[#E8DCC4] hover:text-[#0b0332] transition-all duration-500"
            >
              Enviar Propuesta
            </a>
            <a 
              href="#readings"
              className="text-[#E8DCC4] text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#E8DCC4]/30 pb-1 hover:border-[#E8DCC4] transition-all"
            >
              Ver lineamientos editoriales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
