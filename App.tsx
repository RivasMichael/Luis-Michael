
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Team from './components/Team.tsx';
import Publications from './components/Publications.tsx';
import Interviews from './components/Interviews.tsx';
import LegalAI from './components/LegalAI.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0332]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Publications />
        <Interviews />
        <LegalAI />
      </main>
      <Footer />
    </div>
  );
};

export default App;
