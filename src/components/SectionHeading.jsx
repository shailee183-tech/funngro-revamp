export default function SectionHeading({
  label,
  title,
  highlight,
  titleAfter = '',
  description,
  align = 'left',
  level = 2,
  className = ''
}) {
  const HeadingTag = `h${level}`;

  return (
    <div className={`section-heading-wrapper ${align === 'center' ? 'center' : ''} ${className}`}>
      {label && <div className="section-label">{label}</div>}

      <HeadingTag className="section-title">
        {title}{' '}
        {highlight && <span className="editorial-italic">{highlight}</span>}
        {titleAfter}
      </HeadingTag>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
