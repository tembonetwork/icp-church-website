import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { t } = useLang();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <a
            href={import.meta.env.BASE_URL}
            className="hero-logo-wrapper"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, cursor: 'pointer', display: 'flex' }}
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="ICP Logo" className="hero-logo" />
            <div className="hero-logo-glow"></div>
          </a>
          <div className="non-denominational-tag">{t.hero.tag}</div>
          <h1>{t.hero.heading}</h1>
          <p className="subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#info" className="btn btn-primary">{t.hero.cta1}</a>
            <a href="#beliefs" className="btn btn-secondary">{t.hero.cta2}</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 92vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          background: radial-gradient(circle at top right, rgba(14, 107, 184, 0.08), transparent),
                      radial-gradient(circle at bottom left, rgba(255, 215, 0, 0.08), transparent);
          overflow: hidden;
          position: relative;
        }

        .hero-container {
          text-align: center;
          width: 100%;
        }

        .hero-logo-wrapper {
          position: relative;
          width: clamp(160px, 40vw, 250px);
          height: clamp(160px, 40vw, 250px);
          margin: 0 auto clamp(1.5rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s ease-out;
        }

        .hero-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
          border: 8px solid white;
          position: relative;
          z-index: 2;
        }

        .hero-logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: radial-gradient(circle, rgba(14, 107, 184, 0.2) 0%, transparent 70%);
          z-index: 1;
          filter: blur(20px);
        }

        .non-denominational-tag {
          display: inline-block;
          background: rgba(13, 103, 178, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(13, 103, 178, 0.2);
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          letter-spacing: -1.5px;
          color: var(--primary);
        }

        .subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto clamp(2rem, 5vw, 3rem);
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 14px;
          font-weight: 600;
          transition: var(--transition);
          display: inline-block;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 10px 30px rgba(13, 103, 178, 0.2);
        }

        .btn-primary:hover {
          background: var(--primary-light);
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(13, 103, 178, 0.4);
        }

        .btn-secondary {
          border: 2px solid var(--primary);
          color: var(--primary);
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(13, 103, 178, 0.05);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            padding: 0 1.5rem;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }

          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
