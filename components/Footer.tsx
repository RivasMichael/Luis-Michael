
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050A14] pt-24 pb-12 border-t border-[#E8DCC4]/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-16 h-16 border-2 border-[#E8DCC4] flex items-center justify-center overflow-hidden">
                <span className="serif text-3xl font-bold text-[#E8DCC4]">LC</span>
              </div>
              <div className="flex flex-col">
                <span className="serif text-2xl font-bold tracking-widest text-[#E8DCC4]">LEX CORPORATIVA</span>
                <span className="text-xs tracking-[0.4em] uppercase opacity-60">Revista Jurídica</span>
              </div>
            </div>
            <p className="text-[#E8DCC4]/60 max-w-sm leading-relaxed mb-8">
              Defendiendo la excelencia en el pensamiento legal desde una perspectiva corporativa integral. 
              Únete a nuestra comunidad de lectores y autores.
            </p>
            <div className="flex space-x-6">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-[#E8DCC4]/40 hover:text-[#E8DCC4] transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="serif text-xl font-bold mb-6 text-[#E8DCC4]">Navegación</h5>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Revistas', 'Entrevistas', 'Autores'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#E8DCC4]/60 hover:text-[#E8DCC4] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="serif text-xl font-bold mb-6 text-[#E8DCC4]">Contacto</h5>
            <ul className="space-y-4">
              <li className="text-sm text-[#E8DCC4]/60">
                <span className="block text-[10px] uppercase tracking-widest text-[#E8DCC4]/40 mb-1">Email</span>
                redaccion@lexcorporativa.com
              </li>
              <li className="text-sm text-[#E8DCC4]/60">
                <span className="block text-[10px] uppercase tracking-widest text-[#E8DCC4]/40 mb-1">Oficina</span>
                Av. de la Constitución 140, Piso 12, Ciudad Central.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E8DCC4]/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.3em] text-[#E8DCC4]/30">
          <p>© 2024 Lex Corporativa. Todos los derechos reservados.</p>
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
