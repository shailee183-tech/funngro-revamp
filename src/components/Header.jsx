import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Check, Sparkles } from 'lucide-react';
import Button from './Button';
import AppDownloadModal from './AppDownloadModal';
import InfoModal from './InfoModal';

const LANGUAGES = [
  { code: 'en', label: 'English (IN)' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'te', label: 'తెలుగు (Telugu)' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [activeInfoTopic, setActiveInfoTopic] = useState(null);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const openInfo = (topic) => {
    setMobileMenuOpen(false);
    setActiveInfoTopic(topic);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar" role="region" aria-label="Platform Announcement">
        <span className="announcement-badge">
          <Sparkles size={11} /> Platform Notice
        </span>
        <span className="announcement-text">
          Connecting young minds with verified brand projects & real-world learning across India.
        </span>
        <button
          className="announcement-link"
          onClick={() => setActiveInfoTopic('about')}
        >
          Learn more
        </button>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header" role="banner">
        <div className="container header-container">
          {/* Brand Wordmark & Icon */}
          <Link to="/teen" className="brand-link" aria-label="Funngro Home">
            <div className="brand-icon-wrapper" aria-hidden="true">
              <span className="brand-icon-text">F</span>
            </div>
            <span className="brand-name">
              Funn<span className="brand-name-accent">gro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink
              to="/teen"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Earn
            </NavLink>

            <button
              type="button"
              className="nav-link-subtle"
              onClick={() => openInfo('stories')}
            >
              Stories
            </button>

            <NavLink
              to="/for-brands"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              For Brands
            </NavLink>

            <button
              type="button"
              className="nav-link-subtle"
              onClick={() => openInfo('arcade')}
            >
              Arcade
            </button>

            <button
              type="button"
              className="nav-link-subtle"
              onClick={() => openInfo('shelancer')}
            >
              SheLancer
            </button>

            <button
              type="button"
              className="nav-link-subtle"
              onClick={() => openInfo('about')}
            >
              About
            </button>

            <button
              type="button"
              className="nav-link-subtle"
              onClick={() => openInfo('blog')}
            >
              Blog
            </button>
          </nav>

          {/* Header Right Actions */}
          <div className="header-actions">
            {/* Language Selector UI */}
            <div className="lang-selector-container">
              <button
                type="button"
                className="lang-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                aria-label="Select Language"
              >
                <span>{selectedLang.code.toUpperCase()}</span>
                <ChevronDown size={14} />
              </button>

              {langMenuOpen && (
                <div className="lang-dropdown" role="listbox">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option ${selectedLang.code === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangMenuOpen(false);
                      }}
                      role="option"
                      aria-selected={selectedLang.code === lang.code}
                    >
                      <span>{lang.label}</span>
                      {selectedLang.code === lang.code && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Download CTA Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => setDownloadModalOpen(true)}
              ariaLabel="Download Funngro Mobile App"
            >
              Download App
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="mobile-header">
            <Link
              to="/teen"
              className="brand-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="brand-icon-wrapper" aria-hidden="true">
                <span className="brand-icon-text">F</span>
              </div>
              <span className="brand-name">
                Funn<span className="brand-name-accent">gro</span>
              </span>
            </Link>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            <li>
              <NavLink
                to="/teen"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Earn (Teen)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/for-brands"
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Brands
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                onClick={() => openInfo('stories')}
              >
                Stories
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                onClick={() => openInfo('arcade')}
              >
                Arcade
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                onClick={() => openInfo('shelancer')}
              >
                SheLancer
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                onClick={() => openInfo('about')}
              >
                About Funngro
              </button>
            </li>
            <li>
              <button
                type="button"
                className="mobile-nav-link"
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none' }}
                onClick={() => openInfo('blog')}
              >
                Blog & Insights
              </button>
            </li>
          </ul>

          <div className="mobile-actions">
            <Button
              variant="primary"
              className="btn-full"
              onClick={() => {
                setMobileMenuOpen(false);
                setDownloadModalOpen(true);
              }}
            >
              Download Mobile App
            </Button>
          </div>
        </div>
      )}

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Generic Information Disclosure Modal */}
      <InfoModal
        topic={activeInfoTopic}
        isOpen={Boolean(activeInfoTopic)}
        onClose={() => setActiveInfoTopic(null)}
      />
    </>
  );
}
