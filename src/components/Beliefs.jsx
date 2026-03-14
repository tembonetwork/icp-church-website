import React from 'react';
import { Book, Heart, User, Shield, Zap, Church, Clock } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const icons = [
  <Book className="belief-icon" />,
  <User className="belief-icon" />,
  <Heart className="belief-icon" />,
  <Zap className="belief-icon" />,
  <Church className="belief-icon" />,
  <Clock className="belief-icon" />,
];

const Beliefs = () => {
  const { t } = useLang();

  return (
    <section id="beliefs" className="section container">
      {/* Wave Divider Top */}
      <div className="divider divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="divider-fill"></path>
        </svg>
      </div>

      <div className="section-header">
        <h2 className="section-title">{t.beliefs.heading}</h2>
        <p className="kinyarwanda-title">{t.beliefs.subheading}</p>
        <p className="beliefs-intro">{t.beliefs.intro}</p>
      </div>

      <div className="beliefs-grid">
        {t.beliefs.cards.map((belief, index) => (
          <div key={index} className="belief-card">
            <div className="icon-wrapper">
              {icons[index]}
            </div>
            <h3>{belief.title}</h3>
            <p>{belief.text}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .kinyarwanda-title {
          font-style: italic;
          color: var(--accent);
          font-weight: 600;
          margin-top: -1rem;
          margin-bottom: 2rem;
          font-size: 1.2rem;
        }

        .beliefs-intro {
          max-width: 800px;
          margin: 0 auto;
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .beliefs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .belief-card {
          background: var(--surface);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          border: 1px solid var(--border);
        }

        .belief-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(13, 103, 178, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }

        .belief-card h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .belief-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Beliefs;
