import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const Info = () => {
  const { t } = useLang();

  return (
    <section id="info" className="section bg-light">
      {/* Wave Divider Bottom */}
      <div className="divider divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="divider-fill"></path>
        </svg>
      </div>

      <div className="container info-container">
        <div className="info-grid">
          <div className="info-text">
            <h2 className="section-title text-left">{t.info.heading}</h2>
            <p className="info-desc">{t.info.desc}</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-circle">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>{t.info.locationLabel}</h4>
                  <p>316 Tenth Ave S<br />Nampa, ID 83651</p>
                  {t.info.tempLocationTag && <span className="temporary-tag">{t.info.tempLocationTag}</span>}
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-circle">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>{t.info.hoursLabel}</h4>
                  <p>{t.info.hours}</p>
                  <span className="temporary-tag">{t.info.tempTag}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-map-wrapper">
            <iframe
              className="info-map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.123!2d-116.5634!3d43.5784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5a0a6d1c3b3f%3A0x1b0c0c0c0c0c0c0c!2s316+10th+Ave+S%2C+Nampa%2C+ID+83651!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICP Church Location"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/316+10th+Ave+S,+Nampa,+ID+83651"
              target="_blank"
              rel="noopener noreferrer"
              className="map-open-link"
            >
              <MapPin size={16} />
              {t.info.openMaps}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-light {
          background-color: white;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .text-left {
          text-align: left;
        }

        .text-left::after {
          margin: 1rem 0 0;
        }

        .info-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-icon-circle {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item h4 {
          margin-bottom: 0.25rem;
        }

        .temporary-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          background: var(--accent);
          color: var(--primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-top: 0.5rem;
        }

        .info-map-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
        }

        .info-map-iframe {
          width: 100%;
          height: 400px;
          border: none;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .map-open-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          background: var(--primary);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          transition: var(--transition);
        }

        .map-open-link:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
          color: white;
        }

        @media (max-width: 992px) {
          .info-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .info-map-iframe {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Info;
