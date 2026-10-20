import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import InfoModal from './InfoModal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (topic) => {
    setActiveModal(topic);
  };

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            {/* Brand Info */}
            <div className="footer-brand">
              <Link to="/teen" className="brand-link" aria-label="Funngro Home">
                <div className="brand-icon-wrapper" aria-hidden="true">
                  <span className="brand-icon-text">F</span>
                </div>
                <span className="brand-name">
                  Funn<span className="brand-name-accent">gro</span>
                </span>
              </Link>
              <p className="footer-desc">
                Funngro empowers teens and young adults across India to discover their potential through real-world brand opportunities, practical digital skills, and experiential learning.
              </p>
            </div>

            {/* Navigation Grid */}
            <div className="footer-nav-grid">
              {/* Earn Col */}
              <div className="footer-nav-col">
                <h4>Teen / Earn</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to="/teen#journey" className="footer-nav-link">
                      5-Step Journey
                    </Link>
                  </li>
                  <li>
                    <Link to="/teen#levels" className="footer-nav-link">
                      Growth Levels
                    </Link>
                  </li>
                  <li>
                    <Link to="/teen#principles" className="footer-nav-link">
                      Growth Principles
                    </Link>
                  </li>
                  <li>
                    <Link to="/teen#timeline" className="footer-nav-link">
                      Progression Stages
                    </Link>
                  </li>
                  <li>
                    <Link to="/teen#faq" className="footer-nav-link">
                      Teen FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Brands Col */}
              <div className="footer-nav-col">
                <h4>For Brands</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to="/for-brands" className="footer-nav-link">
                      Brands Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-brands#services" className="footer-nav-link">
                      12 Service Cards
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-brands#industries" className="footer-nav-link">
                      Industries Served
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-brands#outcomes" className="footer-nav-link">
                      Campaign Outcomes
                    </Link>
                  </li>
                  <li>
                    <Link to="/for-brands#contact" className="footer-nav-link">
                      Work With Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Col */}
              <div className="footer-nav-col">
                <h4>Company</h4>
                <ul className="footer-nav-links">
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('about')}
                    >
                      About Funngro
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('stories')}
                    >
                      Community Stories
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('shelancer')}
                    >
                      SheLancer Program
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('arcade')}
                    >
                      Learning Arcade
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('blog')}
                    >
                      Blog & Research
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal Col */}
              <div className="footer-nav-col">
                <h4>Legal & Trust</h4>
                <ul className="footer-nav-links">
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('terms')}
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('privacy')}
                    >
                      Privacy & Safety
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('terms')}
                    >
                      Guardian Consent
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-nav-link"
                      onClick={() => openModal('terms')}
                    >
                      Brand Terms
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom Strip */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Funngro Platform. All rights reserved. Built for India's next generation.</p>

            <div className="footer-socials" aria-label="Social media channels">
              <a
                href="https://www.linkedin.com/company/funngro"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Funngro on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/funngro"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Funngro on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@funngro"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Funngro on YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://x.com/funngro"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Funngro on X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Info Modal */}
      <InfoModal
        topic={activeModal}
        isOpen={Boolean(activeModal)}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
