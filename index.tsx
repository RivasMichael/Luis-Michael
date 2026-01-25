
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- CONFIGURACIÓN Y DATOS ---
const CONTACT_EMAIL = 'lexcorporativa@gmail.com';
const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/lex-corporativa/',
  instagram: 'https://www.instagram.com/lex_corporativa?utm_source=qr&igsh=MTQ2dWU2YW9rdnU2cw==',
  facebook: 'https://www.facebook.com/share/1C2LvPrdqZ/',
  tiktok: 'https://www.tiktok.com/@lex.corporativa?_r=1&_t=ZS-93LXmMV4IXx'
};

const PUBLICATIONS = [
  {
    id: '1',
    title: 'Reestructuración organizacional de la SBS en 2025: análisis de eficiencia y necesariedad.',
    author: 'Rania Esperanza Vásquez Soriano',
    edition: 'Derecho Bancario y Financiero',
    date: '19 ago 2025',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Análisis crítico sobre los cambios estructurales en la Superintendencia de Banca, Seguros y AFP.',
    pdfUrl: 'https://drive.google.com/file/d/1aU4IPowSz3_pW3iFRSrYEVYDIRRkLmmo/view'
  },
  {
    id: '2',
    title: '¿El plazo del artículo 1429 del Código Civil es susceptible de ser modificado para resolver el contrato?',
    author: 'Ariana Soleil Urruchi Pariona',
    edition: 'Derecho Contractual',
    date: '28 jul 2025',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Estudio sobre la autonomía de la voluntad frente a los plazos legales de resolución contractual.',
    pdfUrl: 'https://drive.google.com/file/d/1N4ZzQBJhwge-iYCkzRYsMR6IjFqgN9tW/view'
  },
  {
    id: '3',
    title: 'Multipropiedad de Clubes en el Fútbol: Retos Regulatorios y Soluciones de Gobernanza.',
    author: 'Sebastian Mauricio Dávila González',
    edition: 'Derecho Deportivo',
    date: '26 ago 2025',
    coverUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Análisis de los desafíos legales y administrativos de la multipropiedad en el deporte rey.',
    pdfUrl: 'https://drive.google.com/file/d/13blfkchn1495OG7zmHnvJIn_do7Mrk4n/view'
  },
  {
    id: '4',
    title: 'Revocación por ingratitud: ¿Excepción moral o regla funcional en Derecho Civil peruano?',
    author: 'Yamiley Mayumi Solano Tinto',
    edition: 'Derecho Civil / Contratos',
    date: '14 jul 2025',
    coverUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&h=800&q=80',
    description: 'Evaluación de la figura de la ingratitud como causal de revocación en el marco jurídico civil nacional.',
    pdfUrl: 'https://drive.google.com/file/d/1mrEgy9VBBK9fIOJIro8AGxDMAz1NqeT8/view'
  }
];

const TEAM = [
  {
    id: '1',
    name: 'Yamiley Mayumi Solano Tinto',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=800&q=80'
  },
  {
    id: '2',
    name: 'Ariana Urruchi Pariona',
    role: 'Fundadora',
    bio: 'Impulsa la creación y desarrollo de Lex Corporativa como un espacio de investigación, análisis y difusión del pensamiento jurídico estudiantil.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=800&q=80'
  },
  {
    id: '3',
    name: 'Nikold Lopez Barrera',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=800&q=80'
  },
  {
    id: '4',
    name: 'Fátima Kamila Sarmiento Flores',
    role: 'Área de Difusión',
    bio: 'Encargada de la promoción institucional de Lex Corporativa, la difusión del contenido editorial y el posicionamiento de la revista en espacios académicos y digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&h=800&q=80'
  }
];

