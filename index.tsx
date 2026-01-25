
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- 1. CONFIGURACIÓN Y SHIMS ---
if (typeof window !== 'undefined') {
  (window as any).process = { 
    env: { 
      API_KEY: (window as any).process?.env?.API_KEY || "" 
    } 
  };
}

// --- 2. TIPOS E INTERFACES ---
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
  pdfUrl: string;
  author: string;
}

// --- 3. CONSTANTES ---
const CONTACT_EMAIL = 'lexcorporativa@gmail.com';

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/lex-corporativa/',
  instagram: 'https://www.instagram.com/lex_corporativa?utm_source=qr&igsh=MTQ2dWU2YW9rdnU2cw==',
  facebook: 'https://www.facebook.com/share/1C2LvPrdqZ/',
  tiktok: 'https://www.tiktok.com/@lex.corporativa?_r=1&_t=ZS-93LXmMV4IXx'
};

const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Edición Especial: Análisis Jurídico Lex Corporativa',
    author: 'Cuerpo Editorial',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Nuestra publicación de lanzamiento donde exploramos los desafíos legales contemporáneos y la visión de nuestra revista.',
    pdfUrl: 'https://drive.google.com/file/d/1aU4IPowSz3_pW3iFRSrYEVYDIRRkLmmo/view?usp=sharing'
  },
  {
    id: '2',
    title: 'Marcos Regulatorios en la Era Digital',
    author: 'Yamiley Solano',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Un análisis crítico sobre cómo la tecnología está redefiniendo el cumplimiento normativo en las organizaciones modernas.',
    pdfUrl: 'https://drive.google.com/file/d/1N4ZzQBJhwge-iYCkzRYsMR6IjFqgN9tW/view?usp=sharing'
  },
  {
    id: '3',
    title: 'Gobernanza y Sostenibilidad Empresarial',
    author: 'Ariana Urruchi',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Estudio sobre el impacto de los criterios ESG y la responsabilidad social en la estrategia jurídica corporativa.',
    pdfUrl: 'https://drive.google.com/file/d/13blfkchn1495OG7zmHnvJIn_do7Mrk4n/view?usp=sharing'
  },
  {
    id: '4',
    title: 'Tendencias en el Derecho Mercantil 2025',
    author: 'Nikold Lopez',
    edition: 'Volumen I - 2025',
    date: 'Marzo 2025',
    coverUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&h=800&auto=format&fit=crop',
    description: 'Exploración de los cambios procesales y sustantivos más relevantes para el ámbito mercantil en el año en curso.',
    pdfUrl: 'https://drive.google.com/file/d/1mrEgy9VBBK9fIOJIro8AGxDMAz1NqeT8/view?usp=sharing'
  }
];

const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Yamiley Mayumi Solano Tinto',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '2',
    name: 'Ariana Urruchi Pariona',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '3',
    name: 'Nikold Lopez Barrera',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  },
  {
    id: '4',
    name: 'Fátima Kamila Sarmiento Flores',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&h=800&auto=format&fit=crop',
    linkedinUrl: SOCIAL_LINKS.linkedin
  }
];

