import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href={import.meta.env.BASE_URL} className="nav-logo" style={{ cursor: 'pointer' }}>
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="ICP Logo" className="nav-logo-img" />
          <span className="logo-text">ICP</span>
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.home}</a>
          <a href="#beliefs" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.beliefs}</a>
          <a href="#info" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.info}</a>
        </div>

        <div className="nav-right">
          {/* Single language toggle — always visible */}
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'en' ? 'lang-option active' : 'lang-option'}>English</span>
            <span className="lang-divider">/</span>
            <span className={lang === 'rw' ? 'lang-option active' : 'lang-option'}>Kinyarwanda</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: var(--transition);
        }

        .fixed-nav.scrolled {
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-logo-img {
          height: 40px;
          width: 40px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid var(--border);
        }

        .logo-text {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--primary);
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Language toggle */
        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: 2px solid var(--border);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          transition: var(--transition);
          white-space: nowrap;
        }

        .lang-toggle:hover {
          border-color: var(--primary);
          background: rgba(13, 103, 178, 0.04);
        }

        .lang-option {
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .lang-option.active {
          color: var(--primary);
          font-weight: 700;
        }

        .lang-divider {
          color: var(--border);
          font-weight: 400;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          /* On mobile the lang toggle shrinks to just initials */
          .lang-toggle {
            font-size: 0.72rem;
            padding: 0.3rem 0.7rem;
          }

          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            flex-direction: column;
            justify-content: center;
            padding: 2rem;
            gap: 2rem;
            z-index: 1001;
            transform: translateX(100%);
            transition: var(--transition);
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .mobile-menu-btn {
            display: block;
            position: relative;
            z-index: 1002;
          }
        }

        @media (max-width: 480px) {
          /* Hide full language names on very small screens — show abbreviations */
          .lang-toggle .lang-option::after {
            content: '';
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
