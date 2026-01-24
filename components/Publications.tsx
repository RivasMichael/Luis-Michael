
import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-[#0b0332]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#E8DCC4] mb-4">Biblioteca</h2>
            <h3 className="serif text-4xl md:text-5xl font-bold">Revistas Recientes</h3>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b border-[#E8DCC4] pb-1 hover:text-white hover:border-white transition-all">
            Ver Archivo Completo
          </button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-[#141C2D] p-4 flex flex-col group cursor-pointer hover:bg-[#1A253A] transition-colors duration-300 shadow-xl">
              <div className="relative mb-6 aspect-[3/4] overflow-hidden">
                <img 
                  src={pub.coverUrl} 
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#E8DCC4] text-[#0b0332] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {pub.edition}
                </div>
              </div>
              <h4 className="serif text-2xl font-bold mb-3 line-clamp-2 min-h-[4rem] group-hover:text-white">{pub.title}</h4>
              <p className="text-[#E8DCC4]/60 text-sm mb-6 flex-grow">{pub.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] uppercase tracking-widest opacity-50">{pub.date}</span>
                <button className="bg-[#E8DCC4] w-10 h-10 flex items-center justify-center text-[#0b0332] hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