// --- 4. SERVICIOS (GEMINI) ---
const getLegalSummary = async (topic: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres un asistente experto de la revista Lex Corporativa. El usuario pregunta sobre: "${topic}". Proporciona un resumen breve, profesional y elegante sobre este tema legal, mencionando por qué es relevante para nuestra revista. Mantén el tono formal y académico.`,
    });
    return response.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error(error);
    return "Error al conectar con el asistente legal.";
  }
};

// --- 5. COMPONENTES ---

const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 100, className = "" }) => (
  <div className={`relative flex items-center ${className}`} style={{ width: size, height: size }}>
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" stroke="#E8DCC4" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="75" stroke="#E8DCC4" strokeWidth="1" />
      <defs>
        <path id="topTextPath" d="M 30,100 A 70,70 0 0,1 170,100" />
        <path id="bottomTextPath" d="M 170,100 A 70,70 0 0,1 30,100" />
      </defs>
      <text fill="#E8DCC4" className="serif" style={{ fontSize: '18px', fontWeight: 'bold' }}>
        <textPath xlinkHref="#topTextPath" startOffset="50%" textAnchor="middle">LEX CORPORATIVA</textPath>
      </text>
      <text fill="#E8DCC4" className="serif" style={{ fontSize: '16px' }}>
        <textPath xlinkHref="#bottomTextPath" startOffset="50%" textAnchor="middle">REVISTA JURÍDICA</textPath>
      </text>
      <text x="100" y="115" fill="#E8DCC4" textAnchor="middle" className="serif" style={{ fontSize: '70px' }}>LC</text>
    </svg>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) window.scrollTo({ top: elem.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0332]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size={isScrolled ? 50 : 60} />
          <div className="flex flex-col">
            <span className="serif text-lg leading-none font-bold tracking-widest text-[#E8DCC4]">LEX</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-80 text-[#E8DCC4]">Corporativa</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {['Inicio', 'Lecturas', 'Equipo', 'Contacto'].map((name) => (
            <a key={name} href={`#${name.toLowerCase()}`} onClick={(e) => handleLinkClick(e, `#${name.toLowerCase() === 'lecturas' ? 'readings' : name.toLowerCase() === 'contacto' ? 'contact' : name.toLowerCase()}`)} className="text-[11px] uppercase tracking-widest font-medium text-[#E8DCC4] hover:text-white transition-colors border-b border-transparent hover:border-[#E8DCC4]">
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SocialSidebar: React.FC = () => {
  const icons = {
    linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    instagram: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    facebook: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
    tiktok: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.591.214 3.75.606V5.32c-1.027-.308-2.127-.47-3.25-.47-3.472 0-6.286 2.814-6.286 6.286S9.553 17.422 13.025 17.422c3.471 0 6.285-2.814 6.285-6.286V0h3.195c.026.162.04.328.04.5 0 2.485 2.015 4.5 4.5 4.5v3.25c-4.279 0-7.75-3.471-7.75-7.75V11.136c0 5.257-4.279 9.536-9.535 9.536S0 16.393 0 11.136 4.279 1.6 9.535 1.6c1.01 0 1.977.16 2.885.454L12.525.02z"/></svg>
  };

  return (
    <div className="fixed left-6 top-[30%] z-40 hidden lg:flex flex-col items-center space-y-8 animate-fade-in">
      <div className="w-px h-16 bg-gradient-to-t from-[#E8DCC4]/30 to-transparent"></div>
      {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-[#E8DCC4]/30 hover:text-[#80cc66] hover:scale-125 transition-all duration-300" aria-label={name}>
          {icons[name as keyof typeof icons]}
        </a>
      ))}
      <div className="w-px h-16 bg-gradient-to-b from-[#E8DCC4]/30 to-transparent"></div>
    </div>
  );
};

const Hero: React.FC = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0b0332]">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0332] via-[#0b0332]/85 to-transparent z-10"></div>
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" alt="Legal" className="w-full h-full object-cover opacity-15 grayscale" />
    </div>
    <div className="container mx-auto px-6 relative z-20">
      <div className="max-w-5xl reveal active">
        <span className="text-[10px] uppercase tracking-[0.8em] mb-8 block text-[#E8DCC4] opacity-70 font-bold border-l-2 border-[#E8DCC4]/30 pl-4">Excelencia • Rigor • Investigación</span>
        <h1 className="serif text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-[#E8DCC4] mb-10">REPOSITORIO<br /><span className="opacity-80 italic font-normal">DIGITAL</span></h1>
        <p className="text-xl md:text-2xl text-[#E8DCC4]/90 font-light leading-relaxed mb-12 max-w-2xl">Revistas especializadas diseñadas para la <span className="font-bold">vanguardia jurídica corporativa</span>.</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#readings" className="px-12 py-5 bg-[#E8DCC4] text-[#0b0332] font-black tracking-[0.3em] uppercase text-[10px] hover:shadow-2xl transition-all">Acceder al Archivo</a>
          <a href="#team" className="px-10 py-5 border border-[#E8DCC4]/30 text-[#E8DCC4] font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-[#E8DCC4]/5 transition-all">Conocer al Equipo</a>
        </div>
      </div>
    </div>
  </section>
);

