
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Consultas AI', href: '#ai-consultant' },
    { name: 'Equipo', href: '#team' },
    { name: 'Publicaciones', href: '#publications' },
    { name: 'Entrevistas', href: '#interviews' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1221]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 border-2 border-[#E8DCC4] flex items-center justify-center overflow-hidden">
             <span className="serif text-2xl font-bold text-[#E8DCC4]">LC</span>
          </div>
          <div className="flex flex-col">
            <span className="serif text-lg leading-none font-bold tracking-widest text-[#E8DCC4]">LEX</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">Corporativa</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm uppercase tracking-widest font-medium hover:text-white transition-colors duration-200 border-b border-transparent hover:border-[#E8DCC4]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#E8DCC4]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
