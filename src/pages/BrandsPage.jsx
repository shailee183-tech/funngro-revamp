import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import ContactForm from '../components/ContactForm';
import {
  brandHeroContent,
  brandStatistics,
  problemStatement,
  brandCategories,
  brandServices,
  industriesServed,
  campaignOutcomes
} from '../data/brandContent';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Building2 } from 'lucide-react';

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(industriesServed[0]);

  // Filter services by category
  const filteredServices = selectedCategory === 'all'
    ? brandServices
    : brandServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="page-wrapper">
      <SEO
        title="Youth Marketing & Campaign Services — Funngro for Brands"
        description="Collaborate with young India on authentic UGC, campus ambassador activations, product testing, and consumer feedback campaigns."
        canonical="https://funngro-revamp-five.vercel.app/for-brands"
      />

      <Header />

      <main id="main-content">
        {/* ==================================================================
            SECTION A: HERO
            ================================================================== */}
        <section className="hero-section" aria-labelledby="brand-hero-heading">
          {/* Ambient Glow */}
          <div
            className="ambient-glow"
            style={{
              top: '10%',
              right: '10%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(8, 183, 106, 0.2) 0%, transparent 70%)'
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <div className="hero-content">
                <div className="section-label">{brandHeroContent.label}</div>

                <h1 id="brand-hero-heading" className="hero-title">
                  {brandHeroContent.titlePart1}
                  <span className="editorial-italic">{brandHeroContent.highlight}</span>
                  {brandHeroContent.titlePart2}
                </h1>

                <p className="hero-subtitle">{brandHeroContent.description}</p>

                <div className="hero-cta-group">
                  <Button
                    variant="primary"
                    href="#contact"
                    showArrow
                  >
                    {brandHeroContent.primaryCta}
                  </Button>

                  <Button
                    variant="secondary"
                    href="#services"
                  >
                    {brandHeroContent.secondaryCta}
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* ==============================================================
                SECTION B: BRAND STATISTICS STRIP
                ============================================================== */}
            <Reveal delay={150}>
              <div className="stats-strip" role="region" aria-label="Brand Community Scale">
                {brandStatistics.map((stat) => (
                  <div key={stat.id} className="stat-item">
                    <Counter target={stat.target} unit={stat.unit} />
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-desc">{stat.description}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            SECTION C: PROBLEM STATEMENT
            ================================================================== */}
        <section className="section section-alt" id="problem" aria-labelledby="problem-heading">
          <div className="container">
            <Reveal>
              <div className="problem-grid">
                {/* Left: Editorial Rationale */}
                <div className="problem-editorial-col">
                  <div className="section-label">{problemStatement.label}</div>
                  <h2 id="problem-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem' }}>
                    {problemStatement.headline}
                  </h2>
                  <p style={{ fontSize: 'var(--text-lg)', color: 'var(--emerald-light)', marginBottom: '1.25rem' }}>
                    {problemStatement.subheadline}
                  </p>

                  {problemStatement.paragraphs.map((p, idx) => (
                    <p key={idx} style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* Right: Contrast Table */}
                <div className="problem-contrasts-table">
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                      Conventional Marketing vs. Funngro Action
                    </span>
                  </div>

                  {problemStatement.contrasts.map((row, idx) => (
                    <div key={idx} className="contrast-row">
                      <div className="contrast-box conventional">
                        <strong style={{ display: 'block', marginBottom: '0.2rem', color: '#F87171' }}>Legacy Approach</strong>
                        {row.conventional}
                      </div>
                      <div className="contrast-box funngro">
                        <strong style={{ display: 'block', marginBottom: '0.2rem', color: 'var(--emerald-light)' }}>Funngro Solution</strong>
                        {row.funngro}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            SECTION D & E: 12 BRAND SERVICE CARDS & INTERACTIVE EXPLORER
            ================================================================== */}
        <section className="section" id="services" aria-labelledby="services-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Capabilities Portfolio"
                title="Twelve specialized ways to activate"
                highlight="young audiences"
                titleAfter="."
                description="Choose an area of focus or explore our end-to-end capabilities across user-generated content, localized testing, and on-ground campus drives."
              />
            </Reveal>

            {/* Interactive Category Filter Bar */}
            <div
              className="services-filter-bar"
              role="tablist"
              aria-label="Filter Services by Category"
            >
              {brandCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-chip ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Service Cards Responsive Grid */}
            <div className="services-grid">
              {filteredServices.map((service, index) => (
                <Reveal key={service.id} delay={(index % 3) * 80}>
                  <div className="card service-card" style={{ height: '100%' }}>
                    <div>
                      <div className="service-card-header">
                        <span className="card-number">{service.number}</span>
                        <span className="service-category-pill">{service.categoryLabel}</span>
                      </div>

                      <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                        {service.name}
                      </h3>

                      <p className="card-text">{service.shortExplanation}</p>
                    </div>

                    <div>
                      <ul className="service-deliverables-list">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="service-deliverable-item">
                            <CheckCircle2 size={13} color="var(--primary-emerald)" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--emerald-light)' }}>
                        <strong>Outcome:</strong> {service.impactFocus}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION F: INDUSTRIES SERVED
            ================================================================== */}
        <section className="section section-alt" id="industries" aria-labelledby="industries-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Sector Versatility"
                title="Proven use-cases tailored for"
                highlight="every modern vertical"
                titleAfter="."
                description="Select an industry to inspect illustrative campaign frameworks designed for youth engagement and customer acquisition."
              />
            </Reveal>

            {/* Industry Filter Chips */}
            <div className="industries-chips-row" role="tablist" aria-label="Industries">
              {industriesServed.map((ind) => {
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`industry-chip ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedIndustry(ind)}
                  >
                    {ind.name}
                  </button>
                );
              })}
            </div>

            {/* Interactive Industry Showcase Panel */}
            <div className="industry-showcase-panel">
              <div className="industry-showcase-badge">
                <Building2 size={14} /> Illustrative Vertical Framework
              </div>

              <h3 className="industry-showcase-title">{selectedIndustry.name}</h3>
              <p className="industry-showcase-desc">{selectedIndustry.description}</p>

              <div className="industry-brief-box">
                <div className="industry-brief-label">Example Campaign Brief:</div>
                <div className="industry-brief-text">"{selectedIndustry.sampleBrief}"</div>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.65rem' }}>
                  Recommended Funngro Services for {selectedIndustry.name}:
                </span>
                <div className="industry-services-tags">
                  {selectedIndustry.suggestedServices.map((srvName, sIdx) => (
                    <span key={sIdx} className="industry-service-tag">
                      {srvName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION G: CAMPAIGN OUTCOMES (METRICS PANEL)
            ================================================================== */}
        <section className="section" id="outcomes" aria-labelledby="outcomes-heading">
          <div className="container">
            <Reveal>
              <SectionHeading
                label="Execution Standards"
                title="Structured performance without"
                highlight="agency ambiguity"
                titleAfter="."
                description="Our platform coordinates thousands of simultaneous deliverables with verifiable audit trails, rapid turnaround, and pan-India reach."
                align="center"
              />
            </Reveal>

            <div className="outcomes-grid">
              {campaignOutcomes.map((out, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="card outcome-card" style={{ height: '100%' }}>
                    <div className="outcome-metric-value">{out.metric}</div>
                    <div className="outcome-subtext">{out.subtext}</div>
                    <h3 className="outcome-title">{out.title}</h3>
                    <p className="outcome-desc">{out.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2rem' }}>
              Note: The metrics above illustrate standard operational turnaround benchmarks and platform capabilities. Actual campaign parameters vary by custom client brief.
            </p>
          </div>
        </section>

        {/* ==================================================================
            SECTION H: CONTACT SECTION
            ================================================================== */}
        <section className="section section-alt" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-container">
              {/* Contact Left Column */}
              <div className="contact-info-col">
                <Reveal>
                  <div className="section-label">Enterprise Solutions</div>
                  <h2 id="contact-heading" className="contact-headline">
                    Tell us what you're <span className="editorial-italic">trying to do</span>.
                  </h2>
                  <p>
                    Whether you are seeking 50 campus ambassadors, 100 product unboxing reels, or thousands of youth survey respondents, we customize execution to your business objectives.
                  </p>

                  <div className="contact-assurances">
                    <div className="contact-assurance-item">
                      <ShieldCheck size={20} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Enterprise Compliance</strong>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          Legally vetted guardian consent workflows and transparent terms of engagement.
                        </div>
                      </div>
                    </div>

                    <div className="contact-assurance-item">
                      <Zap size={20} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Rapid Pilot Deployment</strong>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          Initial deliverables submitted within 48 to 72 hours of campaign activation.
                        </div>
                      </div>
                    </div>

                    <div className="contact-assurance-item">
                      <Users size={20} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Dedicated Campaign Manager</strong>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          Direct point of contact for brief refinement, QA oversight, and reporting.
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Contact Right Column: Validated Form */}
              <div className="contact-form-col">
                <Reveal delay={150}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
