import { useEffect } from 'react';

/**
 * SEO metadata manager component
 * Updates document title, meta descriptions, canonical link, and Open Graph tags dynamically
 */
export default function SEO({
  title = "Funngro — Teen Work & Brand Opportunities",
  description = "Empowering teens with real-world earning opportunities and connecting innovative brands with authentic young India.",
  canonical = "https://funngro-revamp.vercel.app/",
  ogType = "website"
}) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? `property="${name}"` : `name="${name}"`;
      let element = document.querySelector(`meta[${attr}]`);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta descriptions
    setMeta('description', description);
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:type', ogType, true);

    // Twitter
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonical, ogType]);

  return null;
}
