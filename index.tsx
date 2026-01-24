
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- TIPOS ---
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
}

interface Publication {
  id: string;
  title: string;
  edition: string;
  date: string;
  coverUrl: string;
  description: string;
}

interface Interview {
  id: string;
  guest: string;
  title: string;
  date: string;
  thumbnailUrl: string;
  description: string;
}

// --- CONSTANTES ---
const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Valdés Alejandro',
    role: 'Director Editorial',
    bio: 'Especialista en Derecho Corporativo con enfoque en estrategia legal internacional.',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Carrillo Sofía',
    role: 'Coordinadora de Investigaciones',
    bio: 'Experta en Litigio Mercantil y supervisión de rigor científico editorial.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Mendoza Ricardo',
    role: 'Jefe de Redacción',
    bio: 'Periodista jurídico especializado en análisis normativo y tendencias globales.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: 'https://linkedin.com'
  }
];

const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Transformación Digital en el Derecho',
    edition: 'Edición Otoño 2024',
    date: 'Octubre 2024',
    coverUrl: 'https://picsum.photos/seed/mag1/600/800',
    description: 'Un análisis profundo sobre cómo la IA está cambiando la práctica legal contemporánea.'
  },
  {
    id: '2',
    title: 'Jurisprudencia Mercantil Moderna',
    edition: 'Edición Verano 2024',
    date: 'Julio 2024',
    coverUrl: 'https://picsum.photos/seed/mag2/600/800',
    description: 'Recopilación de los fallos más significativos del último semestre en materia comercial.'
  },
  {
    id: '3',
    title: 'Derechos Humanos y Empresa',
    edition: 'Edición Primavera 2024',
    date: 'Abril 2024',
    coverUrl: 'https://picsum.photos/seed/mag3/600/800',
    description: 'Explorando la responsabilidad social corporativa desde una perspectiva jurídica integral.'
  }
];

const INTERVIEWS: Interview[] = [
  {
    id: '1',
    guest: 'Ministro Roberto Sánchez',
    title: 'El Futuro de la Justicia Constitucional',
    date: '15 Nov, 2024',
    thumbnailUrl: 'https://picsum.photos/seed/int1/800/450',
    description: 'Una conversación exclusiva sobre las reformas estructurales al sistema judicial.'
  },
  {
    id: '2',
    guest: 'Dra. Elena Martínez',
    title: 'Propiedad Intelectual en la Era del Software',
    date: '02 Nov, 2024',
    thumbnailUrl: 'https://picsum.photos/seed/int2/800/450',
    description: 'Análisis de los retos que presentan las nuevas tecnologías para el derecho de autor.'
  }
];

// --- COMPONENTES ---

