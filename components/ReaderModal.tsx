
import React from 'react';

interface ReaderModalProps {
  url: string | null;
  onClose: () => void;
}

const ReaderModal: React.FC<ReaderModalProps> = ({ url, onClose }) => {
  if (!url || url === '#') return null;

  // Transformar el link de Google Drive para que sea "embebible"
  const getEmbedUrl = (link: string) => {
    if (link.includes('drive.google.com')) {
      return link.replace('/view', '/preview').replace('?usp=drive_link', '').replace('?usp=sharing', '');
    }
    return link;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#040114]/95 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#141C2D] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300 border border-[#E8DCC4]/10">
        <div className="flex justify-between items-center p-4 border-b border-[#E8DCC4]/10 bg-[#0b0332]">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#E8DCC4] font-bold">Lector Lex Corporativa</span>
          </div>
          <button 
            onClick={onClose} 
            className="text-[#E8DCC4] hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Cerrar lector"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-grow bg-white">
          <iframe 
            src={embedUrl} 
            className="w-full h-full border-none"
            allow="autoplay"
            title="PDF Reader"
          ></iframe>
        </div>
        
        <div className="p-3 bg-[#0b0332] text-center">
          <p className="text-[9px] uppercase tracking-widest text-[#E8DCC4]/40">
            Protegido por Lex Corporativa © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReaderModal;