// --- COMPONENTES ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#05021a]/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="w-12 h-12 border border-[#E8DCC4] rounded-full flex items-center justify-center font-serif font-bold text-[#E8DCC4]">LC</div>
          <div className="flex flex-col">
            <span className="serif text-xl font-bold tracking-widest text-[#E8DCC4]">LEX</span>
            <span className="text-[8px] tracking-[0.4em] uppercase opacity-60 text-[#E8DCC4]">Corporativa</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] uppercase font-bold tracking-[0.3em] text-[#E8DCC4]">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#archivo" className="hover:text-white transition-colors">Archivo</a>
          <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

const ReaderModal = ({ url, onClose }: { url: string | null, onClose: () => void }) => {
  if (!url) return null;
  const embedUrl = url.includes('drive.google.com') ? url.replace('/view', '/preview') : url;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#05021a]/98 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl h-[90vh] bg-black shadow-2xl flex flex-col border border-white/10 overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-[#0b0332] p-4 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#80cc66] rounded-full animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#E8DCC4]">Lector Digital</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-[#80cc66] transition-colors">Cerrar ✕</button>
        </div>
        <iframe src={embedUrl} className="flex-grow w-full border-none" title="PDF Reader" />
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#05021a]">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#05021a] via-[#05021a]/80 to-transparent z-10"></div>
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" alt="Legal Background" className="w-full h-full object-cover opacity-10 grayscale" />
    </div>
    <div className="container mx-auto px-6 relative z-20">
      <div className="max-w-4xl">
        <span className="text-[10px] uppercase tracking-[1em] mb-8 block text-[#80cc66] font-black">Investigación • Rigor • Excelencia</span>
        <h1 className="serif text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-[#E8DCC4] mb-10 uppercase">
          REPOSITORIO<br /><span className="opacity-60 italic font-light">ACADÉMICO</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#E8DCC4]/80 font-light leading-relaxed mb-12 max-w-2xl">
          Plataforma de difusión del pensamiento jurídico corporativo impulsada por la nueva generación de investigadores.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#archivo" className="px-12 py-5 bg-[#E8DCC4] text-[#05021a] font-black tracking-[0.3em] uppercase text-[10px] hover:shadow-[0_0_40px_rgba(232,220,196,0.2)] transition-all text-center">Explorar Lecturas</a>
          <a href="#equipo" className="px-10 py-5 border border-[#E8DCC4]/30 text-[#E8DCC4] font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-white/5 transition-all text-center">Consejo Editorial</a>
        </div>
      </div>
    </div>
  </section>
);

const Publications = ({ onOpen }: { onOpen: (url: string) => void }) => (
  <section id="archivo" className="py-32 bg-[#05021a]">
    <div className="container mx-auto px-6">
      <div className="mb-20 border-b border-[#E8DCC4]/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="serif text-5xl font-bold text-[#E8DCC4]">El Archivo</h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#80cc66] font-black mt-4">Volúmenes Seleccionados</p>
        </div>
        <div className="flex gap-6">
          {Object.entries(SOCIAL_LINKS).slice(0, 2).map(([name, url]) => (
            <a key={name} href={url} target="_blank" className="text-[#E8DCC4]/40 hover:text-[#80cc66] text-[9px] uppercase tracking-widest font-bold transition-colors">{name}</a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="group flex flex-col">
            <div className="aspect-[3/4] overflow-hidden bg-slate-900 mb-8 cursor-pointer relative shadow-2xl" onClick={() => onOpen(pub.pdfUrl)}>
              <img src={pub.coverUrl} alt={pub.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-[#80cc66] text-black text-[8px] font-black px-3 py-1 uppercase tracking-widest">{pub.edition}</div>
            </div>
            <h3 className="serif text-lg font-bold mb-3 group-hover:text-[#80cc66] transition-colors leading-tight cursor-pointer line-clamp-2" onClick={() => onOpen(pub.pdfUrl)}>{pub.title}</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#E8DCC4]/60 font-bold mb-1">{pub.author}</p>
            <p className="text-[#80cc66] text-[9px] font-black uppercase tracking-widest mb-6 italic">{pub.date}</p>
            <button onClick={() => onOpen(pub.pdfUrl)} className="mt-auto py-4 border border-[#E8DCC4]/20 text-[#E8DCC4] text-[9px] font-black uppercase tracking-widest hover:bg-[#E8DCC4] hover:text-[#05021a] transition-all">Leer Documento</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="equipo" className="py-32 bg-[#05021a]/50 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#80cc66] mb-4 font-black">Liderazgo Institucional</h2>
        <h3 className="serif text-4xl font-bold text-[#E8DCC4]">Cuerpo Editorial</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {TEAM.map((member) => (
          <div key={member.id} className="text-center group">
            <div className="aspect-square mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#80cc66] font-bold block mb-3">{member.role}</span>
            <h4 className="serif text-xl font-bold text-[#E8DCC4] mb-4 group-hover:text-white transition-colors">{member.name}</h4>
            <p className="text-[#E8DCC4]/50 text-[11px] italic leading-relaxed px-4 line-clamp-4">"{member.bio}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" className="bg-black py-24 text-[#E8DCC4] border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 mb-20">
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-10 h-10 border border-[#E8DCC4]/30 rounded-full flex items-center justify-center font-serif text-[#E8DCC4]/50">LC</div>
            <span className="serif text-2xl font-bold tracking-widest">LEX CORPORATIVA</span>
          </div>
          <p className="text-[#E8DCC4]/40 max-w-sm text-xs leading-relaxed uppercase tracking-widest font-light">Defendiendo la excelencia en el pensamiento legal corporativo integral a través de la investigación rigurosa.</p>
          <div className="flex gap-8 mt-12">
            {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
              <a key={name} href={url} target="_blank" className="text-[#E8DCC4]/30 hover:text-[#80cc66] text-[10px] uppercase font-bold tracking-widest transition-colors">{name}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-end">
          <h5 className="serif text-3xl font-bold mb-6">Contacto Institucional</h5>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl md:text-3xl font-light hover:text-[#80cc66] transition-colors border-b border-[#80cc66]/30 pb-2">{CONTACT_EMAIL}</a>
          <p className="mt-8 text-[9px] uppercase tracking-[0.5em] opacity-30">Lima, Perú • Repositorio Digital © 2025</p>
        </div>
      </div>
    </div>
  </footer>
);

// --- APP PRINCIPAL ---
const App = () => {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#05021a] text-[#E8DCC4] selection:bg-[#80cc66] selection:text-black">
      <Navbar />
      <Hero />
      <Publications onOpen={setActivePdf} />
      <Team />
      <Footer />
      <ReaderModal url={activePdf} onClose={() => setActivePdf(null)} />
    </div>
  );
};

// --- RENDER ---
const root = document.getElementById('root');
if (root) ReactDOM.createRoot(root).render(<App />);
