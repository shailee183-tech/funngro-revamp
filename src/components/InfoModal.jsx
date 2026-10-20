import { useEffect, useRef } from 'react';
import { X, Sparkles, Shield, BookOpen, Users, Compass, FileText } from 'lucide-react';
import Button from './Button';

const INFO_CONTENT = {
  stories: {
    title: "Teen & Brand Stories",
    icon: Sparkles,
    badge: "Community Showcase",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Over 40 lakh teens across India have engaged in real-world brand tasks through Funngro. From high school students creating their first product review reels to college undergraduates managing nationwide campus ambassador drives, our community stories highlight the power of experiential learning.
        </p>
        <div style={{ backgroundColor: 'rgba(7, 21, 13, 0.6)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
          <h5 style={{ fontSize: 'var(--text-sm)', color: 'var(--emerald-light)', marginBottom: '0.25rem' }}>Real Projects, Real Growth</h5>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            Funngro teen contributors regularly develop confidence, communication skills, and financial literacy before stepping into higher education or formal employment.
          </p>
        </div>
      </>
    )
  },
  arcade: {
    title: "Funngro Arcade",
    icon: Compass,
    badge: "Interactive Learning",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          The Funngro Arcade is an experiential learning sandbox inside the mobile app designed to teach financial basics, digital ethics, copywriting, and marketing principles through gamified quests and micro-challenges.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Students can earn skill badges and unlock specialized brand certifications before taking on high-tier commercial briefs.
        </p>
      </>
    )
  },
  shelancer: {
    title: "SheLancer Initiative",
    icon: Users,
    badge: "Women in Leadership",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          SheLancer is Funngro's dedicated program for young women and girls, fostering early digital freelancing, technical skills, and economic independence.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Through curated mentorship circles, female student cohorts receive tailored guidance on coding, digital content creation, leadership, and public speaking in a safe, supportive environment.
        </p>
      </>
    )
  },
  about: {
    title: "About Funngro",
    icon: BookOpen,
    badge: "Our Mission",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Funngro was built with a clear purpose: to bridge the vast gap between academic theory and real-world commercial experience for India’s youth.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          We believe young people are inherently creative, digitally fluent, and eager to contribute. By providing a secure, compliant platform connecting them with ambitious brands, we help teens earn their first income and discover what they love doing.
        </p>
      </>
    )
  },
  blog: {
    title: "Funngro Insights & Blog",
    icon: BookOpen,
    badge: "Knowledge Hub",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Read educational articles on teen financial literacy, smart savings habits, freelancing basics, guideposts for parents, and how modern consumer brands collaborate ethically with Gen-Z.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          All guides are published in the official Funngro app and community newsletter.
        </p>
      </>
    )
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    badge: "Legal & Compliance",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Funngro operates under strict compliance with applicable child protection, digital platform, and labor regulations. All opportunities available on the platform represent project-based experiential tasks and freelance micro-engagements, not formal employment.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          Campaign compensation is determined strictly by the individual campaign brief accepted by the user and confirmed upon successful review of deliverables. No guaranteed income or continuous employment is implied.
        </p>
      </>
    )
  },
  privacy: {
    title: "Privacy Policy & Child Safety",
    icon: Shield,
    badge: "Data Protection",
    content: (
      <>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          We take the privacy and safety of young users with the highest level of responsibility. Funngro collects only the minimal data required for profile verification, task qualification, and payment dispersal.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
          For minors under the age of majority, verified parent or guardian consent is mandatory during onboarding. Personal identifiable information is never sold to third parties or used for untargeted behavioral tracking.
        </p>
      </>
    )
  }
};

export default function InfoModal({ topic, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !topic || !INFO_CONTENT[topic]) return null;

  const data = INFO_CONTENT[topic];
  const IconComponent = data.icon;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div className="modal-container" ref={modalRef}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close information dialog"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(8, 183, 106, 0.12)',
              border: '1px solid rgba(8, 183, 106, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-emerald)'
            }}
          >
            <IconComponent size={22} />
          </div>
          <div>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--emerald-light)'
              }}
            >
              {data.badge}
            </span>
            <h3 id="info-modal-title" style={{ fontSize: 'var(--text-xl)', color: 'var(--text-main)', marginTop: '0.15rem' }}>
              {data.title}
            </h3>
          </div>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>{data.content}</div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}
