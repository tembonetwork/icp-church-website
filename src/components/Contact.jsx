import React from 'react';
import { Mail, Phone, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="kinyarwanda-title">Twandikire cyangwa uduhamagare</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <Users size={24} />
            </div>
            <h3>Leadership Contact</h3>
            <div className="leader-info">
              <p><strong>Frederic Karangwa</strong></p>
              <a href="tel:2082303901" className="phone-link">(208) 230-3901</a>
            </div>
            <div className="leader-info" style={{ marginTop: '1.5rem' }}>
              <p><strong>Pierre Niyoyitungira</strong></p>
              <a href="tel:2083500496" className="phone-link">(208) 350-0496</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p>Send us an email for inquiries or prayers.</p>
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
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 900px;
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

        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(13, 103, 178, 0.05);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .leader-info p {
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .phone-link, .email-link {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
          transition: var(--transition);
        }

        .phone-link:hover, .email-link:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
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
