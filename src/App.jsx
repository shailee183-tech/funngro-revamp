import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TeenPage from './pages/TeenPage';
import BrandsPage from './pages/BrandsPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top or anchor handler
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        {/* Root redirects to /teen */}
        <Route path="/" element={<Navigate to="/teen" replace />} />
        
        {/* The two primary deliverable pages */}
        <Route path="/teen" element={<TeenPage />} />
        <Route path="/for-brands" element={<BrandsPage />} />
        
        {/* Custom 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