const Publications: React.FC<{ onOpenArticle: (url: string) => void }> = ({ onOpenArticle }) => (
  <section id="readings" className="py-24 bg-[#0b0332] text-[#E8DCC4]">
    <div className="container mx-auto px-6">
      <div className="mb-16 border-b border-[#E8DCC4]/10 pb-8 flex flex-col md:flex-row justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#80cc66] font-black mb-4 block">Biblioteca Digital</span>
          <h2 className="serif text-4xl md:text-5xl font-bold">Lecturas Destacadas</h2>
        </div>
        <p className="text-[#E8DCC4]/40 text-sm max-w-xs italic mt-4 md:mt-0">Explora investigaciones académicas de alto impacto.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="group flex flex-col">
            <div className="aspect-[3/4] overflow-hidden bg-[#141C2D] shadow-2xl mb-6 cursor-pointer relative" onClick={() => onOpenArticle(pub.pdfUrl)}>
              <img src={pub.coverUrl} alt={pub.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute top-2 left-2 bg-[#80cc66] text-[#0b0332] text-[8px] font-black px-2 py-1 uppercase tracking-widest">PDF</div>
            </div>
            <h4 className="serif text-xl font-bold mb-2 group-hover:text-[#80cc66] transition-colors line-clamp-2 h-[3.2rem] cursor-pointer" onClick={() => onOpenArticle(pub.pdfUrl)}>{pub.title}</h4>
            <p className="text-[#E8DCC4]/60 text-[10px] uppercase tracking-widest font-bold mb-4">{pub.author}</p>
            <p className="text-[#E8DCC4]/40 text-xs italic mb-6 line-clamp-3">"{pub.description}"</p>
            <button onClick={() => onOpenArticle(pub.pdfUrl)} className="mt-auto w-full py-4 border border-[#80cc66]/30 text-[#80cc66] text-[9px] font-black uppercase tracking-widest hover:bg-[#80cc66] hover:text-[#0b0332] transition-all">Consultar Documento</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team: React.FC = () => (
  <section id="team" className="py-24 bg-[#0b0332]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-[#E8DCC4] mb-4 opacity-50">Liderazgo</h2>
        <h3 className="serif text-4xl md:text-5xl font-bold text-[#E8DCC4]">Equipo Editorial</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((member) => (
          <div key={member.id} className="text-center group">
            <div className="aspect-square mb-6 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-[#E8DCC4] font-bold block mb-2 opacity-50">{member.role}</span>
            <h4 className="serif text-xl font-bold text-[#E8DCC4] mb-2">{member.name}</h4>
            <p className="text-[#E8DCC4]/60 text-xs italic mb-4 line-clamp-2">"{member.bio}"</p>
            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#E8DCC4]/40 hover:text-white text-[9px] uppercase tracking-widest font-bold transition-all">LinkedIn</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LegalAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getLegalSummary(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#040114] border-t border-[#E8DCC4]/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="serif text-3xl font-bold mb-4">Consultor AI Lex Corporativa</h3>
        <p className="text-[#E8DCC4]/60 mb-10 max-w-xl mx-auto">Pregunta a nuestro asistente entrenado en terminología jurídica corporativa.</p>
        <form onSubmit={handleSearch} className="relative mb-12">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ej: Impacto del Compliance..." className="w-full bg-[#141C2D] border border-[#E8DCC4]/10 p-6 pr-20 text-[#E8DCC4] focus:outline-none focus:border-[#E8DCC4] serif italic" />
          <button type="submit" disabled={loading} className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E8DCC4] text-[#0b0332] w-12 h-12 flex items-center justify-center hover:bg-white disabled:opacity-50">
            {loading ? <div className="w-5 h-5 border-2 border-navy border-t-transparent animate-spin rounded-full"></div> : '→'}
          </button>
        </form>
        {response && (
          <div className="bg-[#141C2D]/30 border border-[#E8DCC4]/10 p-8 text-left animate-fade-in">
            <span className="text-[9px] uppercase tracking-widest text-[#80cc66] font-bold block mb-4">Respuesta AI</span>
            <p className="serif text-lg text-[#E8DCC4] whitespace-pre-wrap leading-relaxed">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};

const CTA: React.FC = () => (
  <section className="py-24 bg-[#0b0332] border-t border-[#E8DCC4]/5 text-center">
    <div className="container mx-auto px-6 max-w-3xl">
      <h3 className="serif text-4xl font-bold mb-8">¿Deseas contribuir con tu investigación?</h3>
      <p className="text-[#E8DCC4]/60 mb-12 font-light">Buscamos constantemente nuevas perspectivas legales. Únete a nuestra red académica.</p>
      <a href={`mailto:${CONTACT_EMAIL}`} className="px-12 py-5 border border-[#E8DCC4] text-[#E8DCC4] font-black tracking-[0.3em] uppercase text-[10px] hover:bg-[#E8DCC4] hover:text-[#0b0332] transition-all">Enviar Propuesta</a>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact" className="bg-[#040114] py-24 border-t border-[#E8DCC4]/5 text-[#E8DCC4]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Logo size={70} className="mb-6" />
          <p className="text-[#E8DCC4]/50 max-w-sm text-sm">Defendiendo la excelencia en el pensamiento legal corporativo integral.</p>
        </div>
        <div>
          <h5 className="serif text-xl font-bold mb-6">Navegación</h5>
          <ul className="space-y-3 text-sm text-[#E8DCC4]/50">
            <li><a href="#home" className="hover:text-white">Inicio</a></li>
            <li><a href="#readings" className="hover:text-white">Lecturas</a></li>
            <li><a href="#team" className="hover:text-white">Equipo</a></li>
          </ul>
        </div>
        <div>
          <h5 className="serif text-xl font-bold mb-6">Contacto</h5>
          <p className="text-sm text-[#E8DCC4]/50 mb-4">Lima, Perú.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-[#E8DCC4] font-bold">{CONTACT_EMAIL}</a>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 text-[9px] uppercase tracking-widest text-center opacity-30">
        © 2025 Lex Corporativa. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

const ReaderModal: React.FC<{ url: string | null; onClose: () => void }> = ({ url, onClose }) => {
  if (!url) return null;
  const embedUrl = url.includes('drive.google.com') ? url.replace('/view', '/preview').replace(/\?usp=.*/, '') : url;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#040114]/98 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl h-[90vh] bg-black shadow-2xl flex flex-col border border-white/10 overflow-hidden animate-fade-in">
        <div className="bg-[#0b0332] p-4 flex justify-between items-center border-b border-white/5">
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#E8DCC4]">Visor de Documento</span>
          <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">✕</button>
        </div>
        <iframe src={embedUrl} className="flex-grow w-full border-none" title="Reader" />
      </div>
    </div>
  );
};

// --- 6. APP PRINCIPAL ---
const App: React.FC = () => {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Publications onOpenArticle={setActivePdf} />
      <Team />
      <LegalAI />
      <CTA />
      <Footer />
      <ReaderModal url={activePdf} onClose={() => setActivePdf(null)} />
    </div>
  );
};

// --- 7. RENDER ---
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
