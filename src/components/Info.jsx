import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Info = () => {
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
            <h2 className="section-title text-left">Visit Us</h2>
            <p className="info-desc">
              We welcome you to join our services. Please note that our current location and hours are temporary as we grow our community.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-circle">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>316 Tenth Ave S<br />Nampa, ID 83651</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-circle">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Service Hours</h4>
                  <p>Sunday 1pm – 3pm</p>
                  <span className="temporary-tag">Temporary Schedule</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-map-placeholder">
            <div className="map-card glass">
              <MapPin size={48} color="var(--primary)" />
              <p>Find us in Nampa, Idaho</p>
              <a
                href="https://www.google.com/maps/place/316+10th+Ave+S,+Nampa,+ID+83651"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Google Maps
              </a>
            </div>
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

        .info-map-placeholder {
          height: 400px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .map-card {
          padding: 2.5rem;
          border-radius: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .map-link {
          color: var(--primary);
          font-weight: 700;
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .info-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .info-map-placeholder {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Info;
