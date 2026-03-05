import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <a href="#" className="nav-logo">
          <img src="/logo.jpg" alt="ICP Logo" className="nav-logo-img" />
          <span className="logo-text">ICP</span>
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#beliefs" onClick={() => setIsMobileMenuOpen(false)}>Our Beliefs</a>
          <a href="#info" onClick={() => setIsMobileMenuOpen(false)}>Location & Hours</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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

        .nav-cta {
          background: var(--primary);
          color: white !important;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
        }

        .nav-cta:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
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
      `}</style>
    </nav>
  );
};

export default Navbar;
