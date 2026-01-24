
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Publications from './components/Publications';
import Interviews from './components/Interviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Publications />
        <Interviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;
