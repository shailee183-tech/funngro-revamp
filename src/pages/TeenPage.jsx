import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import FAQ from '../components/FAQ';
import AppDownloadModal from '../components/AppDownloadModal';
import {
  teenHeroContent,
  fiveStepJourney,
  growthLevels,
  growthPrinciples,
  progressionTimeline,
  teenFaqs
} from '../data/teenContent';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Lightbulb } from 'lucide-react';

export default function TeenPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeTimelineStage, setActiveTimelineStage] = useState(1);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const currentStep = fiveStepJourney[activeStepIndex];

  return (
    <div className="page-wrapper">
      <SEO
        title="Teen Earning & Learning Journey — Funngro"
        description="Discover how young people across India earn their first income safely, complete verified brand projects, and develop real-world career skills."
        canonical="https://funngro-revamp-five.vercel.app/teen"
      />

      <Header />

      <main id="main-content">
        {/* ==================================================================
            SECTION A: HERO
            ================================================================== */}
        <section className="hero-section" aria-labelledby="hero-heading">
          {/* Ambient Glow */}
          <div
            className="ambient-glow"
            style={{
              top: '5%',
              left: '10%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(8, 183, 106, 0.22) 0%, transparent 70%)'
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <div className="hero-content">
                <div className="section-label">{teenHeroContent.label}</div>

                <h1 id="hero-heading" className="hero-title">
                  {teenHeroContent.titlePart1}
                  <span className="editorial-italic">{teenHeroContent.highlight}</span>
                  {teenHeroContent.titlePart2}
                </h1>

                <p className="hero-subtitle">{teenHeroContent.description}</p>

                <div className="hero-cta-group">
                  <Button
                    variant="primary"
                    onClick={() => setDownloadModalOpen(true)}
                    showArrow
                  >
                    {teenHeroContent.primaryCta}
                  </Button>

                  <Button
                    variant="secondary"
                    href="#journey"
                  >
                    {teenHeroContent.secondaryCta}
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="hero-badges-row">
                  {teenHeroContent.badges.map((b, idx) => (
                    <div key={idx} className="hero-badge-item">
                      <span className="hero-badge-title">
                        <CheckCircle2 size={16} color="var(--primary-emerald)" />
                        {b.label}
                      </span>
                      <span className="hero-badge-desc">{b.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            SECTION B: FIVE-STEP EARNING JOURNEY
            ================================================================== */}
        <section className="section section-alt" id="journey" aria-labelledby="journey-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Step-by-Step Experience"
                title="Your journey from beginner to verified contributor."
                highlight="in five simple steps."
                description="Funngro simplifies real-world work. Follow this guided flow from initial onboarding to verified compensation."
              />
            </Reveal>

            <div className="journey-container">
              {/* Interactive Steps List (Left) */}
              <div className="steps-list" role="tablist" aria-label="Earning Journey Steps">
                {fiveStepJourney.map((stepItem, index) => {
                  const isActive = activeStepIndex === index;
                  return (
                    <button
                      key={stepItem.step}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`step-panel-${index}`}
                      id={`step-tab-${index}`}
                      className={`step-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveStepIndex(index)}
                    >
                      <div className="step-badge">
                        0{stepItem.step}
                      </div>
                      <div className="step-nav-content">
                        <div className="step-nav-title">{stepItem.title}</div>
                        <div className="step-nav-tagline">{stepItem.tagline}</div>
                      </div>
                      <ChevronRight
                        size={18}
                        color={isActive ? 'var(--primary-emerald)' : 'var(--text-muted)'}
                        style={{
                          transform: isActive ? 'translateX(2px)' : 'none',
                          transition: 'transform var(--transition-fast)'
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Step Details Informational Card (Right) */}
              <div
                className="step-detail-card"
                role="tabpanel"
                id={`step-panel-${activeStepIndex}`}
                aria-labelledby={`step-tab-${activeStepIndex}`}
              >
                <div className="step-detail-header">
                  <span className="step-detail-phase">Phase 0{currentStep.step}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    {currentStep.tagline}
                  </span>
                </div>

                <h3 className="step-detail-title">{currentStep.title}</h3>
                <p className="step-detail-desc">{currentStep.description}</p>

                <div className="step-meta-grid">
                  <div className="step-meta-item">
                    <div className="step-meta-label">Primary Action</div>
                    <div className="step-meta-val">{currentStep.cardDetails.action}</div>
                  </div>
                  <div className="step-meta-item">
                    <div className="step-meta-label">Key Requirement</div>
                    <div className="step-meta-val">{currentStep.cardDetails.keyRequirement}</div>
                  </div>
                </div>

                <div className="step-tip-box">
                  <strong>Contributor Tip:</strong> {currentStep.cardDetails.tip}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION C: GROWTH AND OPPORTUNITY LEVELS
            ================================================================== */}
        <section className="section" id="levels" aria-labelledby="levels-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Opportunity Hierarchy"
                title="Structured tiers for sustainable"
                highlight="skill advancement"
                titleAfter="."
                description="Progress from introductory exploratory tasks to strategic campus leadership. Progression is merit-based, allowing you to build a standout portfolio."
                align="left"
              />
            </Reveal>

            <div className="levels-grid">
              {growthLevels.map((lvl, index) => (
                <Reveal key={lvl.id} delay={index * 120}>
                  <div className="card level-card" style={{ height: '100%' }}>
                    <div>
                      <div className="level-badge">{lvl.level}</div>
                      <h3 className="card-title" style={{ fontSize: 'var(--text-2xl)' }}>
                        {lvl.name}
                      </h3>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--emerald-light)', fontWeight: 600, marginBottom: '0.75rem' }}>
                        {lvl.badge} — {lvl.focus}
                      </p>
                      <p className="card-text">{lvl.description}</p>

                      <ul className="level-activities">
                        {lvl.activities.map((act, actIdx) => (
                          <li key={actIdx} className="level-activity-item">
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--text-main)' }}>Key Competencies:</strong> {lvl.skillFocus}
                      </div>
                      <div className="level-footer-note">{lvl.progressionNote}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION D: SIX GROWTH PRINCIPLES
            ================================================================== */}
        <section className="section section-alt" id="principles" aria-labelledby="principles-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Core Values"
                title="Six principles guiding"
                highlight="meaningful teen development"
                titleAfter="."
                description="We believe in transparency, ethical participation, and equipping young minds with practical digital capabilities."
              />
            </Reveal>

            <div className="principles-grid">
              {growthPrinciples.map((item, index) => (
                <Reveal key={item.number} delay={index * 80}>
                  <div className="card principle-card">
                    <span className="card-number">{item.number}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION E: SEVEN-STAGE PROGRESSION TIMELINE
            ================================================================== */}
        <section className="section" id="timeline" aria-labelledby="timeline-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Trajectory"
                title="A seven-stage roadmap from"
                highlight="first project to leadership"
                titleAfter="."
                description="Click any stage to highlight your potential path. Each milestone reflects increasing responsibility and recognized capability."
                align="center"
              />
            </Reveal>

            <div className="timeline-wrapper">
              <div className="timeline-line" aria-hidden="true" />

              {progressionTimeline.map((item) => {
                const isActive = activeTimelineStage === item.stage;
                return (
                  <div
                    key={item.stage}
                    className="timeline-item"
                    onClick={() => setActiveTimelineStage(item.stage)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className="timeline-node"
                      style={{
                        backgroundColor: isActive ? 'var(--primary-emerald)' : 'var(--bg-card)',
                        color: isActive ? '#07150D' : 'var(--primary-emerald)',
                        borderColor: isActive ? 'var(--emerald-light)' : 'var(--primary-emerald)'
                      }}
                      aria-hidden="true"
                    >
                      {item.stage}
                    </div>

                    <div
                      className="timeline-card"
                      style={{
                        borderColor: isActive ? 'var(--primary-emerald)' : 'var(--border-subtle)',
                        boxShadow: isActive ? '0 4px 20px rgba(8, 183, 106, 0.18)' : 'none'
                      }}
                    >
                      <div className="timeline-stage-tag">{item.category}</div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION F: FAQ ACCORDION
            ================================================================== */}
        <section className="section section-alt" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Questions & Answers"
                title="Everything you need to know about"
                highlight="joining Funngro"
                titleAfter="."
                description="Clear, verified answers to common questions about participation, payments, safety, and support."
                align="center"
              />
            </Reveal>

            <FAQ items={teenFaqs} />
          </div>
        </section>

        {/* ==================================================================
            SECTION G: FINAL CTA
            ================================================================== */}
        <section className="section" aria-labelledby="cta-heading">
          <div className="container">
            <Reveal>
              <div className="cta-banner">
                <div
                  className="ambient-glow"
                  style={{
                    top: '-50%',
                    left: '25%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(8, 183, 106, 0.3) 0%, transparent 70%)'
                  }}
                />

                <div className="cta-banner-content">
                  <div className="section-label" style={{ justifyContent: 'center' }}>
                    Take the First Step
                  </div>

                  <h2 id="cta-heading" className="cta-banner-title">
                    Ready to build your confidence and earn your{' '}
                    <span className="editorial-italic">first project income</span>?
                  </h2>

                  <p className="cta-banner-desc">
                    Join lakhs of young students across India exploring brand campaigns, learning real skills, and preparing for the future.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button
                      variant="primary"
                      onClick={() => setDownloadModalOpen(true)}
                      showArrow
                    >
                      Download Mobile App
                    </Button>
                    <Button
                      variant="secondary"
                      to="/for-brands"
                    >
                      Are You a Brand?
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
