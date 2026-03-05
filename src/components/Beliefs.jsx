import React from 'react';
import { Book, Heart, User, Shield, Zap, Church, Clock } from 'lucide-react';

const Beliefs = () => {
  const beliefsData = [
    {
      icon: <Book className="belief-icon" />,
      title: "The Authority of Scripture",
      text: "We believe the Holy Bible, consisting of both the Old and New Testaments, is the divinely inspired and authoritative Word of God. Its truth forms the foundation of our faith (2 Peter 1:2; Revelation 1:3)."
    },
    {
      icon: <User className="belief-icon" />,
      title: "Jesus Christ",
      text: "We believe that Jesus Christ is the Son of God, born of the Virgin Mary, lived a sinless life, and offered Himself as the perfect and final sacrifice for our sins."
    },
    {
      icon: <Heart className="belief-icon" />,
      title: "Salvation & New Birth",
      text: "Salvation is found only through faith in Jesus Christ. This transformation, known as being born again, requires repentance, faith, and commitment to His Word."
    },
    {
      icon: <Zap className="belief-icon" />,
      title: "The Holy Spirit",
      text: "We believe in the baptism of the Holy Spirit, which empowers believers for holy living and effective service, equipping the church with spiritual gifts."
    },
    {
      icon: <Church className="belief-icon" />,
      title: "The Church & Ministry",
      text: "We believe in the active calling of ministry—discipleship, prophecy, and leadership—to gather believers and continue the ministry of Christ."
    },
    {
      icon: <Clock className="belief-icon" />,
      title: "Eternal Destiny",
      text: "We believe the world will come to an end according to God’s sovereign plan. Those in Christ will enter eternal rest, while those who reject Him face eternal separation."
    }
  ];

  return (
    <section id="beliefs" className="section container">
      {/* Wave Divider Top */}
      <div className="divider divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="divider-fill"></path>
        </svg>
      </div>

      <div className="section-header">
        <h2 className="section-title">Our Beliefs</h2>
        <p className="kinyarwanda-title">Abo turi bo n’imyizerere</p>
        <p className="beliefs-intro">
          Our beliefs are firmly grounded in the Holy Bible, through which followers of Christ encounter the sincere and unfailing love of God.
        </p>
      </div>

      <div className="beliefs-grid">
        {beliefsData.map((belief, index) => (
          <div key={index} className="belief-card">
            <div className="icon-wrapper">
              {belief.icon}
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
