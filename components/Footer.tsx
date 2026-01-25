
import React from 'react';
import Logo from './Logo.tsx';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../constants.tsx';

const Footer: React.FC = () => {
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const icons = {
    linkedin: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    instagram: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    facebook: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
    tiktok: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.591.214 3.75.606V5.32c-1.027-.308-2.127-.47-3.25-.47-3.472 0-6.286 2.814-6.286 6.286S9.553 17.422 13.025 17.422c3.471 0 6.285-2.814 6.285-6.286V0h3.195c.026.162.04.328.04.5 0 2.485 2.015 4.5 4.5 4.5v3.25c-4.279 0-7.75-3.471-7.75-7.75V11.136c0 5.257-4.279 9.536-9.535 9.536S0 16.393 0 11.136 4.279 1.6 9.535 1.6c1.01 0 1.977.16 2.885.454L12.525.02z"/></svg>
  };

  return (
    <footer id="contact" className="bg-[#040114] pt-24 pb-12 border-t border-[#E8DCC4]/5 text-[#E8DCC4]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-6 mb-8">
              <Logo size={80} />
              <div className="flex flex-col">
                <span className="serif text-2xl font-bold tracking-widest">LEX CORPORATIVA</span>
                <span className="text-xs tracking-[0.4em] uppercase opacity-60">Revista Jurídica</span>
              </div>
            </div>
            <p className="text-[#E8DCC4]/60 max-w-sm leading-relaxed mb-10">
              Defendiendo la excelencia en el pensamiento legal desde una perspectiva corporativa integral. 
              Únete a nuestra comunidad de lectores y autores.
            </p>
            
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#80cc66] font-black block mb-4">Conéctate con nosotros</span>
              <div className="flex space-x-8">
                {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                  <a 
                    key={name} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col items-center space-y-2 text-[#E8DCC4]/40 hover:text-[#E8DCC4] transition-all duration-300"
                  >
                    <div className="p-3 rounded-full border border-[#E8DCC4]/10 group-hover:border-[#E8DCC4]/30 group-hover:bg-[#E8DCC4]/5 transition-all">
                      {icons[name as keyof typeof icons]}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="serif text-xl font-bold mb-6">Navegación</h5>
            <ul className="space-y-4">
              <li><a href="#home" onClick={(e) => handleInternalLink(e, 'home')} className="text-sm text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors">Inicio</a></li>
              <li><a href="#readings" onClick={(e) => handleInternalLink(e, 'readings')} className="text-sm text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors">Lecturas</a></li>
              <li><a href="#team" onClick={(e) => handleInternalLink(e, 'team')} className="text-sm text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors">Equipo</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="serif text-xl font-bold mb-6">Contacto</h5>
            <ul className="space-y-4">
              <li className="text-sm text-[#E8DCC4]/60">
                <span className="block text-[10px] uppercase tracking-widest text-[#E8DCC4]/40 mb-1">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
              <li className="text-sm text-[#E8DCC4]/60">
                <span className="block text-[10px] uppercase tracking-widest text-[#E8DCC4]/40 mb-1">Oficina</span>
                Lima, Perú.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E8DCC4]/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.3em] text-[#E8DCC4]/30">
          <p>© 2025 Lex Corporativa. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#E8DCC4]">Privacidad</a>
            <a href="#" className="hover:text-[#E8DCC4]">Términos</a>
            <a href="#" className="hover:text-[#E8DCC4]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
