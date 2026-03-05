import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Beliefs from './components/Beliefs';
import Info from './components/Info';
import Scripture from './components/Scripture';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on mount

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div id="beliefs" className="reveal">
        <Beliefs />
      </div>
      <div id="info" className="reveal">
        <Info />
      </div>
      <Scripture />
      <Footer />
    </div>
  );
}

export default App;
