import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Home, Briefcase, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="page-wrapper">
      <SEO
        title="Page Not Found — Funngro"
        description="The page you were looking for could not be located. Explore opportunities for teens or enterprise youth campaign services."
        canonical="https://funngro-revamp-five.vercel.app/404"
      />

      <Header />

      <main className="not-found-wrapper">
        <div className="card not-found-card">
          <div className="not-found-code">404</div>
          <h1 style={{ fontSize: 'var(--text-3xl)', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Destination not found
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
            The link you clicked may have moved or no longer exists. Head back to one of our two primary platforms below:
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/teen" variant="primary" showArrow>
              Teen / Earn Page
            </Button>
            <Button to="/for-brands" variant="secondary">
              For Brands Page
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
