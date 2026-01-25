
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Team from './components/Team.tsx';
import Publications from './components/Publications.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';
import ReaderModal from './components/ReaderModal.tsx';

const App: React.FC = () => {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const handleOpenArticle = (url: string) => {
    setActivePdf(url);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseArticle = () => {
    setActivePdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-[#0b0332]">
      <Navbar />
      <main>
        {/* 2. Hero: Propuesta de valor y definición */}
        <Hero />
        
        {/* 3. Lecturas: El corazón del sitio (Recursos) */}
        <Publications onOpenArticle={handleOpenArticle} />
        
        {/* 4. Equipo: Quiénes están detrás */}
        <Team />
        
        {/* 5. Sección Final: CTA */}
        <CTA />
      </main>
      
      {/* 6. Footer */}
      <Footer />
      
      <ReaderModal url={activePdf} onClose={handleCloseArticle} />
    </div>
  );
};

export default App;
