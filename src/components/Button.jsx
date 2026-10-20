import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel
}) {
  const baseClasses = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} className="btn-arrow-icon" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <a
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        {...(!isAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
