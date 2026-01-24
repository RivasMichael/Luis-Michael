
import React from 'react';
import { INTERVIEWS } from '../constants.tsx';

const Interviews: React.FC = () => {
  return (
    <section id="interviews" className="py-24 bg-[#080226]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#E8DCC4] mb-4">Multimedia</h2>
          <h3 className="serif text-4xl md:text-5xl font-bold mb-6">Entrevistas Exclusivas</h3>
          <div className="h-0.5 w-16 bg-[#E8DCC4] mx-auto"></div>
        </div>

        <div className="space-y-16">
          {INTERVIEWS.map((interview, index) => (
            <div key={interview.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-3/5 relative group cursor-pointer">
                <img 
                  src={interview.thumbnailUrl} 
                  alt={interview.title} 
                  className="w-full h-[400px] object-cover shadow-2xl brightness-75 group-hover:brightness-90 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-[#E8DCC4] flex items-center justify-center bg-[#0b0332]/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-[#E8DCC4]">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8DCC4] font-bold">{interview.date}</span>
                <h4 className="serif text-3xl font-bold">{interview.title}</h4>
                <p className="text-[#E8DCC4] font-medium italic opacity-80">Con {interview.guest}</p>
                <p className="text-[#E8DCC4]/70 leading-relaxed pt-2">{interview.description}</p>
                <div className="pt-4">
                   <button className="px-8 py-3 border border-[#E8DCC4]/40 hover:border-[#E8DCC4] hover:bg-[#E8DCC4] hover:text-[#0b0332] transition-all duration-300 text-xs uppercase tracking-widest font-bold">
                     Leer Entrevista Completa
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

export default Interviews;