const Logo = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" stroke="#E8DCC4" strokeWidth="2" />
    <circle cx="100" cy="100" r="75" stroke="#E8DCC4" strokeWidth="1" />
    <text x="100" y="115" fill="#E8DCC4" textAnchor="middle" className="serif" style={{ fontSize: '75px' }}>LC</text>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Inicio', 'Nosotros', 'Equipo', 'Publicaciones', 'Entrevistas', 'Contacto'];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b0332]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo size={isScrolled ? 40 : 50} />
          <div className="flex flex-col">
            <span className="serif text-xl font-bold tracking-widest text-[#E8DCC4]">LEX</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 text-[#E8DCC4]">Corporativa</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[11px] uppercase tracking-widest text-[#E8DCC4] hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center px-6">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover opacity-20" alt="background" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0332]/50 to-[#0b0332]"></div>
    </div>
    <div className="relative z-10 fade-in">
      <h1 className="serif text-6xl md:text-8xl font-bold mb-6 text-[#E8DCC4]">LEX CORPORATIVA</h1>
      <div className="h-1 w-24 bg-[#E8DCC4] mx-auto mb-8"></div>
      <p className="text-xl md:text-2xl uppercase tracking-[0.4em] mb-12 opacity-80">Revista Jurídica de Excelencia</p>
      <div className="flex flex-col md:row space-y-4 md:space-y-0 md:space-x-6 justify-center">
        <a href="#publicaciones" className="px-10 py-4 bg-[#E8DCC4] text-[#0b0332] font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">Explorar Ediciones</a>
        <a href="#nosotros" className="px-10 py-4 border border-[#E8DCC4] text-[#E8DCC4] font-bold uppercase text-xs tracking-widest hover:bg-[#E8DCC4] hover:text-[#0b0332] transition-all">Nuestra Misión</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="nosotros" className="py-32 bg-[#0b0332]">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=80" className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" alt="library" />
        <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#E8DCC4]/20 -z-10"></div>
      </div>
      <div className="space-y-8">
        <h2 className="text-sm uppercase tracking-[0.4em] text-[#E8DCC4]">Sobre Nosotros</h2>
        <h3 className="serif text-4xl md:text-5xl font-bold">Liderazgo en el Pensamiento Legal</h3>
        <p className="text-[#E8DCC4]/70 leading-relaxed text-lg">Lex Corporativa nace de la necesidad de integrar la profundidad académica con la agilidad del mundo corporativo contemporáneo. Somos el punto de encuentro de los juristas más influyentes.</p>
        <div className="grid grid-cols-2 gap-8 pt-8">
          <div><h4 className="serif text-4xl font-bold">20+</h4><p className="text-[10px] uppercase tracking-widest opacity-50">Ediciones</p></div>
          <div><h4 className="serif text-4xl font-bold">100+</h4><p className="text-[10px] uppercase tracking-widest opacity-50">Autores</p></div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="equipo" className="py-32 bg-[#0b0332] border-t border-[#E8DCC4]/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-sm uppercase tracking-[0.4em] mb-4 opacity-60">Liderazgo</h2>
        <h3 className="serif text-5xl font-bold">Cuerpo Editorial</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {TEAM.map(member => (
          <div key={member.id} className="text-center group">
            <div className="aspect-square mb-8 overflow-hidden bg-white">
              <img src={member.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E8DCC4] opacity-50 mb-2 block">{member.role}</span>
            <h4 className="serif text-2xl font-bold mb-4">{member.name}</h4>
            <p className="text-sm italic opacity-70 mb-6">{member.bio}</p>
            <a href={member.linkedinUrl} className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-4">LinkedIn Profile</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Publications = () => (
  <section id="publicaciones" className="py-32 bg-[#0b0332]">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] mb-4 opacity-60">Biblioteca</h2>
          <h3 className="serif text-5xl font-bold">Publicaciones</h3>
        </div>
        <button className="text-[10px] uppercase tracking-widest border-b border-[#E8DCC4] pb-2">Archivo Completo</button>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {PUBLICATIONS.map(pub => (
          <div key={pub.id} className="bg-[#141C2D] p-6 group cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
            <div className="aspect-[3/4] overflow-hidden mb-6">
              <img src={pub.coverUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={pub.title} />
            </div>
            <h4 className="serif text-2xl font-bold mb-4 group-hover:text-white transition-colors">{pub.title}</h4>
            <p className="text-sm opacity-60 mb-6 line-clamp-3">{pub.description}</p>
            <div className="flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase tracking-widest">{pub.edition}</span>
              <span className="text-[10px] uppercase tracking-widest">{pub.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" className="bg-[#040114] py-20 border-t border-[#E8DCC4]/5">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center mb-10"><Logo size={80} /></div>
      <h3 className="serif text-3xl font-bold mb-8 tracking-widest">LEX CORPORATIVA</h3>
      <div className="flex flex-wrap justify-center gap-10 mb-12 text-[11px] uppercase tracking-widest opacity-60">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#publicaciones">Revistas</a>
        <a href="#equipo">Equipo</a>
        <a href="mailto:redaccion@lexcorporativa.com">redaccion@lexcorporativa.com</a>
      </div>
      <p className="text-[10px] uppercase tracking-[0.4em] opacity-30">© 2025 Lex Corporativa. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Team />
    <Publications />
    <Footer />
  </div>
);

// --- RENDER ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
