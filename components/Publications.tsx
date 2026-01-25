
import React from 'react';
import { PUBLICATIONS } from '../constants.tsx';

interface PublicationsProps {
  onOpenArticle?: (url: string) => void;
}

const Publications: React.FC<PublicationsProps> = ({ onOpenArticle }) => {
  return (
    <section id="readings" className="py-24 bg-[#0b0332] text-[#E8DCC4]">
      <div className="container mx-auto px-6">
        {/* Header jerárquico */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8DCC4]/10 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#80cc66] font-extrabold mb-4 block">
              Biblioteca Digital
            </span>
            <h2 className="serif text-4xl md:text-5xl font-bold text-[#E8DCC4] tracking-tight">
              Lecturas Destacadas
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#E8DCC4]/50 text-sm max-w-xs font-medium italic">
            Explora las últimas investigaciones y volúmenes publicados por nuestro cuerpo editorial.
          </p>
        </div>

        {/* Grid de Lecturas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="flex flex-col group">
              {/* Cover Area */}
              <div 
                className="relative mb-6 cursor-pointer" 
                onClick={() => onOpenArticle && onOpenArticle(pub.pdfUrl)}
              >
                <div className="absolute -top-3 left-3 z-10">
                  <span className="bg-[#80cc66] text-[#0b0332] text-[9px] font-black px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-xl">
                    PDF Académico
                  </span>
                </div>
                
                <div className="aspect-[3/4.2] overflow-hidden bg-[#141C2D] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 border border-[#E8DCC4]/5">
                  <img 
                    src={pub.coverUrl} 
                    alt={pub.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
              </div>

              {/* Info Area */}
              <div className="flex flex-col flex-grow">
                <h4 
                  className="serif text-xl font-bold text-[#E8DCC4] leading-snug mb-3 group-hover:text-[#80cc66] transition-colors cursor-pointer line-clamp-2 h-[3.2rem]"
                  onClick={() => onOpenArticle && onOpenArticle(pub.pdfUrl)}
                >
                  {pub.title}
                </h4>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-[#E8DCC4]/30"></div>
                  <p className="text-[#E8DCC4]/70 text-[11px] uppercase tracking-wider font-bold">
                    {pub.author}
                  </p>
                </div>

                <p className="text-[#E8DCC4]/40 text-xs leading-relaxed italic mb-8 line-clamp-3">
                  "{pub.description}"
                </p>

                <div className="mt-auto">
                  <button 
                    onClick={() => onOpenArticle && onOpenArticle(pub.pdfUrl)}
                    className="w-full bg-transparent border border-[#80cc66]/30 hover:bg-[#80cc66] hover:text-[#0b0332] text-[#80cc66] text-[10px] font-black py-4 px-6 uppercase tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]"
                  >
                    Consultar Documento
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
