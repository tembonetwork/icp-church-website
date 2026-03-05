import React from 'react';

const Scripture = () => {
    return (
        <section className="scripture-section">
            <div className="container">
                <div className="scripture-card reveal">
                    <div className="quote-mark">"</div>
                    <blockquote>
                        Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."
                    </blockquote>
                    <cite>John 14:6</cite>
                </div>
            </div>

            <style jsx>{`
        .scripture-section {
          padding: 8rem 0;
          background: var(--primary);
          color: white;
          text-align: center;
        }

        .scripture-card {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .quote-mark {
          font-family: serif;
          font-size: 8rem;
          line-height: 0;
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        blockquote {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        cite {
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          display: block;
        }
      `}</style>
        </section>
    );
};

export default Scripture;
