import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  as: Component = 'div'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const style = delay > 0 && !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <Component
      ref={elementRef}
      className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
