import React from 'react';
import { Mail, Phone, Users, Church } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLang();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.heading}</h2>
          <p className="contact-desc">{t.contact.desc}</p>
          {/* Only show Kinyarwanda subtitle when in Kinyarwanda mode */}
          {lang === 'rw' && (
            <p className="kinyarwanda-title">{t.contact.subheading}</p>
          )}
        </div>

        {/* ── Leadership Banner ── */}
        <div className="leadership-banner">
          <div className="leader-pill pastor-pill">
            <div className="leader-avatar pastor-avatar">
              <Church size={20} />
            </div>
            <div className="leader-text">
              <span className="leader-role">{t.contact.pastorRole}</span>
              <span className="leader-name">Enock Niyonsenga</span>
            </div>
          </div>

          <div className="leader-divider" />

          <div className="leader-pill">
            <div className="leader-avatar">
              <span>FK</span>
            </div>
            <div className="leader-text">
              <span className="leader-role">{t.contact.roles.frederic}</span>
              <span className="leader-name">Frederic Karangwa</span>
              <a href="tel:2082303901" className="leader-phone">(208) 230-3901</a>
            </div>
          </div>

          <div className="leader-divider" />

          <div className="leader-pill">
            <div className="leader-avatar">
              <span>PN</span>
            </div>
            <div className="leader-text">
              <span className="leader-role">{t.contact.roles.pierre}</span>
              <span className="leader-name">Pierre Niyoyitungira</span>
              <a href="tel:2083500496" className="leader-phone">(208) 350-0496</a>
            </div>
          </div>
        </div>

        {/* ── Contact Actions ── */}
        <div className="contact-actions">
          <a href="tel:2082303901" className="contact-action-btn">
            <Phone size={20} />
            <div>
              <span className="action-label">{t.contact.callUs}</span>
              <span className="action-sub">(208) 230-3901</span>
            </div>
          </a>
          <a href="mailto:Petecostchurch@yahoo.com" className="contact-action-btn contact-action-secondary">
            <Mail size={20} />
            <div>
              <span className="action-label">{t.contact.emailHeading}</span>
              <span className="action-sub">Petecostchurch@yahoo.com</span>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--background);
        }

        .contact-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-top: -0.5rem;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Leadership Banner ── */
        .leadership-banner {
          display: flex;
          align-items: stretch;
          background: white;
          border-radius: 24px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .leader-pill {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 2rem 2.5rem;
          transition: background 0.3s ease;
        }

        .leader-pill:hover {
          background: rgba(13, 103, 178, 0.02);
        }

        .pastor-pill {
          background: linear-gradient(135deg, #fffdf0, #fff);
        }

        .pastor-pill:hover {
          background: linear-gradient(135deg, #fff8d6, #fffdf0);
        }

        .leader-divider {
          width: 1px;
          background: var(--border);
          align-self: stretch;
          margin: 1.5rem 0;
        }

        .leader-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(13, 103, 178, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          flex-shrink: 0;
          border: 2px solid rgba(13, 103, 178, 0.12);
        }

        .pastor-avatar {
          background: rgba(255, 180, 0, 0.12);
          color: hsl(45, 100%, 35%);
          border-color: rgba(255, 180, 0, 0.25);
        }

        .leader-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .leader-role {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--primary);
        }

        .pastor-pill .leader-role {
          color: hsl(45, 100%, 32%);
        }

        .leader-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
        }

        .leader-phone {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.2s;
        }

        .leader-phone:hover {
          color: var(--primary);
        }

        /* ── Contact Action Buttons ── */
        .contact-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .contact-action-btn {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 2rem;
          background: var(--primary);
          color: white;
          border-radius: 16px;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 8px 24px rgba(13, 103, 178, 0.2);
        }

        .contact-action-btn:hover {
          background: var(--primary-light);
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(13, 103, 178, 0.3);
          color: white;
        }

        .contact-action-secondary {
          background: white;
          color: var(--primary);
          border: 2px solid var(--border);
          box-shadow: var(--shadow);
        }

        .contact-action-secondary:hover {
          background: rgba(13, 103, 178, 0.04);
          border-color: var(--primary);
          box-shadow: 0 14px 32px rgba(13, 103, 178, 0.1);
          color: var(--primary);
        }

        .action-label {
          display: block;
          font-weight: 700;
          font-size: 1rem;
        }

        .action-sub {
          display: block;
          font-size: 0.85rem;
          opacity: 0.75;
          margin-top: 0.1rem;
        }

        .contact-action-secondary .action-label,
        .contact-action-secondary .action-sub {
          color: var(--primary);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .leadership-banner {
            flex-direction: column;
          }

          .leader-divider {
            width: auto;
            height: 1px;
            margin: 0 2rem;
          }
        }

        @media (max-width: 600px) {
          .contact-actions {
            grid-template-columns: 1fr;
          }

          .leader-pill {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
