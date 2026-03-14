import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="ICP Logo" />
              <span>ICP</span>
            </div>
            <p className="footer-desc">{t.footer.tagline}</p>
          </div>

          <div className="footer-links">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><a href="#">{t.nav.home}</a></li>
              <li><a href="#beliefs">{t.nav.beliefs}</a></li>
              <li><a href="#info">{t.nav.info}</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t.footer.contactInfo}</h4>
            <ul>
              <li><MapPin size={18} /> 316 Tenth Ave S, Nampa, ID 83651</li>
              <li><Phone size={18} /> <span>{t.contact.roles.frederic} Frederic — (208) 230-3901</span></li>
              <li><Phone size={18} /> <span>{t.contact.roles.pierre} Pierre — (208) 350-0496</span></li>
              <li><Mail size={18} /> Petecostchurch@yahoo.com</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0a192f;
          color: white;
          padding: 5rem 0 2rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: clamp(2rem, 4vw, 3rem);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .footer-logo span {
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .footer h4 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer ul li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .footer a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer a:hover {
          color: white;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
