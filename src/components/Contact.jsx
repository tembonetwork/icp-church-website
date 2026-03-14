import React from 'react';
import { Mail, Phone, Users, Church } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <h2 className="section-title">{t.contact.heading}</h2>
        <p className="kinyarwanda-title">{t.contact.subheading}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-cards">

          {/* Pastor — display only, no contact */}
          <div className="contact-card pastor-card">
            <div className="contact-icon pastor-icon">
              <Church size={24} />
            </div>
            <span className="role-badge pastor-badge">{t.contact.pastorRole}</span>
            <h3>Enock Niyonsenga</h3>
          </div>

          {/* Leadership Contact */}
          <div className="contact-card">
            <div className="contact-icon">
              <Users size={24} />
            </div>
            <h3>{t.contact.leadershipHeading}</h3>
            <div className="leader-info">
              <span className="role-badge">{t.contact.roles.frederic}</span>
              <p><strong>Frederic Karangwa</strong></p>
              <a href="tel:2082303901" className="phone-link">(208) 230-3901</a>
            </div>
            <div className="leader-info" style={{ marginTop: '1.5rem' }}>
              <span className="role-badge">{t.contact.roles.pierre}</span>
              <p><strong>Pierre Niyoyitungira</strong></p>
              <a href="tel:2083500496" className="phone-link">(208) 350-0496</a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <h3>{t.contact.emailHeading}</h3>
            <p>{t.contact.emailDesc}</p>
            <a href="mailto:Petecostchurch@yahoo.com" className="email-link">Petecostchurch@yahoo.com</a>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .contact-info-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1100px;
        }

        .contact-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Pastor card — slightly elevated */
        .pastor-card {
          border-color: var(--accent);
          background: linear-gradient(135deg, #fffdf0, #fff);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(13, 103, 178, 0.05);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .pastor-icon {
          background: rgba(255, 180, 0, 0.15);
          color: hsl(45, 100%, 38%);
        }

        /* Role badge */
        .role-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(13, 103, 178, 0.08);
          color: var(--primary);
          padding: 0.2rem 0.65rem;
          border-radius: 50px;
          margin-bottom: 0.5rem;
          border: 1px solid rgba(13, 103, 178, 0.15);
        }

        .pastor-badge {
          background: rgba(255, 180, 0, 0.15);
          color: hsl(45, 100%, 30%);
          border-color: rgba(255, 180, 0, 0.3);
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
        }

        .leader-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .leader-info p {
          margin-bottom: 0.25rem;
          font-size: 1.05rem;
        }

        .phone-link, .email-link {
          color: var(--primary);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: var(--transition);
        }

        .phone-link:hover, .email-link:hover {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .contact-info-cards {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-info-cards {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
