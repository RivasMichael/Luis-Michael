
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const LegalAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    const result = await geminiService.getLegalSummary(query);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-[#0B1221] border-t border-[#E8DCC4]/10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-12">
          <div className="inline-block p-2 rounded-full bg-[#E8DCC4]/10 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#E8DCC4]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <h3 className="serif text-3xl font-bold mb-4">Consultor AI Lex Corporativa</h3>
          <p className="text-[#E8DCC4]/70 max-w-2xl mx-auto">
            ¿Buscas un concepto legal rápido o un resumen académico? Pregunta a nuestro asistente entrenado en terminología jurídica corporativa.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mb-10 relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej: ¿Qué impacto tiene el Compliance en las PYMES?"
            className="w-full bg-[#141C2D] border border-[#E8DCC4]/20 p-6 pr-20 text-[#E8DCC4] focus:outline-none focus:border-[#E8DCC4] transition-all serif italic text-lg shadow-2xl"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E8DCC4] text-[#0B1221] w-12 h-12 flex items-center justify-center hover:bg-white transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-900 border-t-transparent"></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            )}
          </button>
        </form>

        {response && (
          <div className="bg-[#141C2D]/50 backdrop-blur-sm border border-[#E8DCC4]/10 p-8 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#E8DCC4] mb-4 font-bold border-b border-[#E8DCC4]/10 pb-2 flex items-center">
               Respuesta Generada por AI
               <span className="ml-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            </h4>
            <p className="text-[#E8DCC4] leading-relaxed serif text-lg whitespace-pre-wrap">
              {response}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LegalAI;
